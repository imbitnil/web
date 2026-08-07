import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className="flex items-center gap-6">
      <Link
        href="/archive"
        className="text-black transition hover:font-semibold dark:text-white"
      >
        Archive
      </Link>

      <Link
        href="/blog"
        className="text-black transition hover:font-semibold dark:text-white"
      >
        Blog
      </Link>
    </nav>
  );
}