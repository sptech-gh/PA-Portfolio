import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="mt-14 font-heading text-2xl font-semibold text-text-primary md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 font-heading text-lg font-semibold text-text-primary">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-5 max-w-prose leading-[1.7] text-text-secondary">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mt-5 max-w-prose list-disc space-y-2 pl-6 text-text-secondary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-5 max-w-prose list-decimal space-y-2 pl-6 text-text-secondary">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-2 border-accent pl-5 italic leading-[1.7] text-text-secondary">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="rounded-sm text-accent underline-offset-4 transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.9em] text-text-primary">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mt-6 overflow-x-auto rounded-md border border-border bg-surface-2 p-5 text-sm leading-relaxed text-text-secondary">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-12 border-0 border-t border-border" />,
    ...components,
  };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getMDXComponents(components);
}
