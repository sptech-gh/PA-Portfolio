import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

const panels = [
  { name: 'EduIntel', category: 'Academic data visualization', accent: 'line', z: 3, opacity: 1 },
  { name: 'GHData', category: 'Market', accent: 'dot', z: 4, opacity: 1 },
  { name: 'Kensa SMS', category: 'School Management', accent: 'line', z: 2, opacity: 0.85 },
  { name: 'Reddy', category: 'HMS', accent: 'dot', z: 1, opacity: 0.6 },
]

function ProductPanel({
  name,
  category,
  accent,
  z,
  opacity,
  className,
}: (typeof panels)[number] & { className?: string }) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface-2 p-4 shadow-lg shadow-black/20 ${className ?? ''}`}
      style={{ zIndex: z, opacity }}
    >
      <p className="font-heading text-[13px] font-semibold text-text-primary">{name}</p>
      <p className="mt-0.5 text-[11px] text-text-muted">{category}</p>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex h-6 flex-1 items-end gap-1">
          {[0.5, 0.7, 0.45, 0.85, 0.65].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-[2px] bg-surface-3"
              style={{ height: `${h * 100}%` }}
            />
          ))}
        </div>
        {accent === 'dot' ? (
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
        ) : (
          <span className="h-0.5 w-5 shrink-0 rounded-full bg-accent" />
        )}
      </div>
    </div>
  )
}

function Animated({
  children,
  delay,
}: {
  children: React.ReactNode
  delay: number
}) {
  return <div className="animate-fade-up" style={{ animationDelay: `${delay}s` }}>{children}</div>
}

export function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <Container className="grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div>
          <Animated delay={0}>
            <SectionLabel>Software Developer &amp; Digital Product Builder · Kumasi, Ghana</SectionLabel>
          </Animated>
          <Animated delay={0.1}>
            <h1
              id="hero-heading"
              className="text-hero mt-5 text-text-primary"
            >
              I build technology
              <br />
              that solves real problems.
            </h1>
          </Animated>
          <Animated delay={0.22}>
            <p className="text-lead mt-7 max-w-xl text-text-secondary">
              I design and develop practical digital products, web applications and data-driven
              solutions for businesses, organizations and entrepreneurs.
            </p>
          </Animated>
          <Animated delay={0.34}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/work" variant="primary">
                View My Work
              </Button>
              <Button href="/contact" variant="secondary">
                Let&apos;s Work Together
              </Button>
            </div>
          </Animated>
          <Animated delay={0.46}>
            <p className="mt-10 text-[13px] text-text-muted">
              Software Development&nbsp;&nbsp;·&nbsp;&nbsp;AI &amp; Machine Learning
              &nbsp;&nbsp;·&nbsp;&nbsp;Digital Products&nbsp;&nbsp;·&nbsp;&nbsp;Technology
              Consulting
            </p>
          </Animated>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-md select-none lg:block" aria-hidden>
          <ProductPanel {...panels[0]} className="absolute left-0 top-6 w-[62%] -rotate-1" />
          <ProductPanel {...panels[1]} className="absolute right-0 top-[6%] w-[46%] rotate-1" />
          <ProductPanel {...panels[2]} className="absolute bottom-[22%] left-[20%] w-[70%]" />
          <ProductPanel {...panels[3]} className="absolute bottom-[9%] left-2 w-[40%] -rotate-2" />
        </div>

        {/* Stacked composition for smaller screens */}
        <div className="grid grid-cols-2 gap-4 lg:hidden" aria-hidden>
          <ProductPanel {...panels[0]} className="" />
          <ProductPanel {...panels[1]} className="mt-6" />
          <ProductPanel {...panels[2]} className="col-span-2 -mt-2" />
        </div>
      </Container>
    </section>
  )
}
