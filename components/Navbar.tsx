"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 flex justify-center px-4 pt-3 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-4xl rounded-full px-5 md:px-7 h-[52px] flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1628] backdrop-blur-md shadow-lg border border-white/10"
            : "bg-[#0B1628]/60 backdrop-blur-md border border-white/5"
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image src="/logo-elevare.png" alt="Elevare" height={30} width={30} className="h-[30px] w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 items-center">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-offwhite hover:text-gold transition-colors text-xs font-semibold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/5511950274038"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#C4A35A] text-[#0B1628] text-xs font-bold px-4 py-2 rounded-full hover:brightness-110 transition-all"
        >
          Falar no WhatsApp
        </a>

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
          <div className="absolute top-full left-0 right-0 mt-2 mx-0 bg-[#0B1628]/95 backdrop-blur-md border border-white/10 rounded-2xl md:hidden overflow-hidden">
            <ul className="flex flex-col py-4">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 text-offwhite hover:text-gold hover:bg-white/5 transition-colors text-sm font-semibold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="px-6 pt-3 pb-1">
                <a
                  href="https://wa.me/5511950274038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#C4A35A] text-[#0B1628] text-sm font-bold px-5 py-2.5 rounded-full hover:brightness-110 transition-all"
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
