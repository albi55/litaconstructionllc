import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  faqs,
  services,
  serviceGroups,
  serviceBySlug,
  business,
} from '../data/business'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { PhoneIcon, MailIcon, ArrowIcon } from '../components/icons'
import { faqSchemaFrom, breadcrumbSchema } from '../lib/schema'
import { useReveal } from '../lib/useReveal'

/** One FAQ enriched with the category it belongs to, for filtering + labels. */
type CategorizedFaq = {
  q: string
  a: string
  category: string // 'General' or a trade group name
  service: string // 'Lita Construction' or the service name
}

/**
 * Curated, de-duplicated FAQ set: the general questions plus the questions from
 * the services that actually appear in the menu (grouped by trade). Legacy
 * hidden service pages are excluded from the UI to avoid heavy repetition — but
 * the full set is still emitted to the FAQPage schema for search engines.
 */
function buildCategorizedFaqs(): CategorizedFaq[] {
  const out: CategorizedFaq[] = faqs.map((f) => ({
    ...f,
    category: 'General',
    service: business.shortName,
  }))

  const seenSlugs = new Set<string>()
  for (const group of serviceGroups) {
    for (const slug of group.slugs) {
      if (seenSlugs.has(slug)) continue // Commercial Roofing appears in two groups
      seenSlugs.add(slug)
      const s = serviceBySlug(slug)
      if (!s) continue
      for (const f of s.faqs) {
        out.push({ ...f, category: group.name, service: s.name })
      }
    }
  }
  return out
}

/** Filter category tabs shown in the sidebar. */
const CATEGORIES = ['All', 'General', ...serviceGroups.map((g) => g.name)] as const
type Category = (typeof CATEGORIES)[number]

