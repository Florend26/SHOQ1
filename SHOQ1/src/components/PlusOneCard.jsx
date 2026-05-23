import { BadgeCheck } from 'lucide-react'

export default function PlusOneCard({ person }) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-white p-4 text-zinc-950 shadow-xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className={`size-14 shrink-0 overflow-hidden rounded-full bg-gradient-to-br ${person.avatarFallback}`}>
            <img src={person.avatar} alt={`${person.name} avatar`} className="h-full w-full rounded-full object-cover" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="truncate font-black">{person.name}</h2>
              <BadgeCheck size={15} className="shrink-0 text-shoq-red" aria-hidden="true" />
            </div>
            <p className="truncate text-sm text-zinc-500">{person.label}</p>
          </div>
        </div>
        <span className="shrink-0 text-lg font-black text-shoq-red">{person.matchLabel ?? `${person.match}%`}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {person.interests.map((interest) => (
          <span key={interest} className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-black text-zinc-600">
            {interest}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {person.languages.map((language) => (
            <span key={language} className="rounded-lg bg-shoq-red/10 px-2 py-1 text-[10px] font-black text-shoq-red">
              {language}
            </span>
          ))}
          <span className="rounded-lg bg-zinc-950 px-2 py-1 text-[10px] font-black text-white">{person.badge}</span>
        </div>
        <button type="button" className="rounded-xl bg-cyan-300 px-3 py-2 text-xs font-black text-zinc-950">
          {person.cta}
        </button>
      </div>
    </article>
  )
}
