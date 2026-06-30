import { useState } from 'react'
import { faqs, business } from '../data/business'
import { useReveal } from '../lib/useReveal'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const ref = useReveal()

  return (
    <section id="faq" className="relative scroll-mt-24 bg-ink-950 py-20 sm:py-28">
      <div ref={ref} className="reveal container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">Common Questions</span>
          <h2 className="mt-5 font-display text-display-md text-bone-50">
            Answers before you ask.
          </h2>
          <p className="mt-5 text-bone-300">
            Everything North Jersey homeowners want to know about working with Lita Construction.
            Still have a question?
          </p>
          <a href={business.phoneHref} className="btn-ghost mt-7">
            Call {business.phone}
          </a>
        </div>

        <div className="divide-y divide-ink-700 border-y border-ink-700">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-bold text-bone-50">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border text-amber-500 transition-all duration-300 ${
                      isOpen ? 'rotate-45 border-amber-500 bg-amber-500/10' : 'border-ink-600'
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-base leading-relaxed text-bone-300">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
