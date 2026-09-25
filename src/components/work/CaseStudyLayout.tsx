import type { Project } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Tag } from '@/components/ui/Tag'
import { Divider } from '@/components/ui/Divider'
import { Button } from '@/components/ui/Button'
import { CoverPlaceholder } from '@/components/ui/CoverPlaceholder'
import { gradientForProject } from '@/content/projects'

const statusLabels: Record<Project['status'], string> = {
  live: 'Live',
  'in-development': 'In Development',
  completed: 'Completed',
  archived: 'Archived',
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-heading text-xl font-semibold text-text-primary md:text-2xl">{heading}</h2>
      <div className="mt-4 max-w-prose space-y-4 text-[17px] leading-[1.7] text-text-secondary">
        {children}
      </div>
    </section>
  )
}

export function CaseStudyLayout({ project }: { project: Project }) {
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <Link
        href="/work"
        className="no-print inline-flex items-center gap-2 rounded-sm text-sm text-text-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <ArrowLeft aria-hidden className="h-4 w-4" />
        Back to work
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="text-eyebrow text-text-muted">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-text-primary md:text-5xl">
          {project.title}
        </h1>
        <p className="text-lead mt-5 text-text-secondary">{project.shortDescription}</p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-accent/60 px-3 py-1 text-[12px] text-accent">
            {statusLabels[project.status]}
          </span>
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-3 py-1 text-[12px] text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              Visit site
            </a>
          ) : null}
        </div>
      </header>

      <div className="mt-12">
        {project.coverImage ? (
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg border border-border">
            <Image
              src={project.coverImage}
              alt={`${project.title} cover`}
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
        ) : (
          <CoverPlaceholder
            initials={initials}
            gradient={gradientForProject(project)}
            className="aspect-[21/9] w-full"
          />
        )}
      </div>

      <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <Section heading="Overview">
            <p>{project.fullDescription}</p>
          </Section>
          <Section heading="The challenge">
            <p>{project.challenge}</p>
          </Section>
          <Section heading="My approach">
            <p>{project.approach}</p>
          </Section>
          <Section heading="The solution">
            <p>{project.solution}</p>
          </Section>
          <Section heading="Outcome">
            <p>{project.outcome}</p>
          </Section>
          {project.lessons ? (
            <Section heading="Lessons learned">
              <p>{project.lessons}</p>
            </Section>
          ) : null}

          {project.screenshots?.length ? (
            <Section heading="Screens">
              {project.screenshots.map((shot, i) => (
                <div key={shot} className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-md border border-border">
                  <Image
                    src={shot}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 1152px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
              ))}
            </Section>
          ) : null}
        </div>

        <aside className="no-print lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-heading text-sm font-semibold text-text-primary">My role</h2>
          <ul className="mt-3 space-y-1.5 text-[15px] text-text-secondary">
            {project.role.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <Divider className="my-6" />

          <h2 className="font-heading text-sm font-semibold text-text-primary">Technologies</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <Tag key={t.name} className="text-[12px]">
                {t.name}
              </Tag>
            ))}
          </div>

          <Divider className="my-6" />

          <Button href="/contact" variant="secondary" className="w-full">
            Discuss a similar project
          </Button>
        </aside>
      </div>
    </Container>
  )
}
