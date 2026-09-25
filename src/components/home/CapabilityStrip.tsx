import { Container } from '@/components/ui/Container'
import { Tag } from '@/components/ui/Tag'

const capabilities = [
  'Software Development',
  'Web Applications',
  'AI / Machine Learning',
  'Data-Driven Solutions',
  'Digital Products',
  'Technology Consulting',
]

export function CapabilityStrip() {
  return (
    <section aria-labelledby="capability-heading" className="border-y border-border bg-surface-1">
      <Container className="py-14 md:py-16">
        <h2 id="capability-heading" className="max-w-2xl text-2xl font-semibold font-heading text-text-primary md:text-3xl">
          Building across technology, business and digital products.
        </h2>
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 md:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {capabilities.map((cap) => (
            <Tag key={cap} className="shrink-0 whitespace-nowrap">
              {cap}
            </Tag>
          ))}
        </div>
      </Container>
    </section>
  )
}
