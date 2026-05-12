import React from "react";

interface SectionHeaderProps {
  name: string;
  bandColor: string;
  subheader?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ name, subheader }) => {
  return (
    <div className="w-full px-6 py-2 transition-all duration-300 flex flex-col justify-center min-h-[48px]">
      <div className="flex items-center">
        <h2 className="text-lg font-primary text-ivoryWhite uppercase font-semibold m-0 leading-tight">
          {name}
        </h2>
      </div>
      {subheader && (
        <h3 className="text-base font-secondary text-silverMist m-0 leading-tight">
          {subheader}
        </h3>
      )}
    </div>
  );
};

export default SectionHeader;
