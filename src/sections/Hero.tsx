import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { PhoneIcon, ArrowIcon, StarIcon, ShieldIcon } from '../components/icons'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-[68px] text-white lg:pt-[104px]">
      {/* Soft radial atmosphere — no boxy grid */}
      <div className="pointer-events-none absolute -right-32 -top-20 h-[560px] w-[560px] rounded-full bg-brand-600/20 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-navy-600/40 blur-[130px]" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:py-24">
        {/* Left — copy */}
        <div className="max-w-2xl">
          <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 animate-fade-in">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              <span className="h-px w-8 bg-brand-400/60" />
              Roofing · Siding · Masonry
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-white/70">
              <span className="flex text-brand-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              Trusted across North Jersey
            </span>
          </div>

          <h1 className="font-display text-display-xl animate-fade-up">
            Build Your Vision
            <br />
            <span className="relative inline-block text-brand-400">
              With Confidence.
              <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-brand-600/40" aria-hidden="true" />
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 animate-fade-up"
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
            <Link to="/contact" className="btn-primary">
              Get Your Free Estimate
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={business.phoneHref} className="btn-ghost-light">
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            {['GAF Certified', 'Fully Insured', business.licenseLabel].map((label) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-white/80">
                <ShieldIcon className="h-5 w-5 text-brand-400" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — rounded stat card stack */}
        <div className="relative hidden lg:block">
          <div className="relative ml-auto max-w-sm">
            <div className="relative z-10 rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[5.5rem] font-black leading-none text-brand-400">25</span>
                <span className="font-display text-2xl font-bold text-white">+ Years</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                of trusted craftsmanship protecting New Jersey homes — one roof, wall, and chimney
                at a time.
              </p>
            </div>

            <div className="relative z-20 -mt-4 ml-10 rounded-2xl bg-brand-600 p-6 text-white shadow-red">
              <div className="font-display text-4xl font-black leading-none">25-Yr</div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wide">Workmanship Warranty</div>
              <p className="mt-2 text-xs font-medium leading-snug text-white/85">
                On labor &amp; materials — the strongest protection in the industry.
              </p>
            </div>

            <div className="relative z-10 mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
              <div className="font-display text-3xl font-black text-white">8 Counties</div>
              <p className="mt-1 text-sm text-white/60">
                Serving Bergen, Passaic, Essex, Morris &amp; more across North &amp; Central NJ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
