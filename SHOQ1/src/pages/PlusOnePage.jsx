import Header from '../components/Header.jsx'
import PlusOneCard from '../components/PlusOneCard.jsx'
import { plusOnes } from '../data/mockData.js'

export default function PlusOnePage() {
  return (
    <>
      <Header eyebrow="Find your +1" title="People and group plans">
        Placeholder cards for local buddies, travelers, and open group plans with similar vibes.
      </Header>
      <div className="space-y-3">
        {plusOnes.map((person) => (
          <PlusOneCard key={person.id} person={person} />
        ))}
      </div>
    </>
  )
}
