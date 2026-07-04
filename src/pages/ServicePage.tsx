import { Link, useParams, Navigate } from 'react-router-dom'
import { services, serviceAreas, business, menuServiceSlugs } from '../data/business'
import { towns } from '../data/towns'
import { roofingTowns } from '../data/roofingTowns'
import { Seo } from '../components/Seo'
import { QuoteForm } from '../components/QuoteForm'
import { TownStamp } from '../components/TownStamp'
import { CtaBand } from '../components/CtaBand'
import { FaqAccordion } from '../components/FaqAccordion'
import {
  ServiceGlyph,
  CheckIcon,
  ArrowIcon,
  PhoneIcon,
  StarIcon,
  QuoteMarkIcon,
  PinIcon,
} from '../components/icons'
import { serviceSchema, breadcrumbSchema, faqSchemaFrom, testimonialsFor } from '../lib/schema'
import { useReveal } from '../lib/useReveal'
import { imagesByCategory } from '../data/gallery'

/** Hero background per service — a full-home showcase shot, distinct per trade. */
const heroPhoto: Record<string, string> = {
  roofing: '/showcase/house%20(1).png',
  siding: '/showcase/house%20(2).png',
  masonry: '/showcase/house3.png',
  gutters: '/showcase/house%20(2).png',
  'windows-doors': '/showcase/house%20(1).png',
  'decks-pavers': '/showcase/house3.png',
  painting: '/showcase/house%20(2).png',
  // New grouped services
  'roof-repair': '/showcase/house%20(1).png',
  'roof-replacement': '/showcase/house%20(1).png',
  'commercial-roofing': '/showcase/house3.png',
  'residential-roofing': '/showcase/house%20(1).png',
  'siding-installation': '/showcase/house%20(2).png',
  'siding-repair': '/showcase/house%20(2).png',
  'masonry-work': '/showcase/house3.png',
  'chimney-services': '/showcase/house%20(1).png',
}
/** Social-share (og:image) per service — a project close-up reads better than a wide house shot in link previews. */
const sharePhoto: Record<string, string> = {
  roofing: '/work/roof-roof30.webp',
  siding: '/work/siding-siding6.webp',
  masonry: '/work/mansory-Mansory22.webp',
  gutters: '/work/siding-siding1.webp',
  'windows-doors': '/work/siding-siding10.webp',
  'decks-pavers': '/Pavec/lita-paver-patio-design-04-nj.webp',
  painting: '/work/renovation-Renovation20.webp',
  // New grouped services
  'roof-repair': '/work/roof-roof14.webp',
  'roof-replacement': '/work/roof-roof30.webp',
  'commercial-roofing': '/work/roof-roof45.webp',
  'residential-roofing': '/work/roof-roof30.webp',
  'siding-installation': '/work/siding-siding6.webp',
  'siding-repair': '/work/siding-siding10.webp',
  'masonry-work': '/work/mansory-Mansory22.webp',
  'chimney-services': '/work/chimney-Chimney1.webp',
}
/** Photo shown alongside the "How it works" process steps, per trade. */
const processPhoto: Record<string, string> = {
  roofing: '/roof/optimized/roof (14).webp',
  siding: '/Siding/optimized/siding (6).webp',
  masonry: '/Mansory/optimized/Mansory (23).webp',
  gutters: '/Siding/optimized/siding (10).webp',
  'windows-doors': '/Siding/optimized/siding (14).webp',
  'decks-pavers': '/Pavec/lita-backyard-deck-design-08-nj.webp',
  painting: '/Renovation/optimized/Renovation (14).webp',
  // New grouped services
  'roof-repair': '/roof/optimized/roof (30).webp',
  'roof-replacement': '/roof/optimized/roof (14).webp',
  'commercial-roofing': '/roof/optimized/roof (45).webp',
  'residential-roofing': '/roof/optimized/roof (22).webp',
  'siding-installation': '/Siding/optimized/siding (6).webp',
  'siding-repair': '/Siding/optimized/siding (18).webp',
  'masonry-work': '/Mansory/optimized/Mansory (23).webp',
  'chimney-services': '/Chimney/optimized/Chimney (1).webp',
}
/** gallery.ts category names, keyed by service slug. Newer trades borrow the
 *  closest existing category so their gallery section still shows real work. */
const galleryCategory: Record<string, string> = {
  roofing: 'Roofing',
  siding: 'Siding',
  masonry: 'Masonry',
  gutters: 'Siding',
  'windows-doors': 'Siding',
  'decks-pavers': 'Decks & Pavers',
  painting: 'Renovation',
  // New grouped services
  'roof-repair': 'Roofing',
  'roof-replacement': 'Roofing',
  'commercial-roofing': 'Roofing',
  'residential-roofing': 'Roofing',
  'siding-installation': 'Siding',
  'siding-repair': 'Siding',
  'masonry-work': 'Masonry',
  'chimney-services': 'Masonry',
}

