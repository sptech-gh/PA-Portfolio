import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-bg font-medium hover:bg-accent-hover",
  secondary:
    "border border-border bg-transparent text-text-primary hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-text-secondary hover:text-accent",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    disabled && "pointer-events-none opacity-60",
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
