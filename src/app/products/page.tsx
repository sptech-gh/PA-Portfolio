import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ProductCard } from '@/components/products/ProductCard'
import { products } from '@/content/products'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Products',
  description:
    'Technology products I am building of my own — practical solutions across education, commerce and business operations.',
})

export default function ProductsPage() {
  return (
    <PageWrapper
      title="I am not only building for clients."
      lead="I am also building technology products of my own — exploring practical solutions to problems across education, commerce and business operations."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </PageWrapper>
  )
}
