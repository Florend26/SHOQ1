import { activities, plusOnes } from '../data/mockData.js'

export async function getPlannerRecommendations(formValues) {
  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    return createMockPlan(formValues)
  }

  // Placeholder API structure for the hackathon demo. Keep real calls behind
  // a backend proxy before production so API keys are not exposed in the browser.
  return createMockPlan(formValues)
}

function createMockPlan({ city = 'Prishtina', mood = 'social', budget = 'medium', prompt = '' }) {
  const scoredActivities = activities.map((activity, index) => ({
    ...activity,
    score: Math.max(70, activity.score - index * 4 + (mood === 'social' ? 3 : 0)),
  }))

  return {
    title: `Your ${mood} ${city} plan`,
    summary: prompt
      ? `Built around: "${prompt}"`
      : `A ${budget}-budget route with flexible stops and easy +1 matching.`,
    activities: scoredActivities,
    matches: plusOnes.slice(0, 2),
  }
}
