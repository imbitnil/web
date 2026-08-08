"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
        className="text-black dark:text-white"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* MENU */}
      {open && (
        <div className="absolute right-0 top-8 z-50 w-52 border border-black bg-white p-4 shadow-lg dark:border-white dark:bg-black">
          <nav className="flex flex-col">
            <Link
              href="/market"
              onClick={() => setOpen(false)}
              className="border-b border-black py-3 text-black transition hover:font-semibold dark:border-white dark:text-white"
            >
              Market
            </Link>

            <Link
              href="/engineering"
              onClick={() => setOpen(false)}
              className="border-b border-black py-3 text-black transition hover:font-semibold dark:border-white dark:text-white"
            >
              Engineering
            </Link>

            <Link
              href="/data-science"
              onClick={() => setOpen(false)}
              className="border-b border-black py-3 text-black transition hover:font-semibold dark:border-white dark:text-white"
            >
              Data Science
            </Link>

            <Link
              href="/applications"
              onClick={() => setOpen(false)}
              className="border-b border-black py-3 text-black transition hover:font-semibold dark:border-white dark:text-white"
            >
              Applications
            </Link>

            <Link
              href="/leetcode"
              onClick={() => setOpen(false)}
              className="border-b border-black py-3 text-black transition hover:font-semibold dark:border-white dark:text-white"
            >
              LeetCode
            </Link>

            {/* Theme Toggle */}
            <div className="flex items-center justify-between pt-4">
              <span className="text-sm text-black dark:text-white">
                Theme
              </span>

              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}