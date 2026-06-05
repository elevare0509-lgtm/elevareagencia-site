"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/design-instagram", label: "Design Instagram" },
  { href: "/menu-digital", label: "Menu Digital" },
  { href: "/landing-pages", label: "Landing Pages" },
  { href: "/sites", label: "Sites" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navy/80 backdrop-blur-md w-full px-6 md:px-8 py-4 flex items-center justify-between relative z-50">
      <Link href="/" className="text-gold text-2xl font-bold tracking-wide">
        Elevare
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-offwhite hover:text-gold transition-colors text-sm font-medium"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-offwhite p-1"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-md border-t border-gold/10 md:hidden">
          <ul className="flex flex-col py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-offwhite hover:text-gold hover:bg-white/5 transition-colors text-sm font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
