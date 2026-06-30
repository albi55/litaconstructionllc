import { business, serviceAreas } from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { QuoteForm } from '../components/QuoteForm'
import { PhoneIcon, MailIcon, ClockIcon, PinIcon, ShieldIcon } from '../components/icons'
import { localBusinessSchema, breadcrumbSchema } from '../lib/schema'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Lita Construction LLC | Free Estimate — Call (201) 540-7772"
        description="Contact Lita Construction for a free roofing, siding, or masonry estimate in Northern & Central New Jersey. Call (201) 540-7772 or request a quote online. Fast response."
        path="/contact"
        schema={[localBusinessSchema, breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'Contact', url: `${business.url}/contact` },
        ])]}
      />

      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Let&apos;s build your <span className="text-brand-400">vision.</span>
          </>
        }
        subtitle="Ready for a free, no-obligation estimate? Call us directly or send a request and a member of our team will reach out within one business day."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="bg-cloud-50 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Contact info */}
          <div>
            <a
              href={business.phoneHref}
              className="group flex items-center gap-5 rounded-2xl bg-navy-950 p-7 text-white shadow-card transition-colors hover:bg-navy-900"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                <PhoneIcon className="h-7 w-7" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Call for a free estimate
                </div>
                <div className="font-display text-3xl font-black transition-colors group-hover:text-brand-400">
                  {business.phone}
                </div>
              </div>
            </a>

            <div className="mt-6 space-y-1 rounded-2xl border border-cloud-300 bg-white p-7 shadow-soft">
              {[
                { icon: MailIcon, label: 'Email', value: business.email, href: business.emailHref },
                { icon: ClockIcon, label: 'Hours', value: business.hours },
                { icon: PinIcon, label: 'Service Area', value: 'Northern & Central New Jersey' },
                { icon: ShieldIcon, label: 'License', value: business.licenseLabel },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-4 border-b border-cloud-200 py-4 last:border-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
                    <row.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-cloud-500">
                      {row.label}
                    </div>
                    {row.href ? (
                      <a href={row.href} className="font-medium text-navy-900 hover:text-brand-600">
                        {row.value}
                      </a>
                    ) : (
                      <div className="font-medium text-navy-900">{row.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cloud-300 bg-white p-7 shadow-soft">
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
                Counties We Serve
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {serviceAreas.map((a) => (
                  <span key={a} className="rounded-full bg-cloud-100 px-3 py-1.5 text-xs font-medium text-navy-800">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="quote" className="scroll-mt-24">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
