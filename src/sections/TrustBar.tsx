const items = [
  'GAF Certified Contractor',
  'NJ Licensed #13VH11703800',
  'Fully Insured',
  'Free Estimates',
  '25-Year Warranty',
  'Family Owned Since 2004',
  'Northern & Central NJ',
]

/** Infinite scrolling trust marquee — reinforces credibility without taking space. */
export function TrustBar() {
  const row = [...items, ...items]
  return (
    <section className="border-y border-ink-800 bg-ink-900 py-5" aria-label="Credentials">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-12 pr-12">
          {row.map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-bone-300"
            >
              <span className="h-1.5 w-1.5 rotate-45 bg-amber-500" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee gap-12 pr-12" aria-hidden="true">
          {row.map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-bone-300"
            >
              <span className="h-1.5 w-1.5 rotate-45 bg-amber-500" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
