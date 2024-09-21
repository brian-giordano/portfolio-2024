import React from "react";

interface PillProps {
  text: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design"; // Define categories
}

const Pill: React.FC<PillProps> = ({ text, category }) => {
  const baseStyles =
    "inline-block m-2 px-3 p-1 font-subheader text-sm font-semibold tracking-wide rounded-full";

  // Define color styles based on category
  const colorStyles = {
    Frontend: "bg-mysticTeal text-darkSlate",
    Backend: "bg-lightCrimson text-darkSlate",
    Database: "bg-gold text-darkSlate",
    DevOps: "bg-silverMist text-darkSlate",
    Design: "bg-lavender text-darkSlate", // You can choose a different color if needed
  };

  return (
    <span className={`${baseStyles} ${colorStyles[category]}`}>{text}</span>
  );
};

export default Pill;
