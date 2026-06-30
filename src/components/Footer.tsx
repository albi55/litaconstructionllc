import { Link } from 'react-router-dom'
import { business, services, serviceAreas } from '../data/business'
import { Logo } from './Logo'
import { PhoneIcon, ClockIcon, PinIcon, MailIcon } from './icons'

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Financing', to: '/financing' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  const year = 2025 // build-time constant; update on rebuild
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Family-owned roofing, siding &amp; masonry contractor serving Northern &amp; Central
            New Jersey since {business.founded}. {business.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {business.certifications.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-brand-400">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-sm font-semibold text-brand-400 hover:text-white">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-brand-400">
            Company
          </h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/70 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-brand-400">
            Get In Touch
          </h3>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 text-white transition-colors hover:text-brand-400"
              >
                <PhoneIcon className="h-5 w-5 text-brand-400" />
                <span className="font-display text-lg font-bold">{business.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={business.emailHref}
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <MailIcon className="h-5 w-5 shrink-0 text-brand-400" />
                {business.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <ClockIcon className="h-5 w-5 shrink-0 text-brand-400" />
              {business.hours}
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <PinIcon className="h-5 w-5 shrink-0 text-brand-400" />
              Northern &amp; Central New Jersey
            </li>
          </ul>
          <Link to="/contact" className="btn-primary mt-6 w-full">
            Free Estimate
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {business.name}. All rights reserved. · {business.licenseLabel}
          </p>
          <p className="flex flex-wrap items-center gap-x-2">
            {serviceAreas.slice(0, 4).map((a) => (
              <span key={a}>{a.replace(' County', '')}</span>
            ))}
            <span>&amp; more</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
