import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { type Project, type ProjectStatus } from '@/types'
import { cn } from '@/lib/utils'
import { gradientForProject } from '@/content/projects'
import { CoverPlaceholder } from '@/components/ui/CoverPlaceholder'
import { Tag } from '@/components/ui/Tag'

const statusLabels: Record<ProjectStatus, string> = {
  live: 'Live',
  'in-development': 'In Development',
  completed: 'Completed',
  archived: 'Archived',
}

const statusStyles: Record<ProjectStatus, string> = {
  live: 'border-accent/50 text-accent',
  'in-development': 'border-border text-text-muted',
  completed: 'border-border text-text-muted',
  archived: 'border-border text-text-muted',
}

export function ProjectCard({
  project,
  size = 'small',
}: {
  project: Project
  size?: 'large' | 'small'
}) {
  const maxVisible = 4
  const visible = project.technologies.slice(0, maxVisible)
  const overflow = project.technologies.length - visible.length
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  const variant: 'bars' | 'grid' = size === 'large' ? 'grid' : 'bars'

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface-1 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30',
      )}
    >
      <Link href={`/work/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View case study: ${project.title}`}>
        <span className="sr-only">View case study</span>
      </Link>

      <div className={cn('p-4', size === 'large' && 'md:p-5')}>
        {project.coverImage ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border-subtle">
            <div className="transition-transform duration-500 group-hover:scale-[1.03]">
              <Image
                src={project.coverImage}
                alt={`${project.title} cover`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <CoverPlaceholder
            initials={initials}
            gradient={gradientForProject(project)}
            variant={variant}
            className={cn('w-full', size === 'large' ? 'aspect-[16/10]' : 'aspect-[16/10] md:aspect-[16/11]')}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-[13px] text-text-muted">{project.category}</p>
          <span
            className={cn(
              'shrink-0 rounded-full border px-2.5 py-0.5 text-[11px]',
              statusStyles[project.status],
            )}
          >
            {statusLabels[project.status]}
          </span>
        </div>
        <h3
          className={cn(
            'mt-2 font-heading font-semibold text-text-primary',
            size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl',
          )}
        >
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-[15px] text-text-secondary">
          {project.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {visible.map((tech) => (
            <Tag key={tech.name} className="text-[12px]">
              {tech.name}
            </Tag>
          ))}
          {overflow > 0 && (
            <span className="text-[12px] text-text-muted">+{overflow}</span>
          )}
        </div>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
          View case study
          <ChevronRight aria-hidden className="h-4 w-4" />
        </span>
      </div>
    </article>
  )
}
