import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-3xl font-bold tracking-tight text-pink-600 transition hover:text-pink-500"
    >
      Rupesh
    </Link>
  );
}