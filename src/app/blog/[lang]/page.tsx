import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "ja" ? "ブログ — Ankina Lab" : "Blog — Ankina Lab",
    description: lang === "ja" ? "Ankina Labの研究ノート。" : "Research notes from Ankina Lab.",
  };
}

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

function getPosts(lang: string): Post[] {
  const contentDir = path.join(process.cwd(), "src/content/blog", lang);
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const { data } = matter(raw);
      return { slug: file.replace(".md", ""), title: data.title || "", date: data.date || "", excerpt: data.excerpt || "" };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function BlogLangIndex({ params }: Props) {
  const { lang } = await params;
  const posts = getPosts(lang);
  const isJa = lang === "ja";

  return (
    <main>
      <section style={{ padding: "10rem 5rem 8rem 6.5rem", maxWidth: "1140px", margin: "0 auto" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase" as const, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />
          {isJa ? "ブログ — 研究ノート" : "Blog — Research Notes"}
        </div>

        {posts.length === 0 ? (
          <div style={{ border: "1px solid var(--line-dark)", padding: "4rem 3rem", textAlign: "center" as const }}>
            <p style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1rem", color: "var(--muted)", lineHeight: 2 }}>{isJa ? "近日公開予定" : "First posts coming soon."}</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1px", background: "var(--line-dark)", border: "1px solid var(--line-dark)" }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${lang}/${post.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--bg)", padding: "2.5rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem" }}>
                  <div>
                    <h2 style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1.1rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem" }}>{post.title}</h2>
                    <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "600px" }}>{post.excerpt}</p>
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", flexShrink: 0 }}>{post.date}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
