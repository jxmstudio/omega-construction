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
};

export const services: Service[] = [
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    short: "Single & multi-storey structural work, new builds and renovations.",
    description:
      "Single and multi-storey structure, new builds and renovations delivered to programme, with the health & safety systems commercial tenders demand — including seismic upgrading.",
    sectors: ["Office", "Retail", "Mixed-use", "Seismic upgrades"],
  },
  {
    slug: "residential-building-renovations",
    title: "Residential Building & Renovations",
    short: "New homes, architectural remodels, recladding and refurbishment.",
    description:
      "Upper-end residential building and renovation — new builds including multiple dwellings, architectural remodels, recladding, extensions and full refurbishment of existing homes.",
    sectors: ["New homes", "Multiple dwellings", "Recladding", "Extensions"],
  },
  {
    slug: "interior-fit-outs-refurbishment",
    title: "Interior Fit-Outs & Refurbishment",
    short: "Commercial and residential fit-out of existing buildings.",
    description:
      "Transforming existing spaces — interior fit-out and refurbishment of existing buildings across commercial and residential, including change-of-use projects.",
    sectors: ["Commercial", "Hospitality", "Change-of-use"],
  },
  {
    slug: "alterations-structural-work",
    title: "Alterations & Structural Work",
    short: "Alterations, extensions, maintenance and structural work.",
    description:
      "The 'you name it, we can build it' capability — alterations, extensions, maintenance and structural work across residential and commercial buildings.",
    sectors: ["Alterations", "Extensions", "Structural", "Maintenance"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    short: "Concept to completion, with every sub-trade and consent handled.",
    description:
      "We take your project from concept through to completion — organising and managing all sub-trades, working with council, and handling every health & safety compliance obligation.",
    sectors: ["Sub-trade coordination", "Council liaison", "H&S compliance"],
  },
  {
    slug: "subdivision-management",
    title: "Subdivision Management",
    short: "Surveyors, sub-trades and council managed to compliance.",
    description:
      "Well-experienced in subdivision management — we manage the surveyors, sub-trades and council to make your subdivision compliant.",
    sectors: ["Surveyors", "Consents", "Compliance"],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Commercial" | "Residential";
  location: string;
  architect?: string;
  summary: string;
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
  },
  {
    slug: "south-pacific-pictures",
    title: "South Pacific Pictures",
    category: "Commercial",
    location: "8 Tolich Place, Auckland",
    summary:
      "A new open-plan administration floor built above live ground-floor offices, with a bespoke steel staircase — delivered around an operating film set and busy studio.",
  },
  {
    slug: "the-sentinel-takapuna",
    title: "The Sentinel",
    category: "Commercial",
    location: "3–9 Northcroft Street, Takapuna",
    architect: "Avery Team Architects",
    summary:
      "Transformed the level-4 communal area of a 30-storey residential tower with sheltered spaces and structural glass wind barriers around the 25m heated swimming pool.",
  },
  {
    slug: "patey-street",
    title: "Patey Street",
    category: "Residential",
    location: "8 & 8A Patey Street, Auckland",
    architect: "Malcolm Walker Architects",
    summary:
      "Two solid concrete, two-storey homes on a compact 660m² site — modern in style yet designed to sit within an established street, built to last the test of time.",
  },
];

/** Sole NZ distributorships. */
export const products = [
  {
    slug: "cem-gon",
    name: "Cem-Gon™",
    tagline: "Sole NZ distribution agent",
    blurb:
      "A non-hazardous, naturally formulated system that removes concrete, slurry, mortar, grout and plaster splashes from a wide range of surfaces. Available in 500ml spray bottles and 5L containers, with test reports and safety data available.",
  },
  {
    slug: "fab-form",
    name: "Fab-Form",
    tagline: "Sole NZ distributor",
    blurb:
      "Fab-Form Industries is a world leader in fabric forming, setting a higher standard in sustainable building. Made from a biodegradable fabric, it's fast, light, economic and green — build green from the ground up.",
  },
];

/** Current openings — the old site advertised roles; keep it live-updatable. */
export const careers = {
  hiring: true,
  roles: ["Skilled Carpenters"],
} as const;
