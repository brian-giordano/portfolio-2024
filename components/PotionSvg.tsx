import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import styles from "./PotionSvg.module.css";
import StardustLayerSvg from "../assets/images/potion-bottle-2-stardust.svg";
import PotionLayerSvg from "./PotionLayerSvg";

const PotionSvg: React.FC = () => {
  return (
    <motion.div
      className="relative w-full p-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className={`absolute inset-0 rounded-full blur-xl opacity-30 z-0 ${styles.backgroundGlow}`}
      />

      <motion.div
        className="relative w-full h-[200px] md:h-[300px] lg:h-[280px] flex items-center justify-center"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-full flex items-center justify-center">
          <PotionLayerSvg className={styles.potionLayer} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={StardustLayerSvg}
            alt="Stardust Layer"
            className={styles.stardustLayer}
            priority={true}
          />
        </div>

        <div className={styles.particles}></div>
      </motion.div>
    </motion.div>
  );
};

export default PotionSvg;
