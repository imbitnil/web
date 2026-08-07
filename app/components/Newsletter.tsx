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
    <section className="mt-12 ml-auto mr-10 max-w-md">
      <h2 className="text-xl font-semibold">
        Subscribe to my newsletter
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Get notified whenever I publish a new article.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
        />

        <button
          onClick={subscribe}
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded-lg"
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