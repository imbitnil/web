import type { Metadata } from "next";
import { getPostsByArchive } from "@/lib/posts";
import ArchiveTree from "./ArchiveTree";

export const metadata: Metadata = {
  title: "Archive",
  description: "Archive of writing.",
};

export default function ArchivePage() {
  const archive = getPostsByArchive();

  return (
    <main className="max-w-content mx-auto px-6 sm:px-8">
      <h1>Archive</h1>

      <ArchiveTree archive={archive} />
    </main>
  );
}