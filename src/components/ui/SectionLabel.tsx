import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

// Use sparingly — only where a small section identifier adds real value (Section 9).
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p className={cn('text-eyebrow font-body text-text-muted', className)}>{children}</p>
  )
}
