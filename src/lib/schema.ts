import { business, serviceAreas, services, faqs } from '../data/business'

/** Reusable JSON-LD builders for SEO + AEO/GEO answer engines. */

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['GeneralContractor', 'RoofingContractor', 'LocalBusiness'],
  '@id': `${business.url}/#business`,
  name: business.name,
  alternateName: business.shortName,
  description:
    'Family-owned roofing, siding, and masonry contractor serving Northern and Central New Jersey since 2004. GAF certified and fully insured.',
  url: business.url,
  telephone: '+1-201-540-7772',
  foundingDate: String(business.founded),
  founder: { '@type': 'Person', name: business.founder },
  slogan: business.tagline,
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US' },
  areaServed: serviceAreas.map((a) => ({ '@type': 'AdministrativeArea', name: `${a}, NJ` })),
  hasCredential: `NJ Home Improvement Contractor License #${business.license}`,
  knowsAbout: ['Roofing', 'Siding', 'Masonry', 'Chimney Repair', 'Foundations', 'Gutters'],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: business.name,
  url: business.url,
}

/** Build a FAQPage schema from any list of Q/A items. */
export function faqSchemaFrom(items: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export const faqSchema = faqSchemaFrom(faqs)

export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug)
  if (!s) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: s.name,
    provider: { '@id': `${business.url}/#business` },
    areaServed: serviceAreas.map((a) => `${a}, NJ`),
    description: s.blurb,
    url: `${business.url}/services/${s.slug}`,
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
