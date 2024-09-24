import React, { useState, useCallback, useEffect } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import {
  FaBriefcase,
  FaAddressCard,
  FaEnvelope,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { PiLightningFill, PiGraduationCapFill } from "react-icons/pi";

interface HeaderProps {
  name: string;
}

interface MenuItem {
  label: string;
  sectionId: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const isScrolled = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuItems: MenuItem[] = [
    {
      label: "Experience",
      sectionId: "experience",
      icon: PiGraduationCapFill,
      color: "text-gold",
    },
    {
      label: "Skills",
      sectionId: "skills",
      icon: PiLightningFill,
      color: "text-gold",
    },
    {
      label: "Projects",
      sectionId: "projects",
      icon: FaBriefcase,
      color: "text-gold",
    },
    {
      label: "About",
      sectionId: "about",
      icon: FaAddressCard,
      color: "text-gold",
    },
    {
      label: "Contact",
      sectionId: "contact",
      icon: FaEnvelope,
      color: "text-gold",
    },
  ];

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as Element).closest("nav")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <header
      className={`w-full fixed transition-all duration-300 z-50 ${
        isScrolled ? "bg-[#000000] shadow-md py-2" : "bg-darkSlate pb-4 pt-8"
      }`}
    >
      <div
        className={`container mx-auto ${
          isScrolled
            ? "flex items-center justify-between"
            : "flex flex-col items-center"
        }`}
      >
        {/* Non-Scrolled View */}
        {!isScrolled && (
          <>
            <nav className="mb-2 w-full opacity-90 transition-all duration-300 z-50 hidden lg:block">
              <ul className="flex justify-center space-x-4 py-2">
                {MenuItems.map((item) => (
                  <li key={item.sectionId}>
                    <button
                      onClick={() => scrollToSection(item.sectionId)}
                      className="text-ivoryWhite hover:text-gray-300 flex items-center"
                    >
                      <item.icon className={`text-xl mr-2 ${item.color}`} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <h1
              className={`font-primary font-extrabold tracking-wide transition-all duration-300 uppercase text-3xl text-ivoryWhite lg:text-6xl`}
            >
              {name}
            </h1>
          </>
        )}

        {/* Scrolled View */}
        {isScrolled && (
          <div className="flex items-center justify-between w-full">
            <h1
              className={`font-primary font-extrabold tracking-wide transition-all duration-300 uppercase text-2xl text-ivoryWhite`}
            >
              {name}
            </h1>
            <nav className="opacity-90 transition-all duration-300 z-50 hidden lg:flex">
              <ul className="flex space-x-6 py-2">
                {MenuItems.map((item) => (
                  <li key={item.sectionId}>
                    <button
                      onClick={() => scrollToSection(item.sectionId)}
                      className="text-ivoryWhite hover:text-gray-300 flex items-center"
                    >
                      <item.icon className={`text-xl mr-2 ${item.color}`} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`text-xl pt-0 focus:outline-none flex items-center justify-center transition-all duration-300 lg:hidden ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="text-ivoryWhite">
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className={`bg-charcoal shadow-md mt-2 w-full opacity-90 transition-all duration-300 z-50 lg:hidden`}
        >
          <ul className="w-10/12 max-w-7xl mx-auto py-2">
            {MenuItems.map((item) => (
              <li key={item.sectionId} className="py-2">
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-ivoryWhite hover:text-gray-300 w-full text-left flex items-center"
                >
                  <item.icon className={`text-xl mr-4 ${item.color}`} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
