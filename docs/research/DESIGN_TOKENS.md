# Kenko Design Tokens (extracted)

## Brand Identity
- **Wordmark:** "kenko" lowercase, semibold, slight tight tracking
- **Logo:** circle "K" mark in mint/teal — `framerusercontent.com/images/YQ4euyeSqXxIJm99xQGGCBYWYpg.png`
- **Tagline tone:** B2B SaaS, professional but warm. "Done-for-you" / "built for boutique" / "stop losing members"
- **Origin:** Formerly Bookee. Now positioned as marketing + booking + AI for fitness studios.

## Color palette
| Token | Hex / RGB | Use |
|---|---|---|
| `--mint` | `rgb(231, 239, 239)` ≈ `#E7EFEF` | page background |
| `--mint-soft` | slightly lighter mint | section bg variations |
| `--mint-dark` | darker mint | borders |
| `white` | `#FFFFFF` | card backgrounds |
| `zinc-950` | `rgb(9, 9, 11)` | H1, primary text, CTA buttons |
| `zinc-900` | `rgb(24, 24, 27)` | secondary darks |
| `zinc-800` | `rgb(39, 39, 42)` | body |
| `zinc-700` | `rgb(63, 63, 70)` | sub-headings |
| `zinc-500` | `rgb(113, 113, 122)` | muted text, labels |

## Typography
| Token | Family | Use |
|---|---|---|
| `--font-sans` | Inter | body text, paragraphs, nav |
| `--font-tight` | Inter Tight | H1/H2 (with `-0.025em` to `-1.2px` tracking) |
| `--font-display` | Plus Jakarta Sans | eyebrow micro-text, captions |

### Type scale (extracted from H1)
- H1: Inter 400 weight, 40px / 48px line height, -1.2px tracking
- H2 large: 32–36px, tight tracking
- H2 sub: 24–28px
- H3: 18–22px
- Body: 16px / 24px
- Small: 14px / 20px
- Eyebrow: 12px uppercase tracked

## Components
- **Buttons (primary):** `bg-zinc-950 text-white rounded-full px-4 py-2 text-sm font-medium` + trailing arrow
- **Buttons (secondary):** `bg-white text-zinc-950 border border-mint-dark rounded-full ...`
- **Cards:** `bg-white rounded-3xl` with subtle shadow on hover
- **Section padding:** `py-16` to `py-24` mobile→desktop
- **Container:** `max-w-7xl mx-auto px-6`
- **Border radius:** 0.875rem base (`--radius`), 24–32px for big rounded cards

## Layout / Spacing
- 6-col grid on desktop typically (or 2-col split panels)
- 1440px design target, mobile 390px
- Top nav: 64px sticky, mint background with backdrop-blur
- Footer: 5-column links + bottom legal strip

## Iconography
- Lucide React for generic UI icons (chevron, arrow, check)
- Custom Framer-extracted glyphs for the testimonial marquee (kept simple as emoji ↗️ for stat strip per source)

## Brand-specific motifs
- Mint pale background is a strong identity anchor
- Rounded cards on white over mint
- "↗️" prefix on stat cards
- Stat marquees with auto-scroll
- Big plan cards with strikethrough original prices
