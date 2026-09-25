import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { products } from '@/content/products'
import { ProductCard } from '@/components/products/ProductCard'

export function ProductsPreview() {
  return (
    <section aria-labelledby="products-preview-heading">
      <Container className="py-20 md:py-28">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 id="products-preview-heading" className="text-section-heading">
              Products of my own.
            </h2>
            <p className="text-lead mt-5 text-text-secondary">
              I build technology products beyond client work — exploring problems across education,
              commerce and business operations.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            All products
            <ChevronRight aria-hidden className="h-4 w-4" />
          </Link>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
