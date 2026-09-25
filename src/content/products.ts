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
    coverImage: undefined, // TODO: Owner to supply product visual
    externalUrl: undefined,
    featured: true,
  },
  {
    slug: 'edusankofa',
    name: 'EduSankofa',
    tagline: 'School management built for how schools actually work',
    description:
      'A school management platform designed around the operational realities of private basic schools in Ghana.',
    category: 'Education Technology',
    status: 'in-development',
    coverImage: undefined, // TODO: Owner to supply product visual
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
    coverImage: undefined, // TODO: Owner to supply product visual
    externalUrl: undefined, // TODO: Owner to supply live URL when ready to link publicly
    featured: true,
  },
  {
    slug: 'kensa-sms',
    name: 'Kensa SMS',
    tagline: 'School management, simplified',
    description:
      'A school management system providing schools with practical tools for student, academic and administrative management.',
    category: 'Education Technology',
    status: 'live',
    coverImage: undefined, // TODO: Owner to supply product visual
    externalUrl: 'https://kensa-sms.vercel.app/',
    featured: false,
  },
]

export const getFeaturedProducts = () => products.filter((p) => p.featured)
