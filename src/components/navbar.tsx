"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e5de] bg-[#f8f7f3]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
      
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-[#253d63]"
          onClick={() => setIsOpen(false)}
        >
          Soha Tabassom Supre<span className="text-[#d59a62]">.</span>
        </a>

      
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#687386] transition-colors hover:text-[#253d63]"
            >
              {link.label}
            </a>
          ))}
        </div>


        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md border border-[#e8e5de] px-3 py-2 text-sm font-medium text-[#253d63] md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>


      {isOpen && (
        <div className="border-t border-[#e8e5de] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#687386] transition-colors hover:text-[#253d63]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
