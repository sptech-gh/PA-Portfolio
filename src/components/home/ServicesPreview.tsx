import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { services } from '@/content/services'

export function ServicesPreview() {
  return (
    <section aria-labelledby="services-preview-heading" className="border-y border-border bg-surface-1">
      <Container className="py-20 md:py-28">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="services-preview-heading" className="text-section-heading">
            How I can help.
          </h2>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            All services
            <ChevronRight aria-hidden className="h-4 w-4" />
          </Link>
        </header>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className="border-t border-border pt-6">
              <h3 className="font-heading text-xl font-semibold text-text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-[15px] text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
