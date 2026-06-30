import { faqs, services, business } from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { FaqAccordion } from '../components/FaqAccordion'
import { faqSchemaFrom, breadcrumbSchema } from '../lib/schema'

export function FaqPage() {
  // Combine general FAQs with each service's FAQs for a comprehensive page.
  const allFaqs = [...faqs, ...services.flatMap((s) => s.faqs)]

  return (
    <>
      <Seo
        title="Frequently Asked Questions | Lita Construction LLC — NJ Contractor"
        description="Answers to common questions about roofing, siding & masonry, licensing, warranties, estimates, and service areas from Lita Construction LLC in New Jersey."
        path="/faq"
        schema={[faqSchemaFrom(allFaqs), breadcrumbSchema([
          { name: 'Home', url: `${business.url}/` },
          { name: 'FAQ', url: `${business.url}/faq` },
        ])]}
      />

      <PageHero
        eyebrow="Common Questions"
        title={
          <>
            Frequently asked <span className="text-brand-400">questions.</span>
          </>
        }
        subtitle="Everything North Jersey homeowners want to know about working with Lita Construction. Still curious? Just call us."
        crumbs={[{ label: 'FAQ' }]}
      />

      <section className="bg-cloud-50 py-20">
        <div className="container-x max-w-3xl">
          <div className="mb-10">
            <span className="eyebrow">General</span>
            <h2 className="mt-4 font-display text-2xl font-bold text-navy-900">About Lita Construction</h2>
          </div>
          <FaqAccordion items={faqs} />

          {services.map((s) => (
            <div key={s.slug} className="mt-14">
              <div className="mb-6">
                <span className="eyebrow">{s.name}</span>
                <h2 className="mt-4 font-display text-2xl font-bold text-navy-900">{s.name} questions</h2>
              </div>
              <FaqAccordion items={s.faqs} defaultOpen={null} />
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Still have a question? Just ask." subtitle={`Call ${business.phone} or request a free estimate — we're happy to help.`} />
    </>
  )
}
