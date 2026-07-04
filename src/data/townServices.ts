import { imagesByCategory } from './gallery'
import { business } from './business'

/**
 * Service × city matrix (local SEO): every town gets a dedicated page per
 * trade at /service-areas/<town>/<service>, rendered by TownServicePage.tsx.
 * Photos are pulled from the real project galleries for that trade, so a
 * siding page shows siding work, a masonry page shows masonry work, etc.
 */

export type TownServiceDef = {
  slug: string
  name: string
  /** Drawing-set sheet family for the section tags */
  sheet: string
  /** Big hero background photo of this trade */
  heroImage: string
  /** Real project photos of this trade for the gallery strip */
  gallery: string[]
  /** Link to the trade's main service page */
  servicePath: string
  headline: (town: string) => string
  intro: (town: string) => string
  features: string[]
  steps: { title: string; body: string }[]
}

const chimneyPhotos = [1, 2, 3, 4, 5, 6].map((n) => `/Chimney/optimized/Chimney (${n}).webp`)

export const townServices: TownServiceDef[] = [
  {
    slug: 'masonry',
    name: 'Masonry',
    sheet: 'M-100',
    heroImage: '/work/mansory-Mansory22.webp',
    gallery: imagesByCategory('Masonry').slice(0, 6).map((g) => g.src),
    servicePath: '/services/masonry-work',
    headline: (town) => `Masonry contractor in ${town}, NJ`,
    intro: (town) =>
      `From custom stone steps and limestone walkways to structural retaining walls and brickwork, Lita Construction brings old-school Brooklyn masonry craftsmanship to ${town} homes. Every step, stoop, and sidewalk is built on deep-poured foundations engineered for New Jersey's freeze-thaw cycles — so your masonry never shifts, cracks, or settles.`,
    features: [
      'Custom stone steps & stoops',
      'Limestone, bluestone, granite & flagstone',
      'Concrete sidewalks & walkways',
      'Structural retaining walls',
      'Brick & stone repointing (tuckpointing)',
      'Cultured Stone veneer & outdoor kitchens',
    ],
    steps: [
      { title: 'On-site consultation', body: 'We measure, assess the grade and drainage, and give you an itemized quote with honest material recommendations.' },
      { title: 'Deep-poured foundations', body: 'Footings below the frost line and compacted bases — the invisible work that keeps masonry level for decades.' },
      { title: 'Hand-laid craftsmanship', body: 'Every course laid by our own crew, tooled clean, and swept spotless before we leave your property.' },
    ],
  },
  {
    slug: 'chimney-repair',
    name: 'Chimney Repair',
    sheet: 'C-100',
    heroImage: '/work/chimney-Chimney1.webp',
    gallery: chimneyPhotos,
    servicePath: '/services/chimney-services',
    headline: (town) => `Chimney repair in ${town}, NJ`,
    intro: (town) =>
      `A leaking chimney is a structural emergency. Lita Construction provides ${town} homeowners with complete chimney restoration — custom lead flashing, reinforced concrete apex crowns, precision repointing, and UL-listed stainless steel liners that protect your home's heating system from hazardous carbon monoxide leaks.`,
    features: [
      'Custom lead & copper flashing',
      'Reinforced concrete apex crowns',
      'UL-listed stainless steel liners',
      'Precision repointing (tuckpointing)',
      'Clay tile flues & caps',
      'Full fireplace restoration',
    ],
    steps: [
      { title: 'Free safety inspection', body: 'Crown, mortar joints, flashing, and flue examined and photographed — you see the actual condition before any work is quoted.' },
      { title: 'Repair or rebuild — honestly', body: 'Repointing and crown repair when the brick is sound; a rebuild only when patching would waste your money.' },
      { title: 'Sealed & code-compliant', body: 'Flashing ground into the mortar joints, cap set, and the whole stack left safe, dry, and to code.' },
    ],
  },
  {
    slug: 'paver-driveways',
    name: 'Paver Driveways & Patios',
    sheet: 'P-100',
    heroImage: '/Pavec/lita-paver-patio-design-04-nj.webp',
    gallery: imagesByCategory('Decks & Pavers').slice(0, 6).map((g) => g.src),
    servicePath: '/services/decks-pavers',
    headline: (town) => `Paver driveways & patios in ${town}, NJ`,
    intro: (town) =>
      `Lita Construction transforms ${town} backyards into luxury outdoor living spaces. We install high-traffic paver driveways and patios using industry-leading brands — Cambridge with ArmorTec, Techo-Bloc, Unilock, and Nicolock — over deep-base grading engineered for heavy vehicles and New Jersey stormwater.`,
    features: [
      'Cambridge (ArmorTec) · Techo-Bloc',
      'Unilock · Nicolock systems',
      'Permeable pavers for NJ stormwater',
      'Deep-base grading for heavy vehicles',
      'Bluestone pool decks',
      'Interlocking stone driveways',
    ],
    steps: [
      { title: 'Design & brand selection', body: 'We bring samples to your driveway and design the layout, borders, and drainage around how you actually use the space.' },
      { title: 'Excavation & deep base', body: 'Proper excavation, compacted stone base, and grading — the difference between pavers that last a lifetime and ones that heave.' },
      { title: 'Precision installation', body: 'Laser-leveled courses, clean cuts, polymeric sand, and a magnet-swept, spotless finish.' },
    ],
  },
  {
    slug: 'stucco',
    name: 'Stucco Systems',
    sheet: 'ST-100',
    heroImage: '/work/mansory-Mansory10.webp',
    gallery: imagesByCategory('Masonry').slice(6, 12).map((g) => g.src),
    servicePath: '/services/masonry-work',
    headline: (town) => `Stucco contractor in ${town}, NJ`,
    intro: (town) =>
      `We specialize in large-scale exterior transformations for ${town} houses and commercial buildings — professional application of traditional hard-coat stucco and EIFS (synthetic stucco) systems with moisture-resistant finishes that stand up to New Jersey weather.`,
    features: [
      'Traditional hard-coat stucco',
      'EIFS (synthetic stucco) systems',
      'Moisture-resistant finishes',
      'Full-house exterior transformations',
      'Commercial building façades',
      'Stucco crack & water-damage repair',
    ],
    steps: [
      { title: 'Exterior assessment', body: 'We inspect the substrate and any existing damage, then recommend hard-coat or EIFS based on your building — not our margin.' },
      { title: 'Moisture-managed layering', body: 'Proper weather barriers, lath, and drainage detailing so water sheds out instead of soaking in.' },
      { title: 'Uniform, lasting finish', body: 'Hand-troweled finish coats in your chosen texture and color, cured right and cleaned up completely.' },
    ],
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    sheet: 'R-100',
    heroImage: '/work/roof-roof30.webp',
    gallery: imagesByCategory('Roofing').slice(0, 6).map((g) => g.src),
    servicePath: '/services/residential-roofing',
    headline: (town) => `Roofing contractor in ${town}, NJ`,
    intro: (town) =>
      `As a GAF-certified contractor, Lita Construction installs, replaces, and repairs roofs for ${town} homeowners — complete GAF shingle systems with ice-and-water shield, synthetic underlayment, and ridge venting, backed by a 25-year warranty on labor and materials.`,
    features: [
      'Full tear-off & GAF system installs',
      'Leak, storm & wind-damage repair',
      'GAF Timberline® HDZ shingles',
      'Chimney flashing & skylights',
      'Insurance-claim documentation',
      '25-year labor & materials warranty',
    ],
    steps: [
      { title: 'Free roof inspection', body: 'We climb up, document every layer and problem area, and give you a straight repair-or-replace answer with an itemized estimate.' },
      { title: 'Certified system install', body: 'Tear-off to the deck, rot repaired, and the full GAF system installed to spec — the only way to earn the 25-year warranty.' },
      { title: 'Magnet sweep & walkthrough', body: 'Yard swept for nails, debris hauled, and the finished roof walked with you before we call it done.' },
    ],
  },
  {
    slug: 'siding',
    name: 'Siding',
    sheet: 'SD-100',
    heroImage: '/work/siding-siding6.webp',
    gallery: imagesByCategory('Siding').slice(0, 6).map((g) => g.src),
    servicePath: '/services/siding-installation',
    headline: (town) => `Siding contractor in ${town}, NJ`,
    intro: (town) =>
      `New siding is one of the highest-return improvements a ${town} homeowner can make. Lita Construction installs vinyl, fiber-cement (James Hardie), and insulated siding over a proper house wrap and moisture barrier — with soffit, fascia, and trim finished so the whole exterior works as one weather-tight system.`,
    features: [
      'Vinyl, Hardie & insulated siding',
      'House wrap & moisture barrier',
      'Soffit, fascia & trim wrapping',
      'Rotted sheathing repaired first',
      'Storm-damage panel matching',
      'On-site color consultation',
    ],
    steps: [
      { title: 'Color & material consult', body: 'Full-size samples held against your actual house in its actual light — vinyl, insulated, or Hardie, matched to your budget.' },
      { title: 'Tear-off & wrap', body: 'Old siding off, sheathing inspected and repaired, then a continuous taped house wrap — the step budget installers rush.' },
      { title: 'Weather-tight finish', body: 'Panels hung to allow expansion, flashing at every opening, and matching trim so water sheds at every seam.' },
    ],
  },
]

