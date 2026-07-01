import { business } from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { ReviewCardGrid } from '../sections/Reviews'
import { StarIcon } from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'

export function ReviewsPage() {
  return (
    <>
      <Seo
        title="Reviews & Testimonials | Lita Construction LLC — NJ Contractor"
        description="Read what New Jersey homeowners say about Lita Construction's roofing, siding & masonry work. Rated 5 stars for quality, value, and professionalism."
        path="/reviews"
        schema={breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'Reviews', url: `${business.url}/reviews` },
        ])}
      />

      <PageHero
        eyebrow="Homeowner Reviews"
        title={
          <>
            Trusted by <span className="text-brand-400">North Jersey.</span>
          </>
        }
        subtitle="Our reputation is built one satisfied homeowner at a time. Here's what our customers say about working with Lita Construction."
        crumbs={[{ label: 'Reviews' }]}
      />

      {/* Rating summary */}
      <section className="border-b border-cloud-200 bg-white py-10">
        <div className="container-x flex flex-col items-center justify-center gap-3 text-center">
          <span className="flex text-brand-600">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </span>
          <p className="font-display text-xl font-bold text-ink-900">
            Rated 5 stars by New Jersey homeowners
          </p>
          <p className="max-w-xl text-cloud-600">
            From roofing to masonry, families across Bergen, Passaic, Essex and beyond trust Lita
            Construction for honest pricing and exceptional craftsmanship.
          </p>
        </div>
      </section>

      <section className="bg-cloud-50 py-20">
        <div className="container-x">
          <ReviewCardGrid />
        </div>
      </section>

      <CtaBand title="Join hundreds of happy homeowners." />
    </>
  )
}
