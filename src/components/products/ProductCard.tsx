import { ChevronRight } from 'lucide-react'
import { type Product } from '@/types'
import { cn } from '@/lib/utils'
import { placeholderGradients } from '@/content/projects'
import { CoverPlaceholder } from '@/components/ui/CoverPlaceholder'

const statusStyles: Record<Product['status'], string> = {
  live: 'border-accent/60 text-accent',
  beta: 'border-accent/40 text-accent',
  'in-development': 'border-border text-text-muted',
  paused: 'border-border text-text-muted',
}

const statusLabels: Record<Product['status'], string> = {
  live: 'Live',
  beta: 'Beta',
  'in-development': 'In Development',
  paused: 'Paused',
}

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const isEducation = product.category.toLowerCase().includes('education')
  const initials = product.name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  const explore = product.externalUrl ? (
    <a
      href={product.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
    >
      Explore product
      <ChevronRight aria-hidden className="h-4 w-4" />
    </a>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-sm text-text-muted" aria-disabled="true">
      Explore product
      <ChevronRight aria-hidden className="h-4 w-4" />
    </span>
  )

  return (
    <article
      className={cn(
        'group flex h-full flex-col rounded-lg border border-border bg-surface-1 p-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30',
        className,
      )}
    >
      <CoverPlaceholder
        initials={initials}
        gradient={isEducation ? placeholderGradients.education : placeholderGradients.marketplace}
        variant={isEducation ? 'bars' : 'grid'}
        className="aspect-[16/9] w-full"
      />
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-[26px] font-semibold leading-tight text-text-primary md:text-[32px]">
            {product.name}
          </h3>
          <span
            className={cn(
              'shrink-0 rounded-full border px-2.5 py-0.5 text-[11px]',
              statusStyles[product.status],
            )}
          >
            {statusLabels[product.status]}
          </span>
        </div>
        <p className="mt-1.5 text-sm text-text-secondary">{product.tagline}</p>
        <p className="text-eyebrow mt-4 text-text-muted">{product.category}</p>
        <p className="mt-2 flex-1 text-[15px] text-text-secondary">{product.description}</p>
        <div className="mt-5">{explore}</div>
      </div>
    </article>
  )
}
