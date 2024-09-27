// PotionSvg.tsx
import React from "react";
import Image from "next/image";
// import "./PotionSVG.css"; // Import CSS for animations
import styles from "./PotionSvg.module.css";
import StardustLayerSvg from "../assets/images/potion-bottle-2-stardust.svg"; // Adjust the path as necessary
import StarsLayerSvg from "../assets/images/potion-bottle-2-stars.svg";
import PotionLayerSvg from "./PotionLayerSvg"; // Adjust the path for the Potion Layer

const PotionSvg: React.FC = () => {
  return (
    <div className="w-3/4 p-4 m-10 lg:w-[33%] xl:w-[33%] 2xl:w-[33%]">
      {/* Stardust Layer */}
      <Image
        src={StardustLayerSvg}
        alt="Stardust Layer"
        className={styles.stardustLayer} // Apply the growth and twinkle animation class
        priority={true}
        //layout="intrinsic" // Use intrinsic layout for images
        // width={500} // Set a larger width (adjust as needed)
        // height={500} // Set a larger height (adjust as needed)
      />
      {/* Potion Layer */}
      <div className="">
        <PotionLayerSvg className={styles.potionLayer} />
      </div>
      {/* <Image
        src={StarsLayerSvg}
        alt="Star Layer"
        className={styles.starsLayer} // Apply the growth and twinkle animation class
        //layout="intrinsic" // Use intrinsic layout for images
        // width={300} // Set a larger width (adjust as needed)
        // height={300} // Set a larger height (adjust as needed)
      /> */}
    </div>
  );
};

export default PotionSvg;
