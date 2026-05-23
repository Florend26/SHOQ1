import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav.jsx'

export default function AppShell() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-[#070707] text-white shadow-2xl shadow-black/40">
      <main className="flex-1 px-4 pb-28 pt-4">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
