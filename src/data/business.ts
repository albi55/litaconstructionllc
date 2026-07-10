/**
 * Single source of truth for all business data.
 * Update real details here and they propagate across the whole site + SEO schema.
 */

export const business = {
  name: 'Lita Construction LLC',
  shortName: 'Lita Construction',
  tagline: 'Build Your Vision With Confidence',
  founded: 2004,
  yearsExperience: '35+',
  founder: 'John Lita',
  phone: '(201) 540-7772',
  phoneHref: 'tel:+12015407772',
  email: 'info@litaconstructionllc.com', // placeholder — update with real email
  emailHref: 'mailto:info@litaconstructionllc.com',
  license: '13VH11703800',
  licenseLabel: 'NJ Lic. #13VH11703800',
  url: 'https://litaconstructionllc.com',
  hours: 'Mon–Sat, 7:00 AM – 6:00 PM',
  certifications: ['GAF Certified', 'Fully Insured', '25-Year Workmanship Warranty'],
  /**
   * Google Business Profile — single source of truth for all review links.
   * NOTE: the search.google.com/local/reviews & /writereview endpoints return
   * HTTP 400 for this listing, so every link routes through the reliable
   * google.com/maps?cid=… domain (verified 200), which opens the listing where
   * the Reviews tab and the "Write a review" button live.
   */
  google: {
    /** Google Business Profile CID used in the review/listing URLs. */
    cid: '6028760307221828677',
    /** Public listing on Google Maps. */
    maps: 'https://www.google.com/maps?cid=6028760307221828677',
    /** Read all Google reviews — opens the listing with the reviews panel. */
    reviews: 'https://www.google.com/maps?cid=6028760307221828677&reviews=1',
    /** Opens the listing where customers tap "Write a review". */
    writeReview: 'https://www.google.com/maps?cid=6028760307221828677&reviews=1',
  },
  /** GAF Master Elite® contractor profile — single source of truth for the badge. */
  gaf: {
    /** GAF Master Elite contractor ID. */
    id: '1106756',
    /** Public GAF contractor listing this badge links to. */
    profileUrl:
      'https://www.gaf.com/en-us/roofing-contractors/commercial/lita-brothers-construction-llc-bergenfield-nj-1106756',
    /** The Master Elite badge image in /public. */
    badgeImage: '/gaf-master-elite-badge.webp',
  },
} as const

/** Scrolling promo / announcement bar messages (edit freely). */
export const promoMessages = [
  '🔥 LIMITED-TIME OFFER — Free roof inspection with every estimate this season',
  '⭐ Family-owned & trusted in New Jersey since 2004',
  '✅ GAF Certified · Fully Insured · NJ Lic. #13VH11703800',
  '💲 Flexible financing available — ask about easy monthly payments',
  '🛡️ 25-Year Warranty on labor & materials — the strongest protection in the industry',
  '📞 Call (201) 540-7772 for a FREE, no-obligation estimate today',
  '🏆 Serving Bergen, Passaic, Essex, Morris, Monmouth, Somerset & 4 more NJ counties',
] as const

export const serviceAreas = [
  'Bergen County',
  'Passaic County',
  'Essex County',
  'Hudson County',
  'Morris County',
  'Union County',
  'Middlesex County',
  'Sussex County',
  'Monmouth County',
  'Somerset County',
] as const

// Representative cities for local-SEO copy and the service-area section.
export const serviceCities = [
  'Bergenfield',
  'Paramus',
  'Hackensack',
  'Englewood',
  'Fort Lee',
  'Clifton',
  'Paterson',
  'Montclair',
  'Newark',
  'Jersey City',
  'Wayne',
  'Teaneck',
] as const

export type SubService = {
  name: string
  description: string
}

/** One step in the "how it works" process timeline shown on a service page. */
export type ProcessStep = {
  title: string
  description: string
}

/** One row in the materials/options comparison table shown on a service page. */
export type MaterialOption = {
  name: string
  bestFor: string
  lifespan: string
  notes: string
}

export type Service = {
  slug: string
  name: string
  short: string
  blurb: string
  /** Longer intro paragraph for the service page hero/body */
  intro: string
  /** One-sentence, directly-answerable definition — surfaced as an AEO/GEO "quick answer" and used for schema descriptions. */
  quickAnswer: string
  features: string[]
  subServices: SubService[]
  /** Step-by-step process, shown as a timeline on the service page. */
  process: ProcessStep[]
  /** Materials/options comparison table. */
  materials: MaterialOption[]
  /** Service-specific FAQs (also feed FAQPage schema on the page) */
  faqs: { q: string; a: string }[]
  keywords: string[]
}

