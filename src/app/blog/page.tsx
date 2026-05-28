import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Ankina Lab",
  description: "Research notes, essays, and updates from Ankina Lab.",
};

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  lang: string;
}

function getPosts(): Post[] {
  const contentDir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: file.replace(".md", ""),
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        lang: data.lang || "en",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <main>
      <section
        style={{
          padding: "10rem 5rem 8rem 6.5rem",
          maxWidth: "1140px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            color: "var(--muted)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />
          Blog — Research Notes
        </div>

        {posts.length === 0 ? (
          <div
            style={{
              border: "1px solid var(--line-dark)",
              padding: "4rem 3rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Shippori Mincho', serif",
                fontSize: "1rem",
                color: "var(--muted)",
                lineHeight: 2,
              }}
            >
              First posts coming soon.
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                color: "var(--muted)",
                letterSpacing: "0.1em",
                marginTop: "1rem",
              }}
            >
              Add .md files to src/content/blog/
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--line-dark)", border: "1px solid var(--line-dark)" }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "var(--bg)",
                    padding: "2.5rem 3rem",
                    transition: "background 0.2s",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "2rem",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontFamily: "'Shippori Mincho', serif",
                        fontSize: "1.1rem",
                        fontWeight: 400,
                        color: "var(--ink)",
                        marginBottom: "0.75rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.84rem",
                        color: "var(--muted)",
                        lineHeight: 1.85,
                        maxWidth: "600px",
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      color: "var(--muted)",
                      letterSpacing: "0.1em",
                      flexShrink: 0,
                      paddingTop: "0.2rem",
                    }}
                  >
                    {post.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
