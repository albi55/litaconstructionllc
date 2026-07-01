import { Link } from 'react-router-dom'
import { business, homeServices, serviceAreas, serviceCities } from '../data/business'
import { Seo } from '../components/Seo'
import {
  ShieldIcon,
  StarIcon,
  HandshakeIcon,
  CheckIcon,
  PhoneIcon,
  ArrowIcon,
  PinIcon,
} from '../components/icons'
import { localBusinessSchema, breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

/** Real project photo per service, for the "What We Do" cards. */
const servicephoto: Record<string, string> = {
  roofing: '/work/roof-roof30.webp',
  siding: '/work/siding-siding6.webp',
  masonry: '/work/mansory-Mansory22.webp',
  renovation: '/work/renovation-Renovation1.webp',
  bathroom: '/work/bathroom-Bathroom7.webp',
  chimney: '/work/chimney-Chimney1.webp',
}

const aboutStats = [
  { n: business.yearsExperience, l: 'Years of Experience' },
  { n: '500+', l: 'Projects Completed' },
  { n: '8', l: 'Counties Served' },
  { n: '25-Yr', l: 'Workmanship Warranty' },
]

const values = [
  {
    icon: HandshakeIcon,
    title: 'Integrity first',
    body: 'Honest recommendations, transparent itemized pricing, and zero high-pressure sales. If a repair is the smarter call than a replacement, we tell you.',
  },
  {
    icon: ShieldIcon,
    title: 'Built to last',
    body: 'Premium GAF-certified materials and proven techniques, backed by a written 25-year warranty on labor and materials — the strongest protection in the industry.',
  },
  {
    icon: StarIcon,
    title: 'Craftsmanship',
    body: 'Two decades of hands-on experience in every shingle, seam, and stone. We treat your home like our own and leave every job site spotless.',
  },
]

const milestones = [
  {
    year: '2004',
    title: 'The beginning',
    text: 'Johnny Lita founds Lita Construction on a simple promise: treat every homeowner’s project with the same care he’d want for his own family.',
  },
  {
    year: '2010',
    title: 'Growing by word of mouth',
    text: 'Reputation spreads across Bergen, Passaic, and Essex counties. Referrals — not advertising — become the backbone of the business.',
  },
  {
    year: '2016',
    title: 'GAF certified',
    text: 'Earns GAF certification, unlocking the industry-leading 25-year warranty on labor and materials for qualifying roof installations.',
  },
  {
    year: 'Today',
    title: 'Trusted across NJ',
    text: 'Chosen by 500+ New Jersey homeowners for roofing, siding, masonry, and full renovations — and still proudly family-run.',
  },
]

const proofPoints = [
  `Founded ${business.founded} by ${business.founder}`,
  'GAF-certified roofing contractor',
  'Fully licensed & insured in New Jersey',
  '25-year workmanship warranty',
]

export function AboutPage() {
  const story = useReveal()
  const svc = useReveal()
  const why = useReveal()
  const timeline = useReveal()
  const areas = useReveal()

  return (
    <>
      <Seo
        title="About Lita Construction LLC | Family-Owned NJ Contractor Since 2004"
        description="Founded in 2004 by Johnny Lita, Lita Construction is a family-owned, GAF-certified roofing, siding & masonry contractor serving Northern & Central New Jersey. Learn our story."
        path="/about"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'About', url: `${business.url}/about` },
          ]),
        ]}
      />

      {/* ── 1. Hero ── */}
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
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90">About</span>
          </nav>
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
            <span className="h-px w-9 bg-brand-400/70" />
            Our Story
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">
            Family-owned. <span className="text-brand-400">Built on trust.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Since {business.founded}, Lita Construction has protected New Jersey homes with honest
            work, premium materials, and the accountability only a family business can offer.
          </p>
        </div>
      </section>

      {/* ── 2. Story + real photo ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div
          ref={story}
          className="reveal container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20"
        >
          <div className="relative order-1">
            <div
              className="absolute -bottom-5 -left-5 h-full w-full rounded-3xl bg-brand-600"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift">
              <img
                src="/aboutimage.jpg"
                alt="A completed Lita Construction project in New Jersey"
                className="h-full w-full object-cover"
                width={3024}
                height={4032}
                loading="lazy"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="absolute -bottom-6 right-4 rounded-2xl border border-cloud-200 bg-white px-6 py-4 shadow-card sm:right-6">
              <p className="font-display text-lg font-bold text-ink-900">{business.founder}</p>
              <p className="text-xs text-cloud-500">Founder &amp; Owner</p>
            </div>
          </div>

          <div className="order-2">
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              Two decades of building trust, one project at a time.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-cloud-600">
              <p>
                When {business.founder} founded Lita Construction in {business.founded}, he set out
                to do something simple but rare in this industry: treat every homeowner&apos;s
                project with the same care, honesty, and craftsmanship he&apos;d want for his own
                family&apos;s home.
              </p>
              <p>
                More than twenty years later, that promise still drives everything we do. We&apos;re
                not a faceless franchise or a call center three states away — when you call{' '}
                <a href={business.phoneHref} className="font-semibold text-brand-600 hover:underline">
                  {business.phone}
                </a>
                , you reach the people who actually do the work and stake their family name on every
                job.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {proofPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm font-medium text-ink-800">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/contact" className="btn-primary">
                Get a Free Estimate
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a href={business.phoneHref} className="btn-ghost">
                <PhoneIcon className="h-4 w-4" />
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. What We Do — photo cards ── */}
      <section className="bg-white py-20 sm:py-28">
        <div ref={svc} className="reveal container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">What We Do</span>
              <h2 className="mt-6 font-display text-display-md text-ink-900">
                Everything your home needs, in-house.
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900 transition-colors hover:text-brand-600"
            >
              All Services
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((s, i) => (
              <Fade key={s.key} index={i % 3}>
                <Link
                  to={s.to}
                  className="group relative block h-64 overflow-hidden rounded-2xl bg-navy-950 shadow-soft transition-shadow duration-300 hover:shadow-card"
                >
                  <img
                    src={servicephoto[s.key]}
                    alt={`${s.name} project by Lita Construction`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white">{s.name}</h3>
                    <p className="mt-1 text-sm text-white/75">{s.features[0]}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400">
                      Explore
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Why us + values + stats (one navy anchor) ── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/12 blur-3xl"
          aria-hidden="true"
        />
        <div ref={why} className="reveal container-x relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
              <span className="h-px w-9 bg-brand-400/70" />
              Why Homeowners Choose Us
            </span>
            <h2 className="mt-6 font-display text-display-md text-white">
              The standards behind the family name.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Anyone can quote a price. What sets us apart is how we work — and the values we hold
              on every roof, every wall, and every handshake.
            </p>
          </div>

          {/* Values */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Fade key={v.title} index={i}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-brand-400/40 hover:bg-white/[0.07]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70">{v.body}</p>
                </div>
              </Fade>
            ))}
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-12 sm:grid-cols-4">
            {aboutStats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-4xl font-extrabold text-brand-400 sm:text-5xl">
                  {s.n}
                </div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Journey timeline ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div ref={timeline} className="reveal container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">Built over two decades.</h2>
          </div>

          <ol className="mt-14 grid gap-y-10 md:grid-cols-4 md:gap-x-8">
            {milestones.map((m, i) => (
              <Fade key={m.year} index={i} step={120}>
                <li className="relative">
                  {i < milestones.length - 1 && (
                    <span
                      className="absolute left-5 right-0 top-5 hidden h-px -translate-y-1/2 bg-gradient-to-r from-brand-600/50 to-cloud-300 md:block"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-black text-white shadow-card ring-4 ring-cloud-100">
                    {i + 1}
                  </span>
                  <div className="mt-5">
                    <div className="font-display text-2xl font-extrabold text-ink-900">{m.year}</div>
                    <div className="mt-1 text-sm font-bold uppercase tracking-wider text-brand-600">
                      {m.title}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-cloud-600">{m.text}</p>
                  </div>
                </li>
              </Fade>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 6. Service areas ── */}
      <section className="bg-white py-20 sm:py-28">
        <div ref={areas} className="reveal container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">Where We Work</span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              Proudly local to North Jersey.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              We live and work in the communities we serve — {serviceCities.length}+ towns across{' '}
              {serviceAreas.length} counties. If you don&apos;t see your town, call us; chances are
              we cover it.
            </p>
            <Link to="/service-areas" className="btn-primary mt-8">
              View All Service Areas
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {serviceAreas.map((a) => (
              <div
                key={a}
                className="flex items-center gap-2.5 rounded-xl border border-cloud-200 bg-cloud-100 px-4 py-3 text-sm font-medium text-ink-800 transition-colors hover:border-brand-600/30"
              >
                <PinIcon className="h-4 w-4 shrink-0 text-brand-600" />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Fade({
  children,
  index,
  step = 100,
}: {
  children: React.ReactNode
  index: number
  step?: number
}) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${index * step}ms` }}>
      {children}
    </div>
  )
}
