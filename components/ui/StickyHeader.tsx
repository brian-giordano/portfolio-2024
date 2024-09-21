// components/ui/StickyHeader.tsx
import React, { useEffect, useState, useRef } from "react";
import SectionHeader from "./SectionHeader";

interface Section {
  id: string;
  name: string;
  bandColor: string;
  subheader?: string;
}

const sections: Section[] = [
  { id: "home", name: "Home", bandColor: "lightCrimson" },
  {
    id: "experience",
    name: "Experience",
    bandColor: "mysticTeal",
  },
  {
    id: "education",
    name: "Education",
    bandColor: "mysticTeal",
  },
  {
    id: "skills",
    name: "Skills",
    bandColor: "mysticTeal",
  },
  {
    id: "projects",
    name: "Projects",
    bandColor: "lightCrimson",
  },
  {
    id: "about",
    name: "About",
    bandColor: "mysticTeal",
  },
  {
    id: "contact",
    name: "Contact",
    bandColor: "gold",
    subheader: "Get in Touch",
  },
  // Add or remove sections as needed
];

const StickyHeader: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(sections[0]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setCurrentSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-40 bg-darkSlate mt-12">
      <SectionHeader
        name={currentSection.name}
        bandColor={currentSection.bandColor}
        subheader={currentSection.subheader}
      />
    </div>
  );
};

export default StickyHeader;
