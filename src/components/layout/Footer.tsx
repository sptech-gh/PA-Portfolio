import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { NAV_ITEMS, OWNER_INITIALS, OWNER_FULL_NAME, socialLinks } from '@/lib/site'
import { Divider } from '@/components/ui/Divider'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="no-print border-t border-border bg-surface-1">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link
              href="/"
              className="inline-flex items-baseline gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              <span className="font-heading text-2xl font-bold text-text-primary">
                {OWNER_INITIALS}
                <span className="text-accent">.</span>
              </span>
              <span className="hidden text-sm text-text-secondary sm:inline">{OWNER_FULL_NAME}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
              Software Developer &amp; Digital Product Builder
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <GithubIcon aria-hidden className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <LinkedinIcon aria-hidden className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
              {[...NAV_ITEMS, { label: 'CV', href: '/cv' }, { label: 'Contact', href: '/contact' }].map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col gap-2 text-[13px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Â© {year} {OWNER_FULL_NAME}. All rights reserved.
          </p>
          <p>Built with Next.js</p>
        </div>
      </Container>
    </footer>
  )
}
