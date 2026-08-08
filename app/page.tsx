import Image from "next/image";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Newsletter from "./components/Newsletter";

import { profile } from "@/lib/content";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <main>
      {/* CONTENT */}
      <div className="max-w-content mx-auto px-4 sm:px-5">

        {/* HERO */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl">

            {/* PROFILE PHOTO */}
            <div className="mb-8">
              <Image
                src="/images/profile/avatar.jpeg"
                alt="Rupesh"
                width={120}
                height={120}
                className="rounded-full object-cover"
                priority
              />
            </div>

            {/* NAME */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Rupesh
            </h1>

            {/* STATUS */}
           <p className="mt-3 text-sm font-bold text-black dark:text-white sm:text-base">
  {profile.status}
</p>

            {/* BIO */}
            <p className="mt-3 max-w-xl text-sm leading-6 sm:text-base sm:leading-7">
              {profile.bio}
            </p>

            {/* NAVIGATION */}
            <div className="mt-7 flex gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                Recent Writing
              </Link>

              <Link
                href="/archive"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-60"
              >
                Archive
              </Link>
            </div>
          </div>
        </section>

        {/* RECENT WRITING */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Recent Writing
          </h2>

          <div className="mt-6 space-y-6">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <h3 className="font-medium transition-opacity group-hover:opacity-60">
                    {post.title}
                  </h3>

                  {post.date && (
                    <p className="mt-1 text-sm opacity-60">
                      {post.date}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-12">
          <Newsletter />
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          className="mt-12 flex gap-5 border-t border-border py-8"
        >
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-opacity hover:opacity-60"
          >
            <Mail size={20} />
          </a>

          <a
            href={profile.github}
            aria-label="GitHub"
            className="transition-opacity hover:opacity-60"
          >
            <Github size={20} />
          </a>

          <a
            href={profile.twitter}
            aria-label="Twitter"
            className="transition-opacity hover:opacity-60"
          >
            <Twitter size={20} />
          </a>
        </footer>
      </div>
    </main>
  );
}