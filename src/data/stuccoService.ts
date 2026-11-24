import type { Service } from './business'

/**
 * Generic stucco copy for the stucco landing pages (/lp/stucco/<town or county>).
 * Kept out of business.ts `services` on purpose, so it adds no /services page and
 * no menu entry; it only feeds the landing pages' intro, services, process and FAQs.
 * Scope matches the stucco town pages (townServices.ts): hard-coat stucco, EIFS,
 * moisture-resistant finishes, crack & water-damage repair, commercial façades.
 */
export const stuccoService: Service = {
  slug: 'stucco',
  name: 'Stucco',
  short: 'Hard-coat stucco, EIFS & stucco repair',
  blurb:
    'Traditional hard-coat stucco and EIFS systems applied over a proper moisture barrier, plus crack and water-damage repair — so your exterior looks clean and keeps water out.',
  intro:
    'Stucco looks simple from the street, but what keeps it sound is everything underneath: the weather barrier, the lath, and the drainage detailing that lets water escape instead of soaking into the wall. Lita Construction applies traditional hard-coat stucco and EIFS (synthetic stucco) systems for houses and commercial buildings, and repairs cracked, stained or water-damaged stucco — finding where the water gets in before we patch anything, so the repair lasts through New Jersey winters.',
  quickAnswer:
    'Lita Construction installs and repairs hard-coat stucco and EIFS (synthetic stucco) across Northern & Central New Jersey, with moisture-managed layering and hand-troweled finishes.',
  features: [
    'Traditional hard-coat stucco',
    'EIFS (synthetic stucco) systems',
    'Stucco crack & water-damage repair',
    'Moisture-resistant finishes',
    'Full-house exterior transformations',
    'Commercial building façades',
  ],
  subServices: [
    { name: 'Stucco Repair', description: 'Cracks, bulges, stains and soft spots repaired after we find where the water is getting in — so the patch blends in and the problem does not come back.' },
    { name: 'Hard-Coat Stucco', description: 'Traditional three-coat stucco over a weather barrier and metal lath, hand-troweled to the texture you choose.' },
    { name: 'EIFS (Synthetic Stucco)', description: 'Insulated EIFS systems with drainage detailing, for a smooth, energy-efficient exterior on homes and commercial buildings.' },
    { name: 'Re-Stucco & Exterior Makeovers', description: 'Failed or dated stucco removed down to the substrate and re-applied, or a full exterior transformation with new color and finish.' },
  ],
  process: [
    { title: 'Free exterior assessment', description: 'We inspect the stucco and the wall behind it, check for moisture and damage, and recommend repair, hard-coat or EIFS based on your building — not our margin.' },
    { title: 'Clear written estimate', description: 'You get an itemized estimate that explains what we will remove, what we will repair underneath, and what the finished wall will look like.' },
    { title: 'Moisture-managed layering', description: 'Weather barrier, lath and drainage detailing go on first, so water sheds out of the wall instead of soaking in.' },
    { title: 'Finish coat & clean-up', description: 'Hand-troweled finish coats in your chosen texture and color, cured properly, and the site cleaned up completely before we walk the work with you.' },
  ],
  materials: [
    { name: 'Hard-Coat Stucco', bestFor: 'Durable, traditional exteriors on homes and masonry walls', lifespan: '50+ years', notes: 'Cement-based, applied in layers over lath; very impact-resistant when installed with proper drainage.' },
    { name: 'EIFS (Synthetic Stucco)', bestFor: 'Insulated exteriors and modern commercial façades', lifespan: '30+ years', notes: 'Adds continuous insulation; a drainage-type system is essential to keep water out of the wall.' },
  ],
  faqs: [
    { q: 'Can you repair stucco without redoing the whole wall?', a: 'Often, yes. If the damage is limited and the wall behind it is dry, we cut out the damaged section, fix what is underneath and blend the patch into the existing texture and color. If moisture has spread, we will show you what we found and explain why a larger repair makes sense.' },
    { q: 'What causes stucco to crack?', a: 'Most cracks come from movement in the building, freeze-thaw cycles and water getting behind the stucco. Hairline cracks are common; wider cracks, bulging or staining usually mean water is getting in and should be looked at soon.' },
    { q: 'What is the difference between hard-coat stucco and EIFS?', a: 'Hard-coat stucco is a traditional cement-based finish applied in layers over metal lath. EIFS is a synthetic system with a layer of foam insulation behind the finish. Both look similar; we recommend one or the other based on your building and budget.' },
    { q: 'How do I know if water is getting behind my stucco?', a: 'Warning signs include stains below windows, cracks that keep growing, soft or hollow-sounding spots, and peeling paint or musty smells inside. During a free assessment we check these areas and tell you honestly what we find.' },
    { q: 'When is the best time of year for stucco work in New Jersey?', a: 'Stucco cures best in mild weather, so most new stucco goes on from spring through fall. We do assessments and repairs year-round and schedule finish coats for weather that lets them cure properly.' },
    { q: 'Do you work on commercial buildings as well as homes?', a: 'Yes. We handle stucco and EIFS for houses and for commercial buildings, from small repairs to full façades.' },
  ],
  keywords: ['stucco contractor NJ', 'stucco repair New Jersey', 'EIFS contractor'],
}
