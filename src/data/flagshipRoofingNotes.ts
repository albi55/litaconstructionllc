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
  'leonia': {
    landmarks: ['Leonia Arts District', 'Overpeck County Park Border', 'Broad Avenue Historic Corridor', 'English Neighborhood Historic Grounds'],
    housingStock: 'Arts & Crafts Brown-Shingle Cottages, Victorian Painted Ladies, American Foursquares, and Colonial Revivals',
    localStresses: 'Palisades slope wind updrafts, Overpeck wetland humidity, steep Craftsman gables (10/12 to 14/12), soft lime-mortar brick chimneys, and dense tree canopy shade.',
    valleyNotes: 'Arts & Crafts and Victorian rooflines feature steep cross-gables that concentrate heavy runoff against dormer returns and porch eaves. We construct open metal valley troughs bedded over continuous GAF StormGuard® membranes to ensure leak-free drainage without splashover.',
    algaeNotes: 'Overpeck Creek humidity combined with preserved residential tree canopies creates persistent dampness across northern exposures. We install GAF Timberline® UHDZ shingles featuring Dual Shadow Lines and 30-year StainGuard Plus™ copper protection.',
    substrateNotes: 'Tear-offs on older borough residences routinely expose original 1x8 tongue-and-groove pine with nail splits and wide gaps. We install structural 5/8-inch CDX exterior plywood across all rafter bays to guarantee maximum fastener pullout resistance.',
  },
  'marlboro': {
    landmarks: ['Big Brook Park', 'Marlboro Recreation Complex', 'Route 9 Commercial Corridor', 'Historic Old Tennent Church Border'],
    housingStock: '1980s–2000s Sprawling Executive Colonials, Multi-Tier Center-Hall Mansions, Planned Luxury Developments, and Custom Infill Builds',
    localStresses: 'Large 4,000–7,000 sq ft roof footprints, failing original 25-year builder-grade shingles, builder-grade OSB sheathing sag, dead valleys at two-story foyer/garage intersections, and unconditioned attic heat traps.',
    valleyNotes: 'Two-story grand entry foyers and projecting garage wings create complex dead valleys where heavy downpours collect quickly. We install continuous self-adhering GAF WeatherWatch® mineral-surfaced membranes running 36 inches up sidewalls under heavy-gauge step flashing to stop trapped-water leaks.',
    algaeNotes: 'Open suburban solar exposure alternating with humid summer storms promotes rapid shingle oxidation and dark Gloeocapsa magma streaks on north-facing planes. We install GAF Timberline® HDZ shingles featuring LayerLock® technology and copper micro-bead algae defense.',
    substrateNotes: 'Tear-offs on 1980s and 1990s subdivisions routinely uncover thin 7/16-inch OSB sheathing that has softened over soffit vents. We excise compromised decking and lay exterior-grade 5/8-inch CDX plywood fastened with ring-shank nails to eliminate roof deck deflection.',
  },
  'manalapan': {
    landmarks: ['Monmouth Battlefield State Park', 'Manalapan Recreation Center', 'Route 33 Corridor', 'Knob Hill Golf Club'],
    housingStock: 'Sprawling Executive Center-Hall Colonials, Knob Hill Luxury Enclaves, 1980s–1990s Planned Subdivisions, and Custom Acreage Builds',
    localStresses: 'High attic heat loads reaching 140°F+, large roof footprints (50–90 squares), builder-grade OSB delamination, dead valleys over two-story porticos, and highway-corridor wind drafts.',
    valleyNotes: 'Executive homes feature multi-tier cross-gables shedding heavy water volume into narrow valley channels above garage doors. We install open metal valley troughs bedded over self-adhering GAF WeatherWatch® mineral-surfaced barriers to ensure uninterrupted drainage without gutter spillover.',
    algaeNotes: 'Broad suburban sun exposure followed by severe summer storms accelerates shingle granule degradation and black algae streaking. We install GAF Timberline® HDZ shingles featuring StrikeZone™ nailing channels and time-release copper micro-beads.',
    substrateNotes: 'Tear-offs in established subdivisions frequently reveal heat-delaminated OSB panels. We replace all weakened sheathing with structural 5/8-inch CDX exterior plywood secured to current NJ UCC framing schedules.',
  },
  'middletown': {
    landmarks: ['Navesink River Overlook', 'Poricy Park Nature Center', 'Historic Chapel Hill', 'Huber Woods Park'],
    housingStock: 'Navesink Riverfront Mansions, Historic Locust Farmsteads, Sprawling 1970s–1990s Subdivisions, and Custom Executive Manors',
    localStresses: 'Navesink River and Raritan Bay coastal moisture, high wind updrafts across the Navesink ridge, massive multi-tier valley drainage volume, and heavy tree canopy dampness.',
    valleyNotes: 'Navesink ridge and riverfront custom homes feature steep, multi-tier rooflines handling heavy water volume from high pitches. We construct custom heavy-gauge open metal valleys bedded over continuous GAF StormGuard® high-temperature membranes to eliminate hydrostatic water backup.',
    algaeNotes: 'River-basin humidity and old-growth hardwood canopies keep northern roof slopes damp into the afternoon, encouraging blue-green algae growth. We install GAF Timberline® UHDZ shingles featuring StainGuard Plus™ copper protection to preserve authentic shadow lines.',
    substrateNotes: 'Tear-offs on custom homes and older subdivisions frequently reveal sagging 1/2-inch plywood over extended rafter spans. We replace compromised decking with structural 5/8-inch CDX exterior plywood secured with ring-shank nails.',
  },
  'freehold-township': {
    landmarks: ['Turkey Swamp Park', 'Freehold Raceway Mall Perimeter', 'Lake Topanemus Border', 'Michael J. Tighe Park'],
    housingStock: 'Executive Center-Hall Colonials, Sprawling Ranches, Planned Subdivisions, and Wooded Acreage Homes',
    localStresses: 'Intense solar UV degradation on open plateau sites, builder-grade plywood sag between rafters, dead valleys on multi-tier wings, and winter ice damming along wide uninsulated overhangs.',
    valleyNotes: 'Suburban colonial additions create dead valleys where lower roofs meet two-story vertical walls. We line all valley troughs with commercial-grade GAF StormGuard® membranes beneath pre-bent metal flashing to stop hydrostatic penetration during heavy summer cloudbursts.',
    algaeNotes: 'Pine and oak tree canopies near Turkey Swamp Park shelter roof decks from morning sunlight, encouraging moss colonies and lichen. We specify GAF Timberline® HDZ shingles featuring StainGuard Plus™ copper protection.',
    substrateNotes: 'Tear-offs on 1970s and 1980s homes routinely expose dried 1/2-inch plywood that has buckled along seams. We excise compromised panels and lay rigid 5/8-inch CDX exterior plywood fastened with ring-shank nails to provide a flat, stable nailing deck.',
  },
  'wall-township': {
    landmarks: ['Allaire State Park Border', 'Shark River Park', 'Manasquan River Basin', 'Wall Township Municipal Complex'],
    housingStock: 'Custom Wooded Acreage Estates, Sprawling Executive Colonials, 1980s Planned Subdivisions, and Converted Farmsteads',
    localStresses: 'Coastal wind gusts combined with inland summer heat, large roof footprints, dead valleys on multi-tier wings, builder-grade decking deterioration, and pine needle debris dams.',
    valleyNotes: 'Acreage estates and colonial additions feature dead valleys where lower garage wings intersect two-story siding. We install self-adhering GAF WeatherWatch® mineral-surfaced membranes running 36 inches up vertical sidewalls beneath heavy step flashing to stop trapped-water leaks.',
    algaeNotes: 'Dense pine barrens and oak canopies bordering Allaire State Park create lingering morning moisture, fostering dark Gloeocapsa magma streaks. We install GAF Timberline® HDZ shingles featuring LayerLock® technology and copper micro-bead algae defense.',
    substrateNotes: 'Tear-offs routinely expose aged 1/2-inch plywood sheathing with loose fastener holds and delaminating veneers over soffits. We replace compromised sheathing with structural 5/8-inch CDX exterior plywood secured with ring-shank nails.',
  },
  'franklin-township': {
    landmarks: ['Easton Avenue', 'the Delaware and Raritan Canal State Park', 'Colonial Park', 'Franklin Park'],
    housingStock: '1980s–2000s Planned Subdivisions, Contemporary Center-Hall Colonials, Historic Canal-Front Stone Homes, and Multi-Family Townhome Enclaves',
    localStresses: 'Canal basin atmospheric dampness, open-tract wind buffering across agricultural corridors, builder-grade shingle blow-offs, and plumbing boot dry rot.',
    valleyNotes: 'Subdivision rooflines feature complex dormer configurations that funnel rapid runoff directly toward garage and porch transitions. We install reinforced open metal valleys lined with GAF WeatherWatch® mineral-surfaced barriers to maintain continuous, clog-free drainage.',
    algaeNotes: 'Elevated moisture rising from the D&R Canal corridor combined with summer heat accelerates Gloeocapsa magma staining on north-facing slopes. We install GAF Timberline® HDZ shingles with LayerLock® technology and time-release StainGuard Plus™ protection.',
    substrateNotes: 'We audit decking during tear-offs to locate softened or delaminating 1/2-inch plywood, replacing weakened panels with exterior-grade 5/8-inch CDX plywood secured to NJ UCC standards.',
  },
  'green-brook': {
    landmarks: ['Washington Rock State Park', 'the Route 22 commercial corridor', 'Green Brook Park', 'the Top of the World Overlook'],
    housingStock: 'Watchung Mountain Ridge Estates, Mid-Century Split-Levels, Ranches, and Modern Infill Colonials',
    localStresses: 'Direct Watchung Mountain updraft wind gusts, steep hillside valley runoff velocities, heavy canopy dampness, and winter freeze-thaw ice dams.',
    valleyNotes: 'Steep hillside pitches along the Watchung ridge funnel torrential storm runoff directly into lower dormer returns. We line all valleys with commercial-grade GAF StormGuard® membranes beneath heavy-gauge open metal valley pans to stop hydraulic wash and scouring.',
    algaeNotes: 'Dense forest canopies surrounding Washington Rock State Park keep roof surfaces damp well into the afternoon. We install GAF Timberline® UHDZ shingles featuring StainGuard Plus™ copper micro-bead chemistry to ensure lasting color vibrancy.',
    substrateNotes: 'We assess structural framing across all rafter intersections during tear-off, replacing thin or compromised sheathing with 5/8-inch CDX decking to ensure firm nail retention against 130-MPH wind uplift.',
  },
  'bridgewater': {
    landmarks: ['the Route 202/206 corridor', 'Commons Way', 'Washington Valley Park', 'Chimney Rock'],
    housingStock: '1970s–1990s Center-Hall Colonials, Sprawling Split-Levels, Ranches, and Martinsville Ridge Mansions',
    localStresses: 'First Watchung Mountain ridgeline wind shear, failing builder-grade 1/2-inch sub-plywood, dead-valley junctions on split-levels, and unconditioned attic heat-soak.',
    valleyNotes: 'Subdivision rooflines feature complex multi-level transitions where lower additions terminate into two-story walls. We construct seamless step-flashing assemblies bedded in self-adhering GAF WeatherWatch® membranes and install heavy-gauge open metal valleys to divert high-velocity runoff cleanly away from wall framing.',
    algaeNotes: 'Open suburban solar exposure alternating with heavy summer rainfall causes rapid asphalt shingle oxidation and Gloeocapsa magma staining on north-facing slopes. We install GAF Timberline® HDZ shingles featuring time-release StainGuard Plus™ copper micro-bead chemistry.',
    substrateNotes: 'Tear-offs in established subdivisions frequently reveal original thin 1/2-inch plywood or early OSB sheathing that sags under modern architectural shingles. We re-nail framing bays and replace deteriorated panels with exterior-grade 5/8-inch CDX plywood secured with ring-shank nails.',
  },
  'hillsborough': {
    landmarks: ['the Route 206 corridor', 'the Sourland Mountain Preserve', 'Duke Farms', 'Amwell Road'],
    housingStock: '1980s–2000s Planned Subdivisions, Contemporary Center-Hall Colonials, Ranches, and Sourland Foothills Custom Builds',
    localStresses: 'Sourland Mountain wind drafts, expansive multi-tier valley runoff, builder-grade shingle delamination, and winter freeze-thaw damming.',
    valleyNotes: 'Sprawling subdivision rooflines channel large rainwater volumes into long central valleys. We line all valley troughs with commercial-grade GAF StormGuard® membranes beneath heavy-gauge metal flashing to stop hydrostatic backup during heavy summer downpours.',
    algaeNotes: 'Properties bordering the Sourland Mountain Preserve endure elevated forest moisture and partial shade that promotes fungal streaking. We install GAF Timberline® UHDZ shingles with 30-year StainGuard Plus™ copper protection.',
    substrateNotes: '1980s subdivisions frequently feature 1/2-inch OSB or CDX sheathing that has softened over soffits. During tear-off, we replace compromised panels with rigid 5/8-inch CDX plywood secured to NJ structural shear schedules.',
  },
  'branchburg': {
    landmarks: ['the Route 22 corridor', 'Raritan Valley Community College', 'the North Branch Raritan River', 'Burnt Mills Road'],
    housingStock: 'Custom Single-Family Colonials, Sprawling Ranches, Multi-Level Split-Levels, and Equestrian Acreage Builds',
    localStresses: 'Open-field wind gusts along Route 22, river confluence dampness, failing skylight curb flashings, and uninsulated attic heat-soak.',
    valleyNotes: 'Broad multi-gable roof configurations funnel high water volumes into long central valleys. We line all valleys with commercial-grade GAF StormGuard® self-adhering membranes under heavy-gauge metal valley pans to stop hydrostatic backup.',
    algaeNotes: 'River-corridor humidity paired with open-field sun cycles accelerates surface oxidation and biological growth. GAF Timberline® HDZ shingles provide mechanical LayerLock® fastening and 25-year StainGuard Plus™ algae defense.',
    substrateNotes: 'We audit decking during tear-off for humidity-induced delamination, replacing softened sheathing with exterior-grade 5/8-inch CDX plywood secured with ring-shank nails.',
  },
  'bound-brook': {
    landmarks: ['the Main Street Historic District', 'the Middlebrook Trail', 'Billian Legion Park', 'the Raritan River basin'],
    housingStock: 'Historic Victorians, Turn-of-the-Century Colonials, American Foursquares, and Two-Family Frame Dwellings',
    localStresses: 'Raritan River moisture, steep Victorian gables (10/12 to 12/12), soft lime-mortar brick chimney decay, and narrow lot setbacks.',
    valleyNotes: 'Historic rooflines feature sharp pitches that concentrate heavy rainwater into compound dormer valleys. We install custom open metal valley pans backed by GAF StormGuard® membranes to shed water and debris without splashing adjacent walls.',
    algaeNotes: 'Riverfront humidity combined with street-side shade trees promotes dark algae streaks on shaded exposures. We specify GAF Timberline® HDZ shingles with StainGuard Plus™ copper protection.',
    substrateNotes: 'Tear-offs on older properties frequently uncover aged 1x8 tongue-and-groove pine with wide expansion gaps. We install structural 5/8-inch CDX plywood across all planes to provide a continuous, code-compliant nailing base.',
  },
  'bernardsville': {
    landmarks: ['Mine Mountain Road', 'Anderson Hill Road', 'Bernardsville Mountain', 'the Oliphant Historic District'],
    housingStock: 'Mountain-Elevation Gilded Age Estates, Historic Stone Tudors, and Multi-Gable Custom Mansions',
    localStresses: 'Extreme mountain-ridge wind buffeting, steep 10/12 to 14/12 roof slopes, dense hardwood canopy shade, heavy multi-flue stone chimney interfaces, and severe freeze-thaw ice dams.',
    valleyNotes: 'Bernardsville Mountain properties feature expansive multi-tier rooflines converging in compound valleys. Severe summer squalls send torrential runoff into these intersections, scouring standard shingles. We install custom 20-ounce copper or heavy-gauge aluminum open valleys bedded over continuous GAF StormGuard® high-temperature leak barriers.',
    algaeNotes: 'Perpetual shade cast by mature beech, oak, and hemlock canopies holds morning moisture against north and east roof planes. We specify GAF Timberline® UHDZ shingles featuring StainGuard Plus™ algae defense with time-release copper micro-beads to maintain clean slate-and-shake aesthetics without discoloration.',
    substrateNotes: 'Tear-offs on historic mountain estates frequently uncover uneven plank substrates or previous slate conversions. We inspect all structural rafter bays, sistering compromised framing members and installing 5/8-inch exterior-grade CDX plywood secured with ring-shank nails to current NJ structural shear schedules.',
  },
  'basking-ridge': {
    landmarks: ['South Finley Avenue', 'the Basking Ridge Oak Tree historic site', 'Lord Stirling Park', 'Liberty Corner'],
    housingStock: 'Pre-Revolutionary Historic Homes, Executive Center-Hall Colonials, and Custom Planned Subdivisions',
    localStresses: 'High-velocity storm gusts, complex multi-tier roof valleys, aging builder-grade plywood, and Great Swamp perimeter dampness.',
    valleyNotes: 'Extensive roof layouts in developments like The Hills channel massive water volumes into long lower valleys. To prevent hydraulic wash-over and granular loss during summer cloudbursts, we install heavy-gauge open metal valleys bedded in high-temperature self-adhering GAF WeatherWatch® barriers.',
    algaeNotes: 'Properties bordering Lord Stirling Park and the Passaic River basin experience lingering humidity that accelerates blue-green algae blooms. We install GAF Timberline® HDZ shingles with LayerLock® technology and copper micro-bead StainGuard Plus™ protection to ensure clean curb appeal.',
    substrateNotes: '1980s tract and custom framing in Basking Ridge subdivisions frequently utilized standard 1/2-inch CDX or early OSB sheathing that sags over time. During tear-off, we check every span for deflection, replacing compromised sheathing with structural 5/8-inch CDX plywood.',
  },
  'bedminster': {
    landmarks: ['Lamington Road', 'Rathbun Road', 'Hamilton Farm Golf Club', 'Pottersville Road'],
    housingStock: 'Multi-Acre Equestrian Country Estates, Historic Farmsteads, and High-End Planned Townhome Enclaves',
    localStresses: 'Open-field and foothill wind shear, compound dormer returns, winter ice damming along wide overhangs, and fieldstone chimney counter-flashing degradation.',
    valleyNotes: 'Acreage properties feature massive compound valleys directing runoff from sprawling wings into lower gutters. We construct heavy-gauge open metal valleys bedded over continuous GAF StormGuard® membranes to handle heavy flow without blowing out eaves.',
    algaeNotes: 'Rolling pastureland and wooded stream buffers create localized microclimates with heavy morning dew. GAF Timberline® UHDZ shingles replicate heavy cedar shake profiles while providing 30-year copper micro-bead algae defense.',
    substrateNotes: 'Custom estate roofs with extended rafter spans often display localized deck deflection under heavy winter snow loads. We audit all framing during tear-off, replacing thin sheathing with exterior-grade 5/8-inch CDX plywood.',
  },
  'far-hills': {
    landmarks: ['Peapack Road', 'Lake Road', 'Moorland Farm', 'the Far Hills Fairgrounds'],
    housingStock: 'Private Gated Country Manors, Historic Georgian Brick Estates, and Custom Slate and Shake Conversions',
    localStresses: 'High-volume rainwater drainage, complex roofline valleys, fieldstone and soft-brick masonry chimney leaks, and heavy canopy shade.',
    valleyNotes: 'Secluded acreage estates feature sprawling rooflines where multiple high-pitch gables meet lower master suites. We engineer heavy-gauge open copper or commercial-grade metal valleys lined with double layers of GAF StormGuard® membranes to ensure massive drainage volume never backs up beneath shingles.',
    algaeNotes: 'Dense mature woodland canopies keep roof surfaces shaded throughout morning hours, promoting heavy moss and lichen growth. GAF Timberline® UHDZ shingles provide deep wood-shake dimension and 30-year copper micro-bead algae defense.',
    substrateNotes: 'Tear-offs on historic properties frequently uncover original spaced-board decking. We install a continuous structural layer of 5/8-inch CDX plywood across all rafter bays to guarantee code-compliant fastener pullout resistance.',
  },
  'peapack-gladstone': {
    landmarks: ['Main Street', 'Pottersville Road', 'Natirar Park', 'Hamilton Farm'],
    housingStock: 'Historic Estate Manors, Victorian Village Residences, and Custom Hillside Farmsteads',
    localStresses: 'High-elevation foothill winds, steep roof slopes (10/12 to 14/12), aging fieldstone chimney mortar joints, and winter ice dams along extended overhangs.',
    valleyNotes: 'Steep hillside pitches accelerate rainwater velocity into valley intersections. Standard closed-cut shingles scrub their granules under this friction. We install custom-bent open metal valleys bedded in high-temperature GAF StormGuard® membranes to handle rapid runoff without wall splashback.',
    algaeNotes: 'Natirar valley humidity and dense forest canopies create lingering dampness on northern slopes. We specify GAF Timberline® UHDZ shingles featuring StainGuard Plus™ technology to prevent dark algae streaking while delivering deep shadow lines.',
    substrateNotes: 'Historic homes frequently retain original 1x8 tongue-and-groove pine or spaced board decking with wide expansion seams. We secure a continuous structural layer of 5/8-inch CDX plywood across all rafter bays to ensure maximum fastener pullout resistance.',
  },
  'warren': {
    landmarks: ['Mountain Boulevard', 'Mount Horeb Road', 'the Warren Township Pavilion', 'the Washington Valley Park border'],
    housingStock: 'Custom Luxury Mansions, Sprawling Center-Hall Colonials, and Contemporary Ranches',
    localStresses: 'Watchung Mountain ridge wind shear, expansive multi-plane roof areas, aging builder-grade skylights, and winter freeze-thaw damming.',
    valleyNotes: 'Broad multi-gable roof configurations funnel large rainwater volumes into long central valleys. To prevent hydraulic backup during summer storms, we line every valley with commercial-grade GAF StormGuard® high-temperature membrane beneath heavy-gauge metal flashing.',
    algaeNotes: 'Wooded residential buffers generate airborne fungal spores that anchor on damp asphalt surfaces. GAF Timberline® UHDZ shingles provide deep shadow definition and 30-year StainGuard Plus™ copper-bead algae defense.',
    substrateNotes: 'Large-footprint homes often exhibit localized decking rot near valley transitions and builder-grade skylight curbs. We audit the entire substrate during tear-off, replacing compromised sheathing with 5/8-inch CDX plywood.',
  },
  'watchung': {
    landmarks: ['Somerset Street', 'Watchung Lake', 'Stirling Road', 'the Watchung Reservation Overlook'],
    housingStock: 'Watchung Ridge Contemporary Estates, Mid-Century Ranches, and Custom Multi-Tier Mansions',
    localStresses: 'Direct Watchung Mountain ridge-top wind gusts, lake basin atmospheric humidity, steep hillside valley drainage, and severe winter ice damming.',
    valleyNotes: 'Steep ridge rooflines channel rapid runoff toward lower gutters and addition corners. We install open heavy-gauge metal valleys bedded in high-temperature GAF StormGuard® membranes to prevent winter ice damming and manage intense rainwater volume.',
    algaeNotes: 'Elevated moisture from Watchung Lake and reservation trees accelerates shingle discoloration. GAF Timberline® HDZ shingles featuring time-release StainGuard Plus™ copper technology protect against dark streaks while locking down against 130-MPH wind shear.',
    substrateNotes: 'We perform structural load assessments across all framing during tear-off, replacing moisture-softened plywood with 5/8-inch CDX decking to ensure firm nail retention against high wind uplift.',
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
