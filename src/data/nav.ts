import { services } from './business'

export type NavItem = {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'All Services', to: '/services' },
      ...services.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
    ],
  },
  { label: 'Projects', to: '/projects' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Financing', to: '/financing' },
  { label: 'Contact', to: '/contact' },
]
