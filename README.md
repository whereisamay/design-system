# Amay Design System

The tokens, components and rules behind Amay Prabhu's personal sites: the writer portfolio, the product portfolio and the case studies built on it.

- **Live reference (Claude artifact):** https://claude.ai/artifact/YcD1FT2gNbPunNeuXHwhjR
- **Component gallery:** open `index.html` (or enable GitHub Pages on this repo)

## What's in this repo

| Path | What |
| --- | --- |
| `tokens/tokens.json` | Source of truth: 12 colours, 20 type styles (Fraunces + Inter), 11 spacing steps, 4 radii, 5 border widths, 2 hard shadows, 2 layout widths. Every token has a usage note. |
| `tokens/tokens.css` | The same tokens as CSS custom properties and one class per type style. |
| `components/bundle.css` | Styles for all 19 components, built only from the tokens. |
| `components/bundle.js` | `AmayDS.initAccordions()` and `AmayDS.initCarousels()`, the only two components that need script. No dependencies. |
| `components/<Name>/` | A `README.md` with guidelines and a `preview.html` for each component. |
| `assets/` | The headshot and illustration the sites use. |
| `index.html` | A gallery of every component, rendered live. |

**Components:** Button, IconButton, TextLink, Chip, SectionHeading, TextAccents, SiteHeader, SiteFooter, PageHero, WorkCard, Accordion, JourneyTimeline, PullQuote, StepList, MetricTile, ChatBubble, DataTable, BlobPortrait, PhotoCarousel.

## Using it

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<link rel="stylesheet" href="your-page.css">
<script src="components/bundle.js"></script>
```

Change a value in `tokens/tokens.json` and `tokens/tokens.css` first, then in the product.

## Brand book

Warm, editorial and a little funky: cream paper, ink outlines, a mustard blob and one coral spark. It's how Amay's personal sites look and sound. Build anything personal-brand (portfolios, case studies, articles, decks) from these tokens and components.

### Where it's used

| Product | What it takes from the system |
| --- | --- |
| [Writer portfolio](https://whereisamay.github.io/writer_portfolio/) | The original source: tokens, the hero with the blob portrait, work cards, the WAQs accordion, the footer, article pages, the photo carousel and the data table. |
| [Product portfolio](https://claude.ai/artifact/Cg3dRmNPCQvyTHp36vaSMJ) | Loads this system's `tokens.css` and `components/bundle.css` directly, and adds the JourneyTimeline, MetricTile, StepList and ChatBubble patterns that now live here. |
| [Stellaris website review](https://claude.ai/artifact/DvyrrYBjANENCstvRjQaah) | A three-tab brand case study. Loads `tokens.css` and `components/bundle.css`; uses SiteHeader, SectionHeading, Chip, DataTable, PullQuote-style quotes and SiteFooter. |

A new page starts by loading `tokens/tokens.css`, then `components/bundle.css`, then its own layout CSS. Change a value here first, then in the product.

### Content fundamentals

- **Voice:** first person, conversational, a little cheeky. The writer site's own lines set the tone: "a product manager by profession, and a writer at heart", "Just don't use too many em dashes, and you should be good ;)". On product pages, stay warm but get specific: real numbers, plain words.
- **Casing:** sentence case for titles, buttons and links ("Read my work", "Get in touch"). Eyebrows are written in lowercase and displayed in uppercase by CSS.
- **I and you:** "I" for Amay, "you" for the reader. Never "we" unless it was a team.
- **Length:** paragraphs of three or four sentences at most. Card descriptions get one or two lines, ending with an ellipsis (…) when they tease.
- **Emoji:** none in the UI. A winking ;) in copy is allowed, once.
- **Arrows:** → for "go deeper on this site", ↗ for "leave the site", ← for back links, ↑ for back to top.

### Visual foundations

**Colour.** `cream` is the paper, and every page sits on it. `cream-2` marks alternate section bands, and `sage` is a cool relief band. `ink` does all the heavy lifting: text, every border, primary buttons and the footer. `ink-soft` is for supporting text. `mustard` and `mustard-2` are the warm accents (the blob, chips, highlighter strokes, striped placeholders). `coral` is the spark: the logo dot, eyebrows, the script name, link underlines and hover states. Use it in small doses. `coral` is only 3.0:1 on `cream`, so keep it for 24px+ text or marks. The 13px eyebrow is the one place the source breaks this, and it's kept as is and flagged.

**Type.** Two families. Fraunces (`--font-display`) for anything that's a headline, title, quote, number or the wordmark, mostly at 600, with italic 500 for emphasis. Inter (`--font-body`) for everything you read or click. Display sizes are fluid with `clamp()`; the type styles record their largest size. Use `display-hero` once per site, then `display-section` for section titles, `display-page` for article titles, `text-lede` for intros and `text-article` (18px, 1.75) for long reads, kept to a 720px measure (`measure-article`).

**Borders, not blur.** Edges are drawn: 2px `ink` (`border-ui`) on buttons, cards and accordions; 5px on image frames; 6px on the portrait. Shadows are hard and offset, never blurred: `shadow-lift` on a hovered card and `shadow-nudge` on a hovered accordion. Things lift up-left and tilt slightly when hovered, like paper being picked up.

**Shape.** Pills (`radius-pill`) for buttons and chips. `radius-md` (20px) for cards, accordions and tiles. `radius-lg` (32px) for big frames and tables. Circles for icon buttons. The organic blob (`44% 56% 62% 38% / 48% 42% 58% 52%`) is the signature shape: one per site, behind the portrait.

**Texture.** A fixed noise layer (`.ds-grain`) at 4.5% opacity, multiplied over everything, makes the cream feel like paper. Soft radial glows of `mustard-2` (top-right of heroes) and `coral` (bottom-left of the footer) add warmth. The diagonal `mustard` / `mustard-2` stripe is the placeholder for missing media.

**Spacing and layout.** Content sits in a 1180px wrap (`wrap`) with 32px gutters (20px on phones). Sections breathe with `space-96` of vertical padding and alternate between `cream` and `cream-2`. Grids use gaps, not margins: 28px between cards, 16px between accordion items, 48–64px between hero and split columns.

**Motion.** One easing curve, `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease` in bundle.css), at 0.25–0.35s. Hover lifts, nav underlines sweep in, accordions open by animating the grid row, and the blob morphs over 12s. All of it switches off under `prefers-reduced-motion`.

**Focus.** A 3px solid `ink` outline, 3px offset, on every interactive element: 16:1 on `cream`.

### Imagery and iconography

- **Photos:** real ones, never stock. The headshot (`assets/headshot.png`) only ever appears inside BlobPortrait. Travel photos run square in the PhotoCarousel.
- **Illustration:** flat line art with a single blue accent (`assets/pm-illustration.png`), shown contained on white inside a 5px `ink` frame.
- **Icons:** filled single-colour brand glyphs (LinkedIn, Instagram) as inline SVG with `fill="currentColor"`, 18px, inside an IconButton. No icon font, no outline icon set.
- **Logo:** there is no logo file. The wordmark is the name set in `wordmark` type with a `coral` full stop: "Amay."
