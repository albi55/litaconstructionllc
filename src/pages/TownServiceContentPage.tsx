import { Link } from 'react-router-dom'
import { business } from '../data/business'
import {
  type ServiceInfo,
  type ServiceTownContent,
  type ContentSection,
  townsByService,
  servicesForTown,
} from '../data/serviceTownContent'
import { Seo } from '../components/Seo'
import { CtaBand } from '../components/CtaBand'
import { QuoteForm } from '../components/QuoteForm'
import { TownStamp } from '../components/TownStamp'
import { GafBadge } from '../components/GafBadge'
import { GafCredential } from '../components/GafCredential'
import { FaqAccordion } from '../components/FaqAccordion'
import {
  PhoneIcon,
  ArrowIcon,
  CheckIcon,
  PinIcon,
  ShieldIcon,
} from '../components/icons'
import { breadcrumbSchema, faqSchemaFrom } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

/** RULE: page heroes always use the showcase house photos — rotated so pages don't look cloned. */
const heroImages = [
  '/showcase/house%20(1).png',
  '/showcase/house%20(2).png',
  '/showcase/house3.png',
]

const heroTrust = [
  'Licensed & Insured Since 2004',
  'Free On-Site Estimates',
  'Our Own Dedicated Crews',
  'Family-Owned & Operated',
]

/** A section whose heading names a guarantee — rendered as the warranty card. */
function isGuaranteeSection(s: ContentSection): boolean {
  return /guarantee|local advantage|warranty/i.test(s.heading)
}

/** A section whose heading names an FAQ — rendered as an accordion + schema. */
function isFaqSection(s: ContentSection): boolean {
  return /\bFAQ\b|frequently asked/i.test(s.heading)
}

/**
 * Renders one town × service landing page from the source-document content.
 * Drives /service-areas/<slug>/<service> for the 640+ generated pages.
 */
