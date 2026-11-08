import { Fragment, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { business } from '../data/business'
import {
  chimneyRepairPages,
  type ChimneyRepairPage,
  type ChimneyParagraph,
  type ChimneyNearbySegment,
} from '../data/chimneyRepairPages'
import { townBySlug, towns } from '../data/towns'
import { roofingTownBySlug, roofingTowns } from '../data/roofingTowns'
import { findServiceTown, servicesForTown, townsByCounty } from '../data/serviceTownContent'
import { Seo } from '../components/Seo'
import { CtaBand } from '../components/CtaBand'
import { TownMap } from '../components/TownMap'
import { QuoteForm } from '../components/QuoteForm'
import { TownStamp } from '../components/TownStamp'
import { GafBadge } from '../components/GafBadge'
import { GafCredential } from '../components/GafCredential'
import { PhoneIcon, ArrowIcon, CheckIcon, PinIcon } from '../components/icons'
import { breadcrumbSchema, faqSchemaFrom } from '../lib/schema'
import { useReveal } from '../lib/useReveal'
import { NotFound } from './NotFound'

/* ───────────────────────────── lookups ───────────────────────────── */

const pageByPath: Record<string, ChimneyRepairPage> = Object.fromEntries(
  chimneyRepairPages.map((p) => [p.path, p]),
)

/** County slug ('bergen-county') → display name ('Bergen') and its pages, A–Z. */
const counties: { slug: string; name: string; pages: ChimneyRepairPage[] }[] = (() => {
  const map = new Map<string, { slug: string; name: string; pages: ChimneyRepairPage[] }>()
  for (const p of chimneyRepairPages) {
    if (!map.has(p.countySlug)) map.set(p.countySlug, { slug: p.countySlug, name: p.county, pages: [] })
    map.get(p.countySlug)!.pages.push(p)
  }
  for (const c of map.values()) c.pages.sort((a, b) => a.name.localeCompare(b.name))
  return [...map.values()]
})()
const countyBySlug = Object.fromEntries(counties.map((c) => [c.slug, c]))

const countyPath = (countySlug: string) => `/chimney-repair/${countySlug}/`

/** Site town slugs by lower-cased name — for towns the document links but has no page for. */
const siteSlugByName: Record<string, string> = Object.fromEntries(
  [
    ...townsByCounty.flatMap((g) => g.towns),
    ...towns,
    ...roofingTowns,
  ].map((t) => [t.name.toLowerCase(), t.slug]),
)

/**
 * Where a "We also repair chimneys in …" link should point.
 * 1. a chimney repair page from the document, 2. the town's existing chimney
 * page, 3. the town's service-area page — otherwise undefined (plain text).
 */
function resolveLink(seg: { text: string; path: string }): string | undefined {
  const path = seg.path.endsWith('/') ? seg.path : `${seg.path}/`
  if (pageByPath[path]) return path
  if (/^\/chimney-repair\/[a-z-]+-county\/$/.test(path)) return countyBySlug[path.split('/')[2]] ? path : undefined
  const fromPath = path.split('/')[3]?.replace(/-nj$/, '')
  const candidates = [fromPath, siteSlugByName[seg.text.toLowerCase()]].filter(Boolean) as string[]
  for (const slug of candidates) {
    if (findServiceTown(slug, 'chimney-masonry')) return `/service-areas/${slug}/chimney-masonry`
  }
  for (const slug of candidates) {
    if (townBySlug[slug] || roofingTownBySlug[slug] || servicesForTown(slug).length > 0) {
      return `/service-areas/${slug}`
    }
  }
  return undefined
}

/* ───────────────────────────── text rendering ───────────────────────────── */

/** Turns the phone number and "contact page" in the copy into live links (text unchanged). */
function linkify(text: string, dark = false): ReactNode {
  const parts = text.split(/(\(201\) 540-7772|contact page)/)
  if (parts.length === 1) return text
  const cls = `font-semibold underline decoration-1 underline-offset-2 ${
    dark ? 'text-white hover:text-brand-400' : 'text-brand-600 hover:text-brand-700'
  }`
  return parts.map((part, i) => {
    if (part === '(201) 540-7772')
      return (
        <a key={i} href={business.phoneHref} className={cls}>
          {part}
        </a>
      )
    if (part === 'contact page')
      return (
        <Link key={i} to="/contact" className={cls}>
          {part}
        </Link>
      )
    return <Fragment key={i}>{part}</Fragment>
  })
}

/** A paragraph with its optional bold run-in lead ("The repair:"). */
function Para({ p, className = '' }: { p: ChimneyParagraph; className?: string }) {
  const gap = p.lead && !/^[,.;:)]/.test(p.text) ? ' ' : ''
  return (
    <p className={className}>
      {p.lead && <strong className="font-bold text-ink-900">{p.lead}</strong>}
      {gap}
      {linkify(p.text)}
    </p>
  )
}

