import { Link } from 'react-router-dom'
import { serviceAreas, serviceCities, services, business } from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { PinIcon, ArrowIcon } from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

export function ServiceAreasPage() {
  const ref = useReveal()
  return (
    <>
      <Seo
        title="Service Areas — Roofing, Siding & Masonry Across NJ | Lita Construction"
        description={`Lita Construction serves Bergen, Passaic, Essex, Hudson, Morris, Union, Middlesex & Sussex Counties in New Jersey. Find your town and call ${business.phone} for a free estimate.`}
        path="/service-areas"
        schema={breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'Service Areas', url: `${business.url}/service-areas` },
        ])}
      />

      <PageHero
        eyebrow="Where We Work"
        title={
          <>
            Serving Northern &amp; <span className="text-brand-400">Central New Jersey.</span>
          </>
        }
        subtitle="Lita Construction proudly brings roofing, siding, and masonry to homeowners across 8 NJ counties and dozens of towns. Find your area below."
        crumbs={[{ label: 'Service Areas' }]}
      />

      {/* Counties */}
      <section className="bg-cloud-50 py-20">
        <div className="container-x">
          <span className="eyebrow">Counties We Serve</span>
          <h2 className="mt-5 font-display text-display-md text-navy-900">8 counties. One trusted contractor.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((county, i) => (
              <CountyCard key={county} index={i}>
                <div className="flex items-center gap-3 rounded-2xl border border-cloud-300 bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-lg font-bold text-navy-900">{county}</span>
                </div>
              </CountyCard>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="bg-white py-20">
        <div ref={ref} className="reveal container-x">
          <span className="eyebrow">Towns We Serve</span>
          <h2 className="mt-5 font-display text-display-md text-navy-900">Find your town.</h2>
          <p className="mt-5 max-w-2xl text-cloud-600">
            We serve these communities and many more across North &amp; Central NJ. Don&apos;t see
            yours? Call us — we likely cover it.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3 lg:grid-cols-4">
            {serviceCities.map((city) => (
              <div key={city} className="flex items-center gap-2 border-b border-cloud-200 py-3 text-sm font-medium text-navy-800">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
                {city}, NJ
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in your area */}
      <section className="bg-cloud-100 py-20">
        <div className="container-x">
          <span className="eyebrow">In Your Neighborhood</span>
          <h2 className="mt-5 font-display text-display-md text-navy-900">Full-service exterior work, locally.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-2xl border border-cloud-300 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-card"
              >
                <h3 className="font-display text-xl font-bold text-navy-900">{s.name}</h3>
                <p className="mt-2 text-sm text-cloud-600">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-600">
                  Learn more
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Serving your town? Let's get started." />
    </>
  )
}

function CountyCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${(index % 4) * 80}ms` }}>
      {children}
    </div>
  )
}
