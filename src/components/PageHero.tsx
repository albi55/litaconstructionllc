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
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Photo background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        aria-hidden="true"
      />
      {/* Navy gradient overlay keeps text readable over the photo */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-900/70"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-navy-950/40" aria-hidden="true" />


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
