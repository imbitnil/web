"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <header className="border-b border-black dark:border-white">
      <div className="flex items-center justify-between px-6 py-6">
        
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