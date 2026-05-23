import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Bot,
  CalendarDays,
  Camera,
  Check,
  ChevronRight,
  Clock3,
  Compass,
  Euro,
  Flag,
  Globe2,
  Home,
  ImagePlus,
  Languages,
  Mail,
  Map,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Smartphone,
  Upload,
  User,
  UserCheck,
  UsersRound,
  WalletCards,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navTargets = ['app-preview', 'live-feed', 'ai-planner', 'safety', 'contact']

const pageCopy = {
  EN: {
    navItems: ['App preview', 'Live feed', 'AI planner', 'Safety', 'Contact'],
    languageToast: 'Language switched to English',
    brandTag: 'Kosovo social discovery',
    heroPill: 'Welcome to Kosovo',
    heroLead:
      'SHOQ1 helps tourists, students, and locals find activities, places, communities, and budget-friendly people to explore with.',
    heroMicro: 'SHOQ means friend in Albanian. The 1 means one more friend for your Kosovo day.',
    heroTitle: 'Discover Kosovo with your',
    heroSubtitle: 'See places, events, and new friends in one living guide.',
    primaryCta: 'Reserve early access',
    secondaryCta: 'Preview prototype',
    soon: 'Coming soon in your hands',
    appStore: 'App Store',
    playStore: 'Play Store',
    stats: [
      ['12+', 'Kosovo cities'],
      ['AI', 'daily plans'],
      ['+1', 'social matches'],
    ],
    problem: {
      eyebrow: 'Problem',
      title: 'Kosovo plans are scattered across chats, old blogs, and last-minute guesses.',
      body: 'Tourists, students, and locals need a simple way to find what to do, where to go, and who is open to joining.',
    },
    solution: {
      eyebrow: 'Solution',
      title: 'SHOQ1 turns preferences into smart activities, map pins, and friendly +1 connections.',
      body: 'SHOQ means friend in Albanian. The 1 means one more friend for your Kosovo day.',
    },
    waitlist: {
      title: 'Reserve your spot in the friendlier Kosovo app.',
      eyebrow: 'Waitlist onboarding',
      heading: 'Start like the real app.',
      micro: 'Choose your role, vibe, and reserve your place in SHOQ1.',
      roleLabel: 'Choose your role',
      vibeLabel: 'Pick your vibe',
      emailPlaceholder: 'your@email.com',
      button: 'Reserve my spot',
      roles: ['Tourist', 'Student', 'Local'],
      vibes: ['Food', 'Culture', 'Hiking', 'Nightlife', 'Study', 'Roadtrip'],
      reserved: 'Reserved preview spot',
      missingEmail: 'Add an email to reserve your preview spot',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contact Us!',
      subtitle: "We'd love to hear from you!",
      email: 'info@shoq1.com',
      phone: '+383 49 123 123',
      brand: 'SHOQ1',
      website: 'shoq1.app',
    },
    footer: 'SHOQ1 · Kosovo social discovery · +1 more friend',
  },
  SQ: {
    navItems: ['Pamja e appit', 'Feed live', 'Planeri AI', 'Siguria', 'Kontakt'],
    languageToast: 'Gjuha u ndërrua në shqip',
    brandTag: 'Zbulim social në Kosovë',
    heroPill: 'Mirë se vini në Kosovë',
    heroLead:
      'SHOQ1 ndihmon turistët, studentët dhe vendasit të gjejnë aktivitete, vende, komunitete dhe shoqëri me buxhet të arsyeshëm.',
    heroMicro: 'SHOQ do të thotë mik. 1 do të thotë edhe një shok më shumë për ditën tënde në Kosovë.',
    heroTitle: 'Zbulo Kosovën me',
    heroSubtitle: 'Shiko vende, evente dhe shokë të rinj në një guidë të gjallë.',
    primaryCta: 'Rezervo qasjen e hershme',
    secondaryCta: 'Shiko prototipin',
    soon: 'Së shpejti në duart e tua',
    appStore: 'App Store',
    playStore: 'Play Store',
    stats: [
      ['12+', 'qytete në Kosovë'],
      ['AI', 'plane ditore'],
      ['+1', 'përputhje sociale'],
    ],
    problem: {
      eyebrow: 'Problemi',
      title: 'Planet në Kosovë shpërndahen mes chat-eve, blogjeve të vjetra dhe vendimeve në minutën e fundit.',
      body: 'Turistët, studentët dhe vendasit kanë nevojë për një mënyrë të thjeshtë për të gjetur çfarë të bëjnë, ku të shkojnë dhe kush dëshiron t’i bashkohet.',
    },
    solution: {
      eyebrow: 'Zgjidhja',
      title: 'SHOQ1 i kthen preferencat në aktivitete të zgjuara, pika në hartë dhe lidhje miqësore +1.',
      body: 'SHOQ do të thotë mik. 1 do të thotë edhe një shok më shumë për ditën tënde në Kosovë.',
    },
    waitlist: {
      title: 'Rezervo vendin në appin më miqësor për Kosovën.',
      eyebrow: 'Onboarding për listën e pritjes',
      heading: 'Fillo si në appin e vërtetë.',
      micro: 'Zgjedh rolin, stilin dhe rezervo vendin tënd në SHOQ1.',
      roleLabel: 'Zgjedh rolin',
      vibeLabel: 'Zgjedh stilin',
      emailPlaceholder: 'emaili@yt.com',
      button: 'Rezervo vendin tim',
      roles: ['Turist', 'Student', 'Vendas'],
      vibes: ['Ushqim', 'Kulturë', 'Hiking', 'Nightlife', 'Studim', 'Roadtrip'],
      reserved: 'U rezervua vendi i provës',
      missingEmail: 'Shto emailin për të rezervuar vendin',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Na kontaktoni!',
      subtitle: 'Do të donim të dëgjonim nga ju!',
      email: 'info@shoq1.com',
      phone: '+383 49 123 123',
      brand: 'SHOQ1',
      website: 'shoq1.app',
    },
    footer: 'SHOQ1 · Zbulim social në Kosovë · edhe një shok më shumë',
  },
}

