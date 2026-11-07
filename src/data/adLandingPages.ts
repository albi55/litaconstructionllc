/**
 * Google Ads landing pages — one per (ad service × town), served at
 * /lp/<service>/<town> and listed in the internal directory at /lp.
 *
 * These pages are separate from the organic /service-areas pages:
 *  - they're noindex (they'd otherwise duplicate the SEO pages), but AdsBot
 *    can still crawl them for Quality Score;
 *  - they have no site navigation, so ad clicks stay on the page and convert;
 *  - each page deterministically picks one of several layouts, headline
 *    formulas, hero photos and review/FAQ selections, so neighbouring towns
 *    don't render as cloned templates.
 *
 * All local copy comes from the existing per-town content (serviceTownContent).
 * Where a town has no trade-specific copy, the page falls back to the
 * service's own content plus the town's ZIP, county and neighbours.
 */

import { business, serviceBySlug, testimonials, type Service } from './business'
import {
  townsByService,
  SERVICE_KEYS,
  type ContentSection,
  type ServiceKey,
  type ServiceTownContent,
} from './serviceTownContent'
import { roofingTowns } from './roofingTowns'
import { flagshipRoofingNotes } from './flagshipRoofingNotes'

/* ───────────────────────────── ad services ───────────────────────────── */

export type AdService = {
  /** URL segment: /lp/<slug>/<town> */
  slug: string
  /** Display name used in titles: "Roof Repair" → "Roof Repair in Fort Lee, NJ" */
  name: string
  /** Lower-case search phrase used for keywords: "roof repair" */
  keyword: string
  /** Extra keyword stems for the keyword list */
  altKeywords: string[]
  /** Trade content sets to pull local copy from, in priority order */
  sources: ServiceKey[]
  /** Section-heading patterns to pull from that content, in display order. The first is the primary one. */
  sectionPatterns: RegExp[]
  /** business.ts service supplying FAQs, process and materials */
  baseService: string
  /** Photo pool for hero + gallery */
  images: string[]
  /** The offer shown on the page and in ads */
  offer: string
  /** Short hook for ad headlines (≤ 30 chars) */
  hooks: string[]
  /** Google Ads display path 1 (≤ 15 chars) */
  path1: string
  /** Campaign group in the directory + CSV export */
  group: 'Roofing' | 'Siding & Exterior' | 'Masonry' | 'Outdoor Living'
  /** Natural-language bits so sentences read right for every trade */
  copy: {
    /** "Need ___ in Fort Lee?" — e.g. "a new deck" */
    need: string
    /** "your ___" — e.g. "new deck" */
    project: string
    /** "Fort Lee's Trusted ___" — e.g. "Deck Builder" */
    contractor: string
  }
  /** Who the page talks to */
  customer: 'homeowners' | 'property owners'
}

const showcase = ['/showcase/house%20(1).png', '/showcase/house%20(2).png', '/showcase/house3.png']
/*
 * Photo pools — real Lita job photos only. The /roof, /Siding, /Mansory and
 * /Chimney "optimized" gallery files are phone shots letterboxed with black
 * bars (checked pixel-wise), so they are never used on ad pages. Pools are
 * kept to multiples of three so galleries always fill complete rows.
 */
const roofPhotos = ['/work/roof-roof14.webp', '/work/roof-roof30.webp', '/work/roof-roof45.webp']
const exteriorPhotos = ['/work/siding-siding1.webp', '/work/siding-siding6.webp', '/work/siding-siding10.webp']
const masonryPhotos = ['/work/mansory-Mansory22.webp', '/work/mansory-Mansory10.webp', '/work/chimney-Chimney1.webp']
const chimneyPhotos = ['/work/chimney-Chimney1.webp', '/work/mansory-Mansory22.webp', '/work/mansory-Mansory10.webp']
/** Finished-looking deck shots, used for deck & paver heroes. */
const deckHeroes = [
  '/Pavec/lita-paver-patio-design-04-nj.webp',
  '/Pavec/lita-outdoor-living-space-05-nj.webp',
  '/Pavec/lita-deck-expansion-06-nj.webp',
  '/Pavec/lita-multi-level-deck-07-nj.webp',
  '/Pavec/lita-backyard-deck-design-08-nj.webp',
]
const deckPhotos = [
  ...deckHeroes,
  '/Pavec/lita-custom-deck-build-01-nj.webp',
]
const paverPhotos = [
  '/work/mansory-Mansory22.webp',
  '/Pavec/lita-outdoor-living-space-05-nj.webp',
  '/Pavec/lita-backyard-deck-design-08-nj.webp',
  '/Pavec/lita-deck-expansion-06-nj.webp',
]