export const services: Service[] = [
  {
    slug: "roof-repair",
    name: "Roof Repair",
    short: "Leak, storm & shingle repair — done fast",
    blurb:
      "Fast, lasting roof repairs for leaks, storm and hail damage, missing shingles, and failed flashing. We find the real source of the problem, fix it right, and give you an honest repair-or-replace answer — before a small issue becomes a big one.",
    intro:
      "A small roof problem never stays small in New Jersey — a lifted shingle or a cracked flashing joint lets water in, and freeze-thaw cycles pry the gap wider every winter until it reaches your deck, insulation, and ceilings. Lita Construction repairs leaks, storm and hail damage, missing or damaged shingles, and worn flashing across Northern & Central New Jersey, using forensic leak diagnostics to find where water actually enters — not just where it drips inside. As a GAF-certified, fully insured contractor, we fix the real cause with materials matched to your roof, document everything for insurance when a storm is involved, and tell you honestly whether a repair or a replacement is the smarter money.",
    quickAnswer:
      "Lita Construction is a GAF-certified roofing contractor that repairs roof leaks, storm and hail damage, missing shingles, and failed flashing across Northern & Central New Jersey — with forensic leak diagnostics, insurance-claim documentation, and an honest repair-or-replace recommendation.",
    features: [
      "Roof leak detection & repair",
      "Storm & hail damage repair",
      "Missing & damaged shingle replacement",
      "Flashing & chimney-seal repair",
      "Insurance claim documentation",
      "Honest repair-vs-replace assessment",
    ],
    subServices: [
      { name: "Leak Diagnostics & Repair", description: "Forensic tracing to find where water truly enters — often feet from the interior stain — then a targeted, lasting fix at the source, not a guess-and-caulk patch." },
      { name: "Storm & Hail Damage Repair", description: "Fast repair of wind-lifted, torn, and hail-bruised shingles after NJ storms, with full photo documentation to support your insurance claim." },
      { name: "Shingle & Flashing Repair", description: "Replacement of missing, cracked, or curling shingles and resealing of failed flashing at chimneys, valleys, vents, and skylights — the spots most leaks start." },
      { name: "Emergency Leak Tarping", description: "Rapid temporary tarping and dry-in to stop active water intrusion and protect your interior until a permanent repair can be scheduled." },
    ],
    process: [
      { title: "Free inspection & leak diagnosis", description: "We get on the roof and into the attic, trace the leak to its actual entry point, and check flashing, valleys, vents, and shingle condition — so the repair fixes the cause, not just the symptom." },
      { title: "Honest repair-or-replace recommendation", description: "You get a straight answer and an itemized estimate. If a repair will genuinely hold, we repair it. If the roof is near end-of-life and a repair is throwing good money after bad, we tell you that too." },
      { title: "Insurance documentation (if storm-related)", description: "For storm or hail damage we photograph everything, write a detailed estimate your insurer can use, and work directly with your adjuster to move the claim along." },
      { title: "Targeted repair with matched materials", description: "We replace damaged shingles, rebuild failed flashing, and reseal penetrations using materials matched to your existing roof and installed to GAF standards so the repair blends in and lasts." },
      { title: "Water test & cleanup", description: "We confirm the fix holds — hose-testing the area when needed — magnet-sweep for nails, haul away debris, and walk the repair with you before we call it done." },
    ],
    materials: [
      { name: "Shingle Repair / Replacement", bestFor: "Isolated missing, cracked, or curling shingles on an otherwise sound roof", lifespan: "Matches remaining roof life", notes: "We match your existing GAF or asphalt shingle profile and color as closely as the run allows for a clean blend." },
      { name: "Flashing Repair & Reseal", bestFor: "Leaks at chimneys, valleys, skylights, and pipe vents — the #1 leak source", lifespan: "15–25 years", notes: "Step and counter-flashing rebuilt and sealed properly; most leaks are a flashing failure, not a bad shingle." },
      { name: "Emergency Tarp / Dry-In", bestFor: "Active leaks after a storm, before a permanent repair", lifespan: "Temporary (weeks)", notes: "Stops interior damage fast; the cost is credited toward the permanent repair or replacement." },
      { name: "Full Replacement (when repair won't last)", bestFor: "Roofs past ~20 years, with widespread damage or repeat leaks", lifespan: "25–30 years", notes: "When repairs stop being cost-effective, a GAF replacement qualifies for our 25-year labor-and-materials warranty." },
    ],
    faqs: [
      { q: "How fast can you fix an active roof leak?", a: "When water is actively coming in, we prioritize it — in most cases we can get out to inspect and stop the intrusion quickly, tarping and drying-in the area the same visit if a full repair can't be completed on the spot. From there we schedule the permanent repair as soon as materials and weather allow. Call (201) 540-7772 and tell us it's an active leak so we flag it as urgent." },
      { q: "How do you find where a roof leak is actually coming from?", a: "The spot where water drips inside is rarely directly below where it enters — water travels along rafters and decking before it drops. We inspect from both the roof and the attic, follow the water trail back to its source, and check the usual culprits: failed flashing at chimneys, valleys, skylights and vents, cracked or missing shingles, and worn sealant. Finding the true entry point is why our repairs actually hold instead of moving the leak a few feet over." },
      { q: "Should I repair my roof or just replace it?", a: "It comes down to age, extent, and honesty. If your roof is under about 20 years old and the damage is localized — a few missing shingles, one bad flashing joint — a repair is the smart, cost-effective fix. If it's near end-of-life, leaking in multiple spots, or you're repairing it every season, replacement usually saves money over time. We give you the real answer, and we'll recommend a repair whenever a repair genuinely makes sense." },
      { q: "Can you help with a storm-damage insurance claim?", a: "Yes. We document the damage thoroughly with photos, provide a detailed, itemized estimate your insurer can use, and work directly with your adjuster so the claim moves faster. Storm and hail damage is often covered, but insurers need clear evidence — that documentation is exactly what we provide, and we can meet the adjuster on-site when it helps." },
      { q: "Is a roof repair covered by a warranty?", a: "Repairs are backed by our workmanship — if a repair we made fails, we stand behind it. Note that the 25-year GAF labor-and-materials warranty applies to a full GAF roof system installed by a certified contractor, not to isolated repairs, since a repair ties into your existing roof. We'll always tell you which situation you're in before any work starts." },
      { q: "What are the most common causes of roof leaks in New Jersey homes?", a: "By far the most common is failed flashing — the metal that seals around chimneys, skylights, valleys, and vents — not the shingles themselves. After that comes storm-lifted or missing shingles, cracked sealant at penetrations, and ice-dam damage from our freeze-thaw winters, where snowmelt refreezes at the eave and forces water back up under the shingles. We check all of these during the inspection." },
      { q: "Will a repair match the rest of my roof, or will I see a patch?", a: "We match your existing shingle profile and color as closely as the available stock allows, so a repair blends in rather than standing out as an obvious patch. On older roofs where the original shingles have faded or been discontinued, an exact match isn't always possible — if that's the case we'll tell you upfront and discuss the options rather than surprising you with a mismatch." },
    ],
    keywords: ["roof repair NJ", "roof leak repair New Jersey", "storm damage roof repair Bergen County"],
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    short: "Full tear-off & new GAF roof installs",
    blurb:
      "Complete tear-off and new roof installation with GAF architectural shingles, installed as a certified system — deck inspection, underlayment, and ridge cap included — and backed by a 25-year warranty on both labor and materials.",
    intro:
      "When a roof reaches the end of its life, patching it only buys time. A full roof replacement starts with a complete tear-off down to the deck, so nothing is hidden under a fresh layer — and as a GAF-certified contractor, Lita Construction installs every component, from ice-and-water shield to synthetic underlayment to ridge cap, as one matched system. That certified installation is what unlocks the 25-year warranty covering both labor and materials, the strongest protection on a New Jersey roof. Family-owned since 2004, we give homeowners across Northern & Central NJ an honest answer on whether it is truly time to replace — and a roof built to outlast the next quarter-century of freeze-thaw winters and summer storms.",
    quickAnswer:
      "A roof replacement is a full tear-off of your old roof down to the deck, followed by a new GAF architectural shingle system — deck inspection, underlayment, and ridge cap included — installed by GAF-certified Lita Construction across Northern & Central New Jersey and backed by a 25-year labor-and-materials warranty.",
    features: [
      "Full tear-off down to the deck",
      "GAF architectural shingle system",
      "Deck inspection & rot repair",
      "Synthetic underlayment & ice-and-water shield",
      "Ridge cap & attic ventilation",
      "25-year labor-and-materials warranty",
    ],
    subServices: [
      { name: "Complete Tear-Off & Replacement", description: "Every layer of the old roof is stripped to the wood deck, so damage is found and fixed instead of buried under new shingles." },
      { name: "GAF Certified Shingle System", description: "Ice-and-water shield, synthetic underlayment, starter strip, architectural shingles, and ridge cap installed as one matched, warrantied system." },
      { name: "Deck Repair & Ventilation", description: "Rotted or soft roof decking is replaced and attic intake-and-exhaust ventilation is corrected so the new roof breathes and lasts." },
      { name: "Insurance & Storm Replacements", description: "Full documentation and adjuster coordination for storm- or hail-damaged roofs being replaced through a homeowners insurance claim." },
    ],
    process: [
      { title: "Free inspection & honest recommendation", description: "We climb up, document every layer and problem area, and tell you straight whether a repair will hold or replacement is genuinely the smarter investment — with an itemized estimate either way." },
      { title: "Shingle selection & scheduling", description: "Pick your GAF architectural shingle color and profile from samples on the spot, confirm square footage and price, and lock a start date, weather permitting." },
      { title: "Complete tear-off & deck inspection", description: "All old roofing is torn off to the wood deck and the deck is inspected board by board — any rot, soft spots, or storm damage is repaired before a single new component goes down." },
      { title: "Install the GAF certified system", description: "Ice-and-water shield at eaves and valleys, synthetic underlayment, starter strip, architectural shingles, and ridge cap go on as one certified system with corrected ventilation — the only way to qualify for the 25-year warranty." },
      { title: "Magnet sweep, cleanup & walkthrough", description: "We magnet-sweep the entire yard for nails, haul away every scrap of debris, and walk the finished roof with you before the job is called done — and register your warranty." },
    ],
    materials: [
      { name: "GAF Architectural Shingles", bestFor: "Most NJ replacements — best balance of cost, curb appeal & warranty eligibility", lifespan: "25–30 years", notes: "Our standard replacement shingle and the one required for the 25-year labor-and-materials warranty." },
      { name: "GAF Designer / Premium Shingles", bestFor: "Homeowners wanting a slate or wood-shake look", lifespan: "30+ years", notes: "Heavier, dimensional profiles for high-end curb appeal, at a higher cost than standard architectural." },
      { name: "Synthetic Underlayment", bestFor: "Every replacement — the layer beneath the shingles", lifespan: "Matches roof life", notes: "Lighter, tougher, and more water-resistant than old felt paper; part of the certified system on every job." },
      { name: "3-Tab Asphalt Shingles", bestFor: "Tight-budget replacements & rental properties", lifespan: "15–20 years", notes: "Lower upfront cost and a flatter look, but a shorter lifespan and no 25-year warranty." },
    ],
    faqs: [
      { q: "How do I know if I need a full roof replacement or just a repair?", a: "If your roof is over 20 years old, has widespread curling, cracked, or missing shingles, granules filling the gutters, multiple or recurring leaks, or any sagging, replacement is usually the smarter long-term call. A repair makes sense when the roof is younger and the damage is isolated to one area. We inspect for free and give you an honest recommendation — repair when that genuinely fixes it, replacement when patching would just keep costing you." },
      { q: "What does a full tear-off involve, and why not just roof over the old shingles?", a: "A tear-off strips every existing layer down to the wood deck so we can inspect and repair what is underneath before the new roof goes on. Roofing over old shingles hides rot and leaks, adds weight, voids the manufacturer warranty, and never lasts as long. A full tear-off is the only way to install a GAF certified system — and the only way to qualify for the 25-year warranty." },
      { q: "What is included in the GAF certified system?", a: "The full system is ice-and-water shield at the eaves and valleys, synthetic underlayment across the deck, starter strip along the edges, GAF architectural shingles, ridge-cap shingles, and corrected attic ventilation. Installing all of these GAF components together, by a certified contractor, is what makes your roof eligible for the 25-year labor-and-materials coverage — a partial or mixed install does not qualify." },
      { q: "What does the 25-year warranty actually cover?", a: "It covers both labor and materials for 25 years when a full GAF shingle system is installed by a certified contractor like Lita Construction. That means if a covered defect or installation issue ever surfaces, it is corrected at no cost to you — not just a replacement part with a separate bill for the labor to install it. We register the warranty for you after the final walkthrough." },
      { q: "What happens if you find rotted decking during the tear-off?", a: "We show it to you and replace it. Rot and soft decking are common on older NJ roofs where water has been getting past worn shingles, and they cannot be found until the old roof is off. We price deck replacement transparently — typically per sheet of plywood — so there are no surprise numbers, and no bad wood is ever left under your new roof." },
      { q: "How long does a roof replacement take?", a: "Most residential replacements are completed in one to three days, depending on the size and pitch of the roof, how much decking needs repair, and the weather. We give you a firm timeline up front, protect your landscaping and siding during the tear-off, and keep the site clean throughout — most homeowners are back to normal by the end of the same week." },
      { q: "Do I need a permit to replace my roof in New Jersey, and will you handle it?", a: "Most NJ municipalities require a construction permit for a full roof replacement, and many require a mid-job inspection once the deck is exposed. As a licensed NJ Home Improvement Contractor (#13VH11703800), we pull the permit and schedule every required township inspection for you, so there is nothing for you to file and the job is fully code-compliant when you sell." },
    ],
    keywords: ["roof replacement NJ", "GAF roof installation New Jersey", "full roof tear-off Bergen County"],
  },
  {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    short: "Flat & low-slope roofing for NJ businesses",
    blurb:
      "Flat and low-slope commercial roofing for New Jersey businesses — TPO, EPDM, and modified bitumen systems installed, repaired, and maintained to keep your building dry and your operations running, with the work scheduled around your hours.",
    intro:
      "A commercial roof is a business asset, and every leak puts inventory, equipment, and operations at risk. Lita Construction installs, repairs, and maintains flat and low-slope roofing systems — TPO, EPDM, and modified bitumen — for warehouses, storefronts, offices, and multi-unit buildings across Northern & Central New Jersey. We inspect honestly, quote in plain terms, and schedule the work around your business so the roof gets fixed without shutting you down.",
    quickAnswer:
      "Lita Construction is a licensed, fully insured commercial roofing contractor installing and repairing flat and low-slope TPO, EPDM, and modified bitumen roof systems for New Jersey businesses, with maintenance plans and manufacturer-backed warranties.",
    features: [
      "Flat & low-slope re-roofs",
      "TPO, EPDM & modified bitumen",
      "Commercial leak detection & repair",
      "Roof inspections & condition reports",
      "Preventive maintenance plans",
      "Manufacturer & workmanship warranties",
    ],
    subServices: [
      { name: "Flat Roof Replacement", description: "Full tear-off and re-roof of flat and low-slope commercial buildings in TPO, EPDM, or modified bitumen, sized to your roof's drainage and traffic." },
      { name: "Leak Detection & Repair", description: "We trace the actual source of a commercial leak — seams, flashing, penetrations, or ponding — and fix it, rather than patching where the water shows up inside." },
      { name: "Roof Inspections & Reports", description: "Documented condition assessments with photos for budgeting, lease requirements, property sales, or insurance and storm claims." },
      { name: "Maintenance Plans", description: "Scheduled inspections and minor repairs that catch small failures early, extend roof life, and keep manufacturer warranties valid." },
    ],
    process: [
      { title: "On-site inspection & assessment", description: "We walk the roof, document seams, flashing, drains, and ponding areas with photos, and give you a straight read on whether a repair, section, or full re-roof is the smart call." },
      { title: "System recommendation & written proposal", description: "You get an itemized proposal comparing the right membrane options for your building — TPO, EPDM, or modified bitumen — with the pros, costs, and warranty of each spelled out, not buried." },
      { title: "Scheduling around your operations", description: "We plan phasing, staging, and work hours around your business — early mornings, weekends, or section-by-section — so daily operations and access stay open while we work." },
      { title: "Tear-off or recover & installation", description: "Depending on the existing roof, we tear off or install a recover system, correct the deck and drainage, then install the membrane, flashing, and edge detailing to manufacturer spec so it qualifies for the warranty." },
      { title: "Final inspection, cleanup & warranty", description: "We flood- or water-test critical areas, confirm every drain and penetration is sealed, clear the site, and hand over your documentation and warranty paperwork." },
    ],
    materials: [
      { name: "TPO (Thermoplastic)", bestFor: "Most flat commercial roofs — best balance of cost, energy savings & durability", lifespan: "20–30 years", notes: "Heat-welded seams and a reflective white surface that cuts cooling costs in summer; our most-specified commercial system." },
      { name: "EPDM (Rubber Membrane)", bestFor: "Large flat roofs where durability and simple repair matter most", lifespan: "25–30 years", notes: "A proven single-ply rubber membrane that handles NJ freeze-thaw well and is straightforward to repair and extend." },
      { name: "Modified Bitumen", bestFor: "Roofs with heavy foot traffic or complex penetrations", lifespan: "15–25 years", notes: "Multi-ply asphalt-based system with strong puncture resistance; a durable choice for rooftop equipment and access." },
      { name: "Roof Coatings / Restoration", bestFor: "Aging roofs still structurally sound — deferring a full re-roof", lifespan: "10–15 years (recoatable)", notes: "A reflective coating that seals minor issues and extends service life at a fraction of replacement cost when the deck is sound." },
    ],
    faqs: [
      { q: "Which flat roofing system is best for my building — TPO, EPDM, or modified bitumen?", a: "It depends on your roof size, budget, rooftop traffic, and how much you value energy savings. TPO's reflective white surface lowers summer cooling costs and suits most flat commercial roofs; EPDM is extremely durable and easy to repair on large roofs; modified bitumen resists punctures well where there's heavy foot traffic or lots of equipment. During your inspection we recommend the right fit for your building and how you use it — not just the one we'd rather sell." },
      { q: "Can you work without shutting down my business?", a: "Yes — that's the whole point of how we schedule. We phase the work section by section, stage materials to keep entrances and loading areas clear, and can run early mornings, evenings, or weekends when needed. We'll map out the plan with you before we start so you know exactly which areas are affected and when." },
      { q: "Do I need a full replacement or can the roof be repaired?", a: "Isolated leaks at a seam, flashing, or penetration are usually repairable, and a sound roof that's simply aging may be a candidate for restoration coating. Widespread seam failure, saturated insulation, persistent ponding, or a membrane at end of life generally means a re-roof is the better long-term investment. We inspect it, show you the photos, and give you an honest recommendation either way." },
      { q: "Can you help with a storm or insurance claim on our commercial roof?", a: "Yes. We document the damage with dated photos and a written condition report, provide a detailed estimate your insurer can work from, and meet with adjusters on-site when needed so the claim moves faster and reflects the real scope of the damage." },
      { q: "What warranty comes with a commercial re-roof?", a: "You get two layers of protection: a manufacturer's material warranty on the membrane system (term depends on the product and installation spec) plus our workmanship warranty on the installation. We install to manufacturer specification precisely so those warranties stay valid — and we hand you the paperwork at closeout." },
      { q: "What does a commercial roof maintenance plan include?", a: "Scheduled inspections (typically twice a year and after major storms), clearing of drains and debris, resealing of seams and penetrations as they age, and a photo-documented report each visit. It catches small failures before they become interior damage, extends the roof's service life, and keeps most manufacturer warranties in force — many of which require documented maintenance." },
      { q: "Why does ponding water on a flat roof matter?", a: "Standing water that doesn't drain within about 48 hours accelerates membrane breakdown, adds significant dead load, and freezes and thaws through NJ winters — working seams and flashing loose. During a re-roof we correct drainage with tapered insulation and proper drain placement so water actually leaves the roof instead of sitting on it." },
    ],
    keywords: ["commercial roofing NJ", "flat roof contractor New Jersey", "TPO EPDM commercial roof Bergen County"],
  },
  {
    slug: "residential-roofing",
    name: "Residential Roofing NJ",
    short: "Home roof installs, replacement & repair",
    blurb:
      "GAF-certified residential roofing for New Jersey homeowners — new installations, full replacements, leak and storm repairs, and skylights. Every qualifying roof is backed by a 25-year warranty on labor and materials.",
    intro:
      "Your roof is the one system standing between your family and every storm, snow load, and heat wave New Jersey throws at it. Lita Construction is a family-owned, GAF-certified roofing contractor that installs, replaces, and repairs residential roofs for homeowners across all eight counties we serve — Bergen, Passaic, Essex, Hudson, Morris, Union, Middlesex, and Sussex. We install complete GAF shingle systems engineered for our freeze-thaw climate, handle the township permit and inspections for you, and back every qualifying roof with a 25-year warranty on both labor and materials. No pressure, no fake urgency — just an honest inspection and a roof built to outlast the mortgage.",
    quickAnswer:
      "Lita Construction provides residential roofing for New Jersey homeowners — new roof installations, full replacements, leak and storm repairs, GAF shingle systems, and skylights — across Bergen, Passaic, Essex, Hudson, Morris, Union, Middlesex, and Sussex Counties, backed by a 25-year labor-and-materials warranty.",
    features: [
      "New roof installation & full replacement",
      "Leak, storm & wind-damage repair",
      "Complete GAF architectural shingle systems",
      "Skylight installation & replacement",
      "Insurance-claim documentation & adjuster support",
      "Free roof inspections & itemized estimates",
    ],
    subServices: [
      { name: "New Installation & Replacement", description: "Complete tear-off and new roof installation with GAF architectural shingles — deck inspection, full system components, and a 25-year warranty on every qualifying home." },
      { name: "Roof Repair & Leak Fixes", description: "Fast, lasting repairs for leaks, missing or lifted shingles, and worn flashing around chimneys, valleys, and vents — before a small drip becomes a ceiling stain." },
      { name: "Storm & Insurance Claims", description: "Wind and hail damage documented with photos and a detailed estimate your insurer can use, with direct adjuster coordination to move your claim faster." },
      { name: "Skylights", description: "Professional skylight installation and replacement, flashed as part of your roof system so you get natural light without a single leak." },
    ],
    process: [
      { title: "Free inspection & honest estimate", description: "We climb up, document every layer and problem area — decking, flashing, ventilation, shingles — and give you an itemized estimate with a straight repair-or-replace recommendation, whichever genuinely serves your home." },
      { title: "Shingle & color selection", description: "Choose your GAF shingle profile and color from real samples at your home, with square footage, ventilation, and pricing all confirmed in writing before we order a thing." },
      { title: "Permit & scheduling", description: "We pull the construction permit your NJ township requires and schedule the job around the weather, so your roof is installed to code and inspected — nothing for you to file." },
      { title: "Tear-off, deck check & GAF system install", description: "Old roofing comes off completely, the deck is inspected for rot, and then ice-and-water shield, synthetic underlayment, starter strip, architectural shingles, ridge cap, and proper ventilation go on as one certified GAF system — the only way to earn the 25-year warranty." },
      { title: "Cleanup & final walkthrough", description: "We magnet-sweep the entire yard and driveway for nails, haul away every scrap of debris, and walk the finished roof with you before we consider the job done." },
    ],
    materials: [
      { name: "GAF Architectural Shingles", bestFor: "Most NJ homes — the best balance of cost, curb appeal & warranty eligibility", lifespan: "25–30 years", notes: "Our most-installed system and required for the 25-year workmanship warranty; dimensional look that suits colonials, capes, and ranches alike." },
      { name: "GAF Designer / Luxury Shingles", bestFor: "Homeowners wanting a slate or wood-shake look", lifespan: "30+ years", notes: "Heavier, high-definition profiles for a premium curb-appeal upgrade at a higher material cost." },
      { name: "3-Tab Asphalt Shingles", bestFor: "Budget-conscious replacements & rental properties", lifespan: "15–20 years", notes: "Lower upfront cost and a flatter profile, with a shorter lifespan than architectural shingles." },
      { name: "Skylights", bestFor: "Adding natural light without a full re-roof", lifespan: "20+ years", notes: "Installed and flashed during a re-roof or as a standalone add-on, sealed to the roof system so it will not leak." },
    ],
    faqs: [
      { q: "Do I need a new roof or just a repair?", a: "If your roof is over 20 years old, has widespread curling, cracked, or missing shingles, granules filling your gutters, or recurring leaks, a full replacement is usually the smarter long-term investment. Isolated damage — a few blown-off shingles or worn flashing around a chimney — we simply repair. Our free inspection gives you an honest recommendation, and we will tell you when a repair is genuinely all you need." },
      { q: "How long does a residential roof replacement take?", a: "Most homes are torn off and re-roofed in 1–3 days, depending on the size, pitch, and complexity of your roof and the weather. We give you a firm timeline up front, seal the roof each day so your home is never left exposed, and keep the site clean throughout." },
      { q: "What does the 25-year warranty actually cover?", a: "It covers both labor and materials for 25 years when a complete GAF shingle system is installed by a certified contractor like Lita Construction. That means if a defect or an installation issue ever surfaces, it is corrected at no cost to you — not just replacement parts with a separate bill for the labor. It only applies when the full system is installed together, which is exactly how we install every qualifying roof." },
      { q: "Can you handle a storm-damage insurance claim?", a: "Yes. We inspect the roof, document wind or hail damage with photos, and provide a detailed estimate your insurer can work from. When needed, we coordinate directly with your adjuster and meet them on-site so the claims process moves faster and nothing legitimate gets overlooked." },
      { q: "Do I need a permit to replace my roof in New Jersey?", a: "Almost always, yes — most NJ municipalities require a construction permit for a full roof replacement. As a licensed contractor (NJ Lic. #13VH11703800), we pull the permit and schedule the required township inspections as part of the job, so there is nothing for you to file and no problem waiting when you sell." },
      { q: "Will you replace my roof in winter?", a: "We can, within reason. Asphalt shingles need temperatures around 40°F or above to seal properly, so we watch the forecast closely and avoid installing in freezing, snowy, or wet conditions that would compromise the seal. In New Jersey's freeze-thaw climate, proper timing and ice-and-water shield in the valleys and eaves are what prevent ice-dam leaks down the road." },
      { q: "Which New Jersey towns do you serve?", a: "We serve homeowners across all of Northern and Central New Jersey — Bergen, Passaic, Essex, Hudson, Morris, Union, Middlesex, and Sussex Counties, and every township within them. Not sure if we cover your area? Call (201) 540-7772 and we will confirm coverage for your town." },
    ],
    keywords: ["residential roofing NJ", "roof replacement New Jersey", "GAF certified roofer Bergen County"],
  },
  {
    slug: "siding-installation",
    name: "Siding Installation",
    short: "New vinyl, Hardie & insulated siding",
    blurb:
      "New siding installed the right way — house wrap and moisture barrier first, then premium vinyl, fiber-cement, or insulated panels, finished with matching soffit, fascia, and trim for a weather-tight, energy-efficient exterior.",
    intro:
      "New siding is one of the highest-return improvements a New Jersey homeowner can make — it seals the house against wind-driven rain and freeze-thaw, cuts drafts and energy bills, and completely resets your curb appeal. But siding only performs as well as what goes on behind it. Lita Construction installs vinyl, fiber-cement (James Hardie), and insulated siding over a proper house wrap and moisture barrier, repairs any hidden rot before it gets sealed in, and finishes the soffit, fascia, and trim so the whole exterior works as one weather-tight system. We also walk you through color and material selection on your actual house, in your actual light, before a single panel is ordered.",
    quickAnswer:
      "Lita Construction installs new vinyl, fiber-cement (James Hardie), and insulated siding over a proper house wrap and moisture barrier — including matching soffit, fascia, and trim — for a weather-tight, energy-efficient exterior across Northern & Central New Jersey.",
    features: [
      "New vinyl, fiber-cement & insulated siding",
      "House wrap & moisture barrier",
      "Soffit, fascia & trim wrapping",
      "Rotted sheathing repair before install",
      "Energy-efficient insulated backing",
      "On-site color & material consultation",
    ],
    subServices: [
      { name: "Vinyl Siding Installation", description: "Durable, virtually maintenance-free vinyl in a wide range of colors and profiles — the best value for most NJ homes, and never needs painting." },
      { name: "Fiber-Cement (James Hardie) Siding", description: "Premium, fire-resistant fiber-cement that gives you a true wood-grain look, holds color for decades, and stands up to NJ moisture and freeze-thaw." },
      { name: "Insulated Siding", description: "Foam-backed vinyl that adds a layer of continuous insulation, dampens noise, and boosts the R-value of your walls to trim heating and cooling costs." },
      { name: "Soffit, Fascia & Trim", description: "New or wrapped soffit, fascia, and trim in matching or accent colors that finish the exterior, seal out water, and end the cycle of scraping and repainting." },
    ],
    process: [
      { title: "Free estimate & color consultation", description: "We measure the full exterior, walk you through vinyl, fiber-cement, and insulated samples against your actual home and light, and give you an itemized price before anything is ordered — no guesswork, no pressure." },
      { title: "Tear-off & sheathing inspection", description: "Old siding comes off and we inspect the sheathing underneath for rot, moisture, or pest damage. We fix any problems we find first — we never seal a hidden issue behind brand-new siding." },
      { title: "House wrap & moisture barrier", description: "A continuous house wrap goes on and is taped and lapped correctly to stop air and water infiltration. This is the single biggest factor in how long your siding lasts, and the step budget installers rush." },
      { title: "Siding, trim & flashing install", description: "Panels go up level and properly fastened to allow for expansion, with flashing at every window, door, and penetration and matching soffit, fascia, and trim so water is directed away at every seam." },
      { title: "Final inspection & cleanup", description: "We check every corner, J-channel, and caulk line, magnet-sweep for nails and clips, haul away all debris, and walk the finished exterior with you before we call it done." },
    ],
    materials: [
      { name: "Vinyl Siding", bestFor: "Most NJ homes — best value & lowest maintenance", lifespan: "20–40 years", notes: "Never needs painting; huge color and profile range. Choose fade-resistant grades for south- and west-facing walls." },
      { name: "Insulated Vinyl Siding", bestFor: "Older homes with drafts or thin wall insulation", lifespan: "20–40 years", notes: "Foam backing adds continuous R-value and stiffness, dampens noise, and resists dents better than standard vinyl." },
      { name: "Fiber-Cement (James Hardie)", bestFor: "A premium, true wood look with top durability", lifespan: "30–50 years", notes: "Fire-resistant and dimensionally stable through freeze-thaw; higher upfront cost, and comes factory-finished (ColorPlus) or paint-ready." },
      { name: "House Wrap & Moisture Barrier", bestFor: "Every siding job — the layer that decides longevity", lifespan: "Matches the siding above it", notes: "Not optional and never an upgrade to skip — it's what keeps wind-driven rain out of your walls behind whatever siding you choose." },
    ],
    faqs: [
      { q: "Which siding should I install — vinyl, insulated vinyl, or fiber-cement?", a: "Vinyl is the best all-around value for most NJ homes: durable, maintenance-free, and never needs painting. Insulated vinyl adds a foam backing that boosts wall R-value and dampens noise — worth it on drafty or older homes. Fiber-cement (James Hardie) is the premium choice for a true wood-grain look and the longest lifespan, at a higher upfront cost. During your free estimate we hold samples against your actual house and recommend the best fit for your home, exposure, and budget — no upselling." },
      { q: "What is house wrap and why does it matter so much?", a: "House wrap is a continuous moisture barrier installed over the sheathing before siding goes on. It blocks wind-driven rain and air infiltration while letting the wall breathe, and it is the single biggest factor in how long your siding lasts and whether your walls stay dry. In New Jersey's freeze-thaw climate, water that gets behind poorly wrapped siding freezes, expands, and causes rot. We tape and lap the wrap correctly on every job — it is never a step we skip or treat as an add-on." },
      { q: "Does new siding actually lower energy bills?", a: "Yes — especially insulated siding. Standard siding over a proper house wrap already cuts drafts, but foam-backed insulated vinyl adds a layer of continuous insulation across the whole wall, reducing the heat you lose in winter and gain in summer. Most homeowners with older or under-insulated walls notice more even room temperatures and lower heating and cooling costs after an insulated siding install." },
      { q: "Will you check for rotted wood before installing new siding?", a: "Always — and we will not cover it up. We remove the old siding first specifically to inspect the sheathing and framing underneath. If we find rotted or water-damaged wood, we show you, explain it, and repair or replace it before the house wrap and new siding go on. Installing new siding over hidden rot just seals a growing problem inside your walls." },
      { q: "Do you install James Hardie fiber-cement siding?", a: "Yes. We install fiber-cement including James Hardie products, which come either factory-finished (ColorPlus) with a baked-on color that resists fading, or primed and paint-ready. Fiber-cement is heavier and requires specific fastening, flashing, and cut handling to install correctly — done right, it delivers a true wood look with a 30–50 year lifespan and excellent fire and moisture resistance." },
      { q: "Do you replace the soffit, fascia, and trim too?", a: "Yes — a proper siding job includes them. The fascia and soffit are usually where hidden rot starts, and mismatched or aging trim undercuts an otherwise great result. We install new or wrap existing soffit, fascia, and trim in matching or accent colors so everything seals out water, works as one weather-tight system, and ends the cycle of scraping and repainting wood trim." },
      { q: "How do I choose a siding color, and do you handle HOA or township approval?", a: "We bring full-size samples and hold them against your home in its actual light, since a color reads very differently on a small chip than on a full wall in sun versus shade. We factor in your roof, trim, stone, and neighborhood so the result looks intentional, not dated. For HOA or township color approval, we provide the manufacturer spec sheets and color samples associations and building departments typically require, and can supply anything additional they request." },
    ],
    keywords: ["siding installation NJ", "fiber cement siding New Jersey", "vinyl siding contractor Bergen County"],
  },
  {
    slug: "siding-replacement",
    name: "Siding Replacement",
    short: "Full tear-off — premium vinyl & James Hardie®",
    blurb:
      "Complete siding replacement done as a building-envelope system — a surgical tear-off to the sheathing, hidden-rot repair, high-performance house wrap and flashing, then premium vinyl or James Hardie® fiber cement installed to protect your home's structure, not just its curb appeal.",
    intro:
      "Siding is the primary skin of your home's structural envelope. In the climate of Northern & Central New Jersey — where exteriors take extreme thermal expansion, wind-driven rain, freeze-thaw, and heavy summer humidity — siding has to do far more than look good; it has to work as a moisture-management system that keeps water out of your framing. Lita Construction replaces siding the right way: we don't just hang new panels over failing materials, we strip the wall back to the sheathing, correct any hidden rot, build a proper secondary weather barrier, and reinstall in high-gauge premium vinyl or James Hardie® fiber cement engineered for the Northeast. As a family-owned contractor with over two decades across roofing, masonry, and siding, we bring true building-envelope expertise — including flashing details most siding-only crews can't execute — to protect the most expensive parts of your home.",
    quickAnswer:
      "Lita Construction replaces residential siding as a full building-envelope system across Northern & Central New Jersey — a complete tear-off to the sheathing, hidden-rot repair, high-performance house wrap and custom flashing, then premium vinyl or James Hardie® fiber-cement cladding engineered for the Northeast climate.",
    features: [
      "Full tear-off to the sheathing (no re-siding over old panels)",
      "Premium high-gauge vinyl & CertainTeed® Cedar Impressions®",
      "James Hardie® fiber cement (HardieZone® HZ5)",
      "Structural substrate & hidden-rot audit",
      "High-performance house wrap & seam-taped weather barrier",
      "Custom-bent flashing at every window, door & transition",
    ],
    subServices: [
      { name: "Premium Vinyl Siding", description: "Heavy-wall, high-gauge vinyl and polymer panels — including CertainTeed® Monogram and Cedar Impressions® — with reinforced nail hems and baked-in color that resists fading, chalking, and denting far better than contractor-grade vinyl." },
      { name: "James Hardie® Fiber Cement", description: "Non-combustible HardiePlank® lap and HardieShingle® cladding in factory-applied ColorPlus® Technology, installed to the HardieZone® HZ5 spec engineered for New Jersey's freeze, snow, and ice so the material won't crack or delaminate." },
      { name: "Total-Envelope Tear-Off", description: "A surgical strip-down to the original sheathing, a 100% substrate audit for dry rot, insect, and moisture damage, then a high-performance vapor-permeable house wrap and taped seams before a single panel goes back on." },
      { name: "Artisan Flashing & Insulation", description: "Hand-bent PVC-coated or copper flashing at windows, doors, and water-kickout points, plus optional contoured foam or rigid-foam insulation backing that breaks the wall's thermal bridge and lowers heating and cooling costs." },
    ],
    process: [
      { title: "Free exterior assessment & material selection", description: "We evaluate your current siding and where water is getting in, walk you through premium vinyl and James Hardie® samples against your actual home and light, and give you an itemized replacement estimate before anything is ordered." },
      { title: "Surgical tear-off & substrate audit", description: "The old siding is fully removed and we perform a 100% audit of the sheathing and framing, identifying and correcting hidden dry rot, insect damage, or mold so the wall you re-side is sound, dry, and level." },
      { title: "Moisture barrier & house wrap", description: "The most important step is the part you never see: a high-performance, vapor-permeable house wrap and specialized seam tapes create a secondary weather barrier that lets interior moisture escape while keeping bulk water off your framing." },
      { title: "Artisan flashing & transition engineering", description: "We hand-bend and integrate custom flashing at every window, door, and vulnerable junction — the building-envelope detailing, drawn from our roofing and masonry background, that standard siding crews routinely skip." },
      { title: "Cladding install, laser-leveling & triple-pass sweep", description: "Premium vinyl or James Hardie® panels go on laser-leveled and correctly fastened for expansion, we protect your windows, AC units, and landscaping throughout, then finish with an exhaustive magnetic sweep of the driveway and lawn." },
    ],
    materials: [
      { name: "Premium Vinyl (CertainTeed® / Cedar Impressions®)", bestFor: "Most NJ replacements wanting durability, versatility & the best value", lifespan: "20–40 years", notes: "High-gauge, heavy-wall panels with reinforced nail hems and baked-in color; never needs painting and resists denting, fading, and chalking." },
      { name: "James Hardie® Fiber Cement (HZ5)", bestFor: "Homeowners wanting the ultimate durability, a true cedar look & fire resistance", lifespan: "30–50 years", notes: "Non-combustible Portland-cement cladding with factory ColorPlus® finish, spec'd for the HardieZone® HZ5 climate so it resists cracking through freeze-thaw." },
      { name: "House Wrap & Weather Barrier", bestFor: "Every replacement — the invisible layer that decides longevity", lifespan: "Matches the siding above it", notes: "Vapor-permeable wrap plus taped seams; not an upgrade to skip — it's what prevents catastrophic wall rot behind whatever siding you choose." },
      { name: "Contoured / Rigid-Foam Insulation", bestFor: "Older or drafty homes upgrading the thermal envelope", lifespan: "Matches the siding", notes: "Adds continuous R-value beneath the panels, breaks the thermal bridge of the studs, and creates a quieter, more energy-efficient interior." },
    ],
    faqs: [
      { q: "What's the difference between siding replacement and just re-siding?", a: "Re-siding contractors hang new panels over your existing, often-failing materials — which traps any hidden rot or moisture and never lets us verify the wall underneath is sound. A true replacement is a surgical tear-off down to the sheathing, so we can audit and repair the substrate, install a proper weather barrier and flashing, and reinstall on a dry, level, structurally sound wall. It costs a bit more up front and lasts dramatically longer." },
      { q: "Should I choose premium vinyl or James Hardie® fiber cement?", a: "Premium high-gauge vinyl (like CertainTeed® Cedar Impressions®) is the best all-around value for most NJ homes — durable, low-maintenance, never needs painting, and available in a wood-grain look. James Hardie® fiber cement is the premium, non-combustible choice with the longest lifespan, a true deep-grain cedar look, and factory ColorPlus® finish, at a higher upfront cost. During your free estimate we hold real samples against your home and recommend the right fit for your exposure, style, and budget — no upselling." },
      { q: "What is the HardieZone® HZ5 system and why does it matter in New Jersey?", a: "James Hardie engineers its products for specific climate zones. New Jersey falls in HZ5 — the zone built to withstand freezing temperatures, snow, and ice. Installing the HZ5-spec product matters because it's formulated so the fiber cement resists the cracking and delamination that generic cladding suffers through our freeze-thaw winters. We install to that spec so the material performs the way it's warrantied to." },
      { q: "What happens if you find rotted wood or mold when you remove the old siding?", a: "We show you and fix it before re-siding — never cover it up. Once the old siding is off, we perform a 100% audit of the sheathing and framing for dry rot, insect damage, and mold. Any compromised material is cut out and replaced so the wall is sound and level before the house wrap and new panels go on. Re-siding over hidden rot just seals a growing, expensive problem inside your walls." },
      { q: "Why do you emphasize house wrap and flashing so much?", a: "Because the part of a siding job that keeps your home dry is the part you never see. A vapor-permeable house wrap with taped seams is the secondary barrier that lets interior moisture escape while stopping wind-driven rain from reaching your framing — the difference between siding that lasts and catastrophic wall rot. Flashing at windows, doors, and transitions is where water sneaks past a poorly built envelope; our roofing and masonry background lets us hand-bend flashing details standard siding crews can't." },
      { q: "Can a siding replacement lower my energy bills?", a: "Yes — a replacement is the ideal time to upgrade your home's thermal envelope. We can add contoured foam or rigid-foam insulation backing beneath the vinyl or James Hardie® panels, adding continuous R-value that breaks the thermal bridge of your wall studs. Most homeowners with older or under-insulated walls notice more even room temperatures, less outside noise, and lower heating and cooling costs afterward." },
      { q: "How do you protect my property during a full siding replacement?", a: "Our reputation is built on property respect. We use a catch-all shielding system to protect your windows, AC units, and landscaping during tear-off and install, laser-level every course to account for the settling of older NJ homes, and finish with a triple-pass magnetic sweep of your driveway and lawn so the site is left free of nails and metallic debris." },
    ],
    keywords: ["siding replacement NJ", "James Hardie siding New Jersey", "vinyl siding replacement Bergen County", "fiber cement siding contractor Somerset County"],
  },
  {
    slug: "siding-repair",
    name: "Siding Repair",
    short: "Panel matching, storm & water-damage repair",
    blurb:
      "Cracked, warped, or storm-damaged siding repaired and matched to your existing panels — with any rotted sheathing or water damage underneath fixed first, so you restore what's sound instead of paying to replace the whole wall.",
    intro:
      "Not every siding problem needs a full replacement. A few cracked panels from a fallen branch, a warped run in the afternoon sun, or a water stain creeping up the wall is often a repair — if it's caught early and done right. Lita Construction repairs damaged vinyl and fiber-cement siding across Northern & Central New Jersey, sourcing panels to match your existing profile and color, and always checking the sheathing behind the damage for the hidden rot and water intrusion that a cover-up job leaves to spread. When a repair genuinely makes sense, we'll tell you — and when it doesn't, we'll tell you that too.",
    quickAnswer:
      "Lita Construction repairs cracked, warped, and storm-damaged vinyl and fiber-cement siding — matching replacement panels to your existing profile and repairing any rotted sheathing or water damage behind it — across Northern & Central New Jersey.",
    features: [
      "Cracked & warped panel replacement",
      "Storm & wind damage repair",
      "Panel color & profile matching",
      "Water intrusion & leak repair",
      "Rotted sheathing replacement",
      "Free repair-vs-replace assessment",
    ],
    subServices: [
      { name: "Panel Matching & Replacement", description: "We source vinyl and fiber-cement panels to match your existing profile and color, swapping out damaged sections so the repair blends into the wall instead of standing out." },
      { name: "Storm & Wind Damage Repair", description: "Cracked, cracked-loose, or blown-off panels after a NJ storm, repaired and documented for insurance so your exterior is weather-tight again fast." },
      { name: "Water Intrusion Repair", description: "We trace water getting behind the siding — bad flashing, failed caulk, a gap at a window or corner — fix the source, and dry out and rebuild what got wet." },
      { name: "Rotted Sheathing Replacement", description: "When water has reached the plywood or framing behind the siding, we cut out the rot, replace the sheathing and house wrap, and re-side over solid, dry material." },
    ],
    process: [
      { title: "Free inspection & repair-vs-replace assessment", description: "We look at the damaged area and the wall around it, check for moisture behind the siding, and give you an honest call — a targeted repair, or replacement if the damage is too widespread to patch cleanly." },
      { title: "Panel matching", description: "We identify your siding's profile and color and source matching panels. Common vinyl profiles are usually a good match; if your color has faded or the line is discontinued, we tell you upfront and walk through the options rather than installing a visible mismatch." },
      { title: "Remove damage & inspect the sheathing", description: "Damaged panels come off and we inspect the sheathing and house wrap underneath — the step that finds the rot and water damage a quick patch job would seal in and let spread." },
      { title: "Repair the substrate & seal the source", description: "Any rotted sheathing is cut out and replaced, house wrap and flashing are restored, and we fix whatever was letting water in — bad caulk, a gap at a window, or failed flashing — so the problem doesn't come back behind the new panels." },
      { title: "Install matched panels & final check", description: "New panels go in locked and sealed to shed water, we caulk and check every seam and corner, and clean up so the only sign we were there is that the damage is gone." },
    ],
    materials: [
      { name: "Vinyl Panel Repair", bestFor: "Cracked, warped, or storm-damaged vinyl siding", lifespan: "Matches existing siding", notes: "Common profiles match well; exact color depends on age and fading, which we assess honestly before starting." },
      { name: "Fiber-Cement Repair", bestFor: "Damaged or cracked fiber-cement (HardiePlank-style) siding", lifespan: "Matches existing siding", notes: "Repaired and repainted to blend; heavier and more involved than vinyl, so we scope it precisely." },
      { name: "Sheathing & House Wrap", bestFor: "Walls with rot or water damage behind the siding", lifespan: "30+ years", notes: "New plywood/OSB sheathing and continuous house wrap — the dry, sound base that makes the siding repair last." },
      { name: "Flashing & Sealant", bestFor: "Stopping the water intrusion at its source", lifespan: "10–20 years", notes: "Corrected flashing at windows, corners, and penetrations plus quality exterior caulk — the actual fix behind most 'siding leaks.'" },
    ],
    faqs: [
      { q: "Can you match my existing siding for a repair?", a: "In most cases, yes — especially with common vinyl profiles, which we can usually source to match. The bigger variable is color: siding fades over years of NJ sun, so a brand-new panel in the 'same' color can read slightly brighter. We assess the match honestly before we start, and if an exact blend isn't possible we tell you and lay out the options rather than installing something that clearly doesn't match." },
      { q: "Should I repair my siding or replace all of it?", a: "It depends on how widespread the damage is and the age of the siding. A few cracked or storm-damaged panels on an otherwise sound wall is a clear repair. But if damage is spread across multiple sides, the siding is old and brittle, or you can no longer match the panels, a repair can end up looking patchy and cost you twice. We inspect for free and give you a straight repair-vs-replace recommendation — we're glad to repair when repair is genuinely the right call." },
      { q: "There's a water stain on my wall — is my siding leaking?", a: "Often the siding itself isn't the leak — water is getting behind it through failed caulk, a gap at a window or corner, or bad flashing, then running down and showing up as a stain. That's why we don't just swap the visible panel: we find where the water is actually entering, fix that source, and check the sheathing behind it for damage before closing the wall back up. Otherwise the stain comes right back." },
      { q: "What happens if there's rotted wood behind the siding?", a: "We fix it — we don't cover it up. When we pull damaged panels and find rotted sheathing or framing, we cut out the rot, replace the plywood and house wrap, and correct whatever let the water in before new siding goes on. Siding installed over wet, rotted wood traps the moisture and the rot keeps spreading, so this step isn't optional if we find it." },
      { q: "Can you repair storm damage for an insurance claim?", a: "Yes. After NJ wind and hail storms we repair cracked, loosened, and blown-off panels, and we photograph and document the damage in the detail your insurer needs. We can provide an itemized estimate for the claim and work with your adjuster so the process moves faster and the repair is covered properly." },
      { q: "Why is my vinyl siding warping or buckling?", a: "Vinyl warps from heat — direct afternoon sun, or reflected heat off nearby windows or a grill too close to the wall — and it buckles when it was installed too tight, with no room to expand and contract. We replace the warped panels and, where the cause is installation, re-hang the run with the proper spacing so it doesn't warp again. If the warping is from a heat source, we'll point out what's causing it." },
      { q: "How long does a siding repair take?", a: "Most targeted repairs — a handful of panels, matched and installed — are done in a single visit, often in a few hours. It takes longer when we find rotted sheathing to replace or a water source to trace and fix, but we'll tell you the scope before we start, and sealing the wall back up weather-tight the same day is always the priority." },
    ],
    keywords: ["siding repair NJ", "storm damage siding repair New Jersey", "vinyl siding panel replacement Bergen County"],
  },
  {
    slug: "masonry-work",
    name: "Masonry Work",
    short: "Brick, block, stone & concrete work",
    blurb:
      "Old-world brick, block, and stone craftsmanship backed by modern engineering. We build and restore walls, steps, retaining walls, and foundations — and pour concrete and hardscaping — engineered for New Jersey's freeze-thaw seasons.",
    intro:
      "Solid masonry is the difference between work that looks good on day one and work that still stands straight in thirty winters. Lita Construction's masons build and restore brick, block, and stone — repointing tired mortar joints, laying new walls and steps, engineering retaining walls, waterproofing foundations, and pouring concrete and hardscaping. We pair old-world hand craftsmanship with modern structural detailing and drainage, so every wall, footing, and slab is built to shrug off New Jersey's freeze-thaw cycles for generations.",
    quickAnswer:
      "Lita Construction provides full masonry services across Northern & Central New Jersey — brick and stone repointing, walls, steps, retaining walls, foundation repair and waterproofing, and concrete and hardscaping — built with old-world craftsmanship and modern freeze-thaw engineering.",
    features: [
      "Brick & stone repointing / tuckpointing",
      "Brick, block & natural stone walls",
      "Steps, stoops & porches",
      "Engineered retaining walls",
      "Foundation repair & waterproofing",
      "Concrete flatwork & hardscaping",
    ],
    subServices: [
      { name: "Repointing & Tuckpointing", description: "We grind out failed mortar and repack the joints with a color- and strength-matched mix, restoring both the weather seal and the look without touching sound brick or stone." },
      { name: "Brick, Block & Stone Walls", description: "New and rebuilt structural and decorative walls — brick veneer, CMU block, and natural stone — laid by hand and coursed true to your home's existing material where possible." },
      { name: "Steps, Stoops & Retaining Walls", description: "Brick and stone steps, porches, and engineered segmental or natural-stone retaining walls, built on proper footings with drainage so they hold grade and stay put." },
      { name: "Foundations & Waterproofing", description: "Foundation crack repair, parging, and exterior or interior waterproofing systems matched to where the water is actually coming from, to keep basements dry." },
    ],
    process: [
      { title: "Free inspection & assessment", description: "We evaluate the brick, block, stone, or concrete in question and diagnose the root cause — failed mortar, a settling footing, poor drainage — rather than just the crack you can see." },
      { title: "Honest repair-vs-rebuild plan", description: "You get a clear, itemized estimate for the most cost-effective lasting fix, whether that's repointing a few courses or rebuilding a wall and correcting its base — no upselling." },
      { title: "Demo & base preparation", description: "Deteriorated masonry is removed and the foundation for the work is corrected: proper footings below the frost line, a compacted sub-base, and grading or drainage so the new work doesn't inherit the old failure." },
      { title: "Brick, block & stone work", description: "Our masons lay every course by hand with a mortar mix matched to the material and exposure, tooled clean and engineered for New Jersey's freeze-thaw expansion and contraction." },
      { title: "Waterproofing, sealing & cleanup", description: "Fresh masonry is sealed or waterproofed where needed, joints and surfaces are cleaned of haze and residue, the site is left tidy, and we walk the finished work with you." },
    ],
    materials: [
      { name: "Repointing / Tuckpointing", bestFor: "Sound brick or stone with crumbling, receding, or cracked mortar joints", lifespan: "20–30 years", notes: "The cost-effective fix when the masonry units are still solid; mortar is matched in color and to a strength that won't damage older, softer brick." },
      { name: "Natural Stone", bestFor: "Premium walls, steps, and veneers with a timeless, one-of-a-kind look", lifespan: "Lifetime", notes: "Bluestone, fieldstone, and granite; highest material cost but effectively permanent when properly set." },
      { name: "Concrete Block (CMU)", bestFor: "Structural walls, foundations, and retaining walls", lifespan: "50+ years", notes: "Strong, economical structural backbone; typically faced with brick or stone veneer or parged where it's exposed." },
      { name: "Poured Concrete & Hardscaping", bestFor: "Slabs, footings, steps, walkways, and driveways", lifespan: "30+ years", notes: "Air-entrained mixes and control joints sized for freeze-thaw so slabs resist cracking, scaling, and heaving." },
    ],
    faqs: [
      { q: "What is repointing (tuckpointing) and when does brick need it?", a: "Repointing is grinding out deteriorated mortar joints and repacking them with fresh mortar, restoring both strength and the weather seal without replacing the brick or stone. You need it when the joints are cracked, crumbling, receding, or letting water in — but the masonry units themselves are still sound. Caught in time, it's far cheaper than the wall damage that follows if water keeps getting behind the brick." },
      { q: "Why do brick and mortar deteriorate faster in New Jersey?", a: "New Jersey's freeze-thaw climate is hard on masonry. Water soaks into mortar joints and porous brick, then freezes and expands dozens of times each winter, prying joints apart and popping the faces off brick (spalling). We use mortar matched to the masonry's hardness and detail the work — proper joint tooling, flashing, and drainage — so water sheds off instead of soaking in and freezing." },
      { q: "Can you fix a cracked or leaking foundation?", a: "Yes. We repair foundation cracks, parge and reface deteriorated block or poured walls, and install waterproofing and drainage systems matched to where the water is actually entering. Not every crack is structural — during a free inspection we tell you honestly whether you're looking at a simple seal, a waterproofing system, or a structural repair." },
      { q: "Do I need a permit for a retaining wall in New Jersey?", a: "Often, yes. Most NJ municipalities require a permit once a retaining wall passes a certain height — commonly around four feet, though it varies by township and by whether the wall carries a surcharge like a driveway above it. As a licensed NJ contractor we check your town's rules and pull the permit and inspections as part of the job." },
      { q: "Will you match my home's existing brick or stone?", a: "We do our best to. For repointing we match mortar color and joint profile; for new or rebuilt sections we source brick and stone as close as we can to your existing material. Exact matches on older brick aren't always possible — where they aren't, we tell you upfront and show you the closest options rather than installing an obvious mismatch." },
      { q: "How is a properly poured concrete slab different from a cheap one?", a: "The difference is what you can't see. We prepare and compact a proper sub-base, use air-entrained concrete rated for freeze-thaw, place control joints so the slab cracks where you want it to instead of randomly, and cure it correctly. Skip those and a slab scales, heaves, and cracks within a couple of winters — exactly the failure we build to avoid." },
      { q: "What time of year is best for masonry work in NJ?", a: "Spring through fall is ideal, since mortar and concrete cure best above freezing and won't reach full strength if they freeze while green. We schedule inspections and estimates year-round and, when needed, use cold-weather methods and enclosures to keep projects moving — but we won't rush concrete or masonry into conditions that would compromise it." },
    ],
    keywords: ["masonry contractor NJ", "brick repointing New Jersey", "retaining wall Bergen County"],
  },
  {
    slug: "chimney-services",
    name: "Chimney Services",
    short: "Repair, repointing, rebuilds & leak repair",
    blurb:
      "Chimney repair, repointing, crown and flashing repair, leak sealing, and full rebuilds — plus honest inspection and a straight repair-vs-rebuild recommendation that keeps your family safe and your home dry.",
    intro:
      "A chimney takes more weather abuse than almost any part of your home — exposed on all sides, soaking up rain, and cycling through New Jersey's freeze-thaw winters that crack mortar and spall brick a little more every year. Lita Construction repairs, repoints, and rebuilds masonry chimneys, fixes the crown and flashing where most leaks actually start, and inspects the whole structure for free — then gives you an honest recommendation on whether a targeted repair will hold or a rebuild is the smarter long-term call.",
    quickAnswer:
      "Lita Construction repairs, repoints, and rebuilds masonry chimneys and fixes crown, flashing, and leak issues across Northern & Central New Jersey — starting with a free inspection and an honest repair-vs-rebuild recommendation.",
    features: [
      "Chimney repair & repointing",
      "Crown repair & rebuilding",
      "Flashing & leak repair",
      "Full chimney rebuilds",
      "Waterproofing & cap installation",
      "Free safety inspection",
    ],
    subServices: [
      { name: "Repair & Repointing", description: "Grinding out failed mortar joints and repacking them with fresh, color-matched mortar to restore strength and stop water before it reaches sound brick." },
      { name: "Crown & Flashing Repair", description: "Rebuilding cracked crowns and re-sealing the roof-line flashing — the two spots where the vast majority of chimney leaks begin." },
      { name: "Full Chimney Rebuilds", description: "Tearing down and rebuilding from the roofline (or the base) with new brick, crown, and flashing when spalling or structural cracks make repair a losing bet." },
      { name: "Cleaning & Inspection", description: "A top-to-bottom look at the crown, mortar, flue, and flashing for safety and water issues — plus sweeping to clear creosote and blockages before you burn." },
    ],
    process: [
      { title: "Free inspection & safety check", description: "We examine the crown, mortar joints, brick, flashing, and flue for cracks, spalling, and water intrusion — and photograph what we find so you can see the actual condition, not just take our word for it." },
      { title: "Honest repair-vs-rebuild recommendation", description: "You get a clear, itemized estimate and a straight answer: repointing and a crown repair if the brick is still sound, or a rebuild if spalling and structural cracks mean patching would just be throwing money at it." },
      { title: "Setup & protection", description: "We set up safe roof access and staging, and protect your roof, gutters, and landscaping before any demo or grinding begins." },
      { title: "Repair or rebuild the masonry", description: "We repoint or rebuild by hand with new brick and mortar matched to your home and mixed for NJ's freeze-thaw cycles, then form a proper sloped, overhanging crown that sheds water away from the brick." },
      { title: "Flashing, waterproofing & cleanup", description: "We re-seal or replace the flashing, install or reset the cap, apply a breathable water repellent where it helps, then clean the roof and ground and walk the finished chimney with you." },
    ],
    materials: [
      { name: "Repointing (Tuckpointing)", bestFor: "Deteriorated mortar joints with sound, intact brick", lifespan: "15–25 years", notes: "The cost-effective fix when only the mortar has failed — we tell you honestly when this is genuinely enough." },
      { name: "Crown Repair / Rebuild", bestFor: "Cracked or crumbling concrete crown at the top of the chimney", lifespan: "20+ years", notes: "A properly sloped, overhanging crown is the #1 defense against water getting into the masonry." },
      { name: "Flashing Repair", bestFor: "Leaks where the chimney meets the roof", lifespan: "15–25 years", notes: "Step and counter-flashing re-sealed or replaced — the most common true source of a 'chimney leak.'" },
      { name: "Full Rebuild", bestFor: "Spalling brick, structural cracks, or a leaning chimney", lifespan: "50+ years", notes: "Rebuilt with new brick, crown, and flashing — the lasting fix when repair would only buy a season or two." },
    ],
    faqs: [
      { q: "How do I know if my chimney needs repair or a full rebuild?", a: "It comes down to whether the brick is still sound. If only the mortar joints have deteriorated, repointing plus a crown or flashing repair restores the chimney for far less. But when brick faces are flaking off (spalling), the crown is crumbling, or there are structural cracks or a visible lean, a partial or full rebuild is the honest, lasting fix — patching those just buys a season or two. Our free inspection tells you which one you are actually looking at, with photos so you can see it yourself." },
      { q: "What causes chimney brick and mortar to deteriorate?", a: "Water, and New Jersey's freeze-thaw winters especially. Rain and snowmelt soak into porous brick and mortar, then freeze and expand, prying the masonry apart a little more with every cold snap. Add a cracked crown or failed flashing letting water in from the top, and the damage accelerates. That is why a sloped crown, sealed flashing, and a water repellent do more to extend a chimney's life than almost anything else." },
      { q: "My chimney is leaking — where is the water actually coming from?", a: "More often than not it is the crown or the flashing, not the brick itself. The crown is the concrete slab at the very top; when it cracks, water pours straight down into the chimney. The flashing is the metal seal where the chimney meets your roof; when it fails, water runs down the outside of the chimney and shows up as a ceiling stain near it. We find the real source instead of guessing — chasing the wrong one is why so many 'fixed' chimney leaks come back." },
      { q: "What is repointing (tuckpointing) and how long does it last?", a: "Repointing means grinding out the old, failed mortar between the bricks and packing in fresh mortar, restoring both strength and the weatherproof seal — without disturbing brick that is still good. Done right with the correct mortar mix, it lasts 15–25 years. It is the smart, economical choice when the brick is sound and only the joints have worn, which is common on chimneys 20 to 40 years old." },
      { q: "Do you offer a free chimney inspection?", a: "Yes. We inspect the crown, mortar joints, brick, flashing, and visible flue for cracks, spalling, water damage, and safety concerns, and give you a straight assessment with photos and an itemized estimate. If a simple repair is all you need, that is what we will tell you — we do not recommend a rebuild to pad a bill." },
      { q: "Why does a chimney need a cap and waterproofing?", a: "A cap keeps rain, snow, and animals out of the flue and stops downdrafts, while a breathable water repellent lets the masonry dry out but blocks new water from soaking in and freezing. Together they attack the root cause of almost all chimney damage — water — which is why we often recommend them right after a repair or rebuild to protect the work you just paid for." },
      { q: "Do I need a permit for chimney work in New Jersey?", a: "A repointing or minor repair usually does not, but a structural rebuild typically requires a construction permit and inspection in most NJ municipalities. As a licensed NJ contractor (Lic. #13VH11703800) we know the local requirements, pull the permit when one is needed, and schedule the inspection — so the work is done to code and there is nothing for you to file." },
    ],
    keywords: ["chimney repair NJ", "chimney rebuild New Jersey", "chimney repointing Bergen County"],
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    short: 'Roof replacement, repair & new installs',
    blurb:
      'GAF-certified roof installation, replacement, and repair built to last decades. Backed by a 25-year warranty on labor and materials — the strongest protection in the industry.',
    intro:
      'Your roof is the single most important system protecting your home. As a GAF-certified roofing contractor, Lita Construction installs, replaces, and repairs residential and commercial roofs across Northern & Central New Jersey — using premium materials, meticulous workmanship, and a 25-year warranty that stands behind every nail.',
    quickAnswer:
      'Lita Construction is a GAF-certified roofing contractor providing full roof replacement, repair, and new installation across Northern & Central New Jersey, backed by a 25-year labor-and-materials warranty.',
    features: [
      'Full roof replacement & new construction',
      'Storm damage & leak repair',
      'GAF architectural shingles',
      'Flat & commercial roofing',
      'Skylight installation',
      'Roof inspections & free estimates',
    ],
    subServices: [
      { name: 'Roof Replacement', description: 'Complete tear-off and new roof installation with GAF architectural shingles, backed by a 25-year warranty.' },
      { name: 'Roof Repair', description: 'Fast, lasting repairs for leaks, missing shingles, flashing, and storm damage — before small problems become big ones.' },
      { name: 'Commercial & Flat Roofing', description: 'Durable flat-roof systems for commercial buildings across NJ, from inspection to installation.' },
      { name: 'Skylights', description: 'Professional skylight installation and replacement that brings in natural light without leaks.' },
    ],
    process: [
      { title: 'Free inspection & estimate', description: 'We climb up, document every layer of your existing roof, and give you an honest, itemized estimate — replacement or repair, whichever is the smarter call.' },
      { title: 'Material selection', description: 'Pick your GAF shingle color and profile from samples on the spot, with square footage and pricing confirmed before any work begins.' },
      { title: 'Tear-off & deck inspection', description: 'Old roofing is fully removed and the deck is inspected for rot or damage, so nothing is hidden under the new layer.' },
      { title: 'Install with GAF system components', description: 'Ice-and-water shield, synthetic underlayment, starter strip, architectural shingles, and ridge cap go on as one certified system — the only way to qualify for the 25-year warranty.' },
      { title: 'Final walkthrough & cleanup', description: 'We magnet-sweep the yard for nails, haul away all debris, and walk the finished roof with you before we call the job done.' },
    ],
    materials: [
      { name: 'GAF Architectural Shingles', bestFor: 'Most NJ homes — best balance of cost, curb appeal & warranty eligibility', lifespan: '25–30 years', notes: 'Our most-installed system; required for the 25-year workmanship warranty.' },
      { name: '3-Tab Asphalt Shingles', bestFor: 'Budget-conscious replacements & rentals', lifespan: '15–20 years', notes: 'Lower upfront cost, flatter profile, shorter lifespan than architectural shingles.' },
      { name: 'Flat / Commercial Roofing', bestFor: 'Additions, porches, and commercial buildings', lifespan: '15–25 years', notes: 'TPO and modified bitumen systems sized to the building and its drainage.' },
      { name: 'Skylights', bestFor: 'Adding natural light without a full re-roof', lifespan: '20+ years', notes: 'Installed and flashed as part of a re-roof or as a standalone add-on.' },
    ],
    faqs: [
      { q: 'How long does a roof replacement take?', a: 'Most residential roof replacements are completed in 1–3 days, depending on the size and complexity of the roof and the weather. We give you a clear timeline up front and keep the job site clean throughout.' },
      { q: 'How do I know if I need a new roof or just a repair?', a: 'If your roof is over 20 years old, has widespread missing or curling shingles, persistent leaks, or sagging, replacement is usually the smarter long-term investment. We offer a free inspection and an honest recommendation — repair if that is genuinely the right call.' },
      { q: 'What roofing materials do you use?', a: 'We specialize in GAF architectural asphalt shingles — a premium, long-lasting system — and also install flat and commercial roofing systems. As a GAF-certified contractor we can offer the 25-year labor-and-materials warranty.' },
      { q: 'What does the 25-year warranty actually cover?', a: 'It covers both labor and materials for 25 years when a full GAF shingle system is installed by a certified contractor like Lita Construction — meaning if a defect or installation issue surfaces, it is fixed at no cost to you, not just replaced parts with a bill for labor.' },
      { q: 'Can you repair storm or hail damage for an insurance claim?', a: 'Yes. We document the damage with photos, provide a detailed estimate your insurer can use, and work directly with adjusters when needed so the claims process moves faster.' },
      { q: 'Will you replace my roof in the winter?', a: 'We can, within reason — asphalt shingles seal properly down to about 40°F, and we monitor forecasts closely to avoid installing in freezing or wet conditions that compromise the seal.' },
      { q: 'Do I need a permit for a roof replacement in New Jersey?', a: 'Most NJ municipalities require a construction permit for a full roof replacement. As a licensed contractor we pull the permit and schedule the required inspections for you, so there is nothing for you to file.' },
    ],
    keywords: ['roofing contractor NJ', 'roof replacement New Jersey', 'GAF certified roofer Bergen County'],
  },
  {
    slug: 'siding',
    name: 'Siding',
    short: 'Vinyl, fiber-cement & exterior siding',
    blurb:
      'Protect and transform your home with expertly installed siding. From vinyl to fiber-cement, we deliver weather-tight, energy-efficient exteriors that boost curb appeal and value.',
    intro:
      'New siding is one of the highest-return improvements you can make to a New Jersey home — protecting it from the elements while dramatically boosting curb appeal and energy efficiency. Lita Construction installs and repairs vinyl, fiber-cement, and specialty siding, plus the soffit, fascia, gutters, windows, and doors that complete a weather-tight exterior.',
    quickAnswer:
      'Lita Construction installs and repairs vinyl and fiber-cement siding, plus the soffit, fascia, gutters, windows, and doors that make an exterior weather-tight, across Northern & Central New Jersey.',
    features: [
      'Vinyl & fiber-cement siding',
      'Siding repair & replacement',
      'Soffit, fascia & trim',
      'Seamless gutter installation',
      'Window & door installation',
      'Energy-efficient insulation',
    ],
    subServices: [
      { name: 'Vinyl Siding', description: 'Low-maintenance, durable vinyl siding in a wide range of colors and profiles to refresh any home.' },
      { name: 'Fiber-Cement Siding', description: 'Premium, fire-resistant fiber-cement siding that mimics natural wood with exceptional longevity.' },
      { name: 'Seamless Gutters', description: 'Custom seamless gutter systems that channel water away and protect your roof, siding, and foundation.' },
      { name: 'Windows & Doors', description: 'Energy-efficient window and door installation that seals out drafts and lowers utility bills.' },
    ],
    process: [
      { title: 'Free estimate & color consultation', description: 'We measure the exterior, walk you through vinyl and fiber-cement samples on-site, and price the job before anything is ordered.' },
      { title: 'House wrap & inspection', description: 'Old siding comes off and the sheathing underneath is inspected for rot or moisture damage — problems we fix before they get sealed behind new siding.' },
      { title: 'Weatherproof underlayment', description: 'A continuous house wrap goes on to stop air and water infiltration, the single biggest factor in how well siding performs long-term.' },
      { title: 'Siding, trim & gutter install', description: 'Panels, soffit, fascia, and seamless gutters go up in sequence so water is channeled away from the house at every level.' },
      { title: 'Final inspection & cleanup', description: 'We check every seam and corner, clear the site of debris, and walk the finished exterior with you.' },
    ],
    materials: [
      { name: 'Vinyl Siding', bestFor: 'Most homeowners — best value & lowest maintenance', lifespan: '20–40 years', notes: 'Never needs painting; wide range of colors and profiles, including insulated options.' },
      { name: 'Fiber-Cement Siding', bestFor: 'Premium wood-look finish with superior durability', lifespan: '30–50 years', notes: 'Fire-resistant and holds paint exceptionally well, at a higher upfront cost than vinyl.' },
      { name: 'Seamless Gutters', bestFor: 'Every home — prevents the #1 cause of siding & foundation damage', lifespan: '20+ years', notes: 'Custom-formed on-site to your roofline, with no seams to leak.' },
      { name: 'Windows & Doors', bestFor: 'Homes with drafts or single-pane glass', lifespan: '20–30 years', notes: 'Energy-efficient units installed and flashed as part of the same weather-tight envelope.' },
    ],
    faqs: [
      { q: 'Which siding material is best for my home?', a: 'Vinyl is the most cost-effective and low-maintenance choice for most NJ homes, while fiber-cement offers premium durability and a high-end wood-look finish. During your free estimate we walk you through the trade-offs and recommend the best fit for your home and budget.' },
      { q: 'Will new siding lower my energy bills?', a: 'Yes — modern siding with proper insulation and house wrap significantly reduces drafts and heat loss, which can lower heating and cooling costs year-round in New Jersey’s climate.' },
      { q: 'Do you also replace gutters and trim?', a: 'Absolutely. We install seamless gutters, soffit, fascia, and trim as part of a complete, weather-tight exterior — so everything matches and works together.' },
      { q: 'How long does a full siding replacement take?', a: 'Most homes are done in 3–7 days depending on square footage, the number of corners and trim details, and weather. We confirm a firm timeline before work starts.' },
      { q: 'Can you match my existing siding for a partial repair?', a: 'In many cases yes, especially with common vinyl profiles — we source matching panels when available. If an exact match isn’t possible, we’ll tell you upfront and discuss options rather than installing a visible mismatch.' },
      { q: 'Does new siding help hide or fix rotted wood underneath?', a: 'No — and we won’t cover it up. We remove old siding first specifically to find and repair any rotted sheathing or framing before new siding and house wrap go on.' },
      { q: 'Do you handle HOA or township approval for siding color changes?', a: 'We provide the spec sheets and color samples most HOAs and townships require, and can supply anything additional your association or building department requests.' },
    ],
    keywords: ['siding contractor NJ', 'siding installation New Jersey', 'vinyl siding Bergen County'],
  },
  {
    slug: 'masonry',
    name: 'Masonry',
    short: 'Chimneys, pavers, foundations & stone',
    blurb:
      'Old-world craftsmanship meets modern engineering. Our masonry team builds and restores chimneys, walkways, patios, retaining walls, and foundations that stand the test of time.',
    intro:
      'Masonry is where craftsmanship truly shows. From rebuilding a crumbling chimney to laying a brand-new paver patio or waterproofing a foundation, Lita Construction’s masons combine old-world skill with modern engineering to build brick, block, and stone work that lasts for generations across New Jersey.',
    quickAnswer:
      'Lita Construction builds and restores chimneys, paver patios, retaining walls, and foundations — brick, block, and stone work engineered to last for generations across Northern & Central New Jersey.',
    features: [
      'Chimney repair & rebuilds',
      'Brick & stone work',
      'Paver patios & walkways',
      'Retaining walls & steps',
      'Foundation repair & waterproofing',
      'Concrete & hardscaping',
    ],
    subServices: [
      { name: 'Chimney Repair & Rebuilds', description: 'Repointing, crown repair, and full chimney rebuilds that restore safety, function, and curb appeal.' },
      { name: 'Paver Patios & Walkways', description: 'Custom paver patios, walkways, and driveways that transform your outdoor living space.' },
      { name: 'Retaining Walls & Steps', description: 'Engineered retaining walls, steps, and hardscaping that are as structural as they are beautiful.' },
      { name: 'Foundations & Waterproofing', description: 'Foundation repair, crack sealing, and waterproofing to keep your basement and home dry.' },
    ],
    process: [
      { title: 'Free inspection & assessment', description: 'We evaluate the structure — chimney, patio base, wall, or foundation — and identify the root cause, not just the visible symptom.' },
      { title: 'Honest repair-vs-rebuild recommendation', description: 'You get a clear recommendation and itemized estimate for the most cost-effective lasting fix, whether that is repointing or a full rebuild.' },
      { title: 'Demo & base preparation', description: 'Damaged brick, block, or old hardscaping is removed and the base — footing, sub-base, or grading — is corrected so the new work does not inherit the old problem.' },
      { title: 'Brick, block & stone work', description: 'Our masons lay every course by hand, matched to your home’s existing material where possible, engineered for New Jersey’s freeze-thaw cycles.' },
      { title: 'Sealing, waterproofing & cleanup', description: 'Fresh masonry is sealed or waterproofed as needed, the site is cleaned, and we walk the finished work with you.' },
    ],
    materials: [
      { name: 'Chimney Repointing', bestFor: 'Minor mortar deterioration, early-stage damage', lifespan: '15–25 years', notes: 'The cost-effective fix when brick itself is still sound — we tell you honestly when this is enough.' },
      { name: 'Full Chimney Rebuild', bestFor: 'Spalling brick, damaged crown, or structural cracks', lifespan: '50+ years', notes: 'Rebuilt from the roofline up with new brick, flashing, and crown.' },
      { name: 'Paver Patios & Walkways', bestFor: 'Outdoor living spaces, driveways & walkways', lifespan: '25+ years', notes: 'Built on a compacted, well-drained base so pavers stay level for decades.' },
      { name: 'Foundation Waterproofing', bestFor: 'Damp or leaking basements', lifespan: '10–15 years (system-dependent)', notes: 'Crack sealing plus a drainage/waterproofing system matched to the source of the water.' },
    ],
    faqs: [
      { q: 'My chimney is cracking — can it be repaired or does it need a rebuild?', a: 'It depends on the extent of the damage. Minor mortar deterioration can be fixed with repointing, while spalling brick, a damaged crown, or structural cracks may require a partial or full rebuild. We inspect it for free and recommend the most cost-effective lasting solution.' },
      { q: 'How long does a paver patio last?', a: 'A properly installed paver patio with a solid base can last 25+ years. We build on a compacted, well-drained foundation so your patio stays level and beautiful for decades.' },
      { q: 'Can you fix a leaking or cracked foundation?', a: 'Yes. We repair foundation cracks, address water intrusion, and apply waterproofing systems to keep your basement dry and your foundation sound.' },
      { q: 'What is repointing and how is it different from a rebuild?', a: 'Repointing removes and replaces only the deteriorated mortar joints between bricks, restoring strength and weatherproofing without touching sound brick. A rebuild is required when the brick itself is spalling or the structure has shifted — repointing alone cannot fix that.' },
      { q: 'Do you offer a free chimney safety inspection?', a: 'Yes. We inspect the crown, flashing, mortar joints, and flue for visible damage or safety issues and give you a straight answer — no unnecessary work recommended.' },
      { q: 'Will a retaining wall need a permit in New Jersey?', a: 'Many NJ towns require a permit once a retaining wall exceeds a certain height (commonly around 4 feet, though it varies by municipality). We check your local requirements and handle the permit as part of the job.' },
      { q: 'What time of year is best for masonry and paver work in NJ?', a: 'Spring through fall is ideal since mortar and concrete cure best above freezing, but we can schedule inspections and estimates year-round and plan rebuilds for the first suitable weather window.' },
    ],
    keywords: ['masonry contractor NJ', 'chimney repair New Jersey', 'paver patio Bergen County'],
  },
  {
    slug: 'gutters',
    name: 'Gutters',
    short: 'Seamless gutters, guards & drainage',
    blurb:
      'Seamless aluminum gutters, leaf guards, and downspouts that move water off your roof and away from your foundation — custom-formed on-site to fit your roofline with no leak-prone seams.',
    intro:
      "Gutters are the quiet workhorse of your home's exterior — when they fail, water finds your fascia, siding, and foundation. Lita Construction fabricates and installs seamless aluminum gutters on-site, adds leaf-guard protection, and repairs soffit and fascia so rainwater is captured and carried safely away from your New Jersey home, storm after storm.",
    quickAnswer:
      'Lita Construction installs custom seamless aluminum gutters, leaf guards, and downspouts — formed on-site to your roofline and pitched to move water away from your foundation — across Northern & Central New Jersey.',
    features: [
      'Seamless aluminum gutters',
      'Gutter guards & leaf protection',
      'Downspouts & drainage',
      'Soffit & fascia repair',
      'Gutter cleaning & tune-ups',
      'Copper & half-round upgrades',
    ],
    subServices: [
      { name: 'Seamless Gutters', description: '5" and 6" K-style aluminum gutters formed on-site in one continuous piece, so there are no joints to leak or clog.' },
      { name: 'Gutter Guards', description: 'Micro-mesh and screen leaf-protection systems that keep debris out and end the twice-a-year ladder routine.' },
      { name: 'Downspouts & Drainage', description: 'Properly sized downspouts and extensions that carry water well clear of your foundation and landscaping.' },
      { name: 'Soffit & Fascia', description: 'Repair and replacement of the fascia board and soffit gutters hang from — the wood that rot reaches first.' },
    ],
    process: [
      { title: 'Free inspection & measurement', description: 'We check your existing gutters, fascia, and drainage, then measure the roofline exactly so your new gutters are formed to fit — not cut from stock lengths.' },
      { title: 'Material & color selection', description: 'Choose your gutter size, color, and whether to add leaf guards, matched to your roof and trim before anything is ordered.' },
      { title: 'On-site seamless forming', description: 'We run your aluminum through a forming machine right at your home, producing each gutter run in one continuous, seam-free length.' },
      { title: 'Hanging, pitch & downspouts', description: 'Gutters are hung with hidden hangers, pitched precisely toward the downspouts, and tied into drainage that carries water away from the foundation.' },
      { title: 'Water test & cleanup', description: 'We flush the system to confirm it drains clean with no overflow or pooling, then clear the site of all debris.' },
    ],
    materials: [
      { name: 'Seamless Aluminum (5")', bestFor: 'Most NJ homes — the standard for value & performance', lifespan: '20+ years', notes: 'Rust-proof, formed on-site with no seams; our most-installed system.' },
      { name: 'Oversized Aluminum (6")', bestFor: 'Large roofs, steep pitches & heavy-rain runoff', lifespan: '20+ years', notes: 'Handles more water and pairs with larger downspouts to prevent overflow.' },
      { name: 'Gutter Guards', bestFor: 'Homes under trees or with hard-to-reach rooflines', lifespan: 'Long-term add-on', notes: 'Micro-mesh keeps out leaves and pine needles so gutters stay flowing.' },
      { name: 'Copper / Half-Round', bestFor: 'Historic & high-end homes wanting a premium look', lifespan: '50+ years', notes: 'An architectural upgrade that patinas over time, at a higher upfront cost.' },
    ],
    faqs: [
      { q: 'What are seamless gutters and why are they better?', a: 'Seamless gutters are formed from one continuous piece of aluminum on-site to fit your roofline exactly. Because there are no joints along each run, there is nothing to separate, leak, or collect debris the way sectional gutters do — which is why they last longer and need far less maintenance.' },
      { q: 'Do gutter guards actually work?', a: 'Good ones do. We install micro-mesh and screen systems that block leaves, pine needles, and shingle grit while letting water through. They will not make gutters 100% maintenance-free, but they end the twice-a-year cleaning and dramatically cut clogs and overflow.' },
      { q: 'Do I need new gutters or just a repair?', a: 'Sagging, separated seams, peeling paint or rust, water spilling over the front in rain, or gutters pulling away from the fascia usually mean replacement is the smarter fix. Isolated issues — a loose hanger or a clogged downspout — we simply repair. We tell you honestly which one you are looking at.' },
      { q: 'Can bad gutters really damage my foundation?', a: 'Yes. Gutters that overflow or dump water at the base of the house send thousands of gallons against your foundation, leading to basement leaks, cracks, and erosion. Correctly pitched gutters and extended downspouts are one of the cheapest ways to protect the most expensive part of your home.' },
      { q: 'What size gutters do I need?', a: 'Most homes are well served by 5-inch K-style gutters, but larger roofs, steep pitches, or homes that see heavy runoff often need 6-inch gutters with bigger downspouts. We size the system to your actual roof area and rainfall so it never overflows.' },
      { q: 'Do you repair the soffit and fascia too?', a: 'Yes. The fascia board gutters hang from and the soffit behind it are often where hidden rot starts. We inspect and replace any damaged wood before hanging new gutters, so they are mounted to something solid.' },
      { q: 'How long does a gutter installation take?', a: 'Most homes are completed in a single day. Because we form the gutters on-site, there is no waiting on custom orders — we measure, form, and hang in one visit.' },
    ],
    keywords: ['seamless gutters NJ', 'gutter installation New Jersey', 'gutter guards Bergen County'],
  },
  {
    slug: 'windows-doors',
    name: 'Windows & Doors',
    short: 'Energy-efficient windows & entry doors',
    blurb:
      "Energy-efficient replacement windows and entry, patio, and storm doors — professionally installed and flashed to seal out drafts, cut utility bills, and refresh your home's whole look.",
    intro:
      'Old windows and doors are where comfort and energy dollars quietly leak out. Lita Construction installs energy-efficient replacement windows and new entry, patio, and storm doors — each one measured, set, and flashed as part of a weather-tight exterior — so your New Jersey home stays warmer in winter, cooler in summer, and quieter year-round.',
    quickAnswer:
      'Lita Construction installs energy-efficient replacement windows and entry, patio, and storm doors — properly measured, insulated, and flashed to seal out drafts and lower energy bills — across Northern & Central New Jersey.',
    features: [
      'Energy-efficient replacement windows',
      'Entry & storm doors',
      'Sliding & French patio doors',
      'Bay & bow windows',
      'Full-frame & insert installs',
      'Trim, capping & weather-sealing',
    ],
    subServices: [
      { name: 'Replacement Windows', description: 'Double-hung, casement, and slider windows with Low-E, argon-filled glass that cut drafts and outside noise.' },
      { name: 'Entry Doors', description: 'Insulated steel and fiberglass entry doors that boost security, curb appeal, and energy efficiency.' },
      { name: 'Patio Doors', description: 'Smooth-gliding sliding and French patio doors that open your home to the backyard and let in light.' },
      { name: 'Bay & Bow Windows', description: 'Statement windows that add space, light, and architectural character to a room.' },
    ],
    process: [
      { title: 'Free in-home measurement', description: 'We measure each opening precisely and talk through styles, glass options, and finishes so quotes are exact — no guesswork, no surprise change orders.' },
      { title: 'Product selection', description: 'Choose window styles, door materials, colors, and hardware from samples, with energy ratings explained in plain terms.' },
      { title: 'Careful removal & inspection', description: 'Old units come out cleanly, and we inspect the rough opening for hidden rot or water damage before the new one goes in.' },
      { title: 'Set, insulate & flash', description: 'Each window and door is leveled, shimmed, insulated around the frame, and flashed so no air or water sneaks past the edges — the step cheap installs skip.' },
      { title: 'Trim, seal & walkthrough', description: 'We finish the interior and exterior trim, caulk and weather-seal, test every sash and lock, and clean up before we call it done.' },
    ],
    materials: [
      { name: 'Vinyl Replacement Windows', bestFor: 'Most homeowners — best value & efficiency', lifespan: '20–30 years', notes: 'Low-E, argon-filled, virtually maintenance-free; wide color range.' },
      { name: 'Fiberglass Windows', bestFor: 'Premium durability & large openings', lifespan: '30+ years', notes: 'Stronger and more stable than vinyl, holds paint, at a higher upfront cost.' },
      { name: 'Steel Entry Doors', bestFor: 'Security & budget-conscious upgrades', lifespan: '20–30 years', notes: 'Strong, insulated, and the best value in an entry door.' },
      { name: 'Fiberglass Entry Doors', bestFor: 'A wood look without the maintenance', lifespan: '30+ years', notes: 'Dent- and rot-resistant, and can be stained to mimic real wood grain.' },
    ],
    faqs: [
      { q: 'Will new windows really lower my energy bills?', a: 'Yes. Modern Low-E, argon-filled, double-pane windows dramatically reduce the heat you lose in winter and gain in summer. Combined with proper insulation and flashing around the frame, most homeowners notice fewer drafts, a more even temperature, and lower heating and cooling costs.' },
      { q: 'How long does it take to replace windows?', a: 'Most whole-home window projects take one to three days depending on the number of openings. Individual windows are typically removed and replaced within an hour or two each, and we seal every opening the same day so your home is never left exposed.' },
      { q: 'What is the difference between insert and full-frame replacement?', a: 'An insert (pocket) replacement fits a new window inside your existing frame — faster and less invasive when the frame is sound. A full-frame replacement removes everything down to the rough opening, which we recommend when there is rot or you are changing the window size. We inspect and tell you which your home needs.' },
      { q: 'Which is better, steel or fiberglass entry doors?', a: 'Steel doors offer the best security and value and are a great choice for most homes. Fiberglass costs more but resists dents and rot, insulates a bit better, and can be finished to look like real wood — ideal for a front door you want to make a statement.' },
      { q: 'Do you install patio and sliding doors?', a: 'Yes. We install sliding and French patio doors, including replacing old, drafty sliders that stick or leak. Each is set level and flashed so it glides smoothly and seals tight against the weather.' },
      { q: 'Are your windows and doors energy-efficient enough for NJ winters?', a: 'Absolutely. We install units with Low-E glass and insulated frames rated for the Northeast climate, and — just as important — we insulate and flash around every frame, since even a great window performs poorly if it is installed with gaps.' },
      { q: 'Do you handle the trim and cleanup?', a: 'Yes. We finish both the interior and exterior trim, cap exposed wood in aluminum where needed, caulk and weather-seal every unit, and haul away your old windows and doors so there is nothing left for you to deal with.' },
    ],
    keywords: ['replacement windows NJ', 'entry door installation New Jersey', 'energy efficient windows Bergen County'],
  },
  {
    slug: 'decks-pavers',
    name: 'Decks & Pavers',
    short: 'Decks, paver patios & outdoor living',
    blurb:
      'Custom decks, paver patios, walkways, and retaining walls that turn your backyard into real living space — engineered on a proper base to stay level, safe, and beautiful for decades.',
    intro:
      "The right outdoor space adds livable square footage and real value to a New Jersey home. Lita Construction designs and builds custom decks, paver patios, walkways, steps, and retaining walls — pairing our masonry and carpentry crews to build outdoor living areas on a properly engineered base, so they stay level, drain right, and hold up to years of freeze-thaw seasons.",
    quickAnswer:
      'Lita Construction designs and builds custom decks, paver patios, walkways, steps, and retaining walls — engineered on a compacted, well-drained base to stay level for decades — across Northern & Central New Jersey.',
    features: [
      'Custom deck design & build',
      'Paver patios & walkways',
      'Retaining walls & steps',
      'Outdoor kitchens & fire pits',
      'Paver driveways',
      'Sealing & paver restoration',
    ],
    subServices: [
      { name: 'Custom Decks', description: 'Pressure-treated, composite, and hardwood decks built to code with railings, stairs, and built-in seating.' },
      { name: 'Paver Patios & Walkways', description: 'Interlocking paver patios and paths laid on a compacted base so they stay flat and shift-free.' },
      { name: 'Retaining Walls & Steps', description: 'Engineered segmental and natural-stone walls that hold back grade and create usable, terraced space.' },
      { name: 'Outdoor Living Features', description: 'Fire pits, seat walls, paver driveways, and outdoor-kitchen bases that finish the space.' },
    ],
    process: [
      { title: 'Design & free estimate', description: 'We walk your yard, talk through how you want to use the space, and lay out a design with materials and an itemized price before any digging begins.' },
      { title: 'Layout & permits', description: 'We stake the layout, confirm grades and drainage, and pull any township permit your deck or wall requires so it is built to code and inspected.' },
      { title: 'Excavation & base prep', description: 'The most important step: we excavate and compact a proper sub-base for pavers, or set footings below the frost line for decks and walls — this is what keeps everything from sinking or heaving.' },
      { title: 'Build & installation', description: "Decking, pavers, walls, and steps go in by hand, with cuts, borders, and railings detailed cleanly and built to last through NJ's freeze-thaw cycles." },
      { title: 'Polymeric sand, seal & cleanup', description: 'Paver joints are locked with polymeric sand and sealed as needed, the site is cleaned and graded, and we walk the finished space with you.' },
    ],
    materials: [
      { name: 'Concrete Pavers', bestFor: 'Patios, walkways & driveways — best all-around value', lifespan: '25+ years', notes: 'Huge range of styles and colors; individual pavers can be lifted and reset if ever needed.' },
      { name: 'Natural Stone', bestFor: 'Premium, one-of-a-kind patios & walls', lifespan: 'Lifetime', notes: 'Bluestone and fieldstone for a timeless look, at a higher material cost.' },
      { name: 'Composite Decking', bestFor: 'Low-maintenance decks', lifespan: '25–30 years', notes: 'Never needs staining and resists fading and rot; installed over a treated frame.' },
      { name: 'Pressure-Treated Wood', bestFor: 'Budget-friendly decks', lifespan: '15–20 years', notes: 'Lowest upfront cost; needs periodic sealing to reach its full lifespan.' },
    ],
    faqs: [
      { q: 'Should I choose a deck or a paver patio?', a: 'It comes down to your yard and how you will use it. Decks work best over sloped or uneven ground and for elevated spaces off a second story, while paver patios suit level areas and outdoor kitchens or fire pits. Many homes benefit from both — we recommend what fits your grade, budget, and vision.' },
      { q: 'How long does a paver patio last?', a: 'A paver patio built on a properly excavated and compacted base lasts 25 years or more. The base is everything — pavers installed on a poor sub-base sink and shift within a couple of seasons, which is exactly the failure we build to avoid.' },
      { q: 'Composite or wood decking — which is better?', a: 'Composite costs more upfront but never needs staining, will not rot or splinter, and easily lasts 25–30 years — the lower-maintenance, longer-term choice. Pressure-treated wood is budget-friendly and can look great, but needs periodic sealing. We build both and help you weigh the trade-offs.' },
      { q: 'Do I need a permit for a deck or retaining wall in NJ?', a: 'Usually, yes. Most NJ towns require a permit for decks and for retaining walls over a certain height (often around 4 feet). As a licensed contractor we handle the permit and inspections as part of the job, so it is built to code and will not be a problem when you sell.' },
      { q: 'Will my pavers shift or sink over time?', a: 'Not when they are installed correctly. We excavate to the right depth, build up a compacted gravel sub-base, and lock the joints with polymeric sand. That base is what prevents the sinking, heaving, and weed growth you see with poorly installed patios.' },
      { q: 'Can you build a retaining wall on a sloped yard?', a: 'Yes — that is one of the best ways to reclaim an unusable slope. We build engineered segmental-block and natural-stone retaining walls with proper drainage behind them, turning a hill into level, terraced, usable space while controlling erosion.' },
      { q: 'What is the best time of year for deck and paver work in NJ?', a: 'Spring through fall is ideal, since base compaction and concrete footings cure best above freezing. We schedule estimates year-round and book projects for the first suitable weather window.' },
    ],
    keywords: ['paver patio NJ', 'deck builder New Jersey', 'retaining wall Bergen County'],
  },
  {
    slug: 'painting',
    name: 'Exterior Painting',
    short: 'Exterior painting & surface prep',
    blurb:
      "Long-lasting exterior painting done the right way — thorough prep, premium coatings, and clean lines that protect your siding and trim from NJ weather while transforming your home's look.",
    intro:
      "A quality exterior paint job is equal parts protection and transformation — but it only lasts if the prep is done right. Lita Construction power-washes, scrapes, sands, primes, and caulks before a brush ever touches your home, then finishes with premium exterior coatings that stand up to New Jersey sun, rain, and freeze-thaw — so the color you pick still looks sharp years down the road.",
    quickAnswer:
      'Lita Construction provides exterior house painting with thorough prep — washing, scraping, priming, and caulking — followed by premium weather-resistant coatings on siding, trim, and doors across Northern & Central New Jersey.',
    features: [
      'Exterior house painting',
      'Trim, soffit & fascia painting',
      'Deck & fence staining',
      'Power washing & prep',
      'Wood repair & priming',
      'Caulking & weather-sealing',
    ],
    subServices: [
      { name: 'Exterior House Painting', description: 'Full-body repaints on wood, stucco, fiber-cement, and previously painted siding with premium exterior coatings.' },
      { name: 'Trim & Detail Painting', description: 'Crisp lines on trim, soffit, fascia, shutters, and front doors that make the whole house look new.' },
      { name: 'Deck & Fence Staining', description: 'Cleaning, brightening, and staining or sealing that protects wood decks and fences from graying and rot.' },
      { name: 'Prep & Wood Repair', description: 'Power washing, scraping, sanding, priming, and replacing rotted trim so paint bonds and lasts.' },
    ],
    process: [
      { title: 'Free estimate & color consultation', description: 'We assess the surfaces, note any repairs, and help you choose colors and sheens, with an itemized quote that spells out exactly what gets painted.' },
      { title: 'Wash & surface prep', description: 'We power-wash away dirt, chalk, and mildew, then scrape and sand loose or peeling paint — the step that decides whether a paint job lasts three years or ten.' },
      { title: 'Repair, prime & caulk', description: 'Rotted trim is repaired, bare wood and stains are spot- or fully primed, and gaps are caulked so the finish coat seals out water.' },
      { title: 'Premium coating application', description: 'We apply premium exterior paint or stain by brush, roller, and spray as each surface calls for, in even coats with clean, masked-off lines.' },
      { title: 'Final inspection & cleanup', description: 'We walk every elevation with you for touch-ups, remove all masking, and leave the property cleaner than we found it.' },
    ],
    materials: [
      { name: '100% Acrylic Latex', bestFor: 'Most siding & trim — the exterior standard', lifespan: '7–10 years', notes: 'Flexible, fade- and mildew-resistant, and breathes so it will not trap moisture.' },
      { name: 'Elastomeric Coating', bestFor: 'Stucco & masonry surfaces', lifespan: '10+ years', notes: 'A thick, flexible film that bridges hairline cracks and seals out water.' },
      { name: 'Solid & Semi-Transparent Stain', bestFor: 'Decks, fences & natural wood', lifespan: '3–5 years', notes: 'Penetrates and protects wood; semi-transparent shows the grain, solid gives more coverage.' },
      { name: 'Primer (oil & bonding)', bestFor: 'Bare wood, stains & slick surfaces', lifespan: 'Base coat', notes: 'The bonding layer that makes the finish coat adhere and last — never skipped in prep.' },
    ],
    faqs: [
      { q: 'How long will an exterior paint job last?', a: 'With proper prep and premium 100% acrylic paint, an exterior job on most NJ homes lasts 7–10 years. The single biggest factor is not the paint — it is the prep. Washing, scraping, sanding, priming, and caulking are what determine whether the finish holds or peels early, which is why we never rush that stage.' },
      { q: 'Why does prep matter so much?', a: 'Paint can only bond to a clean, sound, dry surface. If you paint over dirt, chalk, mildew, or peeling old paint, the new coat fails no matter how good it is. We power-wash, scrape, sand, prime, and caulk first — that is the difference between a job that lasts a decade and one that is peeling in two years.' },
      { q: 'What time of year can you paint exteriors in NJ?', a: 'Exterior painting season in New Jersey generally runs spring through fall, when temperatures and humidity let the paint cure properly — most premium exterior paints need surfaces and air above roughly 50°F. We watch the forecast closely and will not paint in conditions that compromise the finish.' },
      { q: 'Do you repair rotted wood before painting?', a: 'Yes, and we will not paint over it. Painting over rot just hides a growing problem. We repair or replace damaged trim, fascia, and siding and prime bare wood before any finish coat goes on, so you are protecting sound material.' },
      { q: 'Can you paint or stain my deck and fence too?', a: 'Absolutely. We clean and brighten the wood, make any repairs, and apply solid or semi-transparent stain or sealer to protect it from graying, cracking, and rot. Deck and fence coatings wear faster than walls, so we tell you honestly how often to expect a refresh.' },
      { q: 'Do you help with choosing colors?', a: 'Yes. We walk you through color and sheen options that suit your home style and hold up outdoors, and can provide samples so you see how a color reads on your actual house and light before committing.' },
      { q: 'How do you protect my landscaping and property?', a: 'We mask windows, doors, and hardware, cover plants and walkways, and control overspray carefully. At the end of each day and at the finish, we remove masking and clean the site — leaving your property tidy, not covered in tape and drips.' },
    ],
    keywords: ['exterior painting NJ', 'house painters New Jersey', 'exterior painter Bergen County'],
  },
]

