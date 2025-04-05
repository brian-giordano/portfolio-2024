import React, { useState, useCallback, useMemo } from "react";
import {
  FaBriefcase,
  FaAddressCard,
  FaEnvelope,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { PiLightningFill, PiGraduationCapFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import SectionHeader from "@/components/ui/SectionHeader";

interface HeaderProps {
  name: string;
  currentSection: string;
  onNavClick?: (sectionId: string) => void;
  showStickyHeader?: boolean;
}

interface MenuItem {
  label: string;
  sectionId: string;
  bandColor: string;
}

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.1,
    },
  },
};

const Header: React.FC<HeaderProps> = ({
  name,
  currentSection,
  onNavClick,
  showStickyHeader = false,
}) => {
  const isScrolled = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuItems: MenuItem[] = useMemo(
    () => [
      {
        label: "Experience",
        sectionId: "experience",
        bandColor: "gold",
      },
      {
        label: "Education",
        sectionId: "education",
        bandColor: "gold",
      },
      {
        label: "Skills",
        sectionId: "skills",
        bandColor: "gold",
      },
      {
        label: "Projects",
        sectionId: "projects",
        bandColor: "gold",
      },
      {
        label: "About",
        sectionId: "about",
        bandColor: "gold",
      },
      {
        label: "Contact",
        sectionId: "contact",
        bandColor: "gold",
      },
    ],
    []
  );

  const scrollToSection = useCallback(
    (sectionId: string) => {
      // Immediately update the current section in the parent component
      if (onNavClick) {
        onNavClick(sectionId);
      }

      const section = document.getElementById(sectionId);
      if (section) {
        // Get the current scroll position to determine header state
        // const isCurrentlyScrolled = window.scrollY > 50;

        // Calculate the header height in the target state (after scrolling)
        // When clicking from unscrolled state, the header will be in compact mode after scrolling
        const targetHeaderHeight = 64; // Always use compact header height (4rem) for target position

        // Calculate position - use the exact section offset minus the target header height
        const offsetPosition = section.offsetTop - targetHeaderHeight;

        // Immediately scroll to the calculated position
        window.scrollTo({
          top: offsetPosition,
          behavior: "auto", // Immediate positioning
        });

        // Close mobile menu if open
        setIsMenuOpen(false);
      }
    },
    [onNavClick]
  );

  const renderNavItems = (isMobile = false) => (
    <>
      {MenuItems.map((item) => (
        <li key={item.sectionId} className={isMobile ? "w-full" : "group"}>
          <a
            href={`#${item.sectionId}`}
            onClick={(e) => {
              e.preventDefault();
              // Force the current section to be updated immediately
              if (onNavClick) {
                onNavClick(item.sectionId);
              }
              scrollToSection(item.sectionId);
            }}
            className={`
              ${
                currentSection === item.sectionId
                  ? "text-gold font-bold"
                  : "text-ivoryWhite font-medium"
              }
              ${
                isMobile
                  ? "w-full text-left py-3 px-8 hover:bg-mediumCharcoal"
                  : "px-4 py-2 w-32"
              }
              hover:text-gold transition-all duration-200 ease-in-out flex items-center
              ${isMobile ? "" : "justify-center"}
              cursor-pointer
            `}
          >
            <span className={`text-xl ${isMobile ? "mr-4" : "mr-2"} text-gold`}>
              {React.cloneElement(
                {
                  Experience: <PiGraduationCapFill />,
                  Education: <PiGraduationCapFill />,
                  Skills: <PiLightningFill />,
                  Projects: <FaBriefcase />,
                  About: <FaAddressCard />,
                  Contact: <FaEnvelope />,
                }[item.label] || <></>,
                { className: "text-gold" }
              )}
            </span>
            <span className={isMobile ? "" : "whitespace-nowrap"}>
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </>
  );

  const currentSectionData = MenuItems.find(
    (item) => item.sectionId === currentSection
  );

  return (
    // <header className="w-full fixed top-0 z-50 bg-darkSlate">
    <motion.header
      className="w-full fixed top-0 bg-darkSlate z-40"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div
        className={`container mx-auto ${
          isScrolled
            ? "flex items-center justify-between py-4 px-4"
            : "flex flex-col items-center py-8 px-4"
        }`}
      >
        {!isScrolled && (
          <>
            <nav className="mb-2 w-full opacity-90 transition-all duration-300 z-50 hidden lg:block">
              <ul className="flex justify-center space-x-4 py-2 list-none">
                {renderNavItems()}
              </ul>
            </nav>
            <h1
              className={`font-primary font-extrabold tracking-wide transition-all duration-300 uppercase text-3xl text-ivoryWhite z-20 cursor-pointer lg:text-6xl`}
            >
              {name}
            </h1>
          </>
        )}

        {isScrolled && (
          <div className="flex items-center justify-between w-full">
            <h1
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`font-primary font-extrabold tracking-wide transition-all duration-300 uppercase text-2xl text-ivoryWhite cursor-pointer`}
            >
              {name}
            </h1>
            <nav className="opacity-90 transition-all duration-300 z-50 hidden lg:flex">
              <ul className="flex space-x-6 py-2 list-none">
                {renderNavItems()}
              </ul>
            </nav>
          </div>
        )}

        {isScrolled && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl pt-0 px-4 focus:outline-none flex items-center justify-center transition-all duration-300 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="text-ivoryWhite">
              {isMenuOpen ? <FaXmark /> : <FaBars />}
            </span>
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-darkSlate bg-opacity-95 z-50 lg:hidden">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-xl text-ivoryWhite"
              aria-label="Close menu"
            >
              <FaXmark />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-start h-[calc(100%-4rem)] pt-8">
            <ul className="flex flex-col items-start w-full">
              {renderNavItems(true)}
            </ul>
          </nav>
        </div>
      )}

      {/* Sticky header - use absolute positioning when hidden to remove from document flow */}
      {showStickyHeader && currentSectionData && currentSection !== "home" ? (
        <div className="sticky top-[4rem] z-40 bg-darkSlate transition-all duration-200">
          <div className="container mx-auto">
            <SectionHeader
              name={currentSectionData.label}
              bandColor={currentSectionData.bandColor}
            />
          </div>
        </div>
      ) : null}
    </motion.header>
  );
};

export default Header;
