import { business } from '../data/business'

/**
 * Official GAF Master Elite® badge — links out to Lita's verified GAF
 * contractor profile. Used across the service and service-area pages as a
 * top-tier credential mark. One source of truth (business.gaf) so the image
 * and link never drift.
 */
export function GafBadge({
  /** 'sm' for inline/hero corners, 'md' default, 'lg' for feature bands. */
  size = 'md',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg'
  /** Kept for call-site compatibility; the badge is frameless so tone is unused. */
  tone?: 'onDark' | 'onLight'
  className?: string
}) {
  const width = size === 'sm' ? 128 : size === 'lg' ? 220 : 168

  return (
    <a
      href={business.gaf.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Verified GAF Master Elite® Contractor — view our GAF profile"
      aria-label="View Lita Construction's verified GAF Master Elite contractor profile (opens in a new tab)"
      className={`inline-block shrink-0 transition-transform duration-300 hover:scale-[1.04] ${className}`}
    >
      <img
        src={business.gaf.badgeImage}
        alt="GAF Master Elite® Certified Contractor — Lita Construction, ID 1106756"
        width={width}
        height={Math.round((width * 342) / 456)}
        loading="lazy"
        decoding="async"
        className="h-auto"
        style={{ width }}
      />
    </a>
  )
}
