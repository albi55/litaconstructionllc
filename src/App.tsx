import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { PromoBar } from './components/PromoBar'
import { Footer } from './components/Footer'
import { MobileCallBar } from './components/MobileCallBar'
import { Home } from './pages/Home'
import { ServicesHub } from './pages/ServicesHub'
import { ServicePage } from './pages/ServicePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServiceAreasPage } from './pages/ServiceAreasPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { FinancingPage } from './pages/FinancingPage'
import { FaqPage } from './pages/FaqPage'
import { ContactPage } from './pages/ContactPage'
import { NotFound } from './pages/NotFound'

/** Scrolls to top on route change, or to the hash target when present. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-cloud-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <PromoBar />
      <Header />
      <main id="main" className="pb-16 lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
