# Lita Construction LLC — Website

A modern, professional, lead-generation website for **Lita Construction LLC**, a family-owned roofing, siding, and masonry contractor serving Northern & Central New Jersey since 2004.

Built with **React + TypeScript + Vite + Tailwind CSS**. Fully optimized for **SEO**, **AEO** (Answer Engine Optimization), and **GEO** (Generative Engine Optimization).

---

## ✨ Features

- **Premium dark/industrial design** — Archivo display type, safety-amber accent, blueprint-grid texture, film grain, scroll-reveal animations.
- **Conversion-focused** — sticky mobile click-to-call bar, prominent phone CTAs, and a free-estimate lead form throughout.
- **Service pages** — dedicated, locally-targeted pages for Roofing, Siding, and Masonry.
- **Fully responsive** — mobile-first, accessible (skip link, semantic HTML, reduced-motion support).
- **Fast** — ~19 KB gzipped app code, code-split React vendor chunk, no heavy dependencies.

## 🔍 SEO / AEO / GEO

| Layer | What's implemented |
|-------|--------------------|
| **SEO** | Per-route `<title>` / meta description / canonical via `react-helmet-async`, Open Graph + Twitter cards, semantic headings, `sitemap.xml`, `robots.txt`, fast Core-Web-Vitals-friendly bundle. |
| **Structured data** | JSON-LD `LocalBusiness` / `RoofingContractor` / `GeneralContractor`, `Service`, `FAQPage`, `BreadcrumbList`, `WebSite` (see `src/lib/schema.ts`). |
| **AEO** (answer engines) | Conversational FAQ content with `FAQPage` schema, clear factual copy, explicit licensing/warranty/area answers. |
| **GEO** (AI crawlers) | `public/llms.txt` summarizing the business for LLMs; `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc. |

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## 🛠️ Customize Your Content

**All business data lives in one file:** [`src/data/business.ts`](src/data/business.ts).
Update it and the change flows everywhere (UI + SEO schema):

- `business.email` — currently a placeholder (`info@litaconstructionllc.com`). Set your real inbox.
- `testimonials` — add real Google/Facebook reviews.
- `services` — edit names, blurbs, features, and local keywords.
- `serviceCities` / `serviceAreas` — your real coverage list.

**Connect the quote form** in [`src/components/QuoteForm.tsx`](src/components/QuoteForm.tsx):
set `FORM_ENDPOINT` to your Formspree / Netlify Forms / backend URL. Until then it runs in
"demo mode" (shows a success message without sending). The form posts a JSON body with
`name, phone, email, service, zip, details`.

**Images:** the design is currently image-light (fast, crisp, no stock-photo "AI slop").
To add real project photos, drop them in `public/` and reference them in the Hero / About /
service pages. Also add a real `og-image.jpg` (1200×630) in `public/` for social sharing.

## 🌐 Deploy

Works on any static host. SPA routing is pre-configured:

- **Vercel** — `vercel.json` included (rewrites + asset caching). Just import the repo.
- **Netlify** — `public/_redirects` included. Build command `npm run build`, publish dir `dist`.
- **Cloudflare Pages / GitHub Pages / S3** — serve `dist/` and route all paths to `index.html`.

> After deploying, update the domain in `index.html`, `src/data/business.ts` (`url`),
> `public/sitemap.xml`, `public/robots.txt`, and `public/llms.txt` if it differs from
> `https://litaconstructionllc.com`.

## 📈 Post-Launch SEO Checklist

1. Create / claim the **Google Business Profile** (single biggest local-SEO lever).
2. Submit `sitemap.xml` in **Google Search Console** & **Bing Webmaster Tools**.
3. Add a real `og-image.jpg` and `apple-touch-icon.png` to `public/`.
4. Collect real reviews → replace the placeholders in `business.ts`.
5. Keep NAP (Name, Address, Phone) consistent across all directory listings.

---

*Roofing · Siding · Masonry — proudly serving New Jersey homeowners. NJ Lic. #13VH11703800.*
