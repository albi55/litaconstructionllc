const items = [
  'GAF Certified Contractor',
  'NJ Licensed #13VH11703800',
  'Fully Insured',
  'Free Estimates',
  '25-Year Warranty',
  'Family Owned Since 2004',
  'Northern & Central NJ',
]

/** Infinite scrolling trust marquee — reinforces credibility. */
export function TrustBar() {
  const row = [...items, ...items]
  return (
    <section className="border-b border-cloud-200 bg-white py-5" aria-label="Credentials">
      <div className="relative flex overflow-hidden">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            className="flex shrink-0 animate-marquee gap-10 pr-10"
            aria-hidden={dup === 1}
          >
            {row.map((item, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-cloud-600"
              >
                <span className="h-2 w-2 rounded-full bg-brand-600" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
