import { useState } from 'react'
import { Link } from 'react-router-dom'
import { business, homeServices, serviceAreas, serviceCities } from '../data/business'
import { Seo } from '../components/Seo'
import { ServingTagline } from '../components/ServingTagline'
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
import { NjMap } from '../components/NjMap'

/** Shown when a service slug has no photo mapped, so the card never renders a broken image. */
const FALLBACK_PHOTO = '/work/roof-roof30.webp'

/** Real project photo per service, for the "What We Do" cards. */
const servicephoto: Record<string, string> = {
  // Legacy trades (kept for any direct references)
  roofing: '/work/roof-roof30.webp',
  siding: '/work/siding-siding6.webp',
  masonry: '/work/mansory-Mansory22.webp',
  renovation: '/work/renovation-Renovation1.webp',
  bathroom: '/work/bathroom-Bathroom7.webp',
  chimney: '/work/chimney-Chimney1.webp',
  gutters: '/work/siding-siding6.webp',
  'windows-doors': '/work/siding-siding6.webp',
  painting: '/work/siding-siding1.webp',
  // Grouped services shown across the site
  'roof-repair': '/work/roof-roof14.webp',
  'roof-replacement': '/work/roof-roof30.webp',
  'commercial-roofing': '/work/roof-roof45.webp',
  'residential-roofing': '/work/roof-roof30.webp',
  'siding-installation': '/work/siding-siding6.webp',
  'siding-replacement': '/work/siding-siding10.webp',
  'siding-repair': '/work/siding-siding10.webp',
  'masonry-work': '/work/mansory-Mansory22.webp',
  'chimney-services': '/work/chimney-Chimney1.webp',
  'decks-pavers': '/Pavec/lita-outdoor-living-space-05-nj.webp',
}


const values = [
  {
    icon: HandshakeIcon,
    title: 'The personal touch',
    body: 'You call us, you talk to the family — never a call center. You’ll see the same faces from start to finish, because if our name is on the truck in your driveway, we make sure the job is done right.',
  },
  {
    icon: ShieldIcon,
    title: 'No shortcuts',
    body: 'We bring the toughness and technical skill learned in 1991 — from the hot-tar kettles of Old Brooklyn — to every local project we take on today. That old-school work ethic is the backbone of everything we do.',
  },
  {
    icon: StarIcon,
    title: 'Family pride',
    body: 'Because we are fathers, sons, and brothers, we hold each other to a higher standard. We treat your roof and your home with the same care we give our own.',
  },
]

const milestones = [
  {
    year: '1991',
    title: 'Built on grit',
    text: 'John Lita first learns the trade on the blistering rooftops of Old Brooklyn, mastering the “hot tar” kettle alongside his Uncle Peter at Statewide Roofing.',
  },
  {
    year: '2004',
    title: 'Planting roots in NJ',
    text: 'John brings two decades of hard-earned expertise across the river to New Jersey, founding Lita Construction as a local, family-focused operation.',
  },
  {
    year: 'Two decades',
    title: 'A neighborhood fixture',
    text: 'Growing by word-of-mouth and the satisfaction of neighbors, the family stays focused on the craft — residential roofing, siding, and old-school Brooklyn masonry.',
  },
  {
    year: 'Today',
    title: 'A true family team',
    text: 'Run by John alongside his brothers Gus and Max and his son John Jr., with his nephews carrying on the tradition — still proudly family-run.',
  },
]

const proofPoints = [
  `Learning the trade since 1991 · in NJ since ${business.founded}`,
  'GAF-certified roofing contractor',
  'Fully licensed & insured in New Jersey',
  'Our own dedicated, family-led crew',
]

