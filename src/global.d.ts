/// <reference types="vite/client" />

declare global {
  interface Window {
    /** Google Analytics 4 — loaded by the gtag snippet in index.html. */
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export {}
