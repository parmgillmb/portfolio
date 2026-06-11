"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="no-print sticky top-0 z-40 px-4 pt-3 sm:px-6">
      <div className="mx-auto max-w-content">
        {/* Floating glass pill */}
        <nav
          aria-label="Primary"
          className={`liquid-glass flex h-14 items-center justify-between rounded-full pl-2 pr-2 transition-shadow duration-300 ${
            scrolled ? "shadow-xl shadow-black/10" : ""
          }`}
        >
          <Link href="/" className="group flex items-center gap-2 rounded-full py-1 pl-1 pr-3 font-bold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm text-accent-fg transition-transform duration-300 group-hover:rotate-[8deg]">
              PG
            </span>
            <span className="hidden font-display sm:inline">{profile.name}</span>
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(l.href)
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-surface-2/60 hover:text-fg"
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span aria-hidden="true" className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}
              </Link>
            ))}
            <div className="ml-1.5">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/70"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile glass panel */}
        {open && (
          <div className="liquid-glass mt-2 rounded-2xl md:hidden">
            <div className="flex flex-col p-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive(l.href) ? "bg-accent/10 text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
