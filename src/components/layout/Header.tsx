"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, OWNER_INITIALS, OWNER_FULL_NAME } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/work" || href === "/insights"
      ? pathname === href || pathname.startsWith(`${href}/`)
      : pathname === href;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "no-print sticky top-0 z-50 h-16 transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled
            ? "border-b border-border bg-[rgba(11,13,15,0.85)] backdrop-blur-[12px]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-baseline gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
            aria-label={`${OWNER_INITIALS} — home`}
          >
            <span className="font-heading text-2xl font-bold text-text-primary">
              {OWNER_INITIALS}
              <span className="text-accent">.</span>
            </span>
            <span className="hidden text-sm text-text-secondary lg:inline">
              {OWNER_FULL_NAME}
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 md:flex"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-sm text-[15px] text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive(item.href) &&
                    'text-text-primary after:absolute after:-bottom-[7px] after:left-0 after:h-[2px] after:w-full after:bg-accent after:content-[""]',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" className="px-4 py-2 text-sm">
              Let&apos;s Work Together
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          >
            <Menu aria-hidden className="h-6 w-6" />
          </button>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
