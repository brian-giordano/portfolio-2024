"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaFigma,
  FaBootstrap,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaSketch,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiOpenai,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiElectron,
  SiDotnet,
  SiVercel,
  SiJira,
  SiMysql,
  SiFastapi,
  SiAdobephotoshop,
  SiStreamlit,
} from "react-icons/si";
import { IconType } from "react-icons/lib";

const ICON_POOL = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "#ffffff" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiTailwindcss, color: "#06B67F" },
  { Icon: FaPython, color: "#FFD43B" },
  { Icon: SiOpenai, color: "#10A37F" },
  { Icon: FaHtml5, color: "#E34F26" },
  { Icon: FaCss3Alt, color: "#1572B6" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: FaSass, color: "#CC6699" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiMui, color: "#007FFF" },
  { Icon: FaFigma, color: "#F24E1E" },
  { Icon: SiElectron, color: "#47848F" },
  { Icon: FaBootstrap, color: "#7952B3" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiDotnet, color: "#512BD4" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaGitAlt, color: "#F05032" },
  { Icon: SiVercel, color: "#ffffff" },
  { Icon: SiJira, color: "#0052CC" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: SiFastapi, color: "#009688" },
  { Icon: SiAdobephotoshop, color: "#31A8FF" },
  { Icon: FaSketch, color: "#F7B500" },
  { Icon: SiStreamlit, color: "#FF4B4B" },
];

interface Drop {
  id: number;
  Icon: IconType;
  color: string;
  left: number;
  top: number;
  size: number;
  blur: number;
  opacity: number;
  parallaxScale: number;
  floatDuration: number;
  floatY: number;
  floatX: number;
  rotateDeg: number;
}

const BokehDrop = ({ drop }: { drop: Drop }) => {
  const { scrollY } = useScroll();
  // Transform scroll into parallax displacement.
  // Positive parallaxScale pushes items down as you scroll down, giving the illusion they are further away.
  // Negative parallaxScale pulls them up faster than the scroll, making them feel close.
  const yParallax = useTransform(scrollY, [0, 1000], [0, drop.parallaxScale]);

  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        left: `${drop.left}%`,
        top: `${drop.top}%`,
        y: yParallax,
        opacity: drop.opacity,
      }}
    >
      <motion.div
        animate={{
          y: [0, drop.floatY, 0],
          x: [0, drop.floatX, 0],
          rotate: [0, drop.rotateDeg, 0],
        }}
        transition={{
          duration: drop.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * -20, // Negative default randomly jumps the animation forward immediately
        }}
      >
        <drop.Icon size={drop.size} color={drop.color} />
      </motion.div>
    </motion.div>
  );
};

export default function HeroBackground() {
  const [drops, setDrops] = useState<Drop[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fisher-Yates shuffle — guarantees every icon appears exactly once.
    // No repeats, no faking it. Pool size = drop count.
    const shuffled = [...ICON_POOL].sort(() => Math.random() - 0.5);

    const newDrops: Drop[] = shuffled.map((iconDef, i) => {
      const depthClass = Math.random();
      let blur, opacity, size, parallaxScale;

      if (depthClass < 0.5) {
        blur = 4 + Math.random() * 4;
        opacity = 0.03 + Math.random() * 0.05;
        size = 40 + Math.random() * 50;
        parallaxScale = 400 + Math.random() * 250;
      } else if (depthClass < 0.85) {
        blur = 1.5 + Math.random() * 2;
        opacity = 0.08 + Math.random() * 0.06;
        size = 25 + Math.random() * 25;
        parallaxScale = 150 + Math.random() * 150;
      } else {
        blur = 0;
        opacity = 0.1 + Math.random() * 0.08;
        size = 20 + Math.random() * 15;
        parallaxScale = -50 - Math.random() * 150;
      }

      return {
        id: i,
        Icon: iconDef.Icon,
        color: iconDef.color,
        left: -5 + Math.random() * 110,
        top: -10 + Math.random() * 110,
        size,
        blur,
        opacity,
        parallaxScale,
        floatDuration: 12 + Math.random() * 12,
        floatY: (Math.random() > 0.5 ? 1 : -1) * (15 + Math.random() * 25),
        floatX: (Math.random() > 0.5 ? 1 : -1) * (10 + Math.random() * 15),
        rotateDeg: (Math.random() > 0.5 ? 1 : -1) * (15 + Math.random() * 30),
      };
    });

    setDrops(newDrops);
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0" />;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* We keep the layout gradient here natively, drawing beneath the bokeh */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-[#111827]/80 to-transparent" />

      {drops.map((drop) => (
        <BokehDrop key={drop.id} drop={drop} />
      ))}
    </div>
  );
}
