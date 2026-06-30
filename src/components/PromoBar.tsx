import { business, promoMessages } from '../data/business'
import { PhoneIcon } from './icons'

/**
 * Animated promo / announcement bar.
 * - Slides down on page load.
 * - Messages scroll continuously (marquee) in crisp white text.
 * - Pauses on hover; a red "OFFER" tag and phone CTA sit on either side.
 */
export function PromoBar() {
  const row = [...promoMessages, ...promoMessages]
  return (
    <div className="hidden animate-slide-down overflow-hidden bg-navy-950 text-white md:block">
      <div className="container-x flex h-10 items-center gap-4">
        {/* Left tag */}
        <span className="z-10 flex shrink-0 items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-red">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" aria-hidden="true" />
          Special Offer
        </span>

        {/* Scrolling messages */}
        <div className="group relative flex-1 overflow-hidden">
          <div className="flex w-max animate-promo-marquee gap-10 group-hover:[animation-play-state:paused]">
            {row.map((msg, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-3 whitespace-nowrap text-xs font-semibold text-white"
              >
                {msg}
                <span className="text-brand-400" aria-hidden="true">
                  ◆
                </span>
              </span>
            ))}
          </div>
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-navy-950 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-navy-950 to-transparent" aria-hidden="true" />
        </div>

        {/* Right phone CTA */}
        <a
          href={business.phoneHref}
          className="z-10 hidden shrink-0 items-center gap-2 text-xs font-bold text-white transition-colors hover:text-brand-400 lg:flex"
        >
          <PhoneIcon className="h-3.5 w-3.5" />
          {business.phone}
        </a>
      </div>
    </div>
  )
}
