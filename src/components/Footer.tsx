import { Link } from 'react-router-dom'
import { business, homeServices, serviceAreas } from '../data/business'
import { Logo } from './Logo'
import { PhoneIcon, ClockIcon, PinIcon, MailIcon, ArrowIcon } from './icons'

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Financing', to: '/financing' },
  { label: 'FAQ', to: '/faq' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white">
      {/* ── Top CTA band ── */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mt-2 text-white">
              Free, no-obligation estimates across Northern &amp; Central New Jersey.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href={business.phoneHref} className="btn-ghost-light">
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
            <Link to="/contact" className="btn-primary">
              Get a Free Estimate
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white">
            Family-owned roofing, siding &amp; masonry contractor serving Northern &amp; Central
            New Jersey since {business.founded}.
          </p>
          {/* Credentials incl. real GAF logo */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <img
              src="/gaf-logo.svg"
              alt="GAF Certified Contractor"
              className="h-9 w-9 rounded-md"
            />
            {business.certifications.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-400">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {homeServices.map((s) => (
              <li key={s.key}>
                <Link
                  to={s.to}
                  className="group inline-flex items-center gap-1.5 text-sm text-white transition-colors hover:text-white"
                >
                  <span className="h-1 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-3" />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-400">
            Company
          </h3>
          <ul className="mt-5 space-y-3">
            {company.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-1.5 text-sm text-white transition-colors hover:text-white"
                >
                  <span className="h-1 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-3" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-400">
            Get In Touch
          </h3>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-brand-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <PhoneIcon className="h-4 w-4 text-brand-400" />
                </span>
                <span className="font-display text-lg font-bold">{business.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={business.emailHref}
                className="flex items-center gap-3 text-sm text-white transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MailIcon className="h-4 w-4 text-brand-400" />
                </span>
                {business.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                <ClockIcon className="h-4 w-4 text-brand-400" />
              </span>
              {business.hours}
            </li>
            <li className="flex items-center gap-3 text-sm text-white">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                <PinIcon className="h-4 w-4 text-brand-400" />
              </span>
              Northern &amp; Central New Jersey
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white sm:flex-row">
          <p>
            © {year} {business.name}. All rights reserved. · {business.licenseLabel}
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
            {serviceAreas.slice(0, 5).map((a) => (
              <span key={a}>{a.replace(' County', '')} ·</span>
            ))}
            <span>&amp; more</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
