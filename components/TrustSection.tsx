import React from "react";
import { motion } from "framer-motion";

const TrustSection: React.FC = () => {
  const partners = [
    "Nexurion",
    "ZAG Interactive",
    "HII",
    "GetNeat",
    "OrderUp",
  ];

  return (
    <section className="py-12 bg-[#0f172a] border-y border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-silverMist/60 text-xs font-mono uppercase tracking-[0.2em] mb-8">
          Trusted by businesses, agencies, and startups
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-bold font-primary text-ivoryWhite"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
