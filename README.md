# Prosper Ami — Portfolio

A production portfolio for Prosper Ami, a Ghana-based software developer and digital product builder. The site presents selected products, case studies, services, professional experience, insights, and contact information.

## Highlights

- Responsive portfolio and case-study experience
- Product, service, timeline, CV, and insight content collections
- SEO and Open Graph metadata
- Downloadable CV
- Validated contact form with Resend email delivery
- Accessible navigation and reusable design-system components

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- MDX support for long-form content
- React Hook Form and Zod validation
- Resend for contact-form delivery
- ESLint for static analysis

## Project structure

```text
public/              Static images, Open Graph assets, and CV document
scripts/             Local Next.js launch helpers
src/app/             Routes, layouts, metadata, and API handlers
src/components/      Reusable interface and page components
src/content/         Portfolio, product, service, CV, and insight content
src/lib/             SEO, fonts, validation, and shared utilities
src/styles/          Global styles and design tokens
```

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

### Environment variables

- `RESEND_API_KEY` — server-side key for contact-form delivery
- `RESEND_FROM_EMAIL` — verified sender address
- `CONTACT_EMAIL` — destination for contact submissions
- `NEXT_PUBLIC_SITE_URL` — canonical production URL
- `NEXT_PUBLIC_SITE_NAME` — public site name

Never expose `RESEND_API_KEY` through a `NEXT_PUBLIC_` variable or commit `.env.local`.

## Quality checks

```bash
npm run lint
npm run build
```

Run both checks before merging or deploying changes.

## Content updates

Most portfolio content is maintained in `src/content/`. Keep public claims, dates, links, project outcomes, and technology lists accurate. Replace files in `public/documents/` only with intentionally public, metadata-reviewed documents.

## Deployment

The application is suitable for Vercel or another Node.js-compatible host. Configure production environment variables in the hosting platform, set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS URL, and verify contact-form delivery after deployment.

## Security

See [SECURITY.md](SECURITY.md). Report vulnerabilities privately and never include API keys, private contact submissions, or unpublished personal information in an issue.

## Ownership

Copyright © Prosper Ami. All rights reserved.
