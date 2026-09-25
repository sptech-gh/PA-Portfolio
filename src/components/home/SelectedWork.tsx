import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { ProjectGrid } from '@/components/work/ProjectGrid'
import { getFeaturedProjects } from '@/content/projects'

export function SelectedWork() {
  const featured = getFeaturedProjects()

  return (
    <section aria-labelledby="work-heading">
      <Container className="py-20 md:py-28">
        <header className="max-w-2xl">
          <h2 id="work-heading" className="text-section-heading">
            Work that solves real problems.
          </h2>
          <p className="text-lead mt-5 text-text-secondary">
            A selection of digital products, platforms and technology projects I have designed,
            developed or contributed to.
          </p>
        </header>

        <div className="mt-12">
          <ProjectGrid projects={featured} />
        </div>

        <div className="mt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            View all work
            <ChevronRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
