import { Link } from 'react-router-dom'
import { business, serviceAreas } from '../data/business'
import { Seo } from '../components/Seo'
import { QuoteForm } from '../components/QuoteForm'
import { PhoneIcon, MailIcon, ClockIcon, PinIcon, ShieldIcon, CheckIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'
import { localBusinessSchema, breadcrumbSchema } from '../lib/schema'

const trust = ['Free estimates', 'Licensed & insured', 'Responds within 1 business day']

const details = [
  { icon: MailIcon, label: 'Email', value: business.email, href: business.emailHref },
  { icon: ClockIcon, label: 'Hours', value: business.hours },
  { icon: PinIcon, label: 'Service Area', value: 'Northern & Central New Jersey' },
  { icon: ShieldIcon, label: 'License', value: business.licenseLabel },
]

export function ContactPage() {
  const info = useReveal()
  const form = useReveal()

  return (
    <>
      <Seo
        title="Contact Lita Construction LLC | Free Estimate — Call (201) 540-7772"
        description="Contact Lita Construction for a free roofing, siding, or masonry estimate in Northern & Central New Jersey. Call (201) 540-7772 or request a quote online. Fast response."
        path="/contact"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'Contact', url: `${business.url}/contact` },
          ]),
        ]}
      />

      {/* ── Custom hero with showcase home ── */}
      <section className="relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: 'url("/showcase/house3.png")' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/55"
          aria-hidden="true"
        />

        <div className="container-x relative py-20 sm:py-28">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90">Contact</span>
          </nav>

          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
            <span className="h-px w-9 bg-brand-400/70" />
            Get In Touch
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">
            Let&apos;s build your <span className="text-brand-400">vision.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Ready for a free, no-obligation estimate? Call us directly or send a request — a member
            of our team will reach out within one business day.
          </p>

          {/* Trust chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {trust.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                <CheckIcon className="h-4 w-4 text-brand-400" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-14">
          {/* Contact info */}
          <div ref={info} className="reveal">
            {/* Call card */}
            <a
              href={business.phoneHref}
              className="group flex items-center gap-5 rounded-2xl bg-navy-950 p-7 text-white shadow-card transition-colors hover:bg-navy-900"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition-transform duration-300 group-hover:scale-105">
                <PhoneIcon className="h-7 w-7" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Call for a free estimate
                </div>
                <div className="font-display text-3xl font-extrabold transition-colors group-hover:text-brand-400">
                  {business.phone}
                </div>
              </div>
            </a>

            {/* Details */}
            <div className="mt-5 rounded-2xl border border-cloud-200 bg-white p-7 shadow-soft">
              {details.map((row) => (
                <div
                  key={row.label}
                  className="flex items-start gap-4 border-b border-cloud-200 py-4 first:pt-0 last:border-0 last:pb-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
                    <row.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-cloud-500">
                      {row.label}
                    </div>
                    {row.href ? (
                      <a href={row.href} className="font-medium text-ink-900 hover:text-brand-600">
                        {row.value}
                      </a>
                    ) : (
                      <div className="font-medium text-ink-900">{row.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Counties */}
            <div className="mt-5 rounded-2xl border border-cloud-200 bg-white p-7 shadow-soft">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-600">
                Counties We Serve
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {serviceAreas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-cloud-100 px-3 py-1.5 text-xs font-medium text-ink-800"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={form} id="quote" className="reveal scroll-mt-24" style={{ transitionDelay: '100ms' }}>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
