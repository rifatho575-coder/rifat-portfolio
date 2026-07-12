"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Crypto Researcher",
  "Web3 Enthusiast",
  "Airdrop Hunter",
  "DeFi Explorer",
];

export function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    const typingSpeed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <span className="text-gradient-accent">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cyan align-middle" style={{ height: "1em" }} />
    </span>
  );
}
