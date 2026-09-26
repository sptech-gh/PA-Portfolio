# PORTFOLIO DATA SUPPLEMENT
## Real Owner Data — Apply on Top of Master Build Prompt

> **For the AI agent:** This file overrides every `[PLACEHOLDER]` and `// TODO:` marked item in `PORTFOLIO_BUILD_PROMPT.md`. Apply all values here exactly as written. Do not invent data. Do not omit fields. Where a live URL is provided, use it as `externalUrl` on the relevant project or product.

---

## 1. OWNER IDENTITY

```
Full name:    Prosper Ami
Monogram:     PA.
Email:        sedempee@gmail.com
Location:     Kumasi, Ashanti Region, Ghana
LinkedIn:     https://www.linkedin.com/in/prosper-ami-469037a4
GitHub:       https://github.com/sptech-gh
Company:      SPtech Ghana
```

Replace every instance of `[Full Name]`, `[PLACEHOLDER — owner to provide full name]`, and `PA. Full Name` in the codebase with **Prosper Ami**.

Update the Header component:
```
Desktop: [PA.  Prosper Ami]
Mobile:  [PA.]
```

---

## 2. SOCIAL LINKS

Update `src/components/layout/Footer.tsx` and any social link component:

```typescript
export const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prosper-ami-469037a4',
    icon: 'Linkedin',   // lucide-react icon name
  },
  {
    label: 'GitHub',
    url: 'https://github.com/sptech-gh',
    icon: 'Github',
  },
]
```

---

## 3. CONTACT DETAILS

Update `.env.example`:

```bash
CONTACT_EMAIL=sedempee@gmail.com
NEXT_PUBLIC_SITE_URL=https://prosperami.dev   # owner to confirm final domain
NEXT_PUBLIC_SITE_NAME=Prosper Ami — Software Developer & Digital Product Builder
```

On the Contact page, display email as a direct link:

```
sedempee@gmail.com
```

---

## 4. UPDATED PROJECTS DATA

Replace the entire `projects` array in `src/content/projects.ts` with the following.
All five original projects are retained and updated. Three new projects are added.

