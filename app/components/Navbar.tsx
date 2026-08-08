"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <header>
      <div className="mx-6 flex items-center justify-between border-b border-black py-6 dark:border-white sm:mx-8">
        {/* Logo */}
        <Logo />

        {/* Right side navigation */}
        <div className="flex items-center gap-6">
          <NavLinks />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}