import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://imbitnil.com";
  const postEntries = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date,
  }));

  return [
    { url: base, lastModified: new Date().toISOString() },
    { url: `${base}/blog`, lastModified: new Date().toISOString() },
    ...postEntries,
  ];
}
