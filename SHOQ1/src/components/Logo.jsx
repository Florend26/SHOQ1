export default function Logo({ variant = 'white', className = 'h-10' }) {
  const src = variant === 'black' ? '/assets/shoq1-logo-black-red1.svg' : '/assets/shoq1-logo-white-red1.svg'

  return <img src={src} alt="SHOQ1 logo" className={`${className} w-auto object-contain`} />
}