```typescript
import { Project } from '@/types'

export const projects: Project[] = [

  // ─── FEATURED PRODUCTS / PLATFORMS ───────────────────────────────────────

  {
    slug: 'ghdata-market',
    title: 'GHData Market',
    category: 'Digital Marketplace · Payments · E-commerce',
    shortDescription:
      'A digital marketplace for mobile data and digital services, with integrated payment processing, supplier connections and agent-based selling.',
    fullDescription:
      'GHData Market is a digital marketplace that simplifies how consumers and businesses buy and distribute mobile data and digital services in Ghana. The platform handles the full transaction flow — payment processing, supplier API integration and an agent-based distribution model — in a single, reliable system.',
    challenge:
      'Mobile data resellers operated through fragmented informal channels: WhatsApp orders, manual bank transfers and no centralised inventory or transaction history. Buyers had no self-service option and agents had no structured tooling.',
    approach:
      'Build a reliable transaction layer first — clean payment flows, supplier API integration and real-time inventory — before adding agent dashboards and marketplace features. Each layer was tested in the real distribution context before the next was built.',
    solution:
      'A web-based marketplace with consumer self-service purchasing, an agent management dashboard, supplier integration and automated payment reconciliation.',
    role: ['Product Strategy', 'Backend Development', 'API Integration', 'Deployment'],
    outcome:
      'A live platform enabling structured digital data sales, replacing informal manual channels with a reliable, trackable transaction system.',
    technologies: [
      { name: 'Node.js', category: 'backend' },
      { name: 'React', category: 'frontend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Payment APIs', category: 'other' },
      { name: 'REST APIs', category: 'other' },
    ],
    featured: true,
    status: 'live',
    coverImage: undefined,
    externalUrl: 'https://ghdata-market.vercel.app/login',
    year: 2024,
  },

  {
    slug: 'kensa-sms',
    title: 'Kensa SMS',
    category: 'Education Technology · School Management',
    shortDescription:
      'A school management platform built around the operational realities of private basic schools — students, staff, finance and parent communication in one system.',
    fullDescription:
      'Kensa SMS is a school management platform designed specifically for private basic schools. It consolidates student records, teacher workflows, fee management and parent communication into a single usable system — designed around how these schools actually run, not how enterprise software assumes they do.',
    challenge:
      'Private basic schools manage critical administrative processes across disconnected spreadsheets, paper records and manual systems. This creates data gaps, fee tracking errors and communication failures with parents that accumulate into real operational problems.',
    approach:
      'Rather than adapting a Western school management product, the system was designed from the ground up around the specific workflows and constraints of private basic schools in Ghana — including fee structures, term calendars and how teachers and administrators actually interact with data.',
    solution:
      'A web-based platform covering student management, term-based fee tracking, teacher administration, a parent portal and academic reporting.',
    role: ['Product Strategy', 'UX', 'Frontend', 'Backend', 'Database'],
    outcome:
      'A live school management platform replacing manual administrative processes with a structured digital system suited to the target school context.',
    technologies: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'File-backed data', category: 'database' },
    ],
    featured: true,
    status: 'live',
    coverImage: undefined,
    externalUrl: 'https://kensa-sms.vercel.app/login',
    year: 2024,
  },

  {
    slug: 'reddy-hms',
    title: 'Reddy HMS',
    category: 'Healthcare Technology · Management Systems',
    shortDescription:
      'A hospital management platform supporting patient management, billing, pharmacy, laboratory and insurance claims processes.',
    fullDescription:
      'Reddy HMS is a comprehensive hospital management system designed to support the operational workflows of a healthcare facility. It covers patient registration, outpatient and inpatient management, billing, pharmacy dispensing, laboratory results and insurance claims processing — all from a single system.',
    challenge:
      'Hospital staff managed patient records, billing and clinical workflows through a mix of manual paper processes and disconnected systems, creating inefficiency, reconciliation errors and gaps in patient data continuity.',
    approach:
      'Built on a proven PHP/MySQL stack to ensure reliable deployment on existing hospital infrastructure without requiring major hardware investment. Modules were prioritised by operational impact — patient management and billing first, clinical modules layered on top.',
    solution:
      'A web-based HMS with modules for patient management, OPD/IPD workflows, billing, pharmacy, laboratory and claims — built on CodeIgniter with a clean administrative interface.',
    role: ['Backend Development', 'Database Design', 'Frontend', 'Technical Direction'],
    outcome:
      'A working hospital management platform handling core clinical and administrative workflows for the client facility.',
    // IMPORTANT: This project uses CodeIgniter/PHP — do NOT substitute Laravel
    technologies: [
      { name: 'PHP', category: 'backend' },
      { name: 'CodeIgniter', category: 'backend' },
      { name: 'MySQL', category: 'database' },
      { name: 'AdminLTE', category: 'frontend' },
      { name: 'Bootstrap', category: 'frontend' },
      { name: 'jQuery', category: 'frontend' },
    ],
    featured: true,
    status: 'completed',
    coverImage: undefined,
    externalUrl: undefined, // Live URL to be supplied by owner
    year: 2023,
  },

  {
    slug: 'eduintel',
    title: 'EduIntel',
    category: 'Academic Intelligence · Data · SaaS',
    shortDescription:
      'An academic intelligence platform transforming school performance data into clearer, actionable insights for educators and administrators.',
    fullDescription:
      'EduIntel is an academic intelligence platform that helps schools understand their performance data more clearly. It processes academic records — exam results, attendance, subject performance — and surfaces patterns to support better decision-making by educators and administrators.',
    challenge:
      'Schools collect significant academic data but lack tools to turn it into actionable insight. Analysis happens manually, inconsistently, or not at all — meaning patterns that could improve teaching and resource allocation go unnoticed.',
    approach:
      'Focus on the data pipeline first: clean intake, structured storage, and reliable processing. Build insight and reporting layers on a solid data foundation rather than rushing to visualisation.',
    solution:
      'A SaaS platform providing academic data intake, processing and insight generation for school administrators and educators, with an AI/ML layer for pattern detection and reporting.',
    role: ['Product Strategy', 'Frontend', 'Backend', 'Data Architecture'],
    outcome:
      'An in-development platform building toward production deployment, with core data processing and reporting modules in progress.',
    technologies: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Data pipelines', category: 'other' },
      { name: 'AI/ML', category: 'other' },
      { name: 'SaaS architecture', category: 'other' },
    ],
    featured: true,
    status: 'in-development',
    coverImage: undefined,
    externalUrl: undefined, // Live URL to be supplied by owner
    year: 2025,
  },

  // ─── CLIENT / WEB PROJECTS ────────────────────────────────────────────────

  {
    slug: 'commax-healthcare',
    title: 'Commax Healthcare',
    category: 'Web Development · Healthcare',
    shortDescription:
      'A professional web presence for a healthcare company, designed to communicate services clearly and support patient and client engagement.',
    fullDescription:
      'A website project for Commax Healthcare — a healthcare company needing a credible, professional online presence to communicate their services, support patient inquiries and build trust with clients and partners.',
    challenge:
      'The company needed a professional digital presence that reflected the seriousness of a healthcare business — clear, trustworthy, and accessible — without the complexity of a full patient management system.',
    approach:
      'Built a clean, well-structured website focused on clarity and credibility. Prioritised clear service descriptions, accessible contact channels and a design that matched the professionalism expected in healthcare.',
    solution:
      'A professional healthcare website with service pages, contact integration and a clean, trust-building design.',
    role: ['Web Development', 'Frontend'],
    outcome:
      'A live professional web presence supporting the company\'s client-facing communications.',
    technologies: [
      { name: 'Web technologies', category: 'frontend' },
    ],
    featured: false,
    status: 'live',
    coverImage: undefined,
    externalUrl: 'https://commaxhealthcare.com/',
    year: 2023,
  },

  {
    slug: 'avar-logistics',
    title: 'AVAR Logistics Africa',
    category: 'Web Development · Logistics',
    shortDescription:
      'A web platform for a logistics company in Africa, supporting their digital presence and customer-facing operations.',
    fullDescription:
      'A web development project for AVAR Logistics Africa — a logistics company requiring a structured digital presence to support their operations, communicate capabilities and engage customers.',
    challenge:
      'The logistics business needed a clear, functional digital presence that communicated their services and coverage reliably — particularly for mobile users across the region.',
    approach:
      'Built a fast, mobile-optimised web platform focused on clear service communication and straightforward customer contact.',
    solution:
      'A logistics company web platform covering services, coverage information and customer engagement.',
    role: ['Web Development', 'Frontend'],
    outcome:
      'A live web platform supporting the company\'s digital operations and customer communications.',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
    ],
    featured: false,
    status: 'live',
    coverImage: undefined,
    externalUrl: 'https://avar-logistics-africa.vercel.app/',
    year: 2024,
  },

  {
    slug: 'agribiz-africa',
    title: 'Agribiz Africa',
    category: 'Web Development · Digital Strategy',
    shortDescription:
      'A digital platform and online growth initiative supporting an agricultural business with web presence, customer engagement and content.',
    fullDescription:
      'A web presence and digital strategy project supporting an agricultural business in establishing their online platform, reaching customers and building a content foundation for ongoing digital engagement.',
    challenge:
      'An agricultural business needed a credible, functional online presence to reach new customers and communicate products and services clearly — with a target audience primarily accessing the web on mobile.',
    approach:
      'Built a mobile-first web presence that loaded fast and communicated clearly, establishing a solid foundation for ongoing content and digital engagement without over-engineering the initial build.',
    solution:
      'A professional website with product and service presentation, contact integration and a content platform for ongoing digital activity.',
    role: ['Web Development', 'Digital Strategy'],
    outcome:
      'A professional digital presence enabling the business to reach customers through structured online channels.',
    technologies: [
      { name: 'Web technologies', category: 'frontend' },
    ],
    featured: false,
    status: 'live',
    coverImage: undefined,
    externalUrl: 'https://agribiz.africa',
    year: 2023,
  },

]

export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured)

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug)
```

