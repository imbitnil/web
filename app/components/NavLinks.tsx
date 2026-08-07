import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className="flex items-center gap-6">
      <Link
        href="/archive"
        className="border-b border-black pb-1 text-black transition hover:font-semibold dark:border-white dark:text-white"
      >
        Archive
      </Link>

      <Link
        href="/blog"
        className="border-b border-black pb-1 text-black transition hover:font-semibold dark:border-white dark:text-white"
      >
        Blog
      </Link>

    </nav>
  );
}