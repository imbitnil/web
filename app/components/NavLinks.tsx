import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className="flex items-center gap-6">
      <Link
        href="/archive"
        className="border-b border-red-600 pb-1 hover:text-red-500"
      >
        Archive
      </Link>

      <Link
        href="/blog"
        className="border-b border-red-600 pb-1 hover:text-red-500"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="border-b border-red-600 pb-1 hover:text-red-500"
      >
        Contact
      </Link>
    </nav>
  );
}