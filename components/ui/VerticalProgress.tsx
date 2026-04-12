"use client";

import React from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

interface VerticalProgressProps {
  currentSection: string;
}

const VerticalProgress: React.FC<VerticalProgressProps> = ({
  currentSection,
}) => {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6">
      {/* Vertical line */}
      <div className="w-px h-72 bg-white/10 relative">
        {/* Active progress line */}
        <motion.div
          className="absolute top-0 w-px bg-gold origin-top"
          initial={{ height: "0%" }}
          animate={{
            height: `${(sections.findIndex((s) => s.id === currentSection) + 1) * (100 / sections.length)}%`,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Dots */}
      <div className="flex flex-col gap-8">
        {sections.map((section) => {
          const isActive = currentSection === section.id;
          return (
            <motion.button
              key={section.id}
              onClick={() => {
                const el = document.getElementById(section.id);
                if (el) {
                  const headerHeight =
                    parseFloat(
                      document.documentElement.style.getPropertyValue(
                        "--header-height",
                      ),
                    ) || 80;
                  const offset =
                    el.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;
                  window.scrollTo({ top: offset, behavior: "smooth" });
                }
              }}
              className="group flex items-center gap-3 focus:outline-none"
              whileHover={{ scale: 1.1 }}
            >
              {/* Dot */}
              <div
                className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-gold border-gold shadow-[0_0_12px_2px] shadow-gold/50"
                    : "bg-transparent border-white/30 group-hover:border-white/60"
                }`}
              />

              {/* Label (subtle) */}
              <span
                className={`text-xs tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-gold"
                    : "text-white/40 group-hover:text-white/70"
                }`}
              >
                {section.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalProgress;
