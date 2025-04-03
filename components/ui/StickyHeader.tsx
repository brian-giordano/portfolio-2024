import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

interface Section {
  id: string;
  name: string;
  bandColor: string;
}

const sections: Section[] = [
  { id: "experience", name: "Experience", bandColor: "gold" },
  { id: "education", name: "Education", bandColor: "gold" },
  { id: "skills", name: "Skills", bandColor: "gold" },
  { id: "projects", name: "Projects", bandColor: "gold" },
  { id: "about", name: "About", bandColor: "gold" },
  { id: "contact", name: "Contact", bandColor: "gold" },
];

interface StickyHeaderProps {
  currentSection: string; // Accept currentSection as a prop
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ currentSection }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderVisible(scrollPosition < 100); // Adjust this value based on your main header height
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isHeaderVisible) {
    return null; // Hide the sticky header when the main header is visible
  }

  const currentSectionData =
    sections.find((section) => section.id === currentSection) || sections[0];

  return (
    <div className="sticky">
      <SectionHeader
        name={currentSectionData.name}
        bandColor={currentSectionData.bandColor}
      />
    </div>
  );
};

export default StickyHeader;
