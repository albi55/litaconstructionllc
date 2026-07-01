import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { homeServices } from '../data/business'
import { ArrowIcon, CheckIcon } from './icons'

/**
 * Multi-card, auto-advancing carousel for the services grid.
 *
 * - Shows several cards per view (3 desktop / 2 tablet / 1 mobile) and slides
 *   one card at a time via a translateX transform with the site's signature
 *   ease. This is the modern "peek" carousel, not a one-huge-card slideshow.
 * - Autoplay advances every 4.5s, pauses on hover/focus, and is disabled under
 *   prefers-reduced-motion so nothing moves for motion-sensitive users.
 * - Arrows + progress dots for manual control; swipe on touch.
 */
export function ServicesCarousel() {
  const cards = homeServices
  const count = cards.length

  const [perView, setPerView] = useState(3)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const touchX = useRef<number | null>(null)

  // Responsive cards-per-view.
  useEffect(() => {
    const mqTablet = window.matchMedia('(min-width: 640px)')
    const mqDesktop = window.matchMedia('(min-width: 1024px)')
    const sync = () => setPerView(mqDesktop.matches ? 3 : mqTablet.matches ? 2 : 1)
    sync()
    mqTablet.addEventListener('change', sync)
    mqDesktop.addEventListener('change', sync)
    return () => {
      mqTablet.removeEventListener('change', sync)
      mqDesktop.removeEventListener('change', sync)
    }
  }, [])

  // Respect reduced-motion (also gates autoplay).
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // Number of discrete slide positions (so the last page ends flush, no gap).
  const maxIndex = Math.max(0, count - perView)
  const pages = maxIndex + 1

  // Keep index valid when perView changes.
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + pages) % pages),
    [pages],
  )
  const goTo = (i: number) => setIndex(Math.max(0, Math.min(i, maxIndex)))

  // Autoplay.
  useEffect(() => {
    if (paused || reduced || pages <= 1) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % pages), 4500)
    return () => window.clearInterval(id)
  }, [paused, reduced, pages])

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  // Each card occupies (100 / perView)% of the track; slide by one card width.
  const cardBasis = useMemo(() => `${100 / perView}%`, [perView])
  const translate = `translateX(-${index * (100 / perView)}%)`

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Our services"
    >
      {/* Viewport (overflow clipped; small negative margin so shadows aren't cut) */}
      <div
        className="overflow-hidden px-1 -mx-1 py-1"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`flex ${reduced ? '' : 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]'}`}
          style={{ transform: translate }}
        >
          {cards.map((service, i) => (
            <div
              key={service.key}
              className="shrink-0 px-3"
              style={{ flexBasis: cardBasis, maxWidth: cardBasis }}
              aria-hidden={i < index || i >= index + perView}
            >
              <Link
                to={service.to}
                tabIndex={i < index || i >= index + perView ? -1 : 0}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cloud-200 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-600/40 hover:shadow-card"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-600 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between">
                  <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-cloud-100 ring-1 ring-cloud-200 transition-all duration-300 group-hover:ring-brand-600/30">
                    <img
                      src={service.icon}
                      alt={`${service.name} icon`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={256}
                      height={256}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </span>
                  <span className="font-display text-6xl font-black leading-none text-cloud-200 transition-colors group-hover:text-brand-600/15">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-2xl font-bold text-ink-900">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cloud-600">{service.blurb}</p>

                <ul className="mt-6 space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-800">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {f}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold uppercase tracking-wide text-brand-600">
                  Explore {service.name}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Controls — arrows + progress dots */}
      {pages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            onClick={() => go(-1)}
            aria-label="Previous services"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cloud-300 bg-white text-ink-900 shadow-soft transition hover:border-brand-600 hover:text-brand-600"
          >
            <ArrowIcon className="h-5 w-5 rotate-180" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-7 bg-brand-600' : 'w-2 bg-cloud-300 hover:bg-cloud-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next services"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cloud-300 bg-white text-ink-900 shadow-soft transition hover:border-brand-600 hover:text-brand-600"
          >
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
