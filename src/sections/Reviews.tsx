import { testimonials } from '../data/business'
import { StarIcon, QuoteMarkIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'

export function ReviewCardGrid({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((t, i) => (
        <ReviewCard key={t.name} index={i}>
          <figure className="flex h-full flex-col rounded-2xl border border-cloud-300 bg-white p-8 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="flex text-brand-600">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} className="h-4 w-4" />
                ))}
              </span>
              <QuoteMarkIcon className="h-8 w-8 text-cloud-200" />
            </div>
            <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-800">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-cloud-200 pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-display font-bold text-white">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block font-display font-bold text-ink-900">{t.name}</span>
                <span className="block text-sm text-cloud-600">
                  {t.location} · {t.service}
                </span>
              </span>
            </figcaption>
          </figure>
        </ReviewCard>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Homeowner Reviews</span>
            <h2 className="mt-5 font-display text-display-md text-ink-900">Built on word of mouth.</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex text-brand-600">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-6 w-6" />
              ))}
            </span>
            <span className="text-sm text-cloud-600">Rated 5 stars by North Jersey homeowners</span>
          </div>
        </div>

        <div className="mt-14">
          <ReviewCardGrid limit={3} />
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
      {children}
    </div>
  )
}
