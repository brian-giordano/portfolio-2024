import React from "react";
import Image from "next/image";
import styles from "./PotionSvg.module.css"; // Import CSS for animations
import StardustLayerSvg from "../assets/images/potion-bottle-2-stardust.svg"; // Adjust the path as necessary
import PotionLayerSvg from "./PotionLayerSvg"; // Adjust the path for the Potion Layer

const PotionSvg: React.FC = () => {
  return (
    <div className="relative w-3/4 p-4 m-10 lg:w-[33%] xl:w-[33%] 2xl:w-[33%]">
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
  );
};

export default PotionSvg;
