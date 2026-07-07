# Color Country Flag Football League — Website

Official website for Color Country Flag Football, a co-ed youth flag football league (grades K–6, NFL FLAG through USA Football) serving Southern & Central Utah.

Plain static HTML/CSS/JS — no frameworks, no build step.

## Files

| File | Purpose |
|---|---|
| `index.html` | Homepage (hero, about, divisions, registration paths, sponsor teaser) |
| `register.html` | Team & player registration forms + FAQ |
| `sponsors.html` | Sponsorship benefits, tiers, and interest form |
| `contact.html` | About/mission + contact form |
| `thanks.html` | Standalone thank-you page (JotForm shows its own confirmation in the embed; this page is kept for links/redirect use) |
| `styles.css` | Shared stylesheet |
| `main.js` | Mobile navigation toggle |
| `favicon.*`, `apple-touch-icon.png` | Favicons (copied from `../Brand/Favicon/`) |
| `design-handoff/` | Original design mockups (reference only — not deployed) |

## Forms (JotForm)

All five site forms are embedded JotForm forms, managed in the league's JotForm account:

| Form | JotForm ID | Embedded on |
|---|---|---|
| Player Registration | `261871778978179` | `register.html` |
| Sponsor Interest | `261872619555165` | `sponsors.html` |
| Contact | `261871822348160` | `contact.html` |
| Stay Updated (email capture) | `261872411626154` | `index.html` (notify bar) |

(The Team Registration JotForm, `261872345696066`, is no longer embedded — teams are added directly by the league, so the site only registers individual athletes.)

Field edits, notification emails, thank-you messages, and submission data all live in JotForm — no site changes needed for those. Confirm each form's **Settings → Emails → Notification** delivers to **colorcountryff@gmail.com**.

To swap a form for a different JotForm: each embed is marked with a `SITE OWNER` comment in the HTML — replace the ID in the iframe's `id`/`src` **and** in the `jotformEmbedHandler` call at the bottom of the same file. The handler script auto-resizes the frame to fit the form.

Styling tip: to blend with the site, set each form's font to Arial and button/accent color to `#D6402B` in JotForm's Form Designer (white background for the light cards on `register.html`/`sponsors.html`; `#111111` works nicely for the dark cards on `register.html`/`contact.html`).

## Deploying

The site is completely static — any static host works. Deploy the contents of this `Website` folder (you can exclude `design-handoff/`, `README.md`, and the prompt file).

> Note: favicon and Open Graph image links use root-absolute paths (`/favicon.ico`), so the site should be served from the domain root (e.g. `colorcountryff.com`, or a `*.netlify.app` / `*.vercel.app` subdomain — all fine). If you deploy under a subpath (e.g. GitHub Pages *project* site at `username.github.io/repo/`), change those `href`/`content` values in each page head to relative paths (`favicon.ico`).

### Netlify
1. Sign up at https://netlify.com.
2. Drag-and-drop this folder onto the Netlify dashboard ("Add new site → Deploy manually"), or connect a Git repo with this folder as the publish directory.
3. Set a custom domain under Site settings → Domain management if you have one.

### Vercel
1. Sign up at https://vercel.com and install the CLI (`npm i -g vercel`) or connect a Git repo.
2. From this folder run `vercel` — accept the defaults (no build command, output directory `.`).

### GitHub Pages
1. Push this folder's contents to a repo (as the repo root or a `/docs` folder).
2. Repo → Settings → Pages → choose the branch/folder → Save.
3. For a *user* site (`username.github.io`) nothing else is needed. For a *project* site, fix the absolute favicon paths as noted above.

## After deploy

- Update the `og:image` values to a full URL (e.g. `https://yourdomain.com/favicon-512.png`) for best link-preview behavior on social platforms.
- Test all five forms once live and confirm each notification email arrives at colorcountryff@gmail.com.
