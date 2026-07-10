import { Link } from 'react-router-dom'
import { business } from '../data/business'
import {
  type ServiceKey,
  SERVICE_KEYS,
  townBySlugByService,
  townsByService,
  servicesForTown,
} from '../data/serviceTownContent'
import { Seo } from '../components/Seo'
import { CtaBand } from '../components/CtaBand'
import { QuoteForm } from '../components/QuoteForm'
import { TownStamp } from '../components/TownStamp'
import { GafBadge } from '../components/GafBadge'
import { PhoneIcon, ArrowIcon, CheckIcon, PinIcon } from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

const heroImages = [
  '/showcase/house%20(1).png',
  '/showcase/house%20(2).png',
  '/showcase/house3.png',
]

const heroTrust = [
  '10-Year Craftsmanship Warranty',
  'Permits & Zoning Handled',
  'Our Own Dedicated Crews',
  'Licensed & Insured Since 2004',
]

/**
 * Overview hub for a town that appears in the source-document service content
 * (but not in the hand-crafted flagship town set). Renders a local intro and
 * links out to every service page that exists for this town.
 * Drives /service-areas/<slug> for the ~600 generated towns.
 */
export function TownOverviewPage({ slug }: { slug: string }) {
  const heroRef = useReveal()
  const overviewRef = useReveal()
  const svcRef = useReveal()
  const trustRef = useReveal()
  const nearbyRef = useReveal()

  const services = servicesForTown(slug)
  // Pick a representative entry (first available service) for name/county/intro.
  const firstKey = SERVICE_KEYS.find((k) => townBySlugByService[k][slug]) as ServiceKey
  const rep = townBySlugByService[firstKey][slug]

  const county = rep.county.endsWith('County') ? rep.county : `${rep.county} County`
  const idx = Math.max(0, townsByService[firstKey].findIndex((t) => t.slug === slug))
  const heroImage = heroImages[idx % heroImages.length]

  // All substantial intro paragraphs across this town's services (deduped),
  // richest first — used for the Overview section below the hero.
  const overviewParagraphs = [
    ...new Set(
      SERVICE_KEYS.map((k) => townBySlugByService[k][slug])
        .filter(Boolean)
        .flatMap((t) => t.intro)
        .filter((p) => /[.!?]\s/.test(p) && p.length > 90),
    ),
  ]
    .sort((a, b) => b.length - a.length)
    .slice(0, 3)

  // Hero keeps a short, punchy tagline — the full prose lives in the Overview.
  const heroTagline = `From roofing and siding to masonry, decks, chimneys, and commercial roofing, Lita Construction brings two decades of craftsmanship to ${rep.name} homeowners. When you call us, you speak with a pro — not a salesman.`

  // Nearby towns: neighbors in the representative service list.
  const list = townsByService[firstKey]
  const nearby = [1, 2, 3, 4, 5, 6]
    .map((o) => list[(idx + o) % list.length])
    .filter((t, i, arr) => t && t.slug !== slug && arr.findIndex((x) => x.slug === t.slug) === i)
    .slice(0, 6)

  return (
    <>
      <Seo
        title={`${rep.name}, NJ — Roofing, Siding, Masonry & More | Lita Construction`}
        description={`Lita Construction serves ${rep.name}, NJ (${county}) with roofing, siding, decks, masonry, chimney & commercial roofing since 2004. Call ${business.phone} for a free estimate.`}
        path={`/service-areas/${slug}`}
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'Service Areas', url: `${business.url}/service-areas` },
            { name: `${rep.name}, NJ`, url: `${business.url}/service-areas/${slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'GeneralContractor',
            name: `${business.name} — ${rep.name}, NJ`,
            areaServed: { '@type': 'City', name: `${rep.name}, NJ` },
            url: `${business.url}/service-areas/${slug}`,
            telephone: business.phone,
          },
        ]}
      />

      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url("${heroImage}")` }}
          aria-hidden="true"
        />
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
              <span className="text-white/90">{rep.name}, NJ</span>
            </nav>

            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
              <span className="h-px w-9 bg-brand-400/70" />
              Since 2004 · {county} · ZIP {rep.zips.join(' · ')}
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">
              Your trusted contractor in{' '}
              <span className="text-brand-400">{rep.name}, NJ.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {heroTagline}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={business.phoneHref} className="btn-primary">
                <PhoneIcon className="h-4 w-4" />
                Call Now: {business.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {heroTrust.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/85"
                  >
                    <CheckIcon className="h-4 w-4 text-brand-400" />
                    {t}
                  </span>
                ))}
              </div>
              <GafBadge tone="onDark" size="sm" className="shrink-0" />
            </div>
          </div>

          <div className="relative w-full lg:max-w-xl lg:justify-self-end">
            <TownStamp
              title={rep.name}
              subtitle={`${county} · NJ`}
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

      {/* ── 1b. Overview — the town's intro prose beside a "why us here" checklist ── */}
      {overviewParagraphs.length > 0 && (
        <section className="bg-white py-20 sm:py-24">
          <div
            ref={overviewRef}
            className="reveal container-x grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
          >
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/60 bg-sand-100/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
                Sheet G-001 · {rep.name} Overview
              </span>
              <h2 className="mt-6 font-display text-display-md text-ink-900">
                Serving {rep.name} since 2004.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-cloud-600">
                {overviewParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href={business.phoneHref} className="btn-primary">
                  <PhoneIcon className="h-4 w-4" />
                  Call {business.phone}
                </a>
                <Link
                  to="/service-areas"
                  className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900 transition-colors hover:text-brand-600"
                >
                  All service areas
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* Why homeowners here choose us */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-cloud-300 bg-cloud-50 p-8 shadow-soft">
                <span className="eyebrow">Why {rep.name} Chooses Lita</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">
                  Local, licensed &amp; accountable.
                </h3>
                <ul className="mt-7 grid gap-3">
                  {[
                    `Serving ${county} & all of North/Central NJ`,
                    'Family-run since 2004 — you deal with the principal',
                    'Our own dedicated crews, never subcontractors',
                    'Permits & zoning paperwork handled for you',
                    '10-year craftsmanship warranty',
                    business.licenseLabel,
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-medium text-ink-800">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 2. Services available in this town ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div ref={svcRef} className="reveal container-x">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/60 bg-sand-100/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
              Sheet G-000 · {rep.name} Services
            </span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              Every trade we cover in {rep.name}.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              Each service below opens its own dedicated {rep.name} guide — with the full scope of
              work, local details, and a free-estimate form.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.key}
                to={`/service-areas/${slug}/${s.slug}`}
                className="group relative block h-56 overflow-hidden rounded-2xl bg-navy-950 shadow-soft transition-shadow duration-300 hover:shadow-card"
              >
                <img
                  src={encodeURI(s.heroImage)}
                  alt={`${s.label} in ${rep.name}, NJ by Lita Construction`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand-400">
                    Sheet {s.sheet}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">{s.label}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400">
                    View {rep.name} guide
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2b. Local trust band — navy anchor with stats + reassurance ── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/12 blur-3xl"
          aria-hidden="true"
        />
        <div ref={trustRef} className="reveal container-x relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
                <span className="h-px w-9 bg-brand-400/70" />
                Local, Not Franchised
              </span>
              <h2 className="mt-6 font-display text-display-md text-white">
                A {rep.name} name you can knock on.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                We&apos;re not dispatched from three counties away. Every {rep.name} job is run by
                our own crews and backed by a family name that&apos;s been on the line in {county}{' '}
                since 2004 — so the work gets done right, and we&apos;re still here if you ever need
                us again.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <GafBadge tone="onDark" size="sm" />
                <a href={business.phoneHref} className="btn-ghost-light">
                  <PhoneIcon className="h-4 w-4" />
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { n: business.yearsExperience, l: 'Years in the trade' },
                { n: '2004', l: `Serving ${county}` },
                { n: '6', l: 'Trades under one roof' },
                { n: '10-Yr', l: 'Craftsmanship warranty' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-sand-400/40 hover:bg-white/[0.07]"
                >
                  <div className="font-display text-3xl font-black text-brand-400">{s.n}</div>
                  <div className="mt-1.5 text-sm font-medium text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Nearby towns ── */}
      {nearby.length > 0 && (
        <section className="bg-white py-20 sm:py-28">
          <div ref={nearbyRef} className="reveal container-x">
            <div className="flex items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cloud-500">
                Also serving nearby {county} towns
              </p>
              <span className="h-px flex-1 bg-cloud-300" aria-hidden="true" />
              <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-sand-700">
                {nearby.length} towns
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
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
        </section>
      )}

      <CtaBand
        title={`Get a free estimate in ${rep.name} today.`}
        subtitle={`Serving ${rep.name} and the surrounding ${county} area — Lita Construction: licensed, insured, and trusted since 2004.`}
      />
    </>
  )
}
