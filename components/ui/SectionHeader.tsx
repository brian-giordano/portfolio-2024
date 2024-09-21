// components/ui/SectionHeader.tsx
import React from "react";

interface SectionHeaderProps {
  name: string;
  bandColor: string;
  subheader?: string;
}

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
  const topBorder = colorMapping[bandColor] || "border-darkSlate";
  return (
    <div className={`w-full border-t-4 ${topBorder} p-4 pb-2`}>
      <h2 className="text-lg font-primary text-ivoryWhite uppercase font-semibold">
        {name}
      </h2>
      {subheader && (
        <h3 className="text-base font-secondary text-silverMist">
          {subheader}
        </h3>
      )}
    </div>
  );
};

export default SectionHeader;
