// PotionSvg.tsx with improved responsive sizing
import React from "react";
import Image from "next/legacy/image";
import styles from "./PotionSvg.module.css";
import StardustLayerSvg from "../assets/images/potion-bottle-2-stardust.svg";
import PotionLayerSvg from "./PotionLayerSvg";

const PotionSvg: React.FC = () => {
  return (
    <div className="relative w-4/5 md:w-2/5 lg:w-1/3 p-0 flex items-center justify-center">
      {/* Container with responsive sizing */}
      <div
        className="relative w-full"
        style={{
          minHeight: "30vh",
          maxHeight: "45vh",
          // This ensures the potion scales better on tablets
          height: "clamp(250px, 40vh, 500px)",
        }}
      >
        {/* Potion Layer (Base Layer) */}
        <div className="relative h-full">
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
