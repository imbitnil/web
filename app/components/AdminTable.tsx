"use client";

import { useMemo, useState } from "react";

type Subscriber = {
  id: number;
  email: string;
  created_at: string;
};

export default function AdminTable({
  subscribers,
}: {
  subscribers: Subscriber[];
}) {
  const [search, setSearch] = useState("");

  const filteredSubscribers = useMemo(() => {
    return subscribers.filter((subscriber) =>
      subscriber.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, subscribers]);

  return (
    <>
      <input
        type="text"
        placeholder="🔍 Search subscribers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 mb-6"
      />

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">Joined</th>
            </tr>
          </thead>

          <tbody>
            {filteredSubscribers.map((subscriber) => (
              <tr key={subscriber.id} className="border-t">
                <td className="px-4 py-3">
                  {subscriber.email}
                </td>

                <td className="px-4 py-3">
                  {new Date(subscriber.created_at).toLocaleDateString("en-US")}
                </td>
              </tr>
            ))}

            {filteredSubscribers.length === 0 && (
              <tr>
                <td
                  colSpan={2}
                  className="text-center py-8 text-gray-500"
                >
                  No subscribers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}