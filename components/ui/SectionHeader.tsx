import React from "react";

interface SectionHeaderProps {
  name: string;
  bandColor: string;
  subheader?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ name, subheader }) => {
  return (
    <div className="w-full px-4 py-3 border-t-4 border-gold bg-darkSlate sticky top-[var(--header-height)] z-20 -mx-4 md:-mx-0">
      <div className="flex items-center">
        <h2 className="text-lg font-primary text-ivoryWhite uppercase font-semibold">
          {name}
        </h2>
      </div>
      {subheader && (
        <h3 className="text-base font-secondary text-silverMist">
          {subheader}
        </h3>
      )}
    </div>
  );
};

export default SectionHeader;
