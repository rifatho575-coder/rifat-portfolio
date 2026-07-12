"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  {
    href: "#about",
    label: "About",
    id: "about",
    accent:
      "hover:text-blue hover:drop-shadow-[0_0_10px_rgba(0,122,255,0.6)]",
  },
  {
    href: "#skills",
    label: "Skills",
    id: "skills",
    accent:
      "hover:text-violet hover:drop-shadow-[0_0_10px_rgba(255,42,95,0.6)]",
  },
  {
    href: "#projects",
    label: "Projects",
    id: "projects",
    accent:
      "hover:text-cyan hover:drop-shadow-[0_0_10px_rgba(255,149,0,0.6)]",
  },
  {
    href: "#experience",
    label: "Experience",
    id: "experience",
    accent:
      "hover:text-blue hover:drop-shadow-[0_0_10px_rgba(0,122,255,0.6)]",
  },
  {
    href: "#contact",
    label: "Contact",
    id: "contact",
    accent:
      "hover:text-violet hover:drop-shadow-[0_0_10px_rgba(255,42,95,0.6)]",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg shadow-black/20" : ""
        }`}
      >
        {links.map((link) => {
          const isActive = active === link.id;

          return (
            <Button
              key={link.href}
              href={link.href}
              variant="ghost"
              size="sm"
              magneticStrength={8}
              className={`relative rounded-full transition-colors duration-300 ${
                isActive ? "text-white" : "text-white/85"
              } ${link.accent}`}
            >
              {link.label}

              {isActive && (
                <motion.span
                  layoutId="nav-active-dot"
                  className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue via-violet to-cyan"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Button>
          );
        })}
      </nav>
    </motion.header>
  );
}