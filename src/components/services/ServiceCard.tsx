import { Link as LinkIcon } from 'lucide-react'
import { type Service } from '@/types'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <section
      aria-labelledby={`service-${service.id}`}
      className="grid gap-6 border-t border-border py-14 md:grid-cols-[120px_1fr] md:py-16"
    >
      <div aria-hidden className="font-heading text-5xl font-bold leading-none text-text-muted md:text-6xl">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div>
        <h2
          id={`service-${service.id}`}
          className="font-heading text-2xl font-semibold text-text-primary md:text-3xl"
        >
          {service.title}
        </h2>
        <p className="mt-4 max-w-prose text-[17px] leading-[1.7] text-text-secondary">
          {service.description}
        </p>

        <div className="mt-6 max-w-prose rounded-md border border-border bg-surface-1 p-5">
          <p className="text-eyebrow text-text-muted">Problem it solves</p>
          <p className="mt-2 text-[16px] leading-[1.6] text-text-primary">{service.problemSolved}</p>
        </div>

        <p className="mt-6 text-eyebrow text-text-muted">Deliverables</p>
        <p className="mt-2 max-w-prose text-[15px] leading-[1.7] text-text-secondary">
          {service.deliverables.join('  ·  ')}
        </p>

        {service.technologies ? (
          <>
            <p className="mt-6 text-eyebrow text-text-muted">Technologies</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <Tag key={t} className="text-[12px]">
                  {t}
                </Tag>
              ))}
            </div>
          </>
        ) : null}

        <div className="mt-8">
          <Button href="/contact" variant="secondary">
            <LinkIcon aria-hidden className="h-4 w-4" />
            Discuss your project
          </Button>
        </div>
      </div>
    </section>
  )
}
