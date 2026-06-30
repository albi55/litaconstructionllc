import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MobileCallBar } from './components/MobileCallBar'
import { Home } from './pages/Home'
import { ServicePage } from './pages/ServicePage'

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
    <div className="grain relative min-h-screen bg-ink-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-amber-500 focus:px-4 focus:py-2 focus:font-bold focus:text-ink-950"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" className="pb-16 lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
