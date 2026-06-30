import { business } from '../data/business'
import { PhoneIcon, ArrowIcon } from './icons'

/** Sticky bottom action bar on mobile — maximizes click-to-call conversion. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink-700 bg-ink-950/95 backdrop-blur-md lg:hidden">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-wider text-amber-500"
      >
        <PhoneIcon className="h-5 w-5" />
        Call Now
      </a>
      <a
        href="#quote"
        className="flex items-center justify-center gap-2 bg-amber-500 py-4 text-sm font-bold uppercase tracking-wider text-ink-950"
      >
        Free Estimate
        <ArrowIcon className="h-4 w-4" />
      </a>
    </div>
  )
}