---

## 5. UPDATED PRODUCTS DATA

Replace the `products` array in `src/content/products.ts`:

```typescript
import { Product } from '@/types'

export const products: Product[] = [
  {
    slug: 'eduintel',
    name: 'EduIntel',
    tagline: 'Academic intelligence for schools',
    description:
      'An academic intelligence platform transforming school performance data into clearer, actionable insights for educators and administrators.',
    category: 'Education Technology',
    status: 'in-development',
    coverImage: undefined,
    externalUrl: undefined,
    featured: true,
  },
  {
    slug: 'ghdata-market',
    name: 'GHData Market',
    tagline: 'Buy and sell mobile data and digital services',
    description:
      'A digital marketplace for mobile data and digital services with integrated payments, supplier connections and agent-based distribution.',
    category: 'Commerce & Payments',
    status: 'live',
    coverImage: undefined,
    externalUrl: 'https://ghdata-market.vercel.app/login',
    featured: true,
  },
  {
    slug: 'kensa-sms',
    name: 'Kensa SMS',
    tagline: 'School management built for how schools actually work',
    description:
      'A school management platform designed around the operational realities of private basic schools in Ghana.',
    category: 'Education Technology',
    status: 'live',
    coverImage: undefined,
    externalUrl: 'https://kensa-sms.vercel.app/login',
    featured: true,
  },
]
```

