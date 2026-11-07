/**
 * Building blocks shared by the Google Ads landing-page layouts. Each layout
 * composes these differently (order, tone, density) so pages don't render as
 * one cloned template.
 */
import { createContext, useContext, useState, type ReactNode } from 'react'
import { business } from '../../data/business'
import type { LandingPage } from '../../data/adLandingPages'
import { FORM_ENDPOINT } from '../../components/QuoteForm'
import { readAdParams, trackCall, trackLead } from '../../lib/adTracking'
import { GafBadge } from '../../components/GafBadge'
import { ArrowIcon, CheckIcon, ClockIcon, PhoneIcon, PinIcon, ShieldIcon, StarIcon } from '../../components/icons'

/* ─────────────────────────── page context ─────────────────────────── */

const PageCtx = createContext<LandingPage | null>(null)
export const PageProvider = PageCtx.Provider
export function usePage(): LandingPage {
  const p = useContext(PageCtx)
  if (!p) throw new Error('usePage must be used inside a landing page')
  return p
}

function useMeta() {
  const p = usePage()
  return { service: p.service.slug, town: p.town.slug, layout: p.layout }
}

/* ───────────────────────────── call link ───────────────────────────── */

/**
 * Phone link that also records a call conversion. Always renders icon and
 * number on one line (never wraps the number or stacks the icon).
 */
export function CallLink({ className = '', children }: { className?: string; children?: ReactNode }) {
  const meta = useMeta()
  const display = /\b(inline-)?flex\b/.test(className) ? '' : 'inline-flex items-center gap-1.5'
  return (
    <a
      href={business.phoneHref}
      onClick={() => trackCall(meta)}
      className={`${display} whitespace-nowrap ${className}`}
    >
      {children ?? (
        <>
          <PhoneIcon className="h-4 w-4 shrink-0" />
          {business.phone}
        </>
      )}
    </a>
  )
}

/* ───────────────────────────── top bar ───────────────────────────── */

/** Minimal header — logo, hours and phone. No site menu, so ad clicks stay on the page. */
export function LpTopBar({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <header className={dark ? 'border-b border-white/10 bg-navy-950 text-white' : 'border-b border-cloud-200 bg-white text-ink-900'}>
      <div className="container-x flex items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Lita Construction LLC" width={48} height={48} className="h-11 w-11 sm:h-12 sm:w-12" />
          <div className="leading-tight">
            <p className="font-display text-base font-extrabold sm:text-lg">{business.shortName}</p>
            <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px] ${dark ? 'text-white/60' : 'text-cloud-500'}`}>
              {business.licenseLabel}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className={`hidden items-center gap-2 text-sm md:flex ${dark ? 'text-white/70' : 'text-cloud-600'}`}>
            <ClockIcon className="h-4 w-4" />
            {business.hours}
          </p>
          <CallLink
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold sm:px-5 ${
              dark ? 'bg-white text-ink-900 hover:bg-cloud-100' : 'bg-brand-600 text-white hover:bg-[#5f0f18]'
            }`}
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phone}
          </CallLink>
        </div>
      </div>
    </header>
  )
}

/* ─────────────────────────── section heading ─────────────────────────── */

/** Consistent eyebrow + heading used by every content section. */
export function SectionHead({
  eyebrow,
  title,
  sub,
  tone = 'light',
  center = false,
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  sub?: ReactNode
  tone?: 'light' | 'dark'
  center?: boolean
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <p
        className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] ${
          dark ? 'text-white/60' : 'text-brand-600'
        }`}
      >
        <span className={`h-px w-8 ${dark ? 'bg-white/40' : 'bg-brand-600/50'}`} />
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-display text-display-md ${dark ? 'text-white' : 'text-ink-900'}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-cloud-600'}`}>{sub}</p>}
    </div>
  )
}

/* ───────────────────────────── lead form ───────────────────────────── */

type LeadFormProps = {
  heading?: string
  sub?: string
  /** Compact = name + phone only (quick-callback style) */
  compact?: boolean
  tone?: 'light' | 'dark'
  className?: string
  /** Set false on a page's second form so only one element owns #estimate */
  anchor?: boolean
}

