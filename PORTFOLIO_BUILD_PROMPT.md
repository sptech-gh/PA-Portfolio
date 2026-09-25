# MASTER BUILD PROMPT — Personal Portfolio & Professional Brand

> **For the AI agent:** Read **both** this file and `PORTFOLIO_DATA_SUPPLEMENT.md` in full before writing a single file. The supplement contains all real owner data — name, email, links, full CV, project details and live URLs — and overrides every `[PLACEHOLDER]` in this document. Then follow the build order in **Section 0**. Do not improvise the stack, deviate from the file structure, or invent content beyond what is specified. Any item not covered in either file should be marked with a `// TODO:` comment so the owner can find it.

---

## SECTION 0 — AGENT BUILD ORDER

Follow this sequence exactly. Do not skip ahead.

```
STEP 1  Scaffold project with Next.js + TypeScript + Tailwind
STEP 2  Install all dependencies (see Section 5)
STEP 3  Set up design tokens (see Section 8)
STEP 4  Set up fonts (see Section 9)
STEP 5  Create content data files (see Section A)
STEP 6  Build layout components: Header, Footer, Layout wrapper
STEP 7  Build shared/ui primitives: Button, Tag, SectionLabel, Container
STEP 8  Build Home page (all sections in order)
STEP 9  Build Work list page + dynamic case study page
STEP 10 Build Services page
STEP 11 Build Products page
STEP 12 Build About page + Timeline
STEP 13 Build Insights list page + dynamic article page
STEP 14 Build CV page
STEP 15 Build Contact page + server action
STEP 16 Add SEO metadata (see Section B)
STEP 17 Configure .env.example
STEP 18 Run production build — fix all errors and warnings
STEP 19 Final accessibility and performance pass
```

---

## OVERVIEW

Design and build a **premium, production-ready personal portfolio website** for an independent software developer and digital product builder.

This is **not** a generic developer portfolio. The design and copy should communicate competence through the quality of the work and interface — not through exaggerated claims.

### Owner positioning

> **Software Developer & Digital Product Builder**

Supporting line:

> I build technology that solves real problems.

Extended description:

> I design and develop practical digital products, web applications and data-driven solutions for businesses, organizations and entrepreneurs.

### Three simultaneous objectives

1. Secure software development, technology and consulting opportunities.
2. Establish a strong personal professional brand.
3. Showcase and market independently developed technology products.

---

## SECTION 1 — BRAND IDENTITY

Owner's initials: **PA**

Monogram mark: `PA.` (with a trailing period — this is intentional, treat it as a logo mark)

The monogram must work as:
- Navigation mark (top-left desktop, mobile)
- Favicon (generate a simple SVG favicon)
- Social avatar base

On desktop, render the full name beside the monogram. The full name is *[PLACEHOLDER — owner to provide full name]*.

Do not create an elaborate logo. Create a clean SVG file at `public/brand/logo.svg` that renders the `PA.` monogram in the heading typeface using the accent color for the period only.

---

## SECTION 2 — SITE ARCHITECTURE

```
/
├── / (Home)
├── /work (Work index)
│   └── /work/[slug] (Case study)
├── /services
├── /products
├── /about
├── /insights (Insights index)
│   └── /insights/[slug] (Article)
├── /cv
└── /contact
```

**Do not implement** `/uses`, `/now`, `/testimonials`, or `/faq` unless the owner later provides content for them.

---

## SECTION 3 — FIVE-SECOND MESSAGE

Every page section must support this immediate read:

| Question | Answer |
|---|---|
| Who? | A software developer and digital product builder |
| What? | Builds practical software, web apps, data/AI solutions and digital products |
| For whom? | Businesses, organizations, entrepreneurs and teams |
| Why? | To solve real operational and business problems with technology |

---

## SECTION 4 — WHAT THIS IS NOT

**Not** a freelancer template.
**Not** an AI-generated portfolio.
**Not** a SaaS landing page.
**Not** a showcase of hacker aesthetics.
**Not** a neon/cyberpunk interface.

The target aesthetic is: **premium technology publication meets personal product studio.**

---

## SECTION 5 — TECHNOLOGY STACK

### Scaffold command

```bash
npx create-next-app@latest personal-portfolio \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

### Required packages

Install all of the following:

```bash
# Animation
npm install framer-motion

# Forms
npm install react-hook-form zod @hookform/resolvers

# Icons
npm install lucide-react

# Email (transactional — configure via env)
npm install resend

# Fonts (via next/font — no npm package needed, use Google Fonts loader)

# Content/MDX (for insights articles)
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install gray-matter reading-time

# Type utilities
npm install clsx tailwind-merge

