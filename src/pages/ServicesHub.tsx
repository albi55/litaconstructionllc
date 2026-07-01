import { Link } from 'react-router-dom'
import { services, business } from '../data/business'
import { Seo } from '../components/Seo'
import { CheckIcon, ArrowIcon, PhoneIcon, ShieldIcon, StarIcon } from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

/**
 * Every service we offer, richest first. The three with dedicated detail pages
 * (roofing / siding / masonry) link there; the rest route to the portfolio.
 * `intro` is used where available for a fuller description than `blurb`.
 */
type ServiceCard = {
  name: string
  eyebrow: string
  desc: string
  features: string[]
  image: string
  to: string
  cta: string
  icon: string
  hasPage: boolean
}

const CARDS: ServiceCard[] = [
  {
    name: 'Roofing',
    eyebrow: 'GAF-Certified Roofing',
    desc: services[0].intro,
    features: services[0].features,
    image: '/work/roof-roof30.webp',
    to: '/services/roofing',
    cta: 'Explore Roofing',
    icon: '/services/roofing-icon.png',
    hasPage: true,
  },
  {
    name: 'Siding',
    eyebrow: 'Exterior & Siding',
    desc: services[1].intro,
    features: services[1].features,
    image: '/work/siding-siding6.webp',
    to: '/services/siding',
    cta: 'Explore Siding',
    icon: '/services/siding-icon.png',
    hasPage: true,
  },
  {
    name: 'Masonry',
    eyebrow: 'Brick, Block & Stone',
    desc: services[2].intro,
    features: services[2].features,
    image: '/work/mansory-Mansory10.webp',
    to: '/services/masonry',
    cta: 'Explore Masonry',
    icon: '/services/masonry-icon.png',
    hasPage: true,
  },
  {
    name: 'Renovation',
    eyebrow: 'Remodeling & Renovation',
    desc: 'Full interior and exterior remodeling that transforms how your home lives and looks — from single rooms to whole-house renovations, permits handled and finished with meticulous craftsmanship.',
    features: [
      'Whole-home & room remodels',
      'Kitchens & living spaces',
      'Interior & exterior upgrades',
      'Permits handled for you',
    ],
    image: '/work/renovation-Renovation1.webp',
    to: '/projects',
    cta: 'See Renovation Work',
    icon: '/services/renovation-icon.png',
    hasPage: false,
  },
  {
    name: 'Bathroom',
    eyebrow: 'Bathroom Remodeling',
    desc: 'Modern, functional bathroom remodels done right — from tile, tubs, and showers to plumbing, vanities, and waterproofing — built to look beautiful and last for years.',
    features: [
      'Full bathroom remodels',
      'Tile, tubs & showers',
      'Vanities & fixtures',
      'Waterproofing done right',
    ],
    image: '/work/bathroom-Bathroom7.webp',
    to: '/projects',
    cta: 'See Bathroom Work',
    icon: '/services/bathroom-icon.png',
    hasPage: false,
  },
  {
    name: 'Chimney',
    eyebrow: 'Chimney Repair & Rebuilds',
    desc: 'Chimney repair, repointing, and full rebuilds that restore safety, function, and curb appeal — keeping your home protected from the top down with a free safety inspection.',
    features: [
      'Repointing & crown repair',
      'Full chimney rebuilds',
      'Flashing & leak repair',
      'Free safety inspection',
    ],
    image: '/work/chimney-Chimney1.webp',
    to: '/projects',
    cta: 'See Chimney Work',
    icon: '/services/chimney-icon.png',
    hasPage: false,
  },
]

const HERO_STATS = [
  { n: '6', l: 'Trades under one roof' },
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
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 text-white sm:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-brand-400">
                  <ShieldIcon className="h-5 w-5" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                    {business.licenseLabel}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                  Not sure which service you need?
                </h2>
                <p className="mt-3 text-white/70">
                  Tell us what&apos;s going on with your home and we&apos;ll point you in the right
                  direction — with a free, no-obligation estimate. No pressure, ever.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <a href={business.phoneHref} className="btn-ghost-light">
                  <PhoneIcon className="h-4 w-4" />
                  {business.phone}
                </a>
                <Link to="/contact" className="btn-primary">
                  Get a Free Estimate
                  <ArrowIcon className="h-4 w-4" />
                </Link>
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
              <img
                src={card.icon}
                alt=""
                aria-hidden="true"
                className="h-full w-full scale-110 object-cover"
              />
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
