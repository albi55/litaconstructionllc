import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/Seo'
import { business } from '../../data/business'
import {
  adKitFor,
  adServices,
  adTowns,
  allLandingRows,
  FINAL_URL_SUFFIX,
  LAYOUT_LABEL,
  LAYOUTS,
  type LandingIndexRow,
} from '../../data/adLandingPages'
import { ArrowIcon, CheckIcon } from '../../components/icons'

const PAGE_SIZE = 60

async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        if (await copy(text)) {
          setDone(true)
          setTimeout(() => setDone(false), 1400)
        }
      }}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-cloud-300 bg-white px-2.5 py-1.5 text-xs font-bold text-ink-800 hover:border-brand-600 hover:text-brand-600"
    >
      {done ? <CheckIcon className="h-3.5 w-3.5 text-green-700" /> : null}
      {done ? 'Copied' : label}
    </button>
  )
}

const csvCell = (v: string) => `"${v.replace(/"/g, '""')}"`

function download(name: string, rows: string[][]) {
  const csv = rows.map((r) => r.map(csvCell).join(',')).join('\r\n')
  const url = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

const campaignName = (r: LandingIndexRow) => `LP | ${r.serviceName}`
const adGroupName = (r: LandingIndexRow) => `${r.serviceName} | ${r.townName}${r.county ? ` (${r.county})` : ''}`

function exportAds(rows: LandingIndexRow[]) {
  const header = [
    'Campaign',
    'Ad Group',
    'Final URL',
    ...Array.from({ length: 15 }, (_, i) => `Headline ${i + 1}`),
    ...Array.from({ length: 4 }, (_, i) => `Description ${i + 1}`),
    'Path 1',
    'Path 2',
  ]
  const body = rows.map((r) => {
    const kit = adKitFor(r)!
    const h = Array.from({ length: 15 }, (_, i) => kit.headlines[i] ?? '')
    const d = Array.from({ length: 4 }, (_, i) => kit.descriptions[i] ?? '')
    return [campaignName(r), adGroupName(r), kit.finalUrl, ...h, ...d, kit.path1, kit.path2]
  })
  download('lita-landing-page-ads.csv', [header, ...body])
}

function exportKeywords(rows: LandingIndexRow[]) {
  const header = ['Campaign', 'Ad Group', 'Keyword', 'Criterion Type', 'Final URL']
  const body = rows.flatMap((r) => {
    const kit = adKitFor(r)!
    return kit.keywords.map((k) => [campaignName(r), adGroupName(r), k.text, k.match, kit.finalUrl])
  })
  download('lita-landing-page-keywords.csv', [header, ...body])
}

/** Ad copy + keywords panel for one landing page. */
function AdKitPanel({ row }: { row: LandingIndexRow }) {
  const kit = adKitFor(row)
  if (!kit) return null
  return (
    <div className="mt-4 grid gap-6 rounded-xl border border-cloud-200 bg-cloud-100 p-5 lg:grid-cols-2">
      <div className="space-y-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-cloud-500">Final URL</p>
          <div className="mt-1.5 flex items-center gap-2">
            <code className="min-w-0 flex-1 truncate rounded-lg bg-white px-3 py-2 text-sm">{kit.finalUrl}</code>
            <CopyButton text={kit.finalUrl} />
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-cloud-500">Display path</p>
          <p className="mt-1.5 text-sm">
            litaconstructionllc.com/<strong>{kit.path1}</strong>/<strong>{kit.path2}</strong>
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-cloud-500">Descriptions (≤ 90)</p>
            <CopyButton text={kit.descriptions.join('\n')} label="Copy all" />
          </div>
          <ul className="mt-1.5 space-y-1.5 text-sm">
            {kit.descriptions.map((d) => (
              <li key={d} className="flex justify-between gap-3 rounded-lg bg-white px-3 py-2">
                <span>{d}</span>
                <span className="shrink-0 text-xs text-cloud-500">{d.length}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-5">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-cloud-500">Headlines (≤ 30)</p>
            <CopyButton text={kit.headlines.join('\n')} label="Copy all" />
          </div>
          <ul className="mt-1.5 grid gap-1.5 text-sm sm:grid-cols-2">
            {kit.headlines.map((h) => (
              <li key={h} className="flex justify-between gap-2 rounded-lg bg-white px-3 py-1.5">
                <span>{h}</span>
                <span className="text-xs text-cloud-500">{h.length}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-cloud-500">Keywords</p>
            <CopyButton
              text={kit.keywords.map((k) => (k.match === 'Exact' ? `[${k.text}]` : `"${k.text}"`)).join('\n')}
              label="Copy all"
            />
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-cloud-700">
            {kit.keywords.map((k) => (k.match === 'Exact' ? `[${k.text}]` : `"${k.text}"`)).join(' · ')}
          </p>
        </div>
      </div>
    </div>
  )
}

function Row({ row }: { row: LandingIndexRow }) {
  const [open, setOpen] = useState(false)
  const url = `${business.url}${row.path}`
  return (
    <li className="rounded-2xl border border-cloud-200 bg-white p-4 shadow-soft sm:p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <Link to={row.path} className="group inline-flex items-center gap-2 font-display text-lg font-bold text-ink-900 hover:text-brand-600">
            {row.title}
            <ArrowIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-cloud-500">
            <span>{row.county} County{row.zip ? ` · ${row.zip}` : ''}</span>
            <span>Layout {LAYOUT_LABEL[row.layout]}</span>
            <span className={row.localCopy ? 'font-semibold text-green-700' : 'text-sand-700'}>
              {row.localCopy ? 'Town-specific copy' : 'Standard copy + town details'}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <CopyButton text={url} label="Copy URL" />
          <a
            href={row.path}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-cloud-300 bg-white px-2.5 py-1.5 text-xs font-bold text-ink-800 hover:border-brand-600 hover:text-brand-600"
          >
            New tab ↗
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-navy-800"
          >
            {open ? 'Hide ad copy' : 'Ad copy & keywords'}
          </button>
        </div>
      </div>
      {open && <AdKitPanel row={row} />}
    </li>
  )
}

/** Internal directory of every Google Ads landing page: /lp */
export function LandingDirectory() {
  const rows = useMemo(() => allLandingRows(), [])
  const counties = useMemo(() => [...new Set(adTowns.map((t) => t.county))].sort(), [])
  const [q, setQ] = useState('')
  const [service, setService] = useState('')
  const [county, setCounty] = useState('')
  const [layout, setLayout] = useState('')
  const [localOnly, setLocalOnly] = useState(false)
  const [limit, setLimit] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return rows.filter(
      (r) =>
        (!service || r.serviceSlug === service) &&
        (!county || r.county === county) &&
        (!layout || r.layout === layout) &&
        (!localOnly || r.localCopy) &&
        (!needle || r.title.toLowerCase().includes(needle) || r.zip.includes(needle)),
    )
  }, [rows, q, service, county, layout, localOnly])

  const resetLimit = <T,>(set: (v: T) => void) => (v: T) => {
    set(v)
    setLimit(PAGE_SIZE)
  }

  const select = 'rounded-xl border border-cloud-300 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-600'

  return (
    <div className="min-h-screen bg-cloud-50">
      <Seo title="Google Ads Landing Pages | Lita Construction" description="Internal directory of Google Ads landing pages." path="/lp" noindex />

      <header className="bg-navy-950 py-10 text-white sm:py-14">
        <div className="container-x">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">Internal · not indexed by Google</p>
          <h1 className="mt-3 font-display text-display-md">Google Ads landing pages</h1>
          <p className="mt-3 max-w-3xl text-white/75">
            {rows.length.toLocaleString()} pages — {adServices.length} services × {adTowns.length} towns. Click a title to
            open its page. Use <strong>Copy URL</strong> for the ad's Final URL, or <strong>Ad copy & keywords</strong> for
            ready-made headlines, descriptions and keywords.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              ['1', 'Pick the page', 'Filter by service and town, then click the title to check it.'],
              ['2', 'Paste the Final URL', 'One ad group per town: its ad uses that town’s URL and keywords.'],
              ['3', 'Set tracking once', 'Account settings → Tracking → Final URL suffix (below). Keep auto-tagging on.'],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-sm font-bold text-white">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs">{n}</span>
                  {t}
                </p>
                <p className="mt-2 text-sm text-white/70">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white/60">Final URL suffix (account-level)</p>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
              <code className="min-w-0 flex-1 break-all rounded-lg bg-navy-900 px-3 py-2 text-xs text-white/90">{FINAL_URL_SUFFIX}</code>
              <CopyButton text={FINAL_URL_SUFFIX} />
            </div>
          </div>
        </div>
      </header>

      <div className="sticky top-0 z-30 border-b border-cloud-200 bg-white/95 py-4 backdrop-blur">
        <div className="container-x flex flex-col gap-3 lg:flex-row lg:items-center">
          <input
            value={q}
            onChange={(e) => resetLimit(setQ)(e.target.value)}
            placeholder="Search town, service or ZIP…"
            className={`${select} w-full lg:w-72`}
            aria-label="Search pages"
          />
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <select value={service} onChange={(e) => resetLimit(setService)(e.target.value)} className={select} aria-label="Service">
              <option value="">All services</option>
              {adServices.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
            <select value={county} onChange={(e) => resetLimit(setCounty)(e.target.value)} className={select} aria-label="County">
              <option value="">All counties</option>
              {counties.map((c) => (
                <option key={c} value={c}>
                  {c} County
                </option>
              ))}
            </select>
            <select value={layout} onChange={(e) => resetLimit(setLayout)(e.target.value)} className={select} aria-label="Layout">
              <option value="">All layouts</option>
              {LAYOUTS.map((l) => (
                <option key={l} value={l}>
                  {LAYOUT_LABEL[l]}
                </option>
              ))}
            </select>
            <label className="flex items-center gap-2 text-sm font-semibold text-ink-800">
              <input type="checkbox" checked={localOnly} onChange={(e) => resetLimit(setLocalOnly)(e.target.checked)} />
              Town-specific copy only
            </label>
          </div>
          <div className="flex gap-2 lg:ml-auto">
            <button type="button" onClick={() => exportAds(filtered)} className="btn-primary !px-4 !py-2.5 !text-[11px]">
              Export ads CSV
            </button>
            <button type="button" onClick={() => exportKeywords(filtered)} className="btn-navy !px-4 !py-2.5 !text-[11px]">
              Export keywords CSV
            </button>
          </div>
        </div>
      </div>

      <main className="container-x py-8">
        <p className="mb-4 text-sm text-cloud-600">
          Showing {Math.min(limit, filtered.length).toLocaleString()} of {filtered.length.toLocaleString()} pages
          {filtered.length !== rows.length ? ' (filtered — exports include all filtered pages)' : ''}
        </p>
        <ul className="space-y-3">
          {filtered.slice(0, limit).map((r) => (
            <Row key={r.path} row={r} />
          ))}
        </ul>
        {filtered.length > limit && (
          <div className="mt-8 text-center">
            <button type="button" onClick={() => setLimit((l) => l + PAGE_SIZE)} className="btn-ghost">
              Show {Math.min(PAGE_SIZE, filtered.length - limit)} more
            </button>
          </div>
        )}
        {filtered.length === 0 && <p className="py-16 text-center text-cloud-500">No pages match those filters.</p>}
      </main>
    </div>
  )
}
