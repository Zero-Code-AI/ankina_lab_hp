import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ankina.ai";

  const contentDir = path.join(process.cwd(), "src/content/blog");
  const blogPosts = fs.existsSync(contentDir)
    ? fs
        .readdirSync(contentDir)
        .filter((f) => f.endsWith(".md"))
        .map((file) => {
          const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
          const { data } = matter(raw);
          return {
            url: `${baseUrl}/blog/${file.replace(".md", "")}`,
            lastModified: new Date(data.date || Date.now()),
            changeFrequency: "monthly" as const,
            priority: 0.7,
          };
        })
    : [];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts,
  ];
}
