import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon, ArrowIcon } from './icons'

/**
 * Dismissible promo banner that visibly slides down on EVERY page load.
 *
 * The slide-down is driven by React state (mount → shown) so the height +
 * transform transition runs each load. Dismissing it (the X) collapses the
 * bar for the current view only — it returns on the next load/refresh.
 */
export function PromoBar() {
  const [shown, setShown] = useState(false)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    // Next frame → trigger the slide-down transition on every load.
    const id = requestAnimationFrame(() => setShown(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const dismiss = () => {
    setShown(false)
    // Remove from layout after the collapse transition finishes.
    window.setTimeout(() => setClosed(true), 450)
  }

  if (closed) return null

  return (
    <div
      className={`overflow-hidden bg-brand-600 transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div
        className={`container-x flex h-11 items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:gap-5 ${
          shown ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white sm:text-[11px]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" aria-hidden="true" />
          Limited Offer
        </span>

        <p className="flex-1 truncate text-center text-xs font-semibold text-white sm:text-sm">
          <span className="font-extrabold">FREE roof inspection</span>
          <span className="hidden sm:inline"> with every estimate this season</span>
          <span className="mx-2 hidden text-white/50 md:inline">·</span>
          <span className="hidden lg:inline">Family-owned &amp; GAF certified since 2004</span>
        </p>

        <Link
          to="/contact"
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-600 transition-transform hover:scale-105 sm:flex"
        >
          Claim Offer
          <ArrowIcon className="h-3.5 w-3.5" />
        </Link>

        <button
          onClick={dismiss}
          aria-label="Dismiss promotion"
          className="absolute right-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white sm:static"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