---

## 6. UPDATED CV DATA

Replace the entire `src/content/cv.ts` file with the following real data:

```typescript
import { CVExperience, CVEducation } from '@/types'

export const cvProfile = `
Software Developer and Digital Product Builder with experience across full-stack web
development, data analysis and applied machine learning. Founder and Lead Developer at
SPtech Ghana, delivering custom software solutions for SMEs and organizations across Ghana
since 2021. I build practical technology that solves real operational problems — from
hospital management systems and school platforms to digital marketplaces and data-driven
applications.
`.trim()

export const coreSkills = [
  'Full-Stack Web Development',
  'Software Architecture & System Design',
  'AI & Machine Learning',
  'Digital Product Development',
  'Technology Consulting',
  'Team Leadership & Project Delivery',
]

export const experience: CVExperience[] = [
  {
    title: 'Founder & Software Developer',
    organization: 'SPtech Ghana',
    period: 'September 2021 – Present',
    description:
      'Founded and lead a software development practice delivering custom web applications and systems for SMEs and corporate organizations across Ghana.',
    highlights: [
      'Designed and built scalable systems including hospital management, school management and digital marketplace platforms',
      'Managed full project lifecycles from requirements through deployment, ensuring user-centered design and technical quality',
      'Led and mentored a team of junior developers; introduced optimization practices improving application performance by 25%',
      'Delivered solutions across healthcare, education, logistics, agriculture and commerce sectors',
    ],
  },
  {
    title: 'Team Lead',
    organization: 'SolveIT Ghana',
    period: 'May 2018 – March 2020',
    description:
      'Supervised IT support operations and coordinated service delivery for clients.',
    highlights: [
      'Implemented workflow improvements that increased team efficiency by 30%',
      'Trained and onboarded technical staff in IT systems, troubleshooting and customer support',
      'Managed system backups and data recovery protocols',
    ],
  },
  {
    title: 'Administrator & ICT Educator',
    organization: 'The Rohi School',
    period: 'January 2016 – April 2018',
    description:
      'Managed school administrative functions and taught ICT to junior students.',
    highlights: [
      'Guided over 30 students to strong performance in final examinations',
      'Managed administrative functions including budgeting and staff supervision',
      'Introduced digital tools for attendance and reporting, reducing manual errors by 40%',
      'Awarded Best ICT Educator (2018)',
    ],
  },
]

export const education: CVEducation[] = [
  {
    qualification: 'Bachelor of Science — Computer Science and Information Systems',
    institution: 'Data Link Institute, Tema',
    year: 'April 2022',
    notes: 'Relevant coursework: Database Systems, Software Engineering, Data Structures, AI Concepts',
  },
  {
    qualification: 'Certificate of Higher Education — System Support and Analysis',
    institution: 'Data Link Institute, Tema',
    year: 'December 2007',
  },
  {
    qualification: 'Certificate — General Science',
    institution: 'Tema Methodist Day Secondary School',
    year: 'September 2002',
  },
]

export const certifications: CVEducation[] = [
  {
    qualification: 'Generative AI & Advanced Prompt Engineering',
    institution: 'Thrive Africa EduTech',
    year: 'June 2026',
    notes:
      '12-week professional program (36 hours). Modules: Generative AI Fundamentals, AI Fundamentals, Text Generation with GPT Models, Mastering Prompt Engineering, Advanced Prompting Techniques, Image Generation with GAN, Stable Diffusion & DALL·E, Multimodal Generative AI, Fine-Tuning AI Models, Evaluating Generative Models, Deployment Strategies. All modules passed. Final project completed. ID: TA/GA/25/504',
  },
  {
    qualification: 'Machine Learning & AI',
    institution: 'Thrive Africa',
    year: 'April 2025',
    notes: 'Applied ML training including customer ticket classification project using Python and Scikit-learn',
  },
]

export const technicalSkills = {
  languages:   ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'HTML', 'CSS'],
  frameworks:  ['Next.js', 'React', 'Node.js', 'Express.js', 'CodeIgniter', 'Bootstrap'],
  databases:   ['MySQL', 'MongoDB', 'PostgreSQL'],
  tools:       ['Git', 'GitHub', 'Vercel', 'WordPress'],
  aiml:        ['Machine Learning', 'Scikit-learn', 'Generative AI', 'Prompt Engineering', 'Data Analysis'],
  other:       ['REST API Design', 'API Integration', 'System Architecture', 'Full-Stack Development'],
}

export const researchProjects = [
  {
    title: 'Customer Ticket Classification Model',
    context: 'Thrive Africa Internship — April 2025',
    description:
      'Built and optimized a supervised machine learning model using Python and Scikit-learn to classify customer support tickets and automate helpdesk routing. Contributed to feature engineering and model evaluation pipelines.',
    url: 'https://github.com/sptech-gh/Thrive_Internship_ML_A',
  },
  {
    title: 'Hotel Recommendation System',
    context: 'Personal Project',
    description:
      'An NLP-based recommendation system using Python, NLTK and Scikit-learn to surface hotel insights from unstructured review data.',
    url: 'https://github.com/sptech-gh/Hotel-Recommendation-System-NLP',
  },
]
```