export function AboutPage() {
  const story = useReveal()
  const svc = useReveal()
  const why = useReveal()
  const family = useReveal()
  const commercial = useReveal()
  const timeline = useReveal()
  const areas = useReveal()
  const [activeCounty, setActiveCounty] = useState<string | null>(null)

  return (
    <>
      <Seo
        title="About Lita Construction LLC | Family-Owned NJ Contractor Since 2004"
        description="Built on grit since 1991, family-owned since 2004. Lita Construction is a GAF-certified roofing, siding & masonry contractor run by John Lita and his family across Northern & Central New Jersey. Read our story."
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
            Built on Grit. <span className="text-brand-400">Bound by Family.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            From the hot-tar rooftops of 1991 Brooklyn to the homes we protect across New Jersey
            today, the tools have changed — but our old-school work ethic and family values haven’t.
          </p>
        </div>

        {/* Triangle divider flowing into the section below */}
        <div
          className="pointer-events-none absolute -bottom-px right-0 z-10 h-16 w-1/3 bg-cloud-100 sm:h-24 lg:h-28"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          aria-hidden="true"
        />
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
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              From Old Brooklyn rooftops to your New Jersey home.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-cloud-600">
              <p>
                Our story doesn&apos;t begin in a modern showroom. It begins in 1991, on the
                blistering rooftops of &ldquo;Old Brooklyn.&rdquo; Our founder, {business.founder},
                first learned the trade working alongside his Uncle Peter for Statewide Roofing —
                mastering the &ldquo;hot tar&rdquo; kettle, a hands-on craft that demanded patience,
                precision, and a toughness rarely seen in the industry today. That old-school work
                ethic is the backbone of everything we do.
              </p>
              <p>
                In {business.founded}, John brought those years of experience across the river to
                New Jersey and established Lita Construction as a local, family-focused operation.
                We didn&apos;t want to be a giant corporation with a fleet of strangers — we wanted
                to be the local family you could trust. When you call{' '}
                <a href={business.phoneHref} className="font-semibold text-brand-600 hover:underline">
                  {business.phone}
                </a>
                , you&apos;re not talking to a call center. You&apos;re talking to the family.
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
                    src={encodeURI(servicephoto[s.key] ?? FALLBACK_PHOTO)}
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

          {/* Serving-since trust line */}
          <div className="mt-12 flex justify-center border-t border-white/10 pt-12">
            <ServingTagline tone="dark" />
          </div>
        </div>
      </section>

      {/* ── 4b. A true family operation ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div ref={family} className="reveal container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">A True Family Operation</span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              When we say family business, we mean it.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              Today, Lita Construction is run by John alongside his brothers, Gus and Max, and his
              son, John Jr. — with his nephews working within the business to carry on the tradition.
              We employ our own dedicated crew so every project meets our standards, and because our
              name is on the truck, there&apos;s a level of personal accountability you just
              won&apos;t find with a big corporation.
            </p>
          </div>

          {/* The people behind the name */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'John Lita', role: 'Founder & Owner' },
              { name: 'Gus & Max', role: 'Brothers · Partners' },
              { name: 'John Jr.', role: 'Next Generation' },
              { name: 'The Nephews', role: 'Carrying the Tradition' },
            ].map((person, i) => (
              <Fade key={person.name} index={i}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-cloud-200 bg-white p-6 text-center shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <HandshakeIcon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 font-display text-lg font-bold text-ink-900">{person.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cloud-500">
                    {person.role}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4c. Proven professional expertise (commercial credentials) ── */}
      <section className="bg-white py-20 sm:py-28">
        <div
          ref={commercial}
          className="reveal container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16"
        >
          <div>
            <span className="eyebrow">Proven Professional Expertise</span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              Residential heart. Big-project precision.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-cloud-600">
              <p>
                While our heart is in residential work, our technical skill is trusted at the highest
                levels. John&apos;s decades of experience include overseeing major commercial TPO
                roofing projects for iconic buildings — bringing a superior level of technical
                knowledge and &ldquo;big project&rdquo; precision to every local home we service.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                'NY Times printing press — Whitestone, NY',
                'The Alexander — Edgewater, NJ',
                'Commercial TPO roofing at scale',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-ink-800">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Marquee credential card */}
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-10 text-white shadow-lift">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-600/20 blur-3xl"
              aria-hidden="true"
            />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
              <ShieldIcon className="h-6 w-6" />
            </span>
            <p className="relative mt-6 font-display text-2xl font-bold leading-snug text-white">
              &ldquo;From the traditional tar roofs of the early 90s to the local projects of today,
              the tools have changed — but our family values haven&apos;t.&rdquo;
            </p>
            <p className="relative mt-6 text-sm text-white/60">
              {business.founder} · Founder, {business.shortName}
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Journey timeline ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div ref={timeline} className="reveal container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              Two generations of grit.
            </h2>
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
        <div
          ref={areas}
          className="reveal container-x grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        >
          {/* Left: copy, county chips & CTA */}
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

            {/* County chips — hovering highlights the county on the map */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {serviceAreas.map((a) => {
                const name = a.replace(' County', '')
                const isActive = activeCounty === name
                return (
                  <div
                    key={a}
                    onMouseEnter={() => setActiveCounty(name)}
                    onMouseLeave={() => setActiveCounty(null)}
                    className={`flex cursor-default items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-brand-600/40 bg-brand-50 text-brand-600'
                        : 'border-cloud-200 bg-cloud-100 text-ink-800'
                    }`}
                  >
                    <PinIcon className="h-4 w-4 shrink-0 text-brand-600" />
                    {a}
                  </div>
                )
              })}
            </div>

            <Link to="/service-areas" className="btn-primary mt-8">
              View All Service Areas
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: interactive New Jersey county map */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
            <div className="relative aspect-[15.8/33.45]">
              <NjMap active={activeCounty} onHover={setActiveCounty} />
            </div>

            {/* Readout pill under the map */}
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink-800 shadow-soft">
                <span className="h-2.5 w-2.5 rounded-sm bg-brand-600" aria-hidden="true" />
                {activeCounty ? `${activeCounty} County` : `${serviceAreas.length} counties served`}
              </span>
            </div>
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
