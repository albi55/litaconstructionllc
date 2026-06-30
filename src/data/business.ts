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

export type Service = {
  slug: string
  name: string
  short: string
  blurb: string
  features: string[]
  keywords: string[]
}

export const services: Service[] = [
  {
    slug: 'roofing',
    name: 'Roofing',
    short: 'Roof replacement, repair & new installs',
    blurb:
      'GAF-certified roof installation, replacement, and repair built to last decades. Backed by a 25-year warranty on labor and materials — the strongest protection in the industry.',
    features: [
      'Full roof replacement & new construction',
      'Storm damage & leak repair',
      'GAF architectural shingles',
      'Flat & commercial roofing',
      'Skylight installation',
      'Roof inspections & free estimates',
    ],
    keywords: ['roofing contractor NJ', 'roof replacement New Jersey', 'GAF certified roofer Bergen County'],
  },
  {
    slug: 'siding',
    name: 'Siding',
    short: 'Vinyl, fiber-cement & exterior siding',
    blurb:
      'Protect and transform your home with expertly installed siding. From vinyl to fiber-cement, we deliver weather-tight, energy-efficient exteriors that boost curb appeal and value.',
    features: [
      'Vinyl & fiber-cement siding',
      'Siding repair & replacement',
      'Soffit, fascia & trim',
      'Seamless gutter installation',
      'Window & door installation',
      'Energy-efficient insulation',
    ],
    keywords: ['siding contractor NJ', 'siding installation New Jersey', 'vinyl siding Bergen County'],
  },
  {
    slug: 'masonry',
    name: 'Masonry',
    short: 'Chimneys, pavers, foundations & stone',
    blurb:
      'Old-world craftsmanship meets modern engineering. Our masonry team builds and restores chimneys, walkways, patios, retaining walls, and foundations that stand the test of time.',
    features: [
      'Chimney repair & rebuilds',
      'Brick & stone work',
      'Paver patios & walkways',
      'Retaining walls & steps',
      'Foundation repair & waterproofing',
      'Concrete & hardscaping',
    ],
    keywords: ['masonry contractor NJ', 'chimney repair New Jersey', 'paver patio Bergen County'],
  },
]

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
