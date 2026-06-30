import { useState } from 'react'
import { services, business } from '../data/business'
import { CheckIcon, ArrowIcon } from './icons'

type FormState = {
  name: string
  phone: string
  email: string
  service: string
  zip: string
  details: string
}

const empty: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  zip: '',
  details: '',
}

/**
 * Lead-capture estimate form. Submits via the standard `action` pattern so it
 * works with Formspree / Netlify Forms / any backend by changing FORM_ENDPOINT.
 * Falls back to a graceful success state for the demo build.
 */
const FORM_ENDPOINT = '' // e.g. 'https://formspree.io/f/yourid' — leave empty for demo mode

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [busy, setBusy] = useState(false)

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!FORM_ENDPOINT) {
      // Demo mode — show success without a backend.
      setSubmitted(true)
      return
    }
    setBusy(true)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
    } finally {
      setBusy(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-cloud-300 bg-white p-10 text-center shadow-card">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">Request received.</h3>
        <p className="mt-3 max-w-sm text-cloud-600">
          Thank you, {form.name || 'there'}! A member of the Lita Construction team will reach out
          shortly to schedule your free estimate.
        </p>
        <p className="mt-5 text-sm text-cloud-600">
          Need it sooner? Call us now at{' '}
          <a href={business.phoneHref} className="font-bold text-brand-600 hover:underline">
            {business.phone}
          </a>
        </p>
      </div>
    )
  }

  const inputBase =
    'w-full rounded-xl border border-cloud-300 bg-cloud-100 px-4 py-3.5 text-navy-900 placeholder-cloud-500 outline-none transition-colors focus:border-brand-600 focus:bg-white focus:ring-2 focus:ring-brand-600/20'

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-cloud-300 bg-white p-7 shadow-card sm:p-9" noValidate>
      <h3 className="font-display text-2xl font-bold text-navy-900">Request a Free Estimate</h3>
      <p className="mt-2 text-sm text-cloud-600">
        Fill out the form and we&apos;ll get back to you within one business day.
      </p>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-800">
              Full Name *
            </span>
            <input
              required
              type="text"
              value={form.name}
              onChange={update('name')}
              placeholder="Jane Smith"
              className={inputBase}
              autoComplete="name"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-800">
              Phone *
            </span>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              placeholder="(201) 555-0100"
              className={inputBase}
              autoComplete="tel"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-800">
              Email
            </span>
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder="you@email.com"
              className={inputBase}
              autoComplete="email"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-800">
              ZIP Code
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={form.zip}
              onChange={update('zip')}
              placeholder="07601"
              className={inputBase}
              autoComplete="postal-code"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-800">
            Service Needed *
          </span>
          <select required value={form.service} onChange={update('service')} className={inputBase}>
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Multiple / Other">Multiple / Other</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-800">
            Project Details
          </span>
          <textarea
            rows={3}
            value={form.details}
            onChange={update('details')}
            placeholder="Tell us about your project, timeline, or any questions…"
            className={`${inputBase} resize-none`}
          />
        </label>
      </div>

      <button type="submit" disabled={busy} className="btn-primary mt-6 w-full disabled:opacity-60">
        {busy ? 'Sending…' : 'Get My Free Estimate'}
        {!busy && <ArrowIcon className="h-4 w-4" />}
      </button>

      <p className="mt-4 text-center text-xs text-cloud-500">
        No spam. No obligation. Your information stays private.
      </p>
    </form>
  )
}
