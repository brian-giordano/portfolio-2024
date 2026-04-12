"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "AI Product Builder",
  "Technical Product Manager",
  "AI Solutions Architect",
  "Creative Technologist",
];

export default function TypewriterText() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="h-[32px]" />;

  return (
    <div className="h-[32px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentPhrase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-gold text-base tracking-widest font-medium"
        >
          {phrases[currentPhrase]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
