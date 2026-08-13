/**
 * Single source of truth for Omega Construction site content.
 * Sources: Dave's onboarding (23 Jul 2026) + the existing site
 * (omega-construction.co.nz). Items marked "verify" need Dave's confirmation
 * before launch — the old site had some conflicting/dated details.
 */

export const site = {
  name: "Omega Construction",
  legalName: "Omega Construction (Auckland) Ltd",
  established: 1994,
  yearsExperience: 35,
  founder: "David Williams",
  founderCreds: "Registered Master Builder · Licensed Building Practitioner",
  domain: "omega-construction.co.nz",
  region: "Auckland",
  tagline: "Quality Name, Quality Construction.",
  taglineAlt: "Shaping buildings and homes with passion and skill.",

  // Mobile / Dave — confirmed as the primary contact.
  phone: "021 936 058",
  phoneHref: "tel:+6421936058",
  officePhone: "09 815 2117",
  officePhoneHref: "tel:+6498152117",

  email: "dave@omega-construction.co.nz",
  emailSusan: "susan@omega-construction.co.nz",
  // Confirmed by Dave.
  address: "PO Box 56-320, Dominion Road, Mt Eden 1446",

  // Credentials from Dave's 2026 Company Profile.
  mbaNumber: "1951",
  lbpNumber: "102450",
  publicLiability: "$10 million",

  linkedin: "https://www.linkedin.com/company/omega-construction-auckland", // verify exact URL
} as const;

/**
 * Price guides are supplied in Dave's profile but kept OUT of public pages by
 * default (they anchor negotiations on bespoke work). Flip to true to show them.
 */
export const SHOW_PROJECT_VALUES = false;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Health & Safety", href: "/health-safety" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

/** Trust signals — all current & verifiable (SiteWise handled separately, see H&S). */
export const credentials = [
  { label: "Registered Master Builder", note: "MBA #1951" },
  { label: "Licensed Building Practitioner", note: "LBP #102450" },
  { label: "Site Safe member", note: "Site Smart H&S system" },
  { label: "$10M insured", note: "Public liability cover" },
] as const;

/** Headline stats from Dave's 2026 Company Profile. */
export const stats = [
  { value: "86", label: "Projects completed" },
  { value: "82", label: "Satisfied customers" },
  { value: "35", label: "Years of experience" },
  { value: "0", label: "Reportable workplace accidents" },
] as const;

/** Our Values — from the Company Profile. */
export const values = [
  {
    title: "Quality",
    body: "Top-quality workmanship from skilled tradesmen, using only premium materials. We're a Registered Master Builder and Licensed Building Practitioner, insured and experienced in all types of construction in Auckland.",
  },
  {
    title: "Price",
    body: "We plan a project tailored to your vision and your budget. No surprises, no hidden costs — just transparent, reliable service.",
  },
  {
    title: "Protection",
    body: "We take full responsibility for the quality of workmanship, tradespeople, materials and the final finish of your project.",
  },
  {
    title: "Safety",
    body: "We ensure the safety of homeowners and families with a qualified, experienced team trained in health and safety practices.",
  },
] as const;

/** Our Process — six stages, from the Company Profile. */
export const processSteps = [
  {
    title: "Approach",
    body: "Contact Omega Construction, and David will take the time to understand your vision — no matter how simple or complex.",
  },
  {
    title: "Research",
    body: "David meets you on-site to assess the scope of work, take photos and consult with trusted trades and suppliers. Environment, budget and timeframes guide the next steps.",
  },
  {
    title: "Acceptance",
    body: "Within reasonable timing, David provides a detailed, obligation-free quote — valid for 30 days and usually covering all costs including materials, labour and GST (T&C Apply).",
  },
  {
    title: "Commencement",
    body: "After acceptance, David sets a formal start date, ensuring it aligns with the expectations discussed in the initial stages.",
  },
  {
    title: "Collaboration",
    body: "We keep communication open throughout — weekly updates for larger jobs and regular check-ins for smaller projects.",
  },
  {
    title: "Completion",
    body: "On completion we conduct a formal handover, with any defects addressed and documented during the process.",
  },
] as const;

