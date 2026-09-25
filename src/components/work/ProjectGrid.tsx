import { type Project } from '@/types'
import { ProjectCard } from '@/components/work/ProjectCard'

// Asymmetric editorial grid (Section 16):
// Row 1: large (2/3) + small (1/3); Row 2: small (1/3) + large (2/3); Row 3: full width.
// Pattern repeats for additional projects. Tablet: 2 equal columns. Mobile: 1 column.
const layout = [
  { size: 'large' as const, lg: 'lg:col-span-8', md: 'md:col-span-1' },
  { size: 'small' as const, lg: 'lg:col-span-4', md: 'md:col-span-1' },
  { size: 'small' as const, lg: 'lg:col-span-4', md: 'md:col-span-1' },
  { size: 'large' as const, lg: 'lg:col-span-8', md: 'md:col-span-1' },
  { size: 'large' as const, lg: 'lg:col-span-12', md: 'md:col-span-2' },
]

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
      {projects.map((p, i) => {
        const slot = layout[i % layout.length]
        return (
          <div key={p.slug} className={`${slot.lg} ${slot.md}`}>
            <ProjectCard project={p} size={slot.size} />
          </div>
        )
      })}
    </div>
  )
}
