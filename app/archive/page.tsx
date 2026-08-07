import { getPostsByArchive } from "@/lib/posts";
import ArchiveTree from "./ArchiveTree";

export default function ArchivePage() {
  const archive = getPostsByArchive();

  return (
    <main className="max-w-content mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Archive</h1>

      <ArchiveTree archive={archive} />
    </main>
  );
}