const GUARANTEE = /guarantee|advantage|white-glove/i

export const adServices: AdService[] = [
  {
    slug: 'roof-repair',
    name: 'Roof Repair',
    keyword: 'roof repair',
    altKeywords: ['roof leak repair', 'roofer', 'roofing contractor'],
    sources: ['roofing'],
    sectionPatterns: [/roof repair/i, /specialized/i, GUARANTEE],
    baseService: 'roof-repair',
    images: roofPhotos,
    offer: 'Free roof & leak inspection',
    hooks: ['Fast Roof Leak Repair', 'Same-Week Leak Repairs', 'Storm Damage Repairs'],
    copy: { need: 'roof repair', project: 'roof repair', contractor: 'Roof Repair Contractor' },
    customer: 'homeowners',
    path1: 'roof-repair',
    group: 'Roofing',
  },
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    keyword: 'roof replacement',
    altKeywords: ['new roof', 'roofing company', 'roofer'],
    sources: ['roofing'],
    sectionPatterns: [/roof replacement/i, /specialized/i, GUARANTEE],
    baseService: 'roof-replacement',
    images: roofPhotos,
    offer: 'Free written roof replacement estimate',
    hooks: ['Full Tear-Off New Roofs', 'GAF Shingle Roof Systems', '25-Year GAF Warranty'],
    copy: { need: 'a new roof', project: 'new roof', contractor: 'Roof Replacement Contractor' },
    customer: 'homeowners',
    path1: 'new-roof',
    group: 'Roofing',
  },
  {
    slug: 'commercial-roofing',
    name: 'Commercial Roofing',
    keyword: 'commercial roofing',
    altKeywords: ['flat roof repair', 'tpo roofing', 'commercial roofer'],
    sources: ['commercial', 'roofing'],
    sectionPatterns: [/specialized/i, GUARANTEE],
    baseService: 'commercial-roofing',
    images: roofPhotos,
    offer: 'Free commercial roof inspection & report',
    hooks: ['TPO & Flat Roof Experts', 'Flat Roof Leak Repair', 'Carlisle Certified TPO'],
    copy: { need: 'commercial roofing', project: 'commercial roof', contractor: 'Commercial Roofer' },
    customer: 'property owners',
    path1: 'commercial',
    group: 'Roofing',
  },
  {
    slug: 'siding-replacement',
    name: 'Siding Replacement',
    keyword: 'siding replacement',
    altKeywords: ['siding contractor', 'siding installation', 'vinyl siding'],
    sources: ['siding', 'exterior'],
    sectionPatterns: [/siding brands|crew/i, /repair/i, GUARANTEE],
    baseService: 'siding-replacement',
    images: exteriorPhotos,
    offer: 'Free siding consultation & color samples',
    hooks: ['James Hardie & Vinyl Siding', 'Full Tear-Off Re-Siding', 'Insulated Siding Options'],
    copy: { need: 'new siding', project: 'new siding', contractor: 'Siding Contractor' },
    customer: 'homeowners',
    path1: 'siding',
    group: 'Siding & Exterior',
  },
  {
    slug: 'siding-repair',
    name: 'Siding Repair',
    keyword: 'siding repair',
    altKeywords: ['siding contractor', 'storm damage siding', 'siding replacement'],
    sources: ['siding', 'exterior'],
    sectionPatterns: [/repair/i, /siding brands|crew/i, GUARANTEE],
    baseService: 'siding-repair',
    images: exteriorPhotos,
    offer: 'Free siding damage inspection',
    hooks: ['Storm-Damaged Siding Fixed', 'Matched Panel Repairs', 'Wall Rot & Leak Repair'],
    copy: { need: 'siding repair', project: 'siding repair', contractor: 'Siding Repair Contractor' },
    customer: 'homeowners',
    path1: 'siding-repair',
    group: 'Siding & Exterior',
  },
  {
    slug: 'window-replacement',
    name: 'Window Replacement',
    keyword: 'window replacement',
    altKeywords: ['replacement windows', 'window installation', 'andersen windows'],
    sources: ['siding', 'exterior'],
    sectionPatterns: [/window/i, GUARANTEE],
    baseService: 'windows-doors',
    images: exteriorPhotos,
    offer: 'Free in-home window consultation',
    hooks: ['Energy Star Windows', 'Andersen & Pella Installs', 'Stop Drafty Windows'],
    copy: { need: 'new windows', project: 'new windows', contractor: 'Window Contractor' },
    customer: 'homeowners',
    path1: 'windows',
    group: 'Siding & Exterior',
  },
  {
    slug: 'gutters',
    name: 'Gutter Installation',
    keyword: 'gutter installation',
    altKeywords: ['seamless gutters', 'gutter replacement', 'gutter guards'],
    sources: ['siding', 'exterior'],
    sectionPatterns: [/gutter/i, GUARANTEE],
    baseService: 'gutters',
    images: exteriorPhotos,
    offer: 'Free gutter & drainage assessment',
    hooks: ['Seamless Gutters Installed', 'Gutter Guards Available', 'Custom On-Site Gutters'],
    copy: { need: 'new gutters', project: 'new gutters', contractor: 'Gutter Contractor' },
    customer: 'homeowners',
    path1: 'gutters',
    group: 'Siding & Exterior',
  },
  {
    slug: 'chimney-repair',
    name: 'Chimney Repair',
    keyword: 'chimney repair',
    altKeywords: ['chimney repointing', 'chimney rebuild', 'chimney leak repair'],
    sources: ['chimney'],
    sectionPatterns: [/chimney/i, GUARANTEE],
    baseService: 'chimney-services',
    images: chimneyPhotos,
    offer: 'Free chimney safety inspection',
    hooks: ['Chimney Leak Repair', 'Crowns, Flashing & Liners', 'Repointing & Rebuilds'],
    copy: { need: 'chimney repair', project: 'chimney repair', contractor: 'Chimney Contractor' },
    customer: 'homeowners',
    path1: 'chimney',
    group: 'Masonry',
  },
  {
    slug: 'masonry',
    name: 'Masonry & Steps',
    keyword: 'masonry contractor',
    altKeywords: ['stone steps', 'concrete walkway', 'brick repair', 'mason'],
    sources: ['chimney'],
    sectionPatterns: [/step|entryway/i, /walkway|sidewalk/i, GUARANTEE],
    baseService: 'masonry-work',
    images: masonryPhotos,
    offer: 'Free on-site masonry estimate',
    hooks: ['Stone Steps & Walkways', 'Frost-Proof Masonry', 'Brick & Stone Repair'],
    copy: { need: 'a mason', project: 'masonry project', contractor: 'Masonry Contractor' },
    customer: 'homeowners',
    path1: 'masonry',
    group: 'Masonry',
  },
  {
    slug: 'decks',
    name: 'Deck Building',
    keyword: 'deck builder',
    altKeywords: ['composite deck', 'trex deck', 'deck contractor'],
    sources: ['decks'],
    sectionPatterns: [/deck/i, GUARANTEE],
    baseService: 'decks-pavers',
    images: deckPhotos,
    offer: 'Free deck design consultation',
    hooks: ['Trex, Azek & TimberTech', 'Custom Composite Decks', 'Permits Handled For You'],
    copy: { need: 'a new deck', project: 'new deck', contractor: 'Deck Builder' },
    customer: 'homeowners',
    path1: 'decks',
    group: 'Outdoor Living',
  },
  {
    slug: 'pavers',
    name: 'Paver Patios & Driveways',
    keyword: 'paver patio',
    altKeywords: ['paver driveway', 'hardscaping', 'techo-bloc patio'],
    sources: ['decks'],
    sectionPatterns: [/paver|hardscape|masonry/i, GUARANTEE],
    baseService: 'decks-pavers',
    images: paverPhotos,
    offer: 'Free patio & driveway design visit',
    hooks: ['Techo-Bloc & Cambridge', 'Paver Patios & Driveways', 'Deep-Base Paver Installs'],
    copy: { need: 'a paver patio or driveway', project: 'patio or driveway', contractor: 'Paver Contractor' },
    customer: 'homeowners',
    path1: 'pavers',
    group: 'Outdoor Living',
  },
]

