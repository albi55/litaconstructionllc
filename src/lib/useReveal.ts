import { useEffect, useRef } from 'react'

/**
 * Adds `is-visible` to an element the first time it scrolls into view.
 * Pair with the `.reveal` utility class for a staggered fade-up.
 *
 * Hardened so content is NEVER left invisible: falls back to immediate
 * reveal if IntersectionObserver is unavailable, the element is already
 * in view on mount, or after a safety timeout.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => el.classList.add('is-visible')

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return
    }

    // Already in viewport on mount? Reveal immediately.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      show()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)

    // Safety net: never let content stay hidden if observer misfires.
    const failsafe = window.setTimeout(show, 2500)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])

  return ref
}
