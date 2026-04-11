"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaReact, FaPython } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "#61DAFB", size: 32 },
  { Icon: SiNextdotjs, color: "#ffffff", size: 36 },
  { Icon: SiTypescript, color: "#3178C6", size: 30 },
  { Icon: SiTailwindcss, color: "#06B67F", size: 34 },
  { Icon: FaPython, color: "#FFD43B", size: 38 },
  { Icon: SiOpenai, color: "#10A37F", size: 32 },
];

const phrases = [
  "Next.js • LLMs • RAG",
  "Full-stack with AI intuition",
  "Defense-grade velocity",
  "Ships fast. Thinks deep.",
];

const FloatingIcon = ({ icon, index, springX, springY }: any) => {
  const x = useTransform(
    springX,
    [-0.5, 0.5],
    [-(index * 8 + 20), index * 8 + 20],
  );
  const y = useTransform(
    springY,
    [-0.5, 0.5],
    [-(index * 6 + 30), index * 6 + 30],
  );

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${12 + index * 13}%`,
        top: `${28 + index * 6}%`,
        x,
        y,
        opacity: 0.38 + index * 0.04,
      }}
      animate={{
        y: [0, -28, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 20 + index * 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.8,
      }}
    >
      <icon.Icon size={icon.size} color={icon.color} />
    </motion.div>
  );
};

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 30 });

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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  if (!mounted) return <div className="absolute inset-0" />;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {icons.map((icon, i) => (
        <FloatingIcon
          key={i}
          icon={icon}
          index={i}
          springX={springX}
          springY={springY}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-[#111827]/80 to-transparent" />

      {/* Fixed-height container so the typewriter never shifts or overlaps buttons */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 h-[32px] flex items-center">
        <motion.span
          key={currentPhrase}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold text-base tracking-widest"
        >
          {phrases[currentPhrase]}
        </motion.span>
      </div>
    </div>
  );
}
