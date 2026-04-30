"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce4dc]/80 bg-[#fbfaf5]/92 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b8c7f]"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#10223a] text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-[#10223a]">
              {profile.name}
            </span>
            <span className="hidden truncate text-xs text-[#62717a] sm:block">
              Biotechnology - Bioinformatics - AI
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b8c7f]",
                pathname === item.href
                  ? "bg-[#edf6ef] text-[#2b6f63]"
                  : "text-[#526170] hover:bg-white hover:text-[#10223a]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-[#a27b33] bg-[#fff8e8] px-3 py-2 text-sm font-semibold text-[#4b3515] transition hover:bg-[#f4e4bf]"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d7ddd4] bg-white text-[#10223a] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#dce4dc] bg-[#fbfaf5] px-5 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-semibold",
                  pathname === item.href
                    ? "bg-[#edf6ef] text-[#2b6f63]"
                    : "bg-white text-[#526170]",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#a27b33] bg-[#fff8e8] px-3 py-2 text-sm font-semibold text-[#4b3515]"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