# Dev only
npm install -D @types/node
```

### Framework requirements

- **Next.js App Router** — no Pages Router
- **TypeScript strict mode** — `"strict": true` in tsconfig.json
- **Server Components by default** — only add `"use client"` where interactivity requires it
- **Server Actions** — use for the contact form submission

### What to avoid

- No full UI libraries (no MUI, Chakra, Ant Design)
- No shadcn/ui — build the small set of primitives needed from scratch; this prevents the site looking like a stock template
- No unnecessary client components

---

## SECTION 6 — FILE STRUCTURE

Implement this structure exactly:

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata, fonts
│   ├── page.tsx                # Home
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── services/page.tsx
│   ├── products/page.tsx
│   ├── about/page.tsx
│   ├── insights/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── cv/page.tsx
│   ├── contact/page.tsx
│   └── api/
│       └── contact/route.ts    # Email route (fallback if Server Action fails)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── PageWrapper.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Tag.tsx
│   │   ├── Container.tsx
│   │   ├── SectionLabel.tsx    # Small decorative section identifier
│   │   └── Divider.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── CapabilityStrip.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── ProductsPreview.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── AboutSnippet.tsx
│   │   ├── InsightsPreview.tsx
│   │   └── FinalCTA.tsx
│   ├── work/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── CaseStudyLayout.tsx
│   ├── services/
│   │   └── ServiceCard.tsx
│   ├── products/
│   │   └── ProductCard.tsx
│   ├── about/
│   │   └── Timeline.tsx
│   ├── insights/
│   │   ├── ArticleCard.tsx
│   │   └── ArticleGrid.tsx
│   └── contact/
│       └── ContactForm.tsx
│
├── content/
│   ├── projects.ts             # All project/work data
│   ├── services.ts             # Services data
│   ├── products.ts             # Products data
│   ├── insights/               # MDX article files
│   │   ├── index.ts            # Article metadata index
│   │   └── [slug].mdx          # Individual articles
│   ├── timeline.ts             # Career timeline data
│   └── cv.ts                   # CV structured data
│
├── lib/
│   ├── utils.ts                # cn() helper, misc utilities
│   ├── fonts.ts                # next/font configuration
│   └── email.ts                # Resend/email helper
│
├── types/
│   └── index.ts                # All shared TypeScript types
│
└── styles/
    └── globals.css             # Tailwind directives + CSS custom properties
```

**Public directory:**

```
public/
├── brand/
│   └── logo.svg
├── documents/
│   └── cv.pdf                  # [PLACEHOLDER — owner to supply PDF]
├── images/
│   ├── projects/               # Project screenshots (owner to supply)
│   └── og/                     # Open Graph images
└── favicon.ico                 # Generated from logo SVG
```

---

## SECTION 7 — TYPESCRIPT TYPES

Create `src/types/index.ts` with these interfaces. Do not use `any`.

```typescript
export type ProjectStatus = 'live' | 'in-development' | 'completed' | 'archived';
export type ProductStatus = 'live' | 'in-development' | 'beta' | 'paused';

export interface Technology {
  name: string;
  category?: 'frontend' | 'backend' | 'database' | 'infrastructure' | 'other';
}

export interface Project {
  slug: string;
  title: string;
  category: string;          // e.g. "Digital Marketplace · Payments"
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  approach: string;
  solution: string;
  role: string[];            // e.g. ["Backend", "API Integration", "Deployment"]
  outcome: string;
  lessons?: string;
  technologies: Technology[];
  featured: boolean;
  status: ProjectStatus;
  coverImage?: string;       // path relative to /public
  screenshots?: string[];
  externalUrl?: string;
  year: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  deliverables: string[];
  technologies?: string[];
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: ProductStatus;
  coverImage?: string;
  externalUrl?: string;
  featured: boolean;
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface InsightMeta {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;       // ISO 8601 date string
  readingTime?: string;
  tags: string[];
  featured: boolean;
}

export interface CVExperience {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface CVEducation {
  qualification: string;
  institution: string;
  year: string;
  notes?: string;
}
```

---

## SECTION 8 — DESIGN TOKENS

Create these as CSS custom properties in `src/styles/globals.css`. **Also** mirror them as Tailwind config extensions so they are accessible as utility classes.

### Color tokens

```css
:root {
  /* Base surfaces */
  --color-bg:           #0B0D0F;
  --color-surface-1:    #12161A;
  --color-surface-2:    #171C21;
  --color-surface-3:    #1D2329;

  /* Text */
  --color-text-primary:   #F5F5F0;
  --color-text-secondary: #A5ABB2;
  --color-text-muted:     #6B7280;

  /* Borders */
  --color-border:         #252B31;
  --color-border-subtle:  #1D2329;

  /* Accent — warm amber */
  --color-accent:         #E09B3D;
  --color-accent-hover:   #C9872A;
  --color-accent-muted:   rgba(224, 155, 61, 0.12);

  /* Semantic */
  --color-success:        #4CAF7D;
  --color-error:          #E05555;
}
```

### Tailwind config extension (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:         'var(--color-bg)',
        surface:    {
          1: 'var(--color-surface-1)',
          2: 'var(--color-surface-2)',
          3: 'var(--color-surface-3)',
        },
        text: {
          primary:   'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted:     'var(--color-text-muted)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          subtle:  'var(--color-border-subtle)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover:   'var(--color-accent-hover)',
          muted:   'var(--color-accent-muted)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
}

export default config
```

### Accent usage rules

The amber accent **must only** be used for:
- Hyperlinks (on hover/focus)
- Primary CTA button background
- Active navigation indicator
- The period in the `PA.` monogram
- Small status badges
- Key interactive states

**Do not** use amber as a background wash, gradient, or section separator. Keep it rare. When it appears, it should feel deliberate and noticeable.

---

## SECTION 9 — TYPOGRAPHY

### Font setup (`src/lib/fonts.ts`)

```typescript
import { Space_Grotesk, Inter } from 'next/font/google'

