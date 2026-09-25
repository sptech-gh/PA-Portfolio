import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-[13px] text-text-secondary',
        className,
      )}
    >
      {children}
    </span>
  )
}
