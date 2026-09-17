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
  /** Canonical origin. Production 308-redirects the bare domain to www, so every
   *  canonical, sitemap entry and schema URL must use this host. */
  url: "https://www.omega-construction.co.nz",
  region: "Auckland",
  /** Where the business is based (PO Box; no street address is published). */
  suburb: "Mt Eden",
  postcode: "1446",
  /** Default social-share image (1400×1050). */
  ogImage: "/brand/about-hero.jpg",
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
  /** Positioning agreed with Dave: balanced commercial + upper-end residential,
   *  with commercial the preferred growth area (emails 22 Jul & 7 Sep 2026). */
  positioning:
    "Commercial construction and upper-end residential building across Auckland — office, retail, hospitality, education, healthcare, seismic upgrades and architectural homes.",
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
  { label: "Areas", href: "/areas" },
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
  /** Shown in the home-page services grid (the services index shows all). */
  featured?: boolean;
  /** Question/answer pairs rendered on the page and emitted as FAQPage schema. */
  faqs: Faq[];
};

export type Faq = { q: string; a: string };

export const services: Service[] = [
  {
    slug: "commercial-construction",
    featured: true,
    faqs: [
      {
        q: "Do you take on commercial tenders in Auckland?",
        a: "Yes. Omega Construction tenders for and negotiates commercial work across Auckland — office, retail, mixed-use and warehouse projects, from single-storey refurbishments to multi-storey structural work. We're a Registered Master Builder with Site Safe membership, $10 million public liability cover and a Site Smart H&S system, so our prequalification paperwork is ready for procurement teams.",
      },
      {
        q: "Can you work around a tenant or business that stays open during the build?",
        a: "Yes. Most of our commercial work is delivered inside operating buildings. At South Pacific Pictures we built a 400 m² administration floor above a working studio while production continued below, and at Andrew Baxter Drive we refurbished an office and warehouse for a multinational tenant. We stage work, isolate zones and programme noisy tasks to keep businesses trading.",
      },
      {
        q: "What size of commercial project do you typically deliver?",
        a: "Our recent commercial projects range from roughly $350,000 to $1.4 million — for example the Sentinel Tower pool-level upgrade in Takapuna and the South Pacific Pictures office build. We also take on smaller alterations and maintenance packages for property managers.",
      },
      {
        q: "Do you handle council consents and engineering for commercial work?",
        a: "Yes. We coordinate the engineers, surveyors and consultants your project needs, manage the building consent process with Auckland Council, and carry the health and safety compliance obligations through to Code Compliance Certificate.",
      },
    ],
    title: "Commercial Construction",
    short: "Single & multi-storey structural work, new builds and renovations.",
    description:
      "Single and multi-storey structure, new builds and renovations delivered to programme, with the health & safety systems commercial tenders demand — including seismic upgrading.",
    sectors: ["Office", "Retail", "Mixed-use", "Warehouse", "Seismic upgrades"],
    metaTitle: "Commercial Builder Auckland",
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
    featured: true,
    faqs: [
      {
        q: "What kind of homes does Omega Construction build and renovate?",
        a: "We focus on upper-end residential work in Auckland: architect-designed new homes, multiple-dwelling and townhouse projects, full structural remodels, recladding and extensions. Recent examples include two concrete townhouses on Patey Street in Epsom, a full structural rebuild on Lincoln Street in Ponsonby, and an extensive renovation on Owens Road in Epsom.",
      },
      {
        q: "Do you work with my architect or do you design as well?",
        a: "We build alongside your architect or designer. Omega has delivered projects with KOIA Architects, Jessop Architects, Malcolm Walker Architects, Team Avery and Patterson Associates, and we're comfortable joining early to advise on buildability, sequencing and cost.",
      },
      {
        q: "Are you a Registered Master Builder and can I get a Master Build guarantee?",
        a: "Yes. Omega Construction has been a Registered Master Builder for 35 years (MBA #1951) and David Williams is a Licensed Building Practitioner (LBP #102450). Master Build 10-Year Guarantee cover can be arranged for eligible new homes and renovations — ask us when you request a quote.",
      },
      {
        q: "How do you quote a renovation?",
        a: "David meets you on site, assesses the scope and consults trusted trades and suppliers before providing a detailed, obligation-free quote that is valid for 30 days and usually covers materials, labour and GST. For larger jobs you get weekly updates throughout the build.",
      },
    ],
    title: "Residential Building & Renovations",
    short: "New homes, architectural remodels, recladding and refurbishment.",
    description:
      "Upper-end residential building and renovation — new builds including multiple dwellings, architectural remodels, recladding, extensions and full refurbishment of existing homes.",
    sectors: ["New homes", "Multiple dwellings", "Recladding", "Extensions"],
    metaTitle: "Home Renovations & New Homes Auckland",
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
    featured: true,
    faqs: [
      {
        q: "Can you fit out an office while our staff keep working?",
        a: "Yes. Working within live, operating environments is one of our specialities. We stage the fit-out in zones, schedule noisy or dusty work outside your busy hours where possible, and keep fire egress and services running throughout.",
      },
      {
        q: "Do you do hospitality and entertainment fit-outs?",
        a: "Yes. Hospitality and entertainment projects are one of the sectors Omega Construction specialises in, alongside office, retail, education and healthcare fit-outs. See our dedicated hospitality fit-out page for detail.",
      },
      {
        q: "What is a change-of-use project and do you handle the consents?",
        a: "A change-of-use project converts a building from one use to another — for example a warehouse to offices or a retail unit to a clinic. These trigger additional Building Code requirements for fire, access and structure. We coordinate the consultants and manage the consent with Auckland Council as part of the fit-out.",
      },
    ],
    title: "Interior Fit-Outs & Refurbishment",
    short: "Commercial and residential fit-out of existing buildings.",
    description:
      "Transforming existing spaces — interior fit-out and refurbishment of existing buildings across commercial and residential, including change-of-use projects.",
    sectors: ["Commercial", "Hospitality", "Change-of-use"],
    metaTitle: "Commercial Fit-Outs Auckland",
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
    featured: true,
    faqs: [
      {
        q: "Do you take on structural alterations like removing load-bearing walls?",
        a: "Yes. Structural alterations are a core part of our work — removing internal walls and installing structural steel to open up living spaces, strengthening foundations and exterior walls, and reconfiguring existing buildings. Every structural change is engineered and consented.",
      },
      {
        q: "Do you do small jobs and building maintenance?",
        a: "Yes. Alongside larger projects we carry out alterations, extensions and ongoing maintenance for homeowners, body corporates and property managers across Auckland.",
      },
      {
        q: "Will you manage the building consent for my alteration?",
        a: "Yes. We handle engineering and consent coordination end to end, working with Auckland Council from application through to Code Compliance Certificate.",
      },
    ],
    title: "Alterations & Structural Work",
    short: "Alterations, extensions, maintenance and structural work.",
    description:
      "The 'you name it, we can build it' capability — alterations, extensions, maintenance and structural work across residential and commercial buildings.",
    sectors: ["Alterations", "Extensions", "Structural", "Maintenance"],
    metaTitle: "Alterations & Structural Work Auckland",
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
    featured: false,
    faqs: [
      {
        q: "What does construction project management from Omega include?",
        a: "We take a project from concept to completion: organising and managing every sub-trade, liaising with Auckland Council on consents, controlling programme, budget and quality, and carrying the health and safety compliance obligations on site.",
      },
      {
        q: "Do you provide weekly updates?",
        a: "Yes. Larger projects get formal weekly updates and smaller projects get regular check-ins, so you always know where the programme, budget and next decisions stand.",
      },
    ],
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
    featured: false,
    faqs: [
      {
        q: "What does subdivision management involve?",
        a: "Managing the surveyors, engineers, sub-trades and council process needed to make a subdivision compliant — from early planning and resource consent through to the Section 224(c) certificate that lets new titles issue.",
      },
      {
        q: "Can you also build the new dwellings on the subdivided site?",
        a: "Yes. Omega Construction has delivered multiple-dwelling residential projects, such as the two concrete townhouses on Patey Street in Epsom, so we can manage the subdivision and build the homes as one continuous project.",
      },
    ],
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
  {
    slug: "seismic-strengthening",
    title: "Seismic Strengthening & Upgrades",
    short: "Earthquake-prone building upgrades for commercial and multi-unit buildings.",
    description:
      "Seismic strengthening and structural upgrades for earthquake-prone commercial and multi-unit buildings across Auckland — engineered, consented and delivered around occupied buildings.",
    sectors: ["Earthquake-prone buildings", "Office", "Retail", "Body corporate"],
    metaTitle: "Seismic Strengthening Auckland",
    metaDescription:
      "Seismic strengthening and structural upgrades for earthquake-prone commercial and multi-unit buildings in Auckland — engineered, consented and staged around occupied buildings.",
    intro: [
      "If your building has been assessed as earthquake-prone, or your engineer has recommended strengthening to lift its %NBS rating, Omega Construction can deliver the structural works — steel portal frames and bracing, foundation and floor-diaphragm upgrades, wall ties and parapet restraints — as a Registered Master Builder with three decades of commercial structural experience in Auckland.",
      "Seismic work is rarely done in an empty building. We plan the strengthening in stages, protect tenants and trading operations, and coordinate the structural engineer, Auckland Council consent and any heritage or fire requirements so the upgrade is signed off cleanly.",
    ],
    includes: [
      "Strengthening to engineer's design — steel frames, bracing, diaphragm and foundation upgrades",
      "Unreinforced masonry (URM) wall ties and parapet restraints",
      "Staging around occupied offices, retail and residential units",
      "Building consent and Code Compliance Certificate coordination",
      "Combined seismic and refurbishment packages",
    ],
    relatedCategory: "Commercial",
    featured: true,
    faqs: [
      {
        q: "What is an earthquake-prone building and does it have to be strengthened?",
        a: "Under the Building (Earthquake-prone Buildings) Amendment Act, a building rated below 34% of the New Building Standard (NBS) is earthquake-prone. Auckland is a low seismic risk zone, so owners generally have 35 years from the notice date to strengthen or demolish — but tenants, insurers and buyers increasingly expect higher ratings sooner. We work to your engineer's design to bring the building above the threshold.",
      },
      {
        q: "Can seismic strengthening be done while the building is occupied?",
        a: "Usually, yes. We stage the works floor by floor or zone by zone, isolate the active area, and schedule noisy tasks around tenants' operations. We have delivered structural work inside operating offices, studios and apartment buildings across Auckland.",
      },
      {
        q: "Do you provide the engineering?",
        a: "We build to a chartered structural engineer's design. If you don't yet have an engineer or a Detailed Seismic Assessment (DSA), we can introduce engineers we work with regularly and coordinate the assessment, design and consent as one package.",
      },
      {
        q: "Is it worth combining seismic work with a refurbishment?",
        a: "Often, yes. Strengthening opens up walls, ceilings and floors anyway, so it's an efficient time to upgrade services, fire systems, bathrooms and finishes. We regularly price the combined scope so owners can compare options.",
      },
    ],
  },
  {
    slug: "recladding-weathertightness",
    title: "Recladding & Weathertightness Remediation",
    short: "Full reclads and targeted weathertightness repairs for Auckland homes.",
    description:
      "Recladding and weathertightness remediation for Auckland homes — from targeted repairs to full reclads with structural upgrades, delivered by a Registered Master Builder and Licensed Building Practitioner.",
    sectors: ["Full reclad", "Leaky home repair", "Cavity systems", "Structural upgrade"],
    metaTitle: "Recladding & Leaky Home Repairs Auckland",
    metaDescription:
      "Recladding and leaky-home remediation across Auckland — full reclads, drained cavities and structural repairs by a Registered Master Builder and Licensed Building Practitioner.",
    intro: [
      "Monolithic cladding, failed flashings and no drainage cavity have left many Auckland homes built between the late 1980s and mid-2000s with moisture damage. Omega Construction recladds these homes properly: strip the cladding, replace rotten framing, install a drained and ventilated cavity, and re-clad in the material and profile you and your architect choose.",
      "Recladding is also the moment to fix what else is wrong with the house. Our Urban Oasis project on Lincoln Street in Ponsonby began as an alteration and reclad and became a full structural rebuild with open-plan living, bespoke joinery and smart wiring — a good example of what's possible when the walls are open.",
    ],
    includes: [
      "Invasive moisture testing and scope with your building surveyor or architect",
      "Full reclad with drained cavity, new flashings and joinery",
      "Replacement of decayed framing and structural repairs",
      "Targeted weathertightness repairs where a full reclad isn't needed",
      "Building consent, council inspections and Code Compliance Certificate",
    ],
    relatedCategory: "Residential",
    featured: true,
    faqs: [
      {
        q: "How do I know if my house needs recladding?",
        a: "Warning signs include soft or stained plaster, cracked or bubbling monolithic cladding, swollen skirtings, musty smells and rust staining at fixings. The reliable answer comes from invasive moisture testing by a building surveyor, which we can arrange. If the framing is dry and the defects are localised, targeted repairs may be enough; widespread moisture usually means a full reclad.",
      },
      {
        q: "How long does a full reclad take?",
        a: "A typical Auckland reclad takes three to six months on site depending on the size of the home, the amount of framing to replace and whether the scope includes new joinery, decks or interior work. We give you a programme with the quote and weekly updates during the build.",
      },
      {
        q: "Can we live in the house during a reclad?",
        a: "Often, yes. We wrap and weatherproof the house in stages so it stays secure and dry. If the scope includes major interior work, structural changes or a roof replacement it may be more comfortable to move out for part of the programme — we'll tell you upfront.",
      },
      {
        q: "Do you need a building consent to reclad?",
        a: "Yes. Recladding is restricted building work under the Building Act and needs a building consent and a Licensed Building Practitioner. David Williams is an LBP (#102450), and we manage the consent, inspections and Code Compliance Certificate with Auckland Council.",
      },
    ],
  },
  {
    slug: "hospitality-fit-outs",
    title: "Hospitality & Entertainment Fit-Outs",
    short: "Restaurants, bars, hotels and entertainment venues, built around trading.",
    description:
      "Hospitality and entertainment construction across Auckland — restaurant, bar, café, hotel and venue fit-outs and refurbishments, delivered to programme and staged around trading.",
    sectors: ["Restaurants & bars", "Hotels", "Cafés", "Entertainment venues"],
    metaTitle: "Hospitality Fit-Outs Auckland",
    metaDescription:
      "Restaurant, bar, café, hotel and venue fit-outs across Auckland, staged around trading. Stage-one works at the Mercure Hotel, Queen Street. Registered Master Builder since 1994.",
    intro: [
      "Hospitality projects run on opening dates. Omega Construction delivers restaurant, bar, café, hotel and entertainment-venue fit-outs across Auckland to a fixed programme — coordinating kitchen and bar services, fire and acoustic requirements, and the joinery and finishes that define the venue.",
      "We understand trading buildings. Our stage-one works at the Mercure Hotel on Queen Street, and years of fit-outs inside operating offices and studios, mean we can isolate the work zone, protect guests and staff, and phase noisy tasks so the business keeps running.",
    ],
    includes: [
      "Restaurant, bar and café fit-outs and refurbishments",
      "Hotel guest-room, lobby and back-of-house upgrades",
      "Commercial kitchen and bar services coordination",
      "Fire, acoustic and accessibility compliance for licensed premises",
      "Staged programmes around trading hours",
    ],
    relatedCategory: "Commercial",
    featured: true,
    faqs: [
      {
        q: "Can you fit out a restaurant or bar on a fixed opening date?",
        a: "Yes. We build a programme back from your opening date, lock in long-lead items such as kitchen equipment and joinery early, and run weekly programme reviews so any risk to the date is visible weeks out, not days.",
      },
      {
        q: "Do you handle the consents for a change of use to hospitality?",
        a: "Yes. Converting retail or office space to a licensed hospitality venue triggers fire, accessibility, ventilation and sometimes structural requirements. We coordinate the consultants and manage the building consent with Auckland Council as part of the fit-out.",
      },
      {
        q: "Can you work in a hotel or venue that stays open?",
        a: "Yes. We deliver work in trading hotels and venues by isolating the work zone, controlling noise and dust, and scheduling around check-in times and events — as we did on the stage-one works at the Mercure Hotel on Queen Street.",
      },
    ],
  },
  {
    slug: "education-healthcare-construction",
    title: "Education & Healthcare Construction",
    short: "Schools, campuses, clinics and medical suites, built to sector standards.",
    description:
      "Construction for education and healthcare facilities across Auckland — school and campus refurbishments, new teaching spaces, clinics and medical fit-outs, delivered safely around students, patients and staff.",
    sectors: ["Schools & campuses", "Clinics & medical suites", "Change-of-use", "Refurbishment"],
    metaTitle: "Education & Healthcare Builders Auckland",
    metaDescription:
      "School, campus, clinic and medical-suite construction in Auckland. Site Safe member with a zero reportable-accident record, delivering safely around students and patients.",
    intro: [
      "Education and healthcare are specialist sectors for Omega Construction. Schools, tertiary campuses, clinics and medical suites carry their own standards — infection control, accessibility, acoustic separation, secure site boundaries around students and patients — and we plan every project around them.",
      "Our long relationship with the education sector includes work for the Auckland University Students' Association, delivered on time after a late start. Combined with a Site Safe membership, Site Smart H&S management and zero reportable workplace accidents, it's the assurance boards, facilities managers and practice owners look for.",
    ],
    includes: [
      "School and campus refurbishments and new teaching spaces",
      "Medical, dental and allied-health clinic fit-outs",
      "Change-of-use conversions to education or healthcare",
      "Secure, staged programmes around term dates and clinic hours",
      "Accessibility, acoustic and infection-control detailing",
    ],
    relatedCategory: "Commercial",
    featured: false,
    faqs: [
      {
        q: "Can you build during school terms or do you need the holidays?",
        a: "Both. We programme disruptive work — demolition, structural changes, roofing — into term breaks where possible, and deliver the rest behind secure hoardings with separate site access during term. Every worker on our sites is Site Safe inducted.",
      },
      {
        q: "Do you fit out medical and dental clinics?",
        a: "Yes. We deliver clinic and medical-suite fit-outs including consulting rooms, treatment areas, reception and back-of-house, coordinating medical gas, plumbing, HVAC and the wipe-down finishes infection control requires.",
      },
      {
        q: "What health and safety systems do you run on education and healthcare sites?",
        a: "Omega Construction is a Site Safe member and runs Site Smart, a cloud-based H&S management system, on every job. We hold $10 million public liability insurance and have a zero reportable workplace accident record.",
      },
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
    metaTitle: "Urban Oasis, Ponsonby | Home Rebuild",
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
    metaTitle: "Andrew Baxter Drive | Commercial Refurb",
    metaDescription:
      "An office and warehouse near Auckland Airport transformed into a vibrant workspace for a multinational tenant — cantilevered canopy, two-hour firewalls and full fit-out.",
  },
  {
    slug: "south-pacific-pictures",
    title: "South Pacific Pictures",
    category: "Commercial",
    location: "Tolich Place, Henderson",
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
    metaTitle: "South Pacific Pictures | Office Build",
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
    metaTitle: "Sentinel Tower, Takapuna | Pool Level",
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
    metaTitle: "Owens Road, Epsom | Home Renovation",
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
    metaTitle: "Patey Street, Epsom | Concrete Townhouses",
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
    image: "/products/cem-gon/hero.jpg",
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
    metaTitle: "Cem-Gon™ NZ | Concrete Splash Remover",
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
    metaTitle: "Fab-Form NZ | Fabric Forming Systems",
    metaDescription:
      "Fab-Form — world-leading, biodegradable fabric forming for sustainable building. Sole New Zealand distributor: Omega Construction. Fast, light, economic and green.",
  },
];

/**
 * Client references — six written reference letters supplied by Dave.
 * Add `quote` + `author` once the letters are transcribed into pull-quotes.
 */
export type Reference = {
  org: string;
  quote?: string;
  author?: string;
};

export const references: Reference[] = [
  {
    org: "Auckland University Students' Association",
    author: "Raewyn Chojnacki",
    quote:
      "Even though we started three days late, the job was completed on time in an extremely professional manner. It was great working with you and the boys, and I will certainly put any work I can your way.",
  },
  {
    org: "Metropolitan Rentals Ltd",
    author: "Richard Langridge, Managing Director",
    quote:
      "He is extremely capable, has a good standard of work and projects are completed on time. I have no hesitation in recommending him as a competent and capable builder.",
  },
  {
    org: "Keith Hay Group",
    author: "Phil M. Lewis, Commercial Leasing & Property Manager",
    quote:
      "You and your staff completed this project in sometimes difficult weather and conditions, working around our tenant's daily business movements. We are very happy with the final building.",
  },
  {
    org: "Auto Clutch Ltd",
    author: "Raywn McCall",
    quote:
      "At all times I found him totally trustworthy and responsible. His workmanship is excellent and I would not hesitate to recommend him wholeheartedly.",
  },
  {
    org: "Hardcastle Electronics Ltd",
    author: "John Hardcastle, Managing Director",
    quote:
      "We are delighted with the appearance of his work and how well it blends with the original dwelling. He is evidently a very competent builder, very hard-working, cheerful and tidy.",
  },
  {
    org: "D. M. Marsden",
    author: "Private residence, Greenlane",
    quote:
      "I have no hesitation whatsoever in recommending David as a highly skilled builder with a totally disciplined approach. I have been totally satisfied with all aspects of the work.",
  },
];

/** Current openings — the old site advertised roles; keep it live-updatable. */
export const careers = {
  hiring: true,
  roles: ["Skilled Carpenters"],
} as const;
