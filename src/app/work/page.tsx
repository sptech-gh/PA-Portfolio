import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ProjectGrid } from '@/components/work/ProjectGrid'
import { projects } from '@/content/projects'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Work',
  description:
    'Digital products, platforms and technology projects I have designed, developed or contributed to.',
})

export default function WorkPage() {
  return (
    <PageWrapper
      eyebrow="Work"
      title="Work that solves real problems."
      lead="Digital products, platforms and technology projects I have designed, developed or contributed to."
    >
      <ProjectGrid projects={projects} />
    </PageWrapper>
  )
}
