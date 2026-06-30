import { business } from '../data/business'
import { QuoteForm } from '../components/QuoteForm'
import { PhoneIcon, ClockIcon, ShieldIcon, CheckIcon } from '../components/icons'

export function CtaQuote() {
  return (
    <section id="quote" className="relative scroll-mt-24 overflow-hidden border-t border-ink-800 bg-ink-950 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        {/* Pitch */}
        <div>
          <span className="eyebrow">Free Estimate</span>
          <h2 className="mt-5 font-display text-display-md text-bone-50">
            Ready to protect your home? Let&apos;s talk.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone-300">
            Whether it&apos;s a new roof, fresh siding, or expert masonry, your project starts with
            a free, no-pressure estimate. Call us directly or send a request — we respond fast.
          </p>

          {/* Direct call card */}
          <a
            href={business.phoneHref}
            className="group mt-9 flex items-center gap-5 border border-ink-700 bg-ink-900 p-6 transition-colors hover:border-amber-500"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-500 text-ink-950">
              <PhoneIcon className="h-7 w-7" />
            </span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-bone-300">
                Call us now
              </div>
              <div className="font-display text-3xl font-black text-bone-50 transition-colors group-hover:text-amber-500">
                {business.phone}
              </div>
            </div>
          </a>

          <ul className="mt-8 space-y-3">
            {[
              { icon: CheckIcon, t: 'Free, no-obligation written estimates' },
              { icon: ClockIcon, t: business.hours },
              { icon: ShieldIcon, t: `Licensed & insured · ${business.licenseLabel}` },
            ].map((row) => (
              <li key={row.t} className="flex items-center gap-3 text-bone-200">
                <row.icon className="h-5 w-5 shrink-0 text-amber-500" />
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
