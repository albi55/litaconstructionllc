import { testimonials } from '../data/business'
import { StarIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'

export function Reviews() {
  return (
    <section id="reviews" className="relative scroll-mt-24 bg-ink-950 py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Homeowner Reviews</span>
            <h2 className="mt-5 font-display text-display-md text-bone-50">
              Built on word of mouth.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-6 w-6" />
              ))}
            </span>
            <span className="text-sm text-bone-300">
              Rated 5 stars by North Jersey homeowners
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ReviewCard key={t.name} index={i}>
              <figure className="flex h-full flex-col border border-ink-700 bg-ink-900 p-8">
                <span className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} className="h-4 w-4" />
                  ))}
                </span>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-bone-100">
                  <span className="font-display text-4xl leading-none text-amber-500/40">“</span>
                  <p className="-mt-3">{t.quote}</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-ink-700 pt-5">
                  <div className="font-display font-bold text-bone-50">{t.name}</div>
                  <div className="text-sm text-bone-300">
                    {t.location} · {t.service}
                  </div>
                </figcaption>
              </figure>
            </ReviewCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 110}ms` }}>
      {children}
    </div>
  )
}
