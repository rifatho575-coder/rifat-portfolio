"use client";

import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "mailto:abirmubar@gmail.com", label: "Email" },
  { href: "https://t.me/Rifat237", label: "Telegram" },
  { href: "https://x.com/Rifat_Era", label: "X" },
  { href: "https://github.com/rifatho575-coder", label: "GitHub" },
  { href: "#top", label: "Back to top" },
];

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-5xl px-6 py-10">
      <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-6 text-sm text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} Rifat Hossain. All rights reserved.</span>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {LINKS.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              variant="ghost"
              size="sm"
              magneticStrength={6}
              className="px-3 text-white/50 hover:text-white"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
