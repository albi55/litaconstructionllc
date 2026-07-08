import { Link, useParams } from 'react-router-dom'
import { business } from '../data/business'
import { townBySlug, towns, type Town } from '../data/towns'
import { imagesByCategory } from '../data/gallery'
import { roofingTownBySlug } from '../data/roofingTowns'
import { RoofingTownPage } from './RoofingTownPage'
import { servicesForTown } from '../data/serviceTownContent'
import { TownOverviewPage } from './TownOverviewPage'
import { Seo } from '../components/Seo'
import { CtaBand } from '../components/CtaBand'
import { QuoteForm } from '../components/QuoteForm'
import { TownStamp } from '../components/TownStamp'
import { TownServiceLinks } from '../components/TownServiceLinks'
import {
  PhoneIcon,
  ArrowIcon,
  CheckIcon,
  ShieldIcon,
  PinIcon,
  HandshakeIcon,
  ClockIcon,
  StarIcon,
} from '../components/icons'
import { breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'
import { NotFound } from './NotFound'

/** Name → slug lookup so "nearby town" chips can deep-link when a page exists. */
const slugByName: Record<string, string> = Object.fromEntries(
  towns.map((t) => [t.name, t.slug]),
)

/** Showcase hero photos — rotated per town so neighboring pages don't look cloned. */
const heroImages = [
  '/showcase/house%20(1).png',
  '/showcase/house%20(2).png',
  '/showcase/house3.png',
]

const heroTrust = [
  '10-Year Craftsmanship Warranty',
  'Permits & Zoning Handled',
  'Our Own Dedicated Crews',
  'Licensed & Insured Since 2004',
]

/**
 * Route dispatcher for /service-areas/:slug — Bergen County towns get the
 * masonry/chimney/stucco template, Monmouth & Somerset towns get the
 * roofing authority template.
 */
export function TownPage() {
  const { slug } = useParams<{ slug: string }>()
  const masonry = slug ? townBySlug[slug] : undefined
  if (masonry) return <MasonryTownPage town={masonry} />
  const roofing = slug ? roofingTownBySlug[slug] : undefined
  if (roofing) return <RoofingTownPage town={roofing} />
  // Every other town in the source-document content gets the services-hub overview.
  if (slug && servicesForTown(slug).length > 0) return <TownOverviewPage slug={slug} />
  return <NotFound />
}

/** Real project photo pools per trade — rotated by town index so every town page shows different work. */
const masonryPhotos = imagesByCategory('Masonry').map((g) => g.src)
const paverPhotos = imagesByCategory('Decks & Pavers').map((g) => g.src)
const chimneyPhotos = Array.from({ length: 17 }, (_, i) => `/Chimney/optimized/Chimney (${i + 1}).webp`)

/** The four flagship trades shown on every town page — copy shared, photos real & town-rotated. */
function tradeBlocks(town: Town, idx: number) {
  return [
    {
      code: 'M-101',
      tag: 'Chimney',
      title: 'Expert Chimney Repair: Flashing, Repointing & Stainless Steel Liners',
      image: chimneyPhotos[idx % chimneyPhotos.length],
      alt: `Chimney repair and restoration by Lita Construction in ${town.name}, NJ`,
      paragraphs: [
        'A leaking chimney is a structural emergency. Lita Construction specializes in complete chimney restoration, including custom lead chimney flashing, professional chimney cleaning, and the installation of reinforced concrete apex crowns to stop water penetration.',
        'We provide precision masonry repointing (tuckpointing) and the installation of UL-listed stainless steel chimney liners or clay tile flues to protect your home’s heating system from hazardous carbon monoxide leaks. From full fireplace restoration to minor brick repairs, we ensure your chimney is safe and code-compliant.',
      ],
      points: [
        'Custom lead flashing & apex crowns',
        'UL-listed stainless steel liners',
        'Precision repointing (tuckpointing)',
        'Fireplace restoration & brick repair',
      ],
    },
    {
      code: 'M-102',
      tag: 'Stone & Concrete',
      title: 'Custom Stone Steps, Limestone Walkways & Concrete Sidewalks',
      image: masonryPhotos[idx % masonryPhotos.length],
      alt: `Custom stone steps and walkway masonry by Lita Construction in ${town.name}, NJ`,
      paragraphs: [
        'Restore your home’s curb appeal with a high-end stone entryway. We design and build custom steps and stoops using natural limestone, bluestone, granite, and flagstone.',
        `Our masonry crews specialize in perfectly leveled concrete sidewalks and property walkways that meet ${town.codesLabel}. Whether it’s a small step repair or a grand limestone entrance, we build on deep-poured foundations to ensure your masonry never shifts or cracks during NJ’s freeze-thaw cycles.`,
      ],
      points: [
        'Limestone, bluestone, granite & flagstone',
        'Perfectly leveled concrete sidewalks',
        'Deep-poured, frost-proof foundations',
        'Step repairs to grand entrances',
      ],
    },
    {
      code: 'M-103',
      tag: 'Pavers',
      title: 'Premium Paver Driveways & Patios: Cambridge, Techo-Bloc, Unilock & Nicolock',
      image: paverPhotos[idx % paverPhotos.length],
      alt: `Premium paver driveway and patio installation by Lita Construction in ${town.name}, NJ`,
      paragraphs: [
        'Lita Construction transforms backyards into luxury outdoor living spaces. We install high-traffic paver driveways and patios using industry-leading brands like Cambridge (with ArmorTec), Techo-Bloc, Unilock, and Nicolock.',
        'Our expert installation includes permeable paver systems to manage NJ stormwater and deep-base grading to handle heavy vehicles. From bluestone pool decks to interlocking stone driveways, we build for a lifetime of durability.',
      ],
      points: [
        'Cambridge · Techo-Bloc · Unilock · Nicolock',
        'Permeable pavers for NJ stormwater',
        'Deep-base grading for heavy vehicles',
        'Bluestone pool decks & stone driveways',
      ],
    },
    {
      code: 'M-104',
      tag: 'Stucco & Asphalt',
      title: 'Full-House Stucco Systems, Asphalt Paving & Retaining Walls',
      image: masonryPhotos[(idx + 17) % masonryPhotos.length],
      alt: `Stucco, asphalt paving and retaining wall work by Lita Construction in ${town.name}, NJ`,
      paragraphs: [
        'We specialize in large-scale exterior transformations for entire houses and commercial buildings. We provide professional application of traditional hard-coat stucco and EIFS (Synthetic Stucco) systems with moisture-resistant finishes.',
        'Lita Construction also handles heavy-duty asphalt paving and sealcoating for residential driveways and parking lots. From structural retaining walls (Anchor and Grinnell systems) to decorative Cultured Stone veneer and outdoor kitchens, we are your one-stop shop for everything masonry since 2004.',
      ],
      points: [
        'Hard-coat stucco & EIFS systems',
        'Asphalt paving & sealcoating',
        'Anchor & Grinnell retaining walls',
        'Cultured Stone veneer & outdoor kitchens',
      ],
    },
  ]
}

const buildSteps = [
  {
    icon: HandshakeIcon,
    title: 'Expert Consultation',
    body: 'We walk the property with you, measure, and give you a clear, itemized quote — with honest recommendations on materials and scope, never high-pressure sales.',
  },
  {
    icon: ClockIcon,
    title: 'Fast, Clean Install',
    body: 'Our dedicated Lita masonry crews work clean and professional. We use plywood paths and debris containment to protect your lawn and landscaping during construction.',
  },
  {
    icon: StarIcon,
    title: 'Final Polish',
    body: 'We stay on-site every day until the final stone is swept and your property is spotless — and we walk the finished work with you before we call it done.',
  },
]

function MasonryTownPage({ town }: { town: Town }) {
  const heroRef = useReveal()
  const tradeRef0 = useReveal()
  const tradeRef1 = useReveal()
  const tradeRef2 = useReveal()
  const tradeRef3 = useReveal()
  const tradeReveals = [tradeRef0, tradeRef1, tradeRef2, tradeRef3]
  const permitsRef = useReveal()
  const processRef = useReveal()
  const warrantyRef = useReveal()

  const index = towns.findIndex((t) => t.slug === town.slug)
  const blocks = tradeBlocks(town, index)
  const servingLine = [town.name, ...town.neighbors]
  const heroImage = heroImages[((index % 3) + 3) % 3]

  return (
    <>
      <Seo
        title={`${town.name}, NJ Masonry, Chimney Repair & Stucco | Lita Construction`}
        description={`Lita Construction — ${town.name}'s #1 choice for masonry, chimney repair & full stucco since 2004. Stone steps, paver driveways, stainless steel liners & retaining walls near ${town.landmarks}. Call ${business.phone} for a free quote.`}
        path={`/service-areas/${town.slug}`}
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'Service Areas', url: `${business.url}/service-areas` },
            { name: `${town.name}, NJ`, url: `${business.url}/service-areas/${town.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Masonry, Chimney Repair, Stucco & Paving',
            provider: { '@id': `${business.url}/#business` },
            areaServed: servingLine.map((n) => ({ '@type': 'City', name: `${n}, NJ` })),
            description: `Masonry, chimney restoration, stucco, paver driveways, and asphalt paving for homeowners in ${town.name}, New Jersey — by Lita Construction, licensed, insured, and trusted since 2004.`,
            url: `${business.url}/service-areas/${town.slug}`,
          },
        ]}
      />

      {/* ── 1. Hero — showcase photo, layered scrims, trust chips ── */}
      <section className="relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url("${heroImage}")` }}
          aria-hidden="true"
        />
        {/* Lighter scrim — strongest under the copy, letting the house photo breathe on the right */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-navy-950/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/70 to-transparent"
          aria-hidden="true"
        />
        <div
          ref={heroRef}
          className="reveal container-x relative z-20 grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16"
        >
          {/* Left — copy */}
          <div>
            <nav
              className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <Link to="/service-areas" className="hover:text-white">
                Service Areas
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white/90">{town.name}, NJ</span>
            </nav>

            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
              <span className="h-px w-9 bg-brand-400/70" />
              Since 2004 · Serving Your Neighbors in {town.name} for Over 20 Years
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-display-lg text-white">
              {town.name}&apos;s #1 choice for{' '}
              <span className="text-brand-400">masonry, chimneys &amp; full stucco.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Check out our latest {town.showcase} masonry restorations, stainless steel chimney
              liners, and premium paver driveways near {town.landmarks}.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={business.phoneHref} className="btn-primary">
                <PhoneIcon className="h-4 w-4" />
                Call Now: {business.phone}
              </a>
            </div>

            <p className="mt-8 flex flex-wrap items-center gap-2 text-sm font-medium text-white/70">
              <PinIcon className="h-4 w-4 text-brand-400" />
              Serving {servingLine.slice(0, -1).join(', ')}, and{' '}
              {servingLine[servingLine.length - 1]}
            </p>

            {/* Trust chip strip */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6">
              {heroTrust.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85">
                  <CheckIcon className="h-4 w-4 text-brand-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — free estimate form, stamped like approved paperwork */}
          <div className="relative w-full lg:max-w-xl lg:justify-self-end">
            <TownStamp
              title={town.name}
              subtitle="Bergen County · NJ"
              className="stamp-in pointer-events-none absolute -right-4 -top-9 z-10 hidden h-28 w-28 text-brand-600 drop-shadow-lg sm:block lg:-right-7 lg:-top-11 lg:h-32 lg:w-32"
            />
            <QuoteForm />
          </div>
        </div>

        {/* Triangle divider flowing into the section below */}
        <div
          className="pointer-events-none absolute -bottom-px right-0 z-10 h-16 w-1/3 bg-cloud-100 sm:h-24 lg:h-28"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* ── 2. The four flagship trades — pinned spec sections on alternating surfaces ── */}
      {blocks.map((b, i) => {
        // Surface rhythm: cloud → navy → cloud → white, so the navy permits
        // section that follows never sits against another navy block.
        const dark = i === 1
        const surface = dark
          ? 'relative overflow-hidden bg-navy-950 text-white'
          : i === 3
            ? 'bg-white'
            : 'bg-cloud-100'
        const cardSurface = dark
          ? 'border-white/10 bg-white/[0.04]'
          : i === 3
            ? 'border-cloud-200 bg-cloud-100'
            : 'border-cloud-200 bg-white shadow-soft'
        return (
          <section key={b.code} className={`${surface} py-20 sm:py-28`}>
            {dark && (
              <div
                className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/12 blur-3xl"
                aria-hidden="true"
              />
            )}
            <div
              ref={tradeReveals[i]}
              className="reveal container-x relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
            >
              {/* Pinned sheet header + trade photo */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <span
                  className={`inline-flex items-center gap-2.5 rounded-lg border px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] ${
                    dark
                      ? 'border-sand-400/40 bg-white/[0.05] text-sand-400'
                      : 'border-sand-400/60 bg-sand-100/70 text-sand-700'
                  }`}
                >
                  Sheet {b.code} · {b.tag}
                </span>
                <h2
                  className={`mt-6 font-display text-display-md ${dark ? 'text-white' : 'text-ink-900'}`}
                >
                  {b.title}
                </h2>
                <p
                  className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-cloud-600'}`}
                >
                  {b.paragraphs[0]}
                </p>

                {/* Trade photo with drawing title block */}
                <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl shadow-lift">
                  <img
                    src={encodeURI(b.image)}
                    alt={b.alt}
                    className="h-full w-full object-cover"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-navy-950/85 px-5 py-2.5 backdrop-blur-sm">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-sand-400">
                      Sheet {b.code} — {b.tag}
                    </span>
                    <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:block">
                      Lita · Est. 2004
                    </span>
                  </div>
                </div>
              </div>

              {/* Spec cards — lead paragraph, then detail callouts */}
              <div className="space-y-5">
                <div className={`rounded-2xl border p-7 ${cardSurface}`}>
                  <p
                    className={`text-sm leading-relaxed sm:text-base ${
                      dark ? 'text-white/70' : 'text-cloud-600'
                    }`}
                  >
                    {b.paragraphs[1]}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {b.points.map((pt, j) => (
                    <div
                      key={pt}
                      className={`rounded-2xl border p-5 transition-colors duration-300 ${cardSurface} ${
                        dark ? 'hover:border-sand-400/40' : 'hover:shadow-card'
                      }`}
                    >
                      {/* Detail-callout bubble, as on a drawing sheet */}
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full border-2 font-display text-sm font-black ${
                          dark
                            ? 'border-sand-400/50 text-sand-400'
                            : 'border-sand-400/70 text-sand-700'
                        }`}
                      >
                        {String.fromCharCode(65 + j)}
                      </span>
                      <p
                        className={`mt-3.5 text-sm font-semibold leading-snug ${
                          dark ? 'text-white' : 'text-ink-900'
                        }`}
                      >
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── 3. Permits — navy anchor ── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-600/12 blur-3xl"
          aria-hidden="true"
        />
        <div ref={permitsRef} className="reveal container-x relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            {/* Drawing-set sheet tag — the general/administrative sheet */}
            <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/40 bg-white/[0.05] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-400">
              Sheet G-001 · Permits &amp; Zoning
            </span>
            <h2 className="mt-6 font-display text-display-md text-white">
              We handle all {town.name} masonry permits and zoning paperwork.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Don&apos;t let {town.buildingDept} delay your project. Lita Construction are experts
              in local codes for chimney height, driveway setbacks, and sidewalk requirements. We
              manage 100% of the permit applications and architectural drawings so you don&apos;t
              have to deal with the {town.hall} headache.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Chimney height & flue codes',
                'Driveway setback rules',
                'Sidewalk & apron requirements',
                'Permit applications & drawings',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm font-medium text-white/85">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Warranty card doubles as the visual anchor */}
          <div ref={warrantyRef} className="reveal">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <ShieldIcon className="h-6 w-6" />
              </span>
              <p className="mt-6 font-display text-4xl font-black text-brand-400">10-Year</p>
              <p className="mt-1 font-display text-xl font-bold text-white">
                Craftsmanship &amp; Structural Warranty
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                We stand behind every brick, bag of stucco, and asphalt lift. If you experience a
                structural issue, a chimney leak, or a shifting paver within the next 10 years,
                we&apos;re back to fix it for free. Our reputation in {town.name} is built on 20+
                years of quality, local work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. The 3-step build ── */}
      <section className="bg-white py-20 sm:py-28">
        <div ref={processRef} className="reveal container-x">
          <div className="max-w-2xl">
            {/* Sheet tag — the site-protocol sheet of the job set */}
            <span className="inline-flex items-center gap-2.5 rounded-lg border border-sand-400/60 bg-sand-100/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sand-700">
              Sheet G-002 · Site Protocol
            </span>
            <h2 className="mt-6 font-display text-display-md text-ink-900">
              The Lita Construction 3-step build.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cloud-600">
              Expert consultation, fast install, and a final polish — with your lawn and
              landscaping protected from the first day to the last sweep.
            </p>
          </div>

          {/* Punch-list timeline — a real sequence, so the numbers carry information */}
          <ol className="mt-14 grid gap-y-10 md:grid-cols-3 md:gap-x-8">
            {buildSteps.map((s, i) => (
              <li key={s.title} className="relative">
                {i < buildSteps.length - 1 && (
                  <span
                    className="absolute left-5 right-0 top-5 hidden -translate-y-1/2 border-t border-dashed border-cloud-400/80 md:block"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-black text-white shadow-card">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cloud-600">{s.body}</p>
              </li>
            ))}
          </ol>

          {/* Dedicated per-trade guides for this town */}
          <div className="mt-16 border-t border-cloud-200 pt-10">
            <TownServiceLinks townSlug={town.slug} townName={town.name} />
          </div>

          {/* Nearby towns we also serve */}
          <div className="mt-16 border-t border-cloud-200 pt-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cloud-500">
              Also serving nearby
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {town.neighbors.map((n) =>
                slugByName[n] ? (
                  <Link
                    key={n}
                    to={`/service-areas/${slugByName[n]}`}
                    className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-cloud-100 px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-600/40 hover:bg-brand-50 hover:text-brand-600"
                  >
                    <PinIcon className="h-4 w-4 text-brand-600" />
                    {n}, NJ
                  </Link>
                ) : (
                  <span
                    key={n}
                    className="inline-flex items-center gap-2 rounded-full border border-cloud-300 bg-cloud-100 px-4 py-2.5 text-sm font-semibold text-ink-800"
                  >
                    <PinIcon className="h-4 w-4 text-brand-600" />
                    {n}, NJ
                  </span>
                ),
              )}
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 rounded-full border border-brand-600/40 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
              >
                All service areas
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Get a free masonry, chimney, or paving quote today."
        subtitle={`Serving ${servingLine.join(', ')} — Lita Construction: licensed, insured, and trusted since 2004.`}
      />
    </>
  )
}
