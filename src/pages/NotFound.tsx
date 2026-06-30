import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { Seo } from '../components/Seo'
import { PhoneIcon, ArrowIcon } from '../components/icons'

export function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Lita Construction LLC"
        description="The page you're looking for can't be found. Return home or contact Lita Construction for roofing, siding & masonry in New Jersey."
        path="/404"
        noindex
      />
      <section className="flex min-h-[70vh] items-center bg-navy-950 pt-[104px] text-white">
        <div className="container-x text-center">
          <div className="font-display text-[clamp(5rem,18vw,12rem)] font-black leading-none text-brand-400">
            404
          </div>
          <h1 className="mt-2 font-display text-display-md">This page took a detour.</h1>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
            on solid ground.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary">
              Back to Home
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={business.phoneHref} className="btn-ghost-light">
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
