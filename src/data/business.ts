/**
 * Single source of truth for all business data.
 * Update real details here and they propagate across the whole site + SEO schema.
 */

export const business = {
  name: 'Lita Construction LLC',
  shortName: 'Lita Construction',
  tagline: 'Build Your Vision With Confidence',
  founded: 2004,
  yearsExperience: '25+',
  founder: 'Johnny Lita',
  phone: '(201) 540-7772',
  phoneHref: 'tel:+12015407772',
  email: 'info@litaconstructionllc.com', // placeholder — update with real email
  emailHref: 'mailto:info@litaconstructionllc.com',
  license: '13VH11703800',
  licenseLabel: 'NJ Lic. #13VH11703800',
  url: 'https://litaconstructionllc.com',
  hours: 'Mon–Sat, 7:00 AM – 6:00 PM',
  certifications: ['GAF Certified', 'Fully Insured', '25-Year Workmanship Warranty'],
} as const

/** Scrolling promo / announcement bar messages (edit freely). */
export const promoMessages = [
  '🔥 LIMITED-TIME OFFER — Free roof inspection with every estimate this season',
  '⭐ Family-owned & trusted in New Jersey since 2004',
  '✅ GAF Certified · Fully Insured · NJ Lic. #13VH11703800',
  '💲 Flexible financing available — ask about easy monthly payments',
  '🛡️ 25-Year Warranty on labor & materials — the strongest protection in the industry',
  '📞 Call (201) 540-7772 for a FREE, no-obligation estimate today',
  '🏆 Serving Bergen, Passaic, Essex, Morris & 5 more NJ counties',
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

export const homeServices: HomeService[] = [
  {
    key: 'roofing',
    name: 'Roofing',
    blurb: services[0].blurb,
    features: services[0].features.slice(0, 4),
    to: '/services/roofing',
    icon: '/services/roofing-icon.png',
  },
  {
    key: 'siding',
    name: 'Siding',
    blurb: services[1].blurb,
    features: services[1].features.slice(0, 4),
    to: '/services/siding',
    icon: '/services/siding-icon.png',
  },
  {
    key: 'masonry',
    name: 'Masonry',
    blurb: services[2].blurb,
    features: services[2].features.slice(0, 4),
    to: '/services/masonry',
    icon: '/services/masonry-icon.png',
  },
  {
    key: 'gutters',
    name: 'Gutters',
    blurb: services[3].blurb,
    features: services[3].features.slice(0, 4),
    to: '/services/gutters',
    icon: '',
  },
  {
    key: 'windows-doors',
    name: 'Windows & Doors',
    blurb: services[4].blurb,
    features: services[4].features.slice(0, 4),
    to: '/services/windows-doors',
    icon: '',
  },
  {
    key: 'decks-pavers',
    name: 'Decks & Pavers',
    blurb: services[5].blurb,
    features: services[5].features.slice(0, 4),
    to: '/services/decks-pavers',
    icon: '',
  },
  {
    key: 'painting',
    name: 'Exterior Painting',
    blurb: services[6].blurb,
    features: services[6].features.slice(0, 4),
    to: '/services/painting',
    icon: '',
  },
  {
    key: 'renovation',
    name: 'Renovation',
    blurb:
      'Full interior and exterior remodeling that transforms how your home lives and looks — from single rooms to whole-house renovations, finished with meticulous craftsmanship.',
    features: [
      'Whole-home & room remodels',
      'Kitchens & living spaces',
      'Interior & exterior upgrades',
      'Permits handled for you',
    ],
    to: '/projects',
    icon: '/services/renovation-icon.png',
  },
  {
    key: 'bathroom',
    name: 'Bathroom',
    blurb:
      'Modern, functional bathroom remodels done right — from tile and vanities to plumbing and waterproofing, built to look beautiful and last for years.',
    features: [
      'Full bathroom remodels',
      'Tile, tubs & showers',
      'Vanities & fixtures',
      'Waterproofing done right',
    ],
    to: '/projects',
    icon: '/services/bathroom-icon.png',
  },
  {
    key: 'chimney',
    name: 'Chimney',
    blurb:
      'Chimney repair, repointing, and full rebuilds that restore safety, function, and curb appeal — keeping your home protected from the top down.',
    features: [
      'Repointing & crown repair',
      'Full chimney rebuilds',
      'Flashing & leak repair',
      'Free safety inspection',
    ],
    to: '/projects',
    icon: '/services/chimney-icon.png',
  },
]

/** Headline trust stats reused across pages. */
export const stats = [
  { n: '25+', l: 'Years of Experience' },
  { n: '500+', l: 'NJ Projects Completed' },
  { n: '8', l: 'Counties Served' },
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
    a: 'Lita Construction was founded in 2004 by Johnny Lita and is a family-owned business with over 25 years of combined experience in roofing, siding, and masonry across New Jersey.',
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
