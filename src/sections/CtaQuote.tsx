import { business } from '../data/business'
import { QuoteForm } from '../components/QuoteForm'
import { PhoneIcon, ClockIcon, ShieldIcon, CheckIcon } from '../components/icons'

/**
 * Final CTA — the site's single red "hero moment". Deep brand-red background,
 * white pitch + direct-call card on the left, clean white lead form on the right.
 */
export function CtaQuote() {
  return (
    <section
      id="quote"
      className="relative scroll-mt-24 overflow-hidden py-24 text-white sm:py-32"
      style={{
        background:
          'linear-gradient(135deg, #8a1622 0%, #7d1420 42%, #5f0f18 100%)',
      }}
    >
      {/* Subtle depth accent */}
      <div
        className="pointer-events-none absolute -right-40 -top-20 h-[32rem] w-[32rem] rounded-full bg-white/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        {/* Pitch */}
        <div>
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
            <span className="h-px w-9 bg-white/50" />
            Free Estimate
          </span>
          <h2 className="mt-6 font-display text-display-md text-white">
            Ready to protect your home? Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
            Whether it&apos;s a new roof, fresh siding, or expert masonry, your project starts with
            a free, no-pressure estimate. Call us directly or send a request — we respond fast.
          </p>

          {/* Direct call card */}
          <a
            href={business.phoneHref}
            className="group mt-9 flex items-center gap-5 rounded-2xl border border-white/20 bg-white/[0.1] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.16]"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <PhoneIcon className="h-7 w-7" />
            </span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Call us now
              </div>
              <div className="font-display text-3xl font-extrabold text-white">
                {business.phone}
              </div>
            </div>
          </a>

          <ul className="mt-8 space-y-3.5">
            {[
              { icon: CheckIcon, t: 'Free, no-obligation written estimates' },
              { icon: ClockIcon, t: business.hours },
              { icon: ShieldIcon, t: `Licensed & insured · ${business.licenseLabel}` },
            ].map((row) => (
              <li key={row.t} className="flex items-center gap-3 text-white/90">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <row.icon className="h-4 w-4 text-white" />
                </span>
                {row.t}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <QuoteForm />
      </div>
    </section>
  )
}
