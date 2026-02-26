"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#case-types", label: "Case Types" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "navbar-scrolled" :"navbar-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home-page" className="flex items-center gap-2.5 group" aria-label="Case Converter Hub Home">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm transition-transform duration-200 group-hover:scale-105"
            style={{ background: "var(--color-primary)" }}
          >
            Aa
          </div>
          <span
            className="text-lg"
            style={{ fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.03em", fontFamily: "var(--font-heading)" }}
          >
            Case Converter <span style={{ color: "var(--color-primary)" }}>Hub</span>
          </span>
        </Link>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="nav-link text-sm font-medium transition-colors duration-150"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#converter-tool"
          className="action-btn action-btn-primary text-sm hidden md:inline-flex"
          style={{ padding: "9px 20px", fontSize: "13px" }}
        >
          Start Converting →
        </a>
      </div>
    </header>
  );
}