import { Link } from 'react-router-dom'

/** Wordmark logo — condensed display type with an amber roofline mark. */
export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label="Lita Construction LLC — home"
    >
      <span className="relative flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
          <path
            d="M4 22 20 8l16 14"
            fill="none"
            stroke="#f5a623"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path d="M8 22h24v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" fill="#1f2126" />
          <rect x="17" y="26" width="6" height="6" fill="#f5a623" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold uppercase tracking-tight text-bone-50">
          Lita<span className="text-amber-500">.</span>
        </span>
        <span className="font-display text-[9px] font-semibold uppercase tracking-[0.28em] text-ink-500">
          Construction LLC
        </span>
      </span>
    </Link>
  )
}
