import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudyLayout } from '@/components/work/CaseStudyLayout'
import { getProjectBySlug, projects } from '@/content/projects'
import { buildMetadata } from '@/lib/seo'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return buildMetadata({ title: 'Work' })
  return buildMetadata({
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
  })
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()
  return <CaseStudyLayout project={project} />
}
