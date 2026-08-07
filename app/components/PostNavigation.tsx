import Link from "next/link";

type Post = {
  slug: string;
  title: string;
};

type PostNavigationProps = {
  previous: Post | null;
  next: Post | null;
};

export default function PostNavigation({
  previous,
  next,
}: PostNavigationProps) {
  return (
    <section className="mt-20 border-t border-line pt-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Previous */}
        {previous ? (
          <Link
            href={`/blog/${previous.slug}`}
            className="group rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-ink-faint">
              ← Previous
            </p>

            <h3 className="font-serif text-2xl leading-snug group-hover:underline underline-offset-4">
              {previous.title}
            </h3>
          </Link>
        ) : (
          <div />
        )}

        {/* Next */}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="group rounded-2xl border border-line p-6 text-right transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-ink-faint">
              Next →
            </p>

            <h3 className="font-serif text-2xl leading-snug group-hover:underline underline-offset-4">
              {next.title}
            </h3>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}