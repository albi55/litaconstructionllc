import { Link } from 'react-router-dom'

/**
 * Brand logo — the circular Lita badge. The badge is self-contained on a
 * transparent background and carries its own navy field, so it reads on both
 * the light navbar and the dark footer; the `light` prop is kept for callers
 * but no longer needs a separate asset.
 */
export function Logo({ onClick, light = false }: { onClick?: () => void; light?: boolean }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center"
      aria-label="Lita Construction LLC — home"
    >
      <img
        src="/logo.png"
        alt="Lita Construction LLC logo"
        width={64}
        height={64}
        className={`h-16 w-16 shrink-0${light ? ' drop-shadow-sm' : ''}`}
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}
