import { useEffect, useState } from 'react'

/**
 * Floating "back to top" button that appears once the user scrolls down.
 * Animated: fades + slides in, hover lift, and a progress ring that fills as
 * the page is scrolled. Sits above the mobile call bar on small screens.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      // Throttle to one update per animation frame for smoothness.
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
        setVisible(scrollTop > 250)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const scrollUp = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  // Progress ring geometry
  const R = 22
  const CIRC = 2 * Math.PI * R

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Scroll back to top"
      className={`group fixed right-5 bottom-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift ring-1 ring-white/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 active:scale-95 sm:h-16 sm:w-16 xl:bottom-8 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {/* Progress ring */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r={R} fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20" />
        <circle
          cx="24"
          cy="24"
          r={R}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-white transition-[stroke-dashoffset] duration-150 ease-out"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC * (1 - progress)}
        />
      </svg>

      {/* Chevron — bobs up gently on hover */}
      <svg
        className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
