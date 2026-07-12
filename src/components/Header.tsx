import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business } from '../data/business'
import { navItems, type NavItem, type NavChild } from '../data/nav'
import { Logo } from './Logo'
import { ServingTagline } from './ServingTagline'
import {
  PhoneIcon,
  MenuIcon,
  CloseIcon,
  ArrowIcon,
  ShieldIcon,
  PinIcon,
  StarIcon,
  DollarIcon,
  QuoteMarkIcon,
  serviceIcon,
  tradeIcon,
} from './icons'

/** Extra copy shown in the left promo column of each mega menu. */
const groupMeta: Record<
  string,
  { eyebrow: string; title: string; blurb: string; cta: string; image: string }
> = {
  Services: {
    eyebrow: 'What We Do',
    title: 'Premium exterior services.',
    blurb:
      'GAF-certified roofing, siding, and masonry — backed by a written 25-year workmanship warranty and two decades of North Jersey craftsmanship.',
    cta: 'View all services',
    image: '/work/roof-roof30.webp',
  },
  More: {
    eyebrow: 'Explore',
    title: 'Get to know Lita Construction.',
    blurb:
      'Where we work, what our customers say, flexible financing, and answers to the questions homeowners ask most.',
    cta: 'See our service areas',
    image: '/work/renovation-Renovation1.webp',
  },
}

/** Small real project photo shown on each mega-menu card, keyed by route. */
const routeThumb: Record<string, string> = {
  '/service-areas': '/work/mansory-Mansory10.webp',
  '/reviews': '/work/siding-siding6.webp',
  '/financing': '/work/renovation-Renovation1.webp',
  '/faq': '/work/bathroom-Bathroom7.webp',
}
const serviceThumb: Record<string, string> = {
  roofing: '/work/roof-roof30.webp',
  siding: '/work/siding-siding6.webp',
  masonry: '/work/mansory-Mansory10.webp',
  gutters: '/work/siding-siding6.webp',
  'windows-doors': '/work/siding-siding6.webp',
  'decks-pavers': '/Pavec/lita-outdoor-living-space-05-nj.webp',
  painting: '/work/siding-siding1.webp',
  // Grouped services shown in the nav dropdown
  'roof-repair': '/work/roof-roof14.webp',
  'roof-replacement': '/work/roof-roof30.webp',
  'commercial-roofing': '/work/roof-roof45.webp',
  'residential-roofing': '/work/roof-roof30.webp',
  'siding-installation': '/work/siding-siding6.webp',
  'siding-repair': '/work/siding-siding10.webp',
  'masonry-work': '/work/mansory-Mansory22.webp',
  'chimney-services': '/work/chimney-Chimney1.webp',
}
/** Trades that share the /projects route — keyed by label instead. */
const tradeThumb: Record<string, string> = {
  Renovation: '/work/renovation-Renovation1.webp',
  Bathroom: '/work/bathroom-Bathroom7.webp',
  Chimney: '/work/chimney-Chimney1.webp',
}
function thumbFor(to: string, label: string): string | undefined {
  if (to.startsWith('/services/')) {
    const slug = to.split('/').pop() ?? ''
    if (serviceThumb[slug]) return serviceThumb[slug]
  }
  return tradeThumb[label] ?? routeThumb[to]
}

/** Pick the best icon for a mega-menu card based on its route (or label, for shared routes). */
const routeIcon: Record<string, typeof PhoneIcon> = {
  '/services': ShieldIcon,
  '/service-areas': PinIcon,
  '/reviews': StarIcon,
  '/financing': DollarIcon,
  '/faq': QuoteMarkIcon,
}
function iconFor(to: string, label: string): typeof PhoneIcon {
  if (to.startsWith('/services/')) {
    const slug = to.split('/').pop() ?? ''
    if (serviceIcon[slug]) return serviceIcon[slug]
  }
  return tradeIcon[label] ?? routeIcon[to] ?? ArrowIcon
}

type MenuGroup = { heading: string; items: NavChild[] }

/**
 * Split a flat children list into groups. Children after a `heading` marker
 * belong to that heading; any children before the first heading (or a list with
 * no headings at all, like the "More" menu) form a single heading-less group so
 * they always render.
 */
function toGroups(children: NavChild[]): MenuGroup[] {
  const groups: MenuGroup[] = []
  for (const child of children) {
    if (child.heading) {
      groups.push({ heading: child.heading, items: [] })
    } else {
      if (groups.length === 0) groups.push({ heading: '', items: [] })
      groups[groups.length - 1].items.push(child)
    }
  }
  return groups
}

/**
 * Distribute groups across `n` columns in their original order, keeping each
 * group intact and balancing column heights — so the dropdown stays short and
 * reads left-to-right, top-to-bottom. Falls back to one column when there are
 * no headings.
 */
