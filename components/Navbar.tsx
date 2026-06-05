"use client";

import Link from "next/link";

const links = [
  { href: "/design-instagram", label: "Design Instagram" },
  { href: "/menu-digital", label: "Menu Digital" },
  { href: "/landing-pages", label: "Landing Pages" },
  { href: "/sites", label: "Sites" },
];

export default function Navbar() {
  return (
    <nav className="bg-navy/80 backdrop-blur-md w-full px-8 py-4 flex items-center justify-between">
      <Link href="/" className="text-gold text-2xl font-bold tracking-wide">
        Elevare
      </Link>
      <ul className="flex gap-6">
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
    </nav>
  );
}
