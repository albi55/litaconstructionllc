import { useState } from 'react'
import { Link } from 'react-router-dom'
import { serviceAreas, serviceCities, services, business } from '../data/business'
import { towns } from '../data/towns'
import { roofingTowns } from '../data/roofingTowns'
import { Seo } from '../components/Seo'
import { CtaBand } from '../components/CtaBand'
import { NjMap } from '../components/NjMap'
import { QuoteForm } from '../components/QuoteForm'
import { TownStamp } from '../components/TownStamp'
import { PinIcon, ArrowIcon, PhoneIcon, ShieldIcon, ClockIcon, StarIcon } from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

/** Real project photo + drawing-set sheet code per service, for the "Services near you" cards. */
const servicePhoto: Record<string, string> = {
  roofing: '/work/roof-roof30.webp',
  siding: '/work/siding-siding6.webp',
  masonry: '/work/mansory-Mansory22.webp',
}
const serviceSheet: Record<string, string> = {
  roofing: 'R-100',
  siding: 'SD-100',
  masonry: 'M-100',
}

const localStats = [
  { n: `${serviceAreas.length}`, l: 'Counties covered' },
  { n: `${serviceCities.length}+`, l: 'Towns served' },
  { n: business.yearsExperience, l: 'Years local' },
  { n: '500+', l: 'NJ projects done' },
]

const whyLocal = [
  {
    icon: ClockIcon,
    title: 'We show up on time',
    body: 'Based in North Jersey, not dispatched from three counties away — crews reach your job site fast, and stay accountable to neighbors who talk.',
  },
  {
    icon: ShieldIcon,
    title: 'We know NJ homes',
    body: 'Two decades of shingles, siding, and stone matched to New Jersey’s freeze-thaw winters and humid summers — built for this climate, not a generic spec.',
  },
  {
    icon: StarIcon,
    title: 'Our name is on it',
    body: 'Every town we serve is a town where our reputation lives. Referrals — not ad spend — are still how most homeowners find us.',
  },
]

