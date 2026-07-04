import { business } from './business'

/**
 * "Siding, Window & Gutter Specialists" town pages — the third town-page
 * family (Somerset, Essex, Morris, Union & Passaic markets), rendered by
 * ExteriorTownPage.tsx at /service-areas/<slug>.
 *
 * Copy follows the "Master Specialist Book" series: whole-house-envelope
 * positioning, "a professional, not a salesman", premium brands (Hardie,
 * CertainTeed, Norandex, Andersen, Pella), and high-urgency repair keywords.
 */

export type ExteriorTown = {
  slug: string
  /** Display name, e.g. 'Millburn / Short Hills' */
  name: string
  /** Compact name for the stamp/title block, e.g. 'Short Hills' */
  shortName: string
  zips: string[]
  county: string
  /** Town-specific hook woven into the intro (architecture / character). */
  hook: string
  /** Which copy rotation this page uses (matches the source series' variants). */
  variant: 0 | 1 | 2
}

/** The eight specialist services shown on every exterior page. */
export const exteriorServices = [
  { title: 'Siding Replacements', body: 'Expert in James Hardie fiber cement, CertainTeed Monogram vinyl, and vertical board & batten systems.' },
  { title: 'Siding & Aluminum Repairs', body: 'Precision fixes for oxidized aluminum siding, loose panels, trim damage, and storm-damaged sections.' },
  { title: 'Window Replacements', body: 'High-performance installations of Pella® and Andersen® energy-efficient window units.' },
  { title: 'Window Leak & Seal Repairs', body: 'Identifying and sealing water intrusion points around window frames, sills, and casings.' },
  { title: 'Seamless Gutters & Guards', body: 'Custom-fabricated 6-inch aluminum gutters with high-capacity downspout systems.' },
  { title: 'Gutter Leak Repairs', body: 'Fixing leaking miters, sagging gutter runs, and clogged drainage before they rot the fascia.' },
  { title: 'Soffit & Fascia Work', body: 'Repairing wood rot and installing vented aluminum soffits for proper attic ventilation.' },
  { title: 'Custom Aluminum Trim Wrap', body: 'Professional aluminum fascia wrap and window capping for a maintenance-free finish.' },
] as const

/** High-urgency exterior failures we lead with — the problems homeowners search at 11pm. */
export const urgentIssues = [
  { title: 'Leaking windows', body: 'Water at the frame or sill after a storm means the seal or flashing has failed — and the framing behind it is next.' },
  { title: 'Failed window seals', body: 'Fogged or sweating glass is a broken insulated seal: lost efficiency now, moisture damage later.' },
  { title: 'Sagging gutters', body: 'A gutter run pulling off pitch dumps water at the foundation instead of away from it.' },
  { title: 'Oxidized aluminum siding', body: 'Chalky, faded aluminum has lost its protective coating — repairable if caught before panels fail.' },
  { title: 'Wood rot at soffit & fascia', body: 'Soft trim boards mean water is already inside the assembly; we cut out the rot and fix the source.' },
  { title: 'Leaking gutter miters', body: 'Corner joints are the first place seamed gutters fail — staining siding and rotting the fascia behind.' },
] as const

/** The brand bench — what we install and why homeowners recognize it. */
export const exteriorBrands = [
  { label: 'James Hardie®', detail: 'Hardie Plank fiber cement — the premium, fire-resistant board with a true wood look and 30–50 year lifespan.' },
  { label: 'CertainTeed®', detail: 'Monogram vinyl and Cedar Impressions shakes — top-rated profiles with deep color and dimensional texture.' },
  { label: 'Norandex™', detail: 'Polar Wall Plus and Woodsman Select — proven insulated and traditional vinyl systems for NJ winters.' },
  { label: 'Andersen®', detail: 'Energy-efficient replacement window systems, professionally flashed and sealed into the wall assembly.' },
  { label: 'Pella®', detail: 'High-performance window units installed with integrated moisture barriers for a lifetime of dry sills.' },
] as const

/* Copy rotations — the three prose variants the series cycles through. */

