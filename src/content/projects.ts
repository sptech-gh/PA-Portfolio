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
    coverImage: undefined, // TODO: Owner to supply — /images/projects/ghdata-cover.jpg
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
    coverImage: undefined, // TODO: Owner to supply — /images/projects/kensa-sms-cover.jpg
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
    coverImage: undefined, // TODO: Owner to supply — /images/projects/reddy-cover.jpg
    externalUrl: undefined, // TODO: Owner to supply live URL when ready
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
    coverImage: undefined, // TODO: Owner to supply — /images/projects/eduintel-cover.jpg
    externalUrl: undefined, // TODO: Owner to supply live URL when ready
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
    outcome: "A live professional web presence supporting the company's client-facing communications.",
    technologies: [{ name: 'Web technologies', category: 'frontend' }],
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
    solution: 'A logistics company web platform covering services, coverage information and customer engagement.',
    role: ['Web Development', 'Frontend'],
    outcome: "A live web platform supporting the company's digital operations and customer communications.",
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
    outcome: 'A professional digital presence enabling the business to reach customers through structured online channels.',
    technologies: [{ name: 'Web technologies', category: 'frontend' }],
    featured: false,
    status: 'live',
    coverImage: undefined,
    externalUrl: 'https://agribiz.africa',
    year: 2023,
  },
]

export const getFeaturedProjects = () => projects.filter((p) => p.featured)

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)

// Category keyword → placeholder gradient (Section 16 image strategy)
export const placeholderGradients: Record<string, string> = {
  marketplace: 'linear-gradient(135deg, #12161A 0%, #1D2329 100%)',
  education: 'linear-gradient(135deg, #111B1A 0%, #1A2420 100%)',
  healthcare: 'linear-gradient(135deg, #111520 0%, #1A1D2E 100%)',
  default: 'linear-gradient(135deg, #12161A 0%, #171C21 100%)',
}

export function gradientForProject(project: Project): string {
  const key = project.category.toLowerCase()
  if (key.includes('marketplace') || key.includes('commerce')) return placeholderGradients.marketplace
  if (key.includes('education')) return placeholderGradients.education
  if (key.includes('healthcare')) return placeholderGradients.healthcare
  return placeholderGradients.default
}
