import { useState } from 'react'
import { useReveal } from '../lib/useReveal'

export type FaqItem = { q: string; a: string }

/** Reusable accordion. Used on the home FAQ section and the FAQ page. */
export function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: readonly FaqItem[]
  defaultOpen?: number | null
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen)

  return (
    <div className="space-y-3.5">
      {items.map((item, i) => (
        <Row
          key={item.q}
          item={item}
          index={i}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  )
}

function Row({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 70}ms` }}>
      <div
        className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
          isOpen
            ? 'border-brand-600/40 shadow-card'
            : 'border-cloud-200 shadow-soft hover:border-brand-600/25'
        }`}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center gap-5 px-6 py-5 text-left"
          aria-expanded={isOpen}
        >
          {/* Index */}
          <span
            className={`font-display text-sm font-black transition-colors duration-300 ${
              isOpen ? 'text-brand-600' : 'text-cloud-400 group-hover:text-brand-600'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="flex-1 font-display text-base font-bold text-ink-900 sm:text-lg">
            {item.q}
          </span>
          {/* Chevron toggle */}
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
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
            <p className="pb-5 pl-[3.75rem] pr-6 text-[15px] leading-relaxed text-cloud-600">
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
