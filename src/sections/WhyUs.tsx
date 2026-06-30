import { useReveal } from '../lib/useReveal'
import { stats } from '../data/business'
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
    <section id="why" className="relative scroll-mt-24 overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
      <div className="container-x relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            <span className="h-px w-8 bg-brand-400/60" />
            Why Lita Construction
          </span>
          <h2 className="mt-5 font-display text-display-md">
            The contractor North Jersey homeowners trust.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Choosing a contractor is an act of trust. For more than two decades, families across
            Bergen, Passaic, Essex and beyond have trusted Lita Construction to protect the place
            they call home.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-5 text-center">
                <div className="font-display text-3xl font-black text-brand-400">{s.n}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} index={i}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/65">{r.body}</p>
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
