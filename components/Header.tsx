"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { company } from "@/lib/content";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/operations", label: "Operations" },
  { href: "/training", label: "Training" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-leaf/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.jpeg"
            alt="Royal Group logo"
            width={48}
            height={48}
            className="rounded-full object-cover ring-2 ring-gold/60"
            priority
          />
          <span className="font-display text-2xl font-bold tracking-tight text-parchment">
            {company.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-parchment/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:+${company.phoneIntl}`}
            className="rounded-full bg-gold px-4 py-2 font-body text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            {company.phoneDisplay}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-parchment md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="border-t border-gold/20 bg-ink px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-3 font-body text-base font-medium text-parchment/80 hover:bg-gold/10 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:+${company.phoneIntl}`}
                className="mt-2 block rounded-full bg-gold px-4 py-3 text-center font-body text-sm font-semibold text-ink"
              >
                Call {company.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
