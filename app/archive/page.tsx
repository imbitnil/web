import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByArchive } from "@/lib/posts";
import ArchiveTree from "./ArchiveTree";

export const metadata: Metadata = {
  title: "Archive",
  description: "Archive of writing.",
};

export default function ArchivePage() {
  const archive = getPostsByArchive();

  return (
    <main>
      <div className="max-w-content mx-auto px-6">

        {/* ARCHIVE */}
        <section className="py-16 sm:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Archive
          </h1>

          {/* ARCHIVE CONTENT */}
          <div className="mt-10">
            <ArchiveTree archive={archive} />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border py-8">
          <div className="flex items-center justify-between text-sm">

            {/* HOME */}
            <Link
              href="/"
              className="font-medium transition-opacity hover:opacity-60"
            >
              Home
            </Link>

            {/* YEAR */}
            <span className="text-ink-faint">
              © {new Date().getFullYear()}
            </span>

          </div>
        </footer>

      </div>
    </main>
  );
}