# October canvas — Kenko (gokenko.com clone)

UI clone of `https://www.gokenko.com/` with 3 homepage and 3 pricing variants, wired into October's canvas as 8 iframed screens. Not affiliated with Kenko / Spotbee, Inc. Internal experimentation surface only.

## Live surfaces

| Surface | URL |
| --- | --- |
| Baseline · Kenko home | https://gokenko-clone.vercel.app/ |
| Home Variant A · Outcome-first | https://gokenko-clone.vercel.app/v/home-a |
| Home Variant B · Comparison | https://gokenko-clone.vercel.app/v/home-b |
| Home Variant C · Owner-story | https://gokenko-clone.vercel.app/v/home-c |
| Baseline · Kenko pricing | https://gokenko-clone.vercel.app/pricing |
| Pricing Variant A · Single-tier + ROI slider | https://gokenko-clone.vercel.app/v/pricing-a |
| Pricing Variant B · Hidden price + qualifier | https://gokenko-clone.vercel.app/v/pricing-b |
| Pricing Variant C · Outcome-anchored tiers | https://gokenko-clone.vercel.app/v/pricing-c |

Other cloned routes available at the same base: `/ai-marketing-agency`, `/fitness-studio-management-software`, `/resources-home`, `/demo/get-demo`, `/legal/{security-policy,privacy-policy,terms-of-service,cookies}` (legal pages are brand-matched stubs).

## October canvas record

The canvas + 8 `canvas_screens` + 2 `canvas_experiments` rows are seeded by `scripts/import-october-canvas.mjs`. The script is idempotent — rerunning refreshes positions / iframe URLs without duplicating rows.

```
canvas_id      166741a7-4193-4804-bf83-55e415f16f14
share_token    LGA22667mI4c
share_url      https://october.dev/shared/LGA22667mI4c
dash_project   17998b86-c505-4b73-9a96-15409a69f743
github         https://github.com/ayush-kumar-prog/gokenko-clone-for-october.git
vercel         https://gokenko-clone.vercel.app
screens        8 (top row home + 3 variants; bottom row pricing + 3 variants)
experiments    2 (draft status — informational, no live PostHog routing)
```

The canvas is `is_public = true` with `share_settings.allowDuplication = true`, so anyone with the share link can open it read-only and clone their own editable copy.

## Editable view (canvas owner)

The canvas is owned by Harsh (`60dc01e1-b7f8-4e24-aa85-86115e4272ec`). When he signs in to October and opens the canvas, October's `/api/dash-preview` action automatically starts the linked Daytona sandbox, which clones this repo, runs `npm install`, and serves the dev server on port 3000. The 8 `canvas_screens` then iframe that running server using their stored `route_path`.

Provision (or refresh) the sandbox with:

```bash
node scripts/provision-october-sandbox.mjs
```

It's idempotent — reuses the existing sandbox if `daytona_sandbox_id` is already pinned to the dash_project, otherwise creates a new one.

## Refreshing the canvas after code changes

After redeploying on Vercel, rerun:

```bash
VERCEL_BASE=https://gokenko-clone.vercel.app node scripts/import-october-canvas.mjs
```

The script keys off canvas title + screen `route_path`, so screens keep stable IDs across reruns.

If you renamed a route, also restart the Daytona sandbox so its `next dev` picks up the new route:

```bash
node scripts/refresh-canvas-sandbox.mjs   # (or rerun provision)
```

## Tech stack

- Next.js 16 (App Router, React 19, TypeScript strict)
- Tailwind v4 with `oklch` design tokens
- shadcn/ui primitives
- Inter / Inter Tight / Plus Jakarta Sans via `next/font/google`
- Images linked directly from `framerusercontent.com` (whitelisted in `next.config.ts`) — no local asset downloads in this iteration
- Deployed via Vercel under `ayush-kumar-progs-projects/gokenko-clone`

## Variant design intents

### Homepage variants
- **A · Outcome-first** — single massive growth stat (e.g. `+45% MoM`) as hero, one CTA. Tests whether raw-outcome framing converts better than the baseline's product-split layout.
- **B · Comparison-first** — split-screen "Without Kenko" (zinc-500, crossed) vs "With Kenko" (mint-soft card, checked). Tests problem/solution framing.
- **C · Owner-story** — testimonial-led hero with owner photo + quote ("147% member growth helped us open 4 locations"). Tests social-proof-first framing.

### Pricing variants
- **A · Single-tier + ROI** — one plan card, location-count slider (1–10) drives price from $499 → $1,499. Tests price-as-formula vs anchored tiers.
- **B · Hidden price + qualifier** — no prices on page; inline form (business type / locations / email) → "Get my quote". Tests gated-pricing-with-qualification.
- **C · Outcome-anchored** — same 3-tier card layout but each tier anchored to a member-acquisition outcome (+10 / +40 / 100+ members/mo) instead of feature lists. Tests outcome framing vs feature framing.

## Files of interest

- `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx` — shared chrome
- `src/app/page.tsx` — baseline home
- `src/app/pricing/page.tsx` — baseline pricing
- `src/app/v/home-{a,b,c}/page.tsx` — homepage variants
- `src/app/v/pricing-{a,b,c}/page.tsx` — pricing variants
- `src/app/globals.css` — brand tokens (mint palette, font wiring)
- `scripts/import-october-canvas.mjs` — canvas + screens + experiments upsert
- `scripts/provision-october-sandbox.mjs` — Daytona sandbox bootstrap
- `docs/research/DESIGN_TOKENS.md` — extracted brand tokens
- `docs/research/RECON_*.md` — per-page recon notes
- `docs/design-references/*.png` — full-page screenshots (desktop 1440 + home mobile 390)
