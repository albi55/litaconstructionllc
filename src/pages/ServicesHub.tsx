import { Link } from 'react-router-dom'
import { business, serviceGroups, serviceBySlug } from '../data/business'
import { Seo } from '../components/Seo'
import { CheckIcon, ArrowIcon, PhoneIcon, ShieldIcon, StarIcon, ServiceGlyph, servicePhoto } from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

/**
 * The /services hub lists every service in the four trade groups as a rich,
 * alternating editorial row. Cards are derived from `serviceGroups` so the hub,
 * nav, homepage, and footer always stay in sync. A service that belongs to more
 * than one group (Commercial Roofing) is shown once, under its first group.
 */
type ServiceCard = {
  name: string
  eyebrow: string
  desc: string
  features: string[]
  image: string
  to: string
  cta: string
  slug: string
  hasPage: boolean
}

const CARDS: ServiceCard[] = serviceGroups
  .flatMap((group) => group.slugs.map((slug) => ({ group: group.name, slug })))
  // De-duplicate services that appear in more than one group (keep first occurrence).
  .filter((entry, i, arr) => arr.findIndex((e) => e.slug === entry.slug) === i)
  .map(({ group, slug }) => {
    const s = serviceBySlug(slug)!
    return {
      name: s.name,
      eyebrow: group,
      desc: s.intro,
      features: s.features.slice(0, 6),
      image: servicePhoto[slug] ?? '/work/roof-roof30.webp',
      to: `/services/${slug}`,
      cta: `Explore ${s.name}`,
      slug,
      hasPage: true,
    }
  })

const HERO_STATS = [
  { n: String(CARDS.length), l: 'Services under one roof' },
  { n: business.yearsExperience, l: 'Years in business' },
  { n: 'GAF', l: 'Certified contractor' },
  { n: '100%', l: 'Licensed & insured' },
]

export function ServicesHub() {
  return (
    <>
      <Seo
        title="Our Services — Roofing, Siding, Masonry & More | Lita Construction LLC"
        description={`Explore Lita Construction's roofing, siding, masonry, renovation, bathroom, and chimney services across Northern & Central New Jersey. GAF certified, fully insured. Free estimates — call ${business.phone}.`}
        path="/services"
        schema={breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'Services', url: `${business.url}/services` },
        ])}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: 'url("/showcase/house%20(2).png")' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/55"
          aria-hidden="true"
        />
        <div className="container-x relative py-20 sm:py-28">
          <nav
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90">Services</span>
          </nav>
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
            <span className="h-px w-9 bg-brand-400/70" />
            What We Do
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">
            Everything your home needs.{' '}
            <span className="text-brand-400">One trusted crew.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            From the roof down to the foundation, Lita Construction is your single, accountable
            partner for the work that protects and elevates your New Jersey home — no
            subcontractor runaround, no finger-pointing.
          </p>

          {/* Stat strip */}
          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
            {HERO_STATS.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-extrabold text-white">{s.n}</div>
                <div className="mt-1 max-w-[9rem] text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services — alternating editorial rows ── */}
      <section className="bg-cloud-100 py-16 sm:py-24">
        <div className="container-x space-y-16 sm:space-y-24">
          {CARDS.map((card, i) => (
            <ServiceRow key={card.name} card={card} index={i} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* ── Closing band ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white shadow-lift ring-1 ring-white/10 sm:p-12 lg:p-14">
            {/* Layered depth — matches the site's designed-surface treatment */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/30"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand-600/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl"
              aria-hidden="true"
            />
            {/* Faint dot grid for texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-400 ring-1 ring-white/10">
                  <ShieldIcon className="h-4 w-4" />
                  {business.licenseLabel}
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
                  Not sure which service you need?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                  Tell us what&apos;s going on with your home and we&apos;ll point you in the right
                  direction — with a free, no-obligation estimate. No pressure, ever.
                </p>

                {/* Trust row */}
                <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
                  {['GAF Certified', 'Fully Insured', 'Free Estimates'].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-medium text-white/80">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white shadow-red transition-all duration-300 hover:bg-brand-500 active:scale-[0.98]"
                >
                  Get a Free Estimate
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <a
                  href={business.phoneHref}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:bg-white/[0.08]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition-transform group-hover:scale-105">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                      Call for a free estimate
                    </span>
                    <span className="font-display text-base font-bold text-white">
                      {business.phone}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceRow({
  card,
  index,
  flip,
}: {
  card: ServiceCard
  index: number
  flip: boolean
}) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal">
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
          flip ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Text */}
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#f2f5f8] shadow-soft ring-1 ring-navy-950/5">
              <ServiceGlyph slug={card.slug} name={card.name} />
            </span>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-600">
                {card.eyebrow}
              </div>
              <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                {card.name}
              </h2>
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-cloud-600">{card.desc}</p>

          <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {card.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-ink-800">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                {f}
              </li>
            ))}
          </ul>

          <Link to={card.to} className="btn-primary mt-8">
            {card.cta}
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Image with red offset frame */}
        <div className="relative">
          <div
            className={`pointer-events-none absolute -bottom-4 h-full w-full rounded-3xl bg-brand-600/90 ${
              flip ? '-left-4' : '-right-4'
            }`}
            aria-hidden="true"
          />
          <div className="group relative overflow-hidden rounded-3xl bg-navy-950 shadow-card">
            <img
              src={card.image}
              alt={`${card.name} project by Lita Construction in New Jersey`}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"
              aria-hidden="true"
            />
            {/* Badge: has detail page vs portfolio */}
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-navy-950 backdrop-blur-sm">
              {card.hasPage ? (
                <>
                  <StarIcon className="h-3.5 w-3.5 text-brand-600" />
                  Signature Service
                </>
              ) : (
                'In Our Portfolio'
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
