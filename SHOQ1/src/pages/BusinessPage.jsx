import Header from '../components/Header.jsx'
import { businessOffers } from '../data/mockData.js'

export default function BusinessPage() {
  return (
    <>
      <Header eyebrow="Business profile" title="Partner placeholder">
        Simple business profile, offers, events, and onboarding form placeholder.
      </Header>

      <section className="mb-5 rounded-md bg-plum p-5 text-white">
        <h2 className="text-2xl font-black">Dit e Nat</h2>
        <p className="mt-2 text-sm leading-6 text-white/75">Cafe, bookshop, cultural stop · Prishtina</p>
      </section>

      <section className="space-y-3">
        {businessOffers.map((offer) => (
          <article key={offer.id} className="rounded-md border border-ink/10 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-river">{offer.business}</p>
            <h2 className="mt-1 font-black">{offer.title}</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">{offer.detail}</p>
          </article>
        ))}
      </section>

      <form className="mt-5 space-y-3 rounded-md border border-ink/10 bg-white p-4">
        <h2 className="text-lg font-black">Business onboarding</h2>
        <input className="w-full rounded-md border border-ink/15 p-3" placeholder="Business name" />
        <input className="w-full rounded-md border border-ink/15 p-3" placeholder="Offer or event idea" />
        <button type="button" className="min-h-12 w-full rounded-md bg-river font-black text-white">
          Save mock profile
        </button>
      </form>
    </>
  )
}
