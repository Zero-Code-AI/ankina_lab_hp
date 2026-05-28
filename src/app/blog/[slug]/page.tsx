import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data, content };
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  return files.map((f) => ({ slug: f.replace(".md", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.data.title} — Ankina Lab`,
    description: post.data.excerpt || "",
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <main>
        <section style={{ padding: "10rem 5rem 8rem 6.5rem", maxWidth: "1140px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Shippori Mincho', serif", color: "var(--muted)" }}>Post not found.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <article
        style={{
          padding: "10rem 5rem 8rem 6.5rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              color: "var(--muted)",
              letterSpacing: "0.1em",
              marginBottom: "1rem",
            }}
          >
            {post.data.date} · Ankina Lab
          </div>
          <h1
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.25,
              color: "var(--ink)",
              letterSpacing: "0.02em",
              marginBottom: "1rem",
            }}
          >
            {post.data.title}
          </h1>
          {post.data.excerpt && (
            <p
              style={{
                fontFamily: "'Shippori Mincho', serif",
                fontSize: "1.05rem",
                color: "var(--muted)",
                lineHeight: 1.9,
                borderLeft: "3px solid var(--fawn)",
                paddingLeft: "1.5rem",
              }}
            >
              {post.data.excerpt}
            </p>
          )}
        </div>

        <div
          style={{
            fontFamily: "'Shippori Mincho', serif",
            fontSize: "1rem",
            color: "var(--muted)",
            lineHeight: 2,
            fontWeight: 300,
          }}
        >
          <MDXRemote source={post.content} />
        </div>

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--line-faint)" }}>
          <a
            href="/blog"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              color: "var(--muted)",
              letterSpacing: "0.12em",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            ← {post.data.lang === "ja" ? "ブログに戻る" : "Back to Blog"}
          </a>
        </div>
      </article>
    </main>
  );
}
