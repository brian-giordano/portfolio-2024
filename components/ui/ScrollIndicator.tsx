"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiCaretDoubleDownBold } from "react-icons/pi";

interface ScrollIndicatorProps {
  delay?: number;
  color?: string;
  targetSectionId?: string;
  onNavClick?: (sectionId: string) => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  delay = 2,
  color = "text-gold",
  targetSectionId = "experience",
  onNavClick,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Check if user has scrolled to or past the target section
  useEffect(() => {
    const checkScroll = () => {
      const section = document.getElementById(targetSectionId);
      if (section) {
        const header = document.querySelector("header") as HTMLElement;
        const headerHeight = header ? header.offsetHeight : 0;

        if (window.scrollY >= section.offsetTop - headerHeight - 10) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    // Initial check
    checkScroll();

    // Add scroll listener
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [targetSectionId]);

  const handleClick = () => {
    // Update the current section in the parent component
    if (onNavClick) {
      onNavClick(targetSectionId);
    }

    // This is the key part - use the same scrolling logic as in your Header component
    const section = document.getElementById(targetSectionId);
    if (section) {
      // Always use compact header height for target position
      const targetHeaderHeight = 64;

      // Calculate position - use the exact section offset minus the target header height
      const offsetPosition = section.offsetTop - targetHeaderHeight;

      // Immediately scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: "auto", // Immediate positioning
      });
    }

    // Hide the indicator
    setIsVisible(false);
  };

  // Remove the fixed positioning from the ScrollIndicator component
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="cursor-pointer flex flex-col items-center py-4" // Simplified padding
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
          transition={{ delay: delay, duration: 0.8 }}
          onClick={handleClick}
          whileHover={{
            scale: 1.1,
            opacity: 1,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.1 },
          }}
          role="button"
          aria-label="Scroll to experience section"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleClick();
            }
          }}
        >
          {/* Text label ABOVE the icon for better visibility */}
          <motion.span
            className="text-gold text-xs md:text-sm mb-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
          >
            Explore
          </motion.span>

          {/* Animated icon with glow effect */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="relative"
          >
            {/* Subtle glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gold rounded-full blur-md opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
            />
            <PiCaretDoubleDownBold
              className={`${color} text-2xl md:text-3xl lg:text-4xl relative z-10`}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;
