import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="border-t border-border">
      <Container className="py-24 text-center md:py-32">
        <h2 id="final-cta-heading" className="text-section-heading mx-auto max-w-2xl">
          Ready to build something?
        </h2>
        <p className="text-lead mx-auto mt-6 max-w-xl text-text-secondary">
          If you have a technology project, an idea you want to explore, or a problem worth solving
          — let&apos;s talk.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary">
            Start a conversation
          </Button>
          <Button href="/work" variant="secondary">
            View my work
          </Button>
        </div>
      </Container>
    </section>
  )
}
