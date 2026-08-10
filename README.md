# Royal Group — Website

A Next.js 14 (App Router + TypeScript + Tailwind CSS) site for Royal Group,
built from the corporate profile: About, Operations (value-chain view),
Training, Sustainability, Partnerships, and Contact, with a floating
WhatsApp click-to-chat button site-wide.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires internet access on first build —
the site pulls Zilla Slab, Work Sans and IBM Plex Mono from Google Fonts.

## Edit the business content

Almost everything text-based lives in **`lib/content.ts`**:

- `company` — name, HQ, phone number (used for both the `tel:` link and the
  WhatsApp `wa.me` link — update `phoneIntl` if the number changes)
- `socials` — Facebook / Instagram / X / LinkedIn / YouTube links. **These
  are placeholders (`#`) right now** — paste in the real profile URLs.
- `operations` — the eleven business lines, grouped into value-chain stages
- `objectives`, `advantages`, `partners` — the bulleted lists used on the
  About and Partnerships pages

Editing this one file updates every page that references it — no need to
touch the page components. This also makes it straightforward to swap for
a headless CMS (Sanity, Contentful, etc.) later: replace the exports in
this file with CMS queries and the components don't need to change.

## The WhatsApp button

`components/WhatsAppButton.tsx` is a plain link to
`https://wa.me/2348072438582` with a pre-filled greeting — no API, no
backend, works the moment the site is live. The same number powers the
"Call" links in the header and footer.

## The contact form

`components/ContactForm.tsx` currently opens the visitor's email client via
a `mailto:` link (edit the placeholder address in that file). If you'd
rather have submissions land in an inbox or CRM directly, wire it to a
Next.js API route (`app/api/contact/route.ts`) or a form service like
Formspree — the form UI itself doesn't need to change.

## Deploying

The fastest path is [Vercel](https://vercel.com) (same company as
Next.js): push this folder to a GitHub repo and import it — zero config
needed. Netlify and any Node hosting also work (`npm run build` then
`npm start`).

## Project structure

```
app/                Route pages (App Router)
  layout.tsx         Root layout: fonts, header, footer, WhatsApp button
  page.tsx            Home
  about/              About Us
  operations/         Our Operations (value-chain grouped)
  training/           Agro Innovation & Training
  sustainability/      Sustainability
  partnerships/        Partnerships
  contact/             Contact
components/          Header, Footer, WhatsAppButton, ContactForm, PageHero, ValueChain
lib/content.ts       All editable business content (single source of truth)
```

## Still to do before launch

- [ ] Replace social links in `lib/content.ts` with real profile URLs
- [ ] Replace the placeholder email in `ContactForm.tsx`
- [ ] Add real photography (the design currently ships without imagery —
      drop images into `public/` and reference them with `next/image`)
- [ ] Add a favicon (`app/icon.png` or similar)
- [ ] Point a real domain at the Vercel/hosting deployment
