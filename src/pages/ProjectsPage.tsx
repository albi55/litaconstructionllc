import { useMemo, useState } from 'react'
import { business } from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { breadcrumbSchema } from '../lib/schema'
import { galleryCategories, imagesByCategory } from '../data/gallery'
import { useReveal } from '../lib/useReveal'

const PAGE = 12

export function ProjectsPage() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>('All')
  const [shown, setShown] = useState(PAGE)

  const all = useMemo(() => imagesByCategory(active), [active])
  const list = all.slice(0, shown)

  const setCategory = (c: (typeof galleryCategories)[number]) => {
    setActive(c)
    setShown(PAGE)
  }

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

      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Recent <span className="text-brand-600">projects.</span>
          </>
        }
        subtitle="A look at the roofing, siding, masonry, and renovation work we've completed for homeowners across New Jersey. Your project could be next."
        crumbs={[{ label: 'Portfolio' }]}
      />

      <section className="bg-cloud-50 py-16 sm:py-20">
        <div className="container-x">
          {/* Filter */}
          <div className="flex flex-wrap gap-2.5">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === c
                    ? 'bg-brand-600 text-white'
                    : 'border border-cloud-300 bg-white text-navy-800 hover:border-brand-600 hover:text-brand-600'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((img, i) => (
              <ProjectCard key={img.src} index={i}>
                <figure className="group relative overflow-hidden rounded-2xl border border-cloud-300 bg-navy-950 shadow-soft transition-all hover:shadow-card">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={encodeURI(img.src)}
                      alt={`${img.category} project by Lita Construction in New Jersey`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-navy-950/85 to-transparent p-4 pt-12">
                    <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {img.category}
                    </span>
                  </figcaption>
                </figure>
              </ProjectCard>
            ))}
          </div>

          {shown < all.length && (
            <div className="mt-12 text-center">
              <button onClick={() => setShown((s) => s + PAGE)} className="btn-ghost">
                Load More ({all.length - shown} more)
              </button>
            </div>
          )}

          <p className="mt-10 text-center text-sm text-cloud-500">
            Like what you see? Call{' '}
            <a href={business.phoneHref} className="font-semibold text-brand-600 hover:underline">
              {business.phone}
            </a>{' '}
            for a free estimate on your own project.
          </p>
        </div>
      </section>

      <CtaBand title="Want results like these?" />
    </>
  )
}

function ProjectCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${(index % 3) * 80}ms` }}>
      {children}
    </div>
  )
}
