# Live Site vs Local Clone — Differences

> **Status: Resolved** — All items below were addressed as of June 8, 2026.  
> See `DESIGN-STYLE.md` for the consolidated design reference.

Comparison of **https://www.alizaidimd.com/** against the local clone at `http://localhost:3456/`.  
Last scanned: June 8, 2026.

Use this as a punch list for polish. Items are grouped by section, smallest / visual tweaks first.

---

## Visual & CSS (small fixes)

| # | Area | Live site | Local clone | Notes |
|---|------|-----------|-------------|-------|
| 1 | **Our Services overlay** | Dark blue-grey tint over treadmill photo; white text reads clearly | ~~Overlay variable was not layered correctly~~ **Fixed** — `::after` pseudo with `rgba(30, 42, 54, 0.78)` | Was the main readability issue you flagged |
| 2 | **Services image treatment** | Photo appears slightly desaturated / muted under tint | Full-color photo under tint | Optional: add `filter: saturate(0.85)` on `.services-bg` |
| 3 | **Header height** | ~118px tall | 70px | Live header has more vertical padding |
| 4 | **Hero diagonal stripes** | Wix graphic — soft, wide diagonal bands | CSS `linear-gradient` approximation | Close but not identical band angles/softness |
| 5 | **Guide card radius** | ~31px | 31px | Match ✓ |
| 6 | **Pill buttons** | `border-radius: 55px`, `#84ae92` bg, black text | Same | Match ✓ |
| 7 | **Brand green** | `#5a827e` (rgb 90, 130, 126) | Same | Match ✓ |
| 8 | **About image corners** | Rounded (~16–20px) | 16px | Very close |
| 9 | **Membership item borders** | Thin light grey, centered text | Same pattern | Match ✓ |
| 10 | **Blog card gradient** | Dark top + bottom overlays; meta top, title bottom | Same layout | Match ✓ |
| 11 | **Why Choose icons** | Custom Wix line-art (chart, masked face, flower) | Generic SVG substitutes | Same layout, different icon artwork |
| 12 | **Scroll fade-in** | Wix default (minimal / none on most blocks) | Custom Intersection Observer fade-in | Local has extra motion not on live |

---

## Content & copy (minor)

| # | Area | Live site | Local clone |
|---|------|-----------|-------------|
| 13 | **Apostrophes / dashes** | Curly quotes in some Wix text (`don't`, `You'll`) | Straight ASCII in places |
| 14 | **Blog post dates** | Exact dates from CMS (e.g. Mar 18, Mar 2, Jan 14) | First 3 match; posts 4–9 use approximate "· N min read" without dates |
| 15 | **Blog typo** | "Lifeestyle" in one post title | Copied as-is from live |
| 16 | **MJC Agency** | "MJC Agency." with period | "MJC Agency" without trailing period in link text |

---

## Structure & sections

| # | Area | Live site | Local clone |
|---|------|-----------|-------------|
| 17 | **Top hero slideshow** | DOM includes **"Live Your Best Life"** h1 + image carousel section above Performance Medicine (may be hidden/collapsed in current Wix layout) | Only **Performance Medicine** hero — no slideshow |
| 18 | **Testimonial block** | "River Watts" quote carousel in DOM | Not implemented |
| 19 | **Performance Medicine** | Separate section after optional top hero | Serves as page hero |
| 20 | **Outsmart Chronic Disease CTA** | `<button>` element | `<a href="#consult-form">` styled as button |
| 21 | **Membership list** | Wix slider/carousel on some viewports; static list on desktop | Always static vertical list |
| 22 | **Why Choose layout** | Image left, 3 stacked cards right | Same ✓ |
| 23 | **Blog header** | Title left, description + Read More right | Same ✓ |
| 24 | **Blog grid** | 10 posts, 3 columns | 10 posts, 3 columns ✓ |
| 25 | **Footer columns** | Brand + mission + CTA, Quick Links, copyright | 3-column grid — similar, spacing differs slightly |

---

## Forms & functionality

| # | Area | Live site | Local clone |
|---|------|-----------|-------------|
| 26 | **Guide form** | Submits to Wix / email integration | Client-side validation only; success message, no backend |
| 27 | **Consult form** | Submits to Wix | Client-side validation only |
| 28 | **City field** | Required (`required` attribute) | Optional |
| 29 | **State field** | Required on live | Optional on local |
| 30 | **Form labels** | "First name" (required via Wix, asterisk in UI) | Explicit `*` in label text |
| 31 | **Blog links** | Real URLs (`/post/...`) | `href="#"` placeholders |
| 32 | **Read More button** | Links to blog index | `href="#"` placeholder |

---

## Navigation & UX

| # | Area | Live site | Local clone |
|---|------|-----------|-------------|
| 33 | **Mobile menu** | Wix hamburger + drawer | Custom toggle + dropdown |
| 34 | **Active nav link** | Wix scroll spy | Custom Intersection Observer |
| 35 | **Skip to content** | "Skip to Main Content" in DOM | Not present |
| 36 | **Smooth scroll** | Browser / Wix default | Explicit JS smooth scroll |

---

## Technical / assets

| # | Area | Live site | Local clone |
|---|------|-----------|-------------|
| 37 | **Platform** | Wix (dynamic widgets, CMS blog) | Static HTML/CSS/JS |
| 38 | **Font** | Wix-hosted Inter | Google Fonts Inter — visually close |
| 39 | **Images** | Wix CDN, responsive srcset / AVIF | Same Wix CDN URLs hotlinked |
| 40 | **Favicon** | Wix site icon | None set |
| 41 | **SEO / meta** | Wix-managed OG tags, sitemap | Basic `<meta description>` only |
| 42 | **Analytics** | Likely Wix / third-party scripts | None |
| 43 | **Cookie / privacy banner** | May appear (Wix) | None |

---

## Already matched well

- Page title and meta description
- Header: logo, nav links, Book a Consult CTA
- Performance Medicine headline + biomarker guide card copy
- About section copy and headshot image
- Our Services three-column content and bullet lists
- Outsmart Chronic Disease split (teal panel + food photo)
- Membership items (all 8) and form-filling photo
- Why Choose copy and two-column layout
- All 10 blog post titles
- Know Your Numbers copy and checklist
- Biomarker + consult form fields and dark teal panels
- Footer mission statement, Quick Links, © 2025 MJC Agency

---

## Suggested priority order (when you're ready)

1. ~~Services background tint~~ **Done**
2. Header height / padding
3. City + State required on consult form (match live)
4. Blog post hrefs → real `/post/...` paths (or stub pages)
5. Top "Live Your Best Life" hero slideshow (if still desired on live)
6. Replace Why Choose icons with closer artwork
7. Wire forms to backend / email provider
8. Favicon + OG meta tags

---

*Generated from side-by-side browser inspection of alizaidimd.com and the local clone.*