export function FaqPage() {
  const all = useMemo(buildCategorizedFaqs, [])
  // Full set (including hidden legacy services) still feeds the SEO schema.
  const schemaFaqs = useMemo(() => [...faqs, ...services.flatMap((s) => s.faqs)], [])

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Category>('All')

  const q = query.trim().toLowerCase()
  const filtered = useMemo(() => {
    return all.filter((f) => {
      const inCategory = category === 'All' || f.category === category
      const inQuery =
        !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
      return inCategory && inQuery
    })
  }, [all, category, q])

  // Per-category counts for the sidebar pills.
  const counts = useMemo(() => {
    const c: Record<string, number> = { All: all.length }
    for (const f of all) c[f.category] = (c[f.category] ?? 0) + 1
    return c
  }, [all])

  return (
    <>
      <Seo
        title="Frequently Asked Questions | Lita Construction LLC — NJ Contractor"
        description="Answers to common questions about roofing, siding & masonry, licensing, warranties, estimates, and service areas from Lita Construction LLC in New Jersey."
        path="/faq"
        schema={[
          faqSchemaFrom(schemaFaqs),
          breadcrumbSchema([
            { name: 'Home', url: `${business.url}/` },
            { name: 'FAQ', url: `${business.url}/faq` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Common Questions"
        title={
          <>
            Frequently asked <span className="text-brand-400">questions.</span>
          </>
        }
        subtitle="Everything North Jersey homeowners want to know about working with Lita Construction — licensing, warranties, estimates, timelines, and every trade we do."
        crumbs={[{ label: 'FAQ' }]}
      />

      <section className="bg-cloud-50 py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          {/* ── Sidebar: search, categories, contact ── */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {/* Search */}
            <label className="relative block">
              <span className="sr-only">Search FAQs</span>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cloud-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                className="w-full rounded-2xl border border-cloud-200 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-ink-900 shadow-soft outline-none transition-colors placeholder:text-cloud-400 focus:border-brand-600/50 focus:ring-4 focus:ring-brand-600/10"
              />
            </label>

            {/* Category pills */}
            <nav className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:gap-1.5" aria-label="FAQ categories">
              {CATEGORIES.map((c) => {
                const active = category === c
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    aria-pressed={active}
                    className={`group flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-all duration-200 ${
                      active
                        ? 'bg-navy-950 text-white shadow-soft'
                        : 'bg-white text-ink-800 ring-1 ring-cloud-200 hover:ring-brand-600/30'
                    }`}
                  >
                    <span>{c}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-bold tabular-nums transition-colors ${
                        active
                          ? 'bg-white/15 text-white'
                          : 'bg-cloud-100 text-cloud-500 group-hover:bg-brand-50 group-hover:text-brand-600'
                      }`}
                    >
                      {counts[c] ?? 0}
                    </span>
                  </button>
                )
              })}
            </nav>

            {/* Contact card */}
            <div className="mt-6 overflow-hidden rounded-2xl bg-navy-950 p-6 text-white shadow-lift ring-1 ring-white/10">
              <h3 className="font-display text-lg font-bold">Still have a question?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Talk to a real person on our team — no call center, no pressure.
              </p>
              <a
                href={business.phoneHref}
                className="mt-4 flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.05] p-3 transition-colors hover:border-brand-400/50 hover:bg-white/[0.09]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Call us
                  </span>
                  <span className="font-display text-base font-bold">{business.phone}</span>
                </span>
              </a>
              <a
                href={business.emailHref}
                className="mt-2.5 flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.05] p-3 transition-colors hover:border-brand-400/50 hover:bg-white/[0.09]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <MailIcon className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Email us
                  </span>
                  <span className="truncate font-display text-sm font-bold">{business.email}</span>
                </span>
              </a>
            </div>
          </aside>

          {/* ── Results ── */}
          <div>
            {/* Result summary */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-cloud-600">
                {filtered.length === all.length ? (
                  <>
                    Showing all <span className="font-bold text-ink-900">{all.length}</span> questions
                  </>
                ) : (
                  <>
                    <span className="font-bold text-ink-900">{filtered.length}</span>{' '}
                    {filtered.length === 1 ? 'result' : 'results'}
                    {category !== 'All' && (
                      <>
                        {' '}
                        in <span className="font-semibold text-brand-600">{category}</span>
                      </>
                    )}
                    {q && (
                      <>
                        {' '}
                        for <span className="font-semibold text-ink-900">“{query.trim()}”</span>
                      </>
                    )}
                  </>
                )}
              </p>
              {(q || category !== 'All') && (
                <button
                  onClick={() => {
                    setQuery('')
                    setCategory('All')
                  }}
                  className="text-sm font-semibold text-brand-600 hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filtered.length > 0 ? (
              <FaqList items={filtered} query={q} showCategory={category === 'All'} />
            ) : (
              <EmptyState
                query={query.trim()}
                onReset={() => {
                  setQuery('')
                  setCategory('All')
                }}
              />
            )}
          </div>
        </div>
      </section>

      <CtaBand
        title="Still have a question? Just ask."
        subtitle={`Call ${business.phone} or request a free estimate — we're happy to help.`}
      />
    </>
  )
}

/* ── Accordion list (single-open, search-highlighting) ── */

function FaqList({
  items,
  query,
  showCategory,
}: {
  items: CategorizedFaq[]
  query: string
  showCategory: boolean
}) {
  const [open, setOpen] = useState<string | null>(items[0]?.q ?? null)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <FaqRow
          key={`${item.category}-${item.q}`}
          item={item}
          index={i}
          query={query}
          showCategory={showCategory}
          isOpen={open === item.q}
          onToggle={() => setOpen(open === item.q ? null : item.q)}
        />
      ))}
    </div>
  )
}

function FaqRow({
  item,
  index,
  query,
  showCategory,
  isOpen,
  onToggle,
}: {
  item: CategorizedFaq
  index: number
  query: string
  showCategory: boolean
  isOpen: boolean
  onToggle: () => void
}) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${Math.min(index, 8) * 45}ms` }}>
      <div
        className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
          isOpen
            ? 'border-brand-600/40 shadow-card'
            : 'border-cloud-200 shadow-soft hover:border-brand-600/25'
        }`}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-start gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
          aria-expanded={isOpen}
        >
          <span className="min-w-0 flex-1">
            {showCategory && (
              <span className="mb-1.5 inline-block rounded-full bg-cloud-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cloud-500">
                {item.category}
              </span>
            )}
            <span className="block font-display text-base font-bold leading-snug text-ink-900 sm:text-lg">
              {highlight(item.q, query)}
            </span>
          </span>
          <span
            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-180 bg-brand-600 text-white' : 'bg-cloud-100 text-brand-600'
            }`}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <div
          className={`grid transition-all duration-300 ease-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-5 pb-5 text-[15px] leading-relaxed text-cloud-600 sm:px-6">
              {highlight(item.a, query)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Empty state ── */

function EmptyState({ query, onReset }: { query: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-cloud-300 bg-white px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cloud-100 text-cloud-400">
        <SearchIcon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-ink-900">No matching questions</h3>
      <p className="mt-2 max-w-sm text-sm text-cloud-600">
        {query ? (
          <>
            We couldn&apos;t find anything for “{query}.” Try a different word — or just ask us
            directly.
          </>
        ) : (
          <>Nothing here yet. Try another category, or reach out to us directly.</>
        )}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button onClick={onReset} className="btn-ghost">
          Clear search
        </button>
        <Link to="/contact" className="btn-primary">
          Ask a question
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

/* ── Helpers ── */

/** Case-insensitive highlight of the search term within a string. */
function highlight(text: string, query: string): React.ReactNode {
  if (!query) return text
  const lower = text.toLowerCase()
  const q = query.toLowerCase()
  const parts: React.ReactNode[] = []
  let start = 0
  let idx = lower.indexOf(q)
  let key = 0
  while (idx !== -1) {
    if (idx > start) parts.push(text.slice(start, idx))
    parts.push(
      <mark key={key++} className="rounded bg-brand-50 px-0.5 font-semibold text-brand-700">
        {text.slice(idx, idx + q.length)}
      </mark>,
    )
    start = idx + q.length
    idx = lower.indexOf(q, start)
  }
  if (start < text.length) parts.push(text.slice(start))
  return parts
}

function SearchIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
