/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-1 rounded-lg font-medium transition ${
      pathname === path
        ? "bg-yellow-500 text-black"
        : "text-black hover:bg-yellow-200"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-300 shadow-sm">
      <div className="flex justify-between items-center h-20 px-6">
        {/* Logo */}
        <img src="/Image/logo.png" alt="Logo SAFYRR" className="h-14 md:h-18 lg:h-20" />

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={linkClass("/")}>Accueil</Link>
          <Link href="/about" className={linkClass("/about")}>À propos</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/faq" className={linkClass("/faq")}>FAQ</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>

          <Link href="/services">
            <button className="ml-4 px-5 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition">
              Commencez →
            </button>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg hover:bg-yellow-200 transition duration-300"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 border-t border-gray-300 px-4 py-4 flex flex-col gap-2 animate-fade-in-up">
          {["/", "/about", "/services", "/faq", "/contact"].map((path) => (
            <Link key={path} href={path} className={linkClass(path)} onClick={() => setIsOpen(false)}>
              {path === "/" ? "Accueil" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}

          <Link href="/services">
            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 px-2 py-3 bg-linear-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg w-full text-center shadow-md"
            >
              Commencez →
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}