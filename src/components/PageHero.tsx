import { Link } from 'react-router-dom'

type Crumb = { label: string; to?: string }

/** Consistent navy hero banner for inner pages, with breadcrumbs. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
}: {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-[68px] text-white lg:pt-[104px]">
      {/* Soft radial glows for depth — no boxy grid */}
      <div className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-navy-600/30 blur-[120px]" aria-hidden="true" />

      <div className="container-x relative py-16 sm:py-20">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/50" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="text-white/30">/</span>
              {c.to ? (
                <Link to={c.to} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/80">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
          <span className="h-px w-8 bg-brand-400/60" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-display-lg">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>}
      </div>
    </section>
  )
}
