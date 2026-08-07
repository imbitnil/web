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
    <section className="mt-12 border-t border-line pt-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {previous ? (
          <Link
            href={`/blog/${previous.slug}`}
            className="group rounded-xl border border-line px-5 py-4 transition-all duration-200 hover:border-gray-400 hover:shadow-md"
          >
            <p className="mb-1 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-faint">
              ← Previous
            </p>

            <h3 className="font-serif text-lg leading-snug group-hover:underline underline-offset-4">
              {previous.title}
            </h3>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="group rounded-xl border border-line px-5 py-4 text-right transition-all duration-200 hover:border-gray-400 hover:shadow-md"
          >
            <p className="mb-1 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-faint">
              Next →
            </p>

            <h3 className="font-serif text-lg leading-snug group-hover:underline underline-offset-4">
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