import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { PhoneIcon, ArrowIcon } from './icons'

/** Full-bleed red call-to-action band for the bottom of inner pages. */
export function CtaBand({
  title = 'Ready to start your project?',
  subtitle = 'Get a free, no-obligation estimate from a trusted, licensed New Jersey contractor.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-16 text-white sm:py-20">
      {/* Subtle depth so the red reads as a designed surface, not a flat block */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-black/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-display-md">{title}</h2>
            <p className="mt-3 text-white/80">{subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-600 transition-all duration-300 hover:bg-cloud-100 active:scale-[0.98]"
            >
              Get a Free Estimate
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={business.phoneHref} className="btn-ghost-light">
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
