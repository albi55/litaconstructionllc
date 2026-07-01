import { Link } from 'react-router-dom'
import { faqs, business } from '../data/business'
import { useReveal } from '../lib/useReveal'
import { FaqAccordion } from '../components/FaqAccordion'
import { PhoneIcon, ArrowIcon } from '../components/icons'

export function Faq() {
  const ref = useReveal()

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div
        ref={ref}
        className="reveal container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16"
      >
        {/* Left — sticky intro + support card */}
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">Common Questions</span>
          <h2 className="mt-6 font-display text-display-md text-ink-900">
            Answers before you ask.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cloud-600">
            Everything North Jersey homeowners want to know about working with Lita Construction.
          </p>

          {/* Support card */}
          <div className="mt-8 rounded-2xl border border-cloud-200 bg-cloud-100 p-6">
            <p className="font-display text-lg font-bold text-ink-900">Still have a question?</p>
            <p className="mt-1.5 text-sm text-cloud-600">
              Talk to a real person — no call center, no runaround.
            </p>
            <a
              href={business.phoneHref}
              className="group mt-5 flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white transition-transform duration-300 group-hover:scale-105">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-cloud-500">
                  Call us now
                </span>
                <span className="block font-display text-xl font-bold text-ink-900">
                  {business.phone}
                </span>
              </span>
            </a>
            <Link
              to="/faq"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-600"
            >
              View All FAQs
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        <FaqAccordion items={faqs} />
      </div>
    </section>
  )
}
