"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Github, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/typewriter";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIALS = [
  { icon: Github, href: "https://github.com/rifatho575-coder", label: "GitHub" },
  { icon: XIcon, href: "https://x.com/Rifat_Era", label: "X" },
  { icon: Send, href: "https://t.me/Rifat237", label: "Telegram" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.div variants={item} className="relative mb-8">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue via-violet to-cyan opacity-40 blur-2xl" />
          <div className="h-28 w-28 overflow-hidden rounded-full border border-white/10 p-1 sm:h-32 sm:w-32">
            <Image
              src="/images/avatar.png"
              alt="Rifat Hossain"
              width={256}
              height={256}
              priority
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="glass mb-8 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/70"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan" />
          Available for research collaborations
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient">Rifat Hossain</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 h-8 max-w-2xl text-balance text-lg text-white/60 sm:text-xl"
        >
          <Typewriter />
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in touch
          </Button>

          <Button
            variant="outline"
            disabled
            title="Add your resume PDF to /public and link it here"
          >
            <Download className="h-4 w-4" />
            Resume
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-3">
          {SOCIALS.map((s) => (
            <Button
              key={s.label}
              href={s.href}
              variant="outline"
              size="icon"
              magneticStrength={22}
              aria-label={s.label}
            >
              <s.icon className="h-4 w-4" />
            </Button>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/80"
        aria-label="Scroll to About section"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
