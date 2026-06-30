import { useState } from 'react'
import { projects, business } from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { serviceIcon, PinIcon } from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

const categories = ['All', 'Roofing', 'Siding', 'Masonry'] as const

export function ProjectsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>('All')
  const list = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <Seo
        title="Our Projects — Roofing, Siding & Masonry Portfolio | Lita Construction"
        description="Browse completed roofing, siding, and masonry projects by Lita Construction across Northern & Central New Jersey. See the quality and craftsmanship for yourself."
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
            Recent <span className="text-brand-400">projects.</span>
          </>
        }
        subtitle="A look at the roofing, siding, and masonry work we've completed for homeowners across New Jersey. Your project could be next."
        crumbs={[{ label: 'Projects' }]}
      />

      <section className="bg-cloud-50 py-16 sm:py-20">
        <div className="container-x">
          {/* Filter */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <ProjectCard key={p.title} index={i}>
                <article className="group h-full overflow-hidden rounded-2xl border border-cloud-300 bg-white shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card">
                  {/* Image placeholder — swap with real photos later */}
                  <PlaceholderImage category={p.category} />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-brand-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600">
                        {p.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-cloud-500">
                        <PinIcon className="h-3.5 w-3.5" />
                        {p.location}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-lg font-bold text-navy-900">{p.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-cloud-600">{p.blurb}</p>
                  </div>
                </article>
              </ProjectCard>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-cloud-500">
            Project photos are representative. Ask us for references and a portfolio specific to your
            project type when you call {business.phone}.
          </p>
        </div>
      </section>

      <CtaBand title="Want results like these?" />
    </>
  )
}

function PlaceholderImage({ category }: { category: 'Roofing' | 'Siding' | 'Masonry' }) {
  const Icon = serviceIcon[category.toLowerCase()]
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-navy-900">
      <Icon className="h-16 w-16 text-white/30" />
    </div>
  )
}

function ProjectCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${(index % 3) * 90}ms` }}>
      {children}
    </div>
  )
}
