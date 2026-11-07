import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { adServiceBySlug, adServiceForSitePage, adTownsByCounty, landingPath, townLabel } from '../data/adLandingPages'
import { CloseIcon, PinIcon } from './icons'

/**
 * Service-page headline: "Roof Repair in New Jersey ▾".
 * Clicking "New Jersey" opens a searchable town list; picking a town opens
 * that town's landing page (e.g. "Roof Repair in Fort Lee, NJ" at
 * /lp/roof-repair/fort-lee) — the page used as the Google Ads destination.
 */
export function ServiceTownHeading({ serviceSlug, serviceName }: { serviceSlug: string; serviceName: string }) {
  const adService = adServiceForSitePage[serviceSlug]
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [openCounty, setOpenCounty] = useState<string | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Close on Escape or a click outside; focus the search box when opening.
  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const groups = useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (!needle) return adTownsByCounty
    return adTownsByCounty
      .map((g) => ({
        county: g.county,
        towns: g.towns.filter(
          (t) => t.name.toLowerCase().includes(needle) || t.zips.some((z) => z.startsWith(needle)) || g.county.toLowerCase().includes(needle),
        ),
      }))
      .filter((g) => g.towns.length > 0)
  }, [q])

  const heading = 'mt-5 font-display text-display-lg text-white'

  // Services with no landing pages keep the plain headline.
  if (!adService) {
    return (
      <h1 className={heading}>
        {serviceName} in <span className="whitespace-nowrap text-brand-400">New Jersey</span>
      </h1>
    )
  }

  const count = groups.reduce((n, g) => n + g.towns.length, 0)
  // The landing pages' own title, e.g. "Roof Repair" → "Roof Repair in Fort Lee, NJ"
  const pageTitle = adServiceBySlug[adService]?.name ?? serviceName

  return (
    <div ref={wrapRef} className="relative">
      <h1 className={heading}>
        {serviceName} in{' '}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="dialog"
          title="Choose your town"
          className="group inline-flex items-baseline gap-2 whitespace-nowrap text-left text-brand-400 decoration-brand-400/60 decoration-[3px] underline-offset-[10px] hover:underline"
        >
          New Jersey
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className={`h-[0.45em] w-[0.45em] self-center transition-transform ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h1>

      {open && (
        <div
          role="dialog"
          aria-label={`Choose a town for ${serviceName}`}
          className="absolute left-0 top-full z-50 mt-3 w-[min(640px,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-cloud-200 bg-white text-ink-900 shadow-lift"
        >
          <div className="flex items-center justify-between gap-4 border-b border-cloud-200 px-5 py-4">
            <div>
              <p className="font-display text-lg font-bold">{pageTitle} — choose your county & town</p>
              <p className="text-xs text-cloud-500">{count} towns across New Jersey</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="flex h-9 w-9 items-center justify-center rounded-full text-cloud-600 hover:bg-cloud-100 hover:text-ink-900"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="border-b border-cloud-200 px-5 py-3">
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search town, county or ZIP…"
              aria-label="Search towns"
              className="w-full rounded-xl border border-cloud-300 bg-cloud-100 px-4 py-3 text-sm outline-none focus:border-brand-600 focus:bg-white focus:ring-2 focus:ring-brand-600/20"
            />
          </div>
          <div className="max-h-[420px] overflow-y-auto px-5">
            {groups.map((g) => {
              // A county opens when clicked; while searching, every matching county is open.
              const isOpen = q.trim() !== '' || openCounty === g.county
              return (
                <div key={g.county} className="border-b border-cloud-200 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenCounty(isOpen ? null : g.county)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 py-3.5 text-left hover:text-brand-600"
                  >
                    <span className="font-display text-base font-bold">
                      {pageTitle} — {g.county} County
                    </span>
                    <span className="flex items-center gap-2 text-xs font-semibold text-cloud-500">
                      {g.towns.length} towns
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <ul className="grid gap-1 pb-4 sm:grid-cols-2">
                      {g.towns.map((t) => (
                        <li key={t.slug}>
                          <Link
                            to={landingPath(adService, t.slug)}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-semibold text-ink-800 hover:bg-cloud-100 hover:text-brand-600"
                          >
                            <PinIcon className="h-3.5 w-3.5 shrink-0 text-brand-600" />
                            <span className="truncate">
                              {pageTitle} in {townLabel(t).replace(` (${t.county} County)`, '')}, NJ
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
            {count === 0 && <p className="py-10 text-center text-sm text-cloud-500">No towns match “{q}”.</p>}
          </div>
        </div>
      )}
    </div>
  )
}
