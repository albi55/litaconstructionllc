import { Link } from 'react-router-dom'
import { ServicesCarousel } from '../components/ServicesCarousel'
import { ArrowIcon } from '../components/icons'

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cloud-100 py-24 sm:py-32">
      <div className="container-x">
        {/* Editorial header — heading left, framing link right */}
        <div className="flex flex-col gap-8 border-b border-cloud-300 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-5 font-display text-display-md text-ink-900">
              Everything your home needs — under one roof.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              From the roof over your head to the foundation under your feet, Lita Construction
              handles the work that protects and elevates your home — with the precision of a
              specialist and the accountability of a family business.
            </p>
          </div>
          <Link
            to="/services"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900 transition-colors hover:text-brand-600"
          >
            All Services
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="pt-12">
          <ServicesCarousel />
        </div>
      </div>
    </section>
  )
}
