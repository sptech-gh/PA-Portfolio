import { CVExperience, CVEducation } from '@/types'

// Profile
export const cvProfile = `
Software Developer and Digital Product Builder with experience across full-stack web
development, data analysis and applied machine learning. Founder and Lead Developer at
SPtech Ghana, delivering custom software solutions for SMEs and organizations across Ghana
since 2021. I build practical technology that solves real operational problems — from
hospital management systems and school platforms to digital marketplaces and data-driven
applications.
`.trim()

// Core skills
export const coreSkills = [
  'Full-Stack Web Development',
  'Software Architecture & System Design',
  'AI & Machine Learning',
  'Digital Product Development',
  'Technology Consulting',
  'Team Leadership & Project Delivery',
]

// Experience
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
    description: 'Supervised IT support operations and coordinated service delivery for clients.',
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
    description: 'Managed school administrative functions and taught ICT to junior students.',
    highlights: [
      'Guided over 30 students to strong performance in final examinations',
      'Managed administrative functions including budgeting and staff supervision',
      'Introduced digital tools for attendance and reporting, reducing manual errors by 40%',
      'Awarded Best ICT Educator (2018)',
    ],
  },
]

// Education
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

// Certifications
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
    notes:
      'Applied ML training including customer ticket classification project using Python and Scikit-learn',
  },
]

// Technical skills by category
export const technicalSkills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'HTML', 'CSS'],
  frameworks: ['Next.js', 'React', 'Node.js', 'Express.js', 'CodeIgniter', 'Bootstrap'],
  databases: ['MySQL', 'MongoDB', 'PostgreSQL'],
  tools: ['Git', 'GitHub', 'Vercel', 'WordPress'],
  aiml: ['Machine Learning', 'Scikit-learn', 'Generative AI', 'Prompt Engineering', 'Data Analysis'],
  other: ['REST API Design', 'API Integration', 'System Architecture', 'Full-Stack Development'],
}

// Research / ML projects (GitHub references per supplement §14 — only these two)
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
