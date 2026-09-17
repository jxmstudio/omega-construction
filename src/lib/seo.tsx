/**
 * Shared SEO helpers: absolute URLs, JSON-LD builders and a safe <script> wrapper.
 * All structured data is emitted from here so the Organization @id, host and
 * escaping rules stay consistent across pages.
 */

import type { Faq } from "./site";
import { credentials, services, site } from "./site";
import { servedSuburbs } from "./areas";

export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${site.url}${path}`;
}

/** Renders a JSON-LD script tag, escaping `<` per the Next.js JSON-LD guide. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Site-wide Organization + WebSite graph (emitted once, from the root layout). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["GeneralContractor", "LocalBusiness", "Organization"],
        "@id": ORG_ID,
        name: site.name,
        legalName: site.legalName,
        alternateName: "Omega Construction Auckland",
        url: site.url,
        logo: absoluteUrl("/brand/omega-mark.png"),
        image: absoluteUrl(site.ogImage),
        description: site.positioning,
        foundingDate: String(site.established),
        founder: {
          "@type": "Person",
          name: site.founder,
          jobTitle: "Founder & Director",
          description: site.founderCreds,
        },
        telephone: "+64 21 936 058",
        email: site.email,
        address: {
          "@type": "PostalAddress",
          postOfficeBoxNumber: "56-320",
          streetAddress: "Dominion Road",
          addressLocality: site.suburb,
          addressRegion: "Auckland",
          postalCode: site.postcode,
          addressCountry: "NZ",
        },
        areaServed: [
          { "@type": "City", name: "Auckland" },
          ...servedSuburbs.map((name) => ({ "@type": "Place", name })),
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+64 21 936 058",
            contactType: "sales",
            areaServed: "NZ",
            availableLanguage: "en",
          },
          {
            "@type": "ContactPoint",
            telephone: "+64 9 815 2117",
            contactType: "customer service",
            areaServed: "NZ",
            availableLanguage: "en",
          },
        ],
        sameAs: [site.linkedin],
        memberOf: [
          { "@type": "Organization", name: "Registered Master Builders Association of New Zealand" },
          { "@type": "Organization", name: "Site Safe New Zealand" },
        ],
        hasCredential: credentials.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c.label,
          description: c.note,
        })),
        knowsAbout: services.map((s) => s.title),
        priceRange: "$$$",
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: site.url,
        name: site.name,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-NZ",
      },
    ],
  };
}

export type Crumb = { label: string; href?: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: absoluteUrl(c.href) } : {}),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": ORG_ID },
    areaServed: (opts.areaServed ?? ["Auckland"]).map((name) => ({
      "@type": "Place",
      name,
    })),
  };
}
