/**
 * Roofing-focused town landing pages (local SEO) — Monmouth & Somerset County markets.
 * Content sourced from the 'Lita Roofing Continued' authority-page series.
 * Rendered by RoofingTownPage.tsx at /service-areas/<slug>.
 */

export type RoofingSection = {
  heading: string
  lead: string
  bullets: { title: string; body: string }[]
}

export type RoofingTown = {
  slug: string
  name: string
  zips: string[]
  /** Hero tagline, e.g. 'GAF Master Elite® Engineering near the Navesink River & Victory Park.' */
  subtitle: string
  intro: string
  replacement: RoofingSection
  repair: RoofingSection
  brands: { label: string; detail: string }[]
}

export const roofingTowns: RoofingTown[] = [
  {
    slug: "rumson",
    name: "Rumson",
    zips: ["07760"],
    subtitle: "GAF Master Elite® Engineering near the Navesink River & Victory Park.",
    intro: "For luxury estates along Rumson Road , Ward Avenue , and Bellevue Avenue , a roof is a high-stakes engineering component of the building envelope. Rumson’s geography—positioned between the Navesink River and the Atlantic—creates a high-corrosion, high-wind environment that demands elite-tier material science. Lita Construction provides factory-certified roof replacements and forensic leak repairs designed to withstand the unique hydrostatic pressures of the Jersey Shore.",
    replacement: {
      heading: "Professional Roof Replacement & System Engineering",
      lead: "We prioritize full-system replacements that qualify for the GAF Golden Pledge® 50-Year Non-Prorated Warranty . For homes near the Oceanic Bridge , we engineer WindProven™ systems utilizing GAF Timberline® HDZ or Grand Sequoia® ArmorShield™ shingles, which carry no maximum wind speed limitation.",
      bullets: [
        { title: "Substrate Load Audit", body: "We perform a 100% surgical tear-off to inspect the roofing deck (plywood) . We verify the fastening pattern to ensure compliance with New Jersey Residential Building Codes for high-wind coastal zones." },
        { title: "Secondary Water Barriers", body: "We install GAF Tiger Paw™ or Deck-Armor™ synthetic underlayment paired with StormGuard® Leak Barriers at all eaves and valleys to prevent moisture backup during Nor'easters." },
        { title: "Thermodynamic Ventilation", body: "We calculate the Net Free Ventilating Area (NFVA) to ensure balanced airflow via Cobra® Ridge Vents , preventing the attic heat-gain that \"cooks\" shingles and voids standard warranties." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylights, & Precision Repair",
      lead: "Rumson’s historic and custom architecture often suffers from \"unfixable\" leaks at complex transition points.",
      bullets: [
        { title: "Chimney Flashing Specialists", body: "Leveraging our 22-year masonry heritage, we solve chimney leaks near Victory Park that other roofers can’t. We replace failed sealants with custom-bent Lead or Copper flashing , ground directly into the mortar joints to stop capillary action ." },
        { title: "Velux® Skylight Restoration", body: "If your skylight is fogging or leaking along Ridge Road , we provide surgical Velux® replacements with integrated \"No Leak\" flashing kits, ensuring a 100% watertight seal." },
        { title: "Forensic Diagnostics", body: "We track water migration behind the siding and shingles to identify the root cause of intrusion, whether it’s failed step-flashing , dry-rotted fascia boards , or compromised drip edges ." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite®), CertainTeed (Landmark/Grand Manor), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "Moisture Management", detail: "GAF StormGuard®, Tiger Paw™, and Deck-Armor™." },
    ],
  },
  {
    slug: "colts-neck",
    name: "Colts Neck",
    zips: ["07722"],
    subtitle: "High-Performance Roofing Systems near Delicious Orchards & Route 34.",
    intro: "Managing a sprawling estate off Crine Road or a complex architectural roofline near Montrose Road requires a contractor who understands the structural loads of large-scale residential engineering. Lita Construction serves the Colts Neck 07722 community with GAF Master Elite® precision. Whether you need a total roof replacement near Phalanx Road or have a persistent chimney leak near Dorbrook Recreation Area , we deliver the technical authority and financial security of North America’s top-tier manufacturer warranties.",
    replacement: {
      heading: "Estate-Scale Roof Replacement & Warranty Security",
      lead: "For the massive roof footprints found near Delicious Orchards , we specialize in GAF Lifetime Roofing Systems .",
      bullets: [
        { title: "The Master Elite Advantage", body: "As a factory-certified contractor, Lita Construction offers the GAF Golden Pledge® Warranty , which includes a 25-year workmanship guarantee backed directly by the manufacturer." },
        { title: "Premium Material Selection", body: "We install high-definition GAF Timberline® HDZ shingles and designer CertainTeed® Grand Manor or Carriage House systems for unmatched curb appeal and structural defense." },
        { title: "Reinforced Substrate", body: "We perform a complete audit of your roofing substrate , replacing any delaminated plywood to ensure a rock-solid, level foundation for your new WindProven™ shingle system." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Leaks, & Forensic Repair",
      lead: "Colts Neck homes often feature oversized masonry chimneys and multiple dormer intersections—the primary failure points for water intrusion.",
      bullets: [
        { title: "Master Masonry Chimney Repair", body: "We eliminate chimney leaks by hand-bending Lead or Copper counter-flashing and performing deep-grind masonry \"tucking.\" This creates a permanent mechanical bond that prevents water from bypassing the envelope during heavy storms along Route 34 ." },
        { title: "Velux® Skylight Solutions", body: "We provide full diagnostics for leaking or drafty skylights, utilizing Velux® solar-powered or manual systems with factory-integrated flashing to ensure long-term moisture mitigation." },
        { title: "Structural Leak Diagnostics", body: "We utilize forensic techniques to identify leaks at valley transitions , plumbing stacks , and wall-to-roof intersections , replacing failed rubber boots with high-durability lead-core pipe boots ." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite® Status), CertainTeed, Owens Corning." },
      { label: "Skylights", detail: "Velux® \"No Leak\" Skylights." },
      { label: "System Components", detail: "GAF Cobra® Ridge Vents, GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield." },
    ],
  },
  {
    slug: "holmdel",
    name: "Holmdel",
    zips: ["07733"],
    subtitle: "GAF Master Elite® Roofing Systems near Bell Works & Holmdel Park.",
    intro: "For the sophisticated estates and modern architectural designs found along Holmdel Road , Crawfords Corner Road , and near the iconic Bell Works campus, a roof is a critical structural investment. The rolling topography of Holmdel 07733 creates unique wind-tunnel effects that can compromise inferior roofing systems. Lita Construction provides factory-certified roof replacements and forensic leak repairs that prioritize the long-term integrity of your home’s building envelope.",
    replacement: {
      heading: "Engineered Roof Replacement & High-Wind Defense",
      lead: "We specialize in full-system replacements that withstand the high-velocity gusts common near the PNC Bank Arts Center . As a GAF Master Elite® contractor, we offer the GAF Golden Pledge® 50-Year Warranty , providing Holmdel homeowners with the highest level of manufacturer-backed security.",
      bullets: [
        { title: "Surgical Tear-Off & Substrate Audit", body: "We strip your existing roof to the bare wood to perform a 100% audit of the plywood decking . We ensure the substrate is level and securely fastened to meet the latest New Jersey Residential Building Codes ." },
        { title: "Premium Shingle Technology", body: "We install high-definition GAF Timberline® HDZ with LayerLock® technology and designer CertainTeed® Landmark TL shingles for homeowners seeking a \"heavyweight\" aesthetic with maximum impact resistance." },
        { title: "Thermal Envelope Balancing", body: "We utilize GAF Cobra® Ridge Vents and intake soffit systems to create a balanced attic climate, preventing the shingle \"baking\" that leads to premature failure and high cooling costs along Schanck Road ." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Leaks, & Forensic Repair",
      lead: "Holmdel’s custom homes often feature complex roof-to-wall transitions and multiple skylights—the primary failure points for water intrusion.",
      bullets: [
        { title: "Master Masonry Chimney Flashing", body: "Leveraging our 22-year masonry heritage, we solve the \"unfixable\" chimney leaks that standard roofers ignore. We replace failed step-flashing with custom-bent Lead or Copper counter-flashing , ground directly into the mortar joints for a permanent mechanical seal." },
        { title: "Velux® Skylight Solutions", body: "If your skylights are leaking or showing signs of condensation near Middletown Road , we provide surgical Velux® replacements featuring factory-integrated \"No Leak\" flashing kits." },
        { title: "Structural Leak Diagnostics", body: "We utilize forensic moisture mapping to identify leaks at valley transitions , dormer cheeks , and wall-flashing , replacing failed components with high-performance GAF StormGuard® and WeatherWatch® leak barriers." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite®), CertainTeed (Presidential/Landmark), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "Moisture Management", detail: "GAF Tiger Paw™ Synthetic Underlayment and GAF Deck-Armor™." },
    ],
  },
  {
    slug: "marlboro",
    name: "Marlboro",
    zips: ["07746"],
    subtitle: "High-Performance Roofing Systems near Marlboro Village & Texas Road.",
    intro: "The luxury residential developments along Route 520 , Tennent Road , and Wyncrest Road are reaching a critical age where original \"builder-grade\" roofs are failing. Lita Construction serves the Marlboro 07746 community with elite-tier roof replacements and technical leak repairs. Whether your home is near Marlboro High School or the Marlboro Village area, we deliver the structural precision of a GAF Master Elite® contractor.",
    replacement: {
      heading: "Luxury Roof Replacement & Warranty Assurance",
      lead: "In Marlboro, a roof replacement is about protecting your home’s resale value and structural core. We specialize in GAF Lifetime Roofing Systems that provide a \"WindProven™\" defense.",
      bullets: [
        { title: "The Golden Pledge® Advantage", body: "Our Master Elite status allows us to provide a 25-year workmanship warranty backed by GAF, ensuring your investment is protected even if the original shingles were installed on a complex, multi-gabled roofline." },
        { title: "Designer Material Science", body: "We install GAF Slateline® and CertainTeed® Grand Manor shingles, offering the authentic look of slate or wood shake with the high-performance durability of modern asphalt technology." },
        { title: "Advanced Ice & Water Protection", body: "Given the heavy snow-load potential in Marlboro, we install double-layer GAF StormGuard® leak barriers at all critical eaves, valleys, and transition points to prevent ice-damming intrusion." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Restoration",
      lead: "Persistent leaks near your chimney or skylights are often symptoms of improper \"base-flashing\" installation.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't rely on roofing cement. We perform deep-grind masonry \"tucking\" to integrate Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near Newman Springs Road ." },
        { title: "Velux® Skylight Engineering", body: "For homes with aging or drafty skylights near Texas Road , we offer the latest Velux® solar-powered or manual venting skylights, installed with integrated flashing systems to ensure a lifetime of moisture-free performance." },
        { title: "Forensic Repair Protocols", body: "Our repair teams identify the \"hidden\" failures in your roofing system—such as compromised drip edges , rotted fascia , or failed plumbing vent boots —and replace them with high-durability components that exceed standard building codes." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite®), CertainTeed, Owens Corning (Duration® Series)." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Integrity", detail: "GAF Cobra® Attic Ventilation, GAF Tiger Paw™ Underlayment, GAF WeatherWatch®." },
    ],
  },
  {
    slug: "manalapan",
    name: "Manalapan",
    zips: ["07726"],
    subtitle: "GAF Master Elite® Roofing Systems near Battleground Country Club & Route 9.",
    intro: "For the high-density luxury developments and sprawling estates found along Gordons Corner Road , Union Hill Road , and near the Battleground Country Club , a roof is more than a covering—it is a sophisticated moisture-management system. The residential architecture in Manalapan 07726 is currently hitting the 20-to-25-year window where original builder-grade shingles begin to delaminate and fail. Lita Construction provides factory-certified roof replacements and forensic leak repairs engineered to protect your home’s structural integrity and resale value.",
    replacement: {
      heading: "High-Performance Roof Replacement & Structural Integrity",
      lead: "We specialize in full-system, surgical tear-offs that qualify for the GAF Golden Pledge® 50-Year Warranty . For homes near the Manalapan Recreation Center and Symmes Drive , we engineer roofing systems designed to withstand the volatile thermal expansion cycles of Central Jersey.",
      bullets: [
        { title: "The Master Elite Audit", body: "We perform a 100% inspection of the roofing substrate (plywood) . We verify that the decking is free of \"soft spots\" and dry rot, ensuring a rock-solid foundation for your new GAF Timberline® HDZ or CertainTeed® Landmark shingles." },
        { title: "WindProven™ Technology", body: "Utilizing GAF’s LayerLock® technology, we install shingles that carry the industry’s first \"infinite\" wind speed limitation—a critical upgrade for the open landscapes along Tennent Road ." },
        { title: "Advanced Ice & Water Mitigation", body: "We install double-layer GAF StormGuard® or WeatherWatch® barriers at all eaves, valleys, and rakes to prevent ice-damming intrusion during severe Monmouth County winters." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Restoration, & Forensic Leak Repair",
      lead: "Many Manalapan homes feature oversized masonry chimneys and architectural skylights—the two most frequent points of catastrophic water intrusion.",
      bullets: [
        { title: "Master Masonry Chimney Flashing", body: "Most roofers rely on temporary caulking that cracks within two seasons. Leveraging our 22-year masonry heritage, we perform deep-grind Lead or Copper counter-flashing installations near Taylors Mills Road . We seat the metal directly into the mortar for a permanent, mechanical, watertight bond." },
        { title: "Velux® Skylight Engineering", body: "If your skylights are drafty or leaking near Franklin Lane , we provide surgical Velux® replacements with factory-integrated \"No Leak\" flashing systems, guaranteed to stay dry for the life of the roof." },
        { title: "Forensic Leak Diagnostics", body: "Our repair teams specialize in identifying \"phantom leaks\" at dormer cheeks , wall-to-roof transitions , and plumbing vent stacks , replacing failed components with high-durability lead-core boots and reinforced flashing." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite® Status), CertainTeed (Grand Manor/Landmark), Owens Corning (Duration®)." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "Ventilation", detail: "GAF Cobra® Ridge Vents & High-Performance Intake Systems." },
    ],
  },
  {
    slug: "howell",
    name: "Howell",
    zips: ["07731"],
    subtitle: "High-Performance Roofing Systems near the Manasquan Reservoir & Route 33.",
    intro: "With some of the largest residential roof footprints in Monmouth County, homes along West Farms Road , Aldrich Road , and near the Manasquan Reservoir require a contractor capable of managing large-scale structural logistics. Lita Construction serves the Howell 07731 community with GAF Master Elite® precision. Whether your home is near Oak Glen Park or the Howell Park Golf Course , we deliver the technical authority and heavy-duty material science required for the Northeast’s climate.",
    replacement: {
      heading: "Industrial-Grade Residential Roof Replacement",
      lead: "Howell’s sprawling ranch and colonial rooflines are susceptible to massive snow-load pressure and high wind shear. We prioritize GAF Lifetime Roofing Systems that provide uncompromised protection.",
      bullets: [
        { title: "GAF Golden Pledge® Assurance", body: "As a Master Elite contractor, Lita Construction provides a 25-year workmanship warranty backed by North America’s largest manufacturer, covering your entire roof system from the deck to the ridge cap." },
        { title: "Premium Material Selection", body: "We install high-definition GAF Timberline® HDZ and designer CertainTeed® NorthGate® shingles, offering superior impact resistance and \"Class A\" fire ratings for homes near Ramtown and Fort Plains Road ." },
        { title: "Substrate & Decking Reinforcement", body: "We perform a forensic audit of the roofing deck , replacing any compromised plywood to ensure your new shingles are anchored to a sound structural foundation that meets or exceeds the NJ Residential Building Code ." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Solutions",
      lead: "Persistent leaks at your chimney or skylights are often a sign of failed \"base-flashing\" or aging gaskets.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't use \"roofing tar\" as a permanent fix. We perform deep-grind masonry \"tucking\" to integrate heavy-gauge Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near Route 9 ." },
        { title: "Velux® Skylight Restoration", body: "For homes with aging skylights near Friendship Road , we offer the latest Velux® solar-powered or manual venting systems, installed with integrated flashing kits to ensure a lifetime of leak-free performance." },
        { title: "High-Volume Water Diversion", body: "We specialize in the construction of crickets and high-capacity kick-out flashing at wall-to-roof intersections, ensuring that high-volume runoff is safely diverted into your gutter system without bypassing the building envelope." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite®), CertainTeed (Landmark TL), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Components", detail: "GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield, GAF Cobra® Attic Ventilation." },
    ],
  },
  {
    slug: "middletown",
    name: "Middletown",
    zips: ["07748", "07701"],
    subtitle: "GAF Master Elite® Roofing near the Navesink River & Deep Cut Gardens.",
    intro: "From the coastal estates near Navesink River Road and Locust to the high-density residential corridors along Nut Swamp Road , Kings Highway , and Route 35 , Middletown’s diverse architecture requires a contractor with versatile structural expertise. Homes in Middletown 07748 are subject to heavy salt-air exposure and high-velocity wind shear. Lita Construction provides factory-certified roof replacements and forensic leak repairs designed to withstand the volatile coastal climate of Northern Monmouth County.",
    replacement: {
      heading: "High-Performance Roof Replacement & System Engineering",
      lead: "We specialize in \"Building Envelope\" replacements that qualify for the GAF Golden Pledge® 50-Year Warranty . For properties near Middletown High School North or Poracy Park , we engineer roofing systems that prioritize thermal efficiency and structural defense.",
      bullets: [
        { title: "Surgical Substrate Audit", body: "We don't \"roof over\" old problems. We perform a complete tear-off to inspect the plywood decking , replacing delaminated sheets and ensuring the substrate meets New Jersey Residential Building Codes for wind-lift resistance." },
        { title: "WindProven™ Technology", body: "As a GAF Master Elite® contractor, we install GAF Timberline® HDZ shingles featuring the LayerLock® strike zone, creating the industry's most secure mechanical bond against Nor’easters." },
        { title: "Advanced Moisture Management", body: "We install GAF StormGuard® leak barriers and Tiger Paw™ synthetic underlayment to create a secondary waterproof shield beneath your shingles, preventing water backup from ice dams and driving rain." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Restoration, & Forensic Repair",
      lead: "Middletown’s established neighborhoods often face recurring leaks at complex transition points, such as chimneys and aging skylights.",
      bullets: [
        { title: "Master Masonry Chimney Flashing", body: "Leveraging our 22-year masonry heritage, we solve chimney leaks near Chapel Hill that other contractors patch with temporary caulk. We perform deep-grind Lead or Copper counter-flashing installations, seating the metal directly into the mortar joints for a permanent seal." },
        { title: "Velux® Skylight Engineering", body: "If your skylights are leaking or foggy near Red Hill Road , we provide surgical Velux® replacements with factory-integrated \"No Leak\" flashing kits, ensuring a 100% watertight seal for the life of your roof." },
        { title: "Forensic Leak Diagnostics", body: "Our repair teams identify the \"invisible\" failures in your roofing system—such as compromised drip edges , rotted fascia , or failed plumbing vent boots —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite®), CertainTeed (Grand Manor/Landmark), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "System Integrity", detail: "GAF Cobra® Ridge Vents, GAF WeatherWatch®, GAF Deck-Armor™." },
    ],
  },
  {
    slug: "freehold-township",
    name: "Freehold Township",
    zips: ["07728"],
    subtitle: "High-Performance Roofing Systems near the Freehold Raceway Mall & Route 9.",
    intro: "The large-scale residential developments and professional estates found along Kozloski Road , Elton-Adelphia Road , and near the Monmouth Battlefield State Park require a roofing partner who understands structural logistics and long-term warranty security. Freehold Township 07728 is a high-volume market where original builder-grade shingles are hitting their 20-year failure window. Lita Construction provides GAF Master Elite® roof replacements and forensic repairs engineered for the specific thermal demands of Central Jersey.",
    replacement: {
      heading: "Structural Roof Replacement & Warranty Assurance",
      lead: "In Freehold Township, a roof replacement is about protecting a significant real estate asset. We specialize in GAF Lifetime Roofing Systems that provide a \"WindProven™\" defense.",
      bullets: [
        { title: "The Golden Pledge® Advantage", body: "Our Master Elite status allows us to provide a 25-year workmanship warranty backed by North America's largest manufacturer, providing peace of mind for homes near iPlay America and Wemrock Road ." },
        { title: "Designer Material Science", body: "We install high-definition GAF Timberline® HDZ and CertainTeed® Landmark TL shingles, offering superior impact resistance and aesthetics for the diverse architecture found in West Freehold ." },
        { title: "Thermodynamic Ventilation", body: "We calculate and install balanced attic ventilation systems using GAF Cobra® Ridge Vents , preventing the moisture buildup and heat-soak that causes premature shingle degradation and high energy costs." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Solutions",
      lead: "Persistent leaks at your chimney or skylights are often a sign of failed \"base-flashing\" or compromised structural masonry.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't rely on roofing tar. We perform deep-grind masonry \"tucking\" to integrate heavy-gauge Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near Route 33 ." },
        { title: "Velux® Skylight Restoration", body: "For homes with aging or drafty skylights near Halls Mill Road , we offer the latest Velux® solar-powered or manual venting systems, installed with integrated flashing kits to ensure a lifetime of leak-free performance." },
        { title: "Forensic Repair Protocols", body: "Our repair teams specialize in identifying \"phantom leaks\" at valley transitions , dormer cheeks , and wall-to-roof intersections , replacing failed rubber boots with high-durability lead-core pipe boots ." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite® Status), CertainTeed, Owens Corning (Duration® Series)." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Components", detail: "GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield, GAF WeatherWatch®." },
    ],
  },
  {
    slug: "wall-township",
    name: "Wall Township",
    zips: ["07719", "07727", "07753"],
    subtitle: "GAF Master Elite® Roofing Systems near Allaire State Park & Wall Speedway.",
    intro: "For the diverse residential landscapes along Atlantic Avenue , Belmar Boulevard , and 18th Avenue , a roofing system is the first line of defense against the Atlantic’s high-velocity wind shear. Wall Township’s proximity to the coast and the Manasquan River creates a high-moisture environment where \"builder-grade\" materials fail prematurely. Lita Construction provides factory-certified roof replacements and forensic leak repairs engineered to meet the rigid structural demands of Wall Township 07719 .",
    replacement: {
      heading: "High-Performance Roof Replacement & Coastal Defense",
      lead: "In Wall Township, we specialize in WindProven™ roofing systems that carry a 130-MPH wind warranty—essential for homes near Shark River Park and Route 34 . As a GAF Master Elite® contractor, we provide the GAF Golden Pledge® 50-Year Warranty , ensuring your investment is backed by the strongest protection in North America.",
      bullets: [
        { title: "Structural Substrate Verification", body: "We don't just \"shingle over.\" We perform a complete surgical tear-off to audit your roofing deck (plywood) . We verify the fastening schedule to ensure compliance with the New Jersey Residential Building Code for high-wind coastal zones." },
        { title: "Premium Shingle Engineering", body: "We install GAF Timberline® HDZ with LayerLock® technology and designer CertainTeed® Landmark shingles, offering superior impact resistance for properties near Allaire State Park ." },
        { title: "Advanced Moisture Mitigation", body: "We install double-layer GAF StormGuard® or WeatherWatch® leak barriers at all eaves, valleys, and transition points to prevent water backup from ice dams and driving wind-driven rain." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Restoration, & Forensic Repair",
      lead: "The heavy wind-driven rain along Route 138 often exposes failures in chimney flashing and skylight gaskets.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We solve the \"unfixable\" chimney leaks that standard roofers ignore. Leveraging our 22-year masonry heritage, we perform deep-grind Lead or Copper counter-flashing installations, seating the metal directly into the mortar joints for a permanent mechanical seal." },
        { title: "Velux® Skylight Solutions", body: "If your skylights are foggy, leaking, or drafty near Baileys Corner Road , we provide surgical Velux® replacements with integrated \"No Leak\" flashing kits, guaranteed to stay dry." },
        { title: "Forensic Leak Diagnostics", body: "Our repair teams specialize in identifying \"phantom leaks\" at valley transitions , plumbing vent stacks , and wall-to-roof intersections , replacing failed components with high-durability lead-core boots and reinforced flashing." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite®), CertainTeed (Landmark/Grand Manor), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "System Integrity", detail: "GAF Cobra® Ridge Vents, GAF Tiger Paw™ Underlayment, GAF Deck-Armor™." },
    ],
  },
  {
    slug: "little-silver",
    name: "Little Silver",
    zips: ["07739"],
    subtitle: "High-Performance Roofing Systems near the Little Silver Station & Sickles Market.",
    intro: "The upscale, historic, and custom architecture found along Prospect Avenue , Seven Bridges Road , and Little Silver Parkway requires a roofing partner who understands structural aesthetics and long-term warranty security. Little Silver 07739 is a high-intent market where homeowners demand precision engineering. Lita Construction provides GAF Master Elite® roof replacements and forensic repairs engineered for the specific humidity and thermal demands of the Shrewsbury River corridor.",
    replacement: {
      heading: "Structural Roof Replacement & Aesthetic Mastery",
      lead: "In Little Silver, a roof replacement is about protecting a high-value asset while maintaining architectural fidelity. We specialize in GAF Lifetime Roofing Systems that provide a \"WindProven™\" defense.",
      bullets: [
        { title: "The Golden Pledge® Advantage", body: "Our Master Elite status allows us to provide a 25-year workmanship warranty backed by GAF, providing peace of mind for homes near the Parker Homestead and Rumson Road ." },
        { title: "Designer Material Science", body: "We install high-definition GAF Slateline® and CertainTeed® Grand Manor shingles, offering the authentic look of slate or wood shake with the performance of modern asphalt technology." },
        { title: "Thermodynamic Ventilation", body: "We calculate and install balanced attic ventilation systems using GAF Cobra® Ridge Vents , preventing the moisture buildup and heat-soak that causes premature shingle degradation and high energy costs." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Restoration",
      lead: "Persistent leaks at your chimney or skylights are often a sign of failed \"base-flashing\" or compromised structural masonry.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't rely on roofing tar or temporary sealants. We perform deep-grind masonry \"tucking\" to integrate heavy-gauge Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near Sycamore Avenue ." },
        { title: "Velux® Skylight Restoration", body: "For homes with aging or drafty skylights near Silverside Avenue , we offer the latest Velux® solar-powered or manual venting systems, installed with integrated flashing kits to ensure a lifetime of leak-free performance." },
        { title: "Forensic Repair Protocols", body: "Our repair teams identify the root cause of intrusion—whether it’s failed step-flashing , dry-rotted fascia , or compromised drip edges —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite® Status), CertainTeed, Owens Corning (Duration® Series)." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Components", detail: "GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield, GAF WeatherWatch®." },
    ],
  },
  {
    slug: "shrewsbury",
    name: "Shrewsbury",
    zips: ["07702"],
    subtitle: "GAF Master Elite® Roofing near historic Christ Church & Sycamore Avenue.",
    intro: "For the high-end residential properties and historic structures along Sycamore Avenue , Broad Street (Route 35) , and Patterson Court , a roofing system must balance architectural preservation with modern structural engineering. Shrewsbury 07702 is home to some of the most meticulously maintained properties in Monmouth County. Lita Construction provides factory-certified roof replacements and forensic leak repairs designed to protect these high-value assets from the volatile Northeast climate.",
    replacement: {
      heading: "Professional Roof Replacement & System Engineering",
      lead: "We specialize in full-system, \"Building Envelope\" replacements that qualify for the GAF Golden Pledge® 50-Year Warranty . For homes near Shadowbrook at Shrewsbury and Samara Drive , we engineer roofing systems that prioritize thermal efficiency and structural defense.",
      bullets: [
        { title: "Surgical Substrate Audit", body: "We don't \"roof over\" existing problems. We perform a complete surgical tear-off to inspect the roofing deck (plywood) , replacing any delaminated sheets and ensuring the substrate meets New Jersey Residential Building Codes for wind-lift resistance." },
        { title: "Premium Material Science", body: "We install GAF Timberline® HDZ shingles with LayerLock® technology and designer CertainTeed® Landmark TL or Grand Manor shingles for homeowners seeking a heavyweight, slate-look aesthetic with maximum durability." },
        { title: "Thermodynamic Ventilation", body: "We calculate and install balanced attic ventilation systems using GAF Cobra® Ridge Vents , preventing the moisture buildup and heat-soak that causes premature shingle degradation and high energy costs near the river." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists, Skylight Restoration, & Forensic Repair",
      lead: "Shrewsbury’s established and historic neighborhoods often face recurring leaks at complex transition points, such as oversized masonry chimneys and aging skylights.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "Leveraging our 22-year masonry heritage, we solve the \"unfixable\" chimney leaks that standard roofers patch with temporary caulk. We perform deep-grind Lead or Copper counter-flashing installations, seating the metal directly into the mortar joints for a permanent mechanical seal." },
        { title: "Velux® Skylight Engineering", body: "If your skylights are leaking or showing signs of condensation near Manson Place , we provide surgical Velux® replacements with factory-integrated \"No Leak\" flashing kits, guaranteed to stay dry for the life of the roof." },
        { title: "Forensic Leak Diagnostics", body: "Our repair teams identify the \"hidden\" failures in your roofing system—such as compromised drip edges , rotted fascia , or failed plumbing vent boots —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite®), CertainTeed (Grand Manor/Landmark), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "Moisture Management", detail: "GAF StormGuard®, Tiger Paw™ Underlayment, GAF Deck-Armor™." },
    ],
  },
  {
    slug: "bernardsville",
    name: "Bernardsville",
    zips: ["07924"],
    subtitle: "High-Performance Roofing Systems near Bernardsville Mountain & Olcott Square.",
    intro: "Managing the massive estates and complex, high-pitched rooflines found on Bernardsville Mountain , Mine Brook Road , and near Seney Drive requires a roofing partner who understands large-scale residential engineering and high-end aesthetics. Bernardsville 07924 is a high-intent market where sprawling estates demand uncompromised structural integrity. Lita Construction provides GAF Master Elite® roof replacements and forensic repairs engineered for the specific thermal expansion and wind-load demands of the Somerset County highlands.",
    replacement: {
      heading: "Estate-Scale Roof Replacement & Warranty Security",
      lead: "For the large-scale residential builds near Claremont Road and Douglas Road , we specialize in GAF Lifetime Roofing Systems that provide a \"WindProven™\" defense.",
      bullets: [
        { title: "The Golden Pledge® Advantage", body: "Our Master Elite status allows us to provide a 25-year workmanship warranty backed by North America's largest manufacturer, providing peace of mind for homes with complex, multi-gabled rooflines." },
        { title: "Designer Material Science", body: "We install high-definition GAF Grand Sequoia® and CertainTeed® Presidential Shake shingles, offering the authentic look of wood shake or slate with the high-performance fire rating and durability of modern asphalt technology." },
        { title: "Advanced Ice & Water Protection", body: "Given the steep pitches and heavy snow potential in the Bernardsville highlands, we install double-layer GAF StormGuard® or WeatherWatch® leak barriers at all critical eaves, valleys, and transition points to prevent ice-damming intrusion." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Solutions",
      lead: "Bernardsville estates often feature multiple massive masonry chimneys and custom skylights—the primary failure points for high-volume water intrusion.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't rely on roofing tar or temporary sealants. We perform deep-grind masonry \"tucking\" to integrate heavy-gauge Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near Mine Brook ." },
        { title: "Velux® Skylight Restoration", body: "For homes with aging or drafty skylights near Mount Harmony Road , we offer the latest Velux® solar-powered or manual venting systems, installed with integrated flashing kits to ensure a lifetime of leak-free performance." },
        { title: "High-Volume Water Diversion", body: "We specialize in the construction of crickets and high-capacity kick-out flashing at wall-to-roof intersections, ensuring that high-volume runoff is safely diverted into your gutter system without bypassing the building envelope." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite® Status), CertainTeed, Owens Corning (Duration® Series)." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Components", detail: "GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield, GAF Cobra® Attic Ventilation." },
    ],
  },
  {
    slug: "basking-ridge",
    name: "Basking Ridge",
    zips: ["07920"],
    subtitle: "GAF Master Elite® Roofing near Lord Stirling Park & Lyons Road.",
    intro: "For the high-end colonials and custom contemporary homes along Valley Road , Lyons Road , and near Ridge High School , a roof is a critical structural investment that must handle the heavy ice-loading and thermal shifts of the Somerset Hills. Basking Ridge 07920 homeowners demand a level of technical precision that standard contractors simply cannot meet. Lita Construction provides factory-certified roof replacements and forensic leak repairs designed to protect the architectural integrity and long-term value of your property.",
    replacement: {
      heading: "Engineered Roof Replacement & Thermal Defense",
      lead: "We specialize in full-system \"Building Envelope\" replacements that qualify for the GAF Golden Pledge® 50-Year Warranty . For homes near Lord Stirling Park and the historic Basking Ridge Oak site, we engineer roofing systems that prioritize high-wind resistance and superior attic climate control.",
      bullets: [
        { title: "Surgical Substrate Audit", body: "We don't \"roof over\" hidden decay. We perform a complete surgical tear-off to inspect the roofing deck (plywood) , replacing any compromised sheets and ensuring the substrate meets New Jersey Residential Building Codes for structural load-bearing capacity." },
        { title: "Premium Shingle Technology", body: "We install GAF Timberline® HDZ with LayerLock® technology and designer CertainTeed® Landmark TL shingles, offering maximum impact resistance and high-definition aesthetics for the diverse architecture of Bernards Township." },
        { title: "Thermodynamic Ventilation", body: "We calculate and install balanced attic ventilation systems using GAF Cobra® Ridge Vents , preventing the moisture buildup and heat-soak that causes premature shingle degradation and high energy costs during NJ’s humid summers." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Restoration, & Forensic Repair",
      lead: "Basking Ridge’s established neighborhoods often face recurring leaks at complex transition points, such as oversized masonry chimneys and aging skylights.",
      bullets: [
        { title: "Master Masonry Chimney Flashing", body: "Leveraging our 22-year masonry heritage, we solve the \"unfixable\" chimney leaks that standard roofers patch with temporary caulk. We perform deep-grind Lead or Copper counter-flashing installations, seating the metal directly into the mortar joints for a permanent mechanical seal." },
        { title: "Velux® Skylight Engineering", body: "If your skylights are leaking or showing signs of condensation near Collyer Lane , we provide surgical Velux® replacements with factory-integrated \"No Leak\" flashing kits, guaranteed to stay dry for the life of the roof." },
        { title: "Forensic Leak Diagnostics", body: "Our repair teams identify the \"hidden\" failures in your roofing system—such as compromised drip edges , rotted fascia , or failed plumbing vent boots —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite®), CertainTeed (Grand Manor/Landmark), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "Moisture Management", detail: "GAF StormGuard®, Tiger Paw™ Underlayment, GAF Deck-Armor™." },
    ],
  },
  {
    slug: "far-hills",
    name: "Far Hills",
    zips: ["07931"],
    subtitle: "High-Performance Roofing Systems near Moorland Farm & Natirar.",
    intro: "The sprawling estates and equestrian properties found along Peapack Road , Liberty Corner Road , and near the iconic Moorland Farm (home of the Far Hills Race Meeting) require a roofing partner who understands large-scale residential engineering. Far Hills 07931 is one of the most exclusive markets in the country, where uncompromised quality and warranty security are non-negotiable. Lita Construction provides GAF Master Elite® roof replacements and forensic repairs engineered for the specific thermal expansion and structural demands of the Somerset County highlands.",
    replacement: {
      heading: "Estate-Scale Roof Replacement & Warranty Security",
      lead: "For the high-stakes residential builds near Natirar and US-202 , we specialize in GAF Lifetime Roofing Systems that provide a \"WindProven™\" defense.",
      bullets: [
        { title: "The Golden Pledge® Advantage", body: "Our Master Elite status allows us to provide a 25-year workmanship warranty backed by North America's largest manufacturer, providing peace of mind for homes with complex, multi-gabled rooflines." },
        { title: "Designer Material Science", body: "We install high-definition GAF Grand Sequoia® and CertainTeed® Presidential Shake shingles, offering the authentic look of wood shake or slate with the high-performance fire rating and durability of modern asphalt technology." },
        { title: "Advanced Ice & Water Protection", body: "Given the steep pitches and heavy snow potential in Far Hills, we install double-layer GAF StormGuard® or WeatherWatch® leak barriers at all critical eaves, valleys, and transition points to prevent ice-damming intrusion." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Solutions",
      lead: "Far Hills estates often feature multiple massive masonry chimneys and custom skylights—the primary failure points for high-volume water intrusion.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't rely on roofing tar. We perform deep-grind masonry \"tucking\" to integrate heavy-gauge Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near Douglas Road ." },
        { title: "Velux® Skylight Restoration", body: "For homes with aging or drafty skylights near Sunnybranch Road , we offer the latest Velux® solar-powered or manual venting systems, installed with integrated flashing kits to ensure a lifetime of leak-free performance." },
        { title: "", body: "Shutterstock" },
        { title: "", body: "Explore" },
        { title: "High-Volume Water Diversion", body: "We specialize in the construction of crickets and high-capacity kick-out flashing at wall-to-roof intersections, ensuring that high-volume runoff is safely diverted into your gutter system without bypassing the building envelope." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite® Status), CertainTeed, Owens Corning (Duration® Series)." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Components", detail: "GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield, GAF Cobra® Attic Ventilation." },
    ],
  },
  {
    slug: "warren",
    name: "Warren",
    zips: ["07059"],
    subtitle: "GAF Master Elite® Roofing Systems near Wagner Farm Park & Mount Horeb Road.",
    intro: "For the luxury estates and sprawling custom homes along Mount Horeb Road , Stirling Road , and Reinman Road , a roofing system is the primary defense against the high-wind shear and heavy ice-loading of the Somerset Hills. Warren 07059 is a market characterized by complex architectural rooflines that require a contractor with advanced structural engineering capabilities. Lita Construction provides factory-certified roof replacements and forensic leak repairs designed to protect these significant real estate assets.",
    replacement: {
      heading: "High-Performance Roof Replacement & Structural Integrity",
      lead: "We specialize in full-system \"Building Envelope\" replacements that qualify for the GAF Golden Pledge® 50-Year Warranty . For properties near the Warren Township Municipal Building or Washington Valley Road , we engineer roofing systems that prioritize long-term durability and thermal efficiency.",
      bullets: [
        { title: "Surgical Substrate Audit", body: "We don't \"roof over\" hidden decay. We perform a complete surgical tear-off to inspect the roofing deck (plywood) , replacing any compromised sheets and ensuring the substrate meets New Jersey Residential Building Codes for high-load structural capacity." },
        { title: "Premium Material Science", body: "We install GAF Timberline® HDZ with LayerLock® technology and designer CertainTeed® Landmark TL shingles, offering maximum impact resistance and high-definition aesthetics for Warren's premier neighborhoods." },
        { title: "Thermodynamic Ventilation", body: "We calculate and install balanced attic ventilation systems using GAF Cobra® Ridge Vents , preventing the moisture buildup and heat-soak that causes premature shingle degradation and high energy costs during the humid summer months." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Restoration, & Forensic Repair",
      lead: "Warren’s custom homes often feature multiple oversized masonry chimneys and architectural skylights—the two most frequent points of catastrophic water intrusion.",
      bullets: [
        { title: "Master Masonry Chimney Flashing", body: "Leveraging our 22-year masonry heritage, we solve the \"unfixable\" chimney leaks that standard roofers patch with temporary caulk. We perform deep-grind Lead or Copper counter-flashing installations near Liberty Corner Road , seating the metal directly into the mortar joints for a permanent mechanical seal." },
        { title: "Velux® Skylight Engineering", body: "If your skylights are leaking or showing signs of condensation near Mountain Avenue , we provide surgical Velux® replacements with factory-integrated \"No Leak\" flashing kits, guaranteed to stay dry for the life of the roof." },
        { title: "Forensic Leak Diagnostics", body: "Our repair teams identify the root cause of intrusion—whether it’s failed step-flashing , dry-rotted fascia , or failed plumbing vent boots —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite® Status), CertainTeed (Landmark/Grand Manor), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "Moisture Management", detail: "GAF StormGuard®, Tiger Paw™ Underlayment, GAF Deck-Armor™." },
    ],
  },
  {
    slug: "watchung",
    name: "Watchung",
    zips: ["07069"],
    subtitle: "High-Performance Roofing Systems near Watchung Lake & Hillcrest Road.",
    intro: "The historic and high-end residential properties found along Valley Road , Hillcrest Road , and Mountain Boulevard require a roofing partner who understands structural aesthetics and long-term warranty security. Watchung 07069 is a market where homes often face steep slopes and heavy environmental exposure. Lita Construction provides GAF Master Elite® roof replacements and forensic repairs engineered for the specific thermal expansion and wind-load demands of the Watchung Mountains.",
    replacement: {
      heading: "Structural Roof Replacement & Warranty Security",
      lead: "In Watchung, a roof replacement is about protecting a high-value asset while maintaining architectural fidelity. We specialize in GAF Lifetime Roofing Systems that provide a \"WindProven™\" defense.",
      bullets: [
        { title: "The Golden Pledge® Advantage", body: "Our Master Elite status allows us to provide a 25-year workmanship warranty backed by North America's largest manufacturer, providing peace of mind for homes near Best Lake and Watchung Circle ." },
        { title: "Designer Material Science", body: "We install high-definition GAF Slateline® and CertainTeed® Grand Manor shingles, offering the authentic look of slate or wood shake with the performance of modern asphalt technology." },
        { title: "Advanced Ice & Water Protection", body: "Given the steep pitches and heavy snow potential in Watchung, we install double-layer GAF StormGuard® or WeatherWatch® leak barriers at all critical eaves, valleys, and transition points to prevent ice-damming intrusion." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Restoration",
      lead: "Persistent leaks at your chimney or skylights are often a sign of failed \"base-flashing\" or compromised structural masonry.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't rely on roofing tar or temporary sealants. We perform deep-grind masonry \"tucking\" to integrate heavy-gauge Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near Johnston Drive ." },
        { title: "Velux® Skylight Restoration", body: "For homes with aging or drafty skylights near Stirling Road , we offer the latest Velux® solar-powered or manual venting systems, installed with integrated flashing kits to ensure a lifetime of leak-free performance." },
        { title: "High-Volume Water Diversion", body: "We specialize in the construction of crickets and high-capacity kick-out flashing at wall-to-roof intersections, ensuring that high-volume runoff is safely diverted into your gutter system without bypassing the building envelope." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite® Status), CertainTeed, Owens Corning (Duration® Series)." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Components", detail: "GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield, GAF Cobra® Attic Ventilation." },
    ],
  },
  {
    slug: "hillsborough",
    name: "Hillsborough",
    zips: ["08844"],
    subtitle: "GAF Master Elite® Roofing near Duke Farms & Sourland Mountain.",
    intro: "For the extensive residential developments and custom estates along Amwell Road , Falcon Road , and Willow Road , a high-performance roofing system is essential to manage the heavy snow loads and runoff from the Sourland Mountain region. Hillsborough 08844 is currently in a primary \"replacement window,\" as the large-scale suburban builds from the late 1990s and early 2000s reach the end of their original service life. Lita Construction provides factory-certified roof replacements and forensic leak repairs designed to upgrade your home’s structural defense.",
    replacement: {
      heading: "High-Volume Roof Replacement & System Upgrades",
      lead: "We specialize in full-system, surgical tear-offs that qualify for the GAF Golden Pledge® 50-Year Warranty . For homes near Duke Farms or the Hillsborough Promenade , we engineer roofing systems that prioritize high-wind resistance and superior thermal management.",
      bullets: [
        { title: "Surgical Substrate Audit", body: "We don't \"roof over\" existing failures. We perform a complete tear-off to inspect the roofing deck (plywood) , replacing any delaminated sheets and ensuring the substrate meets New Jersey Residential Building Codes for structural integrity." },
        { title: "Premium Shingle Technology", body: "We install GAF Timberline® HDZ shingles with LayerLock® technology and CertainTeed® Landmark shingles, offering maximum durability for the diverse weather patterns along Route 206 ." },
        { title: "Thermodynamic Ventilation", body: "We calculate and install balanced attic ventilation systems using GAF Cobra® Ridge Vents , preventing the moisture buildup and heat-soak that leads to premature shingle degradation and high energy costs." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Restoration, & Forensic Repair",
      lead: "Hillsborough’s custom architecture often faces recurring leaks at complex transition points, such as oversized masonry chimneys and aging skylights.",
      bullets: [
        { title: "Master Masonry Chimney Flashing", body: "Leveraging our 22-year masonry heritage, we solve the \"unfixable\" chimney leaks that standard roofers patch with temporary caulk. We perform deep-grind Lead or Copper counter-flashing installations, seating the metal directly into the mortar joints for a permanent mechanical seal near Triangle Road ." },
        { title: "Velux® Skylight Engineering", body: "If your skylights are leaking or showing signs of condensation near Auten Road , we provide surgical Velux® replacements with factory-integrated \"No Leak\" flashing kits, guaranteed to stay dry for the life of the roof." },
        { title: "Forensic Leak Diagnostics", body: "Our repair teams identify the \"hidden\" failures in your roofing system—such as compromised drip edges , rotted fascia , or failed plumbing vent boots —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite®), CertainTeed (Landmark), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "Moisture Management", detail: "GAF StormGuard®, Tiger Paw™ Underlayment, GAF WeatherWatch®." },
    ],
  },
  {
    slug: "bridgewater",
    name: "Bridgewater",
    zips: ["08807"],
    subtitle: "High-Performance Roofing Systems near Bridgewater Commons & Washington Valley Park.",
    intro: "The established residential neighborhoods and professional estates found along Chimney Rock Road , Steele Gap Road , and Vosseller Avenue require a roofing partner who understands structural restoration and long-term warranty security. Bridgewater 08807 is a market where aging housing stock often requires a deeper focus on substrate integrity. Lita Construction provides GAF Master Elite® roof replacements and forensic repairs engineered for the specific thermal expansion and wind-load demands of the Somerset Hills .",
    replacement: {
      heading: "Structural Roof Replacement & Substrate Restoration",
      lead: "In Bridgewater, a roof replacement is about protecting a significant asset while correcting years of underlying structural wear. We specialize in GAF Lifetime Roofing Systems that provide a \"WindProven™\" defense.",
      bullets: [
        { title: "The Golden Pledge® Advantage", body: "Our Master Elite status allows us to provide a 25-year workmanship warranty backed by North America's largest manufacturer, providing peace of mind for homes near TD Bank Ballpark and Washington Valley Road ." },
        { title: "Designer Material Science", body: "We install high-definition GAF Timberline® HDZ and CertainTeed® Landmark TL shingles, offering superior impact resistance and aesthetics for the diverse architecture found near Bradley Gardens ." },
        { title: "Advanced Ice & Water Protection", body: "Given the heavy snow potential in the higher elevations of Bridgewater, we install double-layer GAF StormGuard® or WeatherWatch® leak barriers at all critical eaves, valleys, and transition points." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Restoration",
      lead: "Persistent leaks at your chimney or skylights are often a sign of failed \"base-flashing\" or compromised structural masonry.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't rely on roofing tar or temporary sealants. We perform deep-grind masonry \"tucking\" to integrate heavy-gauge Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near Mount Top Road ." },
        { title: "Velux® Skylight Restoration", body: "For homes with aging or drafty skylights near Garretson Road , we offer the latest Velux® solar-powered or manual venting systems, installed with integrated flashing kits to ensure a lifetime of leak-free performance." },
        { title: "Forensic Repair Protocols", body: "Our repair teams identify the root cause of intrusion—whether it’s failed step-flashing , dry-rotted fascia , or compromised drip edges —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite® Status), CertainTeed, Owens Corning (Duration® Series)." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Components", detail: "GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield, GAF Cobra® Attic Ventilation." },
    ],
  },
  {
    slug: "branchburg",
    name: "Branchburg",
    zips: ["08876", "08853"],
    subtitle: "GAF Master Elite® Roofing near White Oak Park & Neshanic Station.",
    intro: "For the custom homes and sprawling residential developments along Burnt Mills Road , Station Road , and Stony Brook Road , a roofing system must be engineered to handle the heavy environmental loads of the Raritan Valley. Branchburg 08876 is a high-intent market where homeowners prioritize structural longevity and technical certification. Lita Construction provides factory-certified roof replacements and forensic leak repairs designed to protect your home’s building envelope from the volatile thermal shifts of Somerset County.",
    replacement: {
      heading: "Structural Roof Replacement & Warranty Security",
      lead: "We specialize in full-system, \"Building Envelope\" replacements that qualify for the GAF Golden Pledge® 50-Year Warranty . For properties near Branchburg Central Middle School or North Branch Park , we engineer roofing systems that prioritize high-wind resistance and thermal efficiency.",
      bullets: [
        { title: "Surgical Substrate Audit", body: "We don't \"roof over\" existing rot. We perform a complete surgical tear-off to inspect the roofing deck (plywood) , ensuring every sheet is securely fastened and level to meet New Jersey Residential Building Codes ." },
        { title: "Premium Shingle Technology", body: "We install GAF Timberline® HDZ with LayerLock® technology and designer CertainTeed® Landmark TL shingles, providing a heavyweight, high-definition aesthetic with maximum impact resistance." },
        { title: "Advanced Ice & Water Mitigation", body: "We install double-layer GAF StormGuard® or WeatherWatch® leak barriers at all critical eaves, valleys, and transition points to prevent water backup from ice dams common in the Branchburg interior." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Restoration, & Forensic Repair",
      lead: "Branchburg’s diverse architecture—from historic homes in Neshanic Station to modern builds off Route 202 —often faces recurring leaks at chimneys and aging skylights.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "Leveraging our 22-year masonry heritage, we solve the \"unfixable\" chimney leaks that standard roofers patch with temporary caulk. We perform deep-grind Lead or Copper counter-flashing installations, seating the metal directly into the mortar joints for a permanent mechanical seal." },
        { title: "Velux® Skylight Engineering", body: "If your skylights are foggy or leaking near Old York Road , we provide surgical Velux® replacements with factory-integrated \"No Leak\" flashing kits, guaranteed to stay dry for the life of the roof." },
        { title: "Forensic Leak Diagnostics", body: "Our repair teams identify the root cause of intrusion—whether it’s failed step-flashing , dry-rotted fascia , or failed plumbing vent boots —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite®), CertainTeed (Landmark/Grand Manor), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "System Integrity", detail: "GAF Cobra® Ridge Vents, GAF Tiger Paw™ Underlayment, GAF Deck-Armor™." },
    ],
  },
  {
    slug: "franklin-township",
    name: "Franklin Township",
    zips: ["08873"],
    subtitle: "High-Performance Roofing Systems near Colonial Park & the D&R Canal.",
    intro: "The high-density residential developments and professional estates along Easton Avenue , Amwell Road , and Hamilton Street require a roofing partner who understands structural logistics and long-term warranty security. Franklin Township 08873 (Somerset) is a market where original builder-grade shingles from the late 90s are reaching critical failure points. Lita Construction provides GAF Master Elite® roof replacements and forensic repairs engineered for the specific humidity and thermal demands of the Delaware and Raritan Canal corridor.",
    replacement: {
      heading: "High-Volume Roof Replacement & System Engineering",
      lead: "In Franklin Township, a roof replacement is about protecting a significant real estate asset. We specialize in GAF Lifetime Roofing Systems that provide a \"WindProven™\" defense.",
      bullets: [
        { title: "The Golden Pledge® Advantage", body: "Our Master Elite status allows us to provide a 25-year workmanship warranty backed by North America's largest manufacturer, providing peace of mind for homes near Rutgers Preparatory School and Colonial Park ." },
        { title: "Designer Material Science", body: "We install high-definition GAF Timberline® HDZ and CertainTeed® Landmark shingles, offering superior impact resistance and aesthetics for the diverse architecture found in the Somerset section of the township." },
        { title: "Thermodynamic Ventilation", body: "We calculate and install balanced attic ventilation systems using GAF Cobra® Ridge Vents , preventing the moisture buildup and heat-soak that causes premature shingle degradation and high energy costs near the canal." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Restoration",
      lead: "Persistent leaks at your chimney or skylights are often a sign of failed \"base-flashing\" or compromised structural masonry.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't rely on roofing tar or temporary sealants. We perform deep-grind masonry \"tucking\" to integrate heavy-gauge Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near South Bound Brook Road ." },
        { title: "Velux® Skylight Restoration", body: "For homes with aging or drafty skylights near Elizabeth Avenue , we offer the latest Velux® solar-powered or manual venting systems, installed with integrated flashing kits to ensure a lifetime of leak-free performance." },
        { title: "Forensic Repair Protocols", body: "Our repair teams identify \"phantom leaks\" at valley transitions , dormer cheeks , and wall-to-roof intersections , replacing failed rubber boots with high-durability lead-core pipe boots ." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite® Status), CertainTeed, Owens Corning (Duration® Series)." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Components", detail: "GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield, GAF WeatherWatch®." },
    ],
  },
  {
    slug: "bedminster",
    name: "Bedminster",
    zips: ["07921"],
    subtitle: "GAF Master Elite® Roofing Systems near Trump National & Lamington Road.",
    intro: "For the expansive equestrian estates and custom luxury builds along Lamington Road , River Road , and Pottersville Road , a roofing system is a multi-decade structural investment. Bedminster 07921 is characterized by large-scale residential architecture that faces intense wind-load and ice-damming challenges. Lita Construction provides factory-certified roof replacements and forensic leak repairs designed to protect these high-value assets with the technical precision of a GAF Master Elite® contractor.",
    replacement: {
      heading: "Estate-Scale Roof Replacement & Structural Integrity",
      lead: "We specialize in full-system replacements that qualify for the GAF Golden Pledge® 50-Year Warranty . For homes near the Hills Development or Schley Mountain , we engineer roofing systems that prioritize high-wind resistance and superior thermal management.",
      bullets: [
        { title: "Surgical Substrate Audit", body: "We don't \"roof over\" existing issues. We perform a complete surgical tear-off to inspect the roofing deck (plywood) , replacing any delaminated sheets and ensuring the substrate meets New Jersey Residential Building Codes for structural load-bearing capacity." },
        { title: "Premium Shingle Engineering", body: "We install GAF Timberline® HDZ with LayerLock® technology and designer CertainTeed® Grand Manor or Carriage House shingles, offering a heavyweight, slate-look aesthetic with maximum durability for Bedminster's premier estates." },
        { title: "Thermodynamic Ventilation", body: "We calculate and install balanced attic ventilation systems using GAF Cobra® Ridge Vents , preventing the moisture buildup and heat-soak that leads to premature shingle degradation and high energy costs." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Restoration, & Forensic Repair",
      lead: "Bedminster’s custom architecture often faces recurring leaks at complex transition points, such as oversized masonry chimneys and aging skylights.",
      bullets: [
        { title: "Master Masonry Chimney Flashing", body: "Leveraging our 22-year masonry heritage, we solve the \"unfixable\" chimney leaks that standard roofers patch with temporary caulk. We perform deep-grind Lead or Copper counter-flashing installations near Black River Road , seating the metal directly into the mortar joints for a permanent mechanical seal." },
        { title: "Velux® Skylight Engineering", body: "If your skylights are leaking or showing signs of condensation near Clucas Brook Road , we provide surgical Velux® replacements with factory-integrated \"No Leak\" flashing kits, guaranteed to stay dry for the life of the roof." },
        { title: "Forensic Leak Diagnostics", body: "Our repair teams identify the \"hidden\" failures in your roofing system—such as compromised drip edges , rotted fascia , or failed plumbing vent boots —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite®), CertainTeed (Grand Manor/Landmark), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "Moisture Management", detail: "GAF StormGuard®, Tiger Paw™ Underlayment, GAF WeatherWatch®." },
    ],
  },
  {
    slug: "peapack-gladstone",
    name: "Peapack-Gladstone",
    zips: ["07934", "07977"],
    subtitle: "High-Performance Roofing Systems near Gladstone Station & Main Street.",
    intro: "The historic estates and custom-built residential properties found along Main Street , Fowler Road , and Willow Avenue require a roofing partner who understands structural aesthetics and long-term warranty security. Peapack-Gladstone 07934 is a market where architectural fidelity and technical precision are non-negotiable. Lita Construction provides GAF Master Elite® roof replacements and forensic repairs engineered for the specific thermal expansion and wind-load demands of the Somerset County highlands.",
    replacement: {
      heading: "Structural Roof Replacement & Warranty Security",
      lead: "In Peapack-Gladstone, a roof replacement is about protecting a high-value asset while maintaining the home's historic or custom character. We specialize in GAF Lifetime Roofing Systems that provide a \"WindProven™\" defense.",
      bullets: [
        { title: "The Golden Pledge® Advantage", body: "Our Master Elite status allows us to provide a 25-year workmanship warranty backed by North America's largest manufacturer, providing peace of mind for homes near the Gladstone Station and Mendham Road ." },
        { title: "Designer Material Science", body: "We install high-definition GAF Slateline® and CertainTeed® Landmark TL shingles, offering the authentic look of slate or wood shake with the performance of modern asphalt technology." },
        { title: "Advanced Ice & Water Protection", body: "Given the steep pitches and heavy snow potential in the Peapack-Gladstone area, we install double-layer GAF StormGuard® or WeatherWatch® leak barriers at all critical eaves, valleys, and transition points." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Restoration",
      lead: "Persistent leaks at your chimney or skylights are often a sign of failed \"base-flashing\" or compromised structural masonry.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't rely on roofing tar or temporary sealants. We perform deep-grind masonry \"tucking\" to integrate heavy-gauge Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near Liberty Corner Road ." },
        { title: "Velux® Skylight Restoration", body: "For homes with aging or drafty skylights near Mosle Road , we offer the latest Velux® solar-powered or manual venting systems, installed with integrated flashing kits to ensure a lifetime of leak-free performance." },
        { title: "Forensic Repair Protocols", body: "Our repair teams identify the root cause of intrusion—whether it’s failed step-flashing , dry-rotted fascia , or compromised drip edges —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite® Status), CertainTeed, Owens Corning (Duration® Series)." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Components", detail: "GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield, GAF Cobra® Attic Ventilation." },
    ],
  },
  {
    slug: "green-brook",
    name: "Green Brook",
    zips: ["08812"],
    subtitle: "GAF Master Elite® Roofing near Washington Rock State Park & Route 22.",
    intro: "For the custom homes and established residential properties nestled along the Watchung Mountain ridge, including those off King George Road , Greenbrook Road , and near Washington Rock State Park , a roofing system faces extreme thermal fluctuations and high wind shear. Green Brook 08812 requires a contractor who understands the physics of mountain-slope runoff and structural ice-damming. Lita Construction provides factory-certified roof replacements and forensic leak repairs designed to withstand the unique environmental pressures of the Green Brook corridor.",
    replacement: {
      heading: "High-Performance Roof Replacement & Mountain-Slope Engineering",
      lead: "We specialize in full-system replacements that qualify for the GAF Golden Pledge® 50-Year Warranty . For homes near Green Brook Park or the Warren border, we engineer roofing systems that prioritize high-wind resistance and superior moisture management.",
      bullets: [
        { title: "Surgical Substrate Audit", body: "We don't \"shingle over\" compromised wood. We perform a complete surgical tear-off to inspect the roofing deck (plywood) , replacing any delaminated sheets and ensuring the substrate meets New Jersey Residential Building Codes for structural load-bearing capacity." },
        { title: "Premium Shingle Technology", body: "We install GAF Timberline® HDZ with LayerLock® technology and designer CertainTeed® Landmark TL shingles, providing a heavyweight aesthetic with maximum impact resistance for Green Brook’s premier neighborhoods." },
        { title: "Advanced Ice & Water Protection", body: "Given the steep pitches and heavy snow potential along the ridge, we install double-layer GAF StormGuard® or WeatherWatch® leak barriers at all critical eaves, valleys, and transition points." },
      ],
    },
    repair: {
      heading: "Chimney Flashing, Skylight Restoration, & Forensic Repair",
      lead: "Green Brook’s architecture often features multiple masonry chimneys and architectural skylights—the primary failure points for water intrusion during heavy storms.",
      bullets: [
        { title: "Master Masonry Chimney Flashing", body: "Leveraging our 22-year masonry heritage, we solve the \"unfixable\" chimney leaks that standard roofers patch with temporary caulk. We perform deep-grind Lead or Copper counter-flashing installations, seating the metal directly into the mortar joints for a permanent mechanical seal." },
        { title: "Velux® Skylight Solutions", body: "If your skylights are leaking or drafty near Mountain Avenue , we provide surgical Velux® replacements with factory-integrated \"No Leak\" flashing kits, guaranteed to stay dry for the life of the roof." },
        { title: "Forensic Leak Diagnostics", body: "Our repair teams identify the root cause of intrusion—whether it’s failed step-flashing , dry-rotted fascia , or failed plumbing vent boots —and replace them with high-durability, code-compliant components." },
      ],
    },
    brands: [
      { label: "Roofing Systems", detail: "GAF (Master Elite®), CertainTeed (Grand Manor/Landmark), Owens Corning." },
      { label: "Skylights", detail: "Velux® Certified \"No Leak\" Systems." },
      { label: "System Integrity", detail: "GAF Cobra® Ridge Vents, GAF Tiger Paw™ Underlayment, GAF Deck-Armor™." },
    ],
  },
  {
    slug: "bound-brook",
    name: "Bound Brook",
    zips: ["08805"],
    subtitle: "High-Performance Roofing Systems near the Raritan River & Billian Legion Park.",
    intro: "The historic residential neighborhoods and high-density housing found along Union Avenue , Main Street , and Vosseller Avenue require a roofing partner who understands structural restoration and long-term warranty security. Bound Brook 08805 is a market where aging housing stock often requires a deeper focus on substrate integrity and masonry integration. Lita Construction provides GAF Master Elite® roof replacements and forensic repairs engineered for the specific humidity and thermal demands of the Raritan River valley.",
    replacement: {
      heading: "Structural Roof Replacement & Warranty Security",
      lead: "In Bound Brook, a roof replacement is about protecting a significant asset while correcting years of underlying structural wear. We specialize in GAF Lifetime Roofing Systems that provide a \"WindProven™\" defense.",
      bullets: [
        { title: "The Golden Pledge® Advantage", body: "Our Master Elite status allows us to provide a 25-year workmanship warranty backed by GAF, providing peace of mind for homes near the Bound Brook Train Station and Codrington Park ." },
        { title: "Designer Material Science", body: "We install high-definition GAF Timberline® HDZ and CertainTeed® Landmark shingles, offering superior impact resistance and aesthetics for the diverse architecture found throughout the borough." },
        { title: "Thermodynamic Ventilation", body: "We calculate and install balanced attic ventilation systems using GAF Cobra® Ridge Vents , preventing the moisture buildup and heat-soak that causes premature shingle degradation and high energy costs near the river." },
      ],
    },
    repair: {
      heading: "Chimney Flashing Specialists & Skylight Restoration",
      lead: "Persistent leaks at your chimney or skylights are often a sign of failed \"base-flashing\" or compromised structural masonry in Bound Brook’s older homes.",
      bullets: [
        { title: "Precision Chimney Counter-Flashing", body: "We don't rely on roofing tar. We perform deep-grind masonry \"tucking\" to integrate heavy-gauge Lead or Copper flashing directly into your chimney’s brickwork, stopping leaks at the source near Mountain Avenue ." },
        { title: "Velux® Skylight Restoration", body: "For homes with aging or drafty skylights near Talmage Avenue , we offer the latest Velux® solar-powered or manual venting systems, installed with integrated flashing kits to ensure a lifetime of leak-free performance." },
        { title: "", body: "Shutterstock" },
        { title: "", body: "Explore" },
        { title: "Forensic Repair Protocols", body: "Our repair teams specialize in identifying \"phantom leaks\" at valley transitions , dormer cheeks , and wall-to-roof intersections , replacing failed rubber boots with high-durability lead-core pipe boots ." },
      ],
    },
    brands: [
      { label: "Roofing", detail: "GAF (Master Elite® Status), CertainTeed, Owens Corning (Duration® Series)." },
      { label: "Skylights", detail: "Velux® Certified." },
      { label: "System Components", detail: "GAF Tiger Paw™ Underlayment, GAF StormGuard® Ice & Water Shield, GAF WeatherWatch®." },
    ],
  },
]

export const roofingTownBySlug: Record<string, RoofingTown> = Object.fromEntries(
  roofingTowns.map((t) => [t.slug, t]),
)
