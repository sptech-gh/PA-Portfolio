"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, OWNER_INITIALS } from "@/lib/site";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const FOCUSABLE = "a[href], button:not([disabled])";

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const first = panel?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && panel) {
        const focusables = Array.from(
          panel.querySelectorAll<HTMLElement>(FOCUSABLE),
        );
        if (focusables.length === 0) return;
        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      inert={!open}
      className={cn(
        "fixed inset-0 z-[55] flex flex-col bg-bg transition-opacity duration-200 md:hidden",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="flex h-16 items-center justify-between px-5">
        <span className="font-heading text-2xl font-bold">
          {OWNER_INITIALS}
          <span className="text-accent">.</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X aria-hidden className="h-6 w-6" />
        </button>
      </div>

      <nav
        aria-label="Mobile"
        className="flex flex-1 flex-col justify-center gap-2 px-6"
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-md px-1 py-2 font-heading text-3xl font-semibold text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/cv"
          onClick={onClose}
          className="rounded-md px-1 py-2 font-heading text-3xl font-semibold text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          CV
        </Link>
      </nav>

      <div className="px-6 pb-10">
        <Button href="/contact" className="w-full" onClick={onClose}>
          Let&apos;s Work Together
        </Button>
      </div>
    </div>
  );
}
