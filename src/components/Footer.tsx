import { Link } from 'react-router-dom'
import { business, services, serviceAreas } from '../data/business'
import { Logo } from './Logo'
import { PhoneIcon, ClockIcon, PinIcon } from './icons'

export function Footer() {
  const year = 2024 // build-time constant; update on rebuild
  return (
    <footer className="border-t border-ink-800 bg-ink-900">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone-300">
            Family-owned roofing, siding &amp; masonry contractor serving Northern &amp; Central
            New Jersey since {business.founded}. {business.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {business.certifications.map((c) => (
              <span
                key={c}
                className="border border-ink-600 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-bone-300"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="section-label">Services</h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-sm text-bone-200 transition-colors hover:text-amber-500"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="section-label">Service Area</h3>
          <ul className="mt-5 grid grid-cols-1 gap-2.5">
            {serviceAreas.map((a) => (
              <li key={a} className="text-sm text-bone-300">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="section-label">Get In Touch</h3>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 text-bone-100 transition-colors hover:text-amber-500"
              >
                <PhoneIcon className="h-5 w-5 text-amber-500" />
                <span className="font-display text-lg font-bold">{business.phone}</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-bone-300">
              <ClockIcon className="h-5 w-5 shrink-0 text-amber-500" />
              {business.hours}
            </li>
            <li className="flex items-center gap-3 text-sm text-bone-300">
              <PinIcon className="h-5 w-5 shrink-0 text-amber-500" />
              Northern &amp; Central New Jersey
            </li>
          </ul>
          <a href="#quote" className="btn-primary mt-6 w-full">
            Free Estimate
          </a>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {year} {business.name}. All rights reserved. · {business.licenseLabel}
          </p>
          <p>
            Roofing · Siding · Masonry — proudly serving New Jersey homeowners.
          </p>
        </div>
      </div>
    </footer>
  )
}
