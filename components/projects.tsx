"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";
import { Button } from "@/components/ui/button";

// Sample content — replace with your real projects once you have them.
// gradient = cover art placeholder; swap for a real screenshot via next/image when ready.
const PROJECTS = [
  {
    title: "DeFi Opportunity Tracker",
    description:
      "A personal research framework for surfacing early-stage DeFi protocols, scored on tokenomics, team, and on-chain traction.",
    tags: ["DeFi", "Research", "Next.js"],
    gradient: "from-blue/30 via-violet/20 to-transparent",
    github: "https://github.com/rifatho575-coder",
    demo: "#",
    caseStudy: "#",
  },
  {
    title: "Airdrop Farming Playbook",
    description:
      "A living notebook documenting testnet participation strategy, wallet hygiene, and eligibility criteria across active campaigns.",
    tags: ["Airdrops", "Strategy"],
    gradient: "from-violet/30 via-cyan/20 to-transparent",
    github: "https://github.com/rifatho575-coder",
    demo: "#",
    caseStudy: "#",
  },
  {
    title: "Market Structure Notes",
    description:
      "Ongoing technical and on-chain analysis on major crypto assets, shared with a growing community of fellow researchers.",
    tags: ["Technical Analysis", "Community"],
    gradient: "from-cyan/30 via-blue/20 to-transparent",
    github: "https://github.com/rifatho575-coder",
    demo: "#",
    caseStudy: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan"
      >
        Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Selected work
      </motion.h2>
      <span className="heading-accent" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-3 max-w-xl text-sm text-white/40"
      >
        Sample projects shown while I build out my public portfolio — real
        write-ups and links coming soon.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <SpotlightCard className="flex h-full flex-col overflow-hidden">
              {/* cover placeholder */}
              <div
                className={`relative h-36 w-full bg-gradient-to-br ${p.gradient} bg-[length:200%_200%] transition-[background-position] duration-700 group-hover:bg-[position:100%_0%]`}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
                  <Button
                    href={p.github}
                    variant="ghost"
                    size="sm"
                    magneticStrength={6}
                    className="px-3 text-white/50 hover:text-white"
                    aria-label="GitHub repository"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </Button>
                  <Button
                    href={p.demo}
                    variant="ghost"
                    size="sm"
                    magneticStrength={6}
                    className="px-3 text-white/50 hover:text-white"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </Button>
                  <Button
                    href={p.caseStudy}
                    variant="ghost"
                    size="sm"
                    magneticStrength={6}
                    className="px-3 text-white/50 hover:text-white"
                    aria-label="Case study"
                  >
                    <FileText className="h-3.5 w-3.5" /> Case study
                  </Button>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
