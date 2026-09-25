import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface PageWrapperProps {
  children: React.ReactNode
  eyebrow?: string
  title: string
  lead?: string
  className?: string
}

export function PageWrapper({ children, eyebrow, title, lead, className }: PageWrapperProps) {
  return (
    <Container className={cn('pb-24 pt-16 md:pb-32 md:pt-20', className)}>
      <header className="max-w-2xl">
        {eyebrow ? <SectionLabel className="mb-4">{eyebrow}</SectionLabel> : null}
        <h1 className="text-section-heading">{title}</h1>
        {lead ? <p className="text-lead mt-6 text-text-secondary">{lead}</p> : null}
      </header>
      <div className="mt-16">{children}</div>
    </Container>
  )
}
