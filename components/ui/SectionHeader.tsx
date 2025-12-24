import React from "react";
import {
  FaBriefcase,
  FaAddressCard,
  FaEnvelope,
  FaRocket,
} from "react-icons/fa6";
import { PiLightningFill, PiGraduationCapFill } from "react-icons/pi";

interface SectionHeaderProps {
  name: string;
  bandColor: string;
  subheader?: string;
}

// Mapping section names to icons
const iconMapping: { [key: string]: React.ReactNode } = {
  Projects: <FaRocket className="text-3xl text-gold mr-3 mt-1" />,
  Experience: <FaBriefcase className="text-3xl text-gold mr-3 mt-1" />,
  Education: <PiGraduationCapFill className="text-3xl text-gold mr-3 mt-1" />,
  Skills: <PiLightningFill className="text-3xl text-gold mr-3 mt-1" />,
  About: <FaAddressCard className="text-3xl text-gold mr-3 mt-1" />,
  Contact: <FaEnvelope className="text-3xl text-gold mr-3 mt-1" />,
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ name, subheader }) => {
  const Icon = iconMapping[name] || null;

  return (
    <div className="w-full px-4 py-3 border-t-4 border-gold bg-darkSlate sticky top-[var(--header-height)] z-20 -mx-4 md:-mx-0">
      <div className="flex items-center">
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