export function TownServiceContentPage({
  info,
  town,
}: {
  info: ServiceInfo
  town: ServiceTownContent
}) {
  const heroRef = useReveal()
  const guaranteeRef = useReveal()
  const faqRef = useReveal()
  const linksRef = useReveal()

  const county = town.county.endsWith('County') ? town.county : `${town.county} County`

  // Rotate the hero photo deterministically by the town's position in this service.
  const idx = Math.max(
    0,
    townsByService[info.key].findIndex((t) => t.slug === town.slug),
  )
  const heroImage = heroImages[idx % heroImages.length]

  // Split the content sections into: the guarantee card, the FAQ, and the
  // standard "scope of work" spec blocks that make up the body.
  const guaranteeSection = town.sections.find(isGuaranteeSection)
  const faqSection = town.sections.find(isFaqSection)
  const specSections = town.sections.filter(
    (s) => !isGuaranteeSection(s) && !isFaqSection(s),
  )

  const faqItems =
    faqSection?.bullets
      .filter((b) => b.title)
      .map((b) => ({ q: b.title as string, a: b.body })) ?? []

  // Headline: the first intro line is often a marketing H1; keep the rest as body.
  const [headline, ...introRest] = town.intro
  const introBody = introRest.length ? introRest : headline ? [] : []
  // If the first intro line reads like a full sentence (not a short headline),
  // treat the whole intro as body and derive a generic headline instead.
  const headlineIsTitle = headline && headline.length <= 90 && !/[.!?]\s/.test(headline)
  const pageHeadline = headlineIsTitle
    ? headline
    : `${info.label} in ${town.name}, NJ`
  const heroBody = headlineIsTitle
    ? introBody.length
      ? introBody
      : town.intro.slice(1)
    : town.intro

  // Cross-links: other services this town has, and this service in nearby towns.
  const otherServices = servicesForTown(town.slug).filter((s) => s.key !== info.key)
  const nearby = [1, 2, 3, 4]
    .map((o) => townsByService[info.key][(idx + o) % townsByService[info.key].length])
    .filter((t, i, arr) => t && t.slug !== town.slug && arr.findIndex((x) => x.slug === t.slug) === i)
    .slice(0, 4)

  const serving = town.serving ? town.serving.split(/,\s*|\s+and\s+/).filter(Boolean) : []
  const description =
    town.meta ||
    `${info.label} in ${town.name}, NJ by Lita Construction — licensed, insured & family-run since 2004. Call ${business.phone}.`

  return (
    <>
      <Seo
        title={`${info.label} in ${town.name}, NJ | ${county} | Lita Construction`}
        description={description}
        path={`/service-areas/${town.slug}/${info.slug}`}
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'Service Areas', url: `${business.url}/service-areas` },
            { name: `${town.name}, NJ`, url: `${business.url}/service-areas/${town.slug}` },
            {
              name: info.label,
              url: `${business.url}/service-areas/${town.slug}/${info.slug}`,
            },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: info.seoTrade,
            provider: { '@id': `${business.url}/#business` },
            areaServed: [
              { '@type': 'City', name: `${town.name}, NJ` },
              { '@type': 'AdministrativeArea', name: `${county}, NJ` },
            ],
            description,
            url: `${business.url}/service-areas/${town.slug}/${info.slug}`,
          },
          ...(faqItems.length > 0
            ? [faqSchemaFrom(faqItems.map((f) => ({ q: f.q, a: f.a })))]
            : []),
        ]}
      />

      {/* ── 1. Hero — showcase photo, quote form ── */}
      <section className="relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url("${heroImage}")` }}
          aria-hidden="true"
        />
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
              <Link to={`/service-areas/${town.slug}`} className="hover:text-white">
                {town.name}, NJ
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white/90">{info.shortLabel}</span>
            </nav>

            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
              <span className="h-px w-9 bg-brand-400/70" />
              Since 2004 · {county} · ZIP {town.zips.join(' · ')}
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">
              {pageHeadline}
            </h1>
            {heroBody[0] && (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
                {heroBody[0]}
              </p>
            )}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={business.phoneHref} className="btn-primary">
                <PhoneIcon className="h-4 w-4" />
                Call Now: {business.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
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
              <div className="flex shrink-0 items-center gap-4">
                <GafCredential />
                <GafBadge tone="onDark" size="sm" className="shrink-0" />
              </div>
            </div>
          </div>

          {/* Estimate form, stamped like approved paperwork */}
          <div className="relative w-full lg:max-w-xl lg:justify-self-end">
            <TownStamp
              title={town.name}
              subtitle={`${info.shortLabel} · NJ`}
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

      {/* ── 1b. Intro / overview — the remaining intro prose ── */}
      {heroBody.length > 1 && (
        <section className="bg-cloud-100 pt-14 sm:pt-16">
          <div className="container-x">
            <div className="rounded-2xl border border-cloud-200 border-l-4 border-l-brand-600 bg-white p-6 shadow-soft sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
                {town.name} Overview
              </p>
              <div className="mt-3 max-w-4xl space-y-4 text-base leading-relaxed text-ink-800 sm:text-lg">
                {heroBody.slice(1).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 2. Scope-of-work spec blocks — alternating surfaces ── */}
      {specSections.map((sec, i) => {
        const dark = i % 2 === 1
        const surface = dark
          ? 'relative overflow-hidden bg-navy-950 text-white'
          : 'bg-cloud-100'
        const cardSurface = dark
          ? 'border-white/10 bg-white/[0.04]'
          : 'border-cloud-200 bg-white shadow-soft'
        return (
          <SpecBlock
            key={`${sec.heading}-${i}`}
            section={sec}
            index={i}
            dark={dark}
            surface={surface}
            cardSurface={cardSurface}
            sheet={info.sheet}
            townName={town.name}
          />
        )
      })}

      {/* ── 3. The guarantee — navy anchor with warranty card ── */}
      {guaranteeSection && (
        <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
          <div
            className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/12 blur-3xl"
            aria-hidden="true"
          />
          <div
            ref={guaranteeRef}
            className="reveal container-x relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/40 bg-white/[0.05] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-400">
                Sheet G-001 · {guaranteeSection.heading}
              </span>
              <h2 className="mt-6 font-display text-display-md text-white">
                Our {town.name} promise, in writing.
              </h2>
              {guaranteeSection.lead && (
                <p className="mt-5 text-lg leading-relaxed text-white/70">
                  {guaranteeSection.lead}
                </p>
              )}
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {guaranteeSection.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm font-medium text-white/85"
                  >
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                    <span>
                      {b.title && <strong className="text-white">{b.title}: </strong>}
                      {b.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <ShieldIcon className="h-6 w-6" />
              </span>
              <p className="mt-6 font-display text-4xl font-black text-brand-400">Since 2004</p>
              <p className="mt-1 font-display text-xl font-bold text-white">
                Licensed, Insured &amp; Family-Run
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {business.name} has served {town.name} and {county} for over two decades. When our
                name is on your paperwork, the job gets done right — {business.licenseLabel}.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Town FAQs — accordion + FAQPage schema ── */}
      {faqItems.length > 0 && (
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
                {info.shortLabel} questions from {town.name} homeowners.
              </h2>
              <p className="mt-5 text-cloud-600">
                Straight answers to what {town.name} neighbors ask us most. Have a different
                question?{' '}
                <a
                  href={business.phoneHref}
                  className="font-semibold text-brand-600 hover:underline"
                >
                  Call {business.phone}
                </a>{' '}
                — you&apos;ll talk to the family, not a call center.
              </p>
            </div>
            <FaqAccordion items={faqItems} />
          </div>
        </section>
      )}

      {/* ── 5. Cross-links — other trades here + this trade nearby ── */}
      <section className="bg-cloud-100 py-20 sm:py-28">
        <div ref={linksRef} className="reveal container-x">
          {serving.length > 0 && (
            <p className="mb-10 flex flex-wrap items-center gap-2 text-sm font-medium text-cloud-600">
              <PinIcon className="h-4 w-4 text-brand-600" />
              Proudly serving {serving.join(', ')} and the surrounding {county} area.
            </p>
          )}

          {otherServices.length > 0 && (
            <>
              <div className="flex items-center gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cloud-500">
                  Other Lita services in {town.name}
                </p>
                <span className="h-px flex-1 bg-cloud-300" aria-hidden="true" />
                <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-sand-700">
                  {otherServices.length} trades
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherServices.map((s) => (
                  <Link
                    key={s.key}
                    to={`/service-areas/${town.slug}/${s.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-cloud-200 bg-white p-4 shadow-soft transition-shadow duration-300 hover:shadow-card"
                  >
                    <img
                      src={s.heroImage}
                      alt={`${s.label} work by Lita Construction`}
                      className="h-16 w-20 shrink-0 rounded-xl object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand-700">
                        Sheet {s.sheet}
                      </p>
                      <p className="truncate font-display text-base font-bold text-ink-900 transition-colors group-hover:text-brand-600">
                        {s.shortLabel}
                      </p>
                      <p className="text-xs text-cloud-500">in {town.name}, NJ</p>
                    </div>
                    <ArrowIcon className="ml-auto h-4 w-4 shrink-0 text-cloud-400 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
                  </Link>
                ))}
              </div>
            </>
          )}

          {nearby.length > 0 && (
            <>
              <div className="mt-14 flex items-center gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cloud-500">
                  {info.shortLabel} in nearby towns
                </p>
                <span className="h-px flex-1 bg-cloud-300" aria-hidden="true" />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/service-areas/${n.slug}/${info.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-600/40 hover:bg-brand-50 hover:text-brand-600"
                  >
                    <PinIcon className="h-4 w-4 text-brand-600" />
                    {info.shortLabel} in {n.name}, NJ
                  </Link>
                ))}
                <Link
                  to={`/service-areas/${town.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-600/40 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  Back to {town.name} overview
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <CtaBand
        title={`Ready for ${info.label.toLowerCase()} in ${town.name}?`}
        subtitle={`Free, no-obligation estimates across ${town.name} and neighboring ${county} towns — licensed, insured, and family-run since 2004.`}
      />
    </>
  )
}

/** One scope-of-work spec block: pinned heading + lead on the left, bullet cards on the right. */
function SpecBlock({
  section,
  index,
  dark,
  surface,
  cardSurface,
  sheet,
  townName,
}: {
  section: ContentSection
  index: number
  dark: boolean
  surface: string
  cardSurface: string
  sheet: string
  townName: string
}) {
  const ref = useReveal()
  const sheetCode = `${sheet.split('-')[0]}-${101 + index}`
  return (
    <section className={`${surface} py-20 sm:py-28`}>
      {dark && (
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/12 blur-3xl"
          aria-hidden="true"
        />
      )}
      <div
        ref={ref}
        className="reveal container-x relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
      >
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span
            className={`inline-flex items-center gap-2.5 rounded-lg border px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] ${
              dark
                ? 'border-sand-400/40 bg-white/[0.05] text-sand-400'
                : 'border-sand-400/60 bg-sand-100/70 text-sand-700'
            }`}
          >
            Sheet {sheetCode} · {townName}
          </span>
          <h2
            className={`mt-6 font-display text-display-md ${dark ? 'text-white' : 'text-ink-900'}`}
          >
            {section.heading}
          </h2>
          {section.lead && (
            <p
              className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-cloud-600'}`}
            >
              {section.lead}
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {section.bullets.map((b, j) => (
            <div
              key={j}
              className={`rounded-2xl border p-5 transition-colors duration-300 ${cardSurface} ${
                dark ? 'hover:border-sand-400/40' : 'hover:shadow-card'
              }`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 font-display text-sm font-black ${
                  dark ? 'border-sand-400/50 text-sand-400' : 'border-sand-400/70 text-sand-700'
                }`}
              >
                {String.fromCharCode(65 + j)}
              </span>
              {b.title && (
                <p
                  className={`mt-3.5 font-display text-base font-bold leading-snug ${
                    dark ? 'text-white' : 'text-ink-900'
                  }`}
                >
                  {b.title}
                </p>
              )}
              <p
                className={`${b.title ? 'mt-1.5' : 'mt-3.5'} text-sm leading-relaxed ${
                  dark ? 'text-white/70' : 'text-cloud-600'
                }`}
              >
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