export const adServiceBySlug: Record<string, AdService> = Object.fromEntries(
  adServices.map((s) => [s.slug, s]),
)

/* ──────────────────────────────── towns ──────────────────────────────── */

export type AdTown = {
  slug: string
  name: string
  county: string
  zips: string[]
  /** "Serving X, Y and Z" line from the source content, if any */
  serving?: string
}

/** Every town with any content, deduped, plus flagship roofing towns not in the content sets. */
export const adTowns: AdTown[] = (() => {
  const bySlug = new Map<string, AdTown>()
  for (const key of SERVICE_KEYS) {
    for (const t of townsByService[key]) {
      const existing = bySlug.get(t.slug)
      if (!existing) {
        bySlug.set(t.slug, {
          slug: t.slug,
          name: t.name,
          county: t.county.replace(/\s*County$/i, ''),
          zips: t.zips,
          serving: t.serving,
        })
      } else if (!existing.serving && t.serving) {
        existing.serving = t.serving
      }
    }
  }
  for (const t of roofingTowns) {
    if (!bySlug.has(t.slug)) {
      bySlug.set(t.slug, { slug: t.slug, name: t.name, county: 'Somerset', zips: t.zips })
    }
  }
  return [...bySlug.values()].sort((a, b) => a.name.localeCompare(b.name))
})()

