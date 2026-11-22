/**
 * The town directory on the Service Areas page, filtered by service.
 *
 * "All services" lists every town with a page and links to the town overview.
 * Picking a service lists only the towns that have a page for that service and
 * links straight to it (Roofing → Fort Lee → /service-areas/fort-lee/roofing).
 *
 * Each service merges every kind of page the site has for it, with the best
 * page winning when a town has more than one:
 *   1. the chimney repair pages from the chimney PDF (/chimney-repair/...)
 *   2. the hand-built town pages (13 Bergen + 24 Monmouth/Somerset towns)
 *   3. the generated town × service pages
 */
import { towns } from './towns'
import { roofingTowns } from './roofingTowns'
import { townsByService, townsByCounty, SERVICE_INFO, type ServiceKey } from './serviceTownContent'
import { chimneyRepairIndex } from './chimneyRepairIndex'

export type DirectoryTown = { name: string; county: string; to: string }
export type DirectoryGroup = { county: string; towns: DirectoryTown[] }
export type DirectoryService = { id: string; label: string; groups: DirectoryGroup[]; count: number }

/** Roofing towns in Monmouth County — the rest of roofingTowns are in Somerset. */
const monmouthRoofingSlugs = new Set([
  'rumson', 'colts-neck', 'holmdel', 'marlboro', 'manalapan', 'howell',
  'middletown', 'freehold-township', 'wall-township', 'little-silver', 'shrewsbury',
])

/** The 37 hand-built towns, each with every trade in townServices.ts. */
const flagshipTowns: { slug: string; name: string; county: string }[] = [
  ...towns.map((t) => ({ slug: t.slug, name: t.name, county: 'Bergen County' })),
  ...roofingTowns.map((t) => ({
    slug: t.slug,
    name: t.name,
    county: monmouthRoofingSlugs.has(t.slug) ? 'Monmouth County' : 'Somerset County',
  })),
]

const withCounty = (c: string) => (c.endsWith('County') ? c : `${c} County`)

/** Same town, same county → one entry ("Franklin Township" vs "Franklin Township, NJ" slugs). */
const townKey = (name: string, county: string) =>
  `${county.toLowerCase()}|${name.toLowerCase().replace(/[^a-z0-9]+/g, '')}`

const flagship = (serviceSlug: string): DirectoryTown[] =>
  flagshipTowns.map((t) => ({ name: t.name, county: t.county, to: `/service-areas/${t.slug}/${serviceSlug}` }))

const generated = (key: ServiceKey): DirectoryTown[] =>
  townsByService[key].map((t) => ({
    name: t.name,
    county: withCounty(t.county),
    to: `/service-areas/${t.slug}/${SERVICE_INFO[key].slug}`,
  }))

const chimneyPdf = (): DirectoryTown[] =>
  chimneyRepairIndex.map((p) => ({ name: p.name, county: p.county, to: p.path }))

/** Merge sources in priority order, drop repeats, group by county A–Z. */
function build(id: string, label: string, sources: DirectoryTown[][]): DirectoryService {
  const seen = new Set<string>()
  const groups = new Map<string, DirectoryTown[]>()
  for (const t of sources.flat()) {
    const k = townKey(t.name, t.county)
    if (seen.has(k)) continue
    seen.add(k)
    if (!groups.has(t.county)) groups.set(t.county, [])
    groups.get(t.county)!.push(t)
  }
  const list = [...groups.entries()]
    .map(([county, ts]) => ({ county, towns: ts.sort((a, b) => a.name.localeCompare(b.name)) }))
    .sort((a, b) => a.county.localeCompare(b.county))
  return { id, label, groups: list, count: seen.size }
}

export const serviceDirectory: DirectoryService[] = [
  {
    id: 'all',
    label: 'All Services',
    groups: townsByCounty.map((g) => ({
      county: g.county,
      towns: g.towns.map((t) => ({ name: t.name, county: g.county, to: `/service-areas/${t.slug}` })),
    })),
    count: townsByCounty.reduce((n, g) => n + g.towns.length, 0),
  },
  build('roofing', 'Roofing', [flagship('roofing'), generated('roofing')]),
  build('commercial-roofing', 'Commercial Roofing', [generated('commercial')]),
  build('siding', 'Siding', [flagship('siding'), generated('siding')]),
  build('windows-gutters', 'Windows & Gutters', [generated('exterior')]),
  build('chimney', 'Chimney Repair', [chimneyPdf(), flagship('chimney-repair'), generated('chimney')]),
  build('masonry', 'Masonry', [flagship('masonry'), generated('chimney')]),
  build('stucco', 'Stucco', [flagship('stucco')]),
  build('decks-pavers', 'Decks & Pavers', [generated('decks'), flagship('paver-driveways')]),
]
