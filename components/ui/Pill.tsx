// components/ui/Pill.tsx
import React from "react";

interface PillProps {
  text: string;
  category?: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
}

const Pill: React.FC<PillProps> = ({ text, category = "Frontend" }) => {
  // Define color styles with high contrast but modern look
  const getColorClass = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-mysticTeal text-darkSlate"; // Full opacity for contrast
      case "Backend":
        return "bg-lightCrimson text-darkSlate";
      case "Database":
        return "bg-gold text-darkSlate";
      case "DevOps":
        return "bg-silverMist text-darkSlate";
      case "Design":
        return "bg-lavender text-darkSlate";
      default:
        return "bg-mediumCharcoal text-ivoryWhite";
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-md shadow-sm ${getColorClass(
        category
      )} md:text-sm md:px-4 md:py-1.5 md:rounded-full transition-all duration-200 hover:scale-105`}
    >
      {text}
    </span>
  );
};

export default Pill;
