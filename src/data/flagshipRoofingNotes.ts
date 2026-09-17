/**
 * Per-town roofing "local notes" for the flagship towns listed in towns.ts.
 *
 * Flagship towns render through TownServicePage with the shared roofing SEO
 * pack from townServices.ts, so the generated per-town content in
 * roofingServiceTowns.ts never reaches them. These overrides supply the
 * town-specific building-science paragraphs — valley engineering, algae
 * defense, and decking substrate — that replace the generic localBody for
 * these towns only.
 *
 * Keyed by town slug; a town absent here falls back to the shared copy.
 */

export type TownRoofingNotes = {
  /** Local landmarks referenced in the opening line. */
  landmarks: string[]
  /** The dominant architecture of the town. */
  housingStock: string
  /** The specific climate and structural stresses local roofs face. */
  localStresses: string
  /** Valley and dead-valley drainage engineering for this town. */
  valleyNotes: string
  /** Shingle specification and algae defense for this town. */
  algaeNotes: string
  /** Decking substrate findings and remediation for this town. */
  substrateNotes: string
}

export const flagshipRoofingNotes: Record<string, TownRoofingNotes> = {
  'fort-lee': {
    landmarks: ['George Washington Bridge Plaza', 'Palisades Interstate Park Bluff', 'Main Street Historic Corridor', 'Monument Park'],
    housingStock: 'Cliffside Multi-Level Mansions, Pre-War Multi-Family Frame Dwellings, Luxury Modern Duplexes, and Brick-Front Colonials',
    localStresses: 'Intense Palisades cliff-edge wind shear, Hudson River marine atmospheric drafts, vehicle exhaust particulate deposition from bridge corridors, and steep multi-tier roof drops.',
    valleyNotes: 'Cliffside mansions and high-density luxury duplexes feature steep, multi-tier rooflines that funnel high-velocity wind-driven rain directly into lower balcony and parapet transitions. We fabricate custom heavy-gauge open metal valleys bedded over continuous GAF StormGuard® high-temperature membranes to eliminate hydrostatic back-wash during severe Hudson Valley gales.',
    algaeNotes: 'Marine dampness and riverfront fog rising over the Palisades cliffs accelerate dark fungal streaking and surface oxidation on shaded northern exposures. We specify GAF Timberline® HDZ shingles with StainGuard Plus™ copper micro-bead chemistry and LayerLock® technology rated for 130-MPH wind uplift.',
    substrateNotes: 'Tear-offs on older borough residences and pre-war multi-family properties frequently uncover true-dimensional 1x8 tongue-and-groove pine with wide shrinkage gaps and localized nail splits. We install an unyielding structural overlay of 5/8-inch CDX exterior plywood across all rafter spans to meet current NJ UCC shear schedules.',
  },
  'edgewater': {
    landmarks: ['Hudson River Waterfront Walkway', 'Old River Road Historic Sector', 'Edgewater Marina', 'Palisades Cliff Base'],
    housingStock: 'Waterfront Luxury Townhomes, Converted Industrial Frame Lofts, Steep Hillside Multi-Families, and Modern Coastal Dwellings',
    localStresses: 'Direct Hudson River tidal salt-air exposure, cliffside rock-face wind turbulence, extreme driving rain off open water, and narrow hillside lot clearances.',
    valleyNotes: 'Multi-tier waterfront townhomes and steep hillside residences feature complex valley intersections where upper drainage drops onto narrow lower dormers. We install heavy-gauge non-corrosive metal open valleys bedded over double layers of self-adhering GAF StormGuard® membranes to prevent wind-forced water migration behind exterior cladding.',
    algaeNotes: 'Persistent Hudson River atmospheric humidity and salt-fog promote organic surface film and aggressive Gloeocapsa magma staining on north- and east-facing planes. We install GAF Timberline® UHDZ shingles with Dual Shadow Lines and 30-year copper micro-bead algae defense.',
    substrateNotes: 'Hillside homes exposed to relentless river winds require maximum fastener pullout resistance. We inspect all decking during tear-offs, replacing compromised or thin 1/2-inch plywood with rigid 5/8-inch CDX exterior plywood secured with ring-shank nails.',
  },
  'cliffside-park': {
    landmarks: ['Anderson Avenue (The Avenue)', 'Palisades Ridge Overlook', 'Cliffside Park Clock Tower', 'Gorge Road Rim'],
    housingStock: 'Pre-War Brick Colonials, High-Density Custom Duplexes, Mid-Century Multi-Families, and Victorian Frame Residences',
    localStresses: 'Palisades ridgetop wind exposure, dense property lot setbacks, steep cross-gables (10/12 to 12/12), aging brick masonry chimneys, and attic heat retention.',
    valleyNotes: 'Closely spaced multi-family and modern duplex rooflines feature narrow dormer valleys that collect wind-blown debris and channel heavy runoff directly toward shared party walls. We install open metal valley troughs backed by self-adhering GAF WeatherWatch® mineral-surfaced membranes to guarantee rapid runoff evacuation without gutter overflow.',
    algaeNotes: 'Ridge-slope air currents paired with urban coastal humidity foster rapid black fungal streaking along northern exposures. We install GAF Timberline® HDZ shingles featuring StainGuard Plus™ copper protection to maintain sharp street appeal.',
    substrateNotes: 'Tear-offs on older borough properties frequently reveal original 1x6 tongue-and-groove pine with dry splits and shrinkage gaps. We lay an unyielding structural overlay of 5/8-inch CDX exterior plywood across all rafter bays to guarantee manufacturer wind-uplift compliance.',
  },
  'palisades-park': {
    landmarks: ['Broad Avenue Commercial Corridor', 'Overpeck Creek Basin Border', 'Palisades Park High School Overlook', 'Grand Avenue Historic Sector'],
    housingStock: 'High-Density Contemporary Multi-Family Duplexes, Mid-Century Ranches, Post-War Capes, and Brick-Front Colonials',
    localStresses: 'Overpeck Creek basin atmospheric dampness, high-density residential lot setbacks, complex multi-pitch addition seams, and severe attic heat-soak.',
    valleyNotes: 'Modern high-density duplexes and expanded multi-family homes feature compound dormer intersections and tight pitch breaks that funnel heavy downpours into narrow wall recesses. We line all valley troughs with continuous GAF StormGuard® membranes beneath pre-bent valley metal to prevent capillary backup behind siding.',
    algaeNotes: 'Elevated basin moisture alternating with intense solar radiation accelerates asphalt shingle oxidation and dark Gloeocapsa magma streaks. We specify GAF Timberline® HDZ shingles featuring StrikeZone™ nailing channels and time-release copper micro-beads.',
    substrateNotes: 'Tear-offs on older residential housing frequently reveal softened 1/2-inch plywood or sub-standard boards with localized delamination. We replace compromised sheathing with structural 5/8-inch CDX exterior plywood secured with ring-shank nails.',
  },
  'fairview': {
    landmarks: ['Fairview Cemetery Grounds', 'Bergenline Avenue Corridor', 'Anderson Avenue Junction', 'Bulls Ferry Road Historic Hill'],
    housingStock: 'Multi-Family Frame Dwellings, Turn-of-the-Century Cottages, Brick Rowhouses, and Post-War Capes',
    localStresses: 'Steep hillside wind drafts, high urban heat-island effect, aging soft lime-mortar brick chimney decay, and narrow lot clearances.',
    valleyNotes: 'Hillside frame homes and multi-family structures feature sharp pitch changes where steep gables drop into shallow rear extensions. We apply double-layer self-adhering GAF WeatherWatch® mineral-surfaced barriers beneath pre-bent transition flashing to eliminate capillary moisture creep during wind-driven downpours.',
    algaeNotes: 'Urban humidity combined with street-side shade trees accelerates dark algae blooms on north-facing roof slopes. We install GAF Timberline® HDZ shingles featuring StainGuard Plus™ copper micro-bead chemistry for 25-year algae protection.',
    substrateNotes: 'Tear-offs on older borough residences routinely expose aged 1x6 tongue-and-groove pine with nail splits. We install structural 5/8-inch CDX exterior plywood across all rafter bays to satisfy current NJ UCC shear schedules.',
  },
  'ridgefield': {
    landmarks: ['Historic English Neighborhood Reformed Church', 'Overpeck Creek Basin', 'Shaler Boulevard Corridor', 'Route 1 & 9 Ridge Border'],
    housingStock: 'Pre-War Dutch Colonials, American Foursquares, Post-War Capes, and Mid-Century Split-Levels',
    localStresses: 'Overpeck Creek basin atmospheric dampness, dead-valley transitions on split-levels, aging chimney counter-flashing, and highway-corridor wind buffeting.',
    valleyNotes: 'Dutch gambrel profiles and expanded split-level additions feature dead valleys where lower roofs meet two-story vertical walls. We install self-adhering GAF WeatherWatch® mineral-surfaced membranes running 36 inches up vertical walls beneath step flashing to stop trapped-water leaks.',
    algaeNotes: 'Basin dampness and dense residential maple canopies keep roof surfaces moist throughout morning hours, promoting blue-green algae streaks. We specify GAF Timberline® HDZ shingles with LayerLock® technology and copper micro-bead algae defense.',
    substrateNotes: 'Tear-offs in established post-war subdivisions frequently uncover thin 1/2-inch plywood or early OSB sheathing that sags over uninsulated soffit overhangs. We replace compromised decking with structural 5/8-inch CDX exterior plywood fastened with ring-shank nails.',
  },
  'tenafly': {
    landmarks: ['The Palisades Ridge', 'Tenafly Nature Center', 'Historic Downtown Railroad Square', 'Roosevelt Common'],
    housingStock: 'East Hill Gilded Age Estates, Stately Slate Tudors, Center-Hall Brick Colonials, and Contemporary Architectural Custom Builds',
    localStresses: 'Palisades mountain ridge updrafts, steep 10/12 to 14/12 historic roof slopes, heavy nature-center woodland dampness, and intricate multi-flue stone chimney interfaces.',
    valleyNotes: 'East Hill estates feature sprawling multi-tier rooflines converging in compound valleys. Nor\'easter gales drive heavy precipitation down these steep intersections; we construct custom open copper or heavy-gauge aluminum valley pans bedded over continuous GAF StormGuard® membranes to stop hydrostatic backups.',
    algaeNotes: 'Old-growth hardwood canopies across the East Hill cast dense morning shade, fostering moss and lichen colonies. We install GAF Timberline® UHDZ shingles featuring 30-year StainGuard Plus™ copper micro-bead chemistry to safeguard cedar and slate profiles.',
    substrateNotes: 'Historic estate tear-offs routinely reveal original true-dimensional 1x8 pine planking or former slate lath with wide expansion gaps. We install an unyielding overlay of 5/8-inch CDX structural plywood across all rafter spans to meet NJ UCC shear schedules.',
  },
  'closter': {
    landmarks: ['Closter Plaza Downtown', 'Palisades Foothills', 'Orvil Brook Basin', 'Borough Hall Historic District'],
    housingStock: 'Mid-Century Ranches, Dutch Colonials, Modern Farmhouses, and High-End Infill Custom Mansions',
    localStresses: 'Northern Valley wind drafts, dead-valley transitions on expanded homes, Orvil Brook humidity, and builder-grade plywood delamination.',
    valleyNotes: 'Expanded ranch and custom farmhouse additions create low-pitch dead valleys where storm runoff slows down. We install heavy-gauge open metal valley troughs bedded over self-adhering GAF WeatherWatch® mineral-surfaced barriers to prevent standing-water intrusion.',
    algaeNotes: 'Northern Valley dampness and mature shade trees trap morning dew, promoting Gloeocapsa magma streaks on north-facing roof slopes. We install GAF Timberline® HDZ shingles featuring StrikeZone™ nailing channels and time-release copper micro-beads.',
    substrateNotes: 'Tear-offs in established neighborhoods frequently uncover thin 1/2-inch CDX or OSB that deflects under modern architectural shingles. We excise softened decking and lay rigid 5/8-inch CDX exterior plywood secured with ring-shank nails.',
  },
  'demarest': {
    landmarks: ['Demarest Duck Pond', 'Historic Demarest Railroad Station', 'Northern Valley Regional High School Grounds', 'Wakelee Field'],
    housingStock: 'Executive Center-Hall Colonials, Mid-Century Moderns, Victorian Revivals, and Custom Infill Mansions',
    localStresses: 'Northern Valley basin moisture, duck pond proximity fog, dead-valley transitions on expanded wings, and unconditioned attic heat traps.',
    valleyNotes: 'Expanded residential additions create low-pitch dead valleys where lower roofs meet two-story vertical walls. Leaves and pine needles collect in these corners, trapping storm runoff; we install self-adhering GAF WeatherWatch® mineral-surfaced membranes extending 36 inches up vertical sidewalls beneath custom step flashing to stop trapped-water leaks.',
    algaeNotes: 'Duck pond humidity combined with dense neighborhood maple canopies traps moisture on asphalt shingles, promoting persistent Gloeocapsa magma streaks. We install GAF Timberline® HDZ shingles featuring StainGuard Plus™ copper micro-bead chemistry to safeguard curb appeal.',
    substrateNotes: 'Tear-offs in established subdivisions frequently reveal dried 1/2-inch plywood with delaminating veneers from inadequate attic ventilation. We replace compromised lumber with rigid 5/8-inch CDX exterior plywood fastened with ring-shank nails to meet current NJ UCC framing schedules.',
  },
  'cresskill': {
    landmarks: ['Camp Merritt Memorial Monument', 'Cresskill Brook Corridor', 'East Hill Enclave', 'Downtown Union Avenue'],
    housingStock: 'East Hill Luxury Mansions, Mid-Century Split-Levels, Post-War Capes, and Modern Custom Colonials',
    localStresses: 'East Hill ridge wind shear, brook basin atmospheric dampness, compound multi-pitch roof valleys, and builder-grade plywood delamination.',
    valleyNotes: 'East Hill luxury estates feature multi-tier rooflines converging in compound valleys handling heavy runoff volumes. We install heavy-gauge open metal valleys bedded over continuous GAF StormGuard® high-temperature leak barriers to eliminate hydrostatic water backup during severe squalls.',
    algaeNotes: 'Brook-corridor dampness and dense mature tree canopies keep northern roof slopes moist throughout the morning. We specify GAF Timberline® UHDZ shingles featuring Dual Shadow Lines and 30-year StainGuard Plus™ copper protection to preserve authentic architectural depth.',
    substrateNotes: 'Tear-offs across older homes and 1970s split-levels frequently uncover thin 1/2-inch plywood that deflects under modern architectural shingles. We excise softened decking and install structural 5/8-inch CDX exterior plywood secured with ring-shank nails.',
  },
  'englewood': {
    landmarks: ['Downtown Palisade Avenue Historic Corridor', 'Bergen Performing Arts Center (bergenPAC)', 'East Hill Historic Mansions', 'Flat Rock Brook Nature Center'],
    housingStock: 'Grand East Hill Gilded Age Estates, Victorian Painted Ladies, English Tudors, and Pre-War Colonials',
    localStresses: 'East Hill elevation drafts, steep historic gables (10/12 to 14/12), soft lime-mortar brick chimney decay, and nature center canopy dampness.',
    valleyNotes: 'Historic East Hill estates feature steep compound gables and copper-accented dormers subjected to intense wind-driven rain. We fabricate custom 20-ounce copper or heavy-gauge aluminum open valleys bedded over continuous GAF StormGuard® leak barriers to ensure leak-free, high-capacity drainage.',
    algaeNotes: 'Dense forest canopies bordering Flat Rock Brook Nature Center shelter roof surfaces from direct sunlight, accelerating moss and lichen colonization. We install GAF Timberline® UHDZ shingles featuring StainGuard Plus™ copper micro-bead chemistry.',
    substrateNotes: 'Tear-offs on century-old historic homes routinely expose original true-dimensional 1x8 tongue-and-groove pine with wide expansion gaps. We install a continuous structural overlay of 5/8-inch CDX exterior plywood across all rafter spans to guarantee code-compliant fastener pullout resistance.',
  },
  'alpine': {
    landmarks: ['The Palisades Cliffs Overlook', 'Rio Vista Historic Estate Grounds', 'Palisades Interstate Park', 'Closter Dock Road'],
    housingStock: 'Ultra-Luxury Multi-Million-Dollar Mansions, European Châteaux, Gated Palatial Compounds, and Historic Riverfront Estates',
    localStresses: 'Severe Palisades ridgetop wind shear, Hudson River marine atmospheric drafts, intricate multi-turret copper flashings, and deep winter snow and ice loads.',
    valleyNotes: 'Monumental roof footprints feature steep compound gables and copper-accented dormers subjected to intense Hudson Valley wind-driven rain. We engineer custom heavy-gauge 20-ounce copper open valleys bedded over continuous GAF StormGuard® high-temperature leak barriers to eliminate hydrostatic water backup.',
    algaeNotes: 'Palisades cliffside moisture and dense private estate woodlands create lingering morning fog. We specify GAF Timberline® UHDZ shingles featuring 30-year StainGuard Plus™ copper micro-bead protection to preserve authentic wood-shake and slate shadow profiles without discoloration.',
    substrateNotes: 'Palatial estate rooflines require absolute structural rigidity to support heavy architectural profiles against 130-MPH wind uplift. We install exterior-grade 5/8-inch CDX plywood secured with ring-shank nails to current NJ structural shear schedules.',
  },
  'rumson': {
    landmarks: ['River Road', 'Rumson Road', 'the Navesink Riverfront', 'the Shrewsbury River Corridor'],
    housingStock: 'Gilded Age Waterfront Mansions, Historic Shingle-Style Estates, Custom Center-Hall Colonials, and French Country Châteaux',
    localStresses: 'Severe coastal salt-air corrosion, high-velocity Atlantic gale and riverfront wind shear, intricate multi-turret dormer junctions, and heavy nor’easter driving rain.',
    valleyNotes: 'Peninsula estates feature expansive compound valleys and copper-accented dormers subjected to horizontal ocean winds. We install custom 20-ounce copper or heavy-gauge non-corrosive metal valley troughs bedded over continuous GAF StormGuard® high-temperature leak barriers to eliminate hydrostatic back-wash.',
    algaeNotes: 'Maritime fog and persistent river humidity off the Navesink promote aggressive Gloeocapsa magma and moss retention on shaded north exposures. We specify GAF Timberline® UHDZ shingles with 30-year StainGuard Plus™ copper micro-bead algae defense to preserve authentic cedar-shake shadow lines.',
    substrateNotes: 'Historic estate rooflines frequently reveal original spaced planking or settling tongue-and-groove decking from slate conversions. We inspect all structural framing, installing exterior-grade 5/8-inch CDX plywood fastened with corrosion-resistant ring-shank nails to comply with NJ UCC 130-MPH wind schedules.',
  },
  'little-silver': {
    landmarks: ['Oceanport Avenue', 'Prospect Avenue', 'the Shrewsbury River creek branches', 'the Little Silver Train Station'],
    housingStock: 'Waterfront Colonial Revivals, Custom Modern Farmhouses, Mid-Century Ranches, and Split-Levels',
    localStresses: 'Creek and river basin moisture, coastal wind buffeting, shallow-pitch addition transitions, and unconditioned attic heat traps.',
    valleyNotes: 'Expanded split-level and ranch configurations feature dead valleys where additions intersect vertical two-story walls. We install continuous self-adhering GAF WeatherWatch® barriers extending 36 inches up flanking sidewalls beneath step flashing to stop trapped-water intrusion.',
    algaeNotes: 'Elevated humidity sweeping from the Shrewsbury River branches fosters rapid lichen colonization and dark algae streaks. We specify GAF Timberline® HDZ shingles with StainGuard Plus™ protection for lasting aesthetic clarity.',
    substrateNotes: 'Tear-offs frequently expose heat-delaminated 1/2-inch plywood or aging board decking. We excise weakened panels and install rigid 5/8-inch CDX plywood sheathing to re-establish structural integrity.',
  },
  'colts-neck': {
    landmarks: ['the Route 34 corridor', 'County Road 537', 'Hominy Hill Golf Course', 'Bucks Mill Park'],
    housingStock: 'Multi-Acre Equestrian Estates, Custom French Châteaux, Sprawling Executive Colonials, and Gated Mansions',
    localStresses: 'Unsheltered open-pasture wind shear, massive multi-tier compound valleys, fieldstone chimney leaks, and failing builder-grade skylights.',
    valleyNotes: 'Estate roofs often exceed 8,000 square feet with compound valleys handling enormous storm volume. We install commercial-grade GAF StormGuard® membranes beneath heavy-gauge open metal valley pans to stop hydrostatic backup during severe summer thunderstorms.',
    algaeNotes: 'Surrounding agricultural parcels and private woodlands keep morning dew trapped on northern roof slopes, fostering heavy algae growth. We install GAF Timberline® UHDZ shingles with 30-year copper micro-bead protection to ensure authentic slate and shake aesthetics.',
    substrateNotes: 'Custom acreage mansions frequently feature expansive rafter spans that experience decking sag under heavy architectural loads. We audit framing during tear-off, installing rigid 5/8-inch CDX plywood to eliminate deflection.',
  },
  'holmdel': {
    landmarks: ['Bell Works', 'Holmdel Park', 'Longstreet Farm', 'Crawfords Corner Road'],
    housingStock: 'High-Equity Custom Mansions, Sprawling Hillside Colonials, Contemporary Estates, and Executive Subdivisions',
    localStresses: 'Hilltop elevation wind gusts, expansive multi-plane roof areas, builder-grade shingle failure, and unconditioned attic heat-soak.',
    valleyNotes: 'Hillside custom estates converge in deep central valleys handling severe stormwater runoff. We reinforce all valley channels with high-temperature GAF StormGuard® membranes wrapped 36 inches up flanking decks beneath pre-bent valley metal.',
    algaeNotes: 'Wooded residential buffers generate airborne fungal spores that anchor on damp asphalt surfaces. GAF Timberline® UHDZ shingles provide deep shadow definition and 30-year StainGuard Plus™ copper-bead algae defense.',
    substrateNotes: 'Tear-offs in established custom subdivisions frequently reveal thin 1/2-inch CDX or OSB panels that sag between rafters. We replace compromised sheathing with rigid 5/8-inch CDX exterior plywood to guarantee manufacturer wind-uplift compliance.',
  },
  'shrewsbury': {
    landmarks: ['the Broad Street Historic District', 'the Historic Four Corners', 'the Allen House', 'the Sycamore Avenue corridor'],
    housingStock: '18th- and 19th-Century Historic Colonials, Federal Frame Homes, Post-War Capes, and Custom Executive Infill',
    localStresses: 'Historic district preservation guidelines, soft lime-mortar brick chimney deterioration, steep historic pitches, and mature maple tree shade.',
    valleyNotes: 'Historic rooflines feature sharp pitches that concentrate heavy stormwater runoff into narrow dormer valleys. We install custom open copper or aluminum valley pans lined with GAF StormGuard® membranes to prevent hydrostatic back-ups while preserving historic character.',
    algaeNotes: 'Historic village shade trees trap morning dampness across roof planes, fostering dark algae streaks. We specify GAF Timberline® HDZ shingles featuring StainGuard Plus™ copper protection to maintain clean curb appeal.',
    substrateNotes: 'Tear-offs on older borough residences routinely expose historic 1x8 tongue-and-groove pine with wide shrinkage gaps. We lay an unyielding overlay of 5/8-inch CDX structural plywood across all rafter bays to guarantee maximum fastener pullout resistance.',
  },
}

/**
 * Localized roofing paragraphs for one flagship town, in render order for the
 * "Local Notes" section. Returns undefined when the town has no override, so
 * the caller falls back to the shared copy.
 */
export function flagshipRoofingBody(townSlug: string, town: string): string[] | undefined {
  const n = flagshipRoofingNotes[townSlug]
  if (!n) return undefined
  const stresses = n.localStresses.charAt(0).toLowerCase() + n.localStresses.slice(1)
  return [
    `Roofs near ${n.landmarks[0]} and ${n.landmarks[1]} face conditions a generic spec sheet never accounts for. ${town} homes \u2014 ${n.housingStock} \u2014 contend with ${stresses}`,
    n.valleyNotes,
    n.algaeNotes,
    n.substrateNotes,
  ]
}
