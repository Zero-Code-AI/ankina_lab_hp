import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import BlogClient from "./BlogClient";

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

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

function getPosts(lang: string): Post[] {
  const contentDir = path.join(process.cwd(), "src/content/blog", lang);
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
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function BlogLangIndex({ params }: Props) {
  const { lang } = await params;
  const posts = getPosts(lang);
  return <BlogClient posts={posts} lang={lang} />;
}