export function ServiceAreasPage() {
  const [active, setActive] = useState<string | null>(null)
  const mapRef = useReveal()
  const townsRef = useReveal()
  const whyRef = useReveal()
  const svcRef = useReveal()

  return (
    <>
      <Seo
        title="Service Areas — Roofing, Siding & Masonry Across NJ | Lita Construction"
        description={`Lita Construction serves Bergen, Passaic, Essex, Hudson, Morris, Union, Middlesex & Sussex Counties in New Jersey. Find your town and call ${business.phone} for a free estimate.`}
        path="/service-areas"
        schema={breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'Service Areas', url: `${business.url}/service-areas` },
        ])}
      />

      {/* ── 1. Photo hero ── */}
      <section className="relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: 'url("/showcase/house%20(1).png")' }}
          aria-hidden="true"
        />
        {/* Lighter scrim — strongest under the copy, letting the house photo breathe on the right */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-navy-950/20"
          aria-hidden="true"
        />
        <div className="container-x relative z-20 grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          {/* Left — copy & stats */}
          <div>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white/90">Service Areas</span>
            </nav>
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
              <span className="h-px w-9 bg-brand-400/70" />
              Where We Work
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">
              Serving Northern &amp; <span className="text-brand-400">Central New Jersey.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Lita Construction proudly brings roofing, siding, and masonry to homeowners across{' '}
              {serviceAreas.length} NJ counties and dozens of towns. Find your area below, or call{' '}
              {business.phone} — chances are we already cover it.
            </p>

            {/* Stat strip */}
            <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
              {localStats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-extrabold text-white">{s.n}</div>
                  <div className="mt-1 max-w-[9rem] text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — free estimate form, stamped like approved paperwork */}
          <div className="relative w-full lg:max-w-xl lg:justify-self-end">
            <TownStamp
              title="New Jersey"
              subtitle={`${serviceAreas.length} counties served`}
              className="stamp-in pointer-events-none absolute -right-4 -top-9 z-10 hidden h-28 w-28 text-brand-600 drop-shadow-lg sm:block lg:-right-7 lg:-top-11 lg:h-32 lg:w-32"
            />
            <QuoteForm />
          </div>
        </div>

        {/* Triangle divider flowing into the section below */}
        <div
          className="pointer-events-none absolute -bottom-px right-0 z-10 h-16 w-1/3 bg-cloud-100 sm:h-24 lg:h-28"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* ── 2. Map spotlight — the interactive NJ county map is the centerpiece ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div
          ref={mapRef}
          className="reveal container-x grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16"
        >
          {/* Map first on this page — it's the whole point */}
          <div className="relative order-2 mx-auto w-full max-w-sm lg:order-1 lg:max-w-none">
            {/* Plat-survey grid behind the county map, fading at the edges */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 sm:-inset-8"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(0,13,38,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,13,38,0.06) 1px, transparent 1px)',
                backgroundSize: '26px 26px',
                maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 78%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 78%)',
              }}
            />
            <div className="relative mx-auto aspect-[15.8/33.45] max-w-sm">
              <NjMap active={active} onHover={setActive} />
            </div>
            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink-800 shadow-soft">
                <span className="h-2.5 w-2.5 rounded-sm bg-brand-600" aria-hidden="true" />
                {active ? `${active} County` : `${serviceAreas.length} counties served`}
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {/* Drawing-set sheet tag — this section is the job set's plat sheet */}
            <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/60 bg-sand-100/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
              Plat G-100 · County Coverage
            </span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              {serviceAreas.length} counties. One trusted contractor.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-cloud-600">
              Hover a county to see it light up on the map. Every county below gets the same
              GAF-certified crews, honest pricing, and 25-year warranty — no matter your zip code.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-1">
              {serviceAreas.map((county) => {
                const name = county.replace(' County', '')
                const isActive = active === name
                return (
                  <li
                    key={county}
                    onMouseEnter={() => setActive(name)}
                    onMouseLeave={() => setActive(null)}
                    className={`flex cursor-default items-center gap-2.5 border-b py-3 text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'border-brand-600/40 text-brand-600'
                        : 'border-cloud-300 text-ink-800'
                    }`}
                  >
                    <PinIcon className="h-4 w-4 shrink-0 text-brand-600" />
                    {county}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 3. Towns — chip grid ── */}
      <section className="bg-white py-20 sm:py-28">
        <div ref={townsRef} className="reveal container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              {/* Sheet G-000 — the sheet index is always the first page of a drawing set */}
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/60 bg-sand-100/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
                Sheet G-000 · Town Index
              </span>
              <h2 className="mt-6 font-display text-display-md text-ink-900">Find your town.</h2>
              <p className="mt-5 text-lg leading-relaxed text-cloud-600">
                Every highlighted town opens its own local guide — don&apos;t see yours? Call us;
                we very likely cover it too.
              </p>
            </div>
            <a href={business.phoneHref} className="btn-ghost shrink-0">
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
          </div>

          {/* Masonry & chimney town guides — Bergen County */}
          <div className="mt-10 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cloud-500">
              Masonry, Chimney &amp; Stucco Guides — Bergen County
            </p>
            <span className="h-px flex-1 bg-cloud-300" aria-hidden="true" />
            <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-sand-700">
              {towns.length} towns
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {towns.map((t) => (
              <Link
                key={t.slug}
                to={`/service-areas/${t.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-brand-600/30 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
              >
                <PinIcon className="h-4 w-4" />
                {t.name}, NJ
              </Link>
            ))}
          </div>

          {/* Roofing town guides — Monmouth & Somerset Counties */}
          <div className="mt-8 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cloud-500">
              Elite Roofing Guides — Monmouth &amp; Somerset Counties
            </p>
            <span className="h-px flex-1 bg-cloud-300" aria-hidden="true" />
            <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-sand-700">
              {roofingTowns.length} towns
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {roofingTowns.map((t) => (
              <Link
                key={t.slug}
                to={`/service-areas/${t.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-navy-950/15 bg-navy-950/[0.04] px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-600/40 hover:bg-brand-50 hover:text-brand-600"
              >
                <PinIcon className="h-4 w-4 text-brand-600" />
                {t.name}, NJ
              </Link>
            ))}
          </div>

          {/* Other towns we cover weekly */}
          <div className="mt-8 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cloud-500">
              And Communities Across North &amp; Central Jersey
            </p>
            <span className="h-px flex-1 bg-cloud-300" aria-hidden="true" />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {serviceCities
              .filter((city) => !towns.some((t) => t.name === city))
              .map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-cloud-100 px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-600/40 hover:bg-brand-50 hover:text-brand-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
                  {city}, NJ
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* ── 4. Why local matters — navy anchor ── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/12 blur-3xl"
          aria-hidden="true"
        />
        <div ref={whyRef} className="reveal container-x relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
              <span className="h-px w-9 bg-brand-400/70" />
              Local, Not Franchised
            </span>
            <h2 className="mt-6 font-display text-display-md text-white">
              Why it matters that we&apos;re from here.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Anyone can drive a truck across county lines. What you get with Lita Construction is
              a crew that actually lives in the region it serves.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyLocal.map((v) => (
              <div
                key={v.title}
                className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-sand-400/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Services near you — photo cards ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div ref={svcRef} className="reveal container-x">
          <span className="eyebrow">In Your Neighborhood</span>
          <h2 className="mt-5 font-display text-display-md text-ink-900">
            Full-service exterior work, locally.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group relative block h-64 overflow-hidden rounded-2xl bg-navy-950 shadow-soft transition-shadow duration-300 hover:shadow-card"
              >
                <img
                  src={servicePhoto[s.slug]}
                  alt={`${s.name} project by Lita Construction`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent"
                  aria-hidden="true"
                />
                {/* Drawing title block — top edge, so the card copy keeps the bottom */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 bg-navy-950/70 px-5 py-2.5 backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-sand-400">
                    Sheet {serviceSheet[s.slug] ?? 'A-100'} — {s.name}
                  </span>
                  <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:block">
                    Lita · Est. 2004
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-white">{s.name}</h3>
                  <p className="mt-1 text-sm text-white/75">{s.short}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400">
                    Explore
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Serving your town? Let's get started." />
    </>
  )
}
