import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { PhoneIcon, ArrowIcon } from './icons'

/** Reusable navy call-to-action band for the bottom of inner pages. */
export function CtaBand({
  title = 'Ready to start your project?',
  subtitle = 'Get a free, no-obligation estimate from a trusted, licensed New Jersey contractor.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="bg-cloud-100 py-16 sm:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-7 py-12 text-white sm:px-12 sm:py-14">
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-display-md">{title}</h2>
              <p className="mt-3 text-white/70">{subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get a Free Estimate
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a href={business.phoneHref} className="btn-ghost-light">
                <PhoneIcon className="h-4 w-4" />
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
