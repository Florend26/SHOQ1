import { useState } from 'react'
import ActivityCard from '../components/ActivityCard.jsx'
import Header from '../components/Header.jsx'
import PlusOneCard from '../components/PlusOneCard.jsx'
import { getPlannerRecommendations } from '../services/plannerService.js'

export default function PlannerPage() {
  const [formValues, setFormValues] = useState({
    city: 'Prishtina',
    mood: 'social',
    budget: 'medium',
    prompt: '',
  })
  const [plan, setPlan] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    setPlan(await getPlannerRecommendations(formValues))
  }

  function updateField(event) {
    setFormValues((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  return (
    <>
      <Header eyebrow="AI Planner" title="Plan by mood">
        A form-first planner with an optional prompt and mock recommendation scoring.
      </Header>

      <form onSubmit={handleSubmit} className="space-y-3 rounded-md border border-ink/10 bg-white p-4">
        <label className="block text-sm font-bold">
          City
          <select name="city" value={formValues.city} onChange={updateField} className="mt-2 w-full rounded-md border border-ink/15 p-3">
            <option>Prishtina</option>
            <option>Prizren</option>
            <option>Peja</option>
          </select>
        </label>
        <label className="block text-sm font-bold">
          Mood
          <select name="mood" value={formValues.mood} onChange={updateField} className="mt-2 w-full rounded-md border border-ink/15 p-3">
            <option value="social">Social</option>
            <option value="culture">Culture</option>
            <option value="nature">Nature</option>
          </select>
        </label>
        <label className="block text-sm font-bold">
          Budget
          <select name="budget" value={formValues.budget} onChange={updateField} className="mt-2 w-full rounded-md border border-ink/15 p-3">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="treat">Treat myself</option>
          </select>
        </label>
        <label className="block text-sm font-bold">
          Optional prompt
          <textarea
            name="prompt"
            value={formValues.prompt}
            onChange={updateField}
            placeholder="Example: I want a relaxed evening with locals and live music."
            className="mt-2 min-h-24 w-full rounded-md border border-ink/15 p-3"
          />
        </label>
        <button className="min-h-12 w-full rounded-md bg-river font-black text-white">Generate mock plan</button>
      </form>

      {plan ? (
        <section className="mt-5 space-y-3">
          <div>
            <h2 className="text-xl font-black">{plan.title}</h2>
            <p className="text-sm leading-6 text-ink/70">{plan.summary}</p>
          </div>
          {plan.activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
          {plan.matches.map((person) => (
            <PlusOneCard key={person.id} person={person} />
          ))}
        </section>
      ) : null}
    </>
  )
}