function toColumns(children: NavChild[], n: number): MenuGroup[][] {
  const groups = toGroups(children)
  if (groups.length === 0) return [[]]

  // A single heading-less group (e.g. the "More" menu) flows its items across
  // the columns as a row rather than stacking in one tall column.
  if (groups.length === 1 && !groups[0].heading) {
    const items = groups[0].items
    const cols = Math.min(n, items.length)
    const columns: MenuGroup[][] = Array.from({ length: cols }, () => [])
    items.forEach((item, i) => {
      columns[i % cols].push({ heading: '', items: [item] })
    })
    return columns
  }

  const cols = Math.min(n, groups.length)
  const rowsOf = (g: MenuGroup) => g.items.length + 1 // heading + items
  const total = groups.reduce((sum, g) => sum + rowsOf(g), 0)
  const targetPerColumn = total / cols

  const columns: MenuGroup[][] = []
  let current: MenuGroup[] = []
  let currentRows = 0
  for (const group of groups) {
    current.push(group)
    currentRows += rowsOf(group)
    const columnsLeft = cols - columns.length
    const groupsLeftAfter = groups.length - (columns.flat().length + current.length)
    // Close this column once it's reached its share, but always leave enough
    // groups to fill the remaining columns.
    if (
      columns.length < cols - 1 &&
      currentRows >= targetPerColumn &&
      groupsLeftAfter >= columnsLeft - 1
    ) {
      columns.push(current)
      current = []
      currentRows = 0
    }
  }
  if (current.length) columns.push(current)
  return columns
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
            <div className="container-x grid gap-8 py-8 lg:grid-cols-[0.7fr_2fr] lg:gap-10">
              {/* Left — photo feature panel */}
              <div className="group/panel relative flex min-h-[460px] flex-col overflow-hidden rounded-2xl bg-navy-950 text-white shadow-lift">
                <img
                  src={meta?.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 transition-transform duration-[1400ms] ease-out group-hover/panel:scale-100"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/40"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-600/25 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative flex h-full flex-col p-7">
                  <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
                    <span className="h-px w-8 bg-brand-400/70" />
                    {meta?.eyebrow}
                  </span>
                  <h3 className="mt-5 max-w-xs font-display text-[1.7rem] font-extrabold leading-[1.08] text-white">
                    {meta?.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">{meta?.blurb}</p>

                  {/* Serving-since trust line */}
                  <div className="mt-6">
                    <ServingTagline tone="dark" />
                  </div>

                  <Link to={item.to} className="btn-primary mt-7 w-fit">
                    {meta?.cta}
                    <ArrowIcon className="h-4 w-4" />
                  </Link>

                  <a
                    href={business.phoneHref}
                    className="group/call relative mt-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:bg-white/[0.1]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition-transform group-hover/call:scale-105">
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
              </div>

              {/* Right — grouped cards laid into three balanced columns for a short dropdown */}
              <div className="grid content-start gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {toColumns(item.children, 3).map((column, ci) => (
                  <div key={ci} className="flex flex-col gap-5">
                    {column.map((group, gi) => (
                      <div key={group.heading || `group-${ci}-${gi}`} className="flex flex-col gap-2.5">
                        {group.heading && (
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600">
                              {group.heading}
                            </span>
                            <span className="h-px flex-1 bg-cloud-200" aria-hidden="true" />
                          </div>
                        )}
                        {group.items.map((child) => {
                          const Icon = iconFor(child.to, child.label)
                          const thumb = thumbFor(child.to, child.label)
                          return (
                            <Link
                              key={child.label}
                              to={child.to}
                              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-cloud-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-600/40 hover:shadow-card"
                            >
                              {thumb ? (
                                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl shadow-soft ring-1 ring-navy-950/5">
                                  <img
                                    src={encodeURI(thumb)}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </span>
                              ) : (
                                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cloud-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                                  <Icon className="h-6 w-6" />
                                </span>
                              )}
                              <span className="min-w-0 flex-1">
                                <span className="flex items-center justify-between gap-2 font-display text-base font-bold leading-tight text-ink-900 transition-colors group-hover:text-brand-600">
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
                    ))}
                  </div>
                ))}
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
                      // Drop a non-heading child that just repeats the parent link
                      .filter((child) => isMore || child.heading || child.to !== item.to)
                      .map((child) =>
                        child.heading ? (
                          <span
                            key={`m-heading-${child.heading}`}
                            className="border-b border-cloud-200 bg-cloud-200/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600"
                          >
                            {child.heading}
                          </span>
                        ) : (
                          <Link
                            key={child.label}
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className="border-b border-cloud-200 py-2.5 pl-6 text-sm font-medium text-cloud-700 hover:text-brand-600"
                          >
                            {child.label}
                          </Link>
                        ),
                      )}
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
