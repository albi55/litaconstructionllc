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

export type Service = {
  slug: string
  name: string
  short: string
  blurb: string
  /** Longer intro paragraph for the service page hero/body */
  intro: string
  features: string[]
  subServices: SubService[]
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
    faqs: [
      { q: 'How long does a roof replacement take?', a: 'Most residential roof replacements are completed in 1–3 days, depending on the size and complexity of the roof and the weather. We give you a clear timeline up front and keep the job site clean throughout.' },
      { q: 'How do I know if I need a new roof or just a repair?', a: 'If your roof is over 20 years old, has widespread missing or curling shingles, persistent leaks, or sagging, replacement is usually the smarter long-term investment. We offer a free inspection and an honest recommendation — repair if that is genuinely the right call.' },
      { q: 'What roofing materials do you use?', a: 'We specialize in GAF architectural asphalt shingles — a premium, long-lasting system — and also install flat and commercial roofing systems. As a GAF-certified contractor we can offer the 25-year labor-and-materials warranty.' },
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
    faqs: [
      { q: 'Which siding material is best for my home?', a: 'Vinyl is the most cost-effective and low-maintenance choice for most NJ homes, while fiber-cement offers premium durability and a high-end wood-look finish. During your free estimate we walk you through the trade-offs and recommend the best fit for your home and budget.' },
      { q: 'Will new siding lower my energy bills?', a: 'Yes — modern siding with proper insulation and house wrap significantly reduces drafts and heat loss, which can lower heating and cooling costs year-round in New Jersey’s climate.' },
      { q: 'Do you also replace gutters and trim?', a: 'Absolutely. We install seamless gutters, soffit, fascia, and trim as part of a complete, weather-tight exterior — so everything matches and works together.' },
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
    faqs: [
      { q: 'My chimney is cracking — can it be repaired or does it need a rebuild?', a: 'It depends on the extent of the damage. Minor mortar deterioration can be fixed with repointing, while spalling brick, a damaged crown, or structural cracks may require a partial or full rebuild. We inspect it for free and recommend the most cost-effective lasting solution.' },
      { q: 'How long does a paver patio last?', a: 'A properly installed paver patio with a solid base can last 25+ years. We build on a compacted, well-drained foundation so your patio stays level and beautiful for decades.' },
      { q: 'Can you fix a leaking or cracked foundation?', a: 'Yes. We repair foundation cracks, address water intrusion, and apply waterproofing systems to keep your basement dry and your foundation sound.' },
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
