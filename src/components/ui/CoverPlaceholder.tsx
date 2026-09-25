import { cn } from '@/lib/utils'

interface CoverPlaceholderProps {
  initials: string
  gradient: string
  className?: string
  variant?: 'bars' | 'grid'
}

// Designed CSS/SVG placeholder for projects/products without a real cover image
// (Section 16 image strategy). Purely decorative — the parent carries alt text.
export function CoverPlaceholder({
  initials,
  gradient,
  className,
  variant = 'bars',
}: CoverPlaceholderProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'relative overflow-hidden rounded-md border border-border-subtle',
        className,
      )}
      style={{ background: gradient }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #F5F5F0 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          opacity: 0.08,
        }}
      />
      <span className="absolute bottom-3 left-4 font-heading text-6xl font-bold text-text-primary" style={{ opacity: 0.06 }}>
        {initials}
      </span>
      {variant === 'bars' ? (
        <div className="absolute right-5 top-5 flex items-end gap-1.5">
          {[10, 18, 14, 24, 20].map((h, i) => (
            <span
              key={i}
              className={cn('w-2 rounded-t-sm', i === 3 ? 'bg-accent' : 'bg-surface-3')}
              style={{ height: `${h}px`, opacity: i === 3 ? 0.9 : 1 }}
            />
          ))}
        </div>
      ) : (
        <div className="absolute right-5 top-5 grid grid-cols-3 gap-1.5">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className={cn('h-2.5 w-2.5 rounded-[3px]', i === 2 ? 'bg-accent' : 'bg-surface-3')}
              style={i === 2 ? { opacity: 0.9 } : undefined}
            />
          ))}
        </div>
      )}
    </div>
  )
}