export function exteriorIntro(t: ExteriorTown): string {
  const base = `Since 2004, Lita Construction has been the trusted name for integrated home exterior renovations in ${t.shortName}. `
  const envelope = `We provide expert siding replacements, energy-efficient window installations, and seamless gutter systems without the typical sales pressure or high-interest financing gimmicks.`
  return `${base}We understand that ${t.hook} require${t.hook.endsWith('s') ? '' : 's'} a contractor who looks at the "whole house envelope." ${envelope}`
}

export function exteriorProfessional(t: ExteriorTown): string {
  const variants = [
    `Updating your home's exterior is a major investment in your home's equity. You shouldn't be pressured into a contract by a commissioned salesman. When you contact us for an estimate in ${t.shortName}, we send a professional to perform a technical evaluation. We identify high-urgency issues like leaking windows, failed window seals, sagging gutters, and aluminum siding oxidation — and give you a straightforward assessment and an honest price for the work that actually needs to be done.`,
    `We don't send "closers" to ${t.shortName}. When you need an estimate, we send a professional who can actually evaluate the health of your home's exterior. If you have leaking windows, failed window seals, or need an aluminum siding repair, we tell you exactly what's needed — a fair, straightforward price on the best materials, with no financing gimmicks and no corporate sales pressure.`,
    `In ${t.shortName}, we know you value your home's equity. When you call us for an estimate, we send a professional who understands the technical details of an exterior renovation. We don't push one specific brand; we discuss the best options for your home — Andersen®, Pella®, CertainTeed Monogram, and James Hardie — and identify the high-urgency issues first: window leaks, failed seals, and aluminum siding oxidation.`,
  ]
  return variants[t.variant]
}

export function exteriorCrew(t: ExteriorTown): string {
  const variants = [
    `Our crew handles the entire project from start to finish. By managing the siding repairs, window replacements, and gutter installations together, we ensure the flashing and weatherproofing are perfect — preventing wood rot and water leaks for decades. We are specialists in the industry's top-rated materials, including James Hardie® Hardie Plank, CertainTeed® Monogram®, and Norandex™ Polar Wall Plus, with professional installation of Andersen® and Pella® window systems.`,
    `Our crew handles the job from start to finish — we don't pass your project off to anyone else. We don't believe in cutting corners on details like window flashing, corner posts, and vented soffit transitions. We stay on the project until it is completed to our high standards, the final cleanup is thorough, and your ${t.shortName} property and landscaping are protected every day we are there.`,
    `Siding a home in ${t.shortName} requires a crew that knows how to handle the details — corner posts, window trim, and vented soffit transitions. Our crew stays on-site until the job is completed to our high standards. We specialize in solving the high-urgency issues: leaking windows, moisture behind siding, and sagging 6-inch seamless gutters — and we keep the job site organized, quiet, and clean.`,
  ]
  return variants[t.variant]
}

export function exteriorQuickAnswer(t: ExteriorTown): string {
  return `Lita Construction provides siding replacement (James Hardie, CertainTeed, Norandex), Andersen® & Pella® window installation, and custom 6-inch seamless gutter systems in ${t.shortName}, NJ (${t.zips.join(', ')}) — a family-run ${t.county} exterior specialist since 2004, with free professional estimates at ${business.phone}.`
}

