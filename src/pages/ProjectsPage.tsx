import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { business, testimonials } from '../data/business'
import { Seo } from '../components/Seo'
import { breadcrumbSchema } from '../lib/schema'
import { gallery, galleryCategories, imagesByCategory, type GalleryImage } from '../data/gallery'
import { useReveal } from '../lib/useReveal'
import {
  ArrowIcon,
  CloseIcon,
  PhoneIcon,
  ShieldIcon,
  StarIcon,
  QuoteMarkIcon,
} from '../components/icons'

/** How every project runs — shown below the gallery to build trust. */
const PROCESS = [
  {
    step: '01',
    title: 'Free On-Site Estimate',
    body: 'We come to you, inspect the work first-hand, and give you a clear, written price — no pressure, no surprises.',
  },
  {
    step: '02',
    title: 'A Clear Plan & Timeline',
    body: 'You get a straight answer on scope, materials, and exactly how long the job will take before we start.',
  },
  {
    step: '03',
    title: 'Clean, Careful Craftsmanship',
    body: 'Our own crews do the work — respectful of your home, tidy on site, and meticulous down to the last detail.',
  },
  {
    step: '04',
    title: 'Warranty & Peace of Mind',
    body: 'We stand behind every project, backed by a 25-year workmanship warranty and full licensing and insurance.',
  },
]

/** A standout review to feature under the gallery. */
const FEATURED = testimonials[0]

const PAGE = 12

/** Per-category counts for the filter pills. */
const counts: Record<string, number> = {
  All: gallery.length,
  ...galleryCategories.reduce((acc, c) => {
    if (c !== 'All') acc[c] = imagesByCategory(c).length
    return acc
  }, {} as Record<string, number>),
}

export function ProjectsPage() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>('All')
  const [shown, setShown] = useState(PAGE)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const all = useMemo(() => imagesByCategory(active), [active])
  const list = all.slice(0, shown)

  const setCategory = (c: (typeof galleryCategories)[number]) => {
    setActive(c)
    setShown(PAGE)
  }

  // Lightbox keyboard nav + scroll lock
  useEffect(() => {
    if (lightbox === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i === null ? i : (i + 1) % list.length))
      if (e.key === 'ArrowLeft')
        setLightbox((i) => (i === null ? i : (i - 1 + list.length) % list.length))
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, list.length])

  return (
    <>
      <Seo
        title="Our Projects — Roofing, Siding & Masonry Portfolio | Lita Construction"
        description="Browse completed roofing, siding, masonry, and renovation projects by Lita Construction across Northern & Central New Jersey. See the quality and craftsmanship for yourself."
        path="/projects"
        schema={breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'Projects', url: `${business.url}/projects` },
        ])}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: 'url("/showcase/house%20(1).png")' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/55"
          aria-hidden="true"
        />
        <div className="container-x relative py-20 sm:py-28">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90">Portfolio</span>
          </nav>
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
            <span className="h-px w-9 bg-brand-400/70" />
            Our Work
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">
            Recent <span className="text-brand-400">projects.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            A look at the roofing, siding, masonry, and renovation work we&apos;ve completed for
            homeowners across New Jersey. Your project could be next.
          </p>

          {/* Stat strip */}
          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { n: `${gallery.length}+`, l: 'Projects' },
              { n: '4', l: 'Specialties' },
              { n: '8', l: 'Counties' },
              { n: business.yearsExperience, l: 'Years' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-extrabold text-white">{s.n}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-cloud-100 py-16 sm:py-20">
        <div className="container-x">
          {/* Filter */}
          <div className="flex flex-wrap gap-2.5">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  active === c
                    ? 'bg-brand-600 text-white shadow-red'
                    : 'border border-cloud-300 bg-white text-ink-800 hover:border-brand-600 hover:text-brand-600'
                }`}
              >
                {c}
                <span
                  className={`rounded-full px-1.5 text-[11px] font-bold ${
                    active === c ? 'bg-white/20 text-white' : 'bg-cloud-100 text-cloud-500'
                  }`}
                >
                  {counts[c]}
                </span>
              </button>
            ))}
          </div>

          {/* Grid — key forces re-mount so reveal animation replays on filter change */}
          <div
            key={active}
            className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4"
          >
            {list.map((img, i) => (
              <ProjectTile
                key={img.src}
                img={img}
                index={i}
                onClick={() => setLightbox(i)}
                // Every 6th tile spans 2 cols/rows for a bento rhythm
                featured={i % 6 === 0}
              />
            ))}
          </div>

          {shown < all.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShown((s) => s + PAGE)}
                className="btn-ghost"
              >
                Load More
                <span className="text-cloud-500">({all.length - shown} more)</span>
              </button>
            </div>
          )}

          <p className="mt-12 text-center text-sm text-cloud-500">
            Like what you see? Call{' '}
            <a href={business.phoneHref} className="font-semibold text-brand-600 hover:underline">
              {business.phone}
            </a>{' '}
            for a free estimate on your own project.
          </p>
        </div>
      </section>

      {/* ── Featured review ── */}
      <ReviewBand />

      {/* ── How every project runs ── */}
      <ProcessSection />

      {/* ── Closing CTA ── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url("/showcase/house3.png")' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/70"
          aria-hidden="true"
        />
        <div className="container-x relative text-center">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
            <span className="h-px w-9 bg-brand-400/70" />
            Your project could be next
            <span className="h-px w-9 bg-brand-400/70" />
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-display-md text-white">
            Let&apos;s add your home to the <span className="text-brand-400">gallery.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            Free, no-obligation estimates from a licensed, GAF-certified NJ contractor. Tell us what
            you have in mind and we&apos;ll take it from there.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={business.phoneHref} className="btn-primary">
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
            <Link to="/contact" className="btn-ghost-light">
              Get a Free Estimate
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
            <span className="inline-flex items-center gap-1.5">
              <ShieldIcon className="h-3.5 w-3.5 text-brand-400" />
              {business.licenseLabel}
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <span>GAF Certified</span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <span>25-Year Warranty</span>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && list[lightbox] && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          {/* Prev / Next */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i === null ? i : (i - 1 + list.length) % list.length))
            }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
            aria-label="Previous"
          >
            <ArrowIcon className="h-6 w-6 rotate-180" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i === null ? i : (i + 1) % list.length))
            }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
            aria-label="Next"
          >
            <ArrowIcon className="h-6 w-6" />
          </button>

          <figure
            className="relative max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={encodeURI(list[lightbox].src)}
              alt={`${list[lightbox].category} project by Lita Construction`}
              className="max-h-[85vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 flex items-center justify-center gap-3 text-sm text-white/80">
              <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                {list[lightbox].category}
              </span>
              {lightbox + 1} / {list.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}

function ProjectTile({
  img,
  index,
  onClick,
  featured,
}: {
  img: GalleryImage
  index: number
  onClick: () => void
  featured: boolean
}) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${featured ? 'sm:col-span-2 sm:row-span-2' : ''}`}
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
    >
      <button
        onClick={onClick}
        className="group relative block h-full w-full overflow-hidden rounded-2xl bg-navy-950 shadow-soft transition-shadow duration-300 hover:shadow-card"
      >
        <img
          src={encodeURI(img.src)}
          alt={`${img.category} project by Lita Construction in New Jersey`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
        {/* Category tag */}
        <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          {img.category}
        </span>
        {/* View hint */}
        <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-navy-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </div>
  )
}

