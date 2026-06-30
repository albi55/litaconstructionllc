import raw from './gallery.json'

export type GalleryImage = { src: string; category: string }

export const gallery = raw as GalleryImage[]

export const galleryCategories = ['All', 'Roofing', 'Siding', 'Masonry', 'Renovation'] as const

/** A curated, evenly-mixed subset for the homepage slider. */
export function featuredSlides(perCategory = 4): GalleryImage[] {
  const cats = ['Roofing', 'Siding', 'Masonry', 'Renovation']
  const picks: GalleryImage[] = []
  for (const c of cats) {
    const imgs = gallery.filter((g) => g.category === c).slice(0, perCategory)
    picks.push(...imgs)
  }
  return picks
}

export function imagesByCategory(category: string): GalleryImage[] {
  if (category === 'All') return gallery
  return gallery.filter((g) => g.category === category)
}
