import React from "react";

interface SectionHeaderProps {
  name: string;
  bandColor: string;
  subheader?: string;
}

// Define a mapping of colors to the Tailwind classes for easier frontend reference
const colorMapping: { [key: string]: string } = {
  lightCrimson: "border-lightCrimson",
  mysticTeal: "border-mysticTeal",
  gold: "border-gold",
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  name,
  bandColor,
  subheader,
}) => {
  const topBorder = colorMapping[bandColor] || "border-gray-500";
  return (
    <div className={`w-full border-t-4 ${topBorder} p-4 pb-2 mt-12`}>
      {/* <div className={`w-full border-t-4 border-lightCrimson`}> */}
      <h2 className="text-l font-primary text-ivoryWhite uppercase font-semibold">
        {name}
      </h2>
      <h3 className="text-base font-secondary text-silverMist">{subheader}</h3>
    </div>
  );
};

export default SectionHeader;