const heroSlides = [
  ['/images/prizren.jpg', 'Prizren old town'],
  ['/images/rugova.jpg', 'Rugova Canyon'],
  ['/images/prishtina.jpg', 'Prishtina city'],
  ['/images/germia-park.jpg', 'Germia Park'],
]

const stats = [
  ['12+', 'Kosovo cities'],
  ['AI', 'daily plans'],
  ['+1', 'social matches'],
]

const activities = [
  {
    title: 'Prizren sunset walk',
    location: 'Prizren',
    match: '92%',
    budget: '€5-10',
    people: '3 joining',
    time: 'Today 18:30',
    image: '/images/prizren.jpg',
    tag: 'Culture',
  },
  {
    title: 'Coffee meetup in Prishtina',
    location: 'Prishtina',
    match: '88%',
    budget: '€3-6',
    people: '5 joining',
    time: 'Today 16:00',
    image: '/images/balkan-coffee.jpg',
    tag: 'Social',
  },
  {
    title: 'Rugova hiking group',
    location: 'Peja',
    match: '95%',
    budget: '€10-15',
    people: '4 joining',
    time: 'Sat 09:00',
    image: '/images/rugova.jpg',
    tag: 'Hiking',
  },
  {
    title: 'Student night at Soma',
    location: 'Prishtina',
    match: '84%',
    budget: '€8-12',
    people: '6 joining',
    time: 'Tonight 20:30',
    image: '/images/kosovo-cafe.jpg',
    tag: 'Nightlife',
  },
]

const matches = [
  {
    name: 'Arta',
    score: '94% match',
    interests: ['Culture', 'Coffee', 'Photography'],
    languages: ['AL', 'EN'],
    badge: 'Verified',
    cta: 'Connect',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Arta',
    avatarFallback: 'from-rose-500 via-orange-300 to-zinc-900',
  },
  {
    name: 'Ben',
    score: '89% match',
    interests: ['Hiking', 'Food', 'Roadtrips'],
    languages: ['EN'],
    badge: 'Tourist',
    cta: 'Connect',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Ben',
    avatarFallback: 'from-emerald-400 via-sky-400 to-zinc-900',
  },
  {
    name: 'Prishtina Nomads',
    score: 'Open group',
    interests: ['Events', 'Networking', 'Nightlife'],
    languages: ['AL', 'EN'],
    badge: 'Community',
    cta: 'Join Group',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=PrishtinaNomads',
    avatarFallback: 'from-shoq-red via-fuchsia-500 to-zinc-950',
  },
]

const mapPins = [
  ['PR', '29%', '59%'],
  ['PZ', '66%', '31%'],
  ['PE', '46%', '18%'],
  ['GJ', '74%', '65%'],
]

const mapLabels = [
  ['4 people nearby', 'top-20 left-5'],
  ['2 events tonight', 'top-36 right-4'],
  ['Low budget route', 'bottom-28 left-5'],
  ['Open group', 'bottom-16 right-6'],
]

const trustItems = [
  [BadgeCheck, 'Verified profiles', 'Identity and profile signals help people feel real before meeting.'],
  [ShieldCheck, 'Public meetup first', 'Plans prioritize public places, group settings, and clear expectations.'],
  [Flag, 'Report/block', 'Fast controls for unwanted messages, profiles, or activity posts.'],
  [WalletCards, 'Budget transparency', 'Every plan shows an estimated cost before people commit.'],
  [UserCheck, 'Student/tourist/local labels', 'Context labels make social discovery easier and safer.'],
  [Star, 'Post-activity reviews', 'After a plan, people can leave lightweight community feedback.'],
  [Sparkles, 'Community reputation', 'Helpful hosts and reliable groups earn trust over time.'],
]

const plannerInputs = ['I have 20 euros', 'I like culture + food', "I'm in Prishtina", 'I want to meet new people']

const plannerOutput = [
  ['16:00', 'Coffee meetup near the center'],
  ['17:30', 'Walk through old Prishtina spots'],
  ['19:00', 'Budget food place with local group'],
  ['20:30', 'Join open student event'],
]

const vibeOptions = ['Food', 'Culture', 'Hiking', 'Nightlife', 'Study', 'Roadtrip']

const roles = ['Tourist', 'Student', 'Local']

function notifyDemo(message) {
  window.dispatchEvent(new CustomEvent('shoq-demo-action', { detail: message }))
}

function DemoToast() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    function handleAction(event) {
      setMessage(event.detail)
      window.clearTimeout(handleAction.timeout)
      handleAction.timeout = window.setTimeout(() => setMessage(''), 2400)
    }

    window.addEventListener('shoq-demo-action', handleAction)
    return () => {
      window.removeEventListener('shoq-demo-action', handleAction)
      window.clearTimeout(handleAction.timeout)
    }
  }, [])

  if (!message) return null

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm font-black text-white shadow-2xl shadow-black/40">
      {message}
    </div>
  )
}

