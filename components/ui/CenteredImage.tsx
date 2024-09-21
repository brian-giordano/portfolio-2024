import React from "react";
import Image, { StaticImageData } from "next/image";

interface CenteredImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string; // additional classes for customization
  hoverScale?: number; // scale for hover effect
}

const CenteredImage: React.FC<CenteredImageProps> = ({
  src,
  alt,
  className = "",
  hoverScale = 0, // Default scale factor
}) => {
  return (
    <div className="w-full">
      <Image
        src={src}
        alt={alt}
        className={`mx-auto w-3/4 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:scale-${
          hoverScale * 100
        } ${className}`}
      />
    </div>
  );
};

export default CenteredImage;
