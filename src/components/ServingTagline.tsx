/**
 * "Serving New Jersey Since 2004" — a single, consistent trust line used in
 * place of the old numeric stat strips. Two tones so it reads well on both the
 * light sections and the dark hero backgrounds.
 */
export function ServingTagline({
  tone = 'dark',
  className = '',
}: {
  /** 'dark' for navy hero backgrounds, 'light' for cloud/white sections. */
  tone?: 'dark' | 'light'
  className?: string
}) {
  const onDark = tone === 'dark'
  return (
    <span
      className={`inline-flex items-center gap-3 rounded-full border px-5 py-2.5 font-display text-lg font-extrabold tracking-tight ${
        onDark
          ? 'border-white/20 bg-white/[0.07] text-white'
          : 'border-cloud-300 bg-white text-ink-900 shadow-soft'
      } ${className}`}
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
      Serving New Jersey Since 2004
    </span>
  )
}
