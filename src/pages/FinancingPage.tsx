import { financing, business } from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { DollarIcon, CheckIcon, ShieldIcon, PhoneIcon } from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

export function FinancingPage() {
  const ref = useReveal()
  return (
    <>
      <Seo
        title="Financing & Free Estimates | Lita Construction LLC — NJ Contractor"
        description="Flexible financing, free itemized estimates, and insurance claim assistance for roofing, siding & masonry projects in New Jersey. Affordable, honest pricing from Lita Construction."
        path="/financing"
        schema={breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'Financing', url: `${business.url}/financing` },
        ])}
      />

      <PageHero
        eyebrow="Financing & Estimates"
        title={
          <>
            Quality you can <span className="text-brand-400">afford.</span>
          </>
        }
        subtitle={financing.intro}
        crumbs={[{ label: 'Financing' }]}
      />

      {/* Options */}
      <section className="bg-cloud-50 py-20">
        <div className="container-x">
          <span className="eyebrow">How We Make It Affordable</span>
          <h2 className="mt-5 font-display text-display-md text-navy-900">Options that work for you.</h2>
          <div ref={ref} className="reveal mt-12 grid gap-6 sm:grid-cols-2">
            {financing.options.map((o) => (
              <div key={o.title} className="flex gap-5 rounded-2xl border border-cloud-300 bg-white p-7 shadow-soft">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
                  <DollarIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900">{o.title}</h3>
                  <p className="mt-2 leading-relaxed text-cloud-600">{o.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-white py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">No Surprises</span>
            <h2 className="mt-5 font-display text-display-md text-navy-900">
              Transparent pricing, every time.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              Every Lita Construction estimate is free and fully itemized, so you know exactly what
              you&apos;re paying for before any work begins. No hidden fees, no pressure — just
              honest numbers and premium workmanship.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Free, no-obligation written estimates',
                'Itemized, easy-to-understand pricing',
                'Insurance claim documentation & assistance',
                'Premium materials at fair, competitive prices',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 font-medium text-navy-800">
                  <CheckIcon className="h-5 w-5 shrink-0 text-brand-600" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-navy-950 p-9 text-white shadow-lift">
            <ShieldIcon className="h-10 w-10 text-brand-400" />
            <h3 className="mt-5 font-display text-2xl font-bold">Protected by our 25-year warranty</h3>
            <p className="mt-3 text-white/70">
              As a GAF-certified contractor, qualifying roof installations are backed by a 25-year
              warranty on labor and materials — real, lasting value for your investment.
            </p>
            <a href={business.phoneHref} className="btn-primary mt-7">
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
            <p className="mt-4 text-sm text-white/50">
              Note: specific financing terms are discussed during your free estimate.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Get your free, itemized estimate." />
    </>
  )
}
