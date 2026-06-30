import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business } from '../data/business'
import { navItems } from '../data/nav'
import { Logo } from './Logo'
import { PhoneIcon, MenuIcon, CloseIcon } from './icons'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setOpenGroup(null)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-cloud-200 bg-white/95 shadow-soft backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center xl:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive ? 'text-brand-600' : 'text-navy-800 hover:text-brand-600'
                    }`
                  }
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" className="mt-0.5">
                    <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </NavLink>
                <div
                  className={`absolute left-0 top-full w-60 pt-2 transition-all duration-200 ${
                    openGroup === item.label
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-1 opacity-0'
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-cloud-200 bg-white py-2 shadow-card">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2.5 text-sm font-medium text-navy-800 transition-colors hover:bg-cloud-100 hover:text-brand-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-brand-600' : 'text-navy-800 hover:text-brand-600'
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
              <span className="whitespace-nowrap font-display text-[15px] font-bold text-navy-900">
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cloud-300 text-navy-900 xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer — anchored to the header so it sits directly below it */}
      <div
        className={`absolute inset-x-0 top-full z-40 max-h-[calc(100vh-68px)] origin-top overflow-y-auto border-b border-cloud-200 bg-white transition-all duration-300 xl:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="container-x flex flex-col py-5">
          {navItems.map((item) => (
            <div key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block border-b border-cloud-200 py-3.5 font-display text-lg font-semibold ${
                    isActive ? 'text-brand-600' : 'text-navy-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.children && (
                <div className="flex flex-col bg-cloud-100">
                  {item.children.slice(1).map((child) => (
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
          ))}
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
  )
}
