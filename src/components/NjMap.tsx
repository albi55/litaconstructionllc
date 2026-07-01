import { njCounties, njViewBox } from '../data/njCounties'

/**
 * Interactive New Jersey county map. Real CC0 geographic paths.
 *
 * Clean, flat treatment — served counties are solid brand-red with crisp thin
 * borders (no glow/halo), the rest are a light neutral. `active` (hovering a
 * county chip) lifts the matching county; hovering the map calls `onHover`.
 */
export function NjMap({
  active,
  onHover,
}: {
  active?: string | null
  onHover?: (name: string | null) => void
}) {
  return (
    <svg
      viewBox={njViewBox}
      className="h-full w-full overflow-visible"
      role="img"
      aria-label="Map of New Jersey highlighting the counties served by Lita Construction"
    >
      {njCounties.map((c, i) => {
        const isActive = active === c.name
        const servedFill = isActive ? '#5f0f18' : '#7d1420'
        const restFill = isActive ? '#dcd8cf' : '#e7e3da'
        return (
          <path
            key={c.name}
            d={c.d}
            fill={c.served ? servedFill : restFill}
            stroke={c.served ? '#ffffff' : '#cfcabf'}
            strokeWidth={c.served ? 0.06 : 0.045}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            onMouseEnter={() => onHover?.(c.name)}
            onMouseLeave={() => onHover?.(null)}
            className={`origin-center transition-[fill,transform] duration-300 motion-reduce:transition-none ${
              c.served ? 'cursor-pointer' : ''
            } ${isActive ? 'scale-[1.03]' : ''}`}
            style={{ animation: `njFade 0.5s ease ${i * 40}ms both` }}
          >
            <title>
              {c.name} County{c.served ? ' — We serve here' : ''}
            </title>
          </path>
        )
      })}

      <style>{`
        @keyframes njFade { from { opacity: 0 } to { opacity: 1 } }
        @media (prefers-reduced-motion: reduce) { svg path { animation: none !important } }
      `}</style>
    </svg>
  )
}