/** Featured client testimonial, tied to the work shown above. */
function ReviewBand() {
  const ref = useReveal()
  return (
    <section className="bg-white py-16 sm:py-20">
      <div ref={ref} className="reveal container-x">
        <figure className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-cloud-200 bg-cloud-100 p-8 text-center shadow-soft sm:p-14">
          <QuoteMarkIcon
            className="pointer-events-none absolute -left-2 -top-3 h-24 w-24 text-brand-600/10"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex justify-center gap-1 text-brand-600">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>
            <blockquote className="mx-auto mt-6 max-w-2xl font-display text-2xl font-bold leading-snug text-ink-900 sm:text-3xl">
              &ldquo;{FEATURED.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-7 flex items-center justify-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 font-display text-lg font-bold text-white">
                {FEATURED.name.charAt(0)}
              </span>
              <div className="text-left">
                <div className="font-display text-base font-bold text-ink-900">{FEATURED.name}</div>
                <div className="text-sm text-cloud-500">
                  {FEATURED.location} · {FEATURED.service}
                </div>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}

/** The four steps behind every job — reassurance before the final CTA. */
function ProcessSection() {
  const ref = useReveal()
  return (
    <section className="bg-cloud-100 py-16 sm:py-24">
      <div className="container-x">
        <div ref={ref} className="reveal max-w-2xl">
          <span className="eyebrow">How We Work</span>
          <h2 className="mt-6 font-display text-display-md text-ink-900">
            Behind every project on this page.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cloud-600">
            Great results aren&apos;t luck — they come from a process we&apos;ve refined over{' '}
            {business.yearsExperience} years. Here&apos;s exactly what working with us looks like.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <ProcessCard key={p.step} step={p} index={i} last={i === PROCESS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessCard({
  step,
  index,
  last,
}: {
  step: (typeof PROCESS)[number]
  index: number
  last: boolean
}) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal group relative h-full rounded-2xl border border-cloud-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-card"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* Connector arrow between cards (desktop) */}
      {!last && (
        <span
          className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-brand-600 text-white lg:flex"
          aria-hidden="true"
        >
          <ArrowIcon className="h-3.5 w-3.5" />
        </span>
      )}
      <div className="font-display text-4xl font-black text-cloud-200 transition-colors duration-300 group-hover:text-brand-600/30">
        {step.step}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{step.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-cloud-600">{step.body}</p>
    </div>
  )
}
