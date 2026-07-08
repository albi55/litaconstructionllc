/**
 * Shared content model for the town × service landing pages sourced from
 * Lita-Construction-Services-FULL. Every service (roofing, siding, decks,
 * chimney, exterior, commercial) uses this one shape so a single template —
 * TownServiceContentPage — can render all 640+ pages at
 * /service-areas/<slug>/<service>.
 *
 * The per-service data files (roofingServiceTowns.ts, sidingServiceTowns.ts, …)
 * are generated from the source document; this module defines the type and the
 * combined registry the router and template consume.
 */

import { roofingServiceTowns } from './roofingServiceTowns'
import { sidingServiceTowns } from './sidingServiceTowns'
import { decksServiceTowns } from './decksServiceTowns'
import { chimneyServiceTowns } from './chimneyServiceTowns'
import { exteriorServiceTowns } from './exteriorServiceTowns'
import { commercialServiceTowns } from './commercialServiceTowns'

/** One bullet in a content section — usually a "Title: body" pair, or plain body. */
export type ContentBullet = {
  /** Short lead-in label (e.g. 'Leak Detection', or an FAQ question). Optional. */
  title?: string
  body: string
}

/** A headed block of copy: an optional lead paragraph plus a list of bullets. */
export type ContentSection = {
  heading: string
  lead?: string
  bullets: ContentBullet[]
}

/** A single town's content for one service. */
export type ServiceTownContent = {
  slug: string
  name: string
  county: string
  zips: string[]
  /** Intro paragraph(s). May include a headline line first; may be empty. */
  intro: string[]
  /** The trade/section blocks. Empty for the commercial single-paragraph pages. */
  sections: ContentSection[]
  /** Closing "Serving X, Y, and Z" towns, if present in the source. */
  serving?: string
  /** SEO meta-description line from the source. */
  meta: string
}

/** The service keys, in the order they appear in the source document. */
export const SERVICE_KEYS = [
  'roofing',
  'siding',
  'decks',
  'chimney',
  'exterior',
  'commercial',
] as const

export type ServiceKey = (typeof SERVICE_KEYS)[number]

/** Display + routing metadata per service. */
export type ServiceInfo = {
  key: ServiceKey
  /** URL segment: /service-areas/<slug>/<slug> */
  slug: string
  /** Human label for headings and breadcrumbs. */
  label: string
  /** Short label for chips/links. */
  shortLabel: string
  /** Which drawing-set sheet family the section tags use. */
  sheet: string
  /** The related main service page, for the "learn more" link. */
  servicePath: string
  /** Hero background photo for this trade. */
  heroImage: string
  /** SEO title suffix, e.g. 'Roofing Contractor'. */
  seoTrade: string
}

export const SERVICE_INFO: Record<ServiceKey, ServiceInfo> = {
  roofing: {
    key: 'roofing',
    slug: 'roofing',
    label: 'Roofing',
    shortLabel: 'Roofing',
    sheet: 'R-100',
    servicePath: '/services/residential-roofing',
    heroImage: '/work/roof-roof30.webp',
    seoTrade: 'Roofing Contractor',
  },
  siding: {
    key: 'siding',
    slug: 'siding',
    label: 'Siding & Window Replacement',
    shortLabel: 'Siding',
    sheet: 'SD-100',
    servicePath: '/services/siding-installation',
    heroImage: '/work/siding-siding6.webp',
    seoTrade: 'Siding & Window Contractor',
  },
  decks: {
    key: 'decks',
    slug: 'decks-pavers',
    label: 'Decks & Paver Hardscapes',
    shortLabel: 'Decks & Pavers',
    sheet: 'P-100',
    servicePath: '/services/decks-pavers',
    heroImage: '/Pavec/lita-paver-patio-design-04-nj.webp',
    seoTrade: 'Deck Builder & Paver Contractor',
  },
  chimney: {
    key: 'chimney',
    slug: 'chimney-masonry',
    label: 'Chimney & Masonry Restoration',
    shortLabel: 'Chimney & Masonry',
    sheet: 'M-100',
    servicePath: '/services/chimney-services',
    heroImage: '/work/chimney-Chimney1.webp',
    seoTrade: 'Chimney & Masonry Contractor',
  },
  exterior: {
    key: 'exterior',
    slug: 'exterior',
    label: 'Siding, Windows & Gutters',
    shortLabel: 'Exterior',
    sheet: 'EX-100',
    servicePath: '/services/siding-installation',
    heroImage: '/work/siding-siding6.webp',
    seoTrade: 'Exterior Renovation Contractor',
  },
  commercial: {
    key: 'commercial',
    slug: 'commercial-roofing',
    label: 'Commercial TPO Roofing',
    shortLabel: 'Commercial Roofing',
    sheet: 'TPO-100',
    servicePath: '/services/commercial-roofing',
    heroImage: '/work/roof-roof30.webp',
    seoTrade: 'Commercial Roofing Contractor',
  },
}

