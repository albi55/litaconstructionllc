import { useReveal } from '../lib/useReveal'

const steps = [
  {
    n: '01',
    title: 'Free On-Site Estimate',
    body: 'Call (201) 540-7772 or request a quote online. We visit your property, assess the work, and provide a clear, itemized written estimate — completely free, no obligation.',
  },
  {
    n: '02',
    title: 'Custom Plan & Materials',
    body: 'We walk you through your options, recommend the right GAF-certified materials, and lock in a transparent timeline and price. No surprises, no pressure.',
  },
  {
    n: '03',
    title: 'Expert Installation',
    body: 'Our experienced crew completes your roofing, siding, or masonry with precision — protecting your property and keeping a clean, respectful job site every day.',
  },
  {
    n: '04',
    title: 'Final Walkthrough & Warranty',
    body: 'We inspect every detail with you, clean up completely, and register your 25-year workmanship warranty. Your satisfaction is the finishing touch.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-cloud-100 py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">How It Works</span>
            <h2 className="mt-5 font-display text-display-md text-navy-900">
              A simple, transparent process.
            </h2>
          </div>
          <p className="max-w-md text-cloud-600">
            No confusion, no runaround. From the first phone call to the final inspection, you
            always know exactly what is happening and what comes next.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StepCard key={step.n} index={i}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-cloud-300 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <span className="font-display text-6xl font-black text-cloud-200 transition-colors group-hover:text-brand-600">
                  {step.n}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cloud-600">{step.body}</p>
                <span className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-brand-600 transition-all duration-500 group-hover:w-full" aria-hidden="true" />
              </div>
            </StepCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 90}ms` }}>
      {children}
    </div>
  )
}