---

## 7. UPDATED TIMELINE DATA

Replace `src/content/timeline.ts` with the following accurate entries:

```typescript
import { TimelineEntry } from '@/types'

export const timeline: TimelineEntry[] = [
  {
    year: '2002',
    title: 'Secondary Education',
    subtitle: 'General Science — Tema Methodist Day Secondary School',
  },
  {
    year: '2007',
    title: 'Certificate of Higher Education',
    subtitle: 'System Support and Analysis — Data Link Institute, Tema',
  },
  {
    year: '2016',
    title: 'Administrator & ICT Educator',
    subtitle: 'The Rohi School, Tema',
    description: 'Taught ICT, managed school administration and introduced digital systems for attendance and reporting.',
  },
  {
    year: '2018',
    title: 'Team Lead',
    subtitle: 'SolveIT Ghana, Tema',
    description: 'Led IT support operations and service delivery for clients across Ghana.',
  },
  {
    year: '2021',
    title: 'Founded SPtech Ghana',
    subtitle: 'Founder & Lead Developer',
    description: 'Started an independent software development practice, building systems and digital products for businesses and organizations.',
  },
  {
    year: '2022',
    title: 'Bachelor of Science',
    subtitle: 'Computer Science and Information Systems — Data Link Institute, Tema',
  },
  {
    year: '2025',
    title: 'Machine Learning & AI',
    subtitle: 'Thrive Africa — Professional Certification',
    description: 'Applied ML training; built a customer ticket classification model using Python and Scikit-learn.',
  },
  {
    year: '2026',
    title: 'Generative AI & Advanced Prompt Engineering',
    subtitle: 'Thrive Africa EduTech — Professional Certification',
    description: '12-week program covering generative AI, prompt engineering, fine-tuning, image generation and deployment.',
  },
  {
    year: 'Now',
    title: 'Building',
    subtitle: 'Software Development · AI/ML · Digital Products · Consulting',
    description: 'Independent practice — delivering software, building products and applying AI to real problems.',
  },
]
```

