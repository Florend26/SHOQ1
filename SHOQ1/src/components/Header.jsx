import Logo from './Logo.jsx'

export default function Header({ eyebrow, title, children }) {
  return (
    <header className="mb-5 rounded-[1.5rem] border border-white/10 bg-black p-4 shadow-xl shadow-black/20">
      <div className="mb-5 flex items-center justify-between gap-3">
        <Logo variant="white" className="h-7" />
        <span className="rounded-full border border-shoq-red/30 bg-shoq-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-shoq-red">
          Beta
        </span>
      </div>
      <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
      <h1 className="text-3xl font-black leading-tight tracking-tight text-white">{title}</h1>
      {children ? <p className="mt-2 text-sm font-semibold leading-6 text-zinc-400">{children}</p> : null}
    </header>
  )
}