/** Lead form — sends the visitor's details plus service, town and the Google Ads click data. */
export function LeadForm({ heading, sub, compact = false, tone = 'light', className = '', anchor = true }: LeadFormProps) {
  const page = usePage()
  const meta = useMeta()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [zip, setZip] = useState(page.zip)
  const [details, setDetails] = useState('')
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'error'>('idle')
  const dark = tone === 'dark'

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
      name,
      phone,
      zip,
      details,
      service: page.service.name,
      town: `${page.town.name}, NJ`,
      county: page.town.county,
      page: page.path,
      layout: page.layout,
      ...readAdParams(),
    }
    if (!FORM_ENDPOINT) {
      // Demo mode: no backend configured. Don't fire an Ads conversion for a lead that went nowhere.
      console.warn('[Lita LP] FORM_ENDPOINT is not set — lead not delivered:', payload)
      setState('done')
      return
    }
    setState('busy')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(String(res.status))
      trackLead(meta)
      setState('done')
    } catch {
      setState('error')
    }
  }

  const shell = dark
    ? 'rounded-2xl border border-white/15 bg-navy-900/85 p-6 text-white shadow-lift backdrop-blur sm:p-8'
    : 'rounded-2xl border border-cloud-200 bg-white p-6 text-ink-900 shadow-lift sm:p-8'
  const input = dark
    ? 'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder-white/45 outline-none transition-colors focus:border-white focus:ring-2 focus:ring-white/20'
    : 'w-full rounded-xl border border-cloud-300 bg-cloud-100 px-4 py-3.5 text-ink-900 placeholder-cloud-500 outline-none transition-colors focus:border-brand-600 focus:bg-white focus:ring-2 focus:ring-brand-600/20'
  const labelCls = `mb-1.5 block text-xs font-semibold uppercase tracking-wider ${dark ? 'text-white/80' : 'text-ink-800'}`
  const muted = dark ? 'text-white/65' : 'text-cloud-600'

  if (state === 'done') {
    return (
      <div className={`${shell} flex flex-col items-center py-10 text-center ${className}`}>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold">Thank you{name ? `, ${name.split(' ')[0]}` : ''}. We've got your request.</h3>
        <p className={`mt-3 max-w-sm ${muted}`}>
          A member of our team will call you shortly to talk through your {page.service.copy.project} in {page.town.name} and
          set up a time for your free visit.
        </p>
        <p className={`mt-5 text-sm ${muted}`}>
          Need us sooner? <CallLink className={`font-bold underline-offset-4 hover:underline ${dark ? 'text-white' : 'text-brand-600'}`} />
        </p>
      </div>
    )
  }

  return (
    <form id={anchor ? 'estimate' : undefined} onSubmit={onSubmit} className={`${shell} scroll-mt-6 ${className}`}>
      <h2 className="font-display text-2xl font-bold">{heading ?? page.service.offer}</h2>
      <p className={`mt-2 text-sm ${muted}`}>{sub ?? 'We’ll call you back to schedule — usually the same business day.'}</p>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={labelCls}>Full name *</span>
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" autoComplete="name" className={input} />
          </label>
          <label className="block">
            <span className={labelCls}>Phone *</span>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(201) 555-0100"
              autoComplete="tel"
              pattern="[\d\s()+.\-]{7,}"
              title="Please enter a valid phone number"
              className={input}
            />
          </label>
        </div>
        {!compact && (
          <>
            <label className="block">
              <span className={labelCls}>Property ZIP code</span>
              <input value={zip} onChange={(e) => setZip(e.target.value)} inputMode="numeric" autoComplete="postal-code" className={input} />
            </label>
            <label className="block">
              <span className={labelCls}>Project details (optional)</span>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={`Tell us a little about your ${page.service.copy.project}…`}
                className={`${input} resize-none`}
              />
            </label>
          </>
        )}
      </div>
      <button type="submit" disabled={state === 'busy'} className="btn-primary mt-6 w-full !py-4 disabled:opacity-60">
        {state === 'busy' ? 'Sending…' : page.ctaLabel}
        {state !== 'busy' && <ArrowIcon className="h-4 w-4" />}
      </button>
      {state === 'error' && (
        <p className={`mt-3 text-center text-sm font-semibold ${dark ? 'text-white' : 'text-brand-600'}`}>
          Sorry — the form didn't send. Please call us at <CallLink className="underline" />.
        </p>
      )}
      <p className={`mt-4 flex items-start justify-center gap-2 text-center text-xs ${dark ? 'text-white/55' : 'text-cloud-500'}`}>
        <ShieldIcon className="mt-px h-3.5 w-3.5 shrink-0" />
        <span>Free and no obligation. By submitting, you agree to be contacted about this project. We never share your information.</span>
      </p>
    </form>
  )
}

