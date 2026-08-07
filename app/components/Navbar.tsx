"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <header className="py-6">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Right side navigation */}
        <div className="flex items-center gap-6">

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Hamburger Menu */}
          <HamburgerMenu />

        </div>

      </div>
    </header>
  );
}