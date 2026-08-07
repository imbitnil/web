import Image from "next/image";
import Link from "next/link";
import { Github, Mail, Twitter, Menu } from "lucide-react";

import ThemeToggle from "./components/ThemeToggle";
import Newsletter from "./components/Newsletter";

import { profile } from "@/lib/content";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <header className="border-b border-border">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <div className="flex min-h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 font-serif text-xl font-medium"
            >
              Imbitnil
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/archive"
                className="transition-opacity hover:opacity-60"
              >
                Archive
              </Link>

              <Link
                href="/blog"
                className="transition-opacity hover:opacity-60"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="transition-opacity hover:opacity-60"
              >
                Contact
              </Link>
            </nav>

            {/* Hamburger */}
            <details className="relative">
              <summary
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md hover:bg-muted [&::-webkit-details-marker]:hidden"
                aria-label="Open menu"
              >
                <Menu size={22} strokeWidth={1.8} />
              </summary>

              {/* Menu */}
              <div className="absolute right-0 top-12 z-50 w-48 rounded-lg border border-border bg-background p-3 shadow-lg">
                <nav className="flex flex-col">
                  <Link
                    href="/archive"
                    className="rounded-md px-3 py-2.5 hover:bg-muted md:hidden"
                  >
                    Archive
                  </Link>

                  <Link
                    href="/blog"
                    className="rounded-md px-3 py-2.5 hover:bg-muted md:hidden"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-md px-3 py-2.5 hover:bg-muted md:hidden"
                  >
                    Contact
                  </Link>

                  <div className="my-2 border-t border-border md:hidden" />

                  <div className="px-3 py-2">
                    <ThemeToggle />
                  </div>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="max-w-content mx-auto px-6 sm:px-8">
       {/* HERO */}
<section className="flex flex-col items-center gap-6 py-12 sm:py-16 md:flex-row md:gap-10">
  <Image
    src="/images/profile/avatar.jpeg"
    alt={profile.name}
    width={180}
    height={180}
    className="h-36 w-36 shrink-0 rounded-full object-cover sm:h-44 sm:w-44"
    priority
  />

  <div className="min-w-0 text-center md:text-left">
    <h1 className="font-serif text-4xl italic leading-tight sm:text-5xl">
      {profile.tagline}
    </h1>

    <p className="mt-3 text-sm text-accent sm:text-base">
      {profile.status}
    </p>

    <p className="mt-3 max-w-xl text-sm leading-6 sm:text-base sm:leading-7">
      {profile.bio}
    </p>
  </div>
</section>

     {/* RECENT WRITING */}
<section className="py-8">
  <h2 className="mb-3 text-3xl font-serif">
    Recent writing
  </h2>

  <div className="space-y-2">
    {posts.map((p) => (
      <Link
        key={p.slug}
        href={`/blog/${p.slug}`}
        className="block break-words text-base font-normal underline decoration-black underline-offset-4 transition-all hover:font-bold dark:decoration-white"
      >
        {p.title}
      </Link>
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