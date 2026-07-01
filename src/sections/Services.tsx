import { Link } from 'react-router-dom'
import { services } from '../data/business'
import { serviceIcon, ArrowIcon, CheckIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cloud-50 py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">What We Do</span>
          <h2 className="mt-5 font-display text-display-md text-navy-900">
            Three trades. One standard of excellence.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cloud-600">
            From the roof over your head to the foundation under your feet, Lita Construction
            handles the work that protects and elevates your home — with the precision of a
            specialist and the accountability of a family business.
          </p>
        </div>

        {/* Featured GAF roof-replacement video */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-cloud-300 shadow-card">
          <div className="relative">
            <video
              className="aspect-video w-full object-cover"
              src="/gaf-roof-replacement.mp4"
              poster="/gaf-roof-replacement-poster.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Aerial drone view of a New Jersey home with a brand-new GAF architectural shingle roof, with GAF Timberline shingle bundles staged"
            />
            {/* Readability gradient + caption */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/10 to-transparent"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                GAF Certified Roofing
              </span>
              <p className="mt-3 max-w-lg font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                A brand-new GAF roof — done right.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcon[service.slug]
            return (
              <ServiceCard key={service.slug} index={i}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-cloud-300 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-600/30 hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-brand-600">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="font-display text-5xl font-black text-cloud-200 transition-colors group-hover:text-brand-600/20">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl font-bold text-navy-900">{service.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cloud-600">{service.blurb}</p>

                  <ul className="mt-6 space-y-2.5">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-navy-800">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-600">
                    Explore {service.name}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </ServiceCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 110}ms` }}>
      {children}
    </div>
  )
}