---

## 8. UPDATED INSIGHTS SEED DATA

Replace `src/content/insights/index.ts` with topics grounded in Prosper's actual experience:

```typescript
import { InsightMeta } from '@/types'

export const insights: InsightMeta[] = [
  {
    slug: 'building-software-for-context',
    title: 'Building software for the context it will actually be used in',
    excerpt:
      'The gap between how software is designed and how it is used in the field is wider than most developers expect. Lessons from building school management software in Ghana.',
    publishedAt: '2025-09-01',
    readingTime: '5 min read',
    tags: ['Software Development', 'Product'],
    featured: true,
  },
  {
    slug: 'practical-ml-in-products',
    title: 'What practical machine learning integration looks like in a real product',
    excerpt:
      'Adding ML to a product is less about the model and more about the data pipeline, the integration point, and whether the output is actually useful to the person using it.',
    publishedAt: '2025-08-15',
    readingTime: '6 min read',
    tags: ['AI', 'Machine Learning', 'Product'],
    featured: true,
  },
  {
    slug: 'lessons-from-ghdata-market',
    title: 'What building a digital data marketplace taught me about payments infrastructure',
    excerpt:
      'Building GHData Market surfaced challenges around payments trust, agent management and distribution that no amount of planning fully prepared for.',
    publishedAt: '2025-07-20',
    readingTime: '7 min read',
    tags: ['Product', 'Commerce', 'GHData Market'],
    featured: true,
  },
  {
    slug: 'generative-ai-for-developers',
    title: 'How generative AI is changing the way I approach software development',
    excerpt:
      'After completing a generative AI and prompt engineering programme, here is what has genuinely changed in my day-to-day work — and what has not.',
    publishedAt: '2026-08-01',
    readingTime: '5 min read',
    tags: ['AI', 'Generative AI', 'Software Development'],
    featured: true,
  },
]
```

---

## 9. UPDATED SEO DEFAULTS

Update `src/lib/seo.ts` default metadata:

```typescript
export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prosperami.dev'),
  title: {
    default: 'Prosper Ami — Software Developer & Digital Product Builder',
    template: '%s · Prosper Ami',
  },
  description:
    'Software Developer and Digital Product Builder based in Ghana. I design and develop practical digital products, web applications and data-driven solutions for businesses, organizations and entrepreneurs.',
  authors: [{ name: 'Prosper Ami' }],
  creator: 'Prosper Ami',
  openGraph: {
    type:     'website',
    locale:   'en_US',
    url:      process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prosperami.dev',
    siteName: 'Prosper Ami',
    images:   [{ url: '/og/default.png', width: 1200, height: 630, alt: 'Prosper Ami — Software Developer & Digital Product Builder' }],
  },
  twitter: {
    card:    'summary_large_image',
    creator: '@prosperami',   // update if Twitter handle is different
    images:  ['/og/default.png'],
  },
}
```

---

## 10. UPDATED HERO COPY

Replace the hero eyebrow and supporting copy in `src/components/home/Hero.tsx`:

```
Eyebrow (small label):
Software Developer & Digital Product Builder · Kumasi, Ghana

Headline (unchanged):
I build technology
that solves real problems.

Supporting copy:
I design and develop practical digital products, web applications
and data-driven solutions for businesses, organizations and entrepreneurs.

Capability line:
Software Development  ·  AI & Machine Learning  ·  Digital Products  ·  Technology Consulting
```

---

## 11. UPDATED ABOUT COPY

Replace the about body paragraphs in `src/app/about/page.tsx` and `src/components/home/AboutSnippet.tsx`:

