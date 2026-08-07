import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="ml-1 text-3xl font-semibold tracking-tight text-black dark:text-white hover:text-red-500"
    >
      Imbitnil
    </Link>
  );
}