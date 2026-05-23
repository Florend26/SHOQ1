import { Bot, Home, Map, User, UsersRound } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/home', label: 'Home', Icon: Home },
  { to: '/map', label: 'Map', Icon: Map },
  { to: '/plus-one', label: '+1', Icon: UsersRound },
  { to: '/planner', label: 'Planner', Icon: Bot },
  { to: '/itinerary', label: 'Profile', Icon: User },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-20 grid w-full max-w-md -translate-x-1/2 grid-cols-5 border-t border-white/10 bg-black/95 px-2 py-2 backdrop-blur">
      {items.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-black transition ${
              isActive ? 'bg-cyan-300 text-zinc-950' : 'text-zinc-500 hover:text-white'
            }`
          }
        >
          <Icon size={20} aria-hidden="true" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
