import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { roofingTowns, type RoofingTown } from '../data/roofingTowns'
import { Seo } from '../components/Seo'
import { CtaBand } from '../components/CtaBand'
import { QuoteForm } from '../components/QuoteForm'
import { TownStamp } from '../components/TownStamp'
import { GafBadge } from '../components/GafBadge'
import { TownServiceLinks } from '../components/TownServiceLinks'
import {
  PhoneIcon,
  ArrowIcon,
  CheckIcon,
  ShieldIcon,
  PinIcon,
} from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

/** Showcase hero photos — rotated per town so neighboring pages don't look cloned. */
const heroImages = [
  '/showcase/house%20(1).png',
  '/showcase/house%20(2).png',
  '/showcase/house3.png',
]

const heroTrust = [
  'GAF Master Elite®',
  'Golden Pledge® 50-Year Warranty',
  'Velux® Certified',
  'Licensed & Insured Since 2004',
]

export function RoofingTownPage({ town }: { town: RoofingTown }) {
  const heroRef = useReveal()
  const replaceRef = useReveal()
  const repairRef = useReveal()
  const brandsRef = useReveal()

  const index = roofingTowns.findIndex((t) => t.slug === town.slug)
  const heroImage = heroImages[((index % 3) + 3) % 3]
  // Two neighbors in the series for the "also serving" cross-links
  const nearby = [
    roofingTowns[(index + 1) % roofingTowns.length],
    roofingTowns[(index + 2) % roofingTowns.length],
  ]

  return (
    <>
      <Seo
        title={`Roof Replacement & Leak Repair in ${town.name}, NJ ${town.zips[0]} | Lita Construction`}
        description={`Elite roof replacement & structural leak repair in ${town.name}, NJ ${town.zips.join(', ')}. ${town.subtitle} GAF Master Elite® systems, chimney flashing & Velux® skylights. Call ${business.phone}.`}
        path={`/service-areas/${town.slug}`}
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'Service Areas', url: `${business.url}/service-areas` },
            { name: `${town.name}, NJ`, url: `${business.url}/service-areas/${town.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Roof Replacement & Structural Leak Repair',
            provider: { '@id': `${business.url}/#business` },
            areaServed: { '@type': 'City', name: `${town.name}, NJ` },
            description: `GAF Master Elite® roof replacement, chimney flashing, Velux® skylight restoration, and forensic leak repair for ${town.name}, New Jersey (${town.zips.join(', ')}).`,
            url: `${business.url}/service-areas/${town.slug}`,
          },
        ]}
      />

      {/* ── 1. Hero — showcase photo, glass panel, trust chips ── */}
      <section className="relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url("${heroImage}")` }}
          aria-hidden="true"
        />
        {/* Lighter scrim — strongest under the copy, letting the house photo breathe on the right */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-navy-950/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/70 to-transparent"
          aria-hidden="true"
        />

        <div
          ref={heroRef}
          className="reveal container-x relative z-20 grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16"
        >
          {/* Left — copy */}
          <div>
            <nav
              className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <Link to="/service-areas" className="hover:text-white">
                Service Areas
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white/90">{town.name}, NJ</span>
            </nav>

            {/* ZIP badge + eyebrow */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
                <span className="h-px w-9 bg-brand-400/70" />
                GAF Master Elite® Roofing
              </span>
              {town.zips.map((z) => (
                <span
                  key={z}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-wider text-white/90 backdrop-blur-sm"
                >
                  {town.name} {z}
                </span>
              ))}
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">
              Elite roof replacement &amp;{' '}
              <span className="text-brand-400">structural leak repair</span> in {town.name}, NJ.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{town.subtitle}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/70">{town.intro}</p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={business.phoneHref} className="btn-primary">
                <PhoneIcon className="h-4 w-4" />
                Call Now: {business.phone}
              </a>
            </div>

            {/* Trust chip strip + GAF Master Elite badge */}
            <div className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {heroTrust.map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85">
                    <CheckIcon className="h-4 w-4 text-brand-400" />
                    {t}
                  </span>
                ))}
              </div>
              <GafBadge tone="onDark" size="sm" className="shrink-0" />
            </div>
          </div>

          {/* Right — free estimate form, stamped like approved paperwork */}
          <div className="relative w-full lg:max-w-xl lg:justify-self-end">
            <TownStamp
              title={town.name}
              subtitle={`ZIP ${town.zips[0]} · NJ`}
              className="stamp-in pointer-events-none absolute -right-4 -top-9 z-10 hidden h-28 w-28 text-brand-600 drop-shadow-lg sm:block lg:-right-7 lg:-top-11 lg:h-32 lg:w-32"
            />
            <QuoteForm />
          </div>
        </div>

        <div
          className="pointer-events-none absolute -bottom-px right-0 z-10 h-16 w-1/3 bg-cloud-100 sm:h-24 lg:h-28"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* ── 2. Roof replacement — numbered feature section ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div ref={replaceRef} className="reveal container-x">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              {/* Drawing-set sheet tag — this section is a sheet in the job set */}
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/60 bg-sand-100/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
                Sheet R-101 · Replacement
              </span>
              <h2 className="mt-6 font-display text-display-md text-ink-900">
                {town.replacement.heading}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cloud-600">{town.replacement.lead}</p>
              <Link to="/services/roof-replacement" className="btn-primary mt-8">
                Roof Replacement Details
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-5">
              {town.replacement.bullets.map((b, i) => (
                <div
                  key={b.title || b.body.slice(0, 30)}
                  className="rounded-2xl border border-cloud-200 bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-card"
                >
                  <div className="flex items-start gap-4">
                    {/* Detail-callout bubble, as on a drawing sheet */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sand-400/70 font-display text-sm font-black text-sand-700">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <div>
                      {b.title && (
                        <h3 className="font-display text-lg font-bold text-ink-900">{b.title}</h3>
                      )}
                      <p className="mt-1.5 text-sm leading-relaxed text-cloud-600">{b.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Chimney / skylight / forensic — navy anchor ── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/12 blur-3xl"
          aria-hidden="true"
        />
        <div ref={repairRef} className="reveal container-x relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              {/* Drawing-set sheet tag — navy variant */}
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/40 bg-white/[0.05] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-400">
                Sheet R-201 · Leak &amp; Flashing
              </span>
              <h2 className="mt-6 font-display text-display-md text-white">{town.repair.heading}</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">{town.repair.lead}</p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <ShieldIcon className="h-6 w-6" />
                </span>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Leveraging our <strong className="text-white">35+ years in the trade</strong> and
                  masonry heritage, we permanently solve the &ldquo;unfixable&rdquo; leaks other
                  roofers walk away from.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {town.repair.bullets.map((b, i) => (
                <div
                  key={b.title || b.body.slice(0, 30)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-sand-400/40 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start gap-4">
                    {/* Detail-callout bubble — navy variant */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sand-400/50 font-display text-sm font-black text-sand-400">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <div>
                      {b.title && (
                        <h3 className="font-display text-lg font-bold text-white">{b.title}</h3>
                      )}
                      <p className="mt-1.5 text-sm leading-relaxed text-white/70">{b.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Authorized manufacturer integration ── */}
      <section className="bg-white py-20 sm:py-28">
        <div ref={brandsRef} className="reveal container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Approved Submittals</span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              Factory-certified. Manufacturer-backed.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              Every system we install in {town.name} is built from manufacturer-approved
              components — the same submittal discipline we bring to commercial work.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {town.brands.map((b) => (
              <div
                key={b.label}
                className="h-full rounded-2xl border border-cloud-200 bg-cloud-100 p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sand-700">
                    {b.label}
                  </p>
                  <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-sand-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                    Approved
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-800">{b.detail}</p>
              </div>
            ))}
          </div>

          {/* Dedicated per-trade guides for this town */}
          <div className="mt-16 border-t border-cloud-200 pt-10">
            <TownServiceLinks townSlug={town.slug} townName={town.name} />
          </div>

          {/* Nearby roofing towns */}
          <div className="mt-16 border-t border-cloud-200 pt-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cloud-500">
              Also serving nearby
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  to={`/service-areas/${n.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-cloud-100 px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-600/40 hover:bg-brand-50 hover:text-brand-600"
                >
                  <PinIcon className="h-4 w-4 text-brand-600" />
                  {n.name}, NJ
                </Link>
              ))}
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 rounded-full border border-brand-600/40 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
              >
                All service areas
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready for an elite roof in ${town.name}?`}
        subtitle={`Serving ${town.name} (${town.zips.join(', ')}) and all of New Jersey since 2004 — fully licensed & insured.`}
      />
    </>
  )
}
