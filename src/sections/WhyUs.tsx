import { useReveal } from '../lib/useReveal'
import { ShieldIcon, ClockIcon, StarIcon, CheckIcon } from '../components/icons'

const reasons = [
  {
    icon: ShieldIcon,
    title: 'GAF Certified & Fully Insured',
    body: 'Factory-certified installation backed by a 25-year warranty on labor and materials. Licensed (NJ #13VH11703800) and insured — your home and investment are fully protected.',
  },
  {
    icon: StarIcon,
    title: 'Family-Owned Craftsmanship',
    body: 'Founded by Johnny Lita in 2004, we are not a faceless franchise. Every project carries our family name — so we treat your home the way we would treat our own.',
  },
  {
    icon: ClockIcon,
    title: 'On Time, On Budget',
    body: 'Detailed written estimates with no hidden fees, clear timelines, and a clean job site. We deliver projects affordably and expertly — exactly as promised.',
  },
  {
    icon: CheckIcon,
    title: 'Local & Accountable',
    body: 'We live and work in North Jersey. When you call (201) 540-7772, you reach the people who actually do the work — not a call center three states away.',
  },
]

export function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden border-y border-ink-800 bg-ink-900 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber-500/5 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">Why Lita Construction</span>
          <h2 className="mt-5 font-display text-display-md text-bone-50">
            The contractor North Jersey homeowners trust.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone-300">
            Choosing a contractor is an act of trust. For more than two decades, families across
            Bergen, Passaic, Essex and beyond have trusted Lita Construction to protect the place
            they call home.
          </p>

          {/* Stat band */}
          <div className="mt-10 grid grid-cols-3 divide-x divide-ink-700 border border-ink-700 bg-ink-950">
            {[
              { n: '25+', l: 'Years Experience' },
              { n: '8', l: 'NJ Counties' },
              { n: '100%', l: 'Satisfaction Focus' },
            ].map((s) => (
              <div key={s.l} className="px-4 py-6 text-center">
                <div className="font-display text-3xl font-black text-amber-500 sm:text-4xl">
                  {s.n}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-bone-300">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} index={i}>
              <div className="group h-full border border-ink-700 bg-ink-950 p-7 transition-colors hover:border-amber-500/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-amber-500/10 text-amber-500">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-bone-50">{r.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-bone-300">{r.body}</p>
              </div>
            </ReasonCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 90}ms` }}>
      {children}
    </div>
  )
}