/** Look up a service by slug (used to resolve group members to full Service records). */
export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)

/**
 * The public service menu, organized into the four trade groups shown across
 * the site (nav dropdown, /services hub, homepage grid, footer). Only these
 * services appear in menus; older trades (roofing/siding/masonry landing pages,
 * gutters, windows-doors, painting) still have live /services/:slug pages for
 * SEO but are intentionally left out of the navigation.
 *
 * A slug may appear in more than one group (Commercial Roofing is listed under
 * both Roofing and Exterior).
 */
export type ServiceGroup = {
  name: string
  /** Slugs of services in this group, in display order. */
  slugs: string[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    name: 'Roofing',
    slugs: ['roof-repair', 'roof-replacement', 'commercial-roofing', 'residential-roofing'],
  },
  {
    name: 'Siding',
    slugs: ['siding-replacement', 'siding-installation', 'siding-repair'],
  },
  {
    name: 'Masonry',
    slugs: ['masonry-work', 'chimney-services'],
  },
  {
    name: 'Exterior',
    slugs: ['decks-pavers', 'commercial-roofing'],
  },
]

/** Flat, de-duplicated list of every service slug that appears in the menus. */
export const menuServiceSlugs = Array.from(new Set(serviceGroups.flatMap((g) => g.slugs)))

