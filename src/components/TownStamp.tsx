import { useId } from 'react'

/**
 * Job-site inspection stamp — the signature mark of the service-area pages.
 * A white-backed roundel "pressed" onto the corner of the estimate form:
 * ring text carries the company mark, the center names the town. Pure SVG,
 * inherits its ink color from `currentColor` (set red via text-brand-600).
 *
 * Type is sized so long town names (e.g. "Peapack-Gladstone") wrap to two
 * lines and scale down instead of escaping the inner ring.
 */
export function TownStamp({
  title,
  subtitle,
  className = '',
}: {
  title: string
  subtitle: string
  className?: string
}) {
  const uid = useId()
  const ringPathId = `stamp-ring-${uid}`

  // Split long titles across two lines at the middle-most space or hyphen.
  const upper = title.toUpperCase()
  let lines: string[] = [upper]
  if (upper.length > 9) {
    const breakChars = [...upper].reduce<number[]>((acc, ch, i) => {
      if (ch === ' ' || ch === '-') acc.push(i)
      return acc
    }, [])
    if (breakChars.length > 0) {
      const mid = upper.length / 2
      const at = breakChars.reduce((best, i) => (Math.abs(i - mid) < Math.abs(best - mid) ? i : best))
      lines = [upper.slice(0, at + (upper[at] === '-' ? 1 : 0)), upper.slice(at + 1)]
    }
  }
  const longest = Math.max(...lines.map((l) => l.length))
  // Fit inside the ~86px-wide inner circle; Manrope caps run ≈0.68em wide.
  const titleSize = Math.max(8.5, Math.min(15, 86 / (longest * 0.68)))
  const titleY = lines.length === 2 ? 72 : 79

  return (
    <svg viewBox="0 0 160 160" role="img" aria-label={`${title} — ${subtitle}`} className={className}>
      <defs>
        <path
          id={ringPathId}
          d="M 80 22 A 58 58 0 1 1 79.99 22"
          fill="none"
        />
      </defs>

      {/* Paper backing so the stamp reads on navy and white alike */}
      <circle cx="80" cy="80" r="78" fill="#ffffff" />

      {/* Rings */}
      <circle cx="80" cy="80" r="76" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="80" cy="80" r="71" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="80" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="80"
        cy="80"
        r="41"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1.5 3"
      />

      {/* Orbiting company mark — sized to sit inside the r=58 text circle without self-overlap */}
      <text
        fill="currentColor"
        fontSize="9"
        fontWeight="700"
        letterSpacing="1.4"
        fontFamily="Manrope, system-ui, sans-serif"
      >
        <textPath href={`#${ringPathId}`}>
          LITA CONSTRUCTION • EST. 2004 • FULLY INSURED •
        </textPath>
      </text>

      {/* Town name */}
      {lines.map((l, i) => (
        <text
          key={l}
          x="80"
          y={titleY + i * (titleSize + 2)}
          textAnchor="middle"
          fill="currentColor"
          fontSize={titleSize}
          fontWeight="800"
          letterSpacing="0.5"
          fontFamily="Manrope, system-ui, sans-serif"
        >
          {l}
        </text>
      ))}

      {/* Subtitle */}
      <text
        x="80"
        y={lines.length === 2 ? titleY + titleSize * 2 + 12 : 97}
        textAnchor="middle"
        fill="currentColor"
        fontSize="6.5"
        fontWeight="700"
        letterSpacing="1.6"
        fontFamily="Manrope, system-ui, sans-serif"
      >
        {subtitle.toUpperCase()}
      </text>
    </svg>
  )
}
