import { useReveal } from '../lib/useReveal'
import { ShieldIcon, StarIcon, ClockIcon, PinIcon } from '../components/icons'

/**
 * "Why Us" — an editorial manifesto over a softly-blurred showcase home.
 * Four principles as frosted-glass cards with an icon, a large ghost numeral,
 * and coordinated entrance + hover animation.
 */

const principles = [
  {
    n: '01',
    icon: ShieldIcon,
    title: 'Certified & warrantied',
    body: 'GAF-certified installation backed by a written 25-year warranty on labor and materials — the strongest protection in the industry.',
  },
  {
    n: '02',
    icon: StarIcon,
    title: 'Our name is on it',
    body: 'Founded by Johnny Lita in 2004. Not a franchise, not a call center — a family business that treats your home like its own.',
  },
  {
    n: '03',
    icon: ClockIcon,
    title: 'On time, on budget',
    body: 'Detailed written estimates with no hidden fees, clear timelines, and a job site left spotless every single day.',
  },
  {
    n: '04',
    icon: PinIcon,
    title: 'Local & accountable',
    body: 'We live and work in North Jersey. Call and you reach the people who actually do the work — same day, every time.',
  },
]

export function WhyUs() {
  const heading = useReveal()

  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden py-24 text-white sm:py-28">
      {/* Showcase house photo background — softly blurred */}
      <div
        className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center blur-[3px]"
        style={{ backgroundImage: 'url("/showcase/house3.png")' }}
        aria-hidden="true"
      />
      {/* Gradient for legibility */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-black/10"
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* Header */}
        <div ref={heading} className="reveal max-w-3xl">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
            <span className="h-px w-9 bg-brand-400/70" />
            Why Lita Construction
          </span>
          <h2 className="mt-5 font-display text-display-md text-white drop-shadow-sm">
            The standards we refuse to cut.
          </h2>
        </div>

        {/* Manifesto cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Card key={p.n} index={i}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/50 hover:bg-white/[0.13] sm:p-7">
                {/* Left accent bar grows on hover */}
                <span
                  className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-brand-500 transition-transform duration-500 group-hover:scale-y-100"
                  aria-hidden="true"
                />
                {/* Ghost numeral watermark */}
                <span
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-8xl font-black leading-none text-white/[0.08] transition-all duration-500 group-hover:text-white/[0.14]"
                  aria-hidden="true"
                >
                  {p.n}
                </span>

                <div className="relative flex items-start gap-4">
                  {/* Icon tile */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{p.body}</p>
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${index * 120}ms` }}>
      {children}
    </div>
  )
}
