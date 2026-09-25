import { type InsightMeta } from '@/types'
import { ArticleCard } from '@/components/insights/ArticleCard'

export function ArticleGrid({ articles }: { articles: InsightMeta[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <ArticleCard key={a.slug} article={a} />
      ))}
    </div>
  )
}