/**
 * Homepage services grid — the full range of work, shown as cards.
 * The three core trades (roofing/siding/masonry) deep-link to their rich
 * service pages; the additional trades link to the portfolio, where their
 * completed projects live.
 */
export type HomeService = {
  key: string
  name: string
  blurb: string
  features: string[]
  to: string
  icon: string
}

/**
 * Homepage services grid / footer / quote-form list — derived from the four
 * trade groups so it always matches the nav and /services hub. A service in
 * more than one group (Commercial Roofing) appears once. `icon` is left blank;
 * ServiceGlyph resolves each slug to its project photo.
 */
export const homeServices: HomeService[] = menuServiceSlugs
  .map((slug) => serviceBySlug(slug))
  .filter((s): s is Service => Boolean(s))
  .map((s) => ({
    key: s.slug,
    name: s.name,
    blurb: s.blurb,
    features: s.features.slice(0, 4),
    to: `/services/${s.slug}`,
    icon: '',
  }))

/** Headline trust stats reused across pages. */
export const stats = [
  { n: '35+', l: 'Years of Experience' },
  { n: '500+', l: 'NJ Projects Completed' },
  { n: `${serviceAreas.length}`, l: 'Counties Served' },
  { n: '100%', l: 'Satisfaction Focused' },
] as const

