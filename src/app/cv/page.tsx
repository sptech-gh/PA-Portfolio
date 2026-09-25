import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Divider } from '@/components/ui/Divider'
import { buildMetadata } from '@/lib/seo'
import { OWNER_FULL_NAME } from '@/lib/site'
import {
  cvProfile,
  coreSkills,
  experience,
  education,
  certifications,
  technicalSkills,
  researchProjects,
} from '@/content/cv'
import { projects } from '@/content/projects'

const categoryLabels: Record<string, string> = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  databases: 'Databases',
  tools: 'Tools',
  aiml: 'AI / ML',
  other: 'Other',
}

export const metadata: Metadata = buildMetadata({
  title: 'CV',
  description:
    'Curriculum vitae — experience, education, certifications and technical skills.',
})

function CvSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-heading text-lg font-semibold text-text-primary">{heading}</h2>
      <Divider className="mt-4" />
      <div className="mt-6">{children}</div>
    </section>
  )
}

export default function CvPage() {
  return (
    <Container className="print-doc">
      <div className="mx-auto max-w-3xl pb-24 pt-14">
      <header className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <SectionLabel className="mb-2">{OWNER_FULL_NAME}</SectionLabel>
          <h1 className="font-heading text-4xl font-bold text-text-primary md:text-5xl">
            Curriculum vitae
          </h1>
        </div>
        {/* TODO: Owner to place the real CV PDF at public/documents/cv.pdf */}
        <Button href="/documents/cv.pdf" variant="primary" className="no-print">
          <Download aria-hidden className="h-4 w-4" />
          Download CV
        </Button>
      </header>

      <CvSection heading="Profile">
        <p className="whitespace-pre-line text-[17px] leading-[1.7] text-text-secondary">
          {cvProfile}
        </p>
      </CvSection>

      <CvSection heading="Core Skills">
        <ul className="grid gap-x-8 gap-y-2 text-[15px] text-text-secondary md:grid-cols-2">
          {coreSkills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </CvSection>

      <CvSection heading="Professional Experience">
        <div className="space-y-8">
          {experience.map((job) => (
            <article key={`${job.title}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {job.title}
                </h3>
                <p className="text-[13px] text-text-muted">{job.period}</p>
              </div>
              <p className="mt-1 text-[15px] text-accent">{job.organization}</p>
              <p className="mt-3 max-w-prose text-[15px] leading-[1.7] text-text-secondary">
                {job.description}
              </p>
              {job.highlights?.length ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-text-secondary">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </CvSection>

      <CvSection heading="Selected Projects">
        <ul className="space-y-5">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <li key={p.slug}>
                <p className="text-[15px]">
                  <span className="font-heading font-semibold text-text-primary">{p.title}</span>
                  <span className="text-text-muted"> · {p.year} — </span>
                  <span className="text-text-secondary">{p.shortDescription}</span>
                </p>
              </li>
            ))}
        </ul>
      </CvSection>

      <CvSection heading="Education">
        <div className="space-y-6">
          {education.map((e) => (
            <div key={`${e.qualification}-${e.year}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-heading text-[16px] font-semibold text-text-primary">
                  {e.qualification}
                </p>
                <p className="text-[13px] text-text-muted">{e.year}</p>
              </div>
              <p className="text-[15px] text-text-secondary">{e.institution}</p>
              {e.notes ? (
                <p className="mt-2 max-w-prose text-[14px] leading-[1.6] text-text-muted">{e.notes}</p>
              ) : null}
            </div>
          ))}
        </div>
      </CvSection>

      <CvSection heading="Certifications">
        <div className="space-y-6">
          {certifications.map((c) => (
            <div key={`${c.qualification}-${c.year}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-heading text-[16px] font-semibold text-text-primary">
                  {c.qualification}
                </p>
                <p className="text-[13px] text-text-muted">{c.year}</p>
              </div>
              <p className="text-[15px] text-text-secondary">{c.institution}</p>
              {c.notes ? (
                <p className="mt-2 max-w-prose text-[14px] leading-[1.6] text-text-muted">{c.notes}</p>
              ) : null}
            </div>
          ))}
        </div>
      </CvSection>

      <CvSection heading="Research & ML Projects">
        <div className="space-y-6">
          {researchProjects.map((r) => (
            <article key={r.title}>
              <p className="font-heading text-[16px] font-semibold text-text-primary">{r.title}</p>
              <p className="text-[13px] text-text-muted">{r.context}</p>
              <p className="mt-2 max-w-prose text-[15px] leading-[1.7] text-text-secondary">
                {r.description}
              </p>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-sm text-[14px] text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </CvSection>

      <CvSection heading="Technical Skills">
        <dl className="space-y-5">
          {Object.entries(technicalSkills).map(([category, items]) => (
            <div key={category} className="grid gap-1 md:grid-cols-[160px_1fr] md:gap-6">
              <dt className="text-[13px] tracking-[0.06em] text-text-muted">
                {categoryLabels[category] ?? category}
              </dt>
              <dd className="text-[15px] text-text-secondary">{items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </CvSection>
      </div>
    </Container>
  )
}
