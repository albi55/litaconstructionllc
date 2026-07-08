import { Link, useParams } from 'react-router-dom'
import { business } from '../data/business'
import { towns, townBySlug } from '../data/towns'
import { roofingTowns, roofingTownBySlug } from '../data/roofingTowns'
import { townServices, townServiceBySlug, townServiceSeoBySlug } from '../data/townServices'
import { Seo } from '../components/Seo'
import { CtaBand } from '../components/CtaBand'
import { QuoteForm } from '../components/QuoteForm'
import { TownStamp } from '../components/TownStamp'
import { TownServiceLinks } from '../components/TownServiceLinks'
import { PhoneIcon, ArrowIcon, CheckIcon, PinIcon, ShieldIcon } from '../components/icons'
import { FaqAccordion } from '../components/FaqAccordion'
import { breadcrumbSchema, faqSchemaFrom } from '../lib/schema'
import { useReveal } from '../lib/useReveal'
import { NotFound } from './NotFound'
import { findServiceTown } from '../data/serviceTownContent'
import { TownServiceContentPage } from './TownServiceContentPage'

/** Every town in the matrix — Bergen masonry towns + Monmouth/Somerset roofing towns. */
const allTowns: { slug: string; name: string }[] = [
  ...towns.map((t) => ({ slug: t.slug, name: t.name })),
  ...roofingTowns.map((t) => ({ slug: t.slug, name: t.name })),
]

/** County per town — Bergen for the masonry towns; Monmouth vs Somerset for the roofing towns. */
const monmouthSlugs = new Set([
  'rumson', 'colts-neck', 'holmdel', 'marlboro', 'manalapan', 'howell',
  'middletown', 'freehold-township', 'wall-township', 'little-silver', 'shrewsbury',
])
function countyFor(townSlug: string): string {
  if (towns.some((t) => t.slug === townSlug)) return 'Bergen County'
  return monmouthSlugs.has(townSlug) ? 'Monmouth County' : 'Somerset County'
}

const heroTrust = [
  'Licensed & Insured Since 2004',
  'Free On-Site Estimates',
  'Our Own Dedicated Crews',
  'Family-Owned & Operated',
]

/** RULE: page heroes always use the showcase house photos — rotated so pages don't look cloned. */
const heroImages = [
  '/showcase/house%20(1).png',
  '/showcase/house%20(2).png',
  '/showcase/house3.png',
]