/* ───────────────────────────── trust ───────────────────────────── */

export const TRUST_POINTS = [
  'GAF Master Elite® contractor',
  `Licensed & insured since ${business.founded}`,
  'Our own crews — no subcontractors',
  'Free written estimates',
]

export function TrustList({ tone = 'light', className = '' }: { tone?: 'light' | 'dark'; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2.5 ${className}`}>
      {TRUST_POINTS.map((t) => (
        <li key={t} className={`inline-flex items-center gap-2 text-sm font-semibold ${tone === 'dark' ? 'text-white/85' : 'text-ink-800'}`}>
          <CheckIcon className={`h-4 w-4 shrink-0 ${tone === 'dark' ? 'text-white' : 'text-brand-600'}`} />
          {t}
        </li>
      ))}
    </ul>
  )
}

export function StatsRow({ className = '' }: { className?: string }) {
  const stats = [
    { k: `${new Date().getFullYear() - business.founded}+`, v: 'Years serving New Jersey' },
    { k: 'GAF', v: 'Master Elite® certified' },
    { k: '$0', v: 'Written estimates' },
    { k: '100%', v: 'Our own crews' },
  ]
  return (
    <dl className={`grid grid-cols-2 gap-4 lg:grid-cols-4 ${className}`}>
      {stats.map((s) => (
        <div key={s.v} className="rounded-2xl border border-cloud-200 bg-white px-5 py-6 text-center shadow-soft">
          <dt className="sr-only">{s.v}</dt>
          <dd className="font-display text-3xl font-extrabold text-ink-900">{s.k}</dd>
          <dd className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-cloud-500">{s.v}</dd>
        </div>
      ))}
    </dl>
  )
}

/* ─────────────────────────── reviews ─────────────────────────── */

export function Reviews({ tone = 'light', heading }: { tone?: 'light' | 'dark'; heading?: string }) {
  const page = usePage()
  const dark = tone === 'dark'
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHead
          tone={tone}
          eyebrow="Customer reviews"
          title={heading ?? `What ${page.town.county} County homeowners say`}
          className="!max-w-4xl"
        />
        <a
          href={business.google.reviews}
          target="_blank"
          rel="noopener noreferrer"
          className={`shrink-0 text-sm font-bold underline-offset-4 hover:underline ${dark ? 'text-white/80' : 'text-brand-600'}`}
        >
          Read our reviews on Google →
        </a>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {page.reviews.map((r) => (
          <figure
            key={r.name}
            className={`flex flex-col rounded-2xl p-7 ${dark ? 'border border-white/10 bg-white/5' : 'border border-cloud-200 bg-white shadow-soft'}`}
          >
            <div className="flex gap-0.5 text-[#f5b301]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <blockquote className={`mt-4 flex-1 text-[15px] leading-relaxed ${dark ? 'text-white/85' : 'text-cloud-700'}`}>
              “{r.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold ${
                  dark ? 'bg-white/10 text-white' : 'bg-navy-50 text-navy-800'
                }`}
                aria-hidden="true"
              >
                {r.name.charAt(0)}
              </span>
              <span className="leading-tight">
                <span className={`block text-sm font-bold ${dark ? 'text-white' : 'text-ink-900'}`}>{r.name}</span>
                <span className={`block text-xs ${dark ? 'text-white/60' : 'text-cloud-500'}`}>
                  {r.location} · {r.service}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────── FAQ ─────────────────────────── */

export function Faq({ columns = false }: { columns?: boolean }) {
  const page = usePage()
  if (page.faqs.length === 0) return null
  return (
    <div className={columns ? 'grid items-start gap-4 md:grid-cols-2' : 'space-y-3'}>
      {page.faqs.map((f, i) => (
        <details key={f.q} open={i === 0 && !columns} className="group rounded-2xl border border-cloud-200 bg-white px-6 py-5 shadow-soft">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-[17px] font-bold text-ink-900 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cloud-300 text-brand-600 transition-transform group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-cloud-600">{f.a}</p>
        </details>
      ))}
    </div>
  )
}

/* ─────────────────────────── gallery ─────────────────────────── */

/**
 * Project photos. 'row' = even rows of three; 'feature' = one large photo
 * beside two stacked ones (needs exactly three, uses the first three).
 */
export function Gallery({ variant = 'row' }: { variant?: 'row' | 'feature' }) {
  const page = usePage()
  const alt = `${page.service.name} work by Lita Construction`
  if (variant === 'feature') {
    const [a, b, c] = page.gallery
    if (!c) return null
    return (
      <div className="grid h-[320px] grid-cols-3 grid-rows-2 gap-3 sm:h-[440px]">
        <img src={a} alt={alt} loading="lazy" decoding="async" className="col-span-2 row-span-2 h-full w-full rounded-2xl object-cover" />
        <img src={b} alt={alt} loading="lazy" decoding="async" className="h-full w-full rounded-2xl object-cover" />
        <img src={c} alt={alt} loading="lazy" decoding="async" className="h-full w-full rounded-2xl object-cover" />
      </div>
    )
  }
  const imgs = page.gallery.slice(0, page.gallery.length - (page.gallery.length % 3))
  return (
    <div className="grid grid-cols-3 gap-3">
      {imgs.map((src) => (
        <img key={src} src={src} alt={alt} loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full rounded-2xl object-cover" />
      ))}
    </div>
  )
}

/* ─────────────────────────── local area ─────────────────────────── */

export function AreaNote({ tone = 'light', className = '' }: { tone?: 'light' | 'dark'; className?: string }) {
  const page = usePage()
  const dark = tone === 'dark'
  const near = page.neighbors.length ? ` — plus nearby ${page.neighbors.join(', ')}` : ''
  return (
    <p className={`flex items-start gap-2 text-sm ${dark ? 'text-white/70' : 'text-cloud-600'} ${className}`}>
      <PinIcon className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? 'text-white/70' : 'text-brand-600'}`} />
      <span>
        Serving {page.town.name}
        {page.zip ? ` (${page.zip})` : ''} and all of {page.town.county} County{near}
      </span>
    </p>
  )
}

/* ─────────────────────────── badges ─────────────────────────── */

export function CredentialRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-5 ${className}`}>
      <GafBadge size="sm" />
      <div className="space-y-1.5 text-sm font-semibold text-ink-800">
        <p className="flex items-center gap-2">
          <ShieldIcon className="h-4 w-4 text-brand-600" />
          {business.licenseLabel}
        </p>
        <p className="flex items-center gap-2">
          <CheckIcon className="h-4 w-4 text-brand-600" />
          Fully insured
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────────── footer ─────────────────────────── */

export function LpFooter() {
  const page = usePage()
  return (
    <footer className="border-t border-white/10 bg-navy-950 pb-24 pt-10 text-sm text-white/65 lg:pb-10">
      <div className="container-x grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" width={40} height={40} className="h-10 w-10" loading="lazy" />
          <div>
            <p className="font-semibold text-white">{business.name}</p>
            <p>
              {business.licenseLabel} · {business.hours}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <CallLink className="font-semibold text-white hover:underline" />
          <a href={business.url} className="hover:text-white">
            litaconstructionllc.com
          </a>
        </div>
      </div>
      <p className="container-x mt-6 border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} {business.name}. {page.service.name} for {page.town.name}, {page.town.county} County, New Jersey.
      </p>
    </footer>
  )
}

/* ─────────────────────── sticky mobile actions ─────────────────────── */

export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cloud-200 bg-white/95 p-2.5 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <CallLink className="flex items-center justify-center gap-2 rounded-xl border-2 border-navy-900/15 py-3 text-sm font-bold uppercase tracking-wide text-ink-900">
          <PhoneIcon className="h-5 w-5 text-brand-600" />
          Call Now
        </CallLink>
        <a href="#estimate" className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-bold uppercase tracking-wide text-white">
          Free Estimate
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

/* ─────────────────────────── helpers ─────────────────────────── */

export function H1({ tone = 'dark', className = '' }: { tone?: 'light' | 'dark'; className?: string }) {
  const { h1 } = usePage()
  return (
    <h1 className={`font-display text-display-lg ${tone === 'dark' ? 'text-white' : 'text-ink-900'} ${className}`}>
      {h1.lead} <span className="block text-brand-600">{h1.accent}</span>
    </h1>
  )
}
