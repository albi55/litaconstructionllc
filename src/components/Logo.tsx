import { Link } from 'react-router-dom'

/**
 * Brand logo. Uses the dark logo on light backgrounds (navbar) and the
 * original light logo on dark backgrounds (footer). The image already
 * contains the "Lita Construction" wordmark, so no extra text is needed.
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
        src={light ? '/logo.png' : '/logo-dark.png'}
        alt="Lita Construction LLC logo"
        width={165}
        height={66}
        className="h-16 w-auto"
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}
