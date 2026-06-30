import { useState } from 'react'

export type FaqItem = { q: string; a: string }

/** Reusable accordion. Used on the home FAQ section and the FAQ page. */
export function FaqAccordion({ items, defaultOpen = 0 }: { items: readonly FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen)

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-xl border bg-white transition-colors ${
              isOpen ? 'border-brand-600/40 shadow-soft' : 'border-cloud-300'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-bold text-navy-900 sm:text-lg">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 bg-brand-600 text-white' : 'bg-cloud-100 text-brand-600'
                }`}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-base leading-relaxed text-cloud-600">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
