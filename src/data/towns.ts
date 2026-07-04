/**
 * Town-level service-area pages (local SEO).
 * Each entry drives a full landing page at /service-areas/<slug> rendered by
 * TownPage.tsx. All shared copy lives in the template — only the bits that
 * genuinely vary per town live here, so adding a new town is one entry.
 */

export type Town = {
  slug: string
  /** Display name, e.g. 'Fort Lee' */
  name: string
  /** Landmark line, e.g. 'Lemoine Ave, Main St, and the George Washington Bridge area' */
  landmarks: string
  /** The two neighboring towns for the closing "Serving X, Y, and Z" line */
  neighbors: [string, string]
  /** How the permits section names the local building department */
  buildingDept: string
  /** 'Borough Hall' | 'City Hall' | 'Town Hall' — the local seat of government */
  hall: string
  /** Phrasing for the sidewalk codes line, e.g. 'all Fort Lee safety codes' or 'all local safety codes' */
  codesLabel: string
  /** Adjective for the recent-work line ('structural' for most towns, 'luxury' for Alpine) */
  showcase: 'structural' | 'luxury'
}

export const towns: Town[] = [
  {
    slug: 'fort-lee',
    name: 'Fort Lee',
    landmarks: 'Lemoine Ave, Main St, and the George Washington Bridge area',
    neighbors: ['Cliffside Park', 'Edgewater'],
    buildingDept: 'the Fort Lee Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all Fort Lee safety codes',
    showcase: 'structural',
  },
  {
    slug: 'edgewater',
    name: 'Edgewater',
    landmarks: 'River Rd, Undercliff Ave, and the Edgewater Commons area',
    neighbors: ['Fort Lee', 'Cliffside Park'],
    buildingDept: 'the local Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all local safety codes',
    showcase: 'structural',
  },
  {
    slug: 'cliffside-park',
    name: 'Cliffside Park',
    landmarks: 'Anderson Ave, Palisade Ave, and Cliffside Park High School',
    neighbors: ['Fort Lee', 'Fairview'],
    buildingDept: 'the local Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all local safety codes',
    showcase: 'structural',
  },
  {
    slug: 'fairview',
    name: 'Fairview',
    landmarks: 'Bergen Blvd, Anderson Ave, and Fairview Public School',
    neighbors: ['Cliffside Park', 'Ridgefield'],
    buildingDept: 'the local Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all Fairview safety codes',
    showcase: 'structural',
  },
  {
    slug: 'ridgefield',
    name: 'Ridgefield',
    landmarks: 'Broad Ave, Shaler Blvd, and Ridgefield Veterans Memorial Park',
    neighbors: ['Fairview', 'Palisades Park'],
    buildingDept: 'the Ridgefield Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all Ridgefield safety codes',
    showcase: 'structural',
  },
  {
    slug: 'palisades-park',
    name: 'Palisades Park',
    landmarks: 'Broad Ave, Central Blvd, and the Overpeck County Park area',
    neighbors: ['Leonia', 'Ridgefield'],
    buildingDept: 'the local Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all local safety codes',
    showcase: 'structural',
  },
  {
    slug: 'leonia',
    name: 'Leonia',
    landmarks: 'Broad Ave, Fort Lee Rd, and Leonia High School',
    neighbors: ['Palisades Park', 'Englewood'],
    buildingDept: 'the Leonia Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all Leonia safety codes',
    showcase: 'structural',
  },
  {
    slug: 'englewood',
    name: 'Englewood',
    landmarks: 'Palisades Ave, Dana Place, and the Bergen PAC',
    neighbors: ['Englewood Cliffs', 'Teaneck'],
    buildingDept: 'the City of Englewood Building Department',
    hall: 'City Hall',
    codesLabel: 'all Englewood safety codes',
    showcase: 'structural',
  },
  {
    slug: 'tenafly',
    name: 'Tenafly',
    landmarks: 'Knickerbocker Rd, Riveredge Rd, and the Tenafly Nature Center',
    neighbors: ['Alpine', 'Cresskill'],
    buildingDept: 'the Tenafly Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all Tenafly safety codes',
    showcase: 'structural',
  },
  {
    slug: 'alpine',
    name: 'Alpine',
    landmarks: 'Closter Dock Rd, Hillside Ave, and the Palisades',
    neighbors: ['Closter', 'Tenafly'],
    buildingDept: 'the Alpine Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all Alpine safety codes',
    showcase: 'luxury',
  },
  {
    slug: 'closter',
    name: 'Closter',
    landmarks: 'Closter Dock Rd, Piermont Rd, and the Closter Plaza',
    neighbors: ['Alpine', 'Harrington Park'],
    buildingDept: 'the Closter Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all Closter safety codes',
    showcase: 'structural',
  },
  {
    slug: 'demarest',
    name: 'Demarest',
    landmarks: 'Hardenburgh Ave, County Rd, and the Demarest Duck Pond',
    neighbors: ['Cresskill', 'Closter'],
    buildingDept: 'the Demarest Building Department',
    hall: 'Borough Hall',
    codesLabel: 'all Demarest safety codes',
    showcase: 'structural',
  },
  {
    slug: 'cresskill',
    name: 'Cresskill',
    landmarks: 'County Rd, Knickerbocker Rd, and Bryan School',
    neighbors: ['Demarest', 'Tenafly'],
    buildingDept: 'the local Building Department',
    hall: 'Town Hall',
    codesLabel: 'all Cresskill safety codes',
    showcase: 'structural',
  },
]

export const townBySlug: Record<string, Town> = Object.fromEntries(
  towns.map((t) => [t.slug, t]),
)
