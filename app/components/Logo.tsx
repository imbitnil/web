import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-3xl font-semibold tracking-tight text-black border-b border-black pb-1 transition dark:text-white dark:border-white hover:text-red-500"
    >
      Imbitnil
    </Link>
  );
}