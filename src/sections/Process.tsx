import { useReveal } from '../lib/useReveal'
import { PhoneIcon, ClockIcon, ShieldIcon, CheckIcon } from '../components/icons'

/**
 * "How It Works" — rebuilt as a connected process timeline rather than a row
 * of equal cards. A horizontal rail with numbered nodes on desktop (the line
 * communicates sequence, which disconnected cards never did) that collapses to
 * a clean vertical timeline on mobile. Nodes and copy reveal in sequence.
 */

const steps = [
  {
    n: '01',
    icon: PhoneIcon,
    title: 'Free On-Site Estimate',
    body: 'Call or request a quote online. We visit, assess the work, and hand you a clear, itemized written estimate — free, no obligation.',
  },
  {
    n: '02',
    icon: ClockIcon,
    title: 'Custom Plan & Materials',
    body: 'We walk your options, recommend the right GAF-certified materials, and lock in a transparent timeline and price. No surprises.',
  },
  {
    n: '03',
    icon: ShieldIcon,
    title: 'Expert Installation',
    body: 'Our crew completes your roofing, siding, or masonry with precision — protecting your property and keeping a clean job site daily.',
  },
  {
    n: '04',
    icon: CheckIcon,
    title: 'Final Walkthrough & Warranty',
    body: 'We inspect every detail with you, clean up completely, and register your 25-year workmanship warranty. Done right.',
  },
]

export function Process() {
  const head = useReveal()
  return (
    <section id="process" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="container-x">
        {/* Header */}
        <div ref={head} className="reveal max-w-3xl">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-5 font-display text-display-md text-ink-900">
            Four steps from first call to finished job.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cloud-600">
            No confusion, no runaround. From the first phone call to the final inspection, you
            always know exactly what's happening and what comes next.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <ol className="grid gap-y-12 md:grid-cols-4 md:gap-x-8">
            {steps.map((step, i) => (
              <Step key={step.n} index={i} last={i === steps.length - 1}>
                {step}
              </Step>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

type StepData = {
  n: string
  icon: (p: React.SVGProps<SVGSVGElement>) => JSX.Element
  title: string
  body: string
}

function Step({
  children: step,
  index,
  last,
}: {
  children: StepData
  index: number
  last: boolean
}) {
  const ref = useReveal<HTMLLIElement>()
  const Icon = step.icon
  return (
    <li
      ref={ref}
      className="reveal group relative flex gap-5 md:block"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* ── Node + connector ── */}
      <div className="relative flex flex-col items-center md:mb-7 md:flex-row">
        {/* Vertical connector (mobile) */}
        {!last && (
          <span
            className="absolute left-7 top-14 h-[calc(100%+2rem)] w-px bg-gradient-to-b from-brand-600/50 to-cloud-300 md:hidden"
            aria-hidden="true"
          />
        )}
        {/* Horizontal connector (desktop) */}
        {!last && (
          <span
            className="absolute left-14 right-0 top-7 hidden h-px -translate-y-1/2 bg-gradient-to-r from-brand-600/50 to-cloud-300 md:block"
            aria-hidden="true"
          />
        )}

        {/* The numbered node */}
        <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-white shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-600">
          <Icon className="h-6 w-6" />
          {/* Step-number chip */}
          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-[11px] font-black text-white ring-4 ring-cloud-100 transition-colors duration-300 group-hover:bg-navy-950">
            {index + 1}
          </span>
        </div>
      </div>

      {/* ── Copy ── */}
      <div className="pt-1 md:pt-0">
        <h3 className="font-display text-lg font-bold text-ink-900">{step.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-cloud-600">{step.body}</p>
      </div>
    </li>
  )
}
