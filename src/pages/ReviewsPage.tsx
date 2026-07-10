import { business } from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { ReviewCardGrid } from '../sections/Reviews'
import { StarIcon, GoogleIcon, ArrowIcon } from '../components/icons'
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

      {/* Rating summary + Google reviews CTA */}
      <section className="border-b border-cloud-200 bg-white py-12">
        <div className="container-x flex flex-col items-center justify-center gap-4 text-center">
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

          {/* Google review actions */}
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={business.google.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <GoogleIcon className="h-5 w-5" />
              Read our Google reviews
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={business.google.writeReview}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <StarIcon className="h-4 w-4" />
              Leave us a review
            </a>
          </div>
          <p className="text-xs text-cloud-500">
            Worked with us? A quick Google review means the world to a family-owned business.
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
