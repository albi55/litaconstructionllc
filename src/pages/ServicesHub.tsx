import { Link } from 'react-router-dom'
import { services, business } from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { serviceIcon, CheckIcon, ArrowIcon } from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

export function ServicesHub() {
  return (
    <>
      <Seo
        title="Our Services — Roofing, Siding & Masonry | Lita Construction LLC"
        description={`Explore Lita Construction's roofing, siding, and masonry services across Northern & Central New Jersey. GAF certified, fully insured. Free estimates — call ${business.phone}.`}
        path="/services"
        schema={breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'Services', url: `${business.url}/services` },
        ])}
      />

      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Three trades. <span className="text-brand-400">One trusted name.</span>
          </>
        }
        subtitle="From roof to foundation, Lita Construction is your single, accountable partner for the work that protects and elevates your New Jersey home."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="bg-cloud-50 py-20">
        <div className="container-x space-y-8">
          {services.map((service, i) => {
            const Icon = serviceIcon[service.slug]
            return (
              <ServiceRow key={service.slug} index={i}>
                <div className="grid gap-8 rounded-2xl border border-cloud-300 bg-white p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="mt-6 font-display text-3xl font-bold text-navy-900">{service.name}</h2>
                    <p className="mt-4 leading-relaxed text-cloud-600">{service.blurb}</p>
                    <Link to={`/services/${service.slug}`} className="btn-primary mt-7">
                      Explore {service.name}
                      <ArrowIcon className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="rounded-xl bg-cloud-100 p-7">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
                      What we offer
                    </h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-navy-800">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ServiceRow>
            )
          })}
        </div>
      </section>

      <CtaBand />
    </>
  )
}

function ServiceRow({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 90}ms` }}>
      {children}
    </div>
  )
}
