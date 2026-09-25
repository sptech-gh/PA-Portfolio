import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Divider } from "@/components/ui/Divider";
import { getArticle, getAllSlugs } from "@/content/insights";
import { getMDXComponents } from "@/mdx-components";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return buildMetadata({ title: "Insights" });
  return buildMetadata({
    title: article.meta.title,
    description: article.meta.excerpt,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { meta, content: MDXContent } = article;
  const components = getMDXComponents({});

  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <Link
        href="/insights"
        className="inline-flex items-center gap-2 rounded-sm text-sm text-text-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <ArrowLeft aria-hidden className="h-4 w-4" />
        Back to insights
      </Link>

      <header className="mx-auto mt-10 max-w-prose">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-text-muted">
          <time dateTime={meta.publishedAt}>
            {formatDate(meta.publishedAt)}
          </time>
          <span aria-hidden>·</span>
          <span>{meta.readingTime ?? "Insight"}</span>
        </div>
        <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary md:text-5xl">
          {meta.title}
        </h1>
        <p className="text-lead mt-5 text-text-secondary">{meta.excerpt}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {meta.tags.map((t) => (
            <Tag key={t} className="text-[12px]">
              {t}
            </Tag>
          ))}
        </div>
      </header>

      <Divider className="mx-auto my-12 max-w-prose" />

      <article className="mx-auto max-w-prose">
        <MDXContent components={components} />
      </article>
    </Container>
  );
}
