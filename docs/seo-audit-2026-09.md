# SEO audit & work log — September 2026

Audit of omega-construction.co.nz on 17 Sep 2026, and the work done in
response. Kicks off the hosting + SEO retainer emailed to Dave on 14 Sep 2026.

## Brief (from the email thread with Dave)

- Positioning: "balanced for commercial and upper end residential" (22 Jul);
  "more keen to the commercial side of things" (7 Sep).
- Stated expertise: office, retail, mixed-use, seismic upgrades; hospitality &
  entertainment; education, healthcare, change-of-use.
- Committed deliverables (14 Sep): Google Search Console setup, location pages
  and content for local search.
- Dave never named target suburbs. Areas were derived from where Omega has
  actually built (Ponsonby, Epsom, St Marys Bay, Queen St, Takapuna,
  Henderson, Māngere/Airport, Warkworth) plus the Mt Eden base.

## Findings

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | Production 308-redirects bare domain → www, but `metadataBase`, every canonical, sitemap `<loc>`, robots `Host` and all schema URLs used the bare domain. Every canonical pointed at a redirect. | Critical | Fixed — `site.url` is now the single www origin |
| 2 | No `og:image` / Twitter card on any page | High | Fixed — site default + per-project/service/area images |
| 3 | Title template `%s \| Omega Construction Auckland` pushed most titles past 60 chars | Medium | Fixed — template shortened, page titles trimmed (all ≤ 62) |
| 4 | Organization schema only on home page, no logo / sameAs / address / email / areaServed / credentials | Medium | Fixed — Organization + WebSite graph in root layout |
| 5 | No FAQ content or FAQPage schema (AEO) | Medium | Fixed — FAQs on all 10 services and 10 area pages |
| 6 | No location pages | High | Fixed — `/areas` hub, 5 region + 5 suburb pages |
| 7 | Service coverage missed seismic, reclad, hospitality, education/healthcare (Dave's stated expertise) | High | Fixed — 4 new service pages |
| 8 | BreadcrumbList only on service/project pages | Low | Fixed — emitted from `PageHeader` on every page that uses it |
| 9 | Sitemap `lastmod` = build time on every URL | Low | Fixed — pinned `CONTENT_UPDATED` date; bump on real changes |
| 10 | Long meta descriptions (> 180 chars) on several pages | Low | Trimmed on new/area pages |
| 11 | Cem-Gon "resources" links (reports, SDS) point to `#` | Low | **Open** — need PDFs from Dave |
| 12 | `src/app/api/contact/route.ts` unreferenced since form moved to JXM Forms | Low | **Open** — delete; `/api/` now disallowed in robots |
| 13 | `Counter.tsx` setState-in-effect lint error (pre-existing) | Low | **Open** — not SEO |
| 14 | LinkedIn URL in `site.ts` still marked "verify" | Low | **Open** — confirm with Dave; it's now in `sameAs` |

## New URLs (all in sitemap)

Services: `/services/seismic-strengthening`, `/services/recladding-weathertightness`,
`/services/hospitality-fit-outs`, `/services/education-healthcare-construction`

Areas: `/areas`, `/areas/central-auckland`, `/areas/north-shore`,
`/areas/west-auckland`, `/areas/south-auckland`, `/areas/rodney-hibiscus-coast`,
`/areas/epsom`, `/areas/ponsonby`, `/areas/mt-eden`, `/areas/takapuna`,
`/areas/henderson`

## Not assessable from code (do after deploy)

- Google Search Console: verify `https://www.omega-construction.co.nz/`, submit
  `/sitemap.xml`, and request indexing of the new URLs.
- Google Business Profile: PO Box addresses can't be a GBP address. Confirm with
  Dave whether he wants a service-area business listing (hides address).
- Core Web Vitals: run PageSpeed Insights on `/`, a service page and an area page.
- Rich results: validate a service page and an area page at
  search.google.com/test/rich-results (FAQPage, BreadcrumbList, LocalBusiness).
- Backlinks: JXM Studio footer link exists; ask Dave for Master Builders and
  Site Safe directory listings pointing at the www URL.

## Next content round

- Full case studies for Mercure Hotel, Warkworth pump station and Sarsfield Road
  (currently "recent work" cards; they'd unlock Rodney and CBD area pages properly).
- Team photos / people pages for E-E-A-T once Dave sends them.
- Add an area when there's a new project to point at — see the header comment in
  `src/lib/areas.ts`.
