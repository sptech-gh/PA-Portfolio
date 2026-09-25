import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ContactForm } from '@/components/contact/ContactForm'
import { buildMetadata } from '@/lib/seo'
import { CONTACT_EMAIL, socialLinks } from '@/lib/site'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Start a conversation about a software project, technology problem or product idea.',
})

export default function ContactPage() {
  return (
    <PageWrapper
      title="Let's work on something real."
      lead="Whether you have a project in mind, a technology problem to solve, or simply want to explore possibilities — reach out."
    >
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
        <div className="order-2 max-w-xl lg:order-1">
          <ContactForm />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-heading text-lg font-semibold text-text-primary">Direct channels</h2>
          <p className="mt-4 text-[15px] text-text-secondary">
            Email me directly at{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-sm text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <p className="mt-3 text-[15px] text-text-secondary">
            Or connect on{' '}
            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              LinkedIn
            </a>{' '}
            or{' '}
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              GitHub
            </a>
            .
          </p>
          {/* Phone number intentionally omitted until owner approves public display (Section 25). */}
        </div>
      </div>
    </PageWrapper>
  )
}
