import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { ArticleGrid } from '@/components/insights/ArticleGrid'
import { getRecentFeaturedInsights } from '@/content/insights'

export function InsightsPreview() {
  const articles = getRecentFeaturedInsights(3)

  return (
    <section aria-labelledby="insights-preview-heading">
      <Container className="py-20 md:py-28">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 id="insights-preview-heading" className="text-section-heading">
              Ideas, lessons and things I think about.
            </h2>
            <p className="text-lead mt-5 text-text-secondary">
              Writing on software development, product building, and technology.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            All insights
            <ChevronRight aria-hidden className="h-4 w-4" />
          </Link>
        </header>

        <div className="mt-12">
          <ArticleGrid articles={articles} />
        </div>
      </Container>
    </section>
  )
}
