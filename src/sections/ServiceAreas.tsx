import { Link } from 'react-router-dom'
import { serviceAreas, serviceCities, business } from '../data/business'
import { PinIcon, ArrowIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'

export function ServiceAreas() {
  const ref = useReveal()
  return (
    <section id="areas" className="scroll-mt-24 bg-cloud-50 py-20 sm:py-28">
      <div ref={ref} className="reveal container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">Where We Work</span>
          <h2 className="mt-5 font-display text-display-md text-navy-900">
            Proudly serving Northern &amp; Central New Jersey.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cloud-600">
            From Bergen County to the Jersey Shore corridor, Lita Construction brings expert
            roofing, siding, and masonry to homeowners across the region. If you don&apos;t see
            your town listed, call us — chances are we cover it.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {serviceAreas.map((county) => (
              <span
                key={county}
                className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-white px-4 py-2 text-sm font-medium text-navy-800 shadow-soft"
              >
                <PinIcon className="h-4 w-4 text-brand-600" />
                {county}
              </span>
            ))}
          </div>

          <Link to="/service-areas" className="btn-primary mt-9">
            View All Service Areas
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* City list — local SEO surface area */}
        <div className="rounded-2xl border border-cloud-300 bg-white p-8 shadow-card">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Cities We Serve
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
            {serviceCities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 border-b border-cloud-200 py-2.5 text-sm text-navy-800"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
                {city}, NJ
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-cloud-600">
            Don&apos;t see your area?{' '}
            <a href={business.phoneHref} className="font-semibold text-brand-600 hover:underline">
              Call {business.phone}
            </a>{' '}
            — we serve all of North &amp; Central NJ.
          </p>
        </div>
      </div>
    </section>
  )
}