export const adTownBySlug: Record<string, AdTown> = Object.fromEntries(adTowns.map((t) => [t.slug, t]))

/** Town names that exist in more than one county (e.g. Washington Township). */
const duplicateNames = (() => {
  const counts = new Map<string, number>()
  for (const t of adTowns) counts.set(t.name, (counts.get(t.name) ?? 0) + 1)
  return new Set([...counts].filter(([, n]) => n > 1).map(([name]) => name))
})()

/** "Fort Lee" — or "Washington Township (Morris County)" when the name is ambiguous. */
export function townLabel(t: AdTown): string {
  return duplicateNames.has(t.name) ? `${t.name} (${t.county} County)` : t.name
}

/* ───────────────────────────── determinism ───────────────────────────── */

/** Small stable string hash (FNV-1a) so each page always renders the same variant. */
export function hash(str: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  // Final avalanche (murmur3 fmix) so similar slugs don't land on similar values.
  h ^= h >>> 16
  h = Math.imul(h, 0x85ebca6b)
  h ^= h >>> 13
  h = Math.imul(h, 0xc2b2ae35)
  h ^= h >>> 16
  return h >>> 0
}

/** Picks `n` distinct items from `arr`, rotated by `seed`. */
function pick<T>(arr: readonly T[], n: number, seed: number): T[] {
  if (arr.length === 0) return []
  const out: T[] = []
  const step = arr.length > 2 ? 1 + (seed % (arr.length - 1)) : 1
  for (let i = 0; out.length < Math.min(n, arr.length) && i < arr.length * 2; i++) {
    const item = arr[(seed + i * step) % arr.length]
    if (!out.includes(item)) out.push(item)
  }
  // Fallback if the stride cycled early
  for (const item of arr) if (out.length < Math.min(n, arr.length) && !out.includes(item)) out.push(item)
  return out
}

/* ───────────────────────────── page model ───────────────────────────── */

export const LAYOUTS = ['split', 'centered', 'sidebar', 'bold'] as const
export type LayoutKey = (typeof LAYOUTS)[number]

