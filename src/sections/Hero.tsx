import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { PhoneIcon, ArrowIcon, StarIcon, ShieldIcon } from '../components/icons'
import { HeroServiceOrbit } from '../components/HeroServiceOrbit'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Photo background — showcase home */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/showcase/house%20(2).png")' }}
        aria-hidden="true"
      />
      {/* Left-side navy gradient only — keeps the heading readable while
          letting the photo show clearly on the right (no flat blue wash) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent"
        aria-hidden="true"
      />


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
        </div>

        {/* Right — license badge crowning the animated work showcase */}
        <div className="lg:flex lg:flex-col lg:items-center lg:gap-7">
          {/* Credential badges — GAF + NJ license, crowning the work showcase */}
          <div
            className="mt-4 flex flex-wrap items-center justify-center gap-3 animate-fade-up lg:mt-0"
            style={{ animationDelay: '320ms' }}
          >
            {/* GAF certified — official logo */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] py-2 pl-2 pr-4 shadow-soft backdrop-blur-sm transition-colors hover:border-white/30">
              <img
                src="/gaf-logo.svg"
                alt="GAF Certified Contractor"
                className="h-11 w-11 shrink-0 rounded-lg"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400">
                  Factory Certified
                </span>
                <span className="text-[15px] font-bold tracking-wide text-white">GAF Contractor</span>
              </span>
            </div>

            {/* NJ License */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] py-2 pl-2 pr-5 shadow-soft backdrop-blur-sm transition-colors hover:border-white/30">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 ring-4 ring-brand-600/15">
                <ShieldIcon className="h-[22px] w-[22px] text-white" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400">
                  State Licensed &amp; Insured
                </span>
                <span className="text-[15px] font-bold tracking-wide text-white">
                  {business.licenseLabel}
                </span>
              </span>
            </div>
          </div>
          <HeroServiceOrbit />
        </div>
      </div>
    </section>
  )
}
