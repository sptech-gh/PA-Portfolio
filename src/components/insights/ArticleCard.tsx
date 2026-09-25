import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { type InsightMeta } from '@/types'
import { formatDate } from '@/lib/utils'
import { Tag } from '@/components/ui/Tag'

export function ArticleCard({ article }: { article: InsightMeta }) {
  return (
    <article className="group flex h-full flex-col border-t border-border pt-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-text-muted">
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        {article.readingTime ? (
          <>
            <span aria-hidden>·</span>
            <span>{article.readingTime}</span>
          </>
        ) : null}
      </div>
      <h3 className="mt-3 font-heading text-xl font-semibold text-text-primary md:text-2xl">
        <Link
          href={`/insights/${article.slug}`}
          className="rounded-sm transition-colors group-hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 flex-1 text-[15px] text-text-secondary">{article.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.map((t) => (
          <Tag key={t} className="text-[12px]">
            {t}
          </Tag>
        ))}
      </div>
      <Link
        href={`/insights/${article.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-text-primary transition-colors group-hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
      >
        Read article
        <ChevronRight aria-hidden className="h-4 w-4" />
      </Link>
    </article>
  )
}