/** Slug → ServiceKey (accepts the URL segment). */
export const serviceKeyBySlug: Record<string, ServiceKey> = Object.fromEntries(
  Object.values(SERVICE_INFO).map((s) => [s.slug, s.key]),
)

/** All towns for a given service. */
export const townsByService: Record<ServiceKey, ServiceTownContent[]> = {
  roofing: roofingServiceTowns,
  siding: sidingServiceTowns,
  decks: decksServiceTowns,
  chimney: chimneyServiceTowns,
  exterior: exteriorServiceTowns,
  commercial: commercialServiceTowns,
}

/** Per-service slug → town lookup, built once. */
export const townBySlugByService: Record<ServiceKey, Record<string, ServiceTownContent>> =
  Object.fromEntries(
    SERVICE_KEYS.map((key) => [
      key,
      Object.fromEntries(townsByService[key].map((t) => [t.slug, t])),
    ]),
  ) as Record<ServiceKey, Record<string, ServiceTownContent>>

/**
 * Look up one town's content for one service by their URL segments.
 * `serviceSlug` is the URL segment (e.g. 'decks-pavers'); returns undefined
 * if either the service or the town is unknown.
 */
export function findServiceTown(
  townSlug: string,
  serviceSlug: string,
): { info: ServiceInfo; town: ServiceTownContent } | undefined {
  const key = serviceKeyBySlug[serviceSlug]
  if (!key) return undefined
  const town = townBySlugByService[key][townSlug]
  if (!town) return undefined
  return { info: SERVICE_INFO[key], town }
}

/** Every service a given town slug has a page for — for cross-links. */
export function servicesForTown(townSlug: string): ServiceInfo[] {
  return SERVICE_KEYS.filter((key) => townBySlugByService[key][townSlug]).map(
    (key) => SERVICE_INFO[key],
  )
}

/** All (townSlug, serviceSlug) pairs — used to build the sitemap. */
export function allServiceTownPaths(): { townSlug: string; serviceSlug: string }[] {
  const out: { townSlug: string; serviceSlug: string }[] = []
  for (const key of SERVICE_KEYS) {
    for (const t of townsByService[key]) {
      out.push({ townSlug: t.slug, serviceSlug: SERVICE_INFO[key].slug })
    }
  }
  return out
}

/** One town in the directory index (deduped across services). */
export type IndexedTown = { slug: string; name: string; county: string }

/**
 * Every distinct town that has at least one service page, deduped by slug and
 * grouped by county — powers the town directory on the Service Areas page.
 * Counties come back alphabetically; towns are alphabetical within each.
 */
export const townsByCounty: { county: string; towns: IndexedTown[] }[] = (() => {
  const bySlug = new Map<string, IndexedTown>()
  for (const key of SERVICE_KEYS) {
    for (const t of townsByService[key]) {
      if (!bySlug.has(t.slug)) {
        const county = t.county.endsWith('County') ? t.county : `${t.county} County`
        bySlug.set(t.slug, { slug: t.slug, name: t.name, county })
      }
    }
  }
  const groups = new Map<string, IndexedTown[]>()
  for (const t of bySlug.values()) {
    if (!groups.has(t.county)) groups.set(t.county, [])
    groups.get(t.county)!.push(t)
  }
  return [...groups.entries()]
    .map(([county, towns]) => ({
      county,
      towns: towns.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => a.county.localeCompare(b.county))
})()

/** Total distinct towns with a service page — for the directory heading count. */
export const indexedTownCount = townsByCounty.reduce((n, g) => n + g.towns.length, 0)
