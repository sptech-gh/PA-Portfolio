import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ServiceCard } from '@/components/services/ServiceCard'
import { services } from '@/content/services'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description:
    'Software development, web development, AI and machine learning, and technology consulting — practical solutions built around your goals.',
})

export default function ServicesPage() {
  return (
    <PageWrapper
      title="Technology built around your goals."
      lead="From websites and business applications to intelligent data-driven solutions, I help turn technology ideas and operational challenges into practical products."
    >
      <div>
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </PageWrapper>
  )
}
