import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { Seo } from '../components/Seo'
import { QuoteForm } from '../components/QuoteForm'
import { PhoneIcon, MailIcon, ClockIcon, PinIcon, ShieldIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'
import { localBusinessSchema, breadcrumbSchema } from '../lib/schema'

const details = [
  {
    icon: PinIcon,
    label: 'Address',
    value: '378 S Washington Ave, Bergenfield, NJ 07621',
    href: 'https://maps.google.com/maps?q=378+S+Washington+Ave,+Bergenfield,+NJ+07621',
  },
  { icon: MailIcon, label: 'Email', value: business.email, href: business.emailHref },
  { icon: ClockIcon, label: 'Hours', value: business.hours },
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
        </div>
      </section>

      {/* ── Body: message + form (top), full-width map (bottom) ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          {/* Left — message intro + contact + credential */}
          <div ref={info} className="reveal">
            <span className="eyebrow">Message Us</span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              Let&apos;s talk about your project.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              Send us a message and a member of our team will get back to you within one business
              day — or call us directly for the fastest response.
            </p>

            {/* Call + quick details */}
            <a
              href={business.phoneHref}
              className="group mt-8 flex items-center gap-4 rounded-2xl bg-navy-950 p-6 text-white shadow-card transition-colors hover:bg-navy-900"
            >
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-brand-600 p-3.5 text-white transition-transform duration-300 group-hover:scale-105">
                <PhoneIcon className="h-full w-full" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Call for a free estimate
                </div>
                <div className="font-display text-2xl font-extrabold transition-colors group-hover:text-brand-400">
                  {business.phone}
                </div>
              </div>
            </a>

            <div className="mt-6 space-y-4">
              {details.map((row) => (
                <div key={row.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
                    <row.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-cloud-500">
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

            {/* Credential badge */}
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-cloud-200 bg-white p-5 shadow-soft">
              <img src="/gaf-logo.svg" alt="GAF Certified Contractor" className="h-12 w-12 rounded-md" />
              <div>
                <div className="font-display text-sm font-bold text-ink-900">
                  GAF Certified &amp; Fully Insured
                </div>
                <div className="text-xs text-cloud-500">
                  {business.licenseLabel} · 25-year warranty
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div ref={form} id="quote" className="reveal scroll-mt-24" style={{ transitionDelay: '100ms' }}>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ── Full-width map ── */}
      <section aria-label="Service area map" className="relative">
        <iframe
          title="Lita Construction — 378 S Washington Ave, Bergenfield, NJ"
          src="https://maps.google.com/maps?q=378%20S%20Washington%20Ave%2C%20Bergenfield%2C%20NJ%2007621&t=k&z=15&ie=UTF8&iwloc=&output=embed"
          className="block h-[380px] w-full border-0 sm:h-[460px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Coverage badge */}
        <div className="pointer-events-none absolute left-1/2 top-6 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 shadow-card backdrop-blur-sm">
          <PinIcon className="h-4 w-4 text-brand-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-ink-900">
            Serving 8 counties across Northern &amp; Central NJ
          </span>
        </div>
      </section>
    </>
  )
}
