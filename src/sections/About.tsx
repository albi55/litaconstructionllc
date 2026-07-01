import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { useReveal } from '../lib/useReveal'
import { CheckIcon } from '../components/icons'

const points = [
  'Founded in 2004 by Johnny Lita',
  'GAF-certified roofing contractor',
  'Fully licensed & insured in New Jersey',
  '25-year warranty on labor & materials',
]

export function About() {
  const ref = useReveal()
  return (
    <section id="about" className="scroll-mt-24 bg-cloud-100 py-24 sm:py-32">
      <div ref={ref} className="reveal container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        {/* Visual block — rounded navy card with the founding year */}
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-10 text-white shadow-lift">
            <span className="relative font-display text-[clamp(4rem,12vw,9rem)] font-black leading-none text-brand-400">
              2004
            </span>
            <p className="relative mt-2 font-display text-xl font-bold uppercase tracking-wider text-white">
              The year it all began.
            </p>
            <div className="relative mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-brand-500 pl-4">
                <div className="font-display text-3xl font-black text-white">Family</div>
                <div className="text-sm text-white/60">Owned &amp; operated</div>
              </div>
              <div className="border-l-2 border-brand-500 pl-4">
                <div className="font-display text-3xl font-black text-white">North NJ</div>
                <div className="text-sm text-white/60">Born &amp; based here</div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">Our Story</span>
          <h2 className="mt-5 font-display text-display-md text-ink-900">
            Two decades of building trust, one project at a time.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-cloud-600">
            <p>
              When Johnny Lita founded Lita Construction in {business.founded}, he set out to do
              something simple but rare: treat every homeowner&apos;s project with the same care
              and integrity he&apos;d want for his own family.
            </p>
            <p>
              More than twenty years later, that promise still drives everything we do. As a
              GAF-certified, fully insured, family-owned contractor, we&apos;ve protected
              hundreds of New Jersey homes with roofing, siding, and masonry built to outlast the
              weather — and the warranty.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink-800">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/about" className="btn-primary">
              More About Us
            </Link>
            <div className="text-sm text-cloud-600">
              or call{' '}
              <a href={business.phoneHref} className="font-bold text-brand-600 hover:underline">
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
