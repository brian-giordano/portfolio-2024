import React from "react";

interface CenteredImageProps {
  src: { src: string; height: number; width: number };
  alt: string;
  className?: string; // additional classes for customization
  hoverScale?: number; // scale for hover effect
}

const CenteredImage: React.FC<CenteredImageProps> = ({
  src,
  alt,
  className = "",
  hoverScale = 1.1, // Default scale factor
}) => {
  return (
    <div className="w-full bg-gray-100">
      <img
        src={src.src}
        alt={alt}
        className={`mx-auto transition-transform duration-500 ease-in-out transform hover:scale-110 hover:scale-${
          hoverScale * 100
        } ${className}`}
      />
    </div>
  );
};

export default CenteredImage;