export const townServiceBySlug: Record<string, TownServiceDef> = Object.fromEntries(
  townServices.map((s) => [s.slug, s]),
)

/* ────────────────────────────────────────────────────────────────────────────
 * SEO / AEO / GEO content layer — unique, town-interpolated copy per trade:
 * a directly-quotable quick answer, localized editorial paragraphs, and a
 * town-specific FAQ set that also feeds FAQPage schema.
 * ──────────────────────────────────────────────────────────────────────────── */

export type TownServiceSeo = {
  /** One-sentence, directly-answerable definition — surfaced as the AEO "quick answer". */
  quickAnswer: (town: string, county: string) => string
  /** Localized editorial paragraphs for the "local notes" section. */
  localBody: (town: string, county: string) => string[]
  /** Town-specific FAQs — rendered on-page and emitted as FAQPage schema. */
  faqs: (town: string, county: string) => { q: string; a: string }[]
}

export const townServiceSeoBySlug: Record<string, TownServiceSeo> = {
  masonry: {
    quickAnswer: (town, county) =>
      `Lita Construction provides masonry services in ${town}, NJ — custom stone steps, limestone and bluestone walkways, retaining walls, repointing, and concrete work — built on deep-poured, frost-proof foundations by a family-run ${county} contractor trusted since 2004.`,
    localBody: (town, county) => [
      `${town} masonry takes a beating from New Jersey's freeze-thaw winters: water works into mortar joints and beneath walkways, freezes, expands, and pries the work apart a little more every season. That's why every step, wall, and sidewalk we build in ${town} starts below the frost line — deep-poured footings and compacted bases that stay level long after quick-pour jobs have shifted and cracked.`,
      `As a ${county} contractor since 2004, we know the local streets, the local building department, and how older ${town} properties were originally built. We match new stone and mortar to what's already on your home, handle the permit paperwork ourselves, and leave the site swept clean — the old-school way John Lita learned on the stoops and rooftops of Brooklyn in 1991.`,
    ],
    faqs: (town, county) => [
      {
        q: `How much does masonry work cost in ${town}, NJ?`,
        a: `It depends on the scope, materials, and site access: a small step repair costs far less than a full limestone entrance or an engineered retaining wall. Natural stone (bluestone, granite, limestone) runs more than concrete or block, and demolition or drainage correction adds to the job. We give ${town} homeowners a free, itemized on-site estimate — call ${business.phone} — so you see exactly where every dollar goes before work starts.`,
      },
      {
        q: `Do I need a permit for masonry work in ${town}?`,
        a: `Often, yes. Most ${county} municipalities require permits for retaining walls above a certain height (commonly around four feet), structural work, and sidewalk replacement, and many inspect footings before pour. As a licensed NJ contractor (${business.licenseLabel}) we check ${town}'s local rules and manage 100% of the permit applications for you.`,
      },
      {
        q: 'How long do stone steps or a walkway take to build?',
        a: `Most ${town} step and walkway projects are completed in two to five working days: excavation and footings first, then the stonework, then joint finishing and cleanup. Larger retaining walls or full entrance rebuilds run longer — we give you a firm timeline in the written estimate and protect your lawn with plywood paths for the duration.`,
      },
      {
        q: "Can you match my home's existing brick or stone?",
        a: `We do our best to. For repointing we match mortar color and joint profile; for new or rebuilt sections we source brick and stone as close as possible to your existing material. Exact matches on older masonry aren't always possible — where they aren't, we tell you upfront and show you the closest options rather than installing an obvious mismatch.`,
      },
      {
        q: 'Why does masonry crack in New Jersey, and how do you prevent it?',
        a: `Freeze-thaw cycles. Water gets into joints and under slabs, freezes, and expands — dozens of times each winter. We prevent it with footings below the frost line, compacted and drained bases, air-entrained concrete where it matters, and proper joint tooling so water sheds off instead of soaking in.`,
      },
      {
        q: `Which areas near ${town} do you serve?`,
        a: `All of ${county} and the surrounding towns — plus ten counties across Northern & Central New Jersey. If you're near ${town}, we almost certainly cover you: call ${business.phone} for a free estimate.`,
      },
    ],
  },
  'chimney-repair': {
    quickAnswer: (town, county) =>
      `Lita Construction repairs chimneys in ${town}, NJ — custom lead flashing, reinforced concrete crowns, precision repointing, and UL-listed stainless steel liners — restoring safety and stopping leaks for ${county} homeowners since 2004.`,
    localBody: (town, county) => [
      `A chimney is the most weather-exposed structure on a ${town} home — soaked by rain on all four sides, then frozen and thawed through every ${county} winter. Mortar joints recede, crowns crack, and flashing pulls away until water finds the living room ceiling. We stop that cycle at the source: crowns rebuilt with reinforced concrete, flashing hand-bent from lead or copper and ground directly into the mortar joints for a permanent mechanical seal.`,
      `Just as important is what you can't see: the flue. An aging clay liner or an unlined chimney can leak hazardous carbon monoxide back into the house. We install UL-listed stainless steel liners matched to your furnace or fireplace, so the system vents safely and passes inspection — work we've been doing since John Lita's hot-tar days in 1991.`,
    ],
    faqs: (town, county) => [
      {
        q: `My chimney is leaking in ${town} — where is the water actually coming from?`,
        a: `Usually the crown or the flashing, not the brick. A cracked crown lets water pour straight down inside the stack; failed flashing lets it run down the outside and show up as a ceiling stain nearby. We inspect the whole chimney — crown, joints, flashing, flue — photograph what we find, and fix the real source so the leak doesn't come back.`,
      },
      {
        q: 'Do I need a chimney liner?',
        a: `If your flue is unlined, or the clay tiles are cracked or spalling, yes — an unsound flue can leak hazardous carbon monoxide into the home and fails resale inspections. We install UL-listed stainless steel liners sized to your heating appliance, which is the code-compliant fix in nearly every case.`,
      },
      {
        q: `How much does chimney repair cost in ${town}?`,
        a: `Repointing and crown repair are the economical end; a stainless liner is mid-range; and a partial or full rebuild is the larger investment when brick faces are spalling or the stack leans. After a free inspection we give you an itemized ${town} estimate with photos, and we recommend repair over rebuild whenever repair will genuinely hold — call ${business.phone}.`,
      },
      {
        q: 'Repair or rebuild — how do I know which my chimney needs?',
        a: `It comes down to the brick. Sound brick with failed mortar joints calls for repointing plus crown and flashing work. Spalling faces, structural cracks, or a visible lean mean rebuilding from the roofline (or lower) is the honest fix — patching those buys a season or two at most. Our free inspection tells you which you're actually looking at.`,
      },
      {
        q: `Do you handle permits and inspections in ${town}?`,
        a: `Yes. Structural chimney rebuilds typically require a construction permit in ${county} municipalities, and liner installations may need inspection. As a licensed NJ contractor (${business.licenseLabel}) we pull what ${town} requires and schedule the inspections — nothing for you to file.`,
      },
      {
        q: 'How fast can you get to an active chimney leak?',
        a: `Fast — active water intrusion gets priority. In most cases we can inspect quickly and stabilize the leak the same visit, then schedule the permanent crown, flashing, or repointing work as weather allows. Call ${business.phone} and tell us it's active so we flag it urgent.`,
      },
    ],
  },
  'paver-driveways': {
    quickAnswer: (town, county) =>
      `Lita Construction installs paver driveways and patios in ${town}, NJ using Cambridge (ArmorTec), Techo-Bloc, Unilock, and Nicolock systems over deep-base grading — engineered for heavy vehicles and ${county} stormwater, and built to last a lifetime.`,
    localBody: (town, county) => [
      `A paver driveway in ${town} is only as good as what's underneath it. We excavate to the right depth, compact a deep stone base in lifts, and grade for drainage before a single paver is set — the invisible work that decides whether a driveway stays flat for decades or heaves in its third ${county} winter. For flood-conscious properties we install permeable paver systems that let stormwater soak through instead of sheeting into the garage.`,
      `On top of that base go the industry's best systems — Cambridge with ArmorTec, Techo-Bloc, Unilock, Nicolock — laser-leveled, edge-restrained, and finished with polymeric sand. From interlocking stone driveways to bluestone pool decks and outdoor kitchens, we build ${town} outdoor spaces the same way we build masonry: to outlast the mortgage.`,
    ],
    faqs: (town, county) => [
      {
        q: `How much does a paver driveway cost in ${town}, NJ?`,
        a: `The main drivers are square footage, the paver line you choose (Cambridge, Techo-Bloc, Unilock, and Nicolock all offer good-better-best tiers), how much excavation and base work the site needs, and borders or inlays. We measure on-site in ${town} and give you a free itemized estimate — call ${business.phone} — so you can compare options line by line.`,
      },
      {
        q: 'How long does a paver patio or driveway last?',
        a: `A properly installed paver surface with a solid compacted base lasts 25+ years. And unlike poured concrete, individual pavers can be lifted and reset if a utility ever needs access — the surface goes back together invisibly.`,
      },
      {
        q: 'What are permeable pavers, and do I need them?',
        a: `Permeable systems let rain drain through the joints into a stone reservoir below instead of running off. They're smart for ${town} properties with drainage issues, and some ${county} townships credit them toward impervious-coverage limits — which can be the difference in getting a larger patio or driveway approved. We'll tell you honestly whether your site benefits.`,
      },
      {
        q: 'Which paver brands do you install?',
        a: `Cambridge (with ArmorTec surface protection), Techo-Bloc, Unilock, and Nicolock — the four leading systems in New Jersey. We bring samples to your ${town} home so you can see colors and textures against your actual house before anything is ordered.`,
      },
      {
        q: 'How long does installation take?',
        a: `Most patios run three to five working days; driveways typically five to eight depending on size and excavation. Weather can shift the schedule, but we stage the job so your home stays accessible, and we sweep the site clean every day.`,
      },
      {
        q: `Do paver driveways need a permit in ${town}?`,
        a: `Sometimes — many ${county} towns regulate driveway width, curb cuts, and impervious coverage, and replacing or widening a driveway can trigger a zoning review. We check ${town}'s rules and handle any required paperwork as part of the job.`,
      },
    ],
  },
  stucco: {
    quickAnswer: (town, county) =>
      `Lita Construction applies traditional hard-coat stucco and EIFS (synthetic stucco) systems in ${town}, NJ — moisture-managed, full-house exterior transformations for ${county} homes and commercial buildings, family-run since 2004.`,
    localBody: (town, county) => [
      `Stucco done right transforms a ${town} exterior; stucco done wrong traps water inside the walls. The difference is moisture management — weather barriers, lath, flashing, and drainage detailing installed in the correct order so wind-driven ${county} rain sheds out instead of soaking in. That layering discipline is where we spend our care, because it's what you can't see that decides how the finish performs.`,
      `We apply both systems: traditional three-coat hard-coat stucco for maximum impact resistance and a timeless masonry feel, and EIFS (synthetic stucco) where added insulation value and design flexibility matter. Finishes are hand-troweled in your chosen texture and color, cured properly, and backed by the same family accountability we put on every ${town} job since 2004.`,
    ],
    faqs: (town, county) => [
      {
        q: 'Hard-coat stucco or EIFS — which is right for my home?',
        a: `Hard-coat (traditional three-coat) stucco is denser, more impact-resistant, and reads like true masonry — great for ${town} homes that take real weather and activity. EIFS adds a layer of continuous insulation and allows crisper decorative detailing, at a lighter weight. We assess your walls and recommend based on the building, not the margin.`,
      },
      {
        q: 'Can you repair cracked or water-damaged stucco?',
        a: `Yes — and we fix the cause, not just the crack. Hairline cracking is often cosmetic, but staining, bulging, or soft spots mean water is getting behind the system. We open it up, correct the flashing or barrier failure that let water in, repair any damaged substrate, and blend the new finish to the existing texture.`,
      },
      {
        q: `How much does stucco cost in ${town}, NJ?`,
        a: `Square footage, system choice (hard-coat vs. EIFS), the condition of the existing walls, and trim detailing drive the price. Full-house transformations are quoted per project after we walk the ${town} property — the estimate is free and itemized, so call ${business.phone} to schedule.`,
      },
      {
        q: 'How long does a full-house stucco job take?',
        a: `Typically one to three weeks depending on the size of the house, repairs needed underneath, and curing weather — stucco needs above-freezing temperatures to cure to strength. We give ${town} homeowners a firm schedule up front and keep the site contained and clean throughout.`,
      },
      {
        q: 'Does stucco need maintenance?',
        a: `Very little when installed right: an occasional gentle wash, resealing at penetrations as caulk ages, and prompt attention to any crack that opens beyond hairline. We walk you through the specifics for your finish at the final walkthrough.`,
      },
      {
        q: `Do you also do commercial stucco work near ${town}?`,
        a: `Yes — we handle large-scale exterior transformations for commercial buildings across ${county}, the same hard-coat and EIFS systems at commercial scale, with scheduling planned around your business operations.`,
      },
    ],
  },
  roofing: {
    quickAnswer: (town, county) =>
      `Lita Construction is a GAF-certified roofing contractor serving ${town}, NJ — full tear-off replacements, leak and storm repair, and complete GAF shingle systems backed by a 25-year labor-and-materials warranty for ${county} homeowners.`,
    localBody: (town, county) => [
      `${county} roofs live a hard life: nor'easters, wind-driven rain, summer heat that bakes shingles, and freeze-thaw winters that pry at every seam. Many ${town} homes are now hitting the 20-to-25-year window where original builder-grade roofs begin to fail — curling shingles, granules in the gutters, and the first ceiling stains. That's exactly the roof we replace every week.`,
      `As a GAF-certified contractor, we install the complete system — ice-and-water shield at eaves and valleys, synthetic underlayment, starter strip, GAF Timberline® HDZ architectural shingles, ridge cap, and corrected attic ventilation. Installing every component together is what qualifies your ${town} roof for the 25-year warranty covering both labor and materials, and it's the only way we install.`,
    ],
    faqs: (town, county) => [
      {
        q: `How much does a new roof cost in ${town}, NJ?`,
        a: `Most New Jersey homeowners invest between $8,000 and $25,000 depending on roof size, pitch, layers to tear off, decking condition, and shingle choice. We inspect your ${town} roof free, document everything, and give you an itemized estimate with a straight repair-or-replace recommendation — call ${business.phone}.`,
      },
      {
        q: 'Should I repair my roof or replace it?',
        a: `Under about 20 years old with isolated damage — repair. Near end-of-life, leaking in multiple spots, or shedding granules — replacement usually saves money over time. We tell you honestly which side your roof is on, and we're glad to repair when repair genuinely holds.`,
      },
      {
        q: 'How long does a roof replacement take?',
        a: `Most ${town} homes are torn off and re-roofed in one to three days, weather permitting. We seal the roof every day so your home is never left exposed, magnet-sweep the yard for nails, and walk the finished roof with you before we call it done.`,
      },
      {
        q: 'What does the 25-year warranty cover?',
        a: `Both labor and materials for 25 years, when the complete GAF system is installed by a certified contractor like us. If a covered issue surfaces, it's corrected at no cost — not just a replacement part with a labor bill attached. We register the warranty for you after the final walkthrough.`,
      },
      {
        q: `Can you help with a storm-damage insurance claim in ${town}?`,
        a: `Yes. We photograph and document the wind or hail damage, provide the detailed estimate your insurer needs, and coordinate directly with the adjuster — meeting them on-site at your ${town} home when it helps move the claim.`,
      },
      {
        q: `Do I need a permit to replace my roof in ${town}?`,
        a: `Almost always — most ${county} municipalities require a construction permit for full replacement, often with a mid-job deck inspection. As a licensed NJ contractor (${business.licenseLabel}) we pull the permit and schedule every required inspection for you.`,
      },
    ],
  },
  siding: {
    quickAnswer: (town, county) =>
      `Lita Construction installs vinyl, fiber-cement (James Hardie), and insulated siding in ${town}, NJ — over a proper house wrap and moisture barrier, with soffit, fascia, and trim finished as one weather-tight system for ${county} homes.`,
    localBody: (town, county) => [
      `Siding in ${town} has one real job: keeping ${county}'s wind-driven rain and freeze-thaw moisture out of your walls. That's decided by what goes on before the panels — a continuous house wrap, taped and lapped correctly, over sheathing we've actually inspected. We strip the old siding first specifically to find hidden rot, and we fix it before it gets sealed behind brand-new panels.`,
      `Then comes the visible transformation: vinyl for the best all-around value, foam-backed insulated vinyl that cuts drafts and energy bills, or James Hardie fiber-cement for a true wood look with a 30–50 year lifespan. We hold full-size samples against your ${town} home in its actual light, and we finish the soffit, fascia, and trim so the whole exterior works — and reads — as one.`,
    ],
    faqs: (town, county) => [
      {
        q: `How much does new siding cost in ${town}, NJ?`,
        a: `The drivers are the square footage of your walls, material tier (vinyl, insulated vinyl, or fiber-cement), how much rot repair we find under the old siding, and trim scope. We measure the full exterior of your ${town} home and give you a free itemized estimate — call ${business.phone} — before anything is ordered.`,
      },
      {
        q: 'Vinyl, insulated vinyl, or James Hardie — which should I choose?',
        a: `Vinyl is the best value for most ${county} homes: durable, maintenance-free, never needs painting. Insulated vinyl adds continuous R-value and quiets the house — worth it on older, draftier homes. James Hardie fiber-cement is the premium pick for a true wood-grain look and the longest lifespan. We recommend based on your home and budget, not our margin.`,
      },
      {
        q: 'Will new siding lower my energy bills?',
        a: `Usually, yes — especially insulated siding. A properly wrapped exterior alone cuts drafts, and foam-backed panels add a continuous layer of insulation across the whole wall. Most ${town} homeowners with older walls notice more even room temperatures and lower heating and cooling costs.`,
      },
      {
        q: 'What if there is rotted wood under my old siding?',
        a: `We fix it — never cover it. Removing the old siding first is exactly how we find soft sheathing and water damage. We show you what we found, repair or replace it, correct whatever let the water in, and only then install the wrap and new siding.`,
      },
      {
        q: `How long does a siding job take in ${town}?`,
        a: `Most homes take three to seven working days: tear-off and sheathing inspection, house wrap, then panels, flashing, and trim. Larger homes or significant rot repair run longer — you'll have a firm timeline in writing before we start.`,
      },
      {
        q: 'Do you handle color selection and HOA approval?',
        a: `Yes. We bring full-size samples to your ${town} home — colors read differently on a wall in sunlight than on a chip — and we supply the manufacturer spec sheets and samples that HOAs and ${county} building departments typically ask for.`,
      },
    ],
  },
}