export const exteriorTowns: ExteriorTown[] = [
  // ── Somerset County — final entries in the series ──
  { slug: 'somerville', name: 'Somerville', shortName: 'Somerville', zips: ['08876'], county: 'Somerset County', variant: 0,
    hook: "Somerville's mix of historic Victorian-style homes and modern residential properties" },
  { slug: 'franklin-somerset', name: 'Franklin / Somerset', shortName: 'Franklin', zips: ['08873'], county: 'Somerset County', variant: 2,
    hook: 'the diverse residential properties in the 08873 area' },
  { slug: 'raritan', name: 'Raritan', shortName: 'Raritan', zips: ['08869'], county: 'Somerset County', variant: 1,
    hook: "Raritan's residential properties, which need to be treated as a complete system" },
  // ── The "Best 40" expansion ──
  { slug: 'millburn-short-hills', name: 'Millburn / Short Hills', shortName: 'Short Hills', zips: ['07078'], county: 'Essex County', variant: 0,
    hook: 'the high-value estates in the 07078 area' },
  { slug: 'livingston', name: 'Livingston', shortName: 'Livingston', zips: ['07039'], county: 'Essex County', variant: 2,
    hook: 'the high-end residential properties in the 07039 area' },
  { slug: 'chatham', name: 'Chatham', shortName: 'Chatham', zips: ['07928'], county: 'Morris County', variant: 0,
    hook: "Chatham's high-value residential properties and historic homes" },
  { slug: 'madison', name: 'Madison', shortName: 'Madison', zips: ['07940'], county: 'Morris County', variant: 1,
    hook: 'the high-value homes in the 07940 area' },
  { slug: 'morristown', name: 'Morristown', shortName: 'Morristown', zips: ['07960'], county: 'Morris County', variant: 0,
    hook: "some of New Jersey's most historic and custom properties, which deserve renovations that preserve character while improving efficiency" },
  { slug: 'summit', name: 'Summit', shortName: 'Summit', zips: ['07901'], county: 'Union County', variant: 1,
    hook: "Summit's high-value residential properties and historic homes" },
  { slug: 'westfield', name: 'Westfield', shortName: 'Westfield', zips: ['07090'], county: 'Union County', variant: 1,
    hook: "Westfield's high standards and beautiful residential streets" },
  { slug: 'wayne', name: 'Wayne', shortName: 'Wayne', zips: ['07470'], county: 'Passaic County', variant: 2,
    hook: "Wayne's diverse housing stock" },
  { slug: 'north-caldwell', name: 'North Caldwell', shortName: 'North Caldwell', zips: ['07006'], county: 'Essex County', variant: 0,
    hook: 'the high-end, custom-built homes in the 07006 area' },
  { slug: 'essex-fells', name: 'Essex Fells', shortName: 'Essex Fells', zips: ['07021'], county: 'Essex County', variant: 1,
    hook: 'the historic estates and secluded properties in the 07021 area, which call for discretion and care' },
  { slug: 'verona', name: 'Verona', shortName: 'Verona', zips: ['07044'], county: 'Essex County', variant: 0,
    hook: "Verona's diverse home styles — from the charming Colonials near Verona Park to newer residential builds" },
  { slug: 'cedar-grove', name: 'Cedar Grove', shortName: 'Cedar Grove', zips: ['07009'], county: 'Essex County', variant: 2,
    hook: 'the high-end residential properties in the 07009 area' },
  { slug: 'west-caldwell', name: 'West Caldwell', shortName: 'West Caldwell', zips: ['07006'], county: 'Essex County', variant: 1,
    hook: 'our North Jersey neighbors, who want honest work and durable results' },
  { slug: 'maplewood', name: 'Maplewood', shortName: 'Maplewood', zips: ['07040'], county: 'Essex County', variant: 0,
    hook: "Maplewood's historic charm and unique architectural character, which require a careful, expert touch to improve efficiency while preserving the original aesthetic" },
  { slug: 'south-orange', name: 'South Orange', shortName: 'South Orange', zips: ['07079'], county: 'Essex County', variant: 1,
    hook: 'the historic estates and unique residential properties that define the 07079 area' },
  { slug: 'mountain-lakes', name: 'Mountain Lakes', shortName: 'Mountain Lakes', zips: ['07046'], county: 'Morris County', variant: 1,
    hook: 'Mountain Lakes’ famous historic "Hapgood" homes and lakeside character, which must be worked on without compromising their architectural integrity' },
  { slug: 'mendham', name: 'Mendham', shortName: 'Mendham', zips: ['07945'], county: 'Morris County', variant: 1,
    hook: 'the historic estates and large-scale homes of Mendham, which require a professional who respects the property and the architecture' },
  { slug: 'chester', name: 'Chester', shortName: 'Chester', zips: ['07930'], county: 'Morris County', variant: 1,
    hook: "Chester's specific needs — from historic properties to large residential estates" },
  { slug: 'florham-park', name: 'Florham Park', shortName: 'Florham Park', zips: ['07932'], county: 'Morris County', variant: 2,
    hook: "Florham Park homeowners' expectation of a professional, no-nonsense service that protects the home's value" },
  { slug: 'montville', name: 'Montville', shortName: 'Montville', zips: ['07045'], county: 'Morris County', variant: 1,
    hook: 'North Jersey homeowners who want honest work and durable results, without the financing games' },
]

export const exteriorTownBySlug: Record<string, ExteriorTown> = Object.fromEntries(
  exteriorTowns.map((t) => [t.slug, t]),
)
