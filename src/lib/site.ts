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
  founder: "David Williams",
  founderCreds: "Registered Master Builder · Licensed Building Practitioner",
  domain: "omega-construction.co.nz",
  region: "Auckland",

  // Mobile / Dave — given in onboarding as the office + Dave contact.
  phone: "021 936 058",
  phoneHref: "tel:+6421936058",
  // Office landline from existing site — verify still active.
  officePhone: "09 815 2117",
  officePhoneHref: "tel:+6498152117",

  email: "dave@omega-construction.co.nz",
  emailSusan: "susan@omega-construction.co.nz",
  // Current address per Dave's onboarding.
  address: "PO Box 56-320, Dominion Road, Auckland 1446",
  linkedin: "https://www.linkedin.com/company/omega-construction-auckland", // verify exact URL
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Health & Safety", href: "/health-safety" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

/** Trust signals — surfaced everywhere (they were buried on the old site). */
export const credentials = [
  { label: "Registered Master Builder", note: "David Williams · 30+ years" },
  { label: "Licensed Building Practitioner", note: "LBP certified" },
  { label: "Site Safe member", note: "Site Smart H&S system" },
  { label: "SiteWise accredited", note: "Contractor prequalification" },
] as const;

export const stats = [
  { value: "30+", label: "Years building in Auckland" },
  { value: "1994", label: "Established" },
  { value: "Master", label: "Registered Master Builder" },
  { value: "Site Safe", label: "Certified & compliant" },
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
    sectors: ["Office", "Retail", "Mixed-use", "Seismic upgrades"],
    metaTitle: "Commercial Builder Auckland | Commercial Construction",
    metaDescription:
      "Auckland commercial construction — single & multi-storey new builds, structural work, renovations and seismic upgrades. Site Safe certified, Registered Master Builder since 1994.",
    intro: [
      "Omega Construction has delivered commercial construction across Auckland for three decades — single and multi-storey structures, new builds, renovations and seismic upgrades for office, retail and mixed-use spaces.",
      "For commercial clients comparing tenderers, our Site Safe membership, Site Smart H&S management and SiteWise accreditation aren't a footnote — they're the assurance your project runs safely, to programme and to code.",
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
      "From architecturally remodelled homes to new builds and multiple dwellings, Omega Construction brings a high-quality-detail approach to upper-end Auckland residential — work that has earned award-winning recognition.",
      "We remove internal walls and strengthen with structural steel, reclad and refurbish, and finish with only the highest-quality fittings — working alongside your architect to realise the design.",
    ],
    includes: [
      "New homes and multiple dwellings",
      "Architectural remodels and open-plan conversions",
      "Recladding and weathertightness remediation",
      "Extensions, alterations and full refurbishment",
      "Structural steel and high-detail finishing",
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
      "Backed by a Licensed Building Practitioner and 30+ years of experience, we take on the structural challenges other builders pass on — with the engineering and compliance handled end to end.",
    ],
    includes: [
      "Structural alterations and reconfiguration",
      "Extensions and additions",
      "Structural steel and strengthening",
      "Ongoing building maintenance",
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
  architect?: string;
  summary: string;
  overview: string[];
  specification: string[];
  metaTitle: string;
  metaDescription: string;
};

/** Real flagship case studies recovered from the existing site. */
export const projects: Project[] = [
  {
    slug: "urban-oasis-ponsonby",
    title: "Urban Oasis",
    category: "Residential",
    location: "78 Lincoln Street, Ponsonby",
    architect: "Koia Architects",
    summary:
      "Award-winning architectural reclad and refurbishment — internal walls removed and replaced with structural steel for full open-plan living, fully automated with the highest-quality fittings.",
    overview: [
      "This architecturally remodelled home was extensively reclad and refurbished using a palette of quality materials and excellence in construction detail to give cohesion to the whole. A glazed entrance gallery serves three downstairs bedrooms, with sliders offering the first connection to outdoor living.",
      "Upstairs is devoted to open-plan living with easy flow to generous alfresco living, including a built-in barbecue. The kitchen is a custom-designed showpiece, its bespoke island bench borrowing material from the feature front door, and the design culminates in a glazed office mezzanine nestled into the home's apex, skewered by a black steel beam.",
    ],
    specification: [
      "A high-quality-detail build where no expense was spared. Omega Construction removed all of the internal walls and strengthened the home with structural steel beams to create a large open-plan living space that extends the length of the structure.",
      "Only the highest-quality fittings were used and the home is fully automated, with extensive use of louvres to direct natural light — resulting in a phenomenal, award-winning refurbishment.",
    ],
    metaTitle: "Urban Oasis, Ponsonby | Architectural Home Remodel",
    metaDescription:
      "Award-winning architectural reclad and refurbishment in Ponsonby, Auckland — structural steel, open-plan living and full home automation by Omega Construction.",
  },
  {
    slug: "south-pacific-pictures",
    title: "South Pacific Pictures",
    category: "Commercial",
    location: "8 Tolich Place, Auckland",
    summary:
      "A new open-plan administration floor built above live ground-floor offices, with a bespoke steel staircase — delivered around an operating film set and busy studio.",
    overview: [
      "As a result of business expansion, South Pacific Pictures wanted to create a brand-new open-plan administration workspace on a new level above its original existing ground-floor offices.",
      "The modest entrance was professionally reconstructed to create a spacious feel to the reception area. A grand staircase — steel stringers holding concrete landings and treads in place — leads up to the new first-floor administration area, where large windows, sliding joinery and a roof deck at the rear transport the outside in.",
    ],
    specification: [
      "The challenge for Omega Construction was to complete the project while working around a live film set and busy administration office. Production was located on the main level while the studio was directly adjacent, with filming continuing throughout the build.",
    ],
    metaTitle: "South Pacific Pictures | Commercial Fit-Out Auckland",
    metaDescription:
      "A new open-plan administration floor with a bespoke steel staircase, built above live ground-floor offices at South Pacific Pictures — delivered around an operating film set.",
  },
  {
    slug: "the-sentinel-takapuna",
    title: "The Sentinel",
    category: "Commercial",
    location: "3–9 Northcroft Street, Takapuna",
    architect: "Avery Team Architects",
    summary:
      "Transformed the level-4 communal area of a 30-storey residential tower with sheltered spaces and structural glass wind barriers around the 25m heated swimming pool.",
    overview: [
      "The Sentinel Tower is a luxury residential skyscraper located on Auckland's North Shore. Omega Construction was tasked with transforming the outdoor communal area into a more practical and user-friendly environment.",
      "The result was the creation of enjoyable, sheltered spaces throughout the communal area and protective glass wind barriers surrounding the swimming pool.",
    ],
    specification: [
      "The communal area sits on level 4 of the 30-storey tower, open to the elements and prone to gale-force winds that previously made the space unpleasant and unusable at times.",
      "Omega upgraded the structure and replaced the glass surrounding the 25m x 6m heated swimming pool, architecturally securing the 2.2m-high glass screens to reinforced concrete panels.",
    ],
    metaTitle: "The Sentinel, Takapuna | Structural Glass & Communal Upgrade",
    metaDescription:
      "Transforming the level-4 communal area of a 30-storey Takapuna tower — sheltered spaces and structural glass wind barriers around a 25m heated pool, by Omega Construction.",
  },
  {
    slug: "patey-street",
    title: "Patey Street",
    category: "Residential",
    location: "8 & 8A Patey Street, Auckland",
    architect: "Malcolm Walker Architects",
    summary:
      "Two solid concrete, two-storey homes on a compact 660m² site — modern in style yet designed to sit within an established street, built to last the test of time.",
    overview: [
      "This development was the result of a simple brief from the owner to the architect: maximise the site with homes that are of high quality, that look good but are practical to live in.",
      "The original home on the property was a big part of the family history, so it was important to the owner that it remained intact. The home was sold to a building-removals specialist and in 2015 was relocated to a small town in the Waikato, where it remains today.",
    ],
    specification: [
      "These two, two-storey homes were constructed on a site measuring only 660m² overall. The structure of the homes is solid concrete, including all walls and floors.",
      "While a modern style, they fit effectively into the existing established street format. These solid homes were successfully completed to specification and will last the test of time.",
    ],
    metaTitle: "Patey Street | Solid Concrete Homes Auckland",
    metaDescription:
      "Two solid concrete, two-storey homes on a compact 660m² Auckland site — modern yet in keeping with an established street, built by Omega Construction.",
  },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
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