/** Project portfolio — categorized for the gallery page (image paths are placeholders). */
export type Project = {
  title: string
  category: 'Roofing' | 'Siding' | 'Masonry'
  location: string
  blurb: string
}

export const projects: Project[] = [
  { title: 'Full GAF Roof Replacement', category: 'Roofing', location: 'Paramus, NJ', blurb: 'Complete tear-off and architectural shingle install on a colonial home.' },
  { title: 'Storm Damage Roof Repair', category: 'Roofing', location: 'Hackensack, NJ', blurb: 'Emergency leak repair and shingle replacement after a major storm.' },
  { title: 'Commercial Flat Roof', category: 'Roofing', location: 'Clifton, NJ', blurb: 'Durable flat-roof system installed for a commercial building.' },
  { title: 'Vinyl Siding Makeover', category: 'Siding', location: 'Englewood, NJ', blurb: 'Full exterior refresh with premium vinyl siding and seamless gutters.' },
  { title: 'Fiber-Cement Exterior', category: 'Siding', location: 'Montclair, NJ', blurb: 'High-end fiber-cement siding with a natural wood-look finish.' },
  { title: 'Window & Door Replacement', category: 'Siding', location: 'Teaneck, NJ', blurb: 'Energy-efficient windows and doors that sealed out drafts.' },
  { title: 'Chimney Rebuild', category: 'Masonry', location: 'Bergenfield, NJ', blurb: 'Full chimney rebuild restoring safety and curb appeal.' },
  { title: 'Paver Patio & Walkway', category: 'Masonry', location: 'Wayne, NJ', blurb: 'Custom paver patio and walkway for a backyard living space.' },
  { title: 'Retaining Wall & Steps', category: 'Masonry', location: 'Fort Lee, NJ', blurb: 'Engineered retaining wall and stone steps on a sloped lot.' },
]

