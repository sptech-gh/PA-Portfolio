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
