import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { profile } from "@/lib/content";
import ThemeToggle from "@/app/components/ThemeToggle";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8">
      <nav className="flex items-center justify-between pt-10 pb-16 text-[13px]">
        <Link href="/" className="font-medium tracking-tight">
          {profile.name}
        </Link>
        <Link href="/blog" className="text-ink-soft hover:text-ink transition-colors">
          ← All writing
        </Link>
        <ThemeToggle />
      </nav>

      <article className="pb-24">
        <span className="font-mono text-[12px] text-ink-faint">
          {post.date.replace(/-/g, ".")}
        </span>
        <h1 className="font-serif italic text-[36px] sm:text-[44px] leading-[1.1] mt-2 mb-8">
          {post.title}
        </h1>

        {post.cover && (
          <div className="relative w-full aspect-[16/9] mb-10 overflow-hidden rounded-lg">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        <div
          className="prose-post text-[16px] leading-[1.8] text-[color:var(--body-text)]"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </div>
  );
}
