"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function signIn() {
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
  console.log(error);
  setError(error.message);
  return;
}

console.log("Login successful");

router.push("/admin");
  }

  return (
    <main className="max-w-md mx-auto mt-24">
      <h1 className="text-3xl font-bold mb-6">
        Admin Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded-lg px-4 py-3 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-lg px-4 py-3 mb-6"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={signIn}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        Sign In
      </button>

      {error && (
        <p className="mt-4 text-red-500">
          {error}
        </p>
      )}
    </main>
  );
}