```
Hero heading (unchanged):
Technology should be useful before it is impressive.

Body:
I am a software developer and digital product builder based in Kumasi, Ghana.

I founded SPtech Ghana in 2021 to build practical technology for businesses and
organizations — custom web systems, data-driven applications and digital products
that solve real operational problems.

My work sits at the intersection of software development, data and artificial
intelligence. I have built hospital management systems, school platforms, digital
marketplaces and web applications for clients across healthcare, education,
logistics and agriculture.

Alongside client work, I build and experiment with products of my own — because
the best way to stay sharp is to keep building things that have to actually work.

I hold a BSc in Computer Science and Information Systems from Data Link Institute
and have continued developing professionally through training in machine learning
and generative AI.
```

---

## 12. PROFILE / SUMMARY (for CV page and meta)

Use this as the CV profile text:

```
Software Developer and Digital Product Builder with experience across
full-stack web development, data analysis and applied machine learning.
Founder and Lead Developer at SPtech Ghana, delivering custom software
solutions for businesses and organizations across Ghana since 2021.

I build practical technology — from hospital management systems and
school platforms to digital marketplaces and data-driven applications —
with a focus on solving real operational problems rather than impressive
technical complexity.
```

---

## 13. ADDITIONAL PROJECT NOTES

### On Commax Healthcare
- Live URL: https://commaxhealthcare.com/
- Category: Client web project (not a product)
- Do not feature on the home page selected work — include in the full `/work` index
- The project slug `commax-healthcare` links out to the live site

### On AVAR Logistics Africa
- Live URL: https://avar-logistics-africa.vercel.app/
- Category: Client web project (not a product)
- Do not feature on home page — include in full `/work` index
- The project slug `avar-logistics` links out to the live site

### On Kensa SMS
- Live URL: https://kensa-sms.vercel.app/
- This is a product/system, not just a client website
- Include on the Products page with status `live`
- Also include in the `/work` index

### On Agribiz Africa
- Live URL: https://agribiz.africa
- Client web project — include in `/work` index, not featured on home
- External link available

### On Reddy HMS / EduIntel
- Owner will supply live URLs at a later date
- Leave `externalUrl: undefined` with a comment noting the owner will provide
- (Kensa SMS live URL was supplied: https://kensa-sms.vercel.app/login)

---

## 14. GITHUB PROFILE REFERENCE

Owner's GitHub: https://github.com/sptech-gh

Do NOT auto-link all GitHub repos on the portfolio. Only reference GitHub for:
- The two ML/research projects in the CV data (where `url` is provided)
- The GitHub social link in the footer

Do not scrape or pull data from GitHub.

---

## 15. WHAT HAS BEEN RESOLVED

The following items from the original Master Build Prompt are now fully resolved and no longer need `// TODO:` comments:

```
✓ Owner full name: Prosper Ami
✓ Monogram: PA.
✓ Email: sedempee@gmail.com
✓ Location: Kumasi, Ashanti Region, Ghana
✓ LinkedIn URL
✓ GitHub URL
✓ All 8 project entries with descriptions, roles, technologies, outcomes
✓ Live URLs for: agribiz.africa, commaxhealthcare.com, avar-logistics, kensa-sms
✓ CV profile text
✓ CV experience (3 roles with dates and highlights)
✓ CV education (3 entries with institutions and dates)
✓ CV certifications (2 entries — ML & AI 2025, Generative AI & Prompt Engineering 2026)
✓ CV technical skills (all categories)
✓ Timeline (9 milestones with accurate years)
✓ About body copy
✓ Insights seed articles (4 topics)
✓ SEO metadata defaults
```

Items still awaiting owner input:

```
⏳ cv.pdf file — owner to supply and place at public/documents/cv.pdf
⏳ Project cover images — owner to supply screenshots/images
⏳ Live URLs for Reddy HMS, EduIntel — owner will provide later
✓ GHData Market public-facing URL — https://ghdata-market.vercel.app/login
✓ Final domain/URL — confirmed: prosperami.dev
⏳ Twitter/X handle — confirm or remove from SEO metadata
⏳ Phone number — owner to decide whether to display publicly (currently omitted)
```

---

*Data Supplement — version 1.0*
*Compiled from: Resume-Prosper-Ami-Web.pdf, Prosper_Ami_MRes_CV.docx, Certificate of Completion (Generative AI & Advanced Prompt Engineering), Transcript (Thrive Africa EduTech), and owner-supplied links.*
*Date: September 2026*
