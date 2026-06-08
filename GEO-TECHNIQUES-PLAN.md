# GEO Techniques — Feasibility & Implementation Logic

**Purpose:** Decide which GEO techniques from `GEO-AUDIT-GRADE.md` are practical for this static clone, which require new page types (currently score **very low**), and how each should plug into the existing UI without breaking `DESIGN-STYLE.md`.

**Design rule:** All GEO additions use existing tokens — brand green `#5a827e`, pill buttons `#84ae92`, Inter, 18px card radius, section padding 72px. New patterns are documented in `DESIGN-STYLE.md` under **GEO UI components**.

---

## Summary matrix

| Verdict | Count | Meaning |
|---------|-------|---------|
| **Implement now (homepage + files)** | 16 | Fits single-page or small multi-page static build |
| **Implement as dedicated pages** | 5 | Needs new URLs — low score today, high payoff |
| **Deferred / needs real data** | 6 | Cannot fake without client input |
| **Not feasible (this stack)** | 3 | Requires CMS, backend, or third-party APIs |

---

## Tier 1 — Implement now (easy + high impact)

These integrate directly into the homepage or root files. **Not impossible.** Already in P0–P1/P3 pass.

| Technique | Why it works | UI integration |
|-----------|--------------|----------------|
| Remove Live Your Best Life hero | Live site doesn’t use it; fixes H1 | Delete section; Performance Medicine = sole H1 |
| Remove placeholder testimonial | Fake quote hurts trust | Remove block (real reviews need client data) |
| NAP in footer | Static text | Footer contact column — email + region |
| Blog image alt text | HTML attribute | Descriptive `alt` on each card |
| Organization + Physician JSON-LD | `<script type="application/ld+json">` | In `<head>`, invisible |
| FAQPage schema on FAQ page | Same | On `faq.html` only |
| Homepage TL;DR box | One component | `.geo-tldr` below hero subtitle |
| Answer Capsules (6×) | Card grid | Reuse `.why-card` / new `.geo-capsule` |
| 7th-grade copy rewrite | Text only | Shorter sentences, inline `<dfn>` jargon |
| Bullets & numbered lists | Already partial | Add “How to get started” steps |
| Membership comparison table | HTML `<table>` | `.geo-table` in membership section |
| Pros/cons block | Two-column list | `.geo-pros-cons` before consult |
| Internal links | `<a href>` | Footer + TL;DR links to FAQ, pricing, compare |
| `robots.txt` | Root file | Allow GPTBot, ClaudeBot, Google, Bing |
| `sitemap.xml` | Root file | List all HTML pages |
| `llms.txt` | Root file | Site summary for LLM crawlers |

---

## Tier 2 — Dedicated pages (were “very low” — obvious gaps)

These are why **Specific Page Types scored 10/100**. They **need their own URLs** but are fully feasible as static HTML using the same CSS.

| Page | File | GEO role | UI pattern |
|------|------|----------|------------|
| FAQ | `faq.html` | FAQ schema, long-tail Q&A | Page hero + accordion/list |
| Testimonials | `testimonials.html` | Review trust (structure ready) | Card grid; placeholder until real reviews |
| Pricing | `pricing.html` | BOFU transparency | Table + “included in membership” |
| Comparison | `compare.html` | vs PCP / concierge models | Comparison table |
| Best Fit Brief ×3 | `best-fit-*.html` | “Best [doctor] for [situation]” | Page hero + Answer Capsule + CTA |

**Logical order:** FAQ and Pricing first (highest query volume), then Compare, then Best Fit briefs, then Testimonials when real quotes exist.

---

## Tier 3 — Deferred (needs client / external data)

Do **not** fake these. Implement shell UI only where noted.

| Technique | Blocker | Interim approach |
|-----------|---------|------------------|
| Real client success stories | No approved patient stories | Testimonials page with “Share your story” CTA |
| Google/Yelp review embed | No API keys / widget ID | Link out + schema when IDs available |
| Exact membership pricing | Not public on live site | “Discussed at complimentary consult” on pricing page |
| Awards & board cert badges | Need official assets/copy | Text line: “Board-certified physician” |
| Full blog hosting (P2 #15) | 10+ articles, CMS-scale | Keep external links + alt text + ItemList schema |
| GBP/Yelp NAP exact match | No published street address on live site | Email + region only until client confirms |

---

## Tier 4 — Not feasible on static clone alone

| Technique | Why |
|-----------|-----|
| Live Google Reviews sync | Requires Google Places API or embed widget + IDs |
| Dynamic CMS blog | Would need WordPress/Sanity/etc. |
| Server-side form beyond FormSubmit | Needs backend; FormSubmit.co is the static compromise |

---

## Logical integration map (homepage)

GEO belongs where a real visitor would expect the information — not as labeled blocks under the hero.

```
[Header]
[Hero — Performance Medicine only; no TL;DR box]
[Guide card]
[About — credentials + what Dr. Zaidi does in plain prose]
[Services — terms explained inline with em dashes]
[Outsmart Chronic Disease]
[Membership — list + one-line link to FAQ/pricing]
[Why Choose]
[Blog preview → local blog.html + post pages]
[Know Your Numbers]
[Consult form — brief “what happens next” intro]
[Footer — contact + Learn More links]
```

**Dedicated pages** (FAQ, membership overview, compare, best-fit guides, blog) carry depth. **Invisible** (schema, robots, sitemap, llms) stays in head/files.

**Removed from homepage** (felt like AI slop): TL;DR box, Answer Capsules grid, pros/cons section, numbered steps section, duplicate membership table.

---

## Priority mapping (P0 → P3)

| Priority | Items | Status in pass |
|----------|-------|----------------|
| **P0** | Remove LYBL, remove fake testimonial, NAP, alt text, JSON-LD | ✅ Done |
| **P1** | TL;DR, capsules, FAQ page, robots/sitemap/llms, 7th-grade copy | ✅ Done |
| **P2** | Testimonials, pricing, compare, 3 best-fit pages; blog local | ✅ Pages done; blog stays external |
| **P3** | Membership table, pros/cons, steps, credentials line, perf hints | ✅ Done |

---

## What we are NOT doing in this pass

1. Hosting full blog articles locally (P2 #15) — scope too large; external links remain  
2. Inventing phone number or street address  
3. Fabricating named patient testimonials  
4. Google Reviews live widget  

---

## Maintenance

When client provides: real reviews → `testimonials.html`; exact pricing → `pricing.html`; full address → footer NAP + LocalBusiness schema; board cert image → credentials row.

**Design reference:** `DESIGN-STYLE.md` (updated with GEO components)  
**Audit reference:** `GEO-AUDIT-GRADE.md`
