import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

function getPost(lang: string, slug: string) {
  const filePath = path.join(process.cwd(), "src/content/blog", lang, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data, content };
}

export async function generateStaticParams() {
  const langs = ["en", "ja"];
  const params: { lang: string; slug: string }[] = [];
  for (const lang of langs) {
    const contentDir = path.join(process.cwd(), "src/content/blog", lang);
    if (!fs.existsSync(contentDir)) continue;
    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
    files.forEach((f) => params.push({ lang, slug: f.replace(".md", "") }));
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPost(lang, slug);
  if (!post) return { title: "Not Found" };
  return { title: `${post.data.title} — Ankina Lab`, description: post.data.excerpt || "" };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1.4rem", fontWeight: 400, color: "var(--ink)", margin: "3rem 0 1rem", letterSpacing: "0.02em", borderBottom: "1px solid var(--line-faint)", paddingBottom: "0.5rem" }} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1.1rem", fontWeight: 400, color: "var(--ink)", margin: "2rem 0 0.75rem", letterSpacing: "0.02em" }} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1rem", color: "var(--muted)", lineHeight: 2, fontWeight: 300, marginBottom: "1.25rem" }} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem" }} {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem" }} {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.9, fontWeight: 300, marginBottom: "0.25rem" }} {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote style={{ borderLeft: "3px solid var(--fawn)", paddingLeft: "1.5rem", margin: "2rem 0", fontStyle: "italic" }} {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: "var(--ink)", fontWeight: 500 }} {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em style={{ color: "var(--anko-mid)" }} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a style={{ color: "var(--anko-mid)", textDecoration: "none", borderBottom: "1px solid rgba(58,28,82,0.2)" }} {...props} />
  ),
  hr: () => (
    <hr style={{ border: "none", borderTop: "1px solid var(--line-dark)", margin: "3rem 0" }} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div style={{ overflowX: "auto", margin: "2rem 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'DM Mono', monospace", fontSize: "0.78rem" }} {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead style={{ background: "var(--anko)", color: "var(--fawn-pale)" }} {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th style={{ padding: "0.75rem 1.25rem", textAlign: "left" as const, letterSpacing: "0.1em", textTransform: "uppercase" as const, fontSize: "0.65rem", fontWeight: 500, color: "var(--fawn-light)" }} {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td style={{ padding: "0.75rem 1.25rem", borderBottom: "1px solid var(--line-faint)", color: "var(--muted)", verticalAlign: "top" as const }} {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr style={{ background: "var(--bg)" }} {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.82rem", background: "rgba(58,28,82,0.06)", padding: "0.1rem 0.4rem", color: "var(--anko-mid)" }} {...props} />
  ),
};

export default async function BlogPost({ params }: Props) {
  const { lang, slug } = await params;
  const post = getPost(lang, slug);
  const isJa = lang === "ja";

  if (!post) {
    return (
      <main>
        <section style={{ padding: "10rem 5rem 8rem 6.5rem", maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Shippori Mincho', serif", color: "var(--muted)" }}>Post not found.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <article style={{ padding: "10rem 5rem 8rem 6.5rem", maxWidth: "820px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", marginBottom: "1rem" }}>
            {post.data.date} · Ankina Lab
          </div>
          <h1 style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.25, color: "var(--ink)", letterSpacing: "0.02em", marginBottom: "1.5rem" }}>
            {post.data.title}
          </h1>
          {post.data.excerpt && (
            <p style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.9, borderLeft: "3px solid var(--fawn)", paddingLeft: "1.5rem", fontStyle: "italic" }}>
              {post.data.excerpt}
            </p>
          )}
        </div>

        <div>
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--line-faint)" }}>
          <a href={`/blog?lang=${lang}`} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.12em", textDecoration: "none", textTransform: "uppercase" }}>
            ← {isJa ? "ブログに戻る" : "Back to Blog"}
          </a>
        </div>
      </article>
    </main>
  );
}
