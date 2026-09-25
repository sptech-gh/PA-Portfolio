'use client'

import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const steps = [
  {
    n: '1',
    title: 'Understand',
    description:
      'I start by understanding the business, users and actual problem before anything is designed or built.',
  },
  {
    n: '2',
    title: 'Plan',
    description:
      'I translate requirements into a practical technical approach — what to build, how, and in what order.',
  },
  {
    n: '3',
    title: 'Build',
    description:
      'I develop, test and refine the solution iteratively, keeping the goal in view at every stage.',
  },
  {
    n: '4',
    title: 'Launch',
    description: 'I help bring the product into a usable production environment.',
  },
  {
    n: '5',
    title: 'Improve',
    description:
      'Real-world use reveals what to sharpen. I use feedback to improve the solution over time.',
  },
]

export function ProcessSteps() {
  const reduced = useReducedMotion()

  return (
    <section aria-labelledby="process-heading" className="border-y border-border bg-surface-1">
      <Container className="py-20 md:py-28">
        <h2 id="process-heading" className="text-section-heading max-w-2xl">
          From problem to product.
        </h2>

        <MotionConfig reducedMotion="user">
          <motion.ol
            className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={reduced ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
          >
            {steps.map((step) => (
              <li key={step.n} className="flex flex-col">
                <span className="font-heading text-5xl font-bold leading-none text-text-muted">
                  {step.n}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] text-text-secondary">{step.description}</p>
              </li>
            ))}
          </motion.ol>
        </MotionConfig>
      </Container>
    </section>
  )
}
