import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "A collection of writing on STEM, philosophy, and more.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="max-w-content mx-auto px-6">
      {/* Navigation */}
      <nav className="flex items-center justify-between py-6">
        <Link
          href="/"
          className="font-serif text-[18px] hover:underline underline-offset-4"
        >
          Blog
        </Link>
      </nav>

      {/* Blog Posts */}
      <main>
        <div className="flex flex-col border-t border-line">
          {posts.map((p) => (
            <Link
              href={`/blog/${p.slug}`}
              key={p.slug}
              className="group py-6 border-b border-line"
            >
              <span className="font-mono text-[12px] text-ink-faint">
                {p.date.replace(/-/g, ".")}
              </span>

              <h2 className="text-[18px] font-serif mt-1 group-hover:underline underline-offset-4">
                {p.title}
              </h2>

              <p className="text-[14px] mt-1 text-ink-soft leading-relaxed">
                {p.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-line mt-16 py-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-6 text-[14px]">
            <Link
              href="/"
              className="hover:text-ink transition-colors"
            >
              Home
            </Link>

           
          </div>

          <span className="font-mono text-[12px] text-ink-faint">
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}