export const fontHeading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500'],
})
```

Apply both font variables to the `<html>` element in root layout.

### Type scale

Apply these sizes through Tailwind custom sizing or direct className use:

```
Eyebrow / metadata:  12–13px, font-body, letter-spacing 0.06em
Body:                17–18px, font-body, line-height 1.7
Lead/intro text:     20–22px, font-body, line-height 1.6
Section heading:     clamp(2rem, 4vw, 3.5rem), font-heading, weight 600
Hero headline:       clamp(3.5rem, 7vw, 6.5rem), font-heading, weight 700, line-height 1.05
Monogram:            24px, font-heading, weight 700
```

### Typography rules

- Use **sentence case** for headings and labels. Not ALL CAPS, not Title Case for everything.
- Line length: cap prose at `max-w-prose` (65ch) or `max-w-2xl`.
- Use large editorial heading sizes — they signal confidence without decorative gimmicks.
- Do not italicize or colour a single word mid-headline for emphasis. Let the headline stand as written.
- Headings do not need a small label above them on every single section. Use section labels sparingly — only where they provide real navigational value.

---

## SECTION 10 — ANIMATION PRINCIPLES

Use Framer Motion.

**One orchestrated moment** per page. On the home page, animate only the hero section on initial load (staggered fade-up on headline, sub-copy and CTAs — `y: 20, opacity: 0` → `y: 0, opacity: 1`). That is the memorable animation moment.

After the hero, **do not** add fade-slide-up entrance animations on every section as the user scrolls. This pattern reads as an AI-generated default. Allow content to simply appear, or use minimal opacity transitions only where there is a real reason (e.g., revealing a previously hidden mobile menu).

Hover interactions on cards: a single `translateY(-2px)` with `box-shadow` change is sufficient. Do not scale cards, rotate them, or run complex sequences.

Project card image: a slow `scale(1.03)` on the image container (not the card itself) on hover is acceptable and tasteful.

**Always** respect `prefers-reduced-motion`. Wrap animation variants with:

```typescript
const prefersReducedMotion = 
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const variants = prefersReducedMotion ? {} : { /* your variants */ }
```

---

## SECTION 11 — HEADER

### Desktop layout

```
[PA.  Full Name]          Work  Services  Products  About  Insights       [Let's Work Together]
```

- Position: `sticky top-0 z-50`
- Height: 64px
- Background: transparent on load; transitions to `rgba(11,13,15,0.85)` + `backdrop-filter: blur(12px)` after 40px scroll
- Add `border-bottom: 1px solid var(--color-border)` after scroll
- Use `useEffect` + `scroll` listener for the scroll state (client component)
- Navigation links: `font-body`, 15px, `color: text-secondary`, hover `color: text-primary`
- Active page: `color: text-primary` with a 2px amber underline
- CTA button: amber background, dark text, 14px, compact padding

### Mobile layout

```
[PA.]                                                                      [≡ Menu]
```

- Show hamburger icon (`Menu` from lucide-react)
- Clicking opens a full-screen overlay menu with nav links stacked vertically
- Mobile menu must trap focus, be dismissible with `Escape`, and be `aria-modal="true"`
- Close button (`X`) visible at top-right of mobile menu

---

## SECTION 12 — FOOTER

### Structure

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   PA.   Full Name                           Work  Services  Products  │
│   Software Developer &                      About  Insights  CV       │
│   Digital Product Builder                  Contact                   │
│                                                                      │
│   [OPTIONAL: brief social links — GitHub, LinkedIn]                  │
│                                                                      │
│──────────────────────────────────────────────────────────────────────│
│   © 2025 [Full Name]. All rights reserved.     Built with Next.js    │
└──────────────────────────────────────────────────────────────────────┘
```

- Background: `var(--color-surface-1)`, top border `var(--color-border)`
- Do not make the footer heavy or over-designed
- Social icon links: GitHub and LinkedIn — icon only, `aria-label` required

---

## SECTION 13 — HOME PAGE

Sections render in this exact order:

```
Header
Hero
Capability strip
Selected Work
Services preview
Products preview
Process steps
About snippet
Insights preview
Final CTA
Footer
```

---

## SECTION 14 — HERO SECTION

### Copy

```
[Small label — sentence case, subtle, not ALL CAPS]:
Independent software developer & digital product builder

[Headline]:
I build technology
that solves real problems.

[Supporting copy]:
I design and develop practical digital products, web applications
and data-driven solutions for businesses, organizations and entrepreneurs.

[CTAs]:
  [Primary]   View My Work
  [Secondary] Let's Work Together

[Capability line]:
Software Development  ·  AI & Machine Learning  ·  Digital Products  ·  Technology Solutions
```

### Visual composition

Do **not** use a human stock photograph.

Build an abstract product system visual in the right column (desktop) or below the copy (mobile). This should be crafted from HTML/CSS/SVG — not an image file — so it loads instantly and requires no real screenshots.

The composition should suggest a cluster of interface fragments from the four key products. Implement it as a CSS grid of overlapping, partially visible UI panels:

```
┌────────────────────────────────────┐
│  ┌──────────────────┐              │
│  │  EduIntel        │              │
│  │  ─────────────── │  ┌────────┐  │
│  │  Academic data   │  │ GHData │  │
│  │  visualization   │  │ Market │  │
│  └──────────────────┘  └────────┘  │
│           ┌──────────────────────┐ │
│           │  EduSankofa          │ │
│           │  School Management   │ │
│           └──────────────────────┘ │
│  ┌──────────┐                      │
│  │ Reddy    │                      │
│  │ HMS      │                      │
│  └──────────┘                      │
└────────────────────────────────────┘
```

Each panel: rounded `8px`, `background: var(--color-surface-2)`, border `var(--color-border)`, containing:
- Product name in `font-heading`, 13px, `color: text-primary`
- One-line category in `font-body`, 11px, `color: text-muted`
- A small abstract bar/grid element (pure CSS) suggesting a chart or data grid
- A small amber dot or line as an accent

The panels should be slightly overlapping with different `z-index` values to create depth. Panels near the back can have reduced opacity (`0.6`). The overall effect should look like a living product workspace — not a fake dashboard with numbers.

**No fabricated metrics. No fake charts with numbers. No implied usage statistics.**

---

## SECTION 15 — CAPABILITY STRIP

Heading (left-aligned, prominent):

> Building across technology, business and digital products.

Capabilities (horizontal scroll on mobile, grid on desktop):

```
Software Development
Web Applications
AI / Machine Learning
Data-Driven Solutions
Digital Products
Technology Consulting
```

Render each capability as a simple pill/tag using `var(--color-surface-2)` background and `var(--color-border)` border. Font: `font-body`, 13px, `color: text-secondary`. No icons needed here unless they add real clarity.

Do not fabricate statistics. If the owner later provides verified metrics (years of experience, projects delivered, etc.), add a `<MetricsBar />` component below this strip — but do not render it until real data is provided.

---

## SECTION 16 — SELECTED WORK

### Section header

```
Work that solves real problems.
```

Sub-copy:

```
A selection of digital products, platforms and technology projects
I have designed, developed or contributed to.
```

Link below the grid: `View all work →` pointing to `/work`

### Grid layout

Use an **asymmetric editorial grid** — not a uniform 3-column card grid. Example layout:

```
Row 1: [Large card — full width or 2/3]  [Small card — 1/3]
Row 2: [Small card — 1/3]  [Large card — 2/3]
Row 3: [Large card — full width]
```

On tablet: 2 columns, all equal. On mobile: 1 column.

Show the first 4–5 featured projects. Display a "View all work" link below.

### Project card fields

Each card must render:
- Cover image (use a styled CSS placeholder if no real image — see image strategy below)
- Project title
- Category string
- Short description (2–3 sentences max)
- Technology tags (max 4 visible, with a `+N` overflow count if more)
- "View case study" link — do **not** append `→`; use a small chevron-right icon from lucide-react instead

### Image strategy

When `coverImage` is not set, render a **designed placeholder** — not a grey box, not a broken img tag. Use a CSS gradient composition that reflects the product category:

```typescript
const placeholderGradients: Record<string, string> = {
  'marketplace':    'linear-gradient(135deg, #12161A 0%, #1D2329 100%)',
  'education':      'linear-gradient(135deg, #111B1A 0%, #1A2420 100%)',
  'healthcare':     'linear-gradient(135deg, #111520 0%, #1A1D2E 100%)',
  'default':        'linear-gradient(135deg, #12161A 0%, #171C21 100%)',
}
```

Overlay a subtle SVG pattern (dot grid or cross-hatch at `opacity: 0.08`) plus the product initials in large `font-heading` at `opacity: 0.06`. This gives each placeholder a distinct character.

---

## SECTION 17 — PROJECT CONTENT DATA

Create `src/content/projects.ts` with this seed data. Mark placeholders clearly.

```typescript
import { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'ghdata-market',
    title: 'GHData Market',
    category: 'Digital Marketplace · Payments · E-commerce',
    shortDescription:
      'A digital marketplace designed to simplify the purchase and distribution of mobile data and digital services, with integrated payment processing and agent-based selling.',
    fullDescription:
      // TODO: Owner to expand with full product description
      'GHData Market is a digital marketplace that simplifies how consumers and businesses access mobile data and digital services. The platform handles payment processing, supplier integrations and supports an agent-based distribution model.',
    challenge:
      // TODO: Owner to provide full challenge narrative
      'Mobile data resellers in Ghana operated through fragmented manual processes — WhatsApp orders, manual bank transfers, and no centralised inventory management. Buyers had no reliable digital channel for self-service purchases.',
    approach:
      // TODO: Owner to provide full approach narrative
      'The approach focused on building a reliable transaction layer first — clean payment flows, supplier API integration, and real-time inventory — before layering on the agent and marketplace features.',
    solution:
      // TODO: Owner to provide full solution narrative
      'A web-based marketplace with consumer self-service, agent dashboard, supplier integration and automated payment reconciliation.',
    role: ['Product Strategy', 'Backend Development', 'API Integration', 'Deployment'],
    outcome:
      // TODO: Owner to provide outcome — use qualitative if no metrics are available
      'A functional marketplace enabling digital data sales through a structured, reliable platform rather than informal channels.',
    lessons:
      // TODO: Owner to provide lessons learned
      undefined,
    technologies: [
      { name: 'Node.js', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Payment APIs', category: 'other' },
      { name: 'REST APIs', category: 'other' },
    ],
    featured: true,
    status: 'live',
    coverImage: undefined, // TODO: Owner to supply — /images/projects/ghdata-cover.jpg
    year: 2024,
  },
  {
    slug: 'edusankofa',
    title: 'EduSankofa',
    category: 'Education Technology · School Management',
    shortDescription:
      'A school management platform built around the operational realities of private basic schools — bringing students, staff, finance and parent communication into one system.',
    fullDescription:
      // TODO: Owner to expand
      'EduSankofa is a school management platform designed specifically for private basic schools. It consolidates student records, teacher workflows, financial management and parent communication into a single, usable system.',
    challenge:
      // TODO: Owner to provide
      'Private basic schools in Ghana manage critical administrative processes across disconnected spreadsheets, paper records and manual systems — creating data gaps, inefficiency and communication failures with parents.',
    approach:
      // TODO: Owner to provide
      'Rather than replicating Western school management software, the system was designed around the specific operational patterns and constraints of private basic schools in the Ghanaian context.',
    solution:
      // TODO: Owner to provide
      'A web-based platform covering student management, fee tracking, teacher administration, parent portal and reporting — with a file-backed data architecture suited to the deployment environment.',
    role: ['Product Strategy', 'UX', 'Frontend', 'Backend', 'Database'],
    outcome:
      // TODO: Owner to provide
      'A functional platform replacing manual administrative processes in the target school context.',
    technologies: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'File-backed data', category: 'database' },
    ],
    featured: true,
    status: 'in-development',
    coverImage: undefined,
    year: 2024,
  },
  {
    slug: 'reddy-hms',
    title: 'Reddy HMS',
    category: 'Healthcare Technology · Management Systems',
    shortDescription:
      'A healthcare management platform supporting hospital workflows including patient management, billing, pharmacy, laboratory and claims processes.',
    fullDescription:
      // TODO: Owner to expand
      'Reddy HMS is a comprehensive healthcare management system designed to support hospital operations. It covers patient registration, clinical workflows, billing, pharmacy and laboratory management, and insurance claims processing.',
    challenge:
      // TODO: Owner to provide
      'Hospital staff were managing patient records, billing and clinical workflows through a mix of manual paper processes and disconnected systems — creating inefficiency, errors and gaps in patient data continuity.',
    approach:
      // TODO: Owner to provide
      'Built as a modular system using a proven PHP/MySQL stack to ensure reliable deployment on existing hospital infrastructure without requiring major hardware investment.',
    solution:
      // TODO: Owner to provide
      'A web-based HMS with modules for patient management, OPD/IPD, billing, pharmacy, laboratory and claims — built on CodeIgniter with a clean administrative interface.',
    role: ['Backend Development', 'Database Design', 'Frontend', 'Technical Direction'],
    outcome:
      // TODO: Owner to provide qualitative outcome
      'A working hospital management platform handling core clinical and administrative workflows.',
    technologies: [
      { name: 'PHP', category: 'backend' },
      // IMPORTANT: This project uses CodeIgniter — do NOT substitute Laravel
      { name: 'CodeIgniter', category: 'backend' },
      { name: 'MySQL', category: 'database' },
      { name: 'AdminLTE', category: 'frontend' },
      { name: 'Bootstrap', category: 'frontend' },
      { name: 'jQuery', category: 'frontend' },
    ],
    featured: true,
    status: 'completed',
    coverImage: undefined,
    year: 2023,
  },
  {
    slug: 'eduintel',
    title: 'EduIntel',
    category: 'Academic Intelligence · Data · SaaS',
    shortDescription:
      'An academic intelligence platform focused on transforming school performance data into clearer insights for educators and administrators.',
    fullDescription:
      // TODO: Owner to expand — only describe functionality that has been implemented
      'EduIntel is an academic intelligence platform that helps schools understand their performance data more clearly. It processes academic records and surfaces patterns to support better decision-making by educators and administrators.',
    challenge:
      // TODO: Owner to provide
      'Schools collect substantial amounts of academic data — exam results, attendance, progression — but lack tools to turn that data into actionable insights. Analysis happens manually, inconsistently, or not at all.',
    approach:
      // TODO: Owner to provide
      'Focus on the data pipeline first: clean intake, structured storage, and reliable processing before building visualisation and reporting layers.',
    solution:
      // TODO: Owner to provide — only describe what has been built
      'A SaaS platform providing academic data intake, processing and insight generation for school administrators and educators.',
    role: ['Product Strategy', 'Frontend', 'Backend', 'Data Architecture'],
    outcome:
      // TODO: Owner to provide — do not invent metrics
      'An in-development platform building toward production deployment.',
    technologies: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Data workflows', category: 'other' },
      { name: 'AI/ML', category: 'other' },
      { name: 'SaaS architecture', category: 'other' },
    ],
    featured: true,
    status: 'in-development',
    coverImage: undefined,
    year: 2025,
  },
  {
    slug: 'agribiz-africa',
    title: 'Agribiz Africa',
    category: 'Web Development · Digital Strategy',
    shortDescription:
      'A digital platform and online growth initiative supporting an agricultural business with web presence, customer engagement and digital content.',
    fullDescription:
      // TODO: Owner to expand
      'A web presence and digital strategy project supporting an agricultural business in establishing their online presence, engaging customers and building a content platform.',
    challenge:
      // TODO: Owner to provide
      'An agricultural business needed to establish a credible, functional online presence to reach new customers and communicate their products and services clearly.',
    approach:
      // TODO: Owner to provide
      'Focused on building a clear, fast-loading web presence that worked well on mobile — the primary access device for the target audience — while establishing a foundation for ongoing content and digital engagement.',
    solution:
      // TODO: Owner to provide
      'A professional website with product/service presentation, contact integration and a content section supporting ongoing digital engagement.',
    role: ['Web Development', 'Digital Strategy'],
    outcome:
      // TODO: Owner to provide qualitative outcome
      'A professional digital presence enabling the business to reach customers through online channels.',
    technologies: [
      // TODO: Owner to verify and supply specific technologies used
      { name: 'Web technologies', category: 'other' },
    ],
    featured: true,
    status: 'completed',
    coverImage: undefined,
    year: 2023,
  },
]

export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).slice(0, 5)

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug)
```

---

## SECTION 18 — SERVICES PAGE

### Hero

```
Heading:  Technology built around your goals.

Sub-copy: From websites and business applications to intelligent
          data-driven solutions, I help turn technology ideas and
          operational challenges into practical products.
```

### Services content (`src/content/services.ts`)

```typescript
import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description:
      'Custom web applications and business systems designed around specific operational needs — built to actually work in your context, not adapted from a generic template.',
    problemSolved:
      'When off-the-shelf software does not fit your workflow, or when your operations have grown beyond spreadsheets and manual processes.',
    deliverables: [
      'Custom web applications',
      'Business management systems',
      'API design and integration',
      'Database architecture',
      'Technical documentation',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Professional websites and digital experiences that communicate your brand clearly and support business growth — from marketing sites to customer-facing platforms.',
    problemSolved:
      'When your current web presence does not reflect the quality of your work, or when you need a new one built properly from the start.',
    deliverables: [
      'Marketing and brand websites',
      'Landing pages',
      'Content platforms',
      'Performance optimisation',
      'Accessibility improvements',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    description:
      'Practical applications of machine learning and intelligent systems to real data and business problems — focused on what is actually useful, not what is technically impressive.',
    problemSolved:
      'When you have data that could be working harder, or when repetitive analytical tasks are consuming time that could go elsewhere.',
    deliverables: [
      'Predictive models',
      'Data analysis pipelines',
      'Intelligent feature integration',
      'ML model evaluation',
      'Technical advisory',
    ],
    technologies: ['Python', 'Machine learning frameworks', 'Data pipelines'],
  },
  {
    id: 'technology-consulting',
    title: 'Technology Consulting',
    description:
      'Helping businesses and organizations translate technology ideas and operational challenges into a clear, practical direction — without the complexity of a large agency engagement.',
    problemSolved:
      'When you have a technology idea but are unsure how to approach it, what to build first, or how to evaluate options.',
    deliverables: [
      'Technology assessment',
      'Product and systems planning',
      'Build-vs-buy analysis',
      'Architecture review',
      'Roadmap development',
    ],
  },
]
```

Each service renders as a full section on the `/services` page — not a small card. Structure:

```
[Large service number — styled as decorative element, e.g. "01"]
[Service title — large heading]
[Description paragraph]
[Problem it solves — short block, visually distinct]
[Deliverables — inline list, not bullet points]
[Technologies if present — tech tags]
[CTA: "Discuss your project"]
```

Use the number purely as a structural/visual device if the services are ordered meaningfully. If they are not sequential, omit numbers.

**Do not show pricing** unless pricing information is explicitly supplied by the owner.

---

## SECTION 19 — PRODUCTS PAGE

### Hero

```
Heading:  I am not only building for clients.

Sub-copy: I am also building technology products of my own —
          exploring practical solutions to problems across
          education, commerce and business operations.
```

### Products content (`src/content/products.ts`)

```typescript
import { Product } from '@/types'

export const products: Product[] = [
  {
    slug: 'eduintel',
    name: 'EduIntel',
    tagline: 'Academic intelligence for schools',
    description:
      'An academic intelligence platform transforming school performance data into clearer insights for educators and administrators.',
    category: 'Education Technology',
    status: 'in-development',
    coverImage: undefined,
    featured: true,
  },
  {
    slug: 'edusankofa',
    name: 'EduSankofa',
    tagline: 'School management built for how schools actually work',
    description:
      'A school management platform designed around the operational realities of private basic schools.',
    category: 'Education Technology',
    status: 'in-development',
    coverImage: undefined,
    featured: true,
  },
  {
    slug: 'ghdata-market',
    name: 'GHData Market',
    tagline: 'Buy and sell mobile data and digital services',
    description:
      'A digital marketplace for mobile data and digital services with integrated payments and agent-based distribution.',
    category: 'Commerce & Payments',
    status: 'live',
    // TODO: Owner to provide externalUrl when ready to link
    externalUrl: undefined,
    coverImage: undefined,
    featured: true,
  },
]
```

### Product card design

Products must feel like **real products**, not portfolio projects. Each card:
- Product name at large size
- One-line tagline below the name
- Category as a small label
- Status badge: `Live`, `In Development`, or `Beta` — color coded:
  - Live: amber text, amber border
  - In Development: muted text, muted border
- Short description
- Abstract product visual (same CSS placeholder strategy as project cards)
- "Explore product" link (or greyed-out if no external URL yet)

---

## SECTION 20 — ABOUT PAGE

### Hero

```
Heading:  Technology should be useful before it is impressive.
```

### Body copy

```
I am a software developer and digital product builder focused on
creating practical technology solutions for real-world problems.

My work sits at the intersection of software development, data,
artificial intelligence and digital business.

I enjoy taking an idea or operational challenge, understanding what
is actually needed, and turning it into a usable technology solution.

Alongside client and business projects, I build and experiment with
products of my own — because the best way to understand technology
is to keep building.
```

Do not make the about page overly autobiographical. Focus on professional journey, philosophy, capabilities and product-building mindset.

### Professional timeline (`src/content/timeline.ts`)

```typescript
import { TimelineEntry } from '@/types'

export const timeline: TimelineEntry[] = [
  {
    year: '2007',
    title: 'Certificate Higher Education',
    subtitle: 'System Support & Analysis',
    description: undefined, // TODO: Owner to add institution/detail if desired
  },
  {
    year: '2022',
    title: 'BSc Computer Science & Information Systems',
    subtitle: undefined, // TODO: Owner to add institution
    description: undefined,
  },
  {
    year: '2025',
    title: 'Machine Learning & AI',
    subtitle: 'Professional training and development',
    description: undefined, // TODO: Owner to add specific program/institution if desired
  },
  {
    year: 'Present',
    title: 'Independent Technology Practice',
    subtitle: 'Software Development · AI/ML · Digital Products · Consulting',
    description: undefined,
  },
]
```

Timeline component design:
- Vertical line in `var(--color-border)` on the left
- Year in `font-heading`, large, `color: text-muted` — used as a visual structural element
- Title in `font-heading`, weight 600
- Subtitle in `font-body`, `color: text-secondary`
- Connecting dot in `var(--color-accent)` at each milestone
- Clean, spacious — not cramped

---

## SECTION 21 — HOW I WORK

Section heading:

```
From problem to product.
```

Steps (these are a genuine sequence, so numbered markers are appropriate here):

```
1  Understand
   I start by understanding the business, users and actual problem
   before anything is designed or built.

2  Plan
   I translate requirements into a practical technical approach —
   what to build, how, and in what order.

3  Build
   I develop, test and refine the solution iteratively,
   keeping the goal in view at every stage.

4  Launch
   I help bring the product into a usable production environment.

5  Improve
   Real-world use reveals what to sharpen.
   I use feedback to improve the solution over time.
```

Design: clean numbered list, generous spacing. Number displayed large in `color: text-muted` as a visual element. Single brief reveal animation when the section scrolls into view — not per-item animation.

---

## SECTION 22 — INSIGHTS SECTION (HOME PREVIEW)

Section heading:

```
Ideas, lessons and things I think about.
```

Sub-copy:

```
Writing on software development, product building, and technology.
```

Show the 3 most recent featured articles as cards. Link to `/insights` for more.

---

## SECTION 23 — INSIGHTS PAGE

### Seed articles (`src/content/insights/index.ts`)

Create these as MDX files with the metadata in the index file. The MDX content itself can be placeholder paragraphs — mark clearly with `<!-- TODO: Owner to write full article -->` comments.

```typescript
import { InsightMeta } from '@/types'

export const insights: InsightMeta[] = [
  {
    slug: 'building-for-context',
    title: 'Building software for the context it will actually be used in',
    excerpt:
      'The gap between how software is designed and how it is actually used in the field is often wider than developers expect. Bridging it requires more than good UX.',
    publishedAt: '2025-09-01',
    readingTime: '5 min read',
    tags: ['Software Development', 'Product'],
    featured: true,
  },
  {
    slug: 'practical-ai-in-products',
    title: 'What practical AI integration actually looks like in a real product',
    excerpt:
      'Adding machine learning to a product is less about the model and more about the data pipeline, the integration point, and whether the output is actually useful to the person using it.',
    publishedAt: '2025-08-15',
    readingTime: '6 min read',
    tags: ['AI', 'Machine Learning', 'Product'],
    featured: true,
  },
  {
    slug: 'data-marketplaces-ghana',
    title: 'What building a digital data marketplace taught me about payments infrastructure',
    excerpt:
      'Building GHData Market surfaced challenges around payments, trust and distribution that no amount of planning fully prepared for.',
    publishedAt: '2025-07-20',
    readingTime: '7 min read',
    tags: ['Product', 'Commerce', 'GHData Market'],
    featured: true,
  },
]
```

Article card fields: title, excerpt, date, reading time, tags. No cover images required — use a typographic card design.

---

## SECTION 24 — CV PAGE

### Page structure

```
Profile
Core Skills
Professional Experience
Selected Projects
Education
Certifications
Technical Skills
```

Provide a "Download CV" button that links to `/documents/cv.pdf`. The file should be placed at `public/documents/cv.pdf`. If no file is available at build time, still render the download button but note in a `// TODO:` comment that the PDF file needs to be placed there.

CV data (`src/content/cv.ts`):

```typescript
import { CVExperience, CVEducation } from '@/types'

// Profile
export const cvProfile = `
Software Developer and Digital Product Builder with experience across
web application development, AI and machine learning, data-driven solutions
and technology consulting. I focus on building practical technology that
solves real operational problems for businesses and organizations.
`.trim()

// Core skills
export const coreSkills = [
  'Software Development',
  'Web Application Development',
  'AI & Machine Learning',
  'Data-Driven Solutions',
  'Digital Product Development',
  'Technology Consulting',
  'Full Stack Development',
]

// Experience
// TODO: Owner to provide professional experience entries
export const experience: CVExperience[] = [
  {
    title: '[PLACEHOLDER — Role Title]',
    organization: '[PLACEHOLDER — Organization]',
    period: '[PLACEHOLDER — e.g. 2022–Present]',
    description: '[PLACEHOLDER — Describe responsibilities and achievements]',
    highlights: [],
  },
]

// Education
export const education: CVEducation[] = [
  {
    qualification: 'BSc Computer Science & Information Systems',
    institution: '[PLACEHOLDER — Institution name]',
    year: '2022',
  },
  {
    qualification: 'Certificate Higher Education — System Support & Analysis',
    institution: '[PLACEHOLDER — Institution name]',
    year: '2007',
  },
]

// Certifications
// TODO: Owner to provide certifications
export const certifications: CVEducation[] = [
  {
    qualification: 'Machine Learning & AI',
    institution: '[PLACEHOLDER — Provider]',
    year: '2025',
  },
]

// Technical skills by category
export const technicalSkills = {
  languages: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'SQL'],
  frameworks: ['Next.js', 'React', 'Node.js', 'CodeIgniter'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
  tools: ['Git', 'GitHub', 'Vercel', 'Docker (basics)'],
  other: ['REST APIs', 'Machine Learning', 'Data Analysis'],
}
```

The CV page should render cleanly and professionally. It must be printable — add `@media print` styles that:
- Hide the site header and footer
- Use white background with dark text
- Remove decorative elements
- Format the content as a clean document

---

## SECTION 25 — CONTACT PAGE

### Hero

```
Heading:  Let's work on something real.

Sub-copy: Whether you have a project in mind, a technology problem to
          solve, or simply want to explore possibilities — reach out.
```

### Contact channels

Show email as a direct link (owner to supply). Show LinkedIn link if provided.

Do not show phone number unless owner explicitly provides it for public display.

### Contact form

Fields:
- Name (required)
- Email (required, email format)
- Subject (optional)
- Message (required, min 20 characters)

Implement with React Hook Form + Zod.

Server Action implementation:

```typescript
// src/app/contact/actions.ts
'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  name:    z.string().min(2, 'Please enter your name'),
  email:   z.string().email('Please enter a valid email address'),
  subject: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

export async function submitContactForm(formData: z.infer<typeof schema>) {
  const parsed = schema.safeParse(formData)
  if (!parsed.success) {
    return { success: false, error: 'Validation failed' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL ?? 'noreply@example.com',
      to:      process.env.CONTACT_EMAIL ?? '',
      subject: `Portfolio contact: ${parsed.data.subject ?? 'New message'}`,
      text:    `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
```

Form UX:
- Inline validation errors below each field (not toasts)
- Submit button shows loading state while submitting
- On success: replace form with a clean confirmation message
- On error: show a persistent error message above the submit button
- Accessible error messages linked to fields via `aria-describedby`

---

## SECTION 26 — FINAL CTA (HOME)

Section heading:

```
Ready to build something?
```

Sub-copy:

```
If you have a technology project, an idea you want to explore,
or a problem worth solving — let's talk.
```

Two buttons:
- Primary: "Start a conversation" → `/contact`
- Secondary: "View my work" → `/work`

This section sits directly above the footer. Use a contained width, centered layout. No background gimmicks — let the dark surface speak.

---

## SECTION A — ENVIRONMENT VARIABLES

Create `.env.example` at project root:

```bash
# Email (Resend) — required for contact form
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=hello@yourdomain.com
CONTACT_EMAIL=your@email.com

# Site
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=PA — Software Developer & Digital Product Builder

# Analytics (optional — add your provider token here)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## SECTION B — SEO METADATA

Create a `generateMetadata` function in `src/lib/seo.ts`:

```typescript
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PA — Software Developer & Digital Product Builder',
    template: '%s · PA',
  },
  description:
    'I design and develop practical digital products, web applications and data-driven solutions for businesses, organizations and entrepreneurs.',
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         siteUrl,
    siteName:    'PA — Software Developer & Digital Product Builder',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card:    'summary_large_image',
    images:  ['/og/default.png'],
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export function buildMetadata(overrides: Partial<Metadata>): Metadata {
  return { ...defaultMetadata, ...overrides }
}
```

Apply page-specific metadata on every route:
- `/work` → "Work · PA"
- `/work/[slug]` → "[Project title] — Case Study · PA"
- `/services` → "Services · PA"
- `/products` → "Products · PA"
- `/about` → "About · PA"
- `/insights` → "Insights · PA"
- `/cv` → "CV · PA"
- `/contact` → "Contact · PA"

---

## SECTION C — ACCESSIBILITY REQUIREMENTS

Every interactive element must:
- Have a visible focus ring (use `focus-visible:ring-2 focus-visible:ring-accent` with Tailwind)
- Be keyboard navigable (tab order must be logical)
- Have accessible text (`aria-label` on icon-only buttons)

Semantic HTML requirements:
- `<header>`, `<nav>`, `<main>`, `<footer>` landmarks
- `<h1>` on every page (once)
- Logical heading hierarchy (no skipping from h1 to h4)
- `<button>` for actions, `<a>` for navigation
- Form inputs paired with `<label>` elements
- Error messages linked via `aria-describedby`

Image requirements:
- All `<img>` and `next/image` elements have `alt` text
- Decorative elements use `alt=""`

Colour contrast:
- Body text on all surfaces must meet 4.5:1 minimum contrast ratio
- Check: `#F5F5F0` on `#0B0D0F` — passes easily
- Check: `#A5ABB2` on `#0B0D0F` — must verify; if it fails, lighten `--color-text-secondary`

---

## SECTION D — PERFORMANCE TARGETS

These are genuine targets, not claimed achievements. The build must be optimised to hit them.

```
Lighthouse Performance:   90+
Lighthouse Accessibility: 95+
Lighthouse Best Practices:95+
Lighthouse SEO:           95+
```

Optimisation rules:
- Use `next/image` for all images — never raw `<img>` for content images
- Use `next/font` for all fonts — no `<link>` tags to Google Fonts
- Avoid `"use client"` unless the component genuinely needs interactivity
- No third-party analytics scripts by default (owner can add via env config)
- Avoid loading animation libraries globally — import Framer Motion only in components that use it
- Minimise JavaScript in the global bundle

---

## SECTION E — BUILD VERIFICATION CHECKLIST

Before handing off, verify all of the following:

```
[ ]  npm run build — completes with zero errors
[ ]  npm run build — no TypeScript errors (strict mode)
[ ]  All pages render without console errors in the browser
[ ]  All internal links resolve (no 404s)
[ ]  Contact form: validation works, server action runs
[ ]  Mobile menu: opens, closes, keyboard accessible
[ ]  All project card placeholders render gracefully (no broken images)
[ ]  All TODO: comments are present and findable via search
[ ]  .env.example is committed (never .env with real keys)
[ ]  public/documents/cv.pdf — placeholder file or real file present
[ ]  Favicon renders correctly in browser tab
[ ]  Open Graph image exists at public/og/default.png
[ ]  Reduced motion: animations respect prefers-reduced-motion
[ ]  Tab through entire home page — focus rings visible throughout
[ ]  Run Lighthouse on home page — performance and accessibility scores
```

---

## SECTION F — WHAT TO DO WITH PLACEHOLDERS

When the build is complete, the owner should be able to find all content needing replacement by searching the codebase for:

```
// TODO:
<!-- TODO:
[PLACEHOLDER
```

This must account for:
- Professional experience entries in `cv.ts`
- Institution names in `timeline.ts`
- Full name in multiple places
- Contact email address
- Product external URLs
- Project full descriptions, challenges, approaches, outcomes
- Cover images for projects and products
- The `cv.pdf` document in `public/documents/`
- Any external links (GitHub, LinkedIn)

---

## SECTION G — DESIGN NOTES FOR THE AGENT

These notes override any default stylistic preferences.

**Do not:**
- Use ALL CAPS for section labels or capability names in rendered UI
- Append `→` as a text character to every link and button; use a `ChevronRight` icon from lucide-react instead where directionality is needed
- Add a small tracked-out ALL CAPS eyebrow label above every single heading; use them sparingly
- Add fade-slide-up scroll animations on every section
- Make every card identical in size and proportion
- Scatter decorative gradients across the page
- Use near-black-with-a-tint backgrounds (e.g. `#0B0B0B`) — use the specified token `--color-bg: #0B0D0F` which has a slightly blue-grey character
- Italicize or color a single word mid-headline for emphasis

**Do:**
- Let whitespace do the heavy lifting between sections
- Use large, confident editorial typography for headings
- Keep the amber accent rare and deliberate
- Use structural borders (`border-bottom`, `border-top`) rather than heavy background blocks
- Make the hero visual composition the most characterful element on the page
- Ensure every design decision can be explained by the brief, not by convention

---

*End of Master Build Prompt — version 2.0*

*Generated: September 2026*
