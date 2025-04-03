// PotionSvg.tsx - with truly responsive height
import React from "react";
import Image from "next/legacy/image";
import styles from "./PotionSvg.module.css";
import StardustLayerSvg from "../assets/images/potion-bottle-2-stardust.svg";
import PotionLayerSvg from "./PotionLayerSvg";

const PotionSvg: React.FC = () => {
  return (
    <div
      className="relative w-2/5 md:w-1/3 lg:w-1/4 p-0 flex items-center justify-center"
      style={{ height: "calc(50vh - 150px)" }} // Dynamic height based on viewport
    >
      {/* Container with aspect ratio preservation */}
      <div className="relative w-full h-full">
        {/* Potion Layer (Base Layer) */}
        <div className="relative">
          <PotionLayerSvg className={styles.potionLayer} />
        </div>

        {/* Stardust Layer (Overlay Layer) */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={StardustLayerSvg}
            alt="Stardust Layer"
            className={styles.stardustLayer}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PotionSvg;
