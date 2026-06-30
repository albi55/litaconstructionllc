import { Link } from 'react-router-dom'
import { WorkSlider } from '../components/WorkSlider'
import { ArrowIcon } from '../components/icons'
import { useReveal } from '../lib/useReveal'

export function OurWork() {
  const ref = useReveal()
  return (
    <section id="work" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div ref={ref} className="reveal container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Work</span>
            <h2 className="mt-5 font-display text-display-md text-navy-900">
              See the craftsmanship for yourself.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              Real roofing, siding, masonry, and renovation projects completed for New Jersey
              homeowners. Slide through a few of our favorites.
            </p>
          </div>
          <Link to="/projects" className="btn-ghost shrink-0">
            View Full Portfolio
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12">
          <WorkSlider />
        </div>
      </div>
    </section>
  )
}
