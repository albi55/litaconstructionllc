import { menuServiceSlugs, serviceBySlug } from '../data/business'
import { servicePhoto } from './icons'

/**
 * Every service shown in the site's menu, rendered as circular "planets" that
 * slowly orbit a central "25+ Years" hub. Stays in sync with the nav/hub because
 * it's built from `menuServiceSlugs` + `servicePhoto`.
 *
 * How the animation stays clean:
 *  - The ring (`.animate-hero-orbit`) rotates the whole cluster clockwise.
 *  - Each spoke is statically placed on the ring at its angle.
 *  - An inner wrapper (`.animate-hero-orbit-rev`) counter-rotates at the exact
 *    same speed, and a static `rotate(-angle)` cancels the spoke tilt — so every
 *    photo (and its label) stays perfectly upright while it travels the circle.
 *  - Hovering the cluster pauses the motion; `motion-reduce` disables it entirely.
 */
// Distinct photos so no two orbiting circles look identical.
const ORBIT_PHOTO: Record<string, string> = {
  ...servicePhoto,
  'roof-replacement': '/roof/optimized/roof (14).webp',
  'residential-roofing': '/roof/optimized/roof (22).webp',
  'siding-installation': '/Siding/optimized/siding (6).webp',
}

/** Short label for the tight orbit caption (menu names can be long). */
const ORBIT_LABEL: Record<string, string> = {
  'roof-repair': 'Repair',
  'roof-replacement': 'Replace',
  'commercial-roofing': 'Commercial',
  'residential-roofing': 'Residential',
  'siding-installation': 'Siding',
  'siding-repair': 'Repair',
  'masonry-work': 'Masonry',
  'chimney-services': 'Chimney',
  'decks-pavers': 'Decks',
}

const SERVICES = menuServiceSlugs.map((slug) => ({
  label: ORBIT_LABEL[slug] ?? serviceBySlug(slug)?.name ?? slug,
  img: ORBIT_PHOTO[slug] ?? '/work/roof-roof30.webp',
}))

const RADIUS = 190 // px from center to each photo — wider ring = gap between circles

export function HeroServiceOrbit() {
  return (
    // Responsive scaler: the orbit is authored at a fixed 540px, then scaled
    // down to fit small screens (phones) via .orbit-inner in index.css, so it
    // shows everywhere and never overflows.
    <div className="orbit-scaler mx-auto w-[340px] max-w-full sm:w-[440px] lg:w-[540px]">
      <div className="orbit-inner group relative aspect-square w-[540px]">
        {/* Dashed orbit track */}
      <div
        className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15"
        aria-hidden="true"
      />

      {/* Rotating ring */}
      <div className="absolute inset-0 animate-hero-orbit motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {SERVICES.map((s, i) => {
          const angle = i * (360 / SERVICES.length)
          return (
            <div
              key={s.label}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${RADIUS}px)` }}
            >
              {/* Counter-rotate at the same speed so photos never tumble */}
              <div className="animate-hero-orbit-rev motion-reduce:animate-none group-hover:[animation-play-state:paused]">
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <figure className="relative h-[116px] w-[116px] overflow-hidden rounded-full border-2 border-white/70 shadow-lift ring-4 ring-navy-950/40 transition-transform duration-300 hover:z-10 hover:scale-110">
                    <img
                      src={encodeURI(s.img)}
                      alt={`${s.label} project by Lita Construction`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-center whitespace-nowrap bg-gradient-to-t from-navy-950/95 to-transparent px-1 pb-2 pt-5 text-center text-[10px] font-bold uppercase tracking-wide text-white">
                      {s.label}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 flex h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-navy-900/85 text-center shadow-lift backdrop-blur-sm">
        <span className="font-display text-[2.75rem] font-black leading-none text-brand-400">
          35<span className="align-top text-xl">+</span>
        </span>
          <span className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">Years</span>
          <span className="mt-0.5 text-[10px] font-medium text-white/60">In the trade</span>
        </div>
      </div>
    </div>
  )
}
