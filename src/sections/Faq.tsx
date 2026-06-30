import { Link } from 'react-router-dom'
import { faqs, business } from '../data/business'
import { useReveal } from '../lib/useReveal'
import { FaqAccordion } from '../components/FaqAccordion'

export function Faq() {
  const ref = useReveal()

  return (
    <section id="faq" className="scroll-mt-24 bg-cloud-50 py-20 sm:py-28">
      <div ref={ref} className="reveal container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">Common Questions</span>
          <h2 className="mt-5 font-display text-display-md text-navy-900">Answers before you ask.</h2>
          <p className="mt-5 text-cloud-600">
            Everything North Jersey homeowners want to know about working with Lita Construction.
            Still have a question?
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={business.phoneHref} className="btn-navy">
              Call {business.phone}
            </a>
            <Link to="/faq" className="btn-ghost">
              View All FAQs
            </Link>
          </div>
        </div>

        <FaqAccordion items={faqs} />
      </div>
    </section>
  )
}
