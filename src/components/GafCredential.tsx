import { business } from '../data/business'

/**
 * Compact GAF credential mark — the red GAF logo beside the Master Elite ID,
 * shown just like the NJ license line. Links out to Lita's verified GAF
 * contractor profile. Values come from the single source of truth
 * (business.gaf) so the logo, ID, and link never drift.
 *
 * Use this in page heroes to surface the GAF logo + verifiable GAF ID; pair
 * it with <GafBadge> where the full Master Elite badge is also wanted.
 */
export function GafCredential({ className = '' }: { className?: string }) {
  return (
    <a
      href={business.gaf.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Verified GAF Master Elite® Contractor — view our GAF profile"
      aria-label={`GAF Master Elite Certified Contractor, ID ${business.gaf.id} — view our verified GAF profile (opens in a new tab)`}
      className={`inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-sm transition-colors duration-300 hover:border-white/40 hover:bg-white/15 ${className}`}
    >
      <img
        src="/gaf-logo.svg"
        alt="GAF"
        width={28}
        height={28}
        loading="lazy"
        decoding="async"
        className="h-7 w-7 shrink-0 rounded-[4px]"
      />
      <span className="leading-tight">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
          GAF Master Elite®
        </span>
        <span className="block text-sm font-bold text-white/90">
          ID #{business.gaf.id}
        </span>
      </span>
    </a>
  )
}
