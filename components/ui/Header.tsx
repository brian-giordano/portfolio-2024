import React, { useState, useCallback, useEffect } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import {
  FaBuilding,
  FaBrain,
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
      label: "My Work",
      sectionId: "my-work",
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
      className={`fixed w-full transition-all duration-300 p-0 m-0 z-50 ${
        isScrolled ? "bg-[#000000] shadow-md py-2" : "bg-darkSlate pb-4 pt-8"
      }`}
      style={{ height: isScrolled ? "48px" : "" }} // Shrink height on scroll
    >
      <div
        className={`w-[96%] max-w-7xl ml-4 relative flex items-center justify-between h-full transition-colors duration-300 ${
          isScrolled ? "bg-[#000000]" : "bg-darkSlate"
        }`}
      >
        <h1
          className={`font-primary font-extrabold tracking-wide transition-all duration-300 uppercase ${
            isScrolled
              ? "text-2xl text-ivoryWhite ml-2"
              : "text-3xl text-ivoryWhite flex w-full justify-center"
          }`}
          style={{ marginLeft: "0", marginRight: "0" }} // Align to the left
        >
          {name}
        </h1>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`text-xl pt-0 focus:outline-none flex items-center justify-center transition-all duration-300 ${
            isScrolled ? "opacity-100 mr-1" : "opacity-0"
          }`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          style={{ marginRight: "1rem", lineHeight: "normal", padding: 0 }} // Uniform margin from the right
        >
          <span className="text-ivoryWhite">
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </span>
        </button>
      </div>
      {isScrolled && (
        <nav
          className={`bg-charcoal shadow-md mt-2 w-full transition-all duration-300 ${
            isMenuOpen ? "max-h-96" : "max-h-0 overflow-hidden"
          }`}
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
