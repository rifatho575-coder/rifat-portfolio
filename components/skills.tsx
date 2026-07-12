"use client";

import { motion } from "framer-motion";
import {
  Search,
  LineChart,
  Briefcase,
  ShieldAlert,
  Coins,
  Blocks,
  Globe,
  TrendingUp,
  Users,
  Code2,
  Server,
  Terminal,
  Figma,
  GitBranch,
  Wrench,
} from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";

// Frontend/Backend/Programming entries are placeholders — swap for your real stack.
const CATEGORIES = [
  {
    label: "Research",
    skills: [
      { icon: Search, name: "Crypto Research" },
      { icon: TrendingUp, name: "Market Research" },
      { icon: LineChart, name: "Technical Analysis" },
    ],
  },
  {
    label: "Blockchain",
    skills: [
      { icon: Coins, name: "DeFi" },
      { icon: Blocks, name: "Blockchain" },
      { icon: Globe, name: "Web3" },
    ],
  },
  {
    label: "Strategy",
    skills: [
      { icon: Briefcase, name: "Portfolio Management" },
      { icon: ShieldAlert, name: "Risk Analysis" },
      { icon: Users, name: "Community Building" },
    ],
  },
  {
    label: "Programming",
    skills: [
      { icon: Code2, name: "JavaScript / TypeScript" },
      { icon: Terminal, name: "Python" },
      { icon: GitBranch, name: "Git & GitHub" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { icon: Code2, name: "React" },
      { icon: Code2, name: "Next.js" },
      { icon: Figma, name: "Tailwind CSS" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: Server, name: "Node.js" },
      { icon: Server, name: "REST APIs" },
      { icon: Wrench, name: "Basic DevOps" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan"
      >
        Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Tools of the trade
      </motion.h2>
      <span className="heading-accent" />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (ci % 2) * 0.1 }}
          >
            <SpotlightCard className="h-full p-7">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                {cat.label}
              </h3>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue/20 via-violet/20 to-cyan/20">
                      <skill.icon className="h-4 w-4 text-cyan" />
                    </span>
                    <span className="text-sm text-white/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
