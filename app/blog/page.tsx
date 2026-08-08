import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Essays on software engineering, science, mathematics, and philosophy.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8">
      <nav className="flex items-center justify-between pt-10 pb-16 text-[13px]">
        <Link href="/" className="font-medium tracking-tight">
          Rupesh
        </Link>
        <div className="flex gap-6 text-ink-soft">
        
          <Link href="/#contact" className="hover:text-ink transition-colors">
            Contact
          </Link>

        </div>
      </nav>


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
    </div>
  );
}
