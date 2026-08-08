import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  getAllSlugs,
  getPostBySlug,
  getAdjacentPosts,
} from "@/lib/posts";
import { profile } from "@/lib/content";
import PostNavigation from "@/app/components/PostNavigation";
import ReadingProgress from "@/app/components/ReadingProgress";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Post({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  const { previous, next } = getAdjacentPosts(params.slug);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <ReadingProgress />

      <header className="mb-16 flex items-center justify-between">
  <Link
    href="/"
    className="font-serif text-2xl tracking-tight"
  >
    {profile.name}
  </Link>

  <nav className="flex items-center gap-6 text-sm">
    <Link href="/blog" className="hover:underline">
      ← All writing
    </Link>
  </nav>
</header>

      <article className="pb-24">
        <span className="font-mono text-[12px] text-ink-faint">
          {post.date.replace(/-/g, ".")}
        </span>

        <h1 className="mt-2 mb-8 font-serif text-[36px] leading-[1.1] sm:text-[44px]">
          {post.title}
        </h1>

        {post.cover && (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-lg">
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
          dangerouslySetInnerHTML={{
            __html: post.contentHtml,
          }}
        />

        <hr className="my-16 border-line" />

        <PostNavigation
          previous={previous}
          next={next}
        />
      </article>
    </div>
  );
}