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
