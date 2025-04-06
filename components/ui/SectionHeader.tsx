import React from "react";
import { FaBriefcase, FaAddressCard, FaEnvelope } from "react-icons/fa6";
import { PiLightningFill, PiGraduationCapFill } from "react-icons/pi";

interface SectionHeaderProps {
  name: string;
  bandColor: string;
  subheader?: string;
}

// Mapping section names to icons
const iconMapping: { [key: string]: React.ReactNode } = {
  Experience: <PiGraduationCapFill className="text-3xl text-gold mr-3 mt-1" />,
  Education: <PiGraduationCapFill className="text-3xl text-gold mr-3 mt-1" />,
  Skills: <PiLightningFill className="text-3xl text-gold mr-3 mt-1" />,
  Projects: <FaBriefcase className="text-3xl text-gold mr-3 mt-1" />,
  About: <FaAddressCard className="text-3xl text-gold mr-3 mt-1" />,
  Contact: <FaEnvelope className="text-3xl text-gold mr-3 mt-1" />,
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ name, subheader }) => {
  // Get the icon for the current section name
  const Icon = iconMapping[name] || null;

  return (
    <div className="w-full px-4 pb-2 border-t-4 border-gold">
      <div className="flex items-center">
        {/* Render the icon if it exists */}
        {Icon}
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
