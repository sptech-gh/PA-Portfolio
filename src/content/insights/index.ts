import type { MDXComponents } from 'mdx/types'
import type { ComponentType } from 'react'
import { InsightMeta } from '@/types'
import BuildingSoftwareForContext from './building-software-for-context.mdx'
import PracticalMlInProducts from './practical-ml-in-products.mdx'
import LessonsFromGhdataMarket from './lessons-from-ghdata-market.mdx'
import GenerativeAiForDevelopers from './generative-ai-for-developers.mdx'

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

const articleComponents: Record<string, ComponentType<{ components?: MDXComponents }>> = {
  'building-software-for-context': BuildingSoftwareForContext,
  'practical-ml-in-products': PracticalMlInProducts,
  'lessons-from-ghdata-market': LessonsFromGhdataMarket,
  'generative-ai-for-developers': GenerativeAiForDevelopers,
}

export const getInsights = () =>
  [...insights].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

export const getRecentFeaturedInsights = (count = 3) =>
  getInsights()
    .filter((i) => i.featured)
    .slice(0, count)

export const getInsightMetaBySlug = (slug: string) =>
  insights.find((i) => i.slug === slug)

export const getInsightContent = (slug: string) => articleComponents[slug]

export const getAllSlugs = () => insights.map((i) => i.slug)

export function getArticle(slug: string) {
  const meta = getInsightMetaBySlug(slug)
  const content = getInsightContent(slug)
  if (!meta || !content) return undefined
  return { meta, content }
}
