/**
 * Service-area (location) pages for local SEO.
 *
 * Every area listed here is somewhere Omega has actually built (see
 * `projects` / `recentProjects` in site.ts) or where the business is based.
 * Keep it that way — location pages with no real work behind them read as
 * doorway pages to Google and to clients. Add an area when there's a project
 * to point at.
 *
 * Positioning per Dave (emails 22 Jul & 7 Sep 2026): balanced commercial and
 * upper-end residential, with commercial the preferred growth area.
 */

import type { Faq } from "./site";

export type Area = {
  slug: string;
  /** Short name used in links and lists. */
  name: string;
  /** Region hub or individual suburb. */
  kind: "region" | "suburb";
  /** Parent region for suburb pages. */
  parent?: string;
  /** H1. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Two or three paragraphs of genuinely local copy. */
  intro: string[];
  /** Suburbs covered (regions) or neighbouring suburbs (suburbs). */
  suburbs: string[];
  /** What we most often build here — short bullets. */
  highlights: string[];
  /** Case studies from `projects` located in this area. */
  projectSlugs: string[];
  /** Titles from `recentProjects` located in this area. */
  recentProjectTitles: string[];
  /** Services to surface first on this page. */
  serviceSlugs: string[];
  faqs: Faq[];
};

export const areas: Area[] = [
  /* ───────────── Regions ───────────── */
  {
    slug: "central-auckland",
    name: "Central Auckland",
    kind: "region",
    title: "Builders in Central Auckland",
    metaTitle: "Builders Central Auckland",
    metaDescription:
      "Mt Eden-based builders working across Central Auckland — Ponsonby, Epsom, Remuera, Parnell, Grey Lynn, St Marys Bay and the CBD. Commercial and upper-end residential since 1994.",
    intro: [
      "Omega Construction is based on Dominion Road in Mt Eden, and Central Auckland is where most of our work has been for three decades. The isthmus suburbs — Ponsonby, Grey Lynn, Herne Bay, St Marys Bay, Mt Eden, Epsom, Remuera, Parnell and Greenlane — are dense with villas, bungalows and architect-designed homes on tight sites, many inside Special Character Areas where Auckland Council expects careful, consented work.",
      "On the commercial side, the CBD and city-fringe carry the office, retail, hospitality and education buildings we specialise in. Recent Central Auckland work includes stage-one construction at the Mercure Hotel on Queen Street, the Urban Oasis structural rebuild on Lincoln Street in Ponsonby, two new concrete townhouses on Patey Street in Epsom, an extensive renovation on Owens Road in Epsom, and an entrance project on Sarsfield Road in St Marys Bay.",
      "Being local matters on these sites. Narrow streets, shared driveways, heritage overlays and neighbours a metre away all shape how a job is planned — and David can be on site the same day.",
    ],
    suburbs: [
      "Mt Eden",
      "Epsom",
      "Ponsonby",
      "Grey Lynn",
      "Herne Bay",
      "St Marys Bay",
      "Freemans Bay",
      "Parnell",
      "Newmarket",
      "Remuera",
      "Greenlane",
      "Auckland CBD",
    ],
    highlights: [
      "Architect-designed new homes, townhouses and full structural remodels",
      "Villa and bungalow alterations, extensions and reclads in Special Character Areas",
      "CBD and city-fringe office, retail and hospitality fit-outs",
      "Education and student-facility work, including for the Auckland University Students' Association",
    ],
    projectSlugs: ["urban-oasis-ponsonby", "patey-street", "owens-road-epsom"],
    recentProjectTitles: ["Mercure Hotel — Stage One", "Sarsfield Road"],
    serviceSlugs: [
      "residential-building-renovations",
      "commercial-construction",
      "hospitality-fit-outs",
      "recladding-weathertightness",
    ],
    faqs: [
      {
        q: "Do you build in Special Character Areas and heritage suburbs?",
        a: "Yes. Much of our residential work is in Ponsonby, Grey Lynn, Mt Eden, Epsom and Remuera, where Special Character Area rules and heritage overlays affect what can change on the street-facing elevations. We work with your architect to keep the design consentable and manage the resource and building consents with Auckland Council.",
      },
      {
        q: "Can you work on tight inner-city sites with no parking or storage?",
        a: "Yes. Inner-city and city-fringe sites are our normal. We plan deliveries, traffic management, scaffolding and waste around narrow streets and shared driveways, and keep neighbours informed throughout.",
      },
      {
        q: "Where is Omega Construction based?",
        a: "Our office is on Dominion Road in Mt Eden (PO Box 56-320, Mt Eden 1446). From there we cover all of Central Auckland and the wider region.",
      },
    ],
  },
  {
    slug: "north-shore",
    name: "North Shore",
    kind: "region",
    title: "Builders on Auckland's North Shore",
    metaTitle: "Builders North Shore Auckland",
    metaDescription:
      "Commercial and residential builders on the North Shore — Takapuna, Devonport, Milford, Birkenhead and Albany. Sentinel Tower pool-level upgrade in Takapuna. Master Builder since 1994.",
    intro: [
      "Omega Construction builds across the North Shore, from the apartment towers and commercial precinct of Takapuna to the character homes of Devonport and the growing business parks of Albany. Our Sentinel Tower project in Takapuna — a fourth-floor pool and exterior-living upgrade built from prefinished structural steel, with glass wind breaks four levels up — is typical of the technical, exposed-site work the Shore's coastal buildings call for.",
      "Body corporates, property managers and commercial tenants on the Shore need a contractor who can work inside an occupied building, meet Site Safe standards and hand over a compliant result. Homeowners want the same care on renovations, reclads and new builds in Milford, Castor Bay, Birkenhead and along the East Coast Bays.",
    ],
    suburbs: [
      "Takapuna",
      "Milford",
      "Devonport",
      "Belmont",
      "Birkenhead",
      "Northcote",
      "Glenfield",
      "Albany",
      "Browns Bay",
      "Mairangi Bay",
    ],
    highlights: [
      "Apartment and body-corporate upgrades, including exterior living and pool-level structures",
      "Commercial and office refurbishments in Takapuna and Albany",
      "Coastal home renovations, reclads and extensions",
      "Structural steel and glazing on exposed, elevated sites",
    ],
    projectSlugs: ["the-sentinel-takapuna"],
    recentProjectTitles: [],
    serviceSlugs: [
      "commercial-construction",
      "alterations-structural-work",
      "residential-building-renovations",
      "seismic-strengthening",
    ],
    faqs: [
      {
        q: "Do you work for body corporates on the North Shore?",
        a: "Yes. The Sentinel Tower upgrade in Takapuna was delivered for the apartment owners' body corporate — a fourth-floor communal pool area that was open to gale-force winds, rebuilt with prefinished structural-steel shelters and glass-panel wind breaks. We're used to the consultation, staging and access constraints body-corporate work involves.",
      },
      {
        q: "Do you handle coastal and exposed-site detailing?",
        a: "Yes. Elevated and coastal sites on the Shore need corrosion-appropriate steel, robust glazing and careful weathertightness detailing. We work to your engineer's and architect's specifications and manage the consent with Auckland Council.",
      },
    ],
  },
  {
    slug: "west-auckland",
    name: "West Auckland",
    kind: "region",
    title: "Builders in West Auckland",
    metaTitle: "Builders West Auckland",
    metaDescription:
      "Commercial and residential builders in West Auckland — Henderson, Te Atatū, New Lynn, Avondale and Hobsonville. Built South Pacific Pictures' 400 m² office floor in Henderson.",
    intro: [
      "West Auckland mixes established commercial and industrial precincts in Henderson, New Lynn and Avondale with fast-growing residential areas at Hobsonville, Whenuapai and Westgate. Omega Construction builds across all of it. Our largest West Auckland project to date is the South Pacific Pictures administration floor on Tolich Place in Henderson — 400 m² of open-plan offices with exterior decks and a new reception, built above an operating studio while filming continued below.",
      "That job says a lot about how we work in the West: around live businesses, to a fixed programme, with the health and safety systems a commercial client expects. The same team handles residential renovations, extensions and new builds for homeowners across the western suburbs.",
    ],
    suburbs: [
      "Henderson",
      "Te Atatū",
      "New Lynn",
      "Avondale",
      "Glen Eden",
      "Titirangi",
      "Massey",
      "Hobsonville",
      "Whenuapai",
      "Westgate",
    ],
    highlights: [
      "Office, studio and warehouse refurbishments delivered around live operations",
      "Change-of-use conversions of industrial and retail units",
      "New homes, extensions and renovations in the western suburbs",
      "Structural alterations and additions to existing commercial buildings",
    ],
    projectSlugs: ["south-pacific-pictures"],
    recentProjectTitles: [],
    serviceSlugs: [
      "commercial-construction",
      "interior-fit-outs-refurbishment",
      "residential-building-renovations",
      "project-management",
    ],
    faqs: [
      {
        q: "Can you add a floor or extension to an existing commercial building?",
        a: "Yes. At South Pacific Pictures in Henderson we built a new 400 m² administration floor above an existing working building, with a new entrance, reception and exterior decks. We coordinate the structural engineering, consent and staging so the business below keeps operating.",
      },
      {
        q: "Do you build in the new Hobsonville and Westgate developments?",
        a: "Yes. We deliver architect-designed new homes, multiple-dwelling projects and commercial fit-outs across the north-western growth areas, as well as renovations in the established western suburbs.",
      },
    ],
  },
  {
    slug: "south-auckland",
    name: "South Auckland",
    kind: "region",
    title: "Builders in South Auckland & the Airport precinct",
    metaTitle: "Builders South Auckland & Airport",
    metaDescription:
      "Commercial builders in South Auckland — Māngere, the Airport precinct, Manukau, Ōtāhuhu and East Tāmaki. Andrew Baxter Drive office and warehouse transformation for a multinational tenant.",
    intro: [
      "South Auckland's commercial and industrial precincts — Māngere and the Airport corridor, Manukau, Ōtāhuhu, Wiri, Papatoetoe and East Tāmaki — are home to the office, warehouse and logistics buildings Omega Construction refurbishes and upgrades. Our Andrew Baxter Drive project near Auckland Airport transformed a tired office and warehouse into a vibrant workspace for a multinational tenant, with a new cantilevered canopy, two-hour firewalls, new bathrooms on both levels and a full interior upgrade.",
      "Property managers and owners in the South need a contractor who can deliver a landlord's works or tenant fit-out to a lease date, manage the fire-rating and compliance detail that raking industrial structures bring, and run a Site Safe site. That is the work we do.",
    ],
    suburbs: [
      "Māngere",
      "Auckland Airport",
      "Manukau",
      "Ōtāhuhu",
      "Papatoetoe",
      "Wiri",
      "East Tāmaki",
      "Manurewa",
      "Papakura",
    ],
    highlights: [
      "Office and warehouse refurbishments for landlords and tenants",
      "Fire-rating upgrades, firewalls and canopy structures",
      "Tenant fit-outs delivered to lease dates",
      "Ongoing maintenance and alterations for property managers",
    ],
    projectSlugs: ["andrew-baxter-drive"],
    recentProjectTitles: [],
    serviceSlugs: [
      "commercial-construction",
      "interior-fit-outs-refurbishment",
      "alterations-structural-work",
      "project-management",
    ],
    faqs: [
      {
        q: "Do you do landlord's works and tenant fit-outs for industrial buildings?",
        a: "Yes. Andrew Baxter Drive in Māngere is a good example: we delivered the base-building upgrade — canopy, firewalls, bathrooms, windows, ceilings and flooring — that let a multinational tenant move into a refreshed office and warehouse. We work with property managers such as Integral Property Management to programme works to lease milestones.",
      },
      {
        q: "Can you upgrade fire ratings in an existing warehouse?",
        a: "Yes. At Andrew Baxter Drive we built new two-hour exterior firewalls to meet the higher internal fire-rating requirements of the raking structure. We coordinate the fire engineer, consent and inspections with Auckland Council.",
      },
    ],
  },
  {
    slug: "rodney-hibiscus-coast",
    name: "Rodney & Hibiscus Coast",
    kind: "region",
    title: "Builders in Warkworth, Rodney & the Hibiscus Coast",
    metaTitle: "Builders Warkworth & Hibiscus Coast",
    metaDescription:
      "Builders serving Warkworth, Ōrewa, Silverdale, Whangaparāoa and Matakana. Omega Construction built the Warkworth water pump station for Watercare. Registered Master Builder since 1994.",
    intro: [
      "North of the city, Omega Construction works across Rodney and the Hibiscus Coast — Warkworth, Matakana, Ōrewa, Silverdale and the Whangaparāoa Peninsula. Our Warkworth project, a water pump station built for Watercare with Q Designz, shows the breadth of what we take on: utility and infrastructure structures alongside commercial refurbishments and homes.",
      "Rodney is growing quickly, with new commercial centres at Silverdale and Warkworth and lifestyle and coastal homes throughout. We bring the same Site Safe systems, Master Builder standards and end-to-end consent management to these projects as we do in the city — with the planning needed for sites an hour from town.",
    ],
    suburbs: [
      "Warkworth",
      "Matakana",
      "Snells Beach",
      "Ōrewa",
      "Silverdale",
      "Whangaparāoa",
      "Red Beach",
      "Millwater",
    ],
    highlights: [
      "Infrastructure and utility structures, including pump stations for Watercare",
      "Commercial and retail construction in Silverdale and Warkworth",
      "Coastal and lifestyle new homes, renovations and reclads",
      "Structural and concrete work to engineer's design",
    ],
    projectSlugs: [],
    recentProjectTitles: ["Warkworth Water Pump Station"],
    serviceSlugs: [
      "commercial-construction",
      "project-management",
      "residential-building-renovations",
      "alterations-structural-work",
    ],
    faqs: [
      {
        q: "Do you take on infrastructure and utility work?",
        a: "Yes. We built a water pump station in Warkworth for Watercare, working with Q Designz Ltd. Utility and infrastructure structures need disciplined concrete and structural work, tight H&S and careful programme control, all of which are core to how Omega operates.",
      },
      {
        q: "Is Rodney too far for an Auckland-based builder?",
        a: "No. Warkworth is around 45 minutes from our Mt Eden base via the Northern Motorway and Pūhoi–Warkworth extension, and we plan site logistics, deliveries and crew accordingly. We have delivered projects there and are happy to quote across Rodney and the Hibiscus Coast.",
      },
    ],
  },

  /* ───────────── Suburbs ───────────── */
  {
    slug: "epsom",
    name: "Epsom",
    kind: "suburb",
    parent: "central-auckland",
    title: "Builders in Epsom, Auckland",
    metaTitle: "Builders Epsom | Renovations & New Homes",
    metaDescription:
      "Epsom builders with two local case studies: two new concrete townhouses on Patey Street and an extensive renovation on Owens Road. Registered Master Builder based in Mt Eden.",
    intro: [
      "Epsom is a few minutes from our Mt Eden office and two of our flagship residential projects are here. On Patey Street we built two luxurious two-storey concrete townhouses with Malcolm Walker Architects — four bedrooms each, curved internal stairwells and double internal garaging — after relocating the original family home to the Waikato. On Owens Road, with Jessop Architects, we carried out an extensive renovation that included a structural upgrade of the lower-level walls and foundations, a new deck with a semi-enclosed double carport below, and a fully reconfigured interior.",
      "Epsom's mix of large sites, in-zone school demand and Special Character streets makes it a natural fit for multiple-dwelling projects, major renovations and architect-designed rebuilds — the upper-end residential work Omega specialises in.",
    ],
    suburbs: ["Mt Eden", "Greenlane", "Remuera", "Newmarket", "Royal Oak", "One Tree Hill"],
    highlights: [
      "New concrete townhouses and multiple-dwelling projects",
      "Extensive renovations with structural upgrades of older homes",
      "Extensions, decks and carports opening homes to outdoor living",
      "Subdivision management for larger Epsom sites",
    ],
    projectSlugs: ["patey-street", "owens-road-epsom"],
    recentProjectTitles: [],
    serviceSlugs: [
      "residential-building-renovations",
      "alterations-structural-work",
      "subdivision-management",
      "recladding-weathertightness",
    ],
    faqs: [
      {
        q: "Can you build two townhouses on one Epsom site?",
        a: "Yes. Patey Street is exactly that: two new solid-concrete townhouses, each with four bedrooms, 2.5 bathrooms and a double internal garage, built to the highest standard on a single Epsom site. We can also manage the subdivision so each home gets its own title.",
      },
      {
        q: "My Epsom house has had basement and extension work over the years. Can you fix the structure?",
        a: "Yes. Owens Road had been altered with various basement developments and extensions, and investigation found flaws in the exterior walls and a basement floor sitting directly on the ground. We upgraded the lower-level walls and foundations as part of the renovation. We'd start with an on-site assessment and engineer's input.",
      },
    ],
  },
  {
    slug: "ponsonby",
    name: "Ponsonby",
    kind: "suburb",
    parent: "central-auckland",
    title: "Builders in Ponsonby, Grey Lynn & Herne Bay",
    metaTitle: "Builders Ponsonby | Villa Renovations",
    metaDescription:
      "Ponsonby builders for villa renovations, reclads and structural rebuilds. Urban Oasis on Lincoln Street, with KOIA Architects, became a full structural rebuild.",
    intro: [
      "Ponsonby, Grey Lynn, Herne Bay, Freemans Bay and St Marys Bay hold Auckland's densest concentration of villas and character homes, most of them inside Special Character Areas. Renovating here means respecting the street-facing form while transforming what's behind it — and that is what our Urban Oasis project on Lincoln Street did. Working with KOIA Architects, an alteration and reclad became a full structural rebuild: every internal wall removed, structural steel installed to create open-plan living the length of the house, bespoke joinery with Caesarstone, louvres to direct natural light, and smart wiring throughout.",
      "We also completed an entrance project on Sarsfield Road in St Marys Bay with Patterson Associates. Tight sites, shared driveways and close neighbours are standard in these suburbs, and we plan access, scaffolding and deliveries around them.",
    ],
    suburbs: ["Grey Lynn", "Herne Bay", "St Marys Bay", "Freemans Bay", "Westmere", "Kingsland"],
    highlights: [
      "Villa and bungalow renovations that open up the rear of the home",
      "Recladding and weathertightness remediation",
      "Full structural rebuilds with steel-framed open-plan living",
      "High-detail finishing, bespoke joinery and home automation",
    ],
    projectSlugs: ["urban-oasis-ponsonby"],
    recentProjectTitles: ["Sarsfield Road"],
    serviceSlugs: [
      "residential-building-renovations",
      "recladding-weathertightness",
      "alterations-structural-work",
      "hospitality-fit-outs",
    ],
    faqs: [
      {
        q: "Can you remove all the internal walls of a villa and open it up?",
        a: "Yes. At Urban Oasis on Lincoln Street we removed all of the internal walls and strengthened the home with structural steel beams to create a large open-plan living space running the length of the house. Every change is engineered and consented, and the street-facing character is retained.",
      },
      {
        q: "Do Ponsonby renovations need resource consent as well as building consent?",
        a: "Often, because most of Ponsonby, Grey Lynn and Herne Bay sits in a Special Character Area under the Auckland Unitary Plan. Changes visible from the street, demolition and some additions can need resource consent. We work with your architect to confirm what's required and manage both consents with Auckland Council.",
      },
    ],
  },
  {
    slug: "mt-eden",
    name: "Mt Eden",
    kind: "suburb",
    parent: "central-auckland",
    title: "Builders in Mt Eden, Auckland",
    metaTitle: "Builders Mt Eden | Master Builder Since 1994",
    metaDescription:
      "Omega Construction is based on Dominion Road in Mt Eden. Local Master Builder for character-home renovations, reclads and commercial fit-outs in Mt Eden, Balmoral and Sandringham.",
    intro: [
      "Mt Eden is home. Omega Construction's office is on Dominion Road, and David has lived and built around the maunga for the best part of three decades — from Mt Eden village and the Balmoral shops to Sandringham, Kingsland and Three Kings. The suburb's bungalows and villas sit under some of Auckland's most protected Special Character and volcanic viewshaft rules, so renovations, second storeys and reclads here reward a builder who knows what the council will and won't accept.",
      "Commercially, Dominion Road and Mt Eden Road carry a long strip of hospitality, retail and professional premises that need fit-outs and refurbishments around trading. Being minutes away means quick site visits, fast responses and a builder your neighbours already know.",
    ],
    suburbs: ["Balmoral", "Sandringham", "Kingsland", "Three Kings", "Morningside", "Epsom"],
    highlights: [
      "Bungalow and villa renovations under Special Character and viewshaft rules",
      "Extensions, second storeys and reclads",
      "Dominion Road and Mt Eden Road hospitality and retail fit-outs",
      "Fast, local response for alterations and maintenance",
    ],
    projectSlugs: [],
    recentProjectTitles: [],
    serviceSlugs: [
      "residential-building-renovations",
      "recladding-weathertightness",
      "hospitality-fit-outs",
      "alterations-structural-work",
    ],
    faqs: [
      {
        q: "Do volcanic viewshafts affect what I can build in Mt Eden?",
        a: "They can. Parts of Mt Eden sit under regionally significant volcanic viewshafts and height-sensitive areas around Maungawhau, which limit building height on some sites. Combined with Special Character Area rules, this shapes second-storey additions in particular. We'll check the site's overlays early with your architect so the design is consentable.",
      },
      {
        q: "Can I see local work before I engage you?",
        a: "Yes. Our Epsom and Ponsonby case studies are minutes from Mt Eden — Patey Street, Owens Road and Lincoln Street — and we can walk you through them. We can also put you in touch with past clients in the area.",
      },
    ],
  },
  {
    slug: "takapuna",
    name: "Takapuna",
    kind: "suburb",
    parent: "north-shore",
    title: "Builders in Takapuna, North Shore",
    metaTitle: "Builders Takapuna | Apartments & Commercial",
    metaDescription:
      "Takapuna builders for apartment and body-corporate upgrades, commercial refurbishments and coastal homes. Rebuilt Sentinel Tower's fourth-floor pool and exterior living area.",
    intro: [
      "Takapuna's apartment towers, beachfront and commercial centre bring a specific kind of construction: elevated, exposed to the weather and almost always occupied. Our Sentinel Tower project is the example we point to. The fourth-floor communal pool area was open to the elements and unusable in gale-force winds, so with Team Avery Architects we built four covered resting and entertaining shelters from offsite-prefabricated, prefinished structural steel and installed glass-panel wind breaks around the pool edging — all while residents lived above and below.",
      "We bring the same approach to commercial refurbishments around Hurstmere Road and Anzac Street, and to coastal home renovations, reclads and extensions in Takapuna, Milford, Castor Bay and Belmont.",
    ],
    suburbs: ["Milford", "Castor Bay", "Belmont", "Hauraki", "Devonport", "Forrest Hill"],
    highlights: [
      "Apartment and body-corporate exterior living, pool-level and structural upgrades",
      "Prefabricated structural steel and glazing on elevated sites",
      "Commercial and office refurbishments in the Takapuna centre",
      "Coastal home renovations, reclads and extensions",
    ],
    projectSlugs: ["the-sentinel-takapuna"],
    recentProjectTitles: [],
    serviceSlugs: [
      "commercial-construction",
      "alterations-structural-work",
      "seismic-strengthening",
      "residential-building-renovations",
    ],
    faqs: [
      {
        q: "How do you build on an apartment building's upper floor without a crane on site for weeks?",
        a: "At Sentinel Tower we prefabricated and prefinished the structural steel offsite so the shelters could be lifted and assembled quickly, then completed the carpentry and glazing on site. It minimises time on the roof, disruption to residents and exposure to the weather.",
      },
      {
        q: "Do you deal with the body corporate committee and building manager?",
        a: "Yes. We're used to presenting programmes, access plans and noise schedules to committees and building managers, and to working within the notice periods and hours a body corporate sets.",
      },
    ],
  },
  {
    slug: "henderson",
    name: "Henderson",
    kind: "suburb",
    parent: "west-auckland",
    title: "Builders in Henderson, West Auckland",
    metaTitle: "Builders Henderson | Commercial Construction",
    metaDescription:
      "Henderson commercial builders. Built South Pacific Pictures' 400 m² administration floor above an operating studio on Tolich Place, delivered around a live production.",
    intro: [
      "Henderson is West Auckland's commercial heart, and our South Pacific Pictures project on Tolich Place is one of the more demanding jobs we've delivered anywhere. SPP had outgrown its administration area, so with Team Avery we built a 400 m² open-plan office floor above an existing working building, with exterior decks, a new entrance and reception — all while production continued on the main level and the studio directly adjacent stayed in use.",
      "That combination of structural work over an occupied building, a live-operations programme and a client-facing finish is what Henderson's studios, offices and industrial units regularly need. We also build and renovate homes across Henderson, Te Atatū, Sunnyvale and Glendene.",
    ],
    suburbs: ["Te Atatū", "Lincoln", "Sunnyvale", "Glendene", "Western Heights", "Massey"],
    highlights: [
      "Additional floors and extensions over existing commercial buildings",
      "Studio, office and warehouse refurbishments around live operations",
      "New entrances, receptions and exterior decks",
      "Residential renovations and new builds in the western suburbs",
    ],
    projectSlugs: ["south-pacific-pictures"],
    recentProjectTitles: [],
    serviceSlugs: [
      "commercial-construction",
      "interior-fit-outs-refurbishment",
      "project-management",
      "residential-building-renovations",
    ],
    faqs: [
      {
        q: "Can you build over the top of a building that stays in use?",
        a: "Yes. At South Pacific Pictures we built a new 400 m² floor above an operating studio and production office. We plan the structural sequence, temporary works and services around the business, with clear communication so staff know what's happening each week.",
      },
      {
        q: "Do you work with architects on commercial projects in the West?",
        a: "Yes. The South Pacific Pictures floor was designed with Team Avery, and we regularly work with architects and designers on commercial fit-outs and refurbishments across West Auckland.",
      },
    ],
  },
];

export const regions = areas.filter((a) => a.kind === "region");
export const suburbAreas = areas.filter((a) => a.kind === "suburb");

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}

/** Suburb pages nested under a region. */
export function childAreas(regionSlug: string) {
  return suburbAreas.filter((a) => a.parent === regionSlug);
}

/** Areas that surface a given service first — used to cross-link from service pages. */
export function areasForService(serviceSlug: string) {
  return areas.filter((a) => a.serviceSlugs.includes(serviceSlug));
}

/** Flat list of every suburb name we claim to serve, for Organization.areaServed. */
export const servedSuburbs = Array.from(
  new Set(areas.flatMap((a) => [a.name, ...a.suburbs])),
).sort();
