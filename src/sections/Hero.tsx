import { business } from '../data/business'
import { PhoneIcon, ArrowIcon, StarIcon, ShieldIcon } from '../components/icons'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-[72px]">
      {/* Blueprint grid + amber glow atmosphere */}
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        {/* Left — copy */}
        <div className="max-w-2xl">
          <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 animate-fade-in">
            <span className="eyebrow">Roofing · Siding · Masonry</span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-bone-300">
              <span className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              Trusted across North Jersey
            </span>
          </div>

          <h1 className="font-display text-display-xl text-bone-50 animate-fade-up">
            Build Your Vision
            <br />
            <span className="relative inline-block">
              <span className="text-amber-500">With Confidence.</span>
              <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-amber-500/30" aria-hidden="true" />
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-bone-200 animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            Family-owned and operated since {business.founded}, Lita Construction delivers
            GAF-certified roofing, premium siding, and master masonry to homeowners across
            Northern &amp; Central New Jersey — on time, on budget, and built to last.
          </p>

          <div
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: '220ms' }}
          >
            <a href="#quote" className="btn-primary">
              Get Your Free Estimate
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a href={business.phoneHref} className="btn-ghost">
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink-700 pt-7 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            {[
              { icon: ShieldIcon, label: 'GAF Certified' },
              { icon: ShieldIcon, label: 'Fully Insured' },
              { icon: ShieldIcon, label: business.licenseLabel },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-sm text-bone-200">
                <item.icon className="h-5 w-5 text-amber-500" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stat card stack (magazine-style overlap) */}
        <div className="relative hidden lg:block">
          <div className="relative ml-auto max-w-sm">
            {/* Big years stat */}
            <div className="relative z-10 border border-ink-700 bg-ink-900/80 p-8 backdrop-blur-sm">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[5.5rem] font-black leading-none text-amber-500">
                  25
                </span>
                <span className="font-display text-2xl font-bold text-bone-100">+ Years</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-bone-300">
                of trusted craftsmanship protecting New Jersey homes — one roof, wall, and chimney
                at a time.
              </p>
            </div>

            {/* Overlapping warranty card */}
            <div className="relative z-20 -mt-4 ml-10 border border-amber-500/40 bg-amber-500 p-6 text-ink-950 shadow-[0_24px_60px_-20px_rgba(245,166,35,0.5)]">
              <div className="font-display text-4xl font-black leading-none">25-Yr</div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wide">
                Workmanship Warranty
              </div>
              <p className="mt-2 text-xs font-medium leading-snug text-ink-900/80">
                On labor &amp; materials — the strongest protection in the industry.
              </p>
            </div>

            {/* Counties served */}
            <div className="relative z-10 mt-5 border border-ink-700 bg-ink-900/80 p-6 backdrop-blur-sm">
              <div className="font-display text-3xl font-black text-bone-50">8 Counties</div>
              <p className="mt-1 text-sm text-bone-300">
                Serving Bergen, Passaic, Essex, Morris &amp; more across North &amp; Central NJ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