/** Dedicated service-in-town landing page: /service-areas/:slug/:service */
export function TownServicePage() {
  const { slug, service } = useParams<{ slug: string; service: string }>()

  const heroRef = useReveal()
  const specRef = useReveal()
  const galleryRef = useReveal()
  const notesRef = useReveal()
  const processRef = useReveal()
  const faqRef = useReveal()
  const linksRef = useReveal()

  const town = slug ? (townBySlug[slug] ?? roofingTownBySlug[slug]) : undefined
  const svc = service ? townServiceBySlug[service] : undefined

  // Flagship towns (Bergen masonry + Monmouth/Somerset roofing) with a
  // hand-crafted SEO pack render below. Every other town × service comes from
  // the generated source-document content.
  if (!town || !svc || !slug) {
    const fromDoc = slug && service ? findServiceTown(slug, service) : undefined
    if (fromDoc) return <TownServiceContentPage info={fromDoc.info} town={fromDoc.town} />
    return <NotFound />
  }

  const townName = town.name
  const index = allTowns.findIndex((t) => t.slug === slug)
  const nearby = [1, 2, 3].map((o) => allTowns[(index + o) % allTowns.length])
  const svcIndex = townServices.findIndex((s) => s.slug === svc.slug)
  const heroImage = heroImages[(index + svcIndex) % heroImages.length]

  // SEO / AEO / GEO content layer — quotable answer, localized prose, town FAQs
  const county = countyFor(slug)
  const seoPack = townServiceSeoBySlug[svc.slug]
  const quickAnswer = seoPack?.quickAnswer(townName, county)
  const localBody = seoPack?.localBody(townName, county) ?? []
  const faqs = seoPack?.faqs(townName, county) ?? []

  return (
    <>
      <Seo
        title={`${svc.name} in ${townName}, NJ | ${county} | Lita Construction`}
        description={quickAnswer ?? `${svc.headline(townName)} — ${svc.intro(townName).slice(0, 150)}… Call ${business.phone} for a free estimate.`}
        path={`/service-areas/${slug}/${svc.slug}`}
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'Service Areas', url: `${business.url}/service-areas` },
            { name: `${townName}, NJ`, url: `${business.url}/service-areas/${slug}` },
            { name: svc.name, url: `${business.url}/service-areas/${slug}/${svc.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: svc.name,
            provider: { '@id': `${business.url}/#business` },
            areaServed: [
              { '@type': 'City', name: `${townName}, NJ` },
              { '@type': 'AdministrativeArea', name: `${county}, NJ` },
            ],
            description: quickAnswer ?? svc.intro(townName),
            url: `${business.url}/service-areas/${slug}/${svc.slug}`,
          },
          ...(faqs.length > 0 ? [faqSchemaFrom(faqs)] : []),
        ]}
      />

      {/* ── 1. Hero — the trade's own photography ── */}
      <section className="relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url("${heroImage}")` }}
          aria-hidden="true"
        />
        {/* Lighter scrim — strongest under the copy, letting the house photo breathe on the right */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/60 to-navy-950/10"
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
              <Link to={`/service-areas/${slug}`} className="hover:text-white">
                {townName}, NJ
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white/90">{svc.name}</span>
            </nav>

            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
              <span className="h-px w-9 bg-brand-400/70" />
              Since 2004 · Sheet {svc.sheet}
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">
              {svc.name} in <span className="text-brand-400">{townName}, NJ.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {svc.intro(townName)}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={business.phoneHref} className="btn-primary">
                <PhoneIcon className="h-4 w-4" />
                Call Now: {business.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6">
              {heroTrust.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85">
                  <CheckIcon className="h-4 w-4 text-brand-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Estimate form, stamped */}
          <div className="relative w-full lg:max-w-xl lg:justify-self-end">
            <TownStamp
              title={townName}
              subtitle={`${svc.name} · NJ`}
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

      {/* ── 1b. Quick answer — the directly-quotable definition (AEO/GEO) ── */}
      {quickAnswer && (
        <section className="bg-cloud-100 pt-14 sm:pt-16">
          <div className="container-x">
            <div className="rounded-2xl border border-cloud-200 border-l-4 border-l-brand-600 bg-white p-6 shadow-soft sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
                Quick Answer
              </p>
              <p className="mt-3 max-w-4xl text-base leading-relaxed text-ink-800 sm:text-lg">
                {quickAnswer}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── 2. Scope of work — pinned sheet header left, detail callouts right ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div
          ref={specRef}
          className="reveal container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          {/* Pinned sheet header + trade photo */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/60 bg-sand-100/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
              Sheet {svc.sheet} · Scope of Work
            </span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              {svc.name} scope we cover in {townName}.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              Everything {svc.name.toLowerCase()} we take on for {townName} homeowners — handled
              by our own dedicated crew, never subcontractors.
            </p>

            {/* Trade photo with drawing title block */}
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl shadow-lift">
              <img
                src={encodeURI(svc.gallery[0] ?? svc.heroImage)}
                alt={`${svc.name} project by Lita Construction near ${townName}, NJ`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-navy-950/85 px-5 py-2.5 backdrop-blur-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-sand-400">
                  Sheet {svc.sheet} — {svc.name}
                </span>
                <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:block">
                  Lita · Est. 2004
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/contact" className="btn-primary">
                Get a Free Estimate
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link
                to={svc.servicePath}
                className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900 transition-colors hover:text-brand-600"
              >
                Full {svc.name} details
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Detail-callout cards — one per scope item, as on a drawing sheet */}
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {svc.features.map((f, i) => (
                <div
                  key={f}
                  className="rounded-2xl border border-cloud-200 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-card"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-sand-400/70 font-display text-sm font-black text-sand-700">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <p className="mt-3.5 text-sm font-semibold leading-snug text-ink-900">{f}</p>
                </div>
              ))}
            </div>

            {/* Heritage card — the accountability note, as on the roofing town pages */}
            <div className="rounded-2xl border border-cloud-200 bg-white p-6 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                <ShieldIcon className="h-6 w-6" />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-cloud-600">
                Backed by <strong className="text-ink-900">35+ years in the trade</strong> and a
                family name on every truck — if our stamp is on your {townName} paperwork, the
                job gets done right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Recent work — the trade's real gallery ── */}
      <section className="bg-white py-20 sm:py-28">
        <div ref={galleryRef} className="reveal container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Recent {svc.name} Work</span>
              <h2 className="mt-6 font-display text-display-md text-ink-900">
                Real projects, real photos.
              </h2>
            </div>
            <Link
              to="/projects"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900 transition-colors hover:text-brand-600"
            >
              Full Portfolio
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {svc.gallery.map((src, i) => (
              <div
                key={src}
                className={`group overflow-hidden rounded-2xl bg-navy-950 shadow-soft ${
                  i === 0 ? 'col-span-2 row-span-2 lg:col-span-1' : ''
                }`}
              >
                <img
                  src={encodeURI(src)}
                  alt={`${svc.name} project ${i + 1} by Lita Construction serving ${townName}, NJ`}
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3b. Local notes — town-specific editorial (SEO/GEO substance) ── */}
      {localBody.length > 0 && (
        <section className="bg-cloud-100 py-20 sm:py-28">
          <div
            ref={notesRef}
            className="reveal container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
          >
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/60 bg-sand-100/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
                Sheet G-003 · Local Notes
              </span>
              <h2 className="mt-6 font-display text-display-md text-ink-900">
                Built for {townName} — not a generic spec.
              </h2>
              <ul className="mt-8 space-y-3">
                {[
                  `Serving ${county} & all of North/Central NJ`,
                  'Family-run since 2004 · in the trade since 1991',
                  business.licenseLabel,
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm font-medium text-ink-800">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-cloud-600">
              {localBody.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. How the job runs — navy punch list ── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/12 blur-3xl"
          aria-hidden="true"
        />
        <div ref={processRef} className="reveal container-x relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/40 bg-white/[0.05] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-400">
              Sheet G-002 · Site Protocol
            </span>
            <h2 className="mt-6 font-display text-display-md text-white">
              How your {townName} job runs.
            </h2>
          </div>

          <ol className="mt-14 grid gap-y-10 md:grid-cols-3 md:gap-x-8">
            {svc.steps.map((s, i) => (
              <li key={s.title} className="relative">
                {i < svc.steps.length - 1 && (
                  <span
                    className="absolute left-5 right-0 top-5 hidden -translate-y-1/2 border-t border-dashed border-white/25 md:block"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-black text-white shadow-card">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 4b. Town FAQs — on-page answers + FAQPage schema (AEO) ── */}
      {faqs.length > 0 && (
        <section className="bg-white py-20 sm:py-28">
          <div
            ref={faqRef}
            className="reveal container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
          >
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/60 bg-sand-100/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
                Sheet G-004 · Field Questions
              </span>
              <h2 className="mt-6 font-display text-display-md text-ink-900">
                {svc.name} questions from {townName} homeowners.
              </h2>
              <p className="mt-5 text-cloud-600">
                Straight answers to what {townName} neighbors ask us most. Have a different
                question?{' '}
                <a href={business.phoneHref} className="font-semibold text-brand-600 hover:underline">
                  Call {business.phone}
                </a>{' '}
                — you&apos;ll talk to the family, not a call center.
              </p>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>
      )}

      {/* ── 5. Other trades here + this trade nearby ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div ref={linksRef} className="reveal container-x">
          <TownServiceLinks townSlug={slug} townName={townName} exclude={svc.slug} />

          <div className="mt-14 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cloud-500">
              {svc.name} in nearby towns
            </p>
            <span className="h-px flex-1 bg-cloud-300" aria-hidden="true" />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                to={`/service-areas/${n.slug}/${svc.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-600/40 hover:bg-brand-50 hover:text-brand-600"
              >
                <PinIcon className="h-4 w-4 text-brand-600" />
                {svc.name} in {n.name}, NJ
              </Link>
            ))}
            <Link
              to={`/service-areas/${slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-600/40 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
            >
              Back to {townName} overview
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready for ${svc.name.toLowerCase()} in ${townName}?`}
        subtitle={`Free, no-obligation estimates across ${townName} and neighboring towns — licensed, insured, and family-run since 2004.`}
      />
    </>
  )
}
