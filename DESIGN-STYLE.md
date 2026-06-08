# Ali Zaidi MD — Design Style Guide

A reference for the visual language, layout patterns, and UI conventions used on [alizaidimd.com](https://www.alizaidimd.com/) and this local clone.

---

## Brand identity

**Ali Zaidi, MD** presents as a premium, science-forward longevity and performance medicine practice. The design communicates trust, calm, and clinical precision — not flashy wellness marketing.

**Tone:** Professional, warm, evidence-based, approachable  
**Audience:** Health-conscious adults seeking proactive, personalized preventative care  
**Platform reference:** Wix (original) · Static HTML/CSS/JS (this clone)

---

## Color palette

| Token | Hex / value | Usage |
|-------|-------------|-------|
| **Brand green** | `#5a827e` | Header, footer, CTA panels, biomarker form, consult form, guide card |
| **Button green** | `#84ae92` | All pill buttons — Book a Consult, Get Instant Access, Submit |
| **Button hover** | `#75a082` | Button hover state |
| **Heading text** | `#1f2937` | H1–H4 on light backgrounds |
| **Body muted** | `#4b5563` | Paragraphs, descriptions, card copy |
| **White** | `#ffffff` | Page backgrounds, form inputs, nav text |
| **Off-white** | `#f9fafb` | Why Choose section, Answer Capsules section |
| **Light gray** | `#f3f4f6` | Know Your Numbers section, pros/cons block |
| **Services overlay** | `rgba(30, 42, 54, 0.78)` | Dark tint over hero/service photography |

**Accent usage:** The brand green is applied to highlighted words in headings (e.g. "Improve HealthSpan", "Membership") via the `.text-accent` class — not used as a general body text color.

**Button text:** Always black (`#000`) on sage pill buttons for maximum contrast.

---

## Typography

| Role | Font | Weight | Size (desktop) |
|------|------|--------|----------------|
| **Primary** | Inter (Google Fonts) | 400–700 | 16px base |
| **Hero headline** | Inter | 700 | 75–90px |
| **Section headings** | Inter | 700 | 36–42px |
| **Subheadings / cards** | Inter | 700 | 17–22px |
| **Body** | Inter | 400 | 16px |
| **Small / meta** | Inter | 500 | 13–14px |
| **Nav links** | Inter | 500 | 15px |

**Characteristics:**
- Single typeface throughout — no serif/display pairing
- Bold headings with tight line-height (~1.2)
- Body copy at 1.6–1.75 line-height for readability
- Letter-spacing slightly tightened on large hero titles (`-0.02em`)
- Typographic quotes: curly apostrophes and quotation marks (`&rsquo;`, `&ldquo;`) in body copy

---

## Spacing & layout

| Pattern | Value |
|---------|-------|
| **Max content width** | 1200px |
| **Section padding** | 72px vertical (56px mobile) |
| **Grid gap** | 40–56px between columns |
| **Header height** | 118px desktop · 80px mobile |

**Layout patterns used repeatedly:**

1. **Centered single column** — Performance Medicine hero, membership heading  
2. **50/50 split** — About, Outsmart Chronic Disease, membership, Why Choose, biomarker guide, consult form  
3. **Three equal columns** — Our Services, blog grid  
4. **Stacked cards** — Why Choose feature list, membership items  

Whitespace is generous. Sections breathe; content rarely feels cramped.

---

## Components

### Header
- Sticky, full-width brand green bar
- Logo left · nav center · CTA right
- Nav links: white text, underline on hover/active
- Mobile: slide-in drawer from right with hamburger toggle

### Pill buttons (`.btn-pill`)
- Background: `#84ae92`
- Border-radius: `55px` (fully rounded)
- Padding: `10px 28px`
- Black text, 600 weight
- Used for every primary action on the site

### Guide card (Performance Medicine)
- Brand green background
- Border-radius: `31px`
- White centered text
- Contains biomarker guide pitch + Get Instant Access button

### Service columns
- Full-bleed background photo (desaturated + dark overlay)
- White text, three columns separated by thin vertical rules
- Bullet lists with `•` markers

### Membership items
- Bordered boxes (`1px #d1d5db`), centered text
- 8px corner radius
- Desktop: vertical stack · Mobile: horizontal scroll carousel

### Blog cards
- Square aspect ratio, 18px rounded corners
- Image with top + bottom gradient overlays
- Author/date meta at top · title at bottom
- Subtle zoom on hover

### Form panels
- Brand green background
- White input fields, 8px radius
- Labels above fields; required fields marked with `*` via CSS
- Full-width pill submit button

### Footer
- Four columns: brand/NAP + Quick Links + Resources + copyright
- Same brand green as header — site ends in a cohesive green frame

---

## GEO UI components

These patterns support GEO content while matching existing tokens. Defined in `css/style.css`.

| Class | Usage |
|-------|--------|
| `.geo-tldr` | Conclusion-first summary box below hero — white card, brand left border |
| `.geo-capsule` | 60–100 word Answer Capsule cards in 3-column grid |
| `.geo-table` | Membership/comparison tables — light borders, off-white header row |
| `.geo-pros-cons` | Two-column good-fit / not-fit lists on light gray background |
| `.geo-steps` | Numbered how-to-get-started list with brand green circles |
| `.page-hero` | Subpage header band — brand green, white H1 |
| `.geo-credentials` | Board cert / training line under About heading |
| `.section-off-white` / `.section-light-gray` | Alternate section backgrounds |

Subpages (`faq.html`, `pricing.html`, etc.) reuse header, footer, and `.page-hero` + `.page-body` layout.

### GEO Guide widget (bottom-right)

Floating **GEO Guide** button on every page. Opens a panel to click **Prev / Next** through all 22 GEO instances, jump from a full list, and auto-scroll + highlight each spot on the page. Cross-page spots navigate automatically. Technical files (`robots.txt`, `sitemap.xml`, `llms.txt`) open in a new tab.

---

## Imagery

| Section | Treatment |
|---------|-----------|
| **Performance Medicine hero** | Diagonal stripe background, centered H1 |
| **About / Why Choose** | Rounded corners (18px), natural crop |
| **Services** | Full-width background, `saturate(0.85)` + dark tint |
| **Chronic callout / consult** | Edge-to-edge photos, no overlay |
| **Blog** | Square thumbnails from CMS |

Photos are warm, professional, and health-oriented — seniors active outdoors, clinical settings, healthy food, lab work. No stock clichés with forced smiles in white coats.

---

## Motion & interaction

- **Scroll:** Native smooth scroll (`scroll-behavior: smooth`) — no heavy scroll-triggered animations
- **Hover:** Button color shift + 1px lift; blog image scale (1.04)
- **Mobile nav:** Slide-in drawer
- **Membership (mobile):** Horizontal scroll with dot indicators
- **Forms:** Inline validation, async submit via FormSubmit.co

The live Wix site is largely static in motion — the clone matches that restrained feel.

---

## Iconography

Why Choose cards use simple line-art SVG icons:
- **Data-Driven Insights** — bar chart + document
- **One-on-One Physician Access** — physician figure
- **Whole-Body Approach** — wellness / holistic symbol

Icons are monochrome, ~48px, muted gray-green tone matching body text.

---

## Section map (top → bottom)

1. Header (sticky)
2. Performance Medicine — H1 hero, TL;DR box, biomarker guide card
3. About — photo + bio + credentials line
4. Answer Capsules — 6-card grid (off-white bg)
5. Our Services — tinted photo + 3 columns
6. Outsmart Chronic Disease — green panel + food photo
7. Membership — photo + item list + comparison table
8. Why Choose Dr. Zaidi — photo + feature cards
9. Pros/cons — is this program right for you?
10. Blog — 10-post grid
11. Know Your Numbers — checklist + email capture
12. How to Get Started — numbered steps
13. Book a Consult — form + lab photo
14. Footer — NAP + resource links

**Subpages:** FAQ, Pricing, Compare, Testimonials, 3× Best Fit Briefs — each uses `.page-hero` + content body.

---

## Accessibility notes

- Skip-to-content link (visible on focus)
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, heading hierarchy
- Form labels associated with inputs; `aria-live` on form messages
- Sufficient contrast: white on brand green, black on button green, tinted overlays on photos
- Cookie consent banner with Accept action

---

## Configuration

Site behavior is controlled in `js/config.js`:

```javascript
window.SITE_CONFIG = {
  formSubmitEmail: 'contact@alizaidimd.com',
  practiceEmail: 'contact@alizaidimd.com',
  practiceArea: 'San Francisco Bay Area, California',
  practiceName: 'Ali Zaidi, MD — Performance Medicine',
  analyticsId: '',                             // GA4 measurement ID (optional)
  siteUrl: 'https://www.alizaidimd.com',
  blogUrl: 'https://www.alizaidimd.com/blog'
};
```

---

## Design principles (summary)

1. **Calm confidence** — muted greens and neutrals, not loud wellness colors  
2. **Photography as structure** — full-bleed and split layouts anchor each section  
3. **One CTA style** — every action uses the same sage pill button  
4. **Typography hierarchy** — size and weight do the work; color accents are sparing  
5. **Clinical + human** — data/ lab imagery balanced with lifestyle and food photography  
6. **Mobile-first readability** — overlays on photos, stacked layouts, scroll carousels where needed  

This guide reflects the site as of June 2026. Update when brand assets or live site styling changes.
