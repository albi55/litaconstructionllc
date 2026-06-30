import { serviceAreas, serviceCities, business } from '../data/business'
import { PinIcon, ArrowIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'

export function ServiceAreas() {
  const ref = useReveal()
  return (
    <section
      id="areas"
      className="relative scroll-mt-24 overflow-hidden border-y border-ink-800 bg-ink-900 py-20 sm:py-28"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div ref={ref} className="reveal container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">Where We Work</span>
          <h2 className="mt-5 font-display text-display-md text-bone-50">
            Proudly serving Northern &amp; Central New Jersey.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone-300">
            From Bergen County to the Jersey Shore corridor, Lita Construction brings expert
            roofing, siding, and masonry to homeowners across the region. If you don&apos;t see
            your town listed, call us — chances are we cover it.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {serviceAreas.map((county) => (
              <span
                key={county}
                className="inline-flex items-center gap-2 border border-ink-600 bg-ink-950 px-4 py-2 text-sm font-medium text-bone-100"
              >
                <PinIcon className="h-4 w-4 text-amber-500" />
                {county}
              </span>
            ))}
          </div>

          <a href="#quote" className="btn-primary mt-9">
            Check My Town
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>

        {/* City list — local SEO surface area */}
        <div className="border border-ink-700 bg-ink-950 p-8">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-amber-500">
            Cities We Serve
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
            {serviceCities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 border-b border-ink-800 py-2.5 text-sm text-bone-200"
              >
                <span className="h-1 w-1 rounded-full bg-amber-500" aria-hidden="true" />
                {city}, NJ
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-bone-300">
            Don&apos;t see your area?{' '}
            <a href={business.phoneHref} className="font-semibold text-amber-500 hover:underline">
              Call {business.phone}
            </a>{' '}
            — we serve all of North &amp; Central NJ.
          </p>
        </div>
      </div>
    </section>
  )
}
