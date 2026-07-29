"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  badge?: string;
  title: string;
  problemHook?: string;
  outcome?: string;
  bullets: string[];
  price?: string;
  primaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  microCopy?: string;
  fullWidth?: boolean;
  extraContent?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  badge,
  title,
  problemHook,
  outcome,
  bullets,
  price,
  primaryCtaText,
  onPrimaryCtaClick,
  secondaryCtaText,
  secondaryCtaHref,
  microCopy,
  fullWidth = false,
  extraContent,
}) => {
  return (
    <div
      className={`flex flex-col bg-charcoal rounded-xl border border-transparent transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,215,0,0.08)] hover:border-gold/20 p-6 md:p-10 group h-full relative z-10 w-full ${
        fullWidth ? "max-w-4xl mx-auto" : ""
      }`}
    >
      <div className="flex-1 pb-4 md:pb-8">
        <div className="flex justify-between items-start mb-4">
          <h2 className="font-primary font-bold text-gold uppercase text-2xl tracking-tight">
            {title}
          </h2>
          {badge && (
            <span className="bg-gold/10 text-gold text-[10px] font-mono font-bold px-2 py-1 rounded uppercase tracking-wider border border-gold/20">
              {badge}
            </span>
          )}
        </div>
        
        {problemHook && (
          <p className="font-subheader text-ivoryWhite text-lg mb-3 leading-snug">
            {problemHook}
          </p>
        )}
        
        {outcome && (
          <p className="text-silverMist text-sm md:text-base mb-6 leading-relaxed">
            {outcome}
          </p>
        )}

        {bullets && bullets.length > 0 && (
          <ul className="space-y-3 mb-12">
            {bullets.map((bullet, index) => (
              <li
                key={index}
                className="global-bullet text-silverMist text-sm md:text-base"
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {extraContent}
      </div>

      {(price || primaryCtaText || secondaryCtaText || microCopy) && (
        <div className="mt-auto pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            {price && (
              <div>
                <span className="block text-silverMist text-xs uppercase tracking-[0.2em] font-mono mb-1">
                  Investment
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-ivoryWhite text-lg sm:text-xl font-bold tracking-tight">
                    {price}
                  </span>
                </div>
              </div>
            )}
            
            {(primaryCtaText || secondaryCtaText) && (
              <div className="flex flex-col items-end gap-3 w-full sm:w-auto text-right">
                {primaryCtaText && onPrimaryCtaClick && (
                  <motion.button
                    onClick={onPrimaryCtaClick}
                    className="px-6 py-3 bg-gold text-darkSlate font-bold rounded-xl text-sm sm:text-base shadow-[0_0_15px_rgba(212,175,55,0.3)] w-full sm:w-auto hover:bg-gold/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {primaryCtaText}
                  </motion.button>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <Link href={secondaryCtaHref} className="text-gold hover:text-ivoryWhite text-sm font-semibold transition-colors flex items-center justify-end gap-1 group/link w-full sm:w-auto">
                    {secondaryCtaText} <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                )}
              </div>
            )}
          </div>
          {microCopy && (
             <div className="mt-4 text-xs text-silverMist/60 font-mono text-center sm:text-left">
               {microCopy}
             </div>
          )}
        </div>
      )}
    </div>
  );
};

interface ServicesSectionProps {
  onServiceClick?: (subject: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => {
  const handleCtaClick = (subject: string) => {
    if (onServiceClick) {
      onServiceClick(subject);
    }
  };

  const [isCareModalOpen, setIsCareModalOpen] = useState(false);
  const [selectedCareTier, setSelectedCareTier] = useState<"Care" | "Care+">("Care");

  useEffect(() => {
    if (isCareModalOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isCareModalOpen]);

  return (
    <div className="space-y-12">
      {/* Intro text */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-3xl font-primary font-bold text-ivoryWhite mb-4 tracking-tight">Three clear paths to a better website.</h3>
        <p className="text-silverMist text-lg">Whether your site needs fixing, replacing, or ongoing support — you'll know exactly what you're getting, what it costs, and when it ships.</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Website Rescue */}
        <ServiceCard
          badge="7–14 Days"
          title="Website Rescue"
          problemHook="Your current site is slow, broken, or embarrassing on mobile — and it's costing you customers."
          outcome="I'll diagnose the real issues and fix or rebuild your core pages so your site works as hard as you do."
          bullets={[
            "Full diagnostic + repair/rebuild of 4–6 core pages",
            "Mobile + speed optimization",
            "Basic SEO cleanup",
            "Domain/hosting transfer if needed",
            "Handoff video + 30-day post-launch support",
          ]}
          price="$2,200 – $2,400 · Fixed price"
          primaryCtaText="Discuss My Site"
          onPrimaryCtaClick={() => handleCtaClick("Website Rescue")}
          secondaryCtaText="Learn more"
          secondaryCtaHref="/services/website-rescue"
          microCopy="Fixed scope, clear guarantee. You own everything."
        />

        {/* Foundation Site */}
        <ServiceCard
          badge="2–3.5 Weeks"
          title="Foundation Site"
          problemHook="You have no real web presence — or what you have doesn't reflect the quality of your actual business."
          outcome="I'll design and build a clean, professional site from scratch that makes the right first impression and converts visitors into calls, bookings, or purchases."
          bullets={[
            "Strategy kickoff + custom sitemap",
            "Custom design (not a template) — up to 5–6 pages",
            "Clean CMS you can update yourself",
            "SEO + analytics setup",
            "Training video + live walkthrough",
            "2 revision rounds + 30-day support",
          ]}
          price="$3,800 – $4,200 · Fixed price"
          primaryCtaText="Start My Project"
          onPrimaryCtaClick={() => handleCtaClick("Foundation Site")}
          secondaryCtaText="Learn more"
          secondaryCtaHref="/services/foundation-site"
          microCopy="No templates. No surprises. Delivered in weeks."
        />
      </div>

      {/* Monthly Care — full width */}
      <ServiceCard
        fullWidth
        title="Ongoing Care"
        outcome="Your site stays fast, secure, and up to date — without you thinking about it."
        bullets={[]}
        extraContent={
          <div className="mt-8 space-y-8 pt-8 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Care Tier */}
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:border-gold/30 transition-colors">
                <div className="flex justify-between items-center mb-6 pt-6">
                  <h4 className="text-ivoryWhite font-bold text-xl">
                    Care
                  </h4>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-ivoryWhite">
                      $350
                    </span>
                    <span className="text-silverMist">/mo</span>
                  </div>
                </div>
                <ul className="space-y-3 text-silverMist">
                  <li className="global-bullet text-silverMist">
                    Hosting + security monitoring
                  </li>
                  <li className="global-bullet text-silverMist">
                    Up to 3–4 hrs content updates/edits
                  </li>
                  <li className="global-bullet text-silverMist">
                    Monthly light health check
                  </li>
                  <li className="global-bullet text-silverMist">
                    Standard priority email support
                  </li>
                </ul>
                <div className="h-16 flex-shrink-0"></div>
                <button
                  onClick={() => {
                    setSelectedCareTier("Care");
                    setIsCareModalOpen(true);
                  }}
                  className="block w-full text-center border-2 border-gold text-gold font-bold py-4 rounded-xl hover:bg-gold hover:text-darkSlate transition-colors mt-auto"
                >
                  Subscribe — Care
                </button>
              </div>

              {/* Care+ Tier */}
              <div className="bg-black/50 border border-gold/40 rounded-2xl p-6 flex flex-col h-full relative overflow-hidden group hover:border-gold transition-colors">
                <div className="absolute top-0 right-0 bg-gold text-darkSlate text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Recommended
                </div>
                <div className="flex justify-between items-center mb-6 pt-6">
                  <h4 className="text-ivoryWhite font-bold text-xl">
                    Care+
                  </h4>
                  <div className="text-right mt-4 sm:mt-0">
                    <span className="text-3xl font-bold text-ivoryWhite">
                      $595
                    </span>
                    <span className="text-silverMist">/mo</span>
                  </div>
                </div>
                <ul className="space-y-3 text-silverMist">
                  <li className="global-bullet text-silverMist">
                    Everything in Care
                  </li>
                  <li className="global-bullet text-silverMist">
                    Up to 7–8 hrs updates/edits
                  </li>
                  <li className="global-bullet text-silverMist">
                    Proactive suggestions + conversion tweaks
                  </li>
                  <li className="global-bullet text-silverMist">
                    Priority 48-hr turnaround
                  </li>
                </ul>
                <div className="h-16 flex-shrink-0"></div>
                <button
                  onClick={() => {
                    setSelectedCareTier("Care+");
                    setIsCareModalOpen(true);
                  }}
                  className="block w-full text-center bg-gold text-darkSlate font-bold py-4 rounded-xl hover:bg-gold/90 transition-colors mt-auto shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                >
                  Subscribe — Care+
                </button>
              </div>
            </div>

            <div className="text-center text-[11px] text-silverMist/70 font-mono pt-4 border-t border-white/5">
              Billed monthly · 30-day cancellation · You own everything
            </div>
          </div>
        }
      />
      <AnimatePresence>
        {isCareModalOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-darkSlate/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCareModalOpen(false)}
          >
            <motion.div
              className="bg-charcoal border border-gold/20 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden relative"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsCareModalOpen(false)}
                className="absolute top-4 right-4 text-silverMist hover:text-ivoryWhite transition-colors p-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-primary font-bold text-ivoryWhite mb-2">
                  You're one step away from stress-free website care.
                </h3>
                
                <div className="bg-gold/10 border border-gold/20 rounded-lg p-4 my-6">
                  <p className="font-mono text-gold font-bold text-lg mb-0">
                    {selectedCareTier === "Care" ? "Care — $350/mo" : "Care+ — $595/mo (Recommended)"}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-sm uppercase tracking-wider text-silverMist font-bold">What happens next:</h4>
                  <ul className="space-y-3">
                    <li className="global-bullet text-silverMist">
                      Complete secure checkout
                    </li>
                    <li className="global-bullet text-silverMist">
                      I'll personally reach out within one business day
                    </li>
                    <li className="global-bullet text-silverMist">
                      We'll get your site connected and protected
                    </li>
                  </ul>
                </div>

                <div className="text-sm text-silverMist/80 italic mb-8">
                  You own everything. Cancel anytime with 30 days notice. No lock-in.
                </div>

                <div className="space-y-4">
                  <a
                    href={selectedCareTier === "Care" ? "https://buy.stripe.com/3cIeVecosceO6v1ckZfrW04" : "https://buy.stripe.com/5kQ14o7485Qq6v1ckZfrW05"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gold text-darkSlate font-bold py-4 rounded-xl hover:bg-gold/90 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  >
                    Continue to Secure Checkout &rarr;
                  </a>
                  <button
                    onClick={() => {
                      setIsCareModalOpen(false);
                      handleCtaClick("Ongoing Care");
                    }}
                    className="block w-full text-center text-silverMist hover:text-ivoryWhite text-sm transition-colors"
                  >
                    Prefer to talk first? Send me a message &rarr;
                  </button>
                  <p className="text-center text-[10px] text-silverMist/50 font-mono pt-2">
                    Secure payment powered by Stripe · You'll receive a confirmation email immediately
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesSection;
