import { Link } from 'react-router-dom'
import ActivityCard from '../components/ActivityCard.jsx'
import Header from '../components/Header.jsx'
import PlusOneCard from '../components/PlusOneCard.jsx'
import { activities, plusOnes } from '../data/mockData.js'

export default function HomePage() {
  return (
    <>
      <Header eyebrow="Today in Kosovo" title="What is your vibe?">
        Start with a smart plan, browse live activity ideas, or find someone to join you.
      </Header>

      <Link to="/planner" className="mb-5 block rounded-md bg-ink p-5 text-white">
        <p className="text-sm font-bold text-sun">AI Planner</p>
        <h2 className="mt-2 text-2xl font-black">Build a Kosovo day plan</h2>
        <p className="mt-2 text-sm leading-6 text-white/75">Mock scoring now, OpenAI-ready structure later.</p>
      </Link>

      <section className="mb-6">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-xl font-black">Activity feed</h2>
          <Link to="/map" className="text-sm font-bold text-river">Map</Link>
        </div>
        <div className="space-y-3">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-xl font-black">Find your +1</h2>
          <Link to="/plus-one" className="text-sm font-bold text-river">See all</Link>
        </div>
        <PlusOneCard person={plusOnes[0]} />
      </section>
    </>
  )
}
