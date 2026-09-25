import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Divider } from '@/components/ui/Divider'

export function AboutSnippet() {
  return (
    <section aria-labelledby="about-snippet-heading">
      <Container className="py-20 md:py-28">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 id="about-snippet-heading" className="text-section-heading">
              Technology should be useful before it is impressive.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <Divider className="mb-8 border-border lg:hidden" />
            <p className="text-lead text-text-secondary">
              I am a software developer and digital product builder based in Kumasi, Ghana. I
              founded SPtech Ghana in 2021 to build practical technology for businesses and
              organizations — custom web systems, data-driven applications and digital products
              that solve real operational problems.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 self-start text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              More about me
              <ChevronRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
