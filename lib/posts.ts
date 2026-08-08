import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

export function getAllPosts(): PostMeta[] {
  const filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      cover: (data.cover as string) || "",
    };
  });

  // Newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    cover: (data.cover as string) || "",
    contentHtml,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
export function getPostsByArchive() {
  const posts = getAllPosts();

  const archive: Record<
    string,
    Record<string, typeof posts>
  > = {};

  posts.forEach((post) => {
    const date = new Date(post.date);

    const year = date.getFullYear().toString();

    const month = date.toLocaleString("en-US", {
      month: "long",
    });

    if (!archive[year]) {
      archive[year] = {};
    }

    if (!archive[year][month]) {
      archive[year][month] = [];
    }

    archive[year][month].push(post);
  });

  return archive;
}
export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts();

  const index = posts.findIndex((post) => post.slug === slug);

  return {
    previous: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}