import { useCallback, useEffect, useRef, useState } from 'react'
import { featuredSlides } from '../data/gallery'
import { ArrowIcon } from './icons'

const slides = featuredSlides(5)

/**
 * Auto-advancing image carousel for "Our Work".
 * - Slides change with a smooth horizontal animation.
 * - Arrows + dots for manual control; pauses on hover; swipe on touch.
 * - Large, clear images so the craftsmanship is visible.
 */
export function WorkSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)
  const count = slides.length

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + count) % count), [count])
  const goTo = (i: number) => setIndex(((i % count) + count) % count)

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 4000)
    return () => window.clearInterval(id)
  }, [paused, count])

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Viewport */}
      <div
        className="relative overflow-hidden rounded-2xl border border-cloud-300 bg-navy-950 shadow-card"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <figure key={s.src} className="relative w-full shrink-0">
              <div className="aspect-[16/9] w-full">
                <img
                  src={encodeURI(s.src)}
                  alt={`${s.category} project by Lita Construction`}
                  className="h-full w-full object-cover"
                  loading={i <= 1 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                />
              </div>
              {/* Caption gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent p-6 pt-16">
                <span className="inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {s.category}
                </span>
              </div>
            </figure>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-soft transition hover:bg-white"
        >
          <ArrowIcon className="h-5 w-5 rotate-180" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-soft transition hover:bg-white"
        >
          <ArrowIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-7 bg-brand-600' : 'w-2 bg-cloud-300 hover:bg-cloud-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
