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
    <div className="max-w-content mx-auto px-6 sm:px-8">
      {/* Nav */}
      <nav className="flex items-center justify-between pt-10 pb-16 text-[13px]">
        <span className="font-medium tracking-tight">{profile.name}</span>
        <div className="flex gap-6 text-ink-soft">
          <Link href="/blog" className="hover:text-ink transition-colors">
            Writing
          </Link>
          <a href="#contact" className="hover:text-ink transition-colors">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero */}
<header className="pb-20">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Profile Photo */}
<div className="flex-shrink-0">
  <Image
    src="/images/profile/avatar.jpeg"
    alt={profile.name}
    width={180}
    height={180}
    className="rounded-full object-cover border border-line shadow-sm"
    priority
  />
</div>

    {/* Hero Content */}
    <div>
      <h1 className="font-serif italic text-[44px] sm:text-[58px] leading-[1.05] tracking-tight whitespace-pre-line">
        {profile.tagline}
      </h1>

      <p className="font-mono text-[13px] mt-6 text-accent">
        {profile.status}
        <span className="cursor-blink" aria-hidden="true">
          ▌
        </span>
      </p>

      <p className="text-[16px] leading-[1.7] mt-6 max-w-[540px] text-[color:var(--body-text)]">
        {profile.bio}
      </p>
    </div>
  </div>
</header>
      {/* Writing */}
      <section id="writing" className="pb-20">
        <h2 className="font-mono text-[12px] tracking-widest uppercase mb-6 text-ink-soft">
          Recent writing
        </h2>
        <div className="flex flex-col gap-4">
          {posts.map((p) => (
            <Link
              href={`/blog/${p.slug}`}
              key={p.slug}
              className="group flex items-baseline gap-4"
            >
              <span className="font-mono text-[12px] text-ink-faint">
                {p.date.replace(/-/g, ".")}
              </span>
              <span className="text-[15px] group-hover:underline underline-offset-4">
                {p.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
<Newsletter />
      {/* Footer */}
      <footer
        id="contact"
        className="pb-12 pt-8 flex items-center justify-between text-[13px] border-t border-line text-ink-soft"
      >
        <div className="flex gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-ink transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.github}
            aria-label="Github"
            className="hover:text-ink transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.twitter}
            aria-label="Twitter"
            className="hover:text-ink transition-colors"
          >
            <Twitter size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}
