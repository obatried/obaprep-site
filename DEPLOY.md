# Deploying obaprep.com

Static site. No build step. Just HTML/CSS/JS + assets.

## 1. Push to GitHub
```
cd ~/CC/obaprep-site
git init && git add -A && git commit -m "ObaPrep landing page v1"
# create the repo (public or private both work for Pages on a paid plan; public is simplest):
gh repo create obatried/obaprep-site --public --source=. --push
```
The `CNAME` file (already in the repo) tells Pages the custom domain is `obaprep.com`.

## 2. Turn on GitHub Pages
Repo → Settings → Pages → Source = `main` / root. It will pick up `CNAME`.

## 3. Point obaprep.com (DNS at Porkbun)
The domain is currently parked (redirects to obaprep-com.l.ink). Replace that with:

**Apex `obaprep.com` — four A records** (GitHub Pages IPs):
```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```
**`www` subdomain — one CNAME:**
```
CNAME   www   obatried.github.io
```
Then in Pages settings, tick **Enforce HTTPS** once the cert provisions (can take ~an hour).

(Porkbun also offers an `ALIAS` record for the apex if you prefer a single record pointing at `obatried.github.io`.)

## 4. Wire the waitlist form (REQUIRED before launch)
`index.html` form action is a placeholder: `https://formspree.io/f/REPLACE_WITH_FORM_ID`.
- Create a free form at formspree.io, get the form id, replace the placeholder.
- Until then, `app.js` intercepts the submit and shows the success message (no email is actually captured).
- Alternative: swap the action for a Beehiiv embed/subscribe endpoint if you'd rather build that list in Beehiiv.

## 5. At App Store launch
- Replace the "Coming soon to the App Store" pill with a real **Download on the App Store** badge linking to `https://apps.apple.com/app/id6776895251`.
- Optionally turn the hero waitlist into a download CTA.

## Notes
- `og-card.png` (1200×630) is the social share image; already referenced in the meta tags.
- Fonts are the exact Fraunces weights the app ships (`fonts/`), self-hosted.
- `DESIGN-BRIEF.md` is the brief; `qa-*.png` are throwaway QA shots (gitignored).
