import { Link } from 'react-router-dom'
import { townServices } from '../data/townServices'
import { ArrowIcon } from './icons'

/**
 * Grid of dedicated per-trade guides for one town — links into the
 * service × city matrix at /service-areas/<town>/<service>.
 * Each card carries the trade's own photo and sheet code.
 */
export function TownServiceLinks({
  townSlug,
  townName,
  exclude,
}: {
  townSlug: string
  townName: string
  exclude?: string
}) {
  const list = townServices.filter((s) => s.slug !== exclude)
  return (
    <div>
      <div className="flex items-center gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cloud-500">
          Dedicated {townName} service guides
        </p>
        <span className="h-px flex-1 bg-cloud-300" aria-hidden="true" />
        <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-sand-700">
          {list.length} trades
        </span>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s) => (
          <Link
            key={s.slug}
            to={`/service-areas/${townSlug}/${s.slug}`}
            className="group flex items-center gap-4 rounded-2xl border border-cloud-200 bg-white p-4 shadow-soft transition-shadow duration-300 hover:shadow-card"
          >
            <img
              src={s.heroImage}
              alt={`${s.name} work by Lita Construction`}
              className="h-16 w-20 shrink-0 rounded-xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand-700">
                Sheet {s.sheet}
              </p>
              <p className="truncate font-display text-base font-bold text-ink-900 transition-colors group-hover:text-brand-600">
                {s.name}
              </p>
              <p className="text-xs text-cloud-500">in {townName}, NJ</p>
            </div>
            <ArrowIcon className="ml-auto h-4 w-4 shrink-0 text-cloud-400 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
          </Link>
        ))}
      </div>
    </div>
  )
}
