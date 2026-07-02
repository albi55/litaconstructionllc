import { Helmet } from 'react-helmet-async'
import { business } from '../data/business'

type SeoProps = {
  title: string
  description: string
  path?: string
  /** Absolute or root-relative image URL for social share previews (og:image / twitter:image). */
  image?: string
  /** Optional JSON-LD object(s) injected into <head> for this route */
  schema?: object | object[]
  noindex?: boolean
}

/**
 * Per-route SEO: title, meta description, canonical, Open Graph,
 * and optional JSON-LD structured data (for AEO/GEO answer engines).
 */
export function Seo({ title, description, path = '/', image, schema, noindex }: SeoProps) {
  const url = `${business.url}${path}`
  const imageUrl = image ? (image.startsWith('http') ? image : `${business.url}${image}`) : undefined
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
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
