import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { useReveal } from '../lib/useReveal'
import { ArrowIcon, ShieldIcon, StarIcon } from '../components/icons'

/**
 * "Who We Are" — the introduction directly beneath the hero. A portrait
 * founder/jobsite photo on one side, story copy on the other.
 *
 * Design intent (deliberately *not* a plain image + text split):
 *  - The photo is framed with an offset brand-colored border block behind it
 *    (an editorial device that adds depth and reads as intentional).
 *  - A floating credential card overlaps the frame to ground the composition.
 *  - Copy closes on the founder's signature rather than a generic buzzword list,
 *    which is what makes an "about" blurb feel authentic instead of templated.
 */
export function WhoWeAre() {
  const ref = useReveal()
  return (
    <section id="who-we-are" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div
        ref={ref}
        className="reveal container-x grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20"
      >
        {/* ── Visual side ─────────────────────────────────────────── */}
        <div className="relative order-1">
          {/* Offset accent block peeking out behind the photo */}
          <div
            className="absolute -bottom-5 -left-5 h-full w-full rounded-3xl bg-brand-600"
            aria-hidden="true"
          />
          {/* Portrait photo in a rounded, shadowed frame */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift">
            <img
              src="/aboutimage.jpg"
              alt="Lita Construction craftsmanship — a completed New Jersey home"
              className="h-full w-full object-cover"
              width={3024}
              height={4032}
              loading="lazy"
              decoding="async"
            />
            {/* Soft bottom scrim for depth + to seat the floating card */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Floating credential card overlapping the frame's bottom-right */}
          <div className="absolute -bottom-6 right-4 flex items-center gap-3.5 rounded-2xl border border-cloud-200 bg-white/95 px-5 py-4 shadow-card backdrop-blur-sm sm:right-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
              <ShieldIcon className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-2xl font-black text-ink-900">
                {business.yearsExperience}
              </span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-cloud-500">
                Years in North Jersey
              </span>
            </span>
          </div>
        </div>

        {/* ── Copy side ───────────────────────────────────────────── */}
        <div className="order-2">
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-5 font-display text-display-md text-ink-900">
            A family name on every project we build.
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-cloud-600">
            <p>
              Lita Construction is a family-owned roofing, siding, and masonry contractor
              rooted in Northern &amp; Central New Jersey. Since {business.founded}, we&apos;ve
              built our reputation the slow, honest way — one home, one handshake, and one
              job done right at a time.
            </p>
            <p>
              We&apos;re not a faceless franchise or a call center three states away. When you
              hire us, you get the people who actually do the work — GAF-certified, fully
              insured, and personally accountable for every shingle, seam, and stone.
            </p>
          </div>

          {/* Trust row — restrained, not a buzzword dump */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <span className="text-sm font-semibold text-ink-800">
                Trusted by North Jersey homeowners
              </span>
            </div>
            <span className="h-5 w-px bg-cloud-300" aria-hidden="true" />
            <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-ink-800">
              <img
                src="/gaf-logo.svg"
                alt="GAF Certified Contractor"
                className="h-7 w-7 rounded"
              />
              GAF Certified &middot; {business.licenseLabel}
            </span>
          </div>

          {/* Founder signature — the authenticity beat */}
          <div className="mt-9 border-t border-cloud-200 pt-7">
            <p className="font-display text-xl font-bold text-ink-900">{business.founder}</p>
            <p className="mt-0.5 text-sm text-cloud-500">
              Founder &amp; Owner, {business.shortName}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/about" className="btn-primary">
              Our Full Story
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={business.phoneHref} className="btn-ghost">
              Talk to Us &middot; {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