export const LAYOUT_LABEL: Record<LayoutKey, string> = {
  split: 'A · Split hero + form',
  centered: 'B · Centered, light',
  sidebar: 'C · Sticky side form',
  bold: 'D · Problem → solution',
}

export type LandingPage = {
  path: string
  service: AdService
  town: AdTown
  base: Service | undefined
  layout: LayoutKey
  /** The page title as listed in the directory and used as H1 basis */
  title: string
  /** H1 split into a lead and an accent part (accent renders in brand red) */
  h1: { lead: string; accent: string }
  seoTitle: string
  metaDescription: string
  /** Local intro paragraphs */
  intro: string[]
  /** Local content sections, primary first */
  sections: ContentSection[]
  /** True when the page uses trade-specific copy written for this town */
  localCopy: boolean
  heroImage: string
  gallery: string[]
  faqs: { q: string; a: string }[]
  process: { title: string; description: string }[]
  features: string[]
  reviews: typeof testimonials[number][]
  ctaLabel: string
  zip: string
  neighbors: string[]
}

const CTA_LABELS = ['Get My Free Estimate', 'Request a Free Quote', 'Schedule My Free Visit']

/* ─────────────────────────── copy clean-up ─────────────────────────── */

/**
 * The source copy was written for organic SEO. A few patterns read like
 * keyword-stuffing to a homeowner arriving from an ad, so they're cleaned on
 * the ad pages only (the organic pages are untouched):
 *  - "Searching for the best siding contractor near me in X?" lead-ins
 *  - "High-Intent Repair:" heading prefixes
 *  - shouty one-line headlines ("Emerson's #1 Siding Contractor…")
 */