function Nearby({ segments }: { segments: ChimneyNearbySegment[] }) {
  return (
    <p>
      {segments.map((s, i) => {
        if (typeof s === 'string') return <Fragment key={i}>{s}</Fragment>
        const to = resolveLink(s)
        return to ? (
          <Link
            key={i}
            to={to}
            className="font-semibold text-brand-600 underline decoration-brand-600/30 decoration-1 underline-offset-2 hover:decoration-brand-600"
          >
            {s.text}
          </Link>
        ) : (
          <Fragment key={i}>{s.text}</Fragment>
        )
      })}
    </p>
  )
}

/* ───────────────────────────── shared bits ───────────────────────────── */

/** RULE: page heroes always use the showcase house photos — rotated so pages don't look cloned. */
const heroImages = ['/showcase/house%20(1).png', '/showcase/house%20(2).png', '/showcase/house3.png']

const heroTrust = ['Licensed & Insured Since 2004', 'Free On-Site Estimates', 'Our Own Dedicated Crews']

/** "Sicomac Avenue" → anchor id for the on-page contents list. */
const anchor = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

function Hero({
  image,
  crumbs,
  eyebrow,
  title,
  stamp,
  children,
}: {
  image: string
  crumbs: { label: string; to?: string }[]
  eyebrow: string
  title: string
  stamp: { title: string; subtitle: string }
  children?: ReactNode
}) {
  const ref = useReveal()
  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url("${image}")` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/20"
        aria-hidden="true"
      />
      <div
        ref={ref}
        className="reveal container-x relative z-20 grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16"
      >
        <div>
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <Fragment key={i}>
                {i > 0 && <span className="text-white/30">/</span>}
                {c.to ? (
                  <Link to={c.to} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{c.label}</span>
                )}
              </Fragment>
            ))}
          </nav>
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
            <span className="h-px w-9 bg-brand-400/70" />
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">{title}</h1>
          {children}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={business.phoneHref} className="btn-primary">
              <PhoneIcon className="h-4 w-4" />
              Call Now: {business.phone}
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {heroTrust.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85">
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
        <div className="relative w-full lg:max-w-xl lg:justify-self-end">
          <TownStamp
            title={stamp.title}
            subtitle={stamp.subtitle}
            className="stamp-in pointer-events-none absolute -right-4 -top-9 z-10 hidden h-28 w-28 text-brand-600 drop-shadow-lg sm:block lg:-right-7 lg:-top-11 lg:h-32 lg:w-32"
          />
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── town page ───────────────────────────── */

/** /chimney-repair/:county/:town — one town page from the chimney document. */
export function ChimneyRepairTownPage() {
  const { county = '', town = '' } = useParams<{ county: string; town: string }>()
  const page = pageByPath[`/chimney-repair/${county}/${town}/`]
  if (!page) return <NotFound />
  return <TownArticle key={page.path} page={page} />
}

function TownArticle({ page }: { page: ChimneyRepairPage }) {
  const bodyRef = useReveal()
  const countyName = `${page.county} County`
  const idx = chimneyRepairPages.indexOf(page)
  const url = `${business.url}${page.path}`

  return (
    <>
      <Seo
        title={page.title}
        description={page.meta}
        path={page.path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'Chimney Repair', url: `${business.url}/chimney-repair/` },
            { name: countyName, url: `${business.url}${countyPath(page.countySlug)}` },
            { name: `${page.name}, NJ`, url },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Chimney repair',
            name: page.h1,
            provider: { '@id': `${business.url}/#business` },
            areaServed: [
              { '@type': 'City', name: `${page.name}, NJ` },
              { '@type': 'AdministrativeArea', name: `${countyName}, NJ` },
            ],
            description: page.meta,
            url,
          },
          faqSchemaFrom(page.faq.items),
        ]}
      />

      <Hero
        image={heroImages[idx % heroImages.length]}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Chimney Repair', to: '/chimney-repair/' },
          { label: countyName, to: countyPath(page.countySlug) },
          { label: `${page.name}, NJ` },
        ]}
        eyebrow={`Chimney Repair · ${countyName}, NJ`}
        title={page.h1}
        stamp={{ title: page.name, subtitle: 'Chimney · NJ' }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div ref={bodyRef} className="reveal container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <article className="min-w-0 max-w-3xl text-[17px] leading-[1.75] text-ink-800">
            {/* Intro */}
            <div className="space-y-5">
              {page.intro.map((p, i) => (
                <Para key={i} p={p} className={i === 0 ? 'text-lg leading-[1.75] text-ink-900 sm:text-xl' : ''} />
              ))}
            </div>

            {/* H2 sections, in document order */}
            {page.sections.map((s) => (
              <section key={s.heading} id={anchor(s.heading)} className="mt-14 scroll-mt-28">
                <h2 className="font-display text-2xl font-bold leading-tight text-ink-900 sm:text-[28px]">{s.heading}</h2>
                <div className="mt-5 space-y-5">
                  {s.blocks.map((b, i) =>
                    b.type === 'p' ? (
                      <Para key={i} p={b} />
                    ) : (
                      <div key={i} className="-mx-4 overflow-x-auto sm:mx-0">
                        <table className="w-full min-w-[620px] border-collapse overflow-hidden rounded-2xl text-left text-[15px] leading-relaxed shadow-soft">
                          <thead>
                            <tr className="bg-navy-950 text-white">
                              {b.headers.map((h) => (
                                <th key={h} scope="col" className="px-4 py-3.5 align-bottom font-display text-sm font-bold uppercase tracking-[0.08em]">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.rows.map((r, ri) => (
                              <tr key={ri} className={ri % 2 ? 'bg-cloud-100' : 'bg-white'}>
                                {r.map((c, ci) => (
                                  <td
                                    key={ci}
                                    className={`border-t border-cloud-200 px-4 py-3.5 align-top ${
                                      ci === 0 ? 'font-semibold text-ink-900' : 'text-ink-800'
                                    }`}
                                  >
                                    {c}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ),
                  )}
                </div>
              </section>
            ))}

            {/* FAQ — every answer visible, as in the document */}
            <section id="questions" className="mt-14 scroll-mt-28">
              <h2 className="font-display text-2xl font-bold leading-tight text-ink-900 sm:text-[28px]">{page.faq.heading}</h2>
              <dl className="mt-6 divide-y divide-cloud-200 rounded-2xl border border-cloud-200 bg-cloud-50">
                {page.faq.items.map((f) => (
                  <div key={f.q} className="px-5 py-5 sm:px-6">
                    <dt className="font-display text-lg font-bold leading-snug text-ink-900">{f.q}</dt>
                    <dd className="mt-2 space-y-3 text-ink-800">
                      {f.a.split('\n\n').map((a, i) => (
                        <p key={i}>{linkify(a)}</p>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Closing — company paragraph + nearby towns */}
            <section className="mt-14 rounded-2xl border border-cloud-200 border-l-4 border-l-brand-600 bg-cloud-100 p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold leading-tight text-ink-900 sm:text-[28px]">{page.closing.heading}</h2>
              <div className="mt-5 space-y-5">
                {page.closing.paragraphs.map((p, i) => (
                  <Para key={i} p={p} />
                ))}
                <Nearby segments={page.closing.nearby} />
              </div>
            </section>
          </article>

          {/* Sidebar — contents + call card */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl bg-navy-950 p-6 text-white">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sand-400">Free chimney inspection</p>
                <p className="mt-3 font-display text-xl font-bold leading-snug">
                  Chimney repair in {page.name}
                </p>
                <a href={business.phoneHref} className="btn-primary mt-5 w-full justify-center">
                  <PhoneIcon className="h-4 w-4" />
                  {business.phone}
                </a>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
                >
                  Request an inspection <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs text-white/50">{business.licenseLabel}</p>
              </div>
              <nav aria-label="On this page" className="rounded-2xl border border-cloud-200 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cloud-500">On this page</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {page.sections.map((s) => (
                    <li key={s.heading}>
                      <a href={`#${anchor(s.heading)}`} className="text-ink-800 hover:text-brand-600">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#questions" className="text-ink-800 hover:text-brand-600">
                      Common questions
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title={`Chimney repair in ${page.name}?`}
        subtitle={`Call ${business.phone} or request an inspection — we inspect from the roof and the attic and put the scope and price in writing.`}
      />

      <TownMap town={page.name} county={page.county} />
    </>
  )
}

/* ───────────────────────────── county hub ───────────────────────────── */

/** /chimney-repair/:county — every chimney repair town page in one county. */
export function ChimneyRepairCountyPage() {
  const { county = '' } = useParams<{ county: string }>()
  const c = countyBySlug[county]
  const listRef = useReveal()
  if (!c) return <NotFound />
  const countyName = `${c.name} County`
  const path = countyPath(c.slug)

  return (
    <>
      <Seo
        title={`Chimney Repair ${countyName} NJ | Lita Construction`}
        description={`Chimney repair across ${countyName}, NJ — repointing, crowns, flashing leaks and rebuilds in ${c.pages.length} towns. Licensed NJ contractor. Call ${business.phone}.`}
        path={path}
        schema={breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'Chimney Repair', url: `${business.url}/chimney-repair/` },
          { name: countyName, url: `${business.url}${path}` },
        ])}
      />
      <Hero
        image={heroImages[counties.indexOf(c) % heroImages.length]}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Chimney Repair', to: '/chimney-repair/' }, { label: countyName }]}
        eyebrow={`Chimney Repair · ${c.pages.length} towns`}
        title={`Chimney Repair in ${countyName}, NJ`}
        stamp={{ title: c.name, subtitle: 'Chimney · NJ' }}
      >
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
          Pick your town to see the chimney problems we find there and how we repair them.
        </p>
      </Hero>
      <section className="bg-cloud-100 py-16 sm:py-20">
        <div ref={listRef} className="reveal container-x">
          <TownGrid pages={c.pages} />
          <OtherCounties current={c.slug} />
        </div>
      </section>
      <CtaBand title={`Chimney repair in ${countyName}?`} />
    </>
  )
}

/* ───────────────────────────── index ───────────────────────────── */

/** /chimney-repair — all counties and towns. */
export function ChimneyRepairIndexPage() {
  const listRef = useReveal()
  return (
    <>
      <Seo
        title="Chimney Repair in New Jersey by Town | Lita Construction"
        description={`Chimney repair in ${chimneyRepairPages.length} North Jersey towns — repointing, crowns, flashing leaks and rebuilds across ${counties.map((c) => c.name).join(', ')} counties. Call ${business.phone}.`}
        path="/chimney-repair/"
        schema={breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'Chimney Repair', url: `${business.url}/chimney-repair/` },
        ])}
      />
      <Hero
        image={heroImages[0]}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Chimney Repair' }]}
        eyebrow={`${chimneyRepairPages.length} towns · ${counties.length} counties`}
        title="Chimney Repair in New Jersey"
        stamp={{ title: 'Chimney', subtitle: 'Repair · NJ' }}
      >
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
          Pick your county and town to see the chimney problems we find there and how we repair them.
        </p>
      </Hero>
      <section className="bg-cloud-100 py-16 sm:py-20">
        <div ref={listRef} className="reveal container-x space-y-14">
          {counties.map((c) => (
            <div key={c.slug}>
              <div className="mb-6 flex items-center gap-4">
                <Link to={countyPath(c.slug)} className="font-display text-2xl font-bold text-ink-900 hover:text-brand-600">
                  {c.name} County
                </Link>
                <span className="h-px flex-1 bg-cloud-300" aria-hidden="true" />
                <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-sand-700">{c.pages.length} towns</span>
              </div>
              <TownGrid pages={c.pages} />
            </div>
          ))}
        </div>
      </section>
      <CtaBand title="Need a chimney repaired?" />
    </>
  )
}

function TownGrid({ pages }: { pages: ChimneyRepairPage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pages.map((p) => (
        <Link
          key={p.path}
          to={p.path}
          className="group flex flex-col rounded-2xl border border-cloud-200 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-card"
        >
          <span className="flex items-center gap-2 font-display text-lg font-bold text-ink-900 group-hover:text-brand-600">
            <PinIcon className="h-4 w-4 shrink-0 text-brand-600" />
            {p.name}, NJ
          </span>
          <span className="mt-2 text-sm leading-relaxed text-cloud-600">{p.meta}</span>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
            Chimney repair in {p.name} <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  )
}

function OtherCounties({ current }: { current: string }) {
  const others = counties.filter((c) => c.slug !== current)
  return (
    <div className="mt-14">
      <div className="flex items-center gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cloud-500">Chimney repair in other counties</p>
        <span className="h-px flex-1 bg-cloud-300" aria-hidden="true" />
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        {others.map((c) => (
          <Link
            key={c.slug}
            to={countyPath(c.slug)}
            className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-600/40 hover:bg-brand-50 hover:text-brand-600"
          >
            <PinIcon className="h-4 w-4 text-brand-600" />
            {c.name} County
          </Link>
        ))}
      </div>
    </div>
  )
}
