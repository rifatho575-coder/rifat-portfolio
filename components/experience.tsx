"use client";

import { motion } from "framer-motion";

// Sample timeline — replace years/roles with your real milestones.
const timeline = [
  {
    year: "2021 — Present",
    title: "Independent Crypto Researcher",
    description:
      "Analyzing emerging DeFi protocols and blockchain networks, tracking airdrop opportunities, and publishing research for the community.",
  },
  {
    year: "2021 — Present",
    title: "Continuing Web3 Education",
    description:
      "Ongoing, self-directed study of blockchain fundamentals, tokenomics, on-chain analysis, and market structure.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan"
      >
        Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        The path so far
      </motion.h2>
      <span className="heading-accent" />

      <div className="relative mt-14 space-y-10 border-l border-white/10 pl-8">
        {timeline.map((entry, i) => (
          <motion.div
            key={entry.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue to-violet shadow-[0_0_12px_rgba(255,42,95,0.8)]" />
            <div className="text-xs uppercase tracking-wider text-cyan">
              {entry.year}
            </div>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {entry.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
              {entry.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
