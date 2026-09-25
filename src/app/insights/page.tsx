import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ArticleGrid } from '@/components/insights/ArticleGrid'
import { getInsights } from '@/content/insights'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Insights',
  description: 'Writing on software development, product building, and technology.',
})

export default function InsightsPage() {
  const articles = getInsights()

  return (
    <PageWrapper
      title="Ideas, lessons and things I think about."
      lead="Writing on software development, product building, and technology."
    >
      <ArticleGrid articles={articles} />
    </PageWrapper>
  )
}
