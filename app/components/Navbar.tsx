"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f1f22] border-b border-neutral-800">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-pink-600"
        >
          Naval
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link href="/archive" className="hover:text-pink-500">
            Archive
          </Link>

          <Link href="/blog" className="hover:text-pink-500">
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <Menu size={34} />
        </button>
      </div>
    </header>
  );
}