function cleanText(text: string): string {
  return text
    .replace(/(^|\s)Searching for [^?]*\?\s*/g, '$1')
    .replace(/^High-Performance Roofing Systems (?:near|in|for) [^.]*\.\s*/, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function cleanHeading(heading: string): string {
  return heading.replace(/^High-Intent\s+Repair:\s*/i, '').replace(/^High-Intent\s+/i, '').trim()
}

function cleanSection(s: ContentSection): ContentSection {
  return {
    heading: cleanHeading(s.heading),
    lead: s.lead ? cleanText(s.lead) : undefined,
    bullets: s.bullets.map((b) => ({ title: b.title, body: cleanText(b.body) })),
  }
}

/** Keeps real paragraphs, dropping the headline-style lines some source intros start with. */
function cleanIntro(paras: string[]): string[] {
  return paras.map(cleanText).filter((p) => p.length > 140)
}

/**
 * Flagship towns (Fort Lee, Rumson, …) have their roofing copy in
 * flagshipRoofingNotes rather than the generated content set. Shape it like
 * the generated content so roofing ad pages there get local copy too.
 */
function flagshipRoofingContent(town: AdTown): ServiceTownContent | undefined {
  const n = flagshipRoofingNotes[town.slug]
  if (!n) return undefined
  const near = n.landmarks.slice(0, 2).join(' and ')
  const stresses = n.localStresses.charAt(0).toLowerCase() + n.localStresses.slice(1)
  const decking = { title: 'Structural Decking Audit', body: n.substrateNotes }
  return {
    slug: town.slug,
    name: town.name,
    county: town.county,
    zips: town.zips,
    intro: [
      `Lita Construction repairs and replaces roofs across ${town.name} — from homes near ${near} to the town's ${n.housingStock.toLowerCase()}. Roofs here face a specific set of local stresses: ${stresses} We build every repair and replacement around those conditions, and when you call, you speak with a roofer, not a salesman.`,
    ],
    sections: [
      {
        heading: `Roof Repair in ${town.name}`,
        bullets: [{ title: 'Valley & Flashing Engineering', body: n.valleyNotes }, decking],
      },
      {
        heading: `Roof Replacement in ${town.name}`,
        bullets: [{ title: 'Shingle Specification & Algae Defense', body: n.algaeNotes }, decking],
      },
    ],
    serving: town.serving,
    meta: '',
  }
}

function findContent(service: AdService, town: AdTown): ServiceTownContent | undefined {
  for (const key of service.sources) {
    const hit = townsByService[key].find((t) => t.slug === town.slug)
    if (hit) return hit
  }
  if (service.sources.includes('roofing')) return flagshipRoofingContent(town)
  return undefined
}

/** True when the town has copy written for this trade (not just the generic fallback). */
function hasLocalCopy(service: AdService, content: ServiceTownContent | undefined): boolean {
  if (!content) return false
  if (content.sections.some((s) => service.sectionPatterns[0].test(s.heading))) return true
  // Commercial pages have a single local paragraph and no sections; that still counts.
  return service.sources[0] === 'commercial' && content.intro.length > 0 && content.sections.length === 0
}

function pickSections(service: AdService, content: ServiceTownContent | undefined): ContentSection[] {
  if (!content) return []
  const out: ContentSection[] = []
  for (const re of service.sectionPatterns) {
    for (const s of content.sections) {
      if (re.test(s.heading) && !/faq|question/i.test(s.heading) && !out.includes(s)) out.push(s)
    }
  }
  return out
}

function neighborsFrom(town: AdTown): string[] {
  if (!town.serving) return []
  return town.serving
    .split(/,\s*(?:and\s+)?|\s+and\s+/)
    .map((s) => s.trim())
    .filter((s) => s && s !== town.name)
    .slice(0, 4)
}

/** Which testimonials talk about this trade. */
const REVIEW_MATCH: Record<AdService['group'], RegExp> = {
  Roofing: /roof/i,
  'Siding & Exterior': /siding/i,
  Masonry: /masonry|chimney/i,
  'Outdoor Living': /masonry|paver|deck/i,
}

export function landingPath(serviceSlug: string, townSlug: string) {
  return `/lp/${serviceSlug}/${townSlug}`
}

export function buildLandingPage(serviceSlug: string, townSlug: string): LandingPage | undefined {
  const service = adServiceBySlug[serviceSlug]
  const town = adTownBySlug[townSlug]
  if (!service || !town) return undefined

  const seed = hash(`${service.slug}/${town.slug}`)
  const layout = LAYOUTS[seed % LAYOUTS.length]
  const base = serviceBySlug(service.baseService)
  const content = findContent(service, town)
  const label = townLabel(town)
  const zip = town.zips[0] ?? ''
  const { customer } = service

  const localCopy = hasLocalCopy(service, content)
  const matched = pickSections(service, content).map(cleanSection)

  let intro = localCopy && content ? cleanIntro(content.intro) : []
  if (intro.length === 0) {
    const lead = `Lita Construction provides ${service.keyword} for ${customer} in ${town.name}${zip ? ` (${zip})` : ''} and across ${town.county} County.`
    const body = base?.intro.split(/\n+/)[0] ?? base?.blurb ?? ''
    intro = [`${lead} ${body}`.trim()]
  }

  const sections: ContentSection[] =
    localCopy && matched.length > 0
      ? matched
      : [
          ...(base
            ? [
                {
                  heading: `${service.name} services in ${town.name}`,
                  bullets: base.subServices.map((s) => ({ title: s.name, body: s.description })),
                },
              ]
            : []),
          ...matched.filter((s) => GUARANTEE.test(s.heading)),
        ]
  // Thin local copy (e.g. two flagship notes) gets the service's own breakdown underneath.
  if (base && sections.reduce((n, s) => n + s.bullets.length, 0) < 4) {
    sections.push({
      heading: `Our ${service.name.toLowerCase()} services`,
      bullets: base.subServices.map((s) => ({ title: s.name, body: s.description })),
    })
  }

  // The H1 is always the page's own title ("Roof Repair in Fort Lee, NJ") — the same text the
  // directory lists and the ad points to — styled like the site's service pages: "Roof Repair in"
  // then the town in brand red. Variety between pages comes from the layouts, not the headline.
  const h1: LandingPage['h1'] = { lead: `${service.name} in`, accent: `${label}, NJ` }

  const photoSeed = seed >>> 5
  // Heroes need large, clean photos: finished deck shoots for outdoor-living pages;
  // the high-res showcase houses (the site-wide hero rule) for everything else.
  const heroPool = service.group === 'Outdoor Living' ? deckHeroes : showcase
  const heroImage = pick(heroPool, 1, photoSeed)[0] ?? showcase[0]
  const galleryPool = service.images.filter((s) => s !== heroImage)
  const gallery = pick(galleryPool, galleryPool.length >= 6 ? 6 : 3, photoSeed + 7)

  // FAQs: the town's own Q&A first, then the service's, rotated. Always an even count (4 or 6)
  // so two-column FAQ grids never leave a lone card.
  const localFaq =
    content?.sections
      .filter((s) => /faq|question/i.test(s.heading))
      .flatMap((s) => s.bullets.filter((b) => b.title).map((b) => ({ q: b.title!, a: cleanText(b.body) }))) ?? []
  const faqPool = [...localFaq.slice(0, 3), ...pick(base?.faqs ?? [], 6, seed >>> 7)]
  const faqs = faqPool.slice(0, faqPool.length >= 6 ? 6 : 4)

  // Reviews: ones about this trade first, then the rest.
  const re = REVIEW_MATCH[service.group]
  const about = (t: (typeof testimonials)[number]) => re.test(t.service) || re.test(t.quote)
  const reviews = [
    ...pick(testimonials.filter(about), 3, seed >>> 9),
    ...pick(testimonials.filter((t) => !about(t)), 3, seed >>> 9),
  ].slice(0, 3)

  const title = `${service.name} in ${label}, NJ`
  const metaDescription = `${service.name} in ${town.name}, NJ${zip ? ` ${zip}` : ''} by Lita Construction — GAF Master Elite®, licensed & insured since ${business.founded}. ${service.offer}. Call ${business.phone}.`

  return {
    path: landingPath(service.slug, town.slug),
    service,
    town,
    base,
    layout,
    title,
    h1,
    seoTitle: `${title} | ${service.offer} | Lita Construction`,
    metaDescription,
    intro,
    sections,
    localCopy,
    heroImage,
    gallery,
    faqs,
    process: (base?.process ?? []).slice(0, 4),
    features: base?.features ?? [],
    reviews,
    ctaLabel: CTA_LABELS[(seed >>> 11) % CTA_LABELS.length],
    zip,
    neighbors: neighborsFrom(town),
  }
}

/* ─────────────────────────── directory index ─────────────────────────── */

export type LandingIndexRow = {
  path: string
  title: string
  serviceSlug: string
  serviceName: string
  group: AdService['group']
  townSlug: string
  townName: string
  county: string
  zip: string
  layout: LayoutKey
  localCopy: boolean
}

/** Lightweight list of every landing page (no copy), for the /lp directory. */
export function allLandingRows(): LandingIndexRow[] {
  const rows: LandingIndexRow[] = []
  for (const service of adServices) {
    for (const town of adTowns) {
      const seed = hash(`${service.slug}/${town.slug}`)
      rows.push({
        path: landingPath(service.slug, town.slug),
        title: `${service.name} in ${townLabel(town)}, NJ`,
        serviceSlug: service.slug,
        serviceName: service.name,
        group: service.group,
        townSlug: town.slug,
        townName: town.name,
        county: town.county,
        zip: town.zips[0] ?? '',
        layout: LAYOUTS[seed % LAYOUTS.length],
        localCopy: hasLocalCopy(service, findContent(service, town)),
      })
    }
  }
  return rows
}

/* ───────────────────────────── Google Ads kit ───────────────────────────── */

export type AdKit = {
  finalUrl: string
  path1: string
  path2: string
  headlines: string[]
  descriptions: string[]
  keywords: { text: string; match: 'Phrase' | 'Exact' }[]
}

const fit = (max: number) => (s: string) => s.length <= max

/** Responsive Search Ad copy + keywords for one landing page, within Google's length limits. */
export function adKitFor(row: Pick<LandingIndexRow, 'serviceSlug' | 'townSlug' | 'path'>): AdKit | undefined {
  const service = adServiceBySlug[row.serviceSlug]
  const town = adTownBySlug[row.townSlug]
  if (!service || !town) return undefined
  const t = town.name
  const s = service.name
  const zip = town.zips[0]

  const headlineCandidates = [
    `${s} ${t} NJ`,
    `${s} in ${t}`,
    `${s} ${t}`,
    `${t} ${s}`,
    `${t}, NJ ${s}`,
    `${s} Near ${t}`,
    ...service.hooks,
    'GAF Master Elite Contractor',
    'Family-Owned Since 2004',
    'Licensed & Fully Insured',
    'Free On-Site Estimates',
    `Serving ${town.county} County`,
    zip ? `Serving ${t} ${zip}` : '',
    `Call ${business.phone}`,
    'Talk to a Pro, Not a Salesman',
  ].filter(Boolean)
  const headlines = [...new Set(headlineCandidates.filter(fit(30)))].slice(0, 15)

  const descriptionCandidates = [
    `${s} in ${t}, NJ by a GAF Master Elite contractor. ${service.offer} — call today.`,
    `Family-owned since 2004. Licensed, insured & our own crews. Free estimates in ${t}.`,
    `Honest pricing, clean job sites and work we stand behind. Serving ${t} & ${town.county} County.`,
    `${service.offer}. Call ${business.phone} or request your estimate online in 60 seconds.`,
    `Trusted ${service.keyword} for ${t} homes. Written estimates, no pressure, no surprises.`,
    `${s} done right the first time. Serving ${t} and all of ${town.county} County, NJ.`,
    `Free estimates in ${t}. GAF Master Elite, licensed & insured since 2004.`,
    `${service.offer}. Our own crews, clean job sites, written quotes.`,
    `Local, family-owned & insured. Call ${business.phone} for a free estimate.`,
    `Written estimates, honest advice and no pressure to sign. Call today.`,
  ]
  const descriptions = descriptionCandidates.filter(fit(90)).slice(0, 4)

  const town15 = town.slug.slice(0, 15).replace(/-+$/, '')
  const kwTown = t.toLowerCase()
  const stems = [service.keyword, ...service.altKeywords]
  const keywords: AdKit['keywords'] = []
  for (const stem of stems) {
    keywords.push({ text: `${stem} ${kwTown}`, match: 'Phrase' })
    keywords.push({ text: `${stem} ${kwTown} nj`, match: 'Exact' })
  }
  keywords.push({ text: `${service.keyword} near ${kwTown}`, match: 'Phrase' })

  return {
    finalUrl: `${business.url}${row.path}`,
    path1: service.path1.slice(0, 15),
    path2: town15,
    headlines,
    descriptions,
    keywords,
  }
}

/** Recommended account-level "Final URL suffix" so every click carries campaign data into the form. */
export const FINAL_URL_SUFFIX =
  'utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}&matchtype={matchtype}&device={device}'

/**
 * Which ad landing page each /services/<slug> page opens when someone picks a
 * town from the "… in New Jersey ▾" headline. Services without an ad page
 * (e.g. painting) keep a plain headline.
 */
export const adServiceForSitePage: Record<string, string> = {
  'roof-repair': 'roof-repair',
  'roof-replacement': 'roof-replacement',
  'residential-roofing': 'roof-replacement',
  roofing: 'roof-replacement',
  'commercial-roofing': 'commercial-roofing',
  'siding-replacement': 'siding-replacement',
  'siding-installation': 'siding-replacement',
  siding: 'siding-replacement',
  'siding-repair': 'siding-repair',
  'windows-doors': 'window-replacement',
  gutters: 'gutters',
  'chimney-services': 'chimney-repair',
  'masonry-work': 'masonry',
  masonry: 'masonry',
  'decks-pavers': 'decks',
}

/** Towns grouped by county (alphabetical), for the headline town picker. */
export const adTownsByCounty: { county: string; towns: AdTown[] }[] = (() => {
  const groups = new Map<string, AdTown[]>()
  for (const t of adTowns) {
    if (!groups.has(t.county)) groups.set(t.county, [])
    groups.get(t.county)!.push(t)
  }
  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([county, towns]) => ({ county, towns }))
})()
