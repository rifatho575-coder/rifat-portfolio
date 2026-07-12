"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Check, Copy } from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";
import { Button } from "@/components/ui/button";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "abirmubar@gmail.com",
    href: "mailto:abirmubar@gmail.com",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@Rifat237",
    href: "https://t.me/Rifat237",
  },
  {
    icon: XIcon,
    label: "X",
    value: "@Rifat_Era",
    href: "https://x.com/Rifat_Era",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "rifatho575-coder",
    href: "https://github.com/rifatho575-coder",
  },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  function handleCopy(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(value);
      setTimeout(() => setCopied(null), 1800);
    });
  }

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan">
          Contact
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s talk crypto
        </h2>
        <span className="heading-accent mx-auto" />
        <p className="mx-auto mt-4 max-w-md text-white/55">
          Open to research collaborations, project reviews, and conversations
          about what&apos;s next in Web3.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CONTACTS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <SpotlightCard className="flex items-center justify-between gap-4 p-6">
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue/20 via-violet/20 to-cyan/20">
                  <c.icon className="h-5 w-5 text-cyan" />
                </span>
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-white/40">
                    {c.label}
                  </span>
                  <span className="block text-sm font-medium text-white">
                    {c.value}
                  </span>
                </span>
              </a>
              <Button
                variant="ghost"
                size="icon"
                magneticStrength={10}
                onClick={() => handleCopy(c.value)}
                aria-label={`Copy ${c.label}`}
                className="h-9 w-9 text-white/40 hover:text-white"
              >
                {copied === c.value ? (
                  <Check className="h-4 w-4 text-cyan" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
