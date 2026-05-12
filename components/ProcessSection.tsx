"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1.",
    title: "Audit & Plan",
    description: "Review current site (or goals), define scope, deliver sitemap + timeline.",
    deliverable: "Sitemap + timeline.",
  },
  {
    number: "2.",
    title: "Build & Design",
    description: "Wireframes → live build. Two revision rounds included.",
    deliverable: "Production-ready site.",
  },
  {
    number: "3.",
    title: "Launch & Train",
    description: "Domain connected, analytics live, CMS training recorded. 30 days of support.",
    deliverable: "Handoff video + 30 days of support.",
  },
];

interface ProcessSectionProps {
  onCtaClick: () => void;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ onCtaClick }) => {
  return (
    <div className="py-8 md:py-16">
      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/10 -z-0" />

        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
            {/* Step Number Tag */}
            <div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center text-darkSlate font-mono font-bold text-xl mb-6 shadow-[0_0_20px_rgba(255,215,0,0.3)] group-hover:scale-110 transition-transform duration-300">
              {step.number}
            </div>

            <h3 className="text-ivoryWhite font-primary font-bold text-xl uppercase tracking-tight mb-3">
              {step.title}
            </h3>
            
            <p className="text-silverMist text-sm md:text-base leading-relaxed mb-6 max-w-[280px] md:max-w-none">
              {step.description}
            </p>

            <div className="mt-auto">
              <span className="block text-gold text-[10px] uppercase tracking-[0.2em] font-mono mb-1">
                Deliverable
              </span>
              <p className="text-ivoryWhite font-semibold text-sm md:text-base">
                {step.deliverable}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <motion.button
          onClick={onCtaClick}
          className="px-10 py-4 border-2 border-gold text-gold font-bold rounded-xl text-lg hover:bg-gold/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_25px_rgba(255,215,0,0.2)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Book a Call
        </motion.button>
      </div>
    </div>
  );
};

export default ProcessSection;
