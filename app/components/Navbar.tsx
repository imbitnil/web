"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full">
        <div className="flex items-center justify-between px-6 py-5">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white z-50"
            aria-label="Open menu"
          >
            <Menu size={34} />
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}