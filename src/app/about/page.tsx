import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Timeline } from '@/components/about/Timeline'
import { Divider } from '@/components/ui/Divider'
import { timeline } from '@/content/timeline'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'Software developer and digital product builder focused on practical technology solutions for real-world problems.',
})

const aboutParagraphs = [
  'I am a software developer and digital product builder based in Kumasi, Ghana.',
  'I founded SPtech Ghana in 2021 to build practical technology for businesses and organizations — custom web systems, data-driven applications and digital products that solve real operational problems.',
  'My work sits at the intersection of software development, data and artificial intelligence. I have built hospital management systems, school platforms, digital marketplaces and web applications for clients across healthcare, education, logistics and agriculture.',
  'Alongside client work, I build and experiment with products of my own — because the best way to stay sharp is to keep building things that have to actually work.',
  'I hold a BSc in Computer Science and Information Systems from Data Link Institute and have continued developing professionally through training in machine learning and generative AI.',
]

export default function AboutPage() {
  return (
    <PageWrapper title="Technology should be useful before it is impressive.">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)]">
        <div className="max-w-prose">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-lead text-text-secondary' : 'mt-6 text-[17px] leading-[1.7] text-text-secondary'}>
              {p}
            </p>
          ))}

          <Divider className="my-12" />

          <h2 className="font-heading text-2xl font-semibold text-text-primary md:text-3xl">
            Professional journey
          </h2>
          <div className="mt-10">
            <Timeline entries={timeline} />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
