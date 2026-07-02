import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business } from '../data/business'
import { navItems, type NavItem } from '../data/nav'
import { Logo } from './Logo'
import {
  PhoneIcon,
  MenuIcon,
  CloseIcon,
  ArrowIcon,
  CheckIcon,
  ShieldIcon,
  PinIcon,
  StarIcon,
  DollarIcon,
  QuoteMarkIcon,
  serviceIcon,
} from './icons'

/** Extra copy shown in the left promo column of each mega menu. */
const groupMeta: Record<string, { eyebrow: string; title: string; blurb: string; cta: string }> = {
  Services: {
    eyebrow: 'What We Do',
    title: 'Premium exterior services.',
    blurb:
      'GAF-certified roofing, siding, and masonry — backed by a written 25-year workmanship warranty and two decades of North Jersey craftsmanship.',
    cta: 'View all services',
  },
  More: {
    eyebrow: 'Explore',
    title: 'Get to know Lita Construction.',
    blurb:
      'Where we work, what our customers say, flexible financing, and answers to the questions homeowners ask most.',
    cta: 'See our service areas',
  },
}

/** Pick the best icon for a mega-menu card based on its route. */
const routeIcon: Record<string, typeof PhoneIcon> = {
  '/services': ShieldIcon,
  '/service-areas': PinIcon,
  '/reviews': StarIcon,
  '/financing': DollarIcon,
  '/faq': QuoteMarkIcon,
}
function iconFor(to: string): typeof PhoneIcon {
  if (to.startsWith('/services/')) {
    const slug = to.split('/').pop() ?? ''
    if (serviceIcon[slug]) return serviceIcon[slug]
  }
  return routeIcon[to] ?? ArrowIcon
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const location = useLocation()

  // Hover-intent: a short close delay bridges the gap between a trigger and its
  // full-width panel so the menu doesn't snap shut while the cursor travels.
  const closeTimer = useRef<number | null>(null)
  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const openMenu = (label: string) => {
    cancelClose()
    setOpenGroup(label)
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setOpenGroup(null), 140)
  }
  const closeNow = () => {
    cancelClose()
    setOpenGroup(null)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on navigation.
  useEffect(() => {
    setOpen(false)
    setOpenGroup(null)
  }, [location])

  // Escape closes the mega menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenGroup(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Clear any pending close timer on unmount.
  useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
    },
    [],
  )

  // Lock scroll only for the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const groups = navItems.filter((i): i is NavItem & { children: NonNullable<NavItem['children']> } =>
    Boolean(i.children),
  )

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled || openGroup ? 'border-b border-cloud-200 shadow-soft' : ''
        }`}
        onMouseLeave={scheduleClose}
      >
      <div className="container-x flex h-[80px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center xl:flex" aria-label="Primary">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.to}
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={scheduleClose}
              >
                <NavLink
                  to={item.to}
                  onFocus={() => openMenu(item.label)}
                  aria-haspopup="true"
                  aria-expanded={openGroup === item.label}
                  className={({ isActive }) =>
                    `flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-semibold transition-colors ${
                      isActive || openGroup === item.label
                        ? 'text-brand-600'
                        : 'text-ink-800 hover:text-brand-600'
                    }`
                  }
                >
                  {item.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    className={`mt-0.5 transition-transform duration-200 ${
                      openGroup === item.label ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M3 4.5 6 7.5 9 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </NavLink>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onMouseEnter={closeNow}
                onFocus={closeNow}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-semibold transition-colors ${
                    isActive ? 'text-brand-600' : 'text-ink-800 hover:text-brand-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={business.phoneHref}
            className="group flex items-center gap-2.5"
            aria-label={`Call ${business.name} at ${business.phone}`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cloud-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-cloud-500">
                Free Estimate
              </span>
              <span className="whitespace-nowrap font-display text-[15px] font-bold text-ink-900">
                {business.phone}
              </span>
            </span>
          </a>
          <Link to="/contact" className="btn-primary whitespace-nowrap">
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cloud-300 text-ink-900 xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Full-width mega menu (desktop) ── */}
      {groups.map((item) => {
        const meta = groupMeta[item.label]
        const isOpen = openGroup === item.label
        return (
          <div
            key={item.label}
            className={`absolute inset-x-0 top-full z-40 hidden origin-top border-b border-cloud-200 bg-white shadow-lift transition-all duration-200 xl:block ${
              isOpen
                ? 'pointer-events-auto translate-y-0 opacity-100'
                : 'pointer-events-none -translate-y-2 opacity-0'
            }`}
            role="region"
            aria-label={`${item.label} menu`}
            onMouseEnter={() => openMenu(item.label)}
            onMouseLeave={scheduleClose}
          >
            <div className="container-x grid gap-8 py-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-12">
              {/* Left — navy feature panel */}
              <div className="relative flex flex-col overflow-hidden rounded-2xl bg-navy-950 p-7 text-white">
                <span
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-600/15 blur-2xl"
                  aria-hidden="true"
                />
                <span className="relative inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
                  <span className="h-px w-8 bg-brand-400/70" />
                  {meta?.eyebrow}
                </span>
                <h3 className="relative mt-5 font-display text-2xl font-extrabold leading-tight text-white">
                  {meta?.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/70">{meta?.blurb}</p>

                <Link to={item.to} className="btn-primary relative mt-6 w-fit">
                  {meta?.cta}
                  <ArrowIcon className="h-4 w-4" />
                </Link>

                <a
                  href={business.phoneHref}
                  className="group relative mt-auto flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4 transition-colors hover:border-brand-400/50 hover:bg-white/[0.1]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                      Call for a free estimate
                    </span>
                    <span className="font-display text-lg font-bold text-white">
                      {business.phone}
                    </span>
                  </span>
                </a>
              </div>

              {/* Right — cards */}
              <div className="grid content-start gap-3 sm:grid-cols-2">
                {item.children.map((child) => {
                  const Icon = iconFor(child.to)
                  return (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="group flex items-start gap-4 rounded-2xl border border-cloud-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-600/40 hover:shadow-card"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cloud-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2 font-display text-base font-bold text-ink-900 transition-colors group-hover:text-brand-600">
                          {child.label}
                          <ArrowIcon className="h-4 w-4 shrink-0 -translate-x-1 text-brand-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                        {child.description && (
                          <span className="mt-1 block text-sm leading-snug text-cloud-500">
                            {child.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Trust strip */}
            <div className="border-t border-cloud-200 bg-cloud-100">
              <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5 py-3.5 sm:justify-between">
                {business.certifications.map((c) => (
                  <span
                    key={c}
                    className="flex items-center gap-2 text-xs font-semibold text-cloud-600"
                  >
                    <CheckIcon className="h-4 w-4 shrink-0 text-brand-600" />
                    {c}
                  </span>
                ))}
                <span className="hidden text-xs font-bold uppercase tracking-wider text-ink-900 lg:block">
                  {business.licenseLabel}
                </span>
              </div>
            </div>
          </div>
        )
      })}

      {/* Mobile drawer — anchored to the header so it sits directly below it */}
      <div
        className={`absolute inset-x-0 top-full z-40 max-h-[calc(100vh-68px)] origin-top overflow-y-auto border-b border-cloud-200 bg-white transition-all duration-300 xl:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="container-x flex flex-col py-5">
          {navItems.map((item) => {
            const isMore = item.label === 'More'
            return (
              <div key={item.label}>
                {isMore ? (
                  <span className="block border-b border-cloud-200 py-3.5 font-display text-lg font-semibold text-ink-900">
                    {item.label}
                  </span>
                ) : (
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block border-b border-cloud-200 py-3.5 font-display text-lg font-semibold ${
                        isActive ? 'text-brand-600' : 'text-ink-900'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
                {item.children && (
                  <div className="flex flex-col bg-cloud-100">
                    {item.children
                      // Drop a child that just repeats the parent link (e.g. Services → All Services)
                      .filter((child) => isMore || child.to !== item.to)
                      .map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => setOpen(false)}
                          className="border-b border-cloud-200 py-2.5 pl-4 text-sm font-medium text-cloud-700 hover:text-brand-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            )
          })}
          <a href={business.phoneHref} className="mt-5 flex items-center gap-3 text-brand-600">
            <PhoneIcon className="h-5 w-5" />
            <span className="font-display text-2xl font-bold">{business.phone}</span>
          </a>
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Get a Free Quote
          </Link>
        </div>
      </div>
      </header>

      {/* Full-page dimming backdrop — a fixed sibling BELOW the header (z-40 vs
          the header's z-50) so the nav bar always paints on top and never gets
          covered → no flicker. `fixed` adds no scroll height. */}
      <div
        className={`fixed inset-0 z-40 hidden bg-navy-950/40 backdrop-blur-[1px] transition-opacity duration-200 xl:block ${
          openGroup ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={closeNow}
      />
    </>
  )
}
