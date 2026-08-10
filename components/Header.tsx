"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/lib/content";

const NAV = [
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
    <header className="sticky top-0 z-40 border-b border-soil/10 bg-parchment/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink font-display text-sm font-bold text-ink">
            RG
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            {company.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-ink/80 transition-colors hover:text-clay"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:+${company.phoneIntl}`}
            className="rounded-full bg-ink px-4 py-2 font-body text-sm font-semibold text-parchment transition-colors hover:bg-clay"
          >
            {company.phoneDisplay}
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 md:hidden"
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

      {open && (
        <nav className="border-t border-soil/10 bg-parchment px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-3 font-body text-base font-medium text-ink/80 hover:bg-soil/5 hover:text-clay"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:+${company.phoneIntl}`}
                className="mt-2 block rounded-full bg-ink px-4 py-3 text-center font-body text-sm font-semibold text-parchment"
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
