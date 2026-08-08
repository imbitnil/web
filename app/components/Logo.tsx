import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-3xl font-semibold tracking-tight text-black dark:text-white hover:text-red-500"
    >
      Rupesh
    </Link>
  );
}