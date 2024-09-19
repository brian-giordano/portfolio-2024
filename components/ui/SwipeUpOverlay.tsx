import React, { useState, useEffect } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

interface SwipeUpOverlayProps {
  textLeft: string;
  textRight: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SwipeUpOverlay: React.FC<SwipeUpOverlayProps> = ({
  textLeft,
  textRight,
  icon: Icon,
}) => {
  //   const [isVisible, setIsVisible] = useState(true);
  const isScrolled = useScrollPosition();

  //   useEffect(() => {
  //     if (scrollPosition > 0) {
  //       setIsVisible(false); // Hide overlay if scrolled
  //     } else {
  //       setIsVisible(true); // Show the overlay if at top
  //     }
  //   }, [scrollPosition]); // Run whenever scrollPosition changes

  return (
    <div
      className={`columns-3 w-full flex justify-center items-center z-40 fixed my-10 transition-opacity duration-300 ease-in-out ${
        isScrolled ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-accent text-2xl text-ivoryWhite font-semibold uppercase">
        {textLeft}
      </span>
      <Icon className="text-8xl text-mysticTeal mx-4" />
      <span className="font-accent text-2xl text-ivoryWhite font-semibold uppercase">
        {textRight}
      </span>
    </div>
  );
};

export default SwipeUpOverlay;
