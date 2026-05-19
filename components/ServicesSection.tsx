"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  subhead: string;
  bullets: string[];
  price: string;
  ctaText: string;
  href: string;
  fullWidth?: boolean;
  extraContent?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subhead,
  bullets,
  price,
  ctaText,
  href,
  fullWidth = false,
  extraContent,
}) => {
  return (
    <div
      className={`flex flex-col bg-charcoal rounded-xl border border-transparent transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,215,0,0.08)] hover:border-gold/20 p-6 md:p-10 group h-full relative z-10 w-full ${
        fullWidth ? "max-w-4xl mx-auto" : ""
      }`}
    >
      <div className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <h2 className="font-primary font-bold text-gold uppercase text-2xl tracking-tight">
            {title}
          </h2>
          {title === "Site Rescue" && (
            <span className="bg-gold/10 text-gold text-[10px] font-mono font-bold px-2 py-1 rounded uppercase tracking-wider border border-gold/20">
              Fast Turnaround
            </span>
          )}
          {title === "Starter" && (
            <span className="bg-mysticTeal/10 text-mysticTeal text-[10px] font-mono font-bold px-2 py-1 rounded uppercase tracking-wider border border-mysticTeal/20">
              Built for Growth
            </span>
          )}
        </div>
        <p className="font-subheader text-ivoryWhite text-lg mb-6 leading-snug">
          {subhead}
        </p>

        <ul className="space-y-3 mb-8">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex items-start text-silverMist text-sm md:text-base"
            >
              <span className="text-gold mr-3 mt-1.5 flex-shrink-0 text-[10px]">
                ●
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {extraContent}
      </div>

      <div className="mt-auto pt-8 border-t border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="block text-silverMist text-xs uppercase tracking-[0.2em] font-mono mb-1">
              Investment
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-ivoryWhite text-2xl font-bold tracking-tight">
                {price}
              </span>
            </div>
            {(title === "Site Rescue" || title === "Starter") && (
              <span className="text-gold/60 text-[11px] font-mono mt-1 block">
                Founding client rate:{" "}
                {title === "Site Rescue" ? "$400" : "$1,000"} for first 3
                clients
              </span>
            )}
          </div>
          <Link href={href}>
            <motion.button
              className="px-8 py-3.5 border-2 border-gold text-gold font-bold rounded-xl text-base hover:bg-gold/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_25px_rgba(255,215,0,0.2)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {ctaText}
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface ServicesSectionProps {
  onServiceClick?: (subject: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <div className="space-y-8">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Site Rescue */}
        <ServiceCard
          title="Site Rescue"
          subhead="For businesses stuck with broken, outdated, or dying websites."
          bullets={[
            "Full audit & diagnostics",
            "Repair or rebuild up to 5 pages",
            "Mobile optimization & speed fixes",
            "Domain/hosting transfer if needed",
            "30-day post-launch bug fix support",
          ]}
          price="Starting at $600"
          ctaText="See how a rescue works"
          href="/services/site-rescue"
          extraContent={
            <div className="mb-8">
              <a
                href="https://buy.stripe.com/test_14AbJ25Vf3oV2mS8527bW02"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition-colors mb-4"
              >
                Claim Founding Rate — $400 Now
              </a>
            </div>
          }
        />

        {/* Starter */}
        <ServiceCard
          title="Starter"
          subhead="For businesses with no real web presence yet."
          bullets={[
            "Custom design aligned with your brand",
            "Up to 5 pages built in Webflow (or Next.js for complex needs)",
            "Basic SEO & analytics setup",
            "CMS training + handoff video",
            "2 revision rounds included",
          ]}
          price="Starting at $1,500"
          ctaText="What's included in a starter"
          href="/services/starter"
          extraContent={
            <div className="mb-8">
              <a
                href="https://buy.stripe.com/test_6oUcN6dnHgbHbXs1GE7bW04"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition-colors mb-4"
              >
                Claim Founding Rate — $1,000 Now
              </a>
            </div>
          }
        />
      </div>

      {/* Monthly Care — two tiers with aligned buttons */}
      <ServiceCard
        fullWidth
        title="Monthly Care"
        subhead="Optional retainer to keep your site sharp without thinking about it."
        bullets={[]}
        price="$250–$450/month"
        ctaText="Compare care plans"
        href="/services/monthly-care"
        extraContent={
          <div className="mt-8 space-y-8 pt-8 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Lite Tier */}
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 flex flex-col h-full">
                <div className="flex justify-between items-baseline mb-6">
                  <h4 className="text-ivoryWhite font-bold text-xl">
                    Monthly Care Lite
                  </h4>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-ivoryWhite">
                      $250
                    </span>
                    <span className="text-silverMist">/mo</span>
                  </div>
                </div>
                <ul className="space-y-3 text-silverMist mb-8 flex-1">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">●</span>
                    Up to 3 hours of content updates + standard support
                  </li>
                </ul>
                <a
                  href="https://buy.stripe.com/dRm4gA88c0w6f1x4SxfrW01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border-2 border-gold text-gold font-bold py-4 rounded-xl hover:bg-gold/10 transition-colors mt-auto"
                >
                  Subscribe — Lite
                </a>
              </div>

              {/* Pro Tier */}
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 flex flex-col h-full">
                <div className="flex justify-between items-baseline mb-6">
                  <h4 className="text-ivoryWhite font-bold text-xl">
                    Monthly Care Pro
                  </h4>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-ivoryWhite">
                      $450
                    </span>
                    <span className="text-silverMist">/mo</span>
                  </div>
                </div>
                <ul className="space-y-3 text-silverMist mb-8 flex-1">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">●</span>
                    Up to 8 hours of updates, priority 48-hour turnaround, and
                    proactive maintenance
                  </li>
                </ul>
                <a
                  href="https://buy.stripe.com/00w3cw6047Yyg5BgBffrW02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border-2 border-gold text-gold font-bold py-4 rounded-xl hover:bg-gold/10 transition-colors mt-auto"
                >
                  Subscribe — Pro
                </a>
              </div>
            </div>

            {/* Original terms block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[11px]">
              <div>
                <h4 className="text-ivoryWhite font-bold uppercase tracking-[0.2em] mb-4 opacity-70">
                  Included:
                </h4>
                <p className="text-silverMist leading-relaxed">
                  Hosting, security, content updates, link checks, priority
                  edits
                </p>
              </div>
              <div>
                <h4 className="text-ivoryWhite font-bold uppercase tracking-[0.2em] mb-4 opacity-70">
                  Not Included:
                </h4>
                <p className="text-silverMist leading-relaxed">
                  Third-party outages, full redesigns, new pages, custom dev
                  beyond Webflow capabilities
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-ivoryWhite font-bold uppercase tracking-[0.2em] mb-2 opacity-70">
                Terms:
              </h4>
              <p className="text-silverMist text-[11px] leading-relaxed">
                Billed monthly via Stripe, 30-day cancellation notice, service
                agreement required
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ServicesSection;