/** Financing / value props for the Financing page. */
export const financing = {
  intro:
    'A new roof, siding, or masonry project is a major investment in your home — and it should never be out of reach. Lita Construction helps make it affordable with flexible options and honest, no-pressure pricing.',
  options: [
    { title: 'Flexible Payment Plans', body: 'Spread the cost of your project over time with manageable monthly payments instead of one large upfront sum.' },
    { title: 'Free, Itemized Estimates', body: 'Know exactly what you are paying for. Every estimate is detailed and transparent — no hidden fees, no surprises.' },
    { title: 'Insurance Claim Assistance', body: 'Dealing with storm damage? We help you navigate the insurance claim process and document the work properly.' },
    { title: 'Honest, Competitive Pricing', body: 'We deliver premium workmanship at a fair price — the value our customers say is "miles away the best."' },
  ],
}

export const testimonials = [
  {
    quote:
      'This company is by far the best in business. The price was by miles away the best and they did a very clean, professional job.',
    name: 'Arber T.',
    location: 'Paramus, NJ',
    service: 'Roofing',
  },
  {
    quote:
      'Lita Construction replaced our roof and siding ahead of schedule. The crew was respectful, the cleanup was spotless, and the warranty gave us real peace of mind.',
    name: 'Maria S.',
    location: 'Hackensack, NJ',
    service: 'Roofing & Siding',
  },
  {
    quote:
      'Our chimney was crumbling for years. Johnny and his team rebuilt it beautifully and stood behind every detail. Highly recommend to any homeowner in Bergen County.',
    name: 'Robert D.',
    location: 'Englewood, NJ',
    service: 'Masonry',
  },
  {
    quote:
      'From the first estimate to the final cleanup, everything was professional and on schedule. Our new siding completely transformed the look of our house. Couldn’t be happier.',
    name: 'Jennifer M.',
    location: 'Montclair, NJ',
    service: 'Siding',
  },
  {
    quote:
      'Honest, fair, and incredibly skilled. They explained every option without any pressure and the finished roof looks fantastic. A genuine family business you can trust.',
    name: 'David K.',
    location: 'Teaneck, NJ',
    service: 'Roofing',
  },
  {
    quote:
      'They built us a gorgeous paver patio that has become our favorite part of the house. The crew was respectful, tidy, and clearly took pride in their work.',
    name: 'Sandra L.',
    location: 'Wayne, NJ',
    service: 'Masonry',
  },
] as const

