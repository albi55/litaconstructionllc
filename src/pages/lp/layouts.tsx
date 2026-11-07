/**
 * The four landing-page layouts. Each page is assigned one deterministically
 * (see buildLandingPage), so the same URL always looks the same, while towns
 * next to each other in an ad group get genuinely different page structures:
 *
 *  A · split    — dark photo hero with the form beside the headline
 *  B · centered — light, centered hero with a photo collage; form mid-page
 *  C · sidebar  — image/text split hero; content column + sticky form
 *  D · bold     — problem → solution story with a quick-callback hero
 */
import { business } from '../../data/business'
import { CheckIcon, ArrowIcon, PhoneIcon } from '../../components/icons'
import {
  AreaNote,
  CallLink,
  CredentialRow,
  Faq,
  Gallery,
  H1,
  LeadForm,
  LpFooter,
  LpTopBar,
  MobileActions,
  Reviews,
  SectionHead,
  StatsRow,
  TrustList,
  usePage,
} from './blocks'

/* ─────────────────────── shared content pieces ─────────────────────── */

function Intro({ className = '' }: { className?: string }) {
  const page = usePage()
  return (
    <div className={`space-y-4 text-lg leading-relaxed text-cloud-600 ${className}`}>
      {page.intro.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

/** "Fort Lee homes" / "Fort Lee properties" */
function useWhere() {
  const page = usePage()
  return `${page.town.name} ${page.service.customer === 'homeowners' ? 'homes' : 'properties'}`
}

/** Local sections as two-column cards. */
function SectionsCards() {
  const page = usePage()
  return (
    <div className="space-y-16">
      {page.sections.map((s, i) => (
        <div key={s.heading}>
          <SectionHead eyebrow={i === 0 ? 'What we do' : 'Also included'} title={s.heading} sub={s.lead} />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {s.bullets.map((b, j) => (
              <div key={j} className="rounded-2xl border border-cloud-200 bg-white p-7 shadow-soft">
                {b.title && (
                  <h3 className="flex items-start gap-3 font-display text-lg font-bold text-ink-900">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {b.title}
                  </h3>
                )}
                <p className={`leading-relaxed text-cloud-600 ${b.title ? 'mt-3 pl-9' : ''}`}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/** Local sections as a numbered list. */
function SectionsNumbered() {
  const page = usePage()
  let n = 0
  return (
    <div className="space-y-12">
      {page.sections.map((s) => (
        <div key={s.heading}>
          <h3 className="font-display text-2xl font-bold text-ink-900 sm:text-[28px] sm:leading-tight">{s.heading}</h3>
          {s.lead && <p className="mt-3 text-cloud-600">{s.lead}</p>}
          <ol className="mt-6 divide-y divide-cloud-200 border-y border-cloud-200">
            {s.bullets.map((b, i) => {
              n += 1
              return (
                <li key={i} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
                  <span className="font-display text-2xl font-extrabold text-brand-600">{String(n).padStart(2, '0')}</span>
                  <div>
                    {b.title && <h4 className="font-bold text-ink-900">{b.title}</h4>}
                    <p className="mt-1 leading-relaxed text-cloud-600">{b.body}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      ))}
    </div>
  )
}

/** Local sections as a check list (compact, for the sidebar layout's content column). */
function SectionsChecklist() {
  const page = usePage()
  return (
    <div className="space-y-12">
      {page.sections.map((s) => (
        <section key={s.heading}>
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-[28px] sm:leading-tight">{s.heading}</h2>
          {s.lead && <p className="mt-3 text-cloud-600">{s.lead}</p>}
          <ul className="mt-6 space-y-5">
            {s.bullets.map((b, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  {b.title && <h3 className="font-bold text-ink-900">{b.title}</h3>}
                  <p className="mt-1 leading-relaxed text-cloud-600">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

function ProcessTimeline({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const page = usePage()
  const dark = tone === 'dark'
  if (page.process.length === 0) return null
  return (
    <ol className="space-y-8">
      {page.process.map((p, i) => (
        <li key={p.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
            {i + 1}
          </span>
          <div className={i < page.process.length - 1 ? `border-b pb-8 ${dark ? 'border-white/10' : 'border-cloud-200'}` : ''}>
            <h3 className={`font-display text-lg font-bold ${dark ? 'text-white' : 'text-ink-900'}`}>{p.title}</h3>
            <p className={`mt-1.5 leading-relaxed ${dark ? 'text-white/70' : 'text-cloud-600'}`}>{p.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function ProcessGrid() {
  const page = usePage()
  if (page.process.length === 0) return null
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {page.process.map((p, i) => (
        <div key={p.title} className="rounded-2xl border border-cloud-200 bg-cloud-50 p-7">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
            {i + 1}
          </span>
          <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-cloud-600">{p.description}</p>
        </div>
      ))}
    </div>
  )
}

function HeroImg({ className = '' }: { className?: string }) {
  const page = usePage()
  return (
    <img
      src={page.heroImage}
      alt={`${page.service.name} by Lita Construction — ${page.town.name}, NJ`}
      fetchPriority="high"
      decoding="async"
      className={`object-cover ${className}`}
    />
  )
}

function CtaButtons({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const page = usePage()
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a href="#estimate" className="btn-primary whitespace-nowrap">
        {page.ctaLabel}
        <ArrowIcon className="h-4 w-4" />
      </a>
      <CallLink className={`${tone === 'dark' ? 'btn-ghost-light' : 'btn-ghost'} whitespace-nowrap`}>
        <PhoneIcon className="h-4 w-4" />
        {business.phone}
      </CallLink>
    </div>
  )
}

function FinalCta({ tone = 'dark' }: { tone?: 'dark' | 'red' }) {
  const page = usePage()
  return (
    <section className={tone === 'red' ? 'bg-brand-600 py-16 text-white sm:py-20' : 'bg-navy-950 py-16 text-white sm:py-20'}>
      <div className="container-x flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-display-md">Ready to get started in {page.town.name}?</h2>
          <p className="mt-3 text-lg text-white/75">
            {page.service.offer}. Call us or send the form — we'll find a time that works for you.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <CallLink className="btn-ghost-light">
            <PhoneIcon className="h-4 w-4" />
            {business.phone}
          </CallLink>
          <a href="#estimate" className={`${tone === 'red' ? 'btn-navy' : 'btn-primary'} whitespace-nowrap`}>
            {page.ctaLabel}
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── A · split ─────────────────────────── */

export function LayoutSplit() {
  const page = usePage()
  const where = useWhere()
  return (
    <>
      <LpTopBar tone="dark" />
      <section className="relative overflow-hidden bg-navy-950">
        <HeroImg className="absolute inset-0 h-full w-full opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" aria-hidden="true" />
        <div className="container-x relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
              <span className="h-px w-8 bg-white/40" />
              {page.town.county} County · Since {business.founded}
            </p>
            <H1 className="mt-5" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {page.base?.short ? `${page.base.short}. ` : ''}
              {page.service.offer}, with a written estimate before any work begins.
            </p>
            <TrustList tone="dark" className="mt-8" />
            <CallLink className="btn-ghost-light mt-9">
              <PhoneIcon className="h-4 w-4" />
              Call {business.phone}
            </CallLink>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHead eyebrow="Local expertise" title={`${page.service.name} built for ${where}`} />
            <Intro className="mt-6" />
            <AreaNote className="mt-6" />
          </div>
          <Gallery variant="feature" />
        </div>
      </section>

      <section className="bg-cloud-100 py-16 sm:py-24">
        <div className="container-x">
          <SectionsCards />
        </div>
      </section>

      <section className="bg-navy-950 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <SectionHead
              tone="dark"
              eyebrow="How it works"
              title="Simple, honest, start to finish"
              sub="No pressure and no surprises — here's exactly what happens after you reach out."
            />
            <div className="mt-8">
              <CtaButtons />
            </div>
          </div>
          <ProcessTimeline tone="dark" />
        </div>
      </section>

      <section className="bg-cloud-50 py-16 sm:py-24">
        <div className="container-x">
          <Reviews />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHead eyebrow="FAQ" title={`${page.service.name} questions, answered`} className="lg:sticky lg:top-10 lg:self-start" />
          <Faq />
        </div>
      </section>

      <FinalCta />
    </>
  )
}

/* ─────────────────────────── B · centered ─────────────────────────── */

export function LayoutCentered() {
  const page = usePage()
  return (
    <>
      <LpTopBar />
      <section className="bg-cloud-100 pb-14 pt-14 sm:pt-20">
        <div className="container-x text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-sand-400/60 bg-sand-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sand-700">
            {page.service.offer}
          </p>
          <H1 tone="light" className="mx-auto mt-6 max-w-4xl" />
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cloud-600">
            Family-owned New Jersey contractor serving {page.town.name}
            {page.zip ? ` (${page.zip})` : ''} and {page.town.county} County since {business.founded}.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons tone="light" />
          </div>
          <TrustList className="mt-8 justify-center" />
        </div>
        <div className="container-x mt-12">
          <div className="grid h-[300px] grid-cols-3 grid-rows-2 gap-3 sm:h-[480px]">
            <HeroImg className="col-span-3 row-span-2 h-full w-full rounded-2xl sm:col-span-2" />
            {page.gallery.slice(0, 2).map((src) => (
              <img
                key={src}
                src={src}
                alt={`${page.service.name} work by Lita Construction`}
                loading="lazy"
                decoding="async"
                className="hidden h-full w-full rounded-2xl object-cover sm:block"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud-50 py-12">
        <div className="container-x">
          <StatsRow />
        </div>
      </section>

      <section className="bg-cloud-50 pb-16 sm:pb-24">
        <div className="container-x">
          <Reviews heading={`Why ${page.town.name} neighbors call Lita`} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <SectionHead eyebrow={`${page.town.name}, NJ`} title={`Your ${page.service.copy.project} in ${page.town.name}`} />
            <Intro className="mt-6" />
            <AreaNote className="mt-6" />
          </div>
          <SectionsNumbered />
        </div>
      </section>

      <section className="bg-cloud-100 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Free estimate"
              title="Tell us about your project"
              sub="A Lita team member — not a call center — will call you back to set up a visit."
            />
            <ul className="mt-7 space-y-3">
              {page.features.slice(0, 5).map((f) => (
                <li key={f} className="flex items-start gap-3 font-semibold text-ink-800">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
            </ul>
            <CredentialRow className="mt-9" />
          </div>
          <LeadForm heading={`${page.service.name} estimate — ${page.town.name}`} />
        </div>
      </section>

      <section className="bg-cloud-50 py-16 sm:py-24">
        <div className="container-x max-w-4xl">
          <SectionHead center eyebrow="FAQ" title={`Questions we hear in ${page.town.name}`} />
          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </section>

      <FinalCta tone="red" />
    </>
  )
}

/* ─────────────────────────── C · sidebar ─────────────────────────── */

export function LayoutSidebar() {
  const page = usePage()
  return (
    <>
      <LpTopBar />
      <section className="grid bg-white lg:grid-cols-2">
        <HeroImg className="h-64 w-full sm:h-80 lg:h-full lg:min-h-[560px]" />
        <div className="flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-14 lg:py-16">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-600">
            <span className="h-px w-8 bg-brand-600/50" />
            Serving {page.town.name} · {page.town.county} County
          </p>
          <H1 tone="light" className="mt-5" />
          <p className="mt-5 text-lg leading-relaxed text-cloud-600">{page.base?.blurb ?? page.service.offer}</p>
          <div className="mt-7 flex items-start gap-4 rounded-2xl border border-brand-600/20 bg-brand-50 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
              <CheckIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-ink-900">{page.service.offer}</p>
              <p className="mt-0.5 text-sm text-cloud-600">Written, itemized and free — no pressure to sign.</p>
            </div>
          </div>
          <div className="mt-8">
            <CtaButtons tone="light" />
          </div>
        </div>
      </section>

      <div className="border-y border-cloud-200 bg-cloud-100 py-5">
        <div className="container-x">
          <TrustList className="justify-center" />
        </div>
      </div>

      <section className="bg-cloud-50 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
          <div className="order-2 space-y-16 lg:order-1">
            <div>
              <SectionHead eyebrow="What to know" title={`${page.service.name} in ${page.town.name}`} />
              <Intro className="mt-6" />
              <AreaNote className="mt-6" />
            </div>
            <SectionsChecklist />
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-[28px]">Recent work</h2>
              <div className="mt-6">
                <Gallery />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-[28px]">Our process</h2>
              <div className="mt-8">
                <ProcessTimeline />
              </div>
            </div>
          </div>
          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-6">
              <LeadForm sub="Takes 30 seconds. We'll call to confirm a time for your free visit." />
              <CredentialRow className="mt-6 justify-center" />
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-navy-950 py-16 sm:py-24">
        <div className="container-x">
          <Reviews tone="dark" />
        </div>
      </section>

      <section className="bg-cloud-50 py-16 sm:py-24">
        <div className="container-x">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10">
            <Faq columns />
          </div>
        </div>
      </section>
    </>
  )
}

/* ─────────────────────────── D · bold ─────────────────────────── */

export function LayoutBold() {
  const page = usePage()
  const primary = page.sections[0]
  const cards = primary?.bullets.slice(0, 4) ?? []
  const hook = page.intro[0]?.split(/(?<=[.!?])\s+/).slice(0, 2).join(' ')
  return (
    <>
      <LpTopBar tone="dark" />
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-y-0 right-0 hidden w-[44%] overflow-hidden lg:block" style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)' }}>
          <HeroImg className="h-full w-full" />
        </div>
        <div className="container-x relative py-14 sm:py-20">
          <div className="max-w-2xl lg:max-w-[52%]">
            <span className="inline-block rounded-md bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              {page.town.name}, NJ {page.zip}
            </span>
            <H1 className="mt-5" />
            {hook && <p className="mt-5 text-lg leading-relaxed text-white/75">{hook}</p>}
            <LeadForm
              compact
              tone="dark"
              className="mt-8"
              heading="Get a fast callback"
              sub="Leave your name and number — we'll call you back during business hours."
            />
          </div>
        </div>
        <HeroImg className="h-56 w-full sm:h-72 lg:hidden" />
      </section>

      {cards.length > 0 && (
        <section className="bg-cloud-50 py-16 sm:py-24">
          <div className="container-x">
            <SectionHead eyebrow={`${page.service.name} · ${page.town.name}`} title={primary.heading} sub={primary.lead} />
            <div className={`mt-10 grid gap-5 sm:grid-cols-2 ${cards.length >= 4 ? 'lg:grid-cols-4' : cards.length === 3 ? 'lg:grid-cols-3' : ''}`}>
              {cards.map((b, i) => (
                <div key={i} className="rounded-2xl border border-cloud-200 border-t-4 border-t-brand-600 bg-white p-7 shadow-soft">
                  {b.title && <h3 className="font-display text-lg font-bold text-ink-900">{b.title}</h3>}
                  <p className="mt-2 text-sm leading-relaxed text-cloud-600">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <SectionHead eyebrow="Our process" title="From first call to final walkthrough" />
          <div className="mt-10">
            <ProcessGrid />
          </div>
        </div>
      </section>

      <section className="bg-cloud-100 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <Gallery variant="feature" />
          </div>
          <div className="space-y-10">
            {page.intro.slice(1).map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-cloud-600">
                {p}
              </p>
            ))}
            {page.sections.slice(1).map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-[28px] sm:leading-tight">{s.heading}</h2>
                <ul className="mt-5 space-y-4">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed text-cloud-600">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                      <span>
                        {b.title && <strong className="text-ink-900">{b.title}. </strong>}
                        {b.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {page.sections.length <= 1 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-[28px]">Why {page.town.name} chooses Lita</h2>
                <TrustList className="mt-5 flex-col !gap-y-3" />
              </div>
            )}
            <AreaNote />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <Reviews />
        </div>
      </section>

      <section className="bg-cloud-50 py-16 sm:py-24">
        <div className="container-x">
          <SectionHead eyebrow="FAQ" title="Good questions, straight answers" />
          <div className="mt-10">
            <Faq columns />
          </div>
        </div>
      </section>

      <section className="bg-brand-600 py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-white">
            <h2 className="font-display text-display-md">Let's get your {page.service.copy.project} done right.</h2>
            <p className="mt-4 text-lg text-white/80">{page.service.offer}. Prefer to talk it through?</p>
            <CallLink className="btn-ghost-light mt-6">
              <PhoneIcon className="h-4 w-4" />
              Call {business.phone}
            </CallLink>
            <TrustList tone="dark" className="mt-8" />
          </div>
          <LeadForm heading="Tell us about the job" anchor={false} />
        </div>
      </section>
    </>
  )
}

export const layoutComponents = {
  split: LayoutSplit,
  centered: LayoutCentered,
  sidebar: LayoutSidebar,
  bold: LayoutBold,
} as const

export { LpFooter, MobileActions }
