import { Link } from 'react-router-dom'
import { services } from '../data/business'
import { serviceIcon, ArrowIcon, CheckIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-ink-950 py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">What We Do</span>
          <h2 className="mt-5 font-display text-display-md text-bone-50">
            Three trades. One standard of excellence.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone-300">
            From the roof over your head to the foundation under your feet, Lita Construction
            handles the work that protects and elevates your home — with the precision of a
            specialist and the accountability of a family business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcon[service.slug]
            return (
              <ServiceCard key={service.slug} index={i}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col border border-ink-700 bg-ink-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:bg-ink-800"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center border border-ink-600 text-amber-500 transition-colors group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-ink-950">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="font-display text-5xl font-black text-ink-700 transition-colors group-hover:text-amber-500/30">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl font-bold text-bone-50">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-300">{service.blurb}</p>

                  <ul className="mt-6 space-y-2.5">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-bone-200">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-500">
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
