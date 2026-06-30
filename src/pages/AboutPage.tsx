import { business, stats } from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { ShieldIcon, StarIcon, HandshakeIcon, CheckIcon } from '../components/icons'
import { localBusinessSchema, breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

const values = [
  { icon: HandshakeIcon, title: 'Integrity First', body: 'Honest recommendations, transparent pricing, and no high-pressure sales. We earn trust by doing right by every homeowner.' },
  { icon: ShieldIcon, title: 'Built to Last', body: 'We use premium, GAF-certified materials and proven techniques so your investment protects your home for decades.' },
  { icon: StarIcon, title: 'Craftsmanship', body: 'Two decades of hands-on experience show in every shingle, every joint, and every clean job site we leave behind.' },
]

const milestones = [
  { year: '2004', text: 'Johnny Lita founds Lita Construction with a commitment to family-quality work.' },
  { year: '2010', text: 'Expands across Bergen, Passaic, and Essex counties as word-of-mouth grows.' },
  { year: '2016', text: 'Earns GAF certification, enabling the industry-leading 25-year warranty.' },
  { year: 'Today', text: 'Trusted by 500+ NJ homeowners for roofing, siding, and masonry — and still family-run.' },
]

export function AboutPage() {
  const ref = useReveal()
  return (
    <>
      <Seo
        title="About Lita Construction LLC | Family-Owned NJ Contractor Since 2004"
        description="Founded in 2004 by Johnny Lita, Lita Construction is a family-owned, GAF-certified roofing, siding & masonry contractor serving Northern & Central New Jersey. Learn our story."
        path="/about"
        schema={[localBusinessSchema, breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'About', url: `${business.url}/about` },
        ])]}
      />

      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Family-owned. <span className="text-brand-400">Built on trust.</span>
          </>
        }
        subtitle={`Since ${business.founded}, Lita Construction has protected New Jersey homes with honest work, premium materials, and the accountability only a family business can offer.`}
        crumbs={[{ label: 'About' }]}
      />

      {/* Story */}
      <section className="bg-cloud-50 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-5 font-display text-display-md text-navy-900">
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
                GAF-certified, fully insured, family-owned contractor, we&apos;ve protected hundreds
                of New Jersey homes with roofing, siding, and masonry built to outlast the weather —
                and the warranty.
              </p>
              <p>
                We&apos;re not a faceless franchise. When you call {business.phone}, you reach the
                people who actually do the work, live in your community, and stake their family name
                on every job.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Founded 2004 by Johnny Lita', 'GAF-certified contractor', 'Fully licensed & insured', '25-year workmanship warranty'].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm font-medium text-navy-800">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-10 text-white shadow-lift">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/25 blur-[90px]" aria-hidden="true" />
            <span className="relative font-display text-[clamp(4rem,12vw,8rem)] font-black leading-none text-brand-400">
              {business.founded}
            </span>
            <p className="relative mt-2 font-display text-xl font-bold uppercase tracking-wider">
              The year it all began.
            </p>
            <p className="relative mt-4 text-white/70">
              From a single family&apos;s commitment to quality, to one of North Jersey&apos;s most
              trusted exterior contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-950 py-16 text-white">
        <div className="container-x grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl font-black text-brand-400 sm:text-5xl">{s.n}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-cloud-50 py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="mt-5 font-display text-display-md text-navy-900">Our values aren&apos;t a slogan.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-cloud-300 bg-white p-8 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{v.title}</h3>
                <p className="mt-2.5 leading-relaxed text-cloud-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20">
        <div ref={ref} className="reveal container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-5 font-display text-display-md text-navy-900">Built over two decades.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.year} className="rounded-2xl border border-cloud-300 bg-cloud-50 p-7">
                <div className="font-display text-3xl font-black text-brand-600">{m.year}</div>
                <p className="mt-3 text-sm leading-relaxed text-cloud-600">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Work with a contractor you can trust." />
    </>
  )
}
