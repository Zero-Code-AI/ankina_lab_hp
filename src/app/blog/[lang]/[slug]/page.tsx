import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
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
      <article style={{ padding: "10rem 5rem 8rem 6.5rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", marginBottom: "1rem" }}>{post.data.date} · Ankina Lab</div>
          <h1 style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.25, color: "var(--ink)", letterSpacing: "0.02em", marginBottom: "1rem" }}>{post.data.title}</h1>
          {post.data.excerpt && (
            <p style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.9, borderLeft: "3px solid var(--fawn)", paddingLeft: "1.5rem" }}>{post.data.excerpt}</p>
          )}
        </div>
        <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1rem", color: "var(--muted)", lineHeight: 2, fontWeight: 300 }}>
          <MDXRemote source={post.content} />
        </div>
        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--line-faint)" }}>
          <a href={`/blog?lang=${lang}`} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.12em", textDecoration: "none", textTransform: "uppercase" as const }}>
            ← {isJa ? "ブログに戻る" : "Back to Blog"}
          </a>
        </div>
      </article>
    </main>
  );
}
