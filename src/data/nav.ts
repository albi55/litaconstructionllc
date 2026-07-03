import { serviceGroups, serviceBySlug } from './business'

/** A menu entry. When `heading` is set, it renders as a group label rather than a link. */
export type NavChild = { label: string; to: string; description?: string; heading?: string }

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

/**
 * The Services dropdown, built from the four trade groups (Roofing, Siding,
 * Masonry, Exterior). Each group contributes a heading row followed by its
 * services. Slugs resolve to their live /services/:slug pages.
 */
const serviceChildren: NavChild[] = serviceGroups.flatMap((group) => [
  { label: group.name, to: '/services', heading: group.name },
  ...group.slugs.map((slug) => {
    const s = serviceBySlug(slug)
    return {
      label: s?.name ?? slug,
      to: `/services/${slug}`,
      description: s?.short,
    }
  }),
])

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: serviceChildren,
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
      { label: 'FAQ', to: '/faq', description: 'Answers to common questions' },
    ],
  },
]
