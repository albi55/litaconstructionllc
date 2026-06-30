import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { business } from '../data/business'
import { Logo } from './Logo'
import { PhoneIcon, MenuIcon, CloseIcon } from './icons'

const nav = [
  { label: 'Services', to: '/#services' },
  { label: 'Why Us', to: '/#why' },
  { label: 'Process', to: '/#process' },
  { label: 'Service Area', to: '/#areas' },
  { label: 'Reviews', to: '/#reviews' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-700/80 bg-ink-950/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="text-sm font-medium text-bone-200 transition-colors hover:text-amber-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneHref}
            className="group flex items-center gap-2.5 text-right"
            aria-label={`Call ${business.name} at ${business.phone}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-amber-500 transition-colors group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-ink-950">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
                Call for a free estimate
              </span>
              <span className="font-display text-base font-bold text-bone-50">{business.phone}</span>
            </span>
          </a>
          <Link to="/#quote" className="btn-primary">
            Free Estimate
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink-600 text-bone-100 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-[72px] z-40 origin-top border-b border-ink-700 bg-ink-950 transition-all duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-6">
          {nav.map((item) => (
            <a
              key={item.to}
              href={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-ink-800 py-4 font-display text-xl font-semibold text-bone-100 transition-colors hover:text-amber-500"
            >
              {item.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            className="mt-4 flex items-center gap-3 text-amber-500"
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="font-display text-2xl font-bold">{business.phone}</span>
          </a>
          <Link to="/#quote" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </header>
  )
}
