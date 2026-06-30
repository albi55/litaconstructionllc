import { Helmet } from 'react-helmet-async'
import { business } from '../data/business'

type SeoProps = {
  title: string
  description: string
  path?: string
  /** Optional JSON-LD object(s) injected into <head> for this route */
  schema?: object | object[]
  noindex?: boolean
}

/**
 * Per-route SEO: title, meta description, canonical, Open Graph,
 * and optional JSON-LD structured data (for AEO/GEO answer engines).
 */
export function Seo({ title, description, path = '/', schema, noindex }: SeoProps) {
  const url = `${business.url}${path}`
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
