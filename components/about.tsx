"use client";

import { motion } from "framer-motion";
import { User, Compass, Rocket, GraduationCap } from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";

const CARDS = [
  {
    icon: User,
    title: "Who I am",
    text: "A Web3 enthusiast with over five years exploring the crypto ecosystem — from early market cycles to today's on-chain opportunities.",
  },
  {
    icon: Compass,
    title: "What I build",
    text: "Research frameworks, tracking systems, and community write-ups that turn raw market noise into clear, actionable signal.",
  },
  {
    icon: Rocket,
    title: "My journey",
    text: "Started by following early DeFi projects out of curiosity — five years later, it's a daily practice of research, testing, and sharing what I learn.",
  },
  {
    icon: GraduationCap,
    title: "Learning mindset",
    text: "Crypto never stands still, so neither do I — continuously studying new protocols, tools, and market structure alongside my work.",
  },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan">
          About
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Five years deep in the crypto ecosystem
          <span className="text-white/40">, and still studying.</span>
        </h2>
        <span className="heading-accent" />
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <SpotlightCard className="h-full p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 via-violet/20 to-cyan/20">
                <card.icon className="h-5 w-5 text-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {card.text}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
