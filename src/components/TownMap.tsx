import { PinIcon } from './icons'

/**
 * Full-width satellite map centred on one town, closing out a town page.
 *
 * Uses the same keyless Google Maps embed as the contact page, so there is no
 * API key to manage and no extra script to load. The iframe is lazy so it never
 * competes with the page content for bandwidth.
 */
export function TownMap({
  town,
  county,
  state = 'NJ',
}: {
  /** Display name of the town, e.g. 'Teaneck' */
  town: string
  /** County label for the badge, with or without the 'County' suffix. */
  county?: string
  /** Two-letter state code used in the map query. */
  state?: string
}) {
  const query = encodeURIComponent(`${town}, ${state}`)
  const countyLabel = county
    ? county.endsWith('County')
      ? county
      : `${county} County`
    : undefined

  return (
    <section aria-label={`Map of ${town}, ${state}`} className="relative">
      <iframe
        title={`Lita Construction service area — ${town}, ${state}`}
        src={`https://maps.google.com/maps?q=${query}&t=k&z=13&ie=UTF8&iwloc=&output=embed`}
        className="block h-[380px] w-full border-0 sm:h-[460px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="pointer-events-none absolute left-1/2 top-6 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 shadow-card backdrop-blur-sm">
        <PinIcon className="h-4 w-4 shrink-0 text-brand-600" />
        <span className="text-xs font-bold uppercase tracking-wider text-ink-900">
          Serving {town}
          {countyLabel ? ` · ${countyLabel}` : ''}
        </span>
      </div>
    </section>
  )
}
