import { services } from './business'

export type NavChild = { label: string; to: string; description?: string }

export type NavItem = {
  label: string
  to: string
  children?: NavChild[]
}

/**
 * Primary navbar — only the most important links are visible. Secondary
 * pages live under the "More" dropdown (with short descriptions). Display
 * labels use polished/premium wording; routes are unchanged so all links work.
 */
/** Trades without a dedicated /services/:slug page — link to the portfolio instead. */
const otherTrades: NavChild[] = [
  { label: 'Renovation', to: '/projects', description: 'Whole-home & room remodels' },
  { label: 'Bathroom', to: '/projects', description: 'Full bathroom remodels & waterproofing' },
  { label: 'Chimney', to: '/projects', description: 'Repointing, rebuilds & leak repair' },
]

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'All Services', to: '/services', description: 'Every trade we offer, in one place' },
      ...services.map((s) => ({
        label: s.name,
        to: `/services/${s.slug}`,
        description: s.short,
      })),
      ...otherTrades,
    ],
  },
  { label: 'Portfolio', to: '/projects' },
  { label: 'Our Story', to: '/about' },
  { label: 'Contact', to: '/contact' },
  {
    label: 'More',
    to: '/service-areas',
    children: [
      { label: 'Areas We Serve', to: '/service-areas', description: 'The NJ counties & towns we cover' },
      { label: 'Testimonials', to: '/reviews', description: 'What North Jersey homeowners say' },
      { label: 'Financing', to: '/financing', description: 'Flexible options & free estimates' },
      { label: 'FAQ', to: '/faq', description: 'Answers to common questions' },
    ],
  },
]
