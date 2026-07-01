import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'

/**
 * "Our Work" — a continuously flowing gallery of real project photos.
 * Two rows scroll in opposite directions like a river (CSS marquee), pausing on
 * hover. Each photo sits in a fixed-ratio tile with object-cover, so portrait
 * phone shots crop cleanly (no letterbox bars). Motion is disabled for
 * prefers-reduced-motion users.
 */
type Shot = { src: string; category: string }

const rowTop: Shot[] = [
  { src: '/work/siding-siding6.webp', category: 'Siding' },
  { src: '/work/bathroom-Bathroom7.webp', category: 'Renovation' },
  { src: '/work/mansory-Mansory22.webp', category: 'Masonry' },
  { src: '/work/roof-roof30.webp', category: 'Roofing' },
  { src: '/work/siding-siding1.webp', category: 'Siding' },
  { src: '/work/renovation-Renovation1.webp', category: 'Renovation' },
]

const rowBottom: Shot[] = [
  { src: '/work/chimney-Chimney1.webp', category: 'Chimney' },
  { src: '/work/roof-roof14.webp', category: 'Roofing' },
  { src: '/work/mansory-Mansory10.webp', category: 'Masonry' },
  { src: '/work/siding-siding10.webp', category: 'Siding' },
  { src: '/work/renovation-Renovation20.webp', category: 'Renovation' },
  { src: '/work/roof-roof45.webp', category: 'Roofing' },
]

export function OurWork() {
  const head = useReveal()
  return (
    <section id="our-work" className="scroll-mt-24 overflow-hidden bg-cloud-100 py-24 sm:py-32">
      <div className="container-x">
        {/* Header */}
        <div
          ref={head}
          className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="eyebrow">Our Work</span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              Two decades of results you can see.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              Real roofing, siding, masonry, and renovation projects completed for homeowners
              across Northern &amp; Central New Jersey.
            </p>
          </div>
          <Link
            to="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900 transition-colors hover:text-brand-600"
          >
            View Full Portfolio
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>

      {/* Flowing rows — full-bleed river of photos */}
      <div className="mt-14 flex flex-col gap-5">
        <Marquee shots={rowTop} direction="left" />
        <Marquee shots={rowBottom} direction="right" />
      </div>
    </section>
  )
}

function Marquee({ shots, direction }: { shots: Shot[]; direction: 'left' | 'right' }) {
  // Duplicate the set so the loop is seamless.
  const loop = [...shots, ...shots]
  const anim = direction === 'left' ? 'ourwork-left' : 'ourwork-right'
  return (
    <div className="group relative flex overflow-hidden">
      <div
        className="flex shrink-0 gap-5 pr-5"
        style={{ animation: `${anim} 45s linear infinite` }}
      >
        {loop.map((s, i) => (
          <Tile key={`${s.src}-${i}`} shot={s} />
        ))}
      </div>

      <style>{`
        @keyframes ourwork-left  { from { transform: translateX(0) }    to { transform: translateX(-50%) } }
        @keyframes ourwork-right { from { transform: translateX(-50%) } to { transform: translateX(0) } }
        .group:hover > div { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .group > div { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

function Tile({ shot }: { shot: Shot }) {
  return (
    <div className="group/tile relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl bg-navy-950 shadow-soft sm:h-64 sm:w-96">
      <img
        src={encodeURI(shot.src)}
        alt={`${shot.category} project by Lita Construction`}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/tile:scale-105"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
        aria-hidden="true"
      />
      <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
        {shot.category}
      </span>
    </div>
  )
}
