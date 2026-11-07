import { useEffect, useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Seo } from '../../components/Seo'
import { business } from '../../data/business'
import { buildLandingPage, LAYOUTS, type LayoutKey } from '../../data/adLandingPages'
import { captureAdParams } from '../../lib/adTracking'
import { NotFound } from '../NotFound'
import { PageProvider } from './blocks'
import { layoutComponents, LpFooter, MobileActions } from './layouts'

/** Google Ads landing page: /lp/:service/:town */
export function AdLandingPage() {
  const { service = '', town = '' } = useParams<{ service: string; town: string }>()
  const { search, pathname } = useLocation()

  const page = useMemo(() => {
    const built = buildLandingPage(service, town)
    if (!built) return undefined
    // ?layout=… lets the directory preview any layout; ad traffic always gets the assigned one.
    const override = new URLSearchParams(search).get('layout') as LayoutKey | null
    return override && LAYOUTS.includes(override) ? { ...built, layout: override } : built
  }, [service, town, search])

  useEffect(() => {
    captureAdParams(search, pathname)
  }, [search, pathname])

  if (!page) return <NotFound />

  const Layout = layoutComponents[page.layout]
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    serviceType: page.service.name,
    areaServed: { '@type': 'City', name: `${page.town.name}, NJ` },
    provider: {
      '@type': 'GeneralContractor',
      name: business.name,
      telephone: business.phone,
      url: business.url,
    },
  }

  return (
    <PageProvider value={page}>
      <Seo
        title={page.seoTitle}
        description={page.metaDescription}
        path={page.path}
        image={page.heroImage}
        schema={schema}
        noindex
      />
      <div data-layout={page.layout}>
        <Layout />
        <LpFooter />
        <MobileActions />
      </div>
    </PageProvider>
  )
}
