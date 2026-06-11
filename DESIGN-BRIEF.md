# ObaPrep landing page — design brief

**Domain:** obaprep.com (owned via Porkbun; currently parked). Lean, pre-launch, single page.

## Goal (be honest about scope)
Not a growth engine. This page exists to: (1) **warm up the hard paywall** — set value + price expectations before install so the post-first-session paywall confirms an expectation instead of ambushing; (2) **capture the off-platform visitor** — desktop browsers, Android users (app is iOS-only), and "not ready yet" people, via an email waitlist; (3) be a **credible home URL** for Product Hunt / Kumba / socials / press.

## Status constraint
App is **iOS-only** and currently **in App Store review (NOT live)**. So:
- Primary CTA now = **email waitlist** ("Get notified the day it launches"), not a download button.
- Show a **"Coming soon to the App Store"** badge (non-linked or styled placeholder). At launch we swap to the real badge → `https://apps.apple.com/app/id6776895251`.
- Do **not** promise Android. Do **not** invent testimonials/ratings (pre-launch — omit social proof or frame honestly as new).

## Audience
GRE test-takers (grad-school applicants), usually weeks-to-months from a fixed exam date. Anxious, time-pressed, skeptical of "another flashcard app." Speak to: the exam date, the dread of blanking on a word, the waste of cramming.

## Design system — LOCKED ("Editorial Warm"). Match the app exactly.
Colors:
- bg cream `#F7F3EB` · surface `#FCFAF5` · border/tan `#ECE5D8`
- ink/primary `#201A15` · secondary `#5F564B`
- accent **wine** `#7C2434` · deep wine `#5A1726`
- sage (positive) `#3E6B4E` on `#E9F0E7`

Type:
- **Display = Fraunces** (serif; 600 SemiBold + 800 ExtraBold; italic for accents) — via Google Fonts.
- **Body = clean system sans** (`-apple-system, "Inter", system-ui, sans-serif`).

Feel: literary, warm, calm, premium, editorial. Generous whitespace. NOT techy — no neon, no floating 3D blobs, no generic SaaS gradient hero. Anti-slop. The app icon is a cream "OP" serif monogram on wine — the page should feel like it came from the same studio.

## Assets (already produced)
- App icon: `/Users/mainz/CC/obaprep-vocab/assets/icon.png` (OP monogram, cream on wine).
- Captioned screenshots (1320×2868) in `/Users/mainz/CC/obaprep-vocab/audit/appstore-captioned/`:
  `01-home.png` · `02-study-mc.png` · `03-study-reveal.png` · `04-study-typed.png` · `05-paywall.png`
- Raw screens (no caption) in `/Users/mainz/CC/obaprep-vocab/audit/appstore-screenshots/` if you want them in a phone frame instead.

## Copy (from the real App Store listing — adapt, don't pad)
- **Hero headline:** Know every GRE word by test day.
- **Hero sub:** Not by cramming the night before — by seeing each word right when you're about to forget it.
- **Method line:** Spaced-repetition vocab paced to your exam date, with real GRE questions woven in.
- **Subtitle/tagline:** GRE vocab, paced to your exam.
- **Closing line:** Walk into the GRE knowing.

## Page structure (lean, one page)
1. **Nav** — "ObaPrep" wordmark (Fraunces) · subtle "Coming soon" pill / waitlist anchor.
2. **Hero** — headline + sub + email waitlist field + "Coming soon to the App Store" badge. OP icon present.
3. **The method (3 beats)** — paced to *your* test date · real GRE questions, not just definitions · recall over recognition. (Mirrors the screenshot story.)
4. **Screens** — the captioned screenshots (or raw screens in a phone frame), 2–3 in view.
5. **Pricing, stated plainly (paywall-warming)** — *Your first session is free.* Then **Pro: $12/mo or $48/yr, 14-day free trial.* Honest, no dark patterns.
6. **FAQ** — Is it really iOS only? · When does it launch? · How is this different from Anki/Quizlet/Magoosh? · What's free vs. paid?
7. **Footer** — Privacy / Terms / Support (existing pages at `https://obatried.github.io/obaprep-legal/{privacy,terms,support}.html`) · © 2026 Obafemi Ajayi.

## Email capture
Static-site friendly. Default: **Formspree** placeholder form (`https://formspree.io/f/REPLACE`). Alternative: Beehiiv embed. Backend wired after the design is approved.

## Output / hosting
- Static HTML/CSS (+ minimal vanilla JS), no build step if avoidable, in `~/CC/obaprep-site/`.
- Deployable to **GitHub Pages** with custom domain `obaprep.com` (apex) — add `CNAME` file = `obaprep.com`.
- Must look right at 390px mobile and 1280px desktop. Respect `prefers-reduced-motion`.
