import { Seo } from '../components/Seo'
import { Hero } from '../sections/Hero'
import { WhoWeAre } from '../sections/WhoWeAre'
import { Services } from '../sections/Services'
import { WhyUs } from '../sections/WhyUs'
import { Process } from '../sections/Process'
import { ServiceAreas } from '../sections/ServiceAreas'
import { Reviews } from '../sections/Reviews'
import { OurWork } from '../sections/OurWork'
import { Faq } from '../sections/Faq'
import { localBusinessSchema, websiteSchema, faqSchema } from '../lib/schema'

export function Home() {
  return (
    <>
      <Seo
        title="Lita Construction LLC | Roofing, Siding & Masonry in NJ"
        description="Family-owned roofing, siding & masonry contractor serving Northern & Central NJ since 2004. GAF certified, fully insured, NJ Lic. #13VH11703800. Call (201) 540-7772 for a free estimate."
        path="/"
        schema={[localBusinessSchema, websiteSchema, faqSchema]}
      />
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyUs />
      <Process />
      <ServiceAreas />
      <Reviews />
      <OurWork />
      <Faq />
    </>
  )
}