export const faqs = [
  {
    q: 'What areas of New Jersey does Lita Construction serve?',
    a: 'Lita Construction LLC serves Northern and Central New Jersey, including Bergen, Passaic, Essex, Hudson, Morris, Union, Middlesex, and Sussex Counties. We also take on select projects in New York. Call (201) 540-7772 to confirm coverage for your town.',
  },
  {
    q: 'Is Lita Construction licensed and insured?',
    a: 'Yes. Lita Construction LLC is fully insured and holds NJ Home Improvement Contractor License #13VH11703800. We are also GAF-certified, which lets us offer a 25-year warranty on both labor and materials.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Absolutely. We provide free, no-obligation estimates for all roofing, siding, and masonry projects. Call (201) 540-7772 or request a quote online and we will schedule a visit at your convenience.',
  },
  {
    q: 'How long has Lita Construction been in business?',
    a: 'Lita Construction was established in New Jersey in 2004 by John Lita, who first learned the trade back in 1991 on the rooftops of Old Brooklyn — bringing over 35 years of hands-on roofing, siding, and masonry experience to every project. Today it is run by John alongside his brothers Gus and Max and his son John Jr.',
  },
  {
    q: 'What roofing warranty do you provide?',
    a: 'As a GAF-certified contractor, we offer a 25-year manufacturer warranty covering both labor and materials on qualifying roof installations — among the strongest protection available to NJ homeowners.',
  },
  {
    q: 'How much does a new roof cost in New Jersey?',
    a: 'Roof replacement costs vary based on size, pitch, materials, and the condition of the existing roof. Most NJ homeowners invest between $8,000 and $25,000. We provide a detailed, itemized free estimate so you know exactly what to expect — with no surprises.',
  },
] as const