/** Drawing-set sheet code per trade — the document spine shared with the town pages. */
const sheetCode: Record<string, string> = {
  roofing: 'R-100',
  'roof-repair': 'R-102',
  'roof-replacement': 'R-101',
  'commercial-roofing': 'R-103',
  'residential-roofing': 'R-104',
  'chimney-services': 'C-100',
  siding: 'SD-100',
  'siding-installation': 'SD-101',
  'siding-repair': 'SD-102',
  masonry: 'M-100',
  'masonry-work': 'M-100',
  gutters: 'GT-100',
  'windows-doors': 'W-100',
  'decks-pavers': 'P-100',
  painting: 'PT-100',
}

/** Matrix service slug per trade, for deep links into /service-areas/<town>/<service>. */
const matrixService: Record<string, string> = {
  roofing: 'roofing',
  'roof-repair': 'roofing',
  'roof-replacement': 'roofing',
  'commercial-roofing': 'roofing',
  'residential-roofing': 'roofing',
  'chimney-services': 'chimney-repair',
  siding: 'siding',
  'siding-installation': 'siding',
  'siding-repair': 'siding',
  masonry: 'masonry',
  'masonry-work': 'masonry',
  'decks-pavers': 'paver-driveways',
}

const heroTrust = [
  'GAF Certified',
  '25-Year Workmanship Warranty',
  'Our Own Dedicated Crews',
  'Licensed & Insured Since 2004',
]

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const reveal = useReveal()
  const processRef = useReveal()
  const galleryRef = useReveal()
  const reviewsRef = useReveal()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const others = services.filter(
    (s) => s.slug !== service.slug && menuServiceSlugs.includes(s.slug),
  )
  const gallery = imagesByCategory(galleryCategory[service.slug] ?? 'All').slice(0, 8)
  const reviews = testimonialsFor(service.name).slice(0, 3)

  return (
    <>
      <Seo
        title={`${service.name} Contractor in NJ | Lita Construction LLC`}
        description={`Professional ${service.name.toLowerCase()} services across Northern & Central New Jersey. ${service.short}. GAF certified, fully insured. Free estimates — call ${business.phone}.`}
        path={`/services/${service.slug}`}
        image={sharePhoto[service.slug]}
        schema={[
          serviceSchema(service.slug)!,
          faqSchemaFrom(service.faqs),
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'Services', url: `${business.url}/services` },
            { name: service.name, url: `${business.url}/services/${service.slug}` },
          ]),
        ]}
      />

      {/* ── Hero — real project photo, not the shared stock background ── */}
      <section className="relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url("${heroPhoto[service.slug]}")` }}
          aria-hidden="true"
        />
        {/* Lighter scrim — strongest under the copy, letting the house photo breathe on the right */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-navy-950/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/70 to-transparent"
          aria-hidden="true"
        />
        <div className="container-x relative z-20 grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white/90">{service.name}</span>
            </nav>

            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
              <span className="h-px w-9 bg-brand-400/70" />
              Since 2004 · Sheet {sheetCode[service.slug] ?? 'A-100'}
            </span>
            <h1 className="mt-5 font-display text-display-lg text-white">
              {service.name} in <span className="whitespace-nowrap text-brand-400">New Jersey</span>
            </h1>

            {/* Quick-answer line — directly answers "what is this service" for readers skimming and for AI answer engines */}
            <p className="mt-5 text-lg leading-relaxed text-white/80">{service.quickAnswer}</p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={business.phoneHref} className="btn-primary">
                <PhoneIcon className="h-4 w-4" />
                Call Now: {business.phone}
              </a>
            </div>

            {/* Trust chip strip */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6">
              {heroTrust.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85">
                  <CheckIcon className="h-4 w-4 text-brand-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Free estimate form, stamped like approved paperwork */}
          <div className="relative w-full lg:max-w-xl lg:justify-self-end">
            <TownStamp
              title={service.name}
              subtitle="New Jersey · Since 2004"
              className="stamp-in pointer-events-none absolute -right-4 -top-9 z-10 hidden h-28 w-28 text-brand-600 drop-shadow-lg sm:block lg:-right-7 lg:-top-11 lg:h-32 lg:w-32"
            />
            <QuoteForm />
          </div>
        </div>

        {/* Triangle divider flowing into the section below */}
        <div
          className="pointer-events-none absolute -bottom-px right-0 z-10 h-16 w-1/3 bg-cloud-50 sm:h-24 lg:h-28"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* ── How it works — process steps beside a real project photo ── */}
      <section className="bg-cloud-50 py-20 sm:py-24">
        <div
          ref={processRef}
          className="reveal container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
        >
          {/* Photo with the site's signature red offset frame */}
          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <div
              className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-brand-600"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-navy-950 shadow-lift">
              <img
                src={encodeURI(processPhoto[service.slug])}
                alt={`${service.name} project in progress by Lita Construction in New Jersey`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            {/* Drawing-set sheet tag — the site-protocol sheet, shared with the town pages */}
            <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/60 bg-sand-100/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
              Sheet G-002 · Site Protocol
            </span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              What to expect, start to finish.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              No surprises, no vague timelines. Here&apos;s exactly how a{' '}
              {service.name.toLowerCase()} project runs with Lita Construction.
            </p>

            <ol className="mt-10 space-y-8">
              {service.process.map((step, i) => (
                <ProcessCard key={step.title} index={i} isLast={i === service.process.length - 1}>
                  <div className="flex gap-5">
                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-black text-white shadow-card ring-4 ring-cloud-50">
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-display text-lg font-bold text-ink-900">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cloud-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ProcessCard>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Sub-services — photo-topped cards, one distinct project photo each ── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Our {service.name} Services</span>
            <h2 className="mt-5 font-display text-display-md text-ink-900">
              Everything {service.name.toLowerCase()}, done right.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.subServices.map((sub, i) => (
              <SubCard key={sub.name} index={i}>
                {sub.name}
                {sub.description}
              </SubCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project gallery — real photos with the site's signature offset-frame treatment ── */}
      {gallery.length > 0 && (
        <section className="bg-cloud-100 py-20 sm:py-24">
          <div ref={galleryRef} className="reveal container-x">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow">Recent Work</span>
                <h2 className="mt-5 font-display text-display-md text-ink-900">
                  {service.name} projects across NJ.
                </h2>
              </div>
              <Link
                to="/projects"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900 transition-colors hover:text-brand-600"
              >
                See Our Full Portfolio
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>

            <div className="mt-10 grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-4">
              {gallery.map((img, i) => (
                <div
                  key={img.src}
                  className={`group overflow-hidden rounded-2xl bg-navy-950 shadow-soft ${
                    i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                  }`}
                >
                  <img
                    src={encodeURI(img.src)}
                    alt={`${service.name} project by Lita Construction in New Jersey`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Materials/options comparison + local coverage ── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <span className="eyebrow">Materials &amp; Options</span>
          <h2 className="mt-5 font-display text-display-md text-ink-900">
            Choosing the right {service.name.toLowerCase()} option.
          </h2>
          <p className="mt-5 max-w-2xl text-ink-800">
            Every home and budget is different — here&apos;s an honest comparison of what we
            install most often, so you know what to ask for before your free estimate.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-cloud-300 shadow-soft">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy-950 text-white">
                  <th className="px-5 py-4 font-display font-bold">Option</th>
                  <th className="px-5 py-4 font-display font-bold">Best For</th>
                  <th className="px-5 py-4 font-display font-bold">Typical Lifespan</th>
                  <th className="px-5 py-4 font-display font-bold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {service.materials.map((m, i) => (
                  <tr key={m.name} className={i % 2 === 0 ? 'bg-white' : 'bg-cloud-50'}>
                    <td className="px-5 py-4 font-semibold text-ink-900">{m.name}</td>
                    <td className="px-5 py-4 text-ink-800">{m.bestFor}</td>
                    <td className="px-5 py-4 whitespace-nowrap text-ink-800">{m.lifespan}</td>
                    <td className="px-5 py-4 text-ink-800">{m.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-2">
            <div>
              <span className="eyebrow">What&apos;s Included</span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
                Complete {service.name.toLowerCase()} services.
              </h3>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-cloud-300 bg-cloud-50 p-4 text-sm font-medium text-ink-800"
                  >
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="eyebrow">Local Coverage</span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
                {service.name} across North &amp; Central NJ.
              </h3>
              <p className="mt-5 leading-relaxed text-ink-800">
                We provide expert {service.name.toLowerCase()} services throughout{' '}
                {serviceAreas.join(', ').replace(/,([^,]*)$/, ' and$1')} — and the towns within
                them. Not sure if we cover your area?{' '}
                <Link to="/service-areas" className="font-semibold text-brand-600 hover:underline">
                  View our full service area map
                </Link>{' '}
                or call {business.phone}.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {/* Deep links into the dedicated service × city pages when this trade has them */}
                {[...towns.slice(0, 4), ...roofingTowns.slice(0, 4)].map((t) => {
                  const matrix = matrixService[service.slug]
                  return (
                    <Link
                      key={t.slug}
                      to={matrix ? `/service-areas/${t.slug}/${matrix}` : `/service-areas/${t.slug}`}
                      className="flex items-center gap-1.5 rounded-full border border-cloud-300 bg-cloud-50 px-3 py-1.5 text-xs font-medium text-ink-800 transition-colors hover:border-brand-600/40 hover:text-brand-600"
                    >
                      <PinIcon className="h-3 w-3 text-brand-600" />
                      {service.name} in {t.name}, NJ
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Real testimonials for this service ── */}
      {reviews.length > 0 && (
        <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
          <div
            className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/12 blur-3xl"
            aria-hidden="true"
          />
          <div ref={reviewsRef} className="reveal container-x relative">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
                <span className="h-px w-9 bg-brand-400/70" />
                Homeowner Reviews
              </span>
              <h2 className="mt-6 font-display text-display-md text-white">
                What NJ homeowners say about our {service.name.toLowerCase()}.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex text-brand-400">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <StarIcon key={j} className="h-4 w-4" />
                      ))}
                    </span>
                    <QuoteMarkIcon className="h-7 w-7 text-white/15" />
                  </div>
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-white/80">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display font-bold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-display text-sm font-bold text-white">{t.name}</span>
                      <span className="block text-xs text-white/55">{t.location}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <Link
              to="/reviews"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-brand-400"
            >
              Read More Reviews
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </section>
      )}

      {/* Service FAQs */}
      <section className="bg-cloud-100 py-20 sm:py-24">
        <div ref={reveal} className="reveal container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">{service.name} FAQs</span>
            <h2 className="mt-5 font-display text-display-md text-ink-900">Good to know.</h2>
            <p className="mt-5 text-cloud-600">
              Quick answers to the questions homeowners ask most about {service.name.toLowerCase()}.
              Have a different question?{' '}
              <Link to="/faq" className="font-semibold text-brand-600 hover:underline">
                Browse our full FAQ
              </Link>{' '}
              or call {business.phone}.
            </p>
          </div>
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      {/* Quote */}
      <section id="service-quote" className="scroll-mt-24 bg-navy-950 py-20 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              <span className="h-px w-8 bg-brand-400/60" />
              Free Estimate
            </span>
            <h2 className="mt-5 font-display text-display-md">
              Start your {service.name.toLowerCase()} project today.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Get a free, no-obligation estimate from a trusted, licensed New Jersey contractor.
              Call {business.phone} or send a request and we&apos;ll be in touch fast. Prefer to
              explore financing first?{' '}
              <Link to="/financing" className="font-semibold text-brand-400 hover:underline">
                See our flexible payment options
              </Link>
              .
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Other services */}
      <section className="bg-cloud-50 py-20">
        <div className="container-x">
          <span className="eyebrow">More from Lita Construction</span>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((o) => {
              return (
                <Link
                  key={o.slug}
                  to={`/services/${o.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-cloud-300 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-card"
                >
                  <div className="flex items-center gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f2f5f8] ring-1 ring-navy-950/5">
                      <ServiceGlyph slug={o.slug} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink-900">{o.name}</h3>
                      <p className="text-sm text-cloud-600">{o.short}</p>
                    </div>
                  </div>
                  <ArrowIcon className="h-5 w-5 text-brand-600 transition-transform group-hover:translate-x-1.5" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready for expert ${service.name.toLowerCase()}?`}
        subtitle={`Get a free, no-obligation estimate from a GAF-certified, family-owned NJ contractor. Call ${business.phone} or request a quote online.`}
      />
    </>
  )
}

function SubCard({
  children,
  index,
}: {
  children: [string, string]
  index: number
}) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 90}ms` }}>
      <div className="group relative flex h-full gap-5 overflow-hidden rounded-2xl border border-cloud-300 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-card">
        {/* Left accent bar that fills in on hover */}
        <span
          className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-brand-600 transition-transform duration-300 group-hover:scale-y-100"
          aria-hidden="true"
        />
        {/* Detail-callout bubble, as on a drawing sheet */}
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-sand-400/70 font-display text-base font-black text-sand-700">
          {String.fromCharCode(65 + index)}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-600">
              {children[0]}
            </h3>
            <ArrowIcon className="h-4 w-4 shrink-0 -translate-x-1 text-brand-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-cloud-600">{children[1]}</p>
        </div>
      </div>
    </div>
  )
}

function ProcessCard({
  children,
  index,
  isLast,
}: {
  children: React.ReactNode
  index: number
  isLast: boolean
}) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
      <li className="relative list-none">
        {!isLast && (
          <span
            className="absolute left-[1.375rem] top-11 h-[calc(100%+1rem)] w-px -translate-x-1/2 bg-gradient-to-b from-brand-600/40 to-cloud-300"
            aria-hidden="true"
          />
        )}
        {children}
      </li>
    </div>
  )
}
