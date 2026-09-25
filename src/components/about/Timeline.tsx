import { type TimelineEntry } from '@/types'

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-border pl-8 md:pl-10">
      {entries.map((entry) => (
        <li key={`${entry.year}-${entry.title}`} className="relative pb-12 last:pb-0">
          <span
            aria-hidden
            className="absolute -left-[38px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg md:-left-[46px]"
          />
          <p className="font-heading text-3xl font-bold leading-none text-text-muted md:text-4xl">
            {entry.year}
          </p>
          <h3 className="mt-3 font-heading text-lg font-semibold text-text-primary md:text-xl">
            {entry.title}
          </h3>
          {entry.subtitle ? (
            <p className="mt-1.5 text-[15px] text-text-secondary">{entry.subtitle}</p>
          ) : null}
          {entry.description ? (
            <p className="mt-2 max-w-prose text-[15px] text-text-secondary">{entry.description}</p>
          ) : null}
        </li>
      ))}
    </ol>
  )
}
