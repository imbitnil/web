import Image from "next/image";
import Link from "next/link";
import { Github, Mail, Twitter } from "lucide-react";

import ThemeToggle from "./components/ThemeToggle";
import Newsletter from "./components/Newsletter";

import { profile } from "@/lib/content";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

 return (
  <main className="pl-6 md:pl-12">

      <header className="py-6">
  {/* TOP */}
<div className="flex items-center justify-end pr-8">
  <Link
    href="/"
    className="font-serif text-2xl font-bold text-red-600 border-b border-white pb-2"
  >
    Imbitnil
  </Link>
</div>

  {/* LINE + NAV */}
  <div className="mt-6 border-t border-border pt-4">
    <nav className="flex items-center justify-between">
      <Link href="/" className="text-accent">
        Rupesh Kumar
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/archive">Archive</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>

        <ThemeToggle />
        <div className="mt-6 border-t border-border pt-4"></div>
      </div>
    </nav>
  </div>
</header>


      <section className="py-20 flex flex-col md:flex-row gap-10 items-center">

        <Image
          src="/images/profile/avatar.jpeg"
          alt={profile.name}
          width={180}
          height={180}
          className="rounded-full"
          priority
        />


        <div>

          <h1 className="font-serif italic text-5xl">
            {profile.tagline}
          </h1>


          <p className="mt-6 text-accent">
            {profile.status}
          </p>


          <p className="mt-6 max-w-xl">
            {profile.bio}
          </p>

        </div>

      </section>


      <section>

        <h2 className="text-xl mb-6">
          Recent writing
        </h2>


        {posts.map((p) => (

          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block mb-4"
          >
            {p.title}
          </Link>

        ))}

      </section>


      <Newsletter />


      <footer
        id="contact"
        className="border-t mt-20 py-8 flex gap-5"
      >

        <a href={`mailto:${profile.email}`}>
          <Mail />
        </a>

        <a href={profile.github}>
          <Github />
        </a>

        <a href={profile.twitter}>
          <Twitter />
        </a>

      </footer>


    </main>
  );
}