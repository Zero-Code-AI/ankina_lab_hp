"use client";
import Link from "next/link";
import { useState } from "react";
import type { Post } from "./page";

const TAG_LABELS: Record<string, { en: string; ja: string }> = {
  "paper-review": { en: "Paper Review", ja: "論文解説" },
  "explainer":    { en: "Explainer",    ja: "解説" },
  "history":      { en: "History",      ja: "AI史" },
  "my-research":  { en: "My Research",  ja: "拙稿" },
  "opinion":      { en: "Opinion",      ja: "オピニオン" },
  "opinion":      { en: "Opinion",      ja: "オピニオン" },
  "research":     { en: "Research",     ja: "研究" },
};

export default function BlogClient({ posts, lang }: { posts: Post[]; lang: string }) {
  const isJa = lang === "ja";
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // 全タグを収集
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;

  return (
    <main>
      <section style={{ padding: "10rem 5rem 8rem 6.5rem", maxWidth: "1140px", margin: "0 auto" }}>
        <div style={{ fontFamily: "\'DM Mono\', monospace", fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />
          {isJa ? "ブログ — 研究ノート" : "Blog — Research Notes"}
        </div>

        {/* タグフィルタ */}
        {allTags.length > 0 && (
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setActiveTag(null)}
              style={{ fontFamily: "\'DM Mono\', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", padding: "0.2rem 0.7rem", border: "1px solid rgba(58,28,82,0.2)", color: activeTag === null ? "var(--bg)" : "var(--anko-mid)", background: activeTag === null ? "var(--anko-mid)" : "transparent", textDecoration: "none", cursor: "pointer" }}
            >
              {isJa ? "すべて" : "All"}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                style={{ fontFamily: "\'DM Mono\', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", padding: "0.2rem 0.7rem", border: "1px solid rgba(58,28,82,0.2)", color: activeTag === tag ? "var(--bg)" : "var(--anko-mid)", background: activeTag === tag ? "var(--anko-mid)" : "transparent", cursor: "pointer" }}
              >
                {TAG_LABELS[tag] ? (isJa ? TAG_LABELS[tag].ja : TAG_LABELS[tag].en) : tag}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <div style={{ border: "1px solid var(--line-dark)", padding: "4rem 3rem", textAlign: "center" }}>
            <p style={{ fontFamily: "\'Shippori Mincho\', serif", fontSize: "1rem", color: "var(--muted)", lineHeight: 2 }}>{isJa ? "近日公開予定" : "First posts coming soon."}</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--line-dark)", border: "1px solid var(--line-dark)" }}>
            {filtered.map((post) => (
              <Link key={post.slug} href={`/blog/${lang}/${post.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--bg)", padding: "2.5rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem" }}>
                  <div>
                    <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.6rem", flexWrap: "wrap" }}>
                      {post.tags.map((tag) => (
                        <span key={tag} style={{ fontFamily: "\'DM Mono\', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", padding: "0.15rem 0.5rem", border: "1px solid rgba(58,28,82,0.15)", color: "var(--anko-soft)" }}>
                          {TAG_LABELS[tag] ? (isJa ? TAG_LABELS[tag].ja : TAG_LABELS[tag].en) : tag}
                        </span>
                      ))}
                    </div>
                    <h2 style={{ fontFamily: "\'Shippori Mincho\', serif", fontSize: "1.1rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem" }}>{post.title}</h2>
                    <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "600px" }}>{post.excerpt}</p>
                  </div>
                  <div style={{ fontFamily: "\'DM Mono\', monospace", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", flexShrink: 0 }}>{post.date}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
