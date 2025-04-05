// ScrollIndicator.tsx with enhanced animations
import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import styles from "./ScrollIndicator.module.css"; // Create this file

interface ScrollIndicatorProps {
  targetSectionId: string;
  onNavClick: (sectionId: string) => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  targetSectionId,
  onNavClick,
}) => {
  return (
    <motion.div
      className={styles.scrollIndicator}
      onClick={() => onNavClick(targetSectionId)}
      whileHover={{ y: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className={styles.exploreText}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Explore
      </motion.span>
      <motion.div
        className={styles.chevronContainer}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaChevronDown className={styles.chevron} />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
