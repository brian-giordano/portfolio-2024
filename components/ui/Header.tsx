import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  FaBriefcase,
  FaAddressCard,
  FaEnvelope,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { PiLightningFill, PiGraduationCapFill } from "react-icons/pi";
import { useScrollPosition } from "@/hooks/useScrollPosition";

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
  const [currentSection, setCurrentSection] = useState<string>("experience");

  // Memoize the MenuItems array so it's stable and doesn't cause unnecessary re-renders
  const MenuItems: MenuItem[] = useMemo(
    () => [
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
    ],
    []
  );

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  // Scroll listener to update the current section based on visibility
  useEffect(() => {
    const handleScroll = () => {
      const sections = MenuItems.map((item) =>
        document.getElementById(item.sectionId)
      );

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setCurrentSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [MenuItems]); // Adding MenuItems as a dependency

  return (
    <header
      className={`w-full fixed transition-all duration-300 z-50 ${
        isScrolled ? "bg-darkSlate py-4" : "bg-darkSlate pb-4 pt-8"
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
              <ul className="flex justify-center space-x-4 py-2 list-none">
                {MenuItems.map((item) => (
                  <li key={item.sectionId} className="group">
                    <button
                      onClick={() => scrollToSection(item.sectionId)}
                      className={`${
                        currentSection === item.sectionId
                          ? "text-gold font-bold"
                          : "text-ivoryWhite"
                      } hover:text-gray-300 group-hover:bg-gold group-hover:rounded-full px-4 py-2 flex items-center group-hover:text-charcoal transform transition-all duration-200 ease-in-out`}
                    >
                      <item.icon
                        className={`text-xl mr-3 ${
                          currentSection === item.sectionId
                            ? "text-gold"
                            : item.color
                        } group-hover:text-charcoal`}
                      />
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
          <div className="flex items-center justify-between w-full px-4">
            <h1
              className={`font-primary font-extrabold tracking-wide transition-all duration-300 uppercase text-2xl text-ivoryWhite`}
            >
              {name}
            </h1>
            <nav className="opacity-90 transition-all duration-300 z-50 hidden lg:flex">
              <ul className="flex space-x-6 py-2 list-none">
                {MenuItems.map((item) => (
                  <li key={item.sectionId} className="group">
                    <button
                      onClick={() => scrollToSection(item.sectionId)}
                      className={`${
                        currentSection === item.sectionId
                          ? "text-gold font-bold"
                          : "text-ivoryWhite"
                      } hover:text-gray-300 group-hover:bg-gold group-hover:rounded-full px-4 py-2 flex items-center group-hover:text-charcoal transform transition-all duration-200 ease-in-out`}
                    >
                      <item.icon
                        className={`text-xl mr-3 ${
                          currentSection === item.sectionId
                            ? "text-gold"
                            : item.color
                        } group-hover:text-charcoal`}
                      />
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
          className={`text-xl pt-0 px-4 focus:outline-none flex items-center justify-center transition-all duration-300 lg:hidden ${
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
          className={`bg-darkSlate shadow-md mt-2 w-full transition-all duration-300 z-50 lg:hidden`}
        >
          <ul className="w-full max-w-7xl list-none p-0">
            {MenuItems.map((item) => (
              <li
                key={item.sectionId}
                className="w-full py-2 px-8 hover:bg-mediumCharcoal"
              >
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`${
                    currentSection === item.sectionId
                      ? "text-gold font-bold"
                      : "text-ivoryWhite"
                  } w-full text-left flex items-center`}
                >
                  <item.icon
                    className={`text-xl mr-4 ${
                      currentSection === item.sectionId
                        ? "text-gold"
                        : item.color
                    }`}
                  />
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
