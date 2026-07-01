import { useState } from 'react'
import { Link } from 'react-router-dom'
import { serviceAreas, serviceCities, business } from '../data/business'
import { ArrowIcon, CheckIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'
import { NjMap } from '../components/NjMap'

const ribbon = [
  { n: '8', l: 'Counties' },
  { n: `${serviceCities.length}+`, l: 'Towns' },
  { n: business.yearsExperience, l: 'Years Local' },
]

export function ServiceAreas() {
  const ref = useReveal()
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="areas" className="scroll-mt-24 bg-cloud-100 py-24 sm:py-32">
      <div
        ref={ref}
        className="reveal container-x grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16"
      >
        {/* ── Left: copy, ribbon, county checklist ── */}
        <div>
          <span className="eyebrow">Where We Work</span>
          <h2 className="mt-6 font-display text-display-md text-ink-900">
            Rooted in North Jersey, trusted across the region.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-cloud-600">
            From Bergen County down to the Jersey Shore corridor, we bring expert roofing,
            siding, and masonry to homeowners across Northern &amp; Central New Jersey.
          </p>

          {/* Stat ribbon */}
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-5 border-y border-cloud-300 py-6">
            {ribbon.map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl font-extrabold leading-none text-ink-900">
                  {s.n}
                </div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-cloud-500">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* County checklist — hovering highlights the county on the map */}
          <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-1">
            {serviceAreas.map((county, i) => {
              const name = county.replace(' County', '')
              const isActive = active === name
              return (
                <County key={county} index={i}>
                  <li
                    onMouseEnter={() => setActive(name)}
                    onMouseLeave={() => setActive(null)}
                    className={`flex cursor-default items-center gap-2.5 border-b py-3 text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'border-brand-600/40 text-brand-600'
                        : 'border-cloud-200 text-ink-800'
                    }`}
                  >
                    <CheckIcon className="h-4 w-4 shrink-0 text-brand-600" />
                    {county}
                  </li>
                </County>
              )
            })}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/service-areas" className="btn-primary">
              View All Service Areas
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <p className="text-sm text-cloud-600">
              Don&apos;t see your town?{' '}
              <a href={business.phoneHref} className="font-semibold text-brand-600 hover:underline">
                Call {business.phone}
              </a>
            </p>
          </div>
        </div>

        {/* ── Right: the clean NJ map (no card frame) ── */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
          <div className="relative aspect-[15.8/33.45]">
            <NjMap active={active} onHover={setActive} />
          </div>

          {/* Readout pill under the map */}
          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink-800 shadow-soft">
              <span className="h-2.5 w-2.5 rounded-sm bg-brand-600" aria-hidden="true" />
              {active ? `${active} County` : '8 counties served'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function County({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 60}ms` }}>
      {children}
    </div>
  )
}
