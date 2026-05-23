import Header from '../components/Header.jsx'
import { itineraryStops } from '../data/mockData.js'

export default function ItineraryPage() {
  return (
    <>
      <Header eyebrow="Itinerary" title="Perfect Evening in Prishtina">
        A demo route that can later connect planner output, map stops, offers, and +1 matches.
      </Header>
      <ol className="space-y-3">
        {itineraryStops.map((stop, index) => (
          <li key={stop} className="flex gap-3 rounded-md border border-ink/10 bg-white p-4">
            <span className="grid size-8 shrink-0 place-items-center rounded-md bg-sun font-black">{index + 1}</span>
            <p className="pt-1 text-sm font-bold leading-6">{stop}</p>
          </li>
        ))}
      </ol>
    </>
  )
}
