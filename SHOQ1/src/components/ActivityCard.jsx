import { ArrowRight, Euro, MapPin, UsersRound } from 'lucide-react'

export default function ActivityCard({ activity }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/8 shadow-xl shadow-black/10">
      <div className="relative h-36">
        <img src={activity.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-shoq-red px-3 py-1 text-[10px] font-black uppercase text-white">
          {activity.type}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-zinc-950">
          {activity.score}%
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-black tracking-tight text-white">{activity.title}</h2>
        <p className="mt-1 text-sm leading-6 text-zinc-400">{activity.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-zinc-300">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-shoq-red" aria-hidden="true" />
            {activity.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Euro size={14} className="text-shoq-red" aria-hidden="true" />
            {activity.budget}
          </span>
          <span className="flex items-center gap-1.5">
            <UsersRound size={14} className="text-shoq-red" aria-hidden="true" />
            {activity.people}
          </span>
          <span className="truncate text-zinc-500">{activity.vibe}</span>
        </div>
        <button type="button" className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-white text-sm font-black text-zinc-950">
          Join
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
