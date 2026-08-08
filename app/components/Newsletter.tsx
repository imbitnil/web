"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function subscribe() {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("suscribers")
      .insert([{ email }]);

    if (error) {
      setMessage("This email is already subscribed or something went wrong.");
    } else {
      setMessage("Thanks for subscribing!");
      setEmail("");
    }

    setLoading(false);
  }

  return (
  <section className="ml-auto max-w-xl">
    <h2 className="text-xl font-semibold">
      Subscribe to my newsletter
    </h2>

    <p className="mb-6 text-sm text-gray-500">
      Get notified whenever I publish a new article.
    </p>

    <div className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-black placeholder:text-gray-500 dark:border-gray-600 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
      />

      <button
        onClick={subscribe}
        disabled={loading}
        className="rounded-lg bg-black px-6 py-2 text-white dark:bg-white dark:text-black"
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </div>

    {message && (
      <p className="mt-4 text-sm">
        {message}
      </p>
    )}
  </section>
);
}