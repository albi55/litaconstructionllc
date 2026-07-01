import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { PhoneIcon, ArrowIcon } from './icons'

/** Sticky bottom action bar on mobile — maximizes click-to-call conversion. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cloud-200 bg-white/95 p-2.5 backdrop-blur-md xl:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={business.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full border-2 border-navy-900/15 py-3 text-sm font-bold uppercase tracking-wide text-ink-900"
        >
          <PhoneIcon className="h-5 w-5 text-brand-600" />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 rounded-full bg-brand-600 py-3 text-sm font-bold uppercase tracking-wide text-white"
        >
          Free Quote
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
