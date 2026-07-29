"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "0.",
    title: "Site Health Check",
    description: "We start with a free 30-minute review of your current site (or goals). You'll get a written scorecard with specific recommendations — no commitment required.",
    deliverable: "Written scorecard + recommended path",
  },
  {
    number: "1.",
    title: "Scope & Plan",
    description: "Based on the health check, I'll propose a clear scope, fixed price, and timeline. No vague estimates.",
    deliverable: "Detailed proposal + timeline",
  },
  {
    number: "2.",
    title: "Build & Refine",
    description: "I design and build your site with two revision rounds built in. You'll see progress throughout — not just at the end.",
    deliverable: "Production-ready site",
  },
  {
    number: "3.",
    title: "Launch & Support",
    description: "Domain connected, analytics live, CMS training recorded. 30 days of hands-on support after launch.",
    deliverable: "Live site + training video + 30 days support",
  },
];

import { useRouter } from "next/navigation";

interface ProcessSectionProps {
  onCtaClick?: () => void;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ onCtaClick }) => {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onCtaClick) {
      router.push("/site-health-check");
    } else {
      router.push("/site-health-check");
    }
  };

  return (
    <div className="py-8 md:py-16">
      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-20 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-white/10 -z-0" />

        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col h-full items-center md:items-start text-center md:text-left group">
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

            <div className="mt-auto h-24 md:h-[6.5rem] w-full flex flex-col justify-start">
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
          onClick={handleCtaClick}
          className="px-10 py-4 border-2 border-gold text-gold font-bold rounded-xl text-lg hover:bg-gold/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_25px_rgba(255,215,0,0.2)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Book a Free Site Health Check
        </motion.button>
      </div>
    </div>
  );
};

export default ProcessSection;