function Logo({ variant = 'white', className = 'h-12' }) {
  const logoSrc = variant === 'black' ? '/assets/shoq1-logo-black-red1.svg' : '/assets/shoq1-logo-white-red1.svg'

  return <img src={logoSrc} alt="SHOQ1 logo" className={`${className} w-auto object-contain`} />
}

function BrandMark({ compact = false, tagline = 'Kosovo social discovery' }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-2xl border border-white/10 bg-black px-3 py-2 shadow-[0_0_34px_rgba(225,29,72,0.16)]">
        <Logo variant="white" className={compact ? 'h-7 sm:h-8' : 'h-11 sm:h-12'} />
      </div>
      {!compact ? (
        <p className="max-w-32 text-[11px] font-black uppercase leading-4 tracking-[0.16em] text-zinc-500">
          {tagline}
        </p>
      ) : null}
    </div>
  )
}

function Pill({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${
        light ? 'border-zinc-200 bg-white text-zinc-950' : 'border-white/10 bg-white/8 text-white backdrop-blur'
      }`}
    >
      {children}
    </span>
  )
}

function SectionHeader({ eyebrow, title, children, align = 'center' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-shoq-red">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">{children}</p> : null}
    </div>
  )
}

function StoreBadges({ copy, compact = false }) {
  const badges = [
    ['/assets/apple-logo.svg', copy.appStore, 'Apple App Store logo'],
    ['/assets/google-play-logo.svg', copy.playStore, 'Google Play logo'],
  ]

  return (
    <div className={`flex flex-wrap gap-3 ${compact ? '' : 'mt-5'}`}>
      {badges.map(([logo, label, alt]) => (
        <button
          type="button"
          key={label}
          onClick={() => notifyDemo(`${label}: ${copy.soon}`)}
          className="inline-flex min-h-14 flex-1 items-center gap-3 rounded-2xl border border-white/12 bg-white/10 px-4 text-left text-white shadow-xl shadow-black/10 backdrop-blur transition hover:border-shoq-red/60 hover:bg-shoq-red/15 sm:flex-none"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-shoq-red text-white">
            <img src={logo} alt={alt} className="h-5 w-5 object-contain" />
          </span>
          <span>
            <span className="block text-[10px] font-black uppercase tracking-[0.12em] text-white/60">{copy.soon}</span>
            <span className="block text-sm font-black leading-5">{label}</span>
          </span>
        </button>
      ))}
    </div>
  )
}

function LanguageToggle({ language, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 text-sm font-black text-white backdrop-blur transition hover:border-shoq-red/50"
    >
      <Languages size={17} aria-hidden="true" />
      {language}
      <span className="rounded-full bg-shoq-red px-2 py-1 text-[11px] text-white">{language === 'EN' ? 'SQ' : 'EN'}</span>
    </button>
  )
}

function HeroSlideshow({ copy }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/35">
      <div className="relative h-[420px] sm:h-[520px]">
        {heroSlides.map(([image, label], index) => (
          <img
            key={image}
            src={image}
            alt={label}
            className="shoq-hero-slide absolute inset-0 h-full w-full object-cover"
            style={{ animationDelay: `${index * 4}s` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <Pill>
            <MapPin size={14} aria-hidden="true" />
            {copy.heroPill}
          </Pill>
          <div className="flex gap-1.5" aria-hidden="true">
            {heroSlides.map(([image]) => (
              <span key={image} className="h-1.5 w-6 rounded-full bg-white/45" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
          <h1 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl">
            {copy.heroTitle} <span className="text-shoq-red">+1</span>.
          </h1>
          <p className="mt-4 max-w-xl text-sm font-bold leading-7 text-white/80 sm:text-base">
            {copy.heroSubtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

function MobileBottomNav({ active = 'Home' }) {
  const [selected, setSelected] = useState(active)
  const items = [
    [Home, 'Home'],
    [Map, 'Map'],
    [UsersRound, '+1'],
    [Bot, 'Planner'],
    [User, 'Profile'],
  ]

  return (
    <div className="grid grid-cols-5 border-t border-white/10 bg-black/95 px-2 py-3 backdrop-blur">
      {items.map(([Icon, label]) => (
        <button
          type="button"
          key={label}
          onClick={() => {
            setSelected(label)
            notifyDemo(`${label} tab selected in preview`)
          }}
          className={`flex flex-col items-center gap-1 text-[10px] font-black ${
            selected === label ? 'text-cyan-300' : 'text-zinc-500'
          }`}
        >
          <Icon size={18} aria-hidden="true" />
          {label}
        </button>
      ))}
    </div>
  )
}

function PhoneMockup({ title, subtitle, active, children }) {
  return (
    <article className="mx-auto w-full max-w-[320px] shrink-0 snap-center lg:max-w-[300px] xl:max-w-[320px]">
      <div className="rounded-[2.4rem] border border-white/12 bg-zinc-950 p-2.5 shadow-[0_26px_70px_rgba(0,0,0,0.52)]">
        <div className="flex h-[690px] flex-col overflow-hidden rounded-[1.85rem] bg-[#0a0a0a] text-white sm:h-[720px]">
          <div className="flex items-center justify-between px-4 py-3 text-[10px] font-black text-zinc-400">
            <span>9:41</span>
            <span className="h-1.5 w-16 rounded-full bg-white/20" />
            <span>5G</span>
          </div>
          <header className="flex items-start justify-between gap-3 border-b border-white/10 bg-black px-4 pb-3">
            <div>
              <Logo variant="white" className="h-6 sm:h-7" />
              <h3 className="text-xl font-black tracking-tight">{title}</h3>
              <p className="mt-1 text-xs font-semibold text-zinc-500">{subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => notifyDemo('Notifications preview opened')}
              className="grid size-10 shrink-0 place-items-center rounded-full bg-white/8 transition hover:bg-cyan-400/20 hover:text-cyan-200"
            >
              <Bell size={17} aria-hidden="true" />
            </button>
          </header>
          <div className="shoq-app-scroll min-h-0 flex-1 overflow-y-auto px-4 py-4">{children}</div>
          <MobileBottomNav active={active} />
        </div>
      </div>
    </article>
  )
}

function HomeFeedScreen() {
  return (
    <div className="space-y-3">
      <div className="rounded-[1.25rem] border border-white/10 bg-white/8 p-3">
        <p className="text-lg font-black">Today around you</p>
        <div className="mt-3 flex min-h-11 items-center gap-2 rounded-2xl bg-white px-3 text-zinc-950">
          <Search size={16} className="text-cyan-600" aria-hidden="true" />
          <span className="text-xs font-bold text-zinc-500">What's your vibe today?</span>
        </div>
      </div>
      {activities.slice(0, 3).map((activity) => (
        <div key={activity.title} className="rounded-[1.15rem] border border-white/10 bg-white/8 p-3">
          <div className="flex gap-3">
            <img src={activity.image} alt="" className="size-16 rounded-2xl object-cover" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-black">{activity.title}</p>
                <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-[10px] font-black text-cyan-200">
                  {activity.match}
                </span>
              </div>
              <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-zinc-400">
                <MapPin size={12} aria-hidden="true" />
                {activity.location}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] font-black text-white/75">
                <span>{activity.budget}</span>
                <span>{activity.people}</span>
                <span>{activity.time}</span>
              </div>
              <button
                type="button"
                onClick={() => notifyDemo(`Joined preview: ${activity.title}`)}
                className="mt-3 rounded-xl bg-cyan-300 px-3 py-2 text-[11px] font-black text-zinc-950"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="rounded-[1.15rem] border border-shoq-red/25 bg-shoq-red/12 p-3">
        <p className="text-[10px] font-black uppercase tracking-wide text-shoq-red">Public adventure post</p>
        <p className="mt-1 text-sm font-black">Open photo walk near Newborn</p>
      </div>
    </div>
  )
}

function PhoneMapScreen() {
  const [activeFilter, setActiveFilter] = useState('Food')
  const filters = ['Food', 'Culture', 'Hiking', 'Nightlife', 'Student']

  return (
    <div className="space-y-3">
      <div className="flex h-11 items-center gap-2 rounded-2xl bg-white px-3 text-zinc-950">
        <Search size={16} aria-hidden="true" />
        <span className="text-xs font-bold text-zinc-500">Where do you want to go?</span>
      </div>
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`shrink-0 rounded-full px-3 py-2 text-[10px] font-black ${
              activeFilter === filter ? 'bg-cyan-300 text-zinc-950' : 'border border-white/10 bg-white/8 text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="relative h-[430px] overflow-hidden rounded-[1.5rem] bg-zinc-900">
        <img src="/images/prishtina.jpg" alt="" className="h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(225,29,72,0.35),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.9))]" />
        {mapPins.map(([label, top, left]) => (
          <span
            key={label}
            className="absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-shoq-red text-xs font-black shadow-[0_0_0_6px_rgba(225,29,72,0.22)]"
            style={{ top, left }}
          >
            {label}
          </span>
        ))}
        {mapLabels.slice(0, 3).map(([label, position]) => (
          <span key={label} className={`absolute rounded-full bg-white px-3 py-1.5 text-[10px] font-black text-zinc-950 shadow-xl ${position}`}>
            {label}
          </span>
        ))}
        <button
          type="button"
          onClick={() => notifyDemo('Nearby +1 search preview started')}
          className="absolute bottom-4 left-4 right-4 rounded-2xl bg-cyan-300 py-3 text-sm font-black text-zinc-950"
        >
          Find nearby +1
        </button>
      </div>
    </div>
  )
}

function MatchPhoneScreen() {
  return (
    <div className="space-y-3">
      {matches.map((match) => (
        <div key={match.name} className="rounded-[1.35rem] bg-white p-4 text-zinc-950">
          <div className="flex items-center gap-3">
            <div className={`size-14 overflow-hidden rounded-full bg-gradient-to-br ${match.avatarFallback}`}>
              <img src={match.avatar} alt={`${match.name} avatar`} className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h4 className="truncate text-base font-black">{match.name}</h4>
                <BadgeCheck size={15} className="text-shoq-red" aria-hidden="true" />
              </div>
              <p className="text-xs font-black text-shoq-red">{match.score}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {match.interests.map((interest) => (
              <span key={interest} className="rounded-full bg-zinc-100 px-2 py-1 text-[10px] font-black text-zinc-600">
                {interest}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex gap-1">
              {match.languages.map((language) => (
                <span key={language} className="rounded-md bg-shoq-red/10 px-2 py-1 text-[10px] font-black text-shoq-red">
                  {language}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => notifyDemo(`${match.cta} preview: ${match.name}`)}
              className="rounded-xl bg-cyan-300 px-3 py-2 text-xs font-black text-zinc-950"
            >
              {match.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

function PlannerPhoneScreen() {
  return (
    <div className="space-y-3">
      <div className="rounded-[1.25rem] border border-white/10 bg-white/8 p-3">
        <p className="text-lg font-black">AI Planner</p>
        <p className="mt-1 text-xs font-semibold text-zinc-500">Budget, vibe, location, people.</p>
      </div>
      <div className="rounded-[1.25rem] bg-white p-3 text-zinc-950">
        <p className="text-[10px] font-black uppercase tracking-wide text-shoq-red">Inputs</p>
        <div className="mt-3 space-y-2">
          {plannerInputs.map((input) => (
            <div key={input} className="flex items-center gap-2 rounded-2xl bg-zinc-100 px-3 py-2">
              <Check size={14} className="text-cyan-600" aria-hidden="true" />
              <span className="text-xs font-black">{input}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => notifyDemo('AI plan generated in phone preview')}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 py-3 text-xs font-black text-zinc-950"
        >
          Generate My Plan
          <Sparkles size={15} aria-hidden="true" />
        </button>
      </div>
      <div className="rounded-[1.25rem] border border-white/10 bg-black p-3">
        <p className="text-[10px] font-black uppercase tracking-wide text-cyan-300">Your Kosovo day plan</p>
        <div className="mt-3 space-y-3">
          {plannerOutput.map(([time, label]) => (
            <div key={time} className="grid grid-cols-[3rem_1fr] gap-2">
              <span className="text-xs font-black text-shoq-red">{time}</span>
              <p className="text-xs font-bold leading-5 text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProfilePhoneScreen() {
  const [selectedRole, setSelectedRole] = useState(roles[0])
  const [selectedVibes, setSelectedVibes] = useState(vibeOptions.slice(0, 3))

  function toggleVibe(vibe) {
    setSelectedVibes((current) => (current.includes(vibe) ? current.filter((item) => item !== vibe) : [...current, vibe]))
  }

  return (
    <div className="space-y-3">
      <ProfileSetupPreview compact />
      <p className="text-xs font-bold leading-5 text-zinc-400">Zgjedh rolin, stilin dhe rezervo vendin tënd në SHOQ1.</p>
      <div className="rounded-[1.25rem] border border-white/10 bg-white/8 p-3">
        <p className="mb-2 text-[10px] font-black uppercase tracking-wide text-zinc-500">Role</p>
        <div className="grid grid-cols-3 gap-1.5">
          {roles.map((role) => (
            <button
              type="button"
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`rounded-xl px-2 py-2 text-[10px] font-black ${
                selectedRole === role ? 'bg-cyan-300 text-zinc-950' : 'border border-white/10 bg-white/8 text-white'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-[1.25rem] border border-white/10 bg-white/8 p-3">
        <p className="mb-2 text-[10px] font-black uppercase tracking-wide text-zinc-500">Vibe</p>
        <div className="flex flex-wrap gap-1.5">
          {vibeOptions.map((vibe) => (
            <button
              type="button"
              key={vibe}
              onClick={() => toggleVibe(vibe)}
              className={`rounded-full px-2.5 py-1.5 text-[10px] font-black ${
                selectedVibes.includes(vibe) ? 'bg-shoq-red text-white' : 'border border-white/10 bg-white/8 text-white'
              }`}
            >
              {vibe}
            </button>
          ))}
        </div>
      </div>
      <ProfileSetupPreview />
      <button
        type="button"
        onClick={() => notifyDemo('Profile onboarding preview reserved')}
        className="inline-flex w-full items-center justify-center rounded-2xl bg-cyan-300 py-3 text-xs font-black text-zinc-950"
      >
        Reserve my spot
      </button>
    </div>
  )
}

function AppPreviewSection() {
  return (
    <section id="app-preview" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20">
      <SectionHeader eyebrow="App preview" title="Five real product surfaces before signup.">
        A hackathon-ready preview of the feed, map, matching, planner, and onboarding flow users will actually interact with.
      </SectionHeader>
      <div className="shoq-carousel mt-12 flex snap-x gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-2 md:justify-items-center md:overflow-visible lg:grid-cols-3">
        <PhoneMockup title="Home Feed" subtitle="Today around you" active="Home">
          <HomeFeedScreen />
        </PhoneMockup>
        <PhoneMockup title="Kosovo Map" subtitle="Pins, plans, people" active="Map">
          <PhoneMapScreen />
        </PhoneMockup>
        <PhoneMockup title="Find Your +1" subtitle="Safe social matching" active="+1">
          <MatchPhoneScreen />
        </PhoneMockup>
        <PhoneMockup title="AI Planner" subtitle="Smart day plans" active="Planner">
          <PlannerPhoneScreen />
        </PhoneMockup>
        <PhoneMockup title="Profile Setup" subtitle="Role, vibe, photos" active="Profile">
          <ProfilePhoneScreen />
        </PhoneMockup>
      </div>
    </section>
  )
}

function ActivityCard({ activity }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 shadow-xl shadow-black/15">
      <div className="relative h-52">
        <img src={activity.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-shoq-red px-3 py-1.5 text-xs font-black uppercase text-white">
          {activity.tag}
        </span>
        <span className="absolute bottom-4 right-4 rounded-full bg-white px-3 py-1.5 text-xs font-black text-shoq-red">
          {activity.match}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black tracking-tight text-white">{activity.title}</h3>
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
            <Clock3 size={14} className="text-shoq-red" aria-hidden="true" />
            {activity.time}
          </span>
          <span className="flex items-center gap-1.5">
            <UsersRound size={14} className="text-shoq-red" aria-hidden="true" />
            {activity.people}
          </span>
        </div>
        <button
          type="button"
          onClick={() => notifyDemo(`Joined preview: ${activity.title}`)}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3 text-sm font-black text-zinc-950 transition hover:bg-shoq-red hover:text-white"
        >
          Join
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}

function LiveActivityFeed() {
  return (
    <section id="live-feed" className="border-y border-white/10 bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Live activity feed" title="Make the product feel alive before anyone signs in.">
          Mock data previews how SHOQ1 can surface public plans, event ideas, match scores, budgets, and join intent.
        </SectionHeader>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {activities.map((activity) => (
            <ActivityCard key={activity.title} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AIPlannerDemo() {
  return (
    <section id="ai-planner" className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader eyebrow="AI plan demo" title="From preferences to a Kosovo day plan." align="left">
          Static for now, but designed to feel like the core SHOQ1 planner interaction: budget, vibe, location, and social intent in one flow.
        </SectionHeader>
        <div className="rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-2xl shadow-black/20 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white p-5 text-zinc-950">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-shoq-red">Input</p>
                <Bot size={22} className="text-shoq-red" aria-hidden="true" />
              </div>
              <div className="space-y-3">
                {plannerInputs.map((input) => (
                  <div key={input} className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                    <Check size={16} className="text-shoq-red" aria-hidden="true" />
                    <span className="text-sm font-black">{input}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => notifyDemo('AI plan generated in preview')}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-shoq-red py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(225,29,72,0.28)]"
              >
                Generate My Plan
                <Sparkles size={17} aria-hidden="true" />
              </button>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-shoq-red">Output</p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-white">Your Kosovo day plan</h3>
              <div className="mt-5 space-y-4">
                {plannerOutput.map(([time, label], index) => (
                  <div key={time} className="grid grid-cols-[3.5rem_1fr] gap-3">
                    <span className="text-sm font-black text-shoq-red">{time}</span>
                    <div className="relative border-l border-white/10 pl-4">
                      <span className="absolute -left-1.5 top-1 grid size-3 place-items-center rounded-full bg-shoq-red" />
                      <p className="text-sm font-bold leading-6 text-white">{label}</p>
                      {index === 2 ? <p className="mt-1 text-xs font-semibold text-zinc-500">Estimated cost: €18 total</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MatchCard({ match }) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white p-5 text-zinc-950 shadow-xl">
      <div className="flex items-center gap-4">
        <div className={`size-16 overflow-hidden rounded-full bg-gradient-to-br ${match.avatarFallback}`}>
          <img src={match.avatar} alt={`${match.name} avatar`} className="h-full w-full rounded-full object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-xl font-black tracking-tight">{match.name}</h3>
            <BadgeCheck size={18} className="text-shoq-red" aria-hidden="true" />
          </div>
          <p className="mt-1 text-sm font-black text-shoq-red">{match.score}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {match.interests.map((interest) => (
          <span key={interest} className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-black text-zinc-600">
            {interest}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {match.languages.map((language) => (
            <span key={language} className="rounded-lg bg-shoq-red/10 px-2.5 py-1.5 text-xs font-black text-shoq-red">
              {language}
            </span>
          ))}
          <span className="rounded-lg bg-zinc-950 px-2.5 py-1.5 text-xs font-black text-white">{match.badge}</span>
        </div>
        <button
          type="button"
          onClick={() => notifyDemo(`${match.cta} preview: ${match.name}`)}
          className="rounded-2xl bg-shoq-red px-4 py-3 text-sm font-black text-white"
        >
          {match.cta}
        </button>
      </div>
    </article>
  )
}

function ProfileSetupPreview({ compact = false }) {
  return (
    <div className={`rounded-[1.4rem] border border-white/10 bg-white/8 ${compact ? 'p-3' : 'p-5'}`}>
      <div className="flex items-center gap-3">
        <div className={`${compact ? 'size-12' : 'size-16'} grid place-items-center rounded-full border-2 border-dashed border-white/20 bg-white/8`}>
          <Upload size={compact ? 18 : 24} className="text-shoq-red" aria-hidden="true" />
        </div>
        <div>
          <p className={`${compact ? 'text-xs' : 'text-sm'} font-black text-white`}>Add your profile photo</p>
          <p className="mt-1 text-[11px] font-semibold text-zinc-500">Let your +1 know who they are meeting.</p>
        </div>
      </div>
      {!compact ? (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {['Adventure photo', 'Favorite place', 'Travel memory'].map((label, index) => (
            <div key={label} className="min-h-24 rounded-2xl border border-dashed border-white/15 bg-gradient-to-br from-white/10 to-shoq-red/10 p-3">
              <ImagePlus size={18} className="text-shoq-red" aria-hidden="true" />
              <p className="mt-4 text-[10px] font-black leading-4 text-white">{label}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function ProfileMatchSection() {
  return (
    <section className="border-y border-white/10 bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Social layer" title="Matches that show interests, language, and safety context.">
          SHOQ1 should feel social without feeling random: every card gives people enough signal to connect comfortably.
        </SectionHeader>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {matches.map((match) => (
            <MatchCard key={match.name} match={match} />
          ))}
        </div>
        <div className="mx-auto mt-6 max-w-3xl">
          <ProfileSetupPreview />
        </div>
      </div>
    </section>
  )
}

function MapPreview() {
  const [activeFilter, setActiveFilter] = useState('Food')

  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeader eyebrow="Map preview" title="A Kosovo map that acts like a social command center." align="left">
          Search, filters, nearby +1 suggestions, and floating labels make the map feel interactive even in a static demo.
        </SectionHeader>
        <div className="rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-2xl shadow-black/20">
          <div className="mb-4 flex min-h-12 items-center gap-3 rounded-2xl bg-white px-4 text-zinc-950">
            <Search size={18} aria-hidden="true" />
            <span className="text-sm font-bold text-zinc-500">Where do you want to go?</span>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {['Food', 'Culture', 'Hiking', 'Nightlife', 'Student'].map((chip, index) => (
              <button
                type="button"
                key={chip}
                onClick={() => {
                  setActiveFilter(chip)
                  notifyDemo(`${chip} filter selected`)
                }}
                className={`rounded-full px-3 py-2 text-xs font-black ${
                  activeFilter === chip ? 'bg-shoq-red text-white' : 'border border-white/10 bg-white/8 text-white'
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
          <div className="relative h-[520px] overflow-hidden rounded-[1.5rem] bg-zinc-950">
            <img src="/images/prishtina.jpg" alt="Kosovo social map preview" className="h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(225,29,72,0.38),transparent_26%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.14),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.9))]" />
            {mapPins.map(([label, top, left]) => (
              <span
                key={label}
                className="absolute grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-shoq-red text-sm font-black text-white shadow-[0_0_0_8px_rgba(225,29,72,0.22)]"
                style={{ top, left }}
              >
                {label}
              </span>
            ))}
            {mapLabels.map(([label, position]) => (
              <span key={label} className={`absolute rounded-full bg-white px-4 py-2 text-xs font-black text-zinc-950 shadow-2xl ${position}`}>
                {label}
              </span>
            ))}
            <button
              type="button"
              onClick={() => notifyDemo(`Searching nearby +1 for ${activeFilter}`)}
              className="absolute bottom-5 left-5 right-5 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-shoq-red text-sm font-black text-white shadow-[0_12px_34px_rgba(225,29,72,0.35)]"
            >
              <Navigation size={18} aria-hidden="true" />
              Find nearby +1
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustCard({ item }) {
  const [Icon, title, body] = item
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
      <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-white text-zinc-950">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-black tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-400">{body}</p>
    </article>
  )
}

function TrustLayer() {
  return (
    <section id="safety" className="border-y border-white/10 bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Trust layer" title="A social app needs safety to be visible, not hidden.">
          These cards make trust part of the product story: profiles, public meetups, budgets, labels, reviews, and reputation.
        </SectionHeader>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <TrustCard key={item[1]} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WaitlistOnboarding({ copy }) {
  const [selectedRole, setSelectedRole] = useState(copy.waitlist.roles[0])
  const [selectedVibes, setSelectedVibes] = useState(copy.waitlist.vibes.slice(0, 3))
  const [email, setEmail] = useState('')

  useEffect(() => {
    setSelectedRole(copy.waitlist.roles[0])
    setSelectedVibes(copy.waitlist.vibes.slice(0, 3))
  }, [copy])

  function toggleVibe(vibe) {
    setSelectedVibes((current) =>
      current.includes(vibe) ? current.filter((item) => item !== vibe) : [...current, vibe],
    )
  }

  function reserveSpot() {
    notifyDemo(email ? `${copy.waitlist.reserved}: ${selectedRole}` : copy.waitlist.missingEmail)
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid overflow-hidden rounded-[2rem] bg-white text-zinc-950 shadow-2xl lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[420px]">
          <img src="/images/street-food.jpg" alt="Kosovo food walk" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <BrandMark tagline={copy.brandTag} />
            <h2 className="mt-8 max-w-xl text-4xl font-black leading-tight tracking-tight">{copy.waitlist.title}</h2>
          </div>
        </div>
        <div className="p-6 sm:p-10">
          <div className="mb-6">
            <Logo variant="black" className="h-11 sm:h-12" />
          </div>
          <Pill light>
            <CalendarDays size={14} aria-hidden="true" />
            {copy.waitlist.eyebrow}
          </Pill>
          <h3 className="mt-6 text-3xl font-black leading-tight tracking-tight">{copy.waitlist.heading}</h3>
          <p className="mt-3 text-sm font-bold leading-7 text-zinc-600">
            {copy.waitlist.micro}
          </p>
          <div className="mt-7 space-y-6">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-zinc-500">{copy.waitlist.roleLabel}</p>
              <div className="grid grid-cols-3 gap-2">
                {copy.waitlist.roles.map((role) => (
                  <button
                    type="button"
                    key={role}
                    onClick={() => {
                      setSelectedRole(role)
                      notifyDemo(`${role} role selected`)
                    }}
                    className={`rounded-2xl border px-3 py-3 text-sm font-black ${
                      selectedRole === role ? 'border-shoq-red bg-shoq-red text-white' : 'border-zinc-200 bg-zinc-50 text-zinc-700'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-zinc-500">{copy.waitlist.vibeLabel}</p>
              <div className="flex flex-wrap gap-2">
                {copy.waitlist.vibes.map((vibe) => (
                  <button
                    type="button"
                    key={vibe}
                    onClick={() => toggleVibe(vibe)}
                    className={`rounded-full border px-3 py-2 text-xs font-black ${
                      selectedVibes.includes(vibe) ? 'border-shoq-red bg-shoq-red/10 text-shoq-red' : 'border-zinc-200 bg-white text-zinc-600'
                    }`}
                  >
                    {vibe}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="waitlist-email">Email</label>
              <input
                id="waitlist-email"
                type="email"
                placeholder={copy.waitlist.emailPlaceholder}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="min-h-14 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm font-bold outline-none transition focus:border-shoq-red focus:ring-4 focus:ring-shoq-red/15"
              />
            </div>
            <button
              type="button"
              onClick={reserveSpot}
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-zinc-950 text-sm font-black text-white transition hover:bg-shoq-red"
            >
              {copy.waitlist.button}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemSolution({ copy }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/20">
          <Pill>
            <MapPin size={14} aria-hidden="true" />
            {copy.problem.eyebrow}
          </Pill>
          <h2 className="mt-6 text-2xl font-black leading-tight tracking-tight text-white">
            {copy.problem.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            {copy.problem.body}
          </p>
        </article>
        <article className="rounded-[1.75rem] bg-white p-6 text-zinc-950 shadow-2xl">
          <Pill light>
            <BadgeCheck size={14} aria-hidden="true" />
            {copy.solution.eyebrow}
          </Pill>
          <h2 className="mt-6 text-2xl font-black leading-tight tracking-tight">
            {copy.solution.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            {copy.solution.body}
          </p>
        </article>
      </div>
    </section>
  )
}

function ContactSection({ copy }) {
  const contactItems = [
    [Mail, copy.contact.email, `mailto:${copy.contact.email}`],
    [Phone, copy.contact.phone, 'tel:+38349123123'],
    [MessageCircle, copy.contact.brand, null],
    [Globe2, copy.contact.website, 'https://shoq1.app'],
  ]

  return (
    <section id="contact" className="border-y border-white/10 bg-black px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-shoq-red">{copy.contact.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              {copy.contact.title}
            </h2>
            <p className="mt-4 text-lg font-bold text-white">{copy.contact.subtitle}</p>
            <div className="mt-6 flex items-center gap-3 rounded-[1.25rem] border border-shoq-red/25 bg-shoq-red/10 p-4 text-white">
              <Smartphone size={22} className="shrink-0 text-shoq-red" aria-hidden="true" />
              <p className="text-sm font-black">{copy.soon}</p>
            </div>
            <StoreBadges copy={copy} compact />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactItems.map(([Icon, label, href]) => {
              const content = (
                <>
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-shoq-red/15 text-shoq-red ring-1 ring-shoq-red/30">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 break-words text-base font-black text-white">{label}</span>
                </>
              )

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="flex min-h-20 items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/8 p-4 transition hover:border-shoq-red/60 hover:bg-white/12"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="flex min-h-20 items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/8 p-4">
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function OnboardingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState('EN')
  const copy = pageCopy[language]

  function toggleLanguage() {
    const nextLanguage = language === 'EN' ? 'SQ' : 'EN'
    setLanguage(nextLanguage)
    notifyDemo(pageCopy[nextLanguage].languageToast)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-shoq-bg text-white">
      <DemoToast />
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" aria-label="SHOQ1 home">
            <BrandMark compact />
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {copy.navItems.map((item, index) => (
              <a key={item} href={`#${navTargets[index]}`} className="text-sm font-bold text-zinc-400 transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle language={language} onToggle={toggleLanguage} />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/8 md:hidden"
            >
              <Menu size={20} aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
        {menuOpen ? (
          <div className="border-t border-white/10 bg-black/95 px-5 py-3 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {copy.navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${navTargets[index]}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-white/8 px-4 py-3 text-sm font-black text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      <section id="top" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(225,29,72,0.30),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.10),transparent_26%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-16">
          <div>
            <BrandMark tagline={copy.brandTag} />
            <div className="mt-8">
              <Pill>
                <Camera size={14} aria-hidden="true" />
                {copy.heroPill}
              </Pill>
            </div>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-zinc-300">
              {copy.heroLead}
            </p>
            <p className="mt-3 max-w-xl text-sm font-bold leading-7 text-white/75">
              {copy.heroMicro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#waitlist-email" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-shoq-red px-5 text-sm font-black text-white shadow-[0_12px_30px_rgba(225,29,72,0.32)] sm:w-auto">
                {copy.primaryCta}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link to="/home" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-5 text-sm font-black text-white sm:w-auto">
                {copy.secondaryCta}
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <StoreBadges copy={copy} />
            <div className="mt-9 grid max-w-lg grid-cols-3 gap-2">
              {copy.stats.map(([value, label]) => (
                <div key={label} className="rounded-[1.25rem] border border-white/10 bg-white/8 p-4">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-wide text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroSlideshow copy={copy} />
        </div>
      </section>

      <ProblemSolution copy={copy} />
      <AppPreviewSection />
      <LiveActivityFeed />
      <AIPlannerDemo />
      <ProfileMatchSection />
      <MapPreview />
      <TrustLayer />
      <WaitlistOnboarding copy={copy} />
      <ContactSection copy={copy} />
      <footer className="border-t border-white/10 bg-black px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Logo variant="white" className="h-9 sm:h-10" />
          <p className="text-sm font-semibold text-zinc-500">{copy.footer}</p>
        </div>
      </footer>
    </main>
  )
}
