import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-3xl font-bold tracking-tight text-red-600 border-b border-white pb-1 transition hover:text-red-500"
    >
      Rupesh
    </Link>
  );
}