import { business } from '../data/business'

/**
 * The best photo from each service folder, shown as circular "planets" that
 * slowly orbit a central "25+ Years" hub.
 *
 * How the animation stays clean:
 *  - The ring (`.animate-hero-orbit`) rotates the whole cluster clockwise.
 *  - Each spoke is statically placed on the ring at its angle.
 *  - An inner wrapper (`.animate-hero-orbit-rev`) counter-rotates at the exact
 *    same speed, and a static `rotate(-angle)` cancels the spoke tilt — so every
 *    photo (and its label) stays perfectly upright while it travels the circle.
 *  - Hovering the cluster pauses the motion; `motion-reduce` disables it entirely.
 *
 * To swap an image, just change its `img` path below.
 */
const SERVICES = [
  { label: 'Roofing', img: '/roof/optimized/roof (14).webp' },
  { label: 'Siding', img: '/Siding/optimized/siding (6).webp' },
  { label: 'Masonry', img: '/Mansory/optimized/Mansory (22).webp' },
  { label: 'Renovation', img: '/Renovation/optimized/Renovation (1).webp' },
  { label: 'Bathroom', img: '/Bathroom/optimized/Bathroom (7).webp' },
  { label: 'Chimney', img: '/Chimney/optimized/Chimney (1).webp' },
] as const

const RADIUS = 144 // px from center to each photo

export function HeroServiceOrbit() {
  return (
    <div className="group relative mx-auto hidden aspect-square w-[400px] max-w-full lg:block">
      {/* Dashed orbit track */}
      <div
        className="absolute left-1/2 top-1/2 h-[288px] w-[288px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15"
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
                  <figure className="relative h-[104px] w-[104px] overflow-hidden rounded-full border-2 border-white/70 shadow-lift ring-4 ring-navy-950/40 transition-transform duration-300 hover:scale-110">
                    <img
                      src={encodeURI(s.img)}
                      alt={`${s.label} project by Lita Construction`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 to-transparent px-1 pb-1.5 pt-4 text-center text-[10px] font-bold uppercase tracking-wide text-white">
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
          25<span className="align-top text-xl">+</span>
        </span>
        <span className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">Years</span>
        <span className="mt-0.5 text-[10px] font-medium text-white/60">Since {business.founded}</span>
      </div>
    </div>
  )
}
