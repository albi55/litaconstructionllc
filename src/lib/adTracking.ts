/**
 * Google Ads click tracking for the /lp landing pages.
 *
 * - Captures the click parameters Google appends (gclid / gbraid / wbraid via
 *   auto-tagging, plus the utm_* values from the Final URL suffix) on landing,
 *   keeps them for the session, and attaches them to every lead submission —
 *   so each lead can be traced back to its campaign, keyword and click.
 * - Fires conversion events for form leads and phone-call clicks.
 *
 * ── Setup ──
 * In Google Ads → Goals → Conversions, create a "Submit lead form" and a
 * "Phone call clicks" (website) conversion action, then paste each action's
 * send_to value ("AW-10796715206/AbC123…") below. Until a label is set, only
 * the GA4 events fire (generate_lead / phone_call_click), which can also be
 * imported into Google Ads as conversions.
 */

export const ADS_CONVERSIONS = {
  /** e.g. 'AW-10796715206/xxxxxxxxxxxxxxxxxxxx' */
  lead: '',
  /** e.g. 'AW-10796715206/yyyyyyyyyyyyyyyyyyyy' */
  call: '',
}

const PARAM_KEYS = [
  'gclid',
  'gbraid',
  'wbraid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'matchtype',
  'device',
] as const

export type AdParams = Partial<Record<(typeof PARAM_KEYS)[number], string>> & {
  landing_page?: string
  landed_at?: string
}

const STORAGE_KEY = 'lita_ad_params'

/** Reads click params from the current URL; merges with any already stored this session. */
export function captureAdParams(search: string, pathname: string): AdParams {
  const qs = new URLSearchParams(search)
  const fresh: AdParams = {}
  for (const k of PARAM_KEYS) {
    const v = qs.get(k)
    if (v) fresh[k] = v.slice(0, 200)
  }
  const stored = readAdParams()
  // A new ad click (new gclid / campaign) replaces the old attribution.
  const merged: AdParams =
    Object.keys(fresh).length > 0
      ? { ...fresh, landing_page: pathname, landed_at: new Date().toISOString() }
      : { ...stored, landing_page: stored.landing_page ?? pathname }
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  } catch {
    /* storage unavailable — params still returned for this render */
  }
  return merged
}

export function readAdParams(): AdParams {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as AdParams) : {}
  } catch {
    return {}
  }
}

type ConversionMeta = { service: string; town: string; layout: string }

/** Lead form submitted successfully. */
export function trackLead(meta: ConversionMeta) {
  window.gtag?.('event', 'generate_lead', { ...meta, method: 'landing_page_form' })
  if (ADS_CONVERSIONS.lead) {
    window.gtag?.('event', 'conversion', { send_to: ADS_CONVERSIONS.lead })
  }
}

/** Visitor tapped a phone link. */
export function trackCall(meta: ConversionMeta) {
  window.gtag?.('event', 'phone_call_click', meta)
  if (ADS_CONVERSIONS.call) {
    window.gtag?.('event', 'conversion', { send_to: ADS_CONVERSIONS.call })
  }
}
