import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  getAllSlugs,
  getPostBySlug,
  getAdjacentPosts,
} from "@/lib/posts";

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
    <main>
      <div className="max-w-content mx-auto px-6">

        {/* READING PROGRESS */}
        <ReadingProgress />

        {/* ARTICLE */}
        <article className="pb-24">

          {/* DATE */}
          <span className="font-mono text-[12px] text-ink-faint">
            {post.date.replace(/-/g, ".")}
          </span>

          {/* TITLE */}
          <h1 className="mt-2 mb-8 font-serif text-[36px] leading-[1.1] sm:text-[44px]">
            {post.title}
          </h1>

          {/* COVER IMAGE */}
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

          {/* ARTICLE CONTENT */}
          <div
            className="prose-post text-[16px] leading-[1.8] text-[color:var(--body-text)]"
            dangerouslySetInnerHTML={{
              __html: post.contentHtml,
            }}
          />

          {/* PREVIOUS / NEXT */}
          

          <PostNavigation
            previous={previous}
            next={next}
          />
        </article>

        {/* FOOTER */}
        <footer className="border-t border-border py-8">
          <div className="flex items-center justify-between text-sm">

            {/* HOME */}
            <Link
              href="/"
              className="font-medium transition-opacity hover:opacity-60"
            >
              Home
            </Link>

            {/* YEAR */}
            <span className="text-ink-faint">
              © {new Date().getFullYear()}
            </span>

          </div>
        </footer>

      </div>
    </main>
  );
}