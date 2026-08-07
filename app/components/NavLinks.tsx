import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8 text-white">
      <Link
        href="/archive"
        className="hover:text-pink-500"
      >
        Archive
      </Link>

      <Link
        href="/blog"
        className="hover:text-pink-500"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="hover:text-pink-500"
      >
        Contact
      </Link>
    </nav>
  );
}