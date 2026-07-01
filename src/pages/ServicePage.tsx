import { Link, useParams, Navigate } from 'react-router-dom'
import { services, serviceAreas, serviceCities, business } from '../data/business'
import { Seo } from '../components/Seo'
import { QuoteForm } from '../components/QuoteForm'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { FaqAccordion } from '../components/FaqAccordion'
import { serviceIcon, CheckIcon, ArrowIcon, PhoneIcon, ShieldIcon } from '../components/icons'
import { serviceSchema, breadcrumbSchema, faqSchemaFrom } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const reveal = useReveal()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <Seo
        title={`${service.name} Contractor in NJ | Lita Construction LLC`}
        description={`Professional ${service.name.toLowerCase()} services across Northern & Central New Jersey. ${service.short}. GAF certified, fully insured. Free estimates — call ${business.phone}.`}
        path={`/services/${service.slug}`}
        schema={[
          serviceSchema(service.slug)!,
          faqSchemaFrom(service.faqs),
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'Services', url: `${business.url}/services` },
            { name: service.name, url: `${business.url}/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`${service.name} Services`}
        title={
          <>
            {service.name} in <span className="text-brand-400">New Jersey</span>
          </>
        }
        subtitle={service.intro}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.name }]}
      />

      {/* Quick CTA strip */}
      <div className="border-b border-cloud-200 bg-white">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink-800">
            {['GAF Certified', 'Fully Insured', '25-Yr Warranty', 'Free Estimates'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <ShieldIcon className="h-4 w-4 text-brand-600" />
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={business.phoneHref} className="btn-navy">
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
            <a href="#service-quote" className="btn-primary">
              Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Sub-services */}
      <section className="bg-cloud-50 py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Our {service.name} Services</span>
            <h2 className="mt-5 font-display text-display-md text-ink-900">
              Everything {service.name.toLowerCase()}, done right.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.subServices.map((sub, i) => (
              <SubCard key={sub.name} index={i} slug={service.slug}>
                {sub.name}
                {sub.description}
              </SubCard>
            ))}
          </div>
        </div>
      </section>

      {/* What's included + local coverage */}
      <section className="bg-white py-20">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="eyebrow">What&apos;s Included</span>
            <h2 className="mt-5 font-display text-display-md text-ink-900">
              Complete {service.name.toLowerCase()} services.
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-cloud-300 bg-cloud-50 p-4 text-sm font-medium text-ink-800"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">Local Coverage</span>
            <h2 className="mt-5 font-display text-display-md text-ink-900">
              {service.name} across North &amp; Central NJ.
            </h2>
            <p className="mt-5 leading-relaxed text-cloud-600">
              We provide expert {service.name.toLowerCase()} services throughout{' '}
              {serviceAreas.join(', ').replace(/,([^,]*)$/, ' and$1')} — and the towns within them.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {serviceCities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-cloud-300 bg-cloud-50 px-3 py-1.5 text-xs font-medium text-ink-800"
                >
                  {service.name} in {c}, NJ
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="bg-cloud-100 py-20">
        <div ref={reveal} className="reveal container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">{service.name} FAQs</span>
            <h2 className="mt-5 font-display text-display-md text-ink-900">Good to know.</h2>
            <p className="mt-5 text-cloud-600">
              Quick answers to the questions homeowners ask most about {service.name.toLowerCase()}.
            </p>
          </div>
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      {/* Quote */}
      <section id="service-quote" className="scroll-mt-24 bg-navy-950 py-20 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              <span className="h-px w-8 bg-brand-400/60" />
              Free Estimate
            </span>
            <h2 className="mt-5 font-display text-display-md">
              Start your {service.name.toLowerCase()} project today.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Get a free, no-obligation estimate from a trusted, licensed New Jersey contractor.
              Call {business.phone} or send a request and we&apos;ll be in touch fast.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Other services */}
      <section className="bg-cloud-50 py-20">
        <div className="container-x">
          <span className="eyebrow">More from Lita Construction</span>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((o) => {
              const OIcon = serviceIcon[o.slug]
              return (
                <Link
                  key={o.slug}
                  to={`/services/${o.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-cloud-300 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-card"
                >
                  <div className="flex items-center gap-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white group-hover:bg-brand-600">
                      <OIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink-900">{o.name}</h3>
                      <p className="text-sm text-cloud-600">{o.short}</p>
                    </div>
                  </div>
                  <ArrowIcon className="h-5 w-5 text-brand-600 transition-transform group-hover:translate-x-1.5" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand title={`Ready for expert ${service.name.toLowerCase()}?`} />
    </>
  )
}

function SubCard({
  children,
  index,
  slug,
}: {
  children: [string, string]
  index: number
  slug: string
}) {
  const ref = useReveal()
  const Icon = serviceIcon[slug]
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 90}ms` }}>
      <div className="flex h-full gap-5 rounded-2xl border border-cloud-300 bg-white p-7 shadow-soft">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-lg font-bold text-ink-900">{children[0]}</h3>
          <p className="mt-2 text-sm leading-relaxed text-cloud-600">{children[1]}</p>
        </div>
      </div>
    </div>
  )
}
