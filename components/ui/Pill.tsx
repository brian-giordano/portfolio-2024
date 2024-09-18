import React from "react";

interface PillProps {
  text: string;
  color?: "gold" | "lightCrimson" | "mysticTeal" | "silverMist";
}

const Pill: React.FC<PillProps> = ({ text, color = "silverMist" }) => {
  const baseStyles =
    "inline-block px-3 py-1 text-sm font-semibold rounded-full";
  const colorStyles = {
    gold: "bg-gold text-darkSlate",
    lightCrimson: "bg-lightCrimson text-darkslate",
    mysticTeal: "bg-mysticTeal text-darkslate",
    silverMist: "bg-silverMist text-darkslate",
  };

  return <span className={`${baseStyles} ${colorStyles[color]}`}>{text}</span>;
};

export default Pill;
