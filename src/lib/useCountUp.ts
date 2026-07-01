import { useEffect, useRef, useState } from 'react'

/**
 * Counts a number up from 0 → `end` the first time the element scrolls into
 * view. Returns a ref to attach and the current display value.
 *
 * Hardened like useReveal: if IntersectionObserver is missing, the element is
 * already visible on mount, or the user prefers reduced motion, it jumps
 * straight to the final value instead of animating.
 */
export function useCountUp<T extends HTMLElement = HTMLDivElement>(
  end: number,
  durationMs = 1600,
) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const run = () => {
      if (started.current) return
      started.current = true

      if (prefersReduced) {
        setValue(end)
        return
      }

      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs)
        // easeOutCubic for a natural deceleration
        const eased = 1 - Math.pow(1 - t, 3)
        setValue(Math.round(eased * end))
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    if (typeof IntersectionObserver === 'undefined') {
      run()
      return
    }

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(el)

    const failsafe = window.setTimeout(run, 2500)
    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [end, durationMs])

  return { ref, value }
}