/** Why Choose Us — from the Company Profile. */
export const whyChooseUs = [
  {
    title: "Our team",
    body: "Expertise, creativity and a keen eye for detail in every project — bringing your ideas to life with exceptional results.",
  },
  {
    title: "Transparent communication",
    body: "We keep you informed from start to finish, for complete peace of mind.",
  },
  {
    title: "Project management",
    body: "A refined project-management system ensures your project is completed quickly, without compromising on quality.",
  },
  {
    title: "Speedy service",
    body: "Efficient building processes mean speedy completion — again, without compromising on quality.",
  },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  sectors: string[];
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  includes: string[];
  /** Which portfolio category to surface as related work. */
  relatedCategory?: "Commercial" | "Residential";
};

export const services: Service[] = [
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    short: "Single & multi-storey structural work, new builds and renovations.",
    description:
      "Single and multi-storey structure, new builds and renovations delivered to programme, with the health & safety systems commercial tenders demand — including seismic upgrading.",
    sectors: ["Office", "Retail", "Mixed-use", "Warehouse", "Seismic upgrades"],
    metaTitle: "Commercial Builder Auckland | Commercial Construction",
    metaDescription:
      "Auckland commercial construction — single & multi-storey new builds, structural work, renovations and seismic upgrades. Site Safe certified, Registered Master Builder since 1994.",
    intro: [
      "Omega Construction has delivered commercial construction across Auckland for three decades — single and multi-storey structures, new builds and renovations for office, retail and mixed-use spaces, and Seismic Upgrades.",
      "For commercial clients comparing tenderers, our Site Safe membership, Site Smart H&S management and full licensing and insurance aren't a footnote — they're the assurance your project runs safely, to programme and to code.",
    ],
    includes: [
      "New commercial builds, single and multi-storey",
      "Structural work and building renovations",
      "Seismic strengthening and upgrades",
      "Full project management and council liaison",
      "Health & safety compliance on every site",
    ],
    relatedCategory: "Commercial",
  },
  {
    slug: "residential-building-renovations",
    title: "Residential Building & Renovations",
    short: "New homes, architectural remodels, recladding and refurbishment.",
    description:
      "Upper-end residential building and renovation — new builds including multiple dwellings, architectural remodels, recladding, extensions and full refurbishment of existing homes.",
    sectors: ["New homes", "Multiple dwellings", "Recladding", "Extensions"],
    metaTitle: "House Renovation & New Home Builder Auckland",
    metaDescription:
      "Upper-end Auckland home building and renovation — new homes, architectural remodels, recladding, extensions and refurbishment. Registered Master Builder, award-winning work.",
    intro: [
      "From architecturally remodelled homes to new builds and multiple dwellings, Omega Construction brings a high-quality-detail approach to Auckland residential — work that has earned award-winning recognition.",
      "We remove internal walls and strengthen with structural steel, reclad and refurbish, and finish with only the highest-quality fittings — working alongside your architect to realise the design.",
    ],
    includes: [
      "New homes and multiple dwellings",
      "Architectural remodels and open-plan conversions",
      "Recladding and weathertightness remediation",
      "Extensions, alterations and full refurbishment",
      "High-detail finishing",
    ],
    relatedCategory: "Residential",
  },
  {
    slug: "interior-fit-outs-refurbishment",
    title: "Interior Fit-Outs & Refurbishment",
    short: "Commercial and residential fit-out of existing buildings.",
    description:
      "Transforming existing spaces — interior fit-out and refurbishment of existing buildings across commercial and residential, including change-of-use projects.",
    sectors: ["Commercial", "Hospitality", "Change-of-use"],
    metaTitle: "Commercial Fit-Out & Refurbishment Auckland",
    metaDescription:
      "Auckland interior fit-outs and refurbishment for existing commercial and residential buildings — hospitality, entertainment and change-of-use projects. Delivered around live operations.",
    intro: [
      "We transform existing buildings — interior fit-out and refurbishment across commercial and residential spaces, including hospitality, entertainment and change-of-use projects.",
      "Our teams are experienced at working within live, operating environments — completing fit-outs around busy offices and trading spaces with minimal disruption.",
    ],
    includes: [
      "Commercial office and retail fit-outs",
      "Hospitality and entertainment spaces",
      "Change-of-use conversions",
      "Refurbishment of existing buildings",
      "Work staged around live operations",
    ],
    relatedCategory: "Commercial",
  },
  {
    slug: "alterations-structural-work",
    title: "Alterations & Structural Work",
    short: "Alterations, extensions, maintenance and structural work.",
    description:
      "The 'you name it, we can build it' capability — alterations, extensions, maintenance and structural work across residential and commercial buildings.",
    sectors: ["Alterations", "Extensions", "Structural", "Maintenance"],
    metaTitle: "Building Alterations & Structural Work Auckland",
    metaDescription:
      "Auckland building alterations, extensions, structural work and maintenance — residential and commercial. Registered Master Builder, Licensed Building Practitioner since 1994.",
    intro: [
      "You name it, we can build it. Omega Construction handles alterations, extensions, structural work and maintenance across residential and commercial buildings.",
      "Backed by a Licensed Building Practitioner and 35+ years of experience, we take on the challenges other builders pass on — with all required compliance handled end to end.",
    ],
    includes: [
      "Extensions and additions",
      "Structural alterations and reconfiguration",
      "Ongoing building maintenance",
      "Seismic Strengthening",
      "Engineering and consent coordination",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    short: "Concept to completion, with every sub-trade and consent handled.",
    description:
      "We take your project from concept through to completion — organising and managing all sub-trades, working with council, and handling every health & safety compliance obligation.",
    sectors: ["Sub-trade coordination", "Council liaison", "H&S compliance"],
    metaTitle: "Construction Project Management Auckland",
    metaDescription:
      "End-to-end construction project management in Auckland — sub-trade coordination, council liaison and health & safety compliance, concept to completion. Registered Master Builder.",
    intro: [
      "Omega Construction can take your project from concept through to completion. We effectively organise and manage all sub-trades, work with council, and handle every health & safety compliance obligation.",
      "It's the same disciplined, end-to-end quality control process we apply to our own builds — starting at tender and carried through to handover.",
    ],
    includes: [
      "Concept-to-completion delivery",
      "Coordination of all sub-trades",
      "Council and consent liaison",
      "Health & safety compliance management",
      "Programme, budget and quality control",
    ],
  },
  {
    slug: "subdivision-management",
    title: "Subdivision Management",
    short: "Surveyors, sub-trades and council managed to compliance.",
    description:
      "Well-experienced in subdivision management — we manage the surveyors, sub-trades and council to make your subdivision compliant.",
    sectors: ["Surveyors", "Consents", "Compliance"],
    metaTitle: "Subdivision Management Auckland",
    metaDescription:
      "Experienced subdivision management in Auckland — we manage surveyors, sub-trades and council to make your subdivision compliant. Registered Master Builder since 1994.",
    intro: [
      "We are well-experienced in subdivision management — managing the surveyors, sub-trades and council required to make your subdivision compliant.",
      "From early planning through to sign-off, we keep the moving parts coordinated so your subdivision progresses smoothly.",
    ],
    includes: [
      "Surveyor and sub-trade coordination",
      "Council and consent management",
      "Compliance to sign-off",
      "Programme and cost oversight",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Commercial" | "Residential";
  location: string;
  /** Design/partner firm credit (architect, developer or property manager). */
  partner?: string;
  /** Fuller credit shown on the detail page when it differs from the card. */
  partnerFull?: string;
  summary: string;
  overview: string[];
  specification: string[];
  scope?: string[];
  /** Indicative value from Dave's profile — hidden unless SHOW_PROJECT_VALUES. */
  value?: string;
  hasVideo?: boolean;
  /** Real photography (from Dave's profile). Paths under /public. */
  hero: string;
  gallery: string[];
  metaTitle: string;
  metaDescription: string;
};

/** Flagship case studies — merged from Dave's 2026 profile + the existing site. */
export const projects: Project[] = [
  {
    slug: "urban-oasis-ponsonby",
    title: "Urban Oasis",
    category: "Residential",
    location: "Lincoln Street, Ponsonby",
    partner: "KOIA Architects",
    summary:
      "An alteration and reclad that grew into a full structural rebuild — bespoke joinery, Caesarstone and all-new flooring, elevating the heart of the home.",
    overview: [
      "This project blends luxury and functionality, creating a timeless space that's as beautiful as it is practical. What began as an alteration and reclad turned into a full refurbishment — a complete structural upgrade with both exterior and internal rebuild.",
      "Custom joinery runs throughout with Caesarstone and all-new flooring, elevating the heart of the home with bespoke craftsmanship. Elaborate detail inside and out required genuinely skilled workmanship, and the home is futureproofed with smart wiring throughout.",
    ],
    specification: [
      "Omega Construction removed all of the internal walls and strengthened the home with structural steel beams to create a large open-plan living space that extends the length of the structure.",
      "Only the highest-quality fittings were used and the home is fully automated, with extensive use of louvres to direct natural light — a high-quality-detail build where no expense was spared.",
    ],
    scope: [
      "Alteration to full refurbishment and structural upgrade",
      "Exterior and internal rebuild",
      "Custom joinery with Caesarstone and all-new flooring",
      "Futureproofed with smart wiring throughout",
    ],
    value: "$900,000",
    hero: "/projects/urban-oasis-ponsonby/hero.jpg",
    gallery: [
      "/projects/urban-oasis-ponsonby/1.jpg",
      "/projects/urban-oasis-ponsonby/front-of-house.jpg",
      "/projects/urban-oasis-ponsonby/master-bathroom.jpg",
    ],
    metaTitle: "Urban Oasis, Ponsonby | Architectural Home Rebuild",
    metaDescription:
      "A Lincoln Street, Ponsonby alteration and reclad that became a full structural rebuild — bespoke joinery, Caesarstone, smart wiring and open-plan living by Omega Construction.",
  },
  {
    slug: "andrew-baxter-drive",
    title: "Andrew Baxter Drive",
    category: "Commercial",
    location: "Māngere, near Auckland Airport",
    partner: "Integral Property Management",
    summary:
      "An old office and warehouse transformed into a vibrant workspace for a multinational tenant — new canopy, two-hour firewalls and full interior upgrade.",
    overview: [
      "We transformed this old office and warehouse structure into a vibrant workspace for a multinational tenant, located in an established commercial area close to Auckland International Airport.",
      "The office upgrade included new bathroom blocks on both levels, new staffroom and kitchen spaces, and new exterior windows, ceilings and flooring to finish the spaces — along with a new external canopy structure and firewall requirements.",
    ],
    specification: [
      "A new cantilevered exterior canopy was installed, and new two-hour exterior firewalls were built to meet the higher internal fire-rating requirements of the raking structure.",
    ],
    scope: [
      "Commercial refurbishment and building upgrade",
      "New cantilevered exterior canopy",
      "New two-hour exterior firewalls",
      "New bathrooms, staffroom, kitchen, windows, ceilings and flooring",
    ],
    value: "$1.2 million",
    hasVideo: true,
    hero: "/projects/andrew-baxter-drive/hero.jpg",
    gallery: [
      "/projects/andrew-baxter-drive/1.jpg",
      "/projects/andrew-baxter-drive/2.jpg",
      "/projects/andrew-baxter-drive/3.jpg",
    ],
    metaTitle: "Andrew Baxter Drive | Commercial Refurbishment Auckland",
    metaDescription:
      "An office and warehouse near Auckland Airport transformed into a vibrant workspace for a multinational tenant — cantilevered canopy, two-hour firewalls and full fit-out.",
  },
  {
    slug: "south-pacific-pictures",
    title: "South Pacific Pictures",
    category: "Commercial",
    location: "8 Tolich Place, Auckland",
    partner: "John Barnett",
    partnerFull: "John Barnett + Team Avery",
    summary:
      "A 400 m² open-plan administration floor built above an operating studio — a bright new space with exterior decks, delivered around a live production.",
    overview: [
      "South Pacific Pictures had outgrown their administration area and required new office space. SPP worked closely with Team Avery on the creation of this bright new open space, with exterior decks to enjoy on a sunny day.",
      "The result is a 400 m² space that blends functionality and style seamlessly with the other production offices and filming studios throughout the complex and creating a new entrance and reception area.",
    ],
    specification: [
      "The challenge was to complete the project while working around a live film set and busy production office. Production continued on the main level, with the studio directly adjacent, throughout the build.",
    ],
    scope: [
      "400 m² new administration offices above an existing working building",
      "New entrance and reception space",
      "Exterior decks",
      "Delivered around a live production",
    ],
    value: "$1.4 million",
    hero: "/projects/south-pacific-pictures/hero.jpg",
    gallery: [
      "/projects/south-pacific-pictures/1.jpg",
      "/projects/south-pacific-pictures/2.jpg",
      "/projects/south-pacific-pictures/3.jpg",
    ],
    metaTitle: "South Pacific Pictures | Commercial Office Build Auckland",
    metaDescription:
      "A 400 m² open-plan administration floor with exterior decks, built above an operating studio at South Pacific Pictures with Team Avery — delivered around a live production.",
  },
  {
    slug: "the-sentinel-takapuna",
    title: "Sentinel Tower",
    category: "Commercial",
    location: "Takapuna, Auckland",
    partner: "Team Avery Architects",
    summary:
      "A fourth-floor pool and exterior-living upgrade for the Sentinel Tower apartments — prefinished structural steel shelters and glass wind breaks, four levels up.",
    overview: [
      "Located in Takapuna, the Sentinel Tower apartments' exterior living space was upgraded for the enjoyment of the apartment owners. The work created four separate covered spaces for relaxing or entertaining, made from offsite prefabricated, prefinished structural steel members and onsite carpentry construction.",
      "New glass-wall edging was installed to protect the space from wind, four levels up.",
    ],
    specification: [
      "The fourth-floor communal area was open to the elements and prone to gale-force winds that made it unusable at times.",
      "Omega upgraded the structure and installed glass-panel wind breaks around the pool edging, with the sheltered structures built from prefinished structural steel.",
    ],
    scope: [
      "Fourth-floor pool and exterior living upgrade",
      "Exterior resting and entertaining shelters for owners",
      "Glass-panel wind breaks around the pool edging",
      "Prefinished, prefabricated structural steel",
    ],
    value: "$350,000",
    hero: "/projects/the-sentinel-takapuna/hero.jpg",
    gallery: [
      "/projects/the-sentinel-takapuna/1.jpg",
      "/projects/the-sentinel-takapuna/2.jpg",
      "/projects/the-sentinel-takapuna/bbq-courts.jpg",
    ],
    metaTitle: "Sentinel Tower, Takapuna | Exterior Living Upgrade",
    metaDescription:
      "A fourth-floor pool and exterior-living upgrade at Takapuna's Sentinel Tower — prefinished structural-steel shelters and glass wind breaks by Omega Construction.",
  },
  {
    slug: "owens-road-epsom",
    title: "Owens Road",
    category: "Residential",
    location: "Epsom, Auckland",
    partner: "Jessop Architects",
    summary:
      "An extensive renovation of an altered single-level home — structural upgrade of the lower level, a new deck and carport, and a reconfigured interior opening to outdoor living.",
    overview: [
      "Originally a single-level home that had been altered with various basement developments and extensions. Investigation on-site found a number of flaws to the exterior walls, and the basement floor was sitting directly on the ground.",
      "This extensive renovation now offers a seamless open space, with bifold doors and a large deck for outdoor living.",
    ],
    specification: [
      "Omega carried out a structural upgrade of the lower-level exterior walls and foundations, and added a new exterior deck with a semi-enclosed double carport below.",
      "The interior was reconfigured and upgraded throughout — kitchen, dining, bathrooms, bedroom and internal stairs.",
    ],
    scope: [
      "Structural upgrade of lower-level exterior walls and foundations",
      "New exterior deck with semi-enclosed double carport below",
      "Reconfigured kitchen, dining, bathrooms, bedroom and internal stairs",
      "Bifold doors opening to a large deck",
    ],
    value: "$900,000",
    hero: "/projects/owens-road-epsom/hero.jpg",
    gallery: [
      "/projects/owens-road-epsom/1.jpg",
      "/projects/owens-road-epsom/entrance.jpg",
      "/projects/owens-road-epsom/3.jpg",
    ],
    metaTitle: "Owens Road, Epsom | Home Renovation & Structural Upgrade",
    metaDescription:
      "An extensive Epsom renovation — structural upgrade of the lower level, a new deck and double carport, and a fully reconfigured interior opening to outdoor living.",
  },
  {
    slug: "patey-street",
    title: "Patey Street",
    category: "Residential",
    location: "Epsom, Auckland",
    partner: "Malcolm Walker Architects",
    summary:
      "Two new luxurious concrete townhouses in Epsom — four bedrooms, a curved internal stairwell and double internal garaging, built to the highest standard.",
    overview: [
      "Located in Epsom, we constructed a luxurious two-storey duplex which includes double garaging for both homes. This premium build offers spacious rooms and versatile living areas across multiple floors, meeting the highest standards of comfort and style.",
      "The original home on the property was a big part of the family history, so it was important to the owner that it remained intact. It was sold to a building-removals specialist and in 2015 relocated to a small town in the Waikato, where it remains today.",
    ],
    specification: [
      "Two new townhouses of solid concrete construction, including floors and walls, were built on the site.",
      "Each home features four bedrooms, 2.5 bathrooms, a double internal garage and a curved internal stairwell, finished with quality fittings and appliances.",
    ],
    scope: [
      "Two new concrete townhouses (floors and walls)",
      "Four bedrooms, 2.5 bathrooms, double internal garage",
      "Curved internal stairwell",
      "Quality fittings and appliances",
    ],
    value: "$2.4 million",
    hero: "/projects/patey-street/hero.jpg",
    gallery: [
      "/projects/patey-street/1.jpg",
      "/projects/patey-street/2.jpg",
      "/projects/patey-street/3.jpg",
    ],
    metaTitle: "Patey Street, Epsom | Concrete Townhouses Auckland",
    metaDescription:
      "Two luxurious concrete townhouses in Epsom — four bedrooms, curved internal stairwell and double garaging, built to the highest standard by Omega Construction.",
  },
];

/** Recent projects Dave supplied photos for — shown as a range strip until full write-ups arrive. */
export type RecentProject = {
  title: string;
  tag: string;
  location: string;
  brief: string;
  partner: string;
  /** Placeholder imagery for now — swap for real project photos later. */
  image: string;
};

export const recentProjects: RecentProject[] = [
  {
    title: "Mercure Hotel — Stage One",
    tag: "Commercial",
    location: "500 Queen Street, Auckland",
    brief: "Stage-one construction works at the Mercure Hotel on Queen Street.",
    partner: "Team Avery",
    image: "/projects/recent/mercure.jpg",
  },
  {
    title: "Warkworth Water Pump Station",
    tag: "Infrastructure",
    location: "Warkworth · for Watercare",
    brief: "A water pump station built for Watercare in Warkworth.",
    partner: "Q Designz Ltd",
    image: "/projects/recent/warkworth.jpg",
  },
  {
    title: "Sarsfield Road",
    tag: "Residential",
    location: "St Marys Bay, Auckland",
    brief: "An entrance project at Sarsfield Road, St Marys Bay.",
    partner: "Patterson Associates Ltd",
    image: "/projects/recent/sarsfield.jpg",
  },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  /** Optional hero/header image (path under /public). */
  image?: string;
  formats?: string[];
  description: string[];
  features: string[];
  usedBy?: string[];
  resources?: { label: string; href: string }[];
  metaTitle: string;
  metaDescription: string;
};

/** Sole NZ distributorships. */
export const products: Product[] = [
  {
    slug: "cem-gon",
    name: "Cem-Gon™",
    tagline: "Sole NZ distribution agent",
    image: "/products/cem-gon/hero.jpg", // placeholder image for now
    blurb:
      "A non-hazardous, naturally formulated system that removes concrete, slurry, mortar, grout and plaster splashes from a wide range of surfaces. Available in 500ml spray bottles and 5L containers.",
    formats: ["500ml spray bottle", "5L container"],
    description: [
      "Cem-Gon™ was developed to provide the cement industry with an easily applied system to remove cement splashes. It's your solution for the removal of concrete, slurry, mortar, grout and plaster splashes from architectural coatings, painted surfaces, glazing, anodised and powder-coated surfaces, ceramic tiles, stone, asphalt and stainless steel.",
      "Omega Construction (Auckland) Limited is the sole distribution agent for Cem-Gon™ to the cement industry in New Zealand.",
    ],
    features: [
      "Non-hazardous formula",
      "Natural and organic ingredients",
      "Removes concrete, slurry, mortar, grout and plaster",
      "Works across many common building surfaces",
    ],
    usedBy: ["Builders", "Plasterers", "Tile Layers", "Bricklayers", "Blocklayers"],
    resources: [
      { label: "Report A — Appraisal on effect on various substances", href: "#" },
      { label: "Report B — Test procedure CG-01 on material surfaces", href: "#" },
      { label: "Safety Data Sheet (SDS)", href: "#" },
    ],
    metaTitle: "Cem-Gon™ NZ | Concrete, Mortar & Grout Splash Remover",
    metaDescription:
      "Cem-Gon™ — a non-hazardous, naturally formulated remover of concrete, slurry, mortar, grout and plaster splashes. Sole NZ distributor Omega Construction. 500ml & 5L.",
  },
  {
    slug: "fab-form",
    name: "Fab-Form",
    tagline: "Sole NZ distributor",
    image: "/products/fab-form/hero.jpg",
    blurb:
      "Fab-Form Industries is a world leader in fabric forming, setting a higher standard in sustainable building. Made from a biodegradable fabric — fast, light, economic and green.",
    description: [
      "Omega Construction is the sole distributor of Fab-Form products in New Zealand. Fab-Form Industries is a world leader in fabric forming that is setting a higher standard in sustainable building.",
      "Made from a biodegradable fabric, Fab-Form is fast, light, economic and green — build green from the ground up.",
    ],
    features: [
      "Biodegradable fabric",
      "Fast and light to work with",
      "Economical",
      "Sustainable — build green from the ground up",
    ],
    metaTitle: "Fab-Form NZ | Sustainable Fabric Forming Systems",
    metaDescription:
      "Fab-Form — world-leading, biodegradable fabric forming for sustainable building. Sole New Zealand distributor: Omega Construction. Fast, light, economic and green.",
  },
];

/** Current openings — the old site advertised roles; keep it live-updatable. */
export const careers = {
  hiring: true,
  roles: ["Skilled Carpenters"],
} as const;
