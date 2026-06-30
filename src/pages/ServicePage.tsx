import { Link, useParams, Navigate } from 'react-router-dom'
import { services, serviceAreas, serviceCities, business } from '../data/business'
import { Seo } from '../components/Seo'
import { QuoteForm } from '../components/QuoteForm'
import { serviceIcon, CheckIcon, ArrowIcon, PhoneIcon, ShieldIcon } from '../components/icons'
import { serviceSchema, breadcrumbSchema } from '../lib/schema'

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/" replace />

  const Icon = serviceIcon[service.slug]
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <Seo
        title={`${service.name} Contractor in NJ | Lita Construction LLC`}
        description={`Professional ${service.name.toLowerCase()} services across Northern & Central New Jersey. ${service.short}. GAF certified, fully insured. Free estimates — call ${business.phone}.`}
        path={`/services/${service.slug}`}
        schema={[
          serviceSchema(service.slug)!,
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: service.name, url: `${business.url}/services/${service.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950 pt-[72px]">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="container-x relative py-16 sm:py-20">
          <nav className="mb-8 flex items-center gap-2 text-sm text-ink-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-amber-500">
              Home
            </Link>
            <span>/</span>
            <span className="text-bone-200">{service.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="flex h-16 w-16 items-center justify-center border border-amber-500/50 text-amber-500">
                <Icon className="h-8 w-8" />
              </span>
              <h1 className="mt-6 font-display text-display-lg text-bone-50">
                {service.name} in <span className="text-amber-500">New Jersey</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-bone-200">{service.blurb}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#service-quote" className="btn-primary">
                  Get a Free Estimate
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a href={business.phoneHref} className="btn-ghost">
                  <PhoneIcon className="h-4 w-4" />
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="border border-ink-700 bg-ink-900/80 p-7 backdrop-blur-sm">
              <h2 className="section-label">Why homeowners choose us</h2>
              <ul className="mt-5 space-y-3">
                {['GAF certified installation', 'Fully licensed & insured', '25-year warranty', 'Free written estimates', 'Family-owned since 2004'].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-3 text-sm text-bone-100">
                      <ShieldIcon className="h-5 w-5 shrink-0 text-amber-500" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-ink-950 py-20">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="eyebrow">What&apos;s included</span>
            <h2 className="mt-5 font-display text-display-md text-bone-50">
              Complete {service.name.toLowerCase()} services.
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 border border-ink-700 bg-ink-900 p-4 text-sm text-bone-100"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">Local coverage</span>
            <h2 className="mt-5 font-display text-display-md text-bone-50">
              {service.name} across North &amp; Central NJ.
            </h2>
            <p className="mt-5 leading-relaxed text-bone-300">
              We provide expert {service.name.toLowerCase()} services throughout{' '}
              {serviceAreas.join(', ').replace(/,([^,]*)$/, ' and$1')} — and the towns within them.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {serviceCities.map((c) => (
                <span
                  key={c}
                  className="border border-ink-600 bg-ink-900 px-3 py-1.5 text-xs font-medium text-bone-200"
                >
                  {service.name} in {c}, NJ
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="service-quote" className="scroll-mt-24 border-y border-ink-800 bg-ink-900 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Free estimate</span>
            <h2 className="mt-5 font-display text-display-md text-bone-50">
              Start your {service.name.toLowerCase()} project today.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-bone-300">
              Get a free, no-obligation estimate from a trusted, licensed New Jersey contractor.
              Call {business.phone} or send a request and we&apos;ll be in touch fast.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Other services */}
      <section className="bg-ink-950 py-20">
        <div className="container-x">
          <span className="eyebrow">More from Lita Construction</span>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((o) => {
              const OIcon = serviceIcon[o.slug]
              return (
                <Link
                  key={o.slug}
                  to={`/services/${o.slug}`}
                  className="group flex items-center justify-between border border-ink-700 bg-ink-900 p-7 transition-colors hover:border-amber-500/60"
                >
                  <div className="flex items-center gap-5">
                    <span className="flex h-12 w-12 items-center justify-center border border-ink-600 text-amber-500 group-hover:border-amber-500">
                      <OIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-bone-50">{o.name}</h3>
                      <p className="text-sm text-bone-300">{o.short}</p>
                    </div>
                  </div>
                  <ArrowIcon className="h-5 w-5 text-amber-500 transition-transform group-hover:translate-x-1.5" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
