# GEO Audit Grade — Ali Zaidi MD (Local Clone)

**Site audited:** Local clone (`index.html` single-page build)  
**Reference live site:** [alizaidimd.com](https://www.alizaidimd.com/)  
**Audit date:** June 8, 2026  
**Scope:** Generative Engine Optimization (GEO) — content, structure, technical, trust  
**Code changes:** None (assessment only)

---

## Overall grade: **D+ (42 / 100)**

The clone is a strong **visual** match to the live Wix site but a weak **GEO** asset. It reads well to humans scanning a brochure page; it is not yet structured for AI search engines, answer engines, or bottom-of-funnel query capture.

| Category | Weight | Score | Grade |
|----------|--------|-------|-------|
| 1. Content Writing & Style | 20% | 38/100 | D |
| 2. Content Substance | 20% | 28/100 | F |
| 3. Content Structure & Formatting | 15% | 45/100 | D |
| 4. Specific Page Types | 15% | 10/100 | F |
| 5. Technical & Schema | 15% | 35/100 | D |
| 6. Trust & Brand Signals | 15% | 55/100 | C- |

---

## Critical fix (not on live site)

| Issue | Impact | Action |
|-------|--------|--------|
| **"Live Your Best Life" hero section** (`#hero-slideshow`) | High | **Remove.** This section is not on the current live alizaidimd.com homepage. It creates a duplicate value proposition, an extra H1, and misaligns the clone with the real brand entry point ("Performance Medicine"). Nav/footer Home links point here — should point to `#hero` after removal. |

---

## 1. Content Writing & Style — **38/100 (D)**

| Criterion | Grade | Findings |
|-----------|-------|----------|
| Conversational tone, ~7th-grade reading level | **D** | Copy is warm but reads at roughly **10th–12th grade**. Words like "personalized," "diagnostics," "comprehensive," and "metabolic" are used without plain-language definitions. |
| Direct and concise — answer immediately | **C-** | Taglines are short, but sections open with context-setting ("I am passionate about…") rather than direct answers. No page-level summary of *what Dr. Zaidi does* in the first 50 words. |
| Authoritative, confident voice | **B** | Credentials (Stanford, UCSF, Penn) and first-person physician voice build authority. Tone is confident without being arrogant. |
| Neutral language — no promotional bias; define jargon | **D** | Phrases like "live your best life," "outsmart chronic disease," and "thrive" are marketing-forward. Technical terms (DEXA, VO₂ max, CGM, LDL) appear **without definitions**. |
| Fluency and readability | **B-** | Sentences flow well. Paragraphs in About are appropriate length. Good use of em dashes and natural phrasing. |
| Domain-specific technical terms where appropriate | **B** | Correct use of longevity/performance medicine vocabulary (biomarkers, healthspan, body composition). Terms are present but not explained for lay readers or AI extractors. |
| Self-contained content | **D** | Blog cards link **out** to alizaidimd.com — core article content is not on this site. Biomarker guide is gated behind a form with no on-page summary of the 11 markers. Reader/AI must leave the page for depth. |
| Conclusion-first structure | **F** | No section leads with the takeaway. About opens with passion statement; Services opens with category labels; homepage never states: *"Dr. Ali Zaidi is a performance medicine physician who uses advanced labs and lifestyle coaching to prevent diabetes, heart disease, and dementia."* |

**Top gaps:** Rewrite homepage copy at lower reading level; add a 2–3 sentence conclusion-first blurb above the fold; define jargon inline.

---

## 2. Content Substance — **28/100 (F)**

| Criterion | Grade | Findings |
|-----------|-------|----------|
| Client success stories & real-world examples | **F** | Testimonial block uses **placeholder copy** ("This is the space to share a review…") attributed to "River Watts." No real patient outcomes, case studies, or named results. |
| Topical depth — full question spectrum | **F** | Single landing page covers services at headline level only. Missing depth on: who qualifies, cost, geography, insurance, visit frequency, what happens at first consult, how performance medicine differs from concierge/functional medicine, etc. |
| FAQ coverage | **F** | No FAQ section or page. Common queries ("Does Dr. Zaidi take insurance?", "What is a DEXA scan?", "How is this different from my PCP?") are unanswered on-site. |
| Long-tail / bottom-of-funnel content | **F** | No dedicated pages for high-intent queries (e.g. "best longevity doctor for pre-diabetes," "DEXA scan + physician coaching program"). Blog previews exist but full articles live elsewhere. |

**Top gaps:** Replace placeholder testimonial; add 5–10 real success snippets; build FAQ and 3–5 depth pages.

---

## 3. Content Structure & Formatting — **45/100 (D)**

| Criterion | Grade | Findings |
|-----------|-------|----------|
| Clear H1/H2/H3 hierarchy | **C+** | **Problem:** Two top-level headings compete — H1 "Live Your Best Life" and H2 "Performance Medicine" (should be single H1 after fix). Otherwise H2s for major sections (About, Services, Membership, Blog) are present. Service columns use H4 (acceptable). |
| TL;DR / key takeaways box | **F** | None on homepage or any section. |
| Answer Capsules (60–100 word standalone passages) | **F** | No passage is written as a self-contained, extractable answer to a specific query. Closest: Why Choose cards (~25 words each) — too short. |
| Bullet points & numbered lists | **B** | Services, membership, and biomarker checklist use bullets well. No numbered how-to steps (e.g. "How to join: 1… 2… 3…"). |
| Tables (specs, features, pricing, comparisons) | **F** | No tables anywhere. Membership benefits would suit a comparison table (included vs. not included). |
| Pros/cons lists | **F** | None. Would help for "Is performance medicine right for me?" |
| Explicit value propositions ("best for X because Y") | **D** | Why Choose section implies value but never states "Best for [pre-diabetics / executives / family history of heart disease] because [specific reason]." |

**Top gaps:** Add homepage TL;DR box; write 4–6 Answer Capsules under Services and About; add membership comparison table.

---

## 4. Specific Page Types to Create — **10/100 (F)**

| Page type | Exists? | Grade | Notes |
|-----------|---------|-------|-------|
| FAQ page | No | **F** | — |
| Testimonials page | No | **F** | Single placeholder quote only |
| Pricing / membership cost page | No | **F** | Membership benefits listed; **no pricing** |
| Comparison vs. competitors | No | **F** | No "vs. traditional primary care / One Medical / Forward / function health" content |
| Best Fit Briefs | No | **F** | No "Who's the best longevity doctor for [situation]?" pages |
| Long-tail BOFU content (4+ keyword queries) | No | **F** | Blog titles are linked externally; no local long-form pages |

**Current site architecture:** 1 HTML page + external blog links. GEO requires a **content hub**, not a brochure.

---

## 5. Technical & Schema — **35/100 (D)**

| Criterion | Grade | Findings |
|-----------|-------|----------|
| Schema markup (Organization, Article, FAQ, HowTo, Product, Review) | **F** | **No JSON-LD** of any kind. Missing Organization/Physician, MedicalBusiness, FAQPage, Review, and Article schema. |
| Schema matches visible content | **N/A** | Nothing implemented |
| Important content in raw HTML (not JS/images) | **B+** | Body copy is in static HTML. Forms use JS for submit only — labels and fields are in HTML. Blog titles visible in HTML. |
| Descriptive alt text on all images | **D** | About, chronic callout, consult: good alt text. **All 10 blog card images use `alt=""` (empty).** Why Choose icons use empty alt (decorative — acceptable if aria-hidden). |
| robots.txt allows AI/c search crawlers | **F** | **No `robots.txt`** file in project |
| Sitemap / no broken redirects | **F** | **No `sitemap.xml`**. Single-page site only. |
| Page load speed | **B-** | Static HTML, minimal JS, lazy loading on images. External Wix CDN images add latency; no local asset optimization. No measured Core Web Vitals in audit. |
| Clear site hierarchy | **D** | Flat single page — no `/about`, `/services`, `/faq` URL structure for crawlers to prioritize |
| Descriptive internal links | **C-** | Anchor links to sections only. No internal links to depth pages (they don't exist). Blog links are **external**. |
| LLMs.txt | **F** | **Not present** |

**Top gaps:** Add Organization + Physician + FAQ schema; create robots.txt and sitemap.xml; fix blog alt text; add llms.txt; split into crawlable URLs.

---

## 6. Trust & Brand Signals — **55/100 (C-)**

| Criterion | Grade | Findings |
|-----------|-------|----------|
| Reviews & testimonials prominent | **D** | Placeholder testimonial hurts trust more than it helps. No star ratings, Google review embed, or review count. |
| Awards & certifications visible | **F** | Board certification, medical license state, or awards not displayed |
| Credentials showcased | **B** | Stanford, UCSF, Penn mentioned in About. Dr. Zaidi headshot present. No MD credential line, specialty, or NPI visible on page. |
| NAP / profile consistency (GBP, Yelp, LinkedIn) | **?** | Not verifiable from clone alone — no address, phone, or hours on site. **Critical for local medical GEO.** |
| High-quality images throughout | **B** | Professional photography via Wix CDN. Good variety (portrait, clinical, lifestyle, food, lab). Blog thumbs are decorative with missing alt text. |

**Top gaps:** Add real testimonials; display board cert + specialty; add practice location/phone; embed Google reviews widget.

---

## Section-by-section GEO notes (homepage)

| Section | GEO strength | GEO weakness |
|---------|--------------|--------------|
| Live Your Best Life hero | Strong emotional hook | **Remove** — not on live site; duplicate messaging; wrong H1 |
| Testimonial | Structure exists | Placeholder text — zero trust value |
| Performance Medicine | Clear service category | No Answer Capsule explaining what performance medicine is |
| About | Personal story + credentials | No conclusion-first; jargon undefined; no author schema |
| Our Services | Good bullet lists | No depth, tables, or "who this is for" framing |
| Outsmart Chronic Disease | Clear problem statement | Vague — no statistics sourced, no specific outcomes |
| Membership | Complete benefit list | No pricing, timeline, or comparison table |
| Why Choose | Three distinct value props | Too short for AI extraction; no pros/cons |
| Blog grid | Good topical breadth in titles | Content lives off-site; empty alt text; no Article schema |
| Know Your Numbers | Lead magnet with checklist | 11 biomarkers not listed on page — not self-contained |
| Book a Consult | Clear CTA | No "what happens next" steps |
| Footer | Mission statement | No contact info, address, or legal/disclaimer |

---

## Priority action list (when ready to implement)

### P0 — Fix immediately
1. **Remove "Live Your Best Life" section** and set Performance Medicine as sole hero (H1)
2. Replace placeholder testimonial with real reviews or remove section
3. Add practice **name, address, phone** (NAP) to footer
4. Fix **empty alt text** on all blog images
5. Add **Organization / Physician JSON-LD** schema

### P1 — High GEO impact
6. Add homepage **TL;DR box** (3–5 bullet key takeaways, conclusion-first)
7. Write **6 Answer Capsules** (what is performance medicine, who is it for, what tests are included, what membership includes, how first visit works, how this differs from a PCP)
8. Create **FAQ page** (15–20 questions) with FAQPage schema
9. Add **robots.txt**, **sitemap.xml**, and **llms.txt**
10. Rewrite key copy to **7th-grade reading level** with inline jargon definitions

### P2 — Content expansion
11. Testimonials page (Google/Yelp consolidated)
12. Pricing / membership transparency page
13. Comparison page (vs. traditional primary care + 2–3 competitors)
14. 3 "Best Fit Brief" pages for top patient personas
15. Host blog articles locally with Article schema (or canonical properly)

### P3 — Polish
16. Membership **comparison table**
17. Pros/cons block ("Is this program right for me?")
18. Numbered "How to get started" steps
19. Board certification badges and awards
20. Core Web Vitals optimization (local images, font subsetting)

---

## Scorecard summary (quick reference)

```
Content Writing & Style     ████░░░░░░  38%
Content Substance           ███░░░░░░░  28%
Structure & Formatting      █████░░░░░  45%
Specific Page Types         █░░░░░░░░░  10%
Technical & Schema          ████░░░░░░  35%
Trust & Brand Signals       ██████░░░░  55%
─────────────────────────────────────
OVERALL                     ████░░░░░░  42%  (D+)
```

---

## Comparison to live alizaidimd.com

The live Wix site shares many of the same GEO weaknesses (no FAQ page, placeholder testimonial in DOM, limited schema). The local clone **adds** the erroneous Live Your Best Life section that the live homepage does not prominently show, which makes the clone **worse for GEO alignment** until that section is removed.

For GEO purposes, both sites currently function as **conversion landing pages**, not **answer engines**. Closing the gap requires content and technical work far beyond visual cloning.

---

*This audit evaluates GEO readiness only. Visual design quality is documented separately in `DESIGN-STYLE.md`.*
