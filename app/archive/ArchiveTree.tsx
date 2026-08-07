"use client";

import { useState } from "react";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string;
};

type Archive = Record<string, Record<string, Post[]>>;

export default function ArchiveTree({
  archive,
}: {
  archive: Archive;
}) {
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({
    [Object.keys(archive)[0]]: true,
  });

  return (
    <>
      {Object.entries(archive)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, months]) => {
          const totalPosts = Object.values(months).flat().length;

          return (
            <section key={year} className="mb-12">
              <button
                onClick={() =>
                  setOpenYears((prev) => ({
                    ...prev,
                    [year]: !prev[year],
                  }))
                }
                className="flex w-full items-center justify-between border-b border-line pb-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">
                    {openYears[year] ? "▼" : "▶"}
                  </span>

                  <span className="font-serif text-3xl">
                    {year}
                  </span>
                </div>

                <span className="font-mono text-sm text-ink-faint">
                  ({totalPosts})
                </span>
              </button>

              {openYears[year] && (
                <div className="mt-8 ml-6">
                  {Object.entries(months).map(([month, posts]) => (
                    <div key={month} className="mb-10">
                      <h3 className="mb-4 font-serif text-2xl">
                        {month}
                      </h3>

                      <div className="space-y-3">
                        {posts.map((post) => {
                          const date = new Date(post.date);

                          const day = date.getDate();

                          const monthShort = date.toLocaleString("en-US", {
                            month: "short",
                          });

                          return (
                            <Link
                              key={post.slug}
                              href={`/blog/${post.slug}`}
                              className="group flex items-center gap-8 py-1"
                            >
                              <span className="w-16 shrink-0 font-mono text-sm text-ink-faint">
                                {day} {monthShort}
                              </span>

                              <span className="font-serif text-xl group-hover:underline underline-offset-4">
                                {post.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
    </>
  );
}