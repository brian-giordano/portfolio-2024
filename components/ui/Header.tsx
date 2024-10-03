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
  icon: React.ReactElement;
  color: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const isScrolled = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("");

  const MenuItems: MenuItem[] = useMemo(
    () => [
      {
        label: "Experience",
        sectionId: "experience",
        icon: <PiGraduationCapFill />,
        color: "text-gold",
      },
      {
        label: "Skills",
        sectionId: "skills",
        icon: <PiLightningFill />,
        color: "text-gold",
      },
      {
        label: "Projects",
        sectionId: "projects",
        icon: <FaBriefcase />,
        color: "text-gold",
      },
      {
        label: "About",
        sectionId: "about",
        icon: <FaAddressCard />,
        color: "text-gold",
      },
      {
        label: "Contact",
        sectionId: "contact",
        icon: <FaEnvelope />,
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

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentSection("");
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -90% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting);

      if (visibleSections.length === 0) {
        setCurrentSection("");
      } else {
        const topSection = visibleSections.reduce((prev, current) => {
          return prev.boundingClientRect.top > current.boundingClientRect.top
            ? current
            : prev;
        });
        setCurrentSection(topSection.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    MenuItems.forEach((item) => {
      const section = document.getElementById(item.sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      MenuItems.forEach((item) => {
        const section = document.getElementById(item.sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [MenuItems]);

  const renderNavItems = (isMobile = false) => (
    <>
      {MenuItems.map((item) => (
        <li key={item.sectionId} className={isMobile ? "w-full" : "group"}>
          <button
            onClick={() => scrollToSection(item.sectionId)}
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
            `}
          >
            <span
              className={`text-xl ${isMobile ? "mr-4" : "mr-2"} ${
                currentSection === item.sectionId ? "text-gold" : item.color
              }`}
            >
              {React.cloneElement(item.icon, {
                className: `${
                  currentSection === item.sectionId ? "text-gold" : item.color
                }`,
              })}
            </span>
            <span className={isMobile ? "" : "whitespace-nowrap"}>
              {item.label}
            </span>
          </button>
        </li>
      ))}
    </>
  );

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
                {renderNavItems()}
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
              onClick={scrollToTop}
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
      <nav
        className={`bg-darkSlate shadow-md w-full transition-all duration-300 ease-in-out z-50 lg:hidden overflow-hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="w-full max-w-7xl list-none p-0">
          {renderNavItems(true)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
