import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
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

interface HeaderProps {
  name: string;
  currentSection: string;
  onNavClick?: (sectionId: string) => void;
}

interface MenuItem {
  label: string;
  sectionId: string;
  bandColor: string;
  icon: React.ReactNode;
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
}) => {
  const isScrolled = useScrollPosition();
  const [isMinimallyScrolled, setIsMinimallyScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(64);

  // Effect to measure header height
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);

      // Update CSS variable for header height
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerRef.current.offsetHeight}px`
      );
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isScrolled]);

  // Add this effect to detect even minimal scrolling
  useEffect(() => {
    const handleMinimalScroll = () => {
      setIsMinimallyScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleMinimalScroll);
    handleMinimalScroll();

    return () => window.removeEventListener("scroll", handleMinimalScroll);
  }, []);

  const MenuItems: MenuItem[] = useMemo(
    () => [
      {
        label: "Experience",
        sectionId: "experience",
        bandColor: "gold",
        icon: <PiGraduationCapFill className="text-gold" />,
      },
      {
        label: "Education",
        sectionId: "education",
        bandColor: "gold",
        icon: <PiGraduationCapFill className="text-gold" />,
      },
      {
        label: "Skills",
        sectionId: "skills",
        bandColor: "gold",
        icon: <PiLightningFill className="text-gold" />,
      },
      {
        label: "Projects",
        sectionId: "projects",
        bandColor: "gold",
        icon: <FaBriefcase className="text-gold" />,
      },
      {
        label: "About",
        sectionId: "about",
        bandColor: "gold",
        icon: <FaAddressCard className="text-gold" />,
      },
      {
        label: "Contact",
        sectionId: "contact",
        bandColor: "gold",
        icon: <FaEnvelope className="text-gold" />,
      },
    ],
    []
  );

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (onNavClick) {
        onNavClick(sectionId);
      }
      setIsMenuOpen(false);
    },
    [onNavClick]
  );

  const renderNavItems = (isMobile = false) => (
    <>
      {MenuItems.map((item) => (
        <li
          key={item.sectionId}
          className={`
            ${isMobile ? "w-full my-1" : "group"} 
            list-none
            ${
              isMobile
                ? "rounded-lg overflow-hidden transition-all duration-200"
                : ""
            }
          `}
        >
          <a
            href={`#${item.sectionId}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.sectionId);
            }}
            className={`
              ${
                currentSection === item.sectionId
                  ? "bg-opacity-15 bg-eggplant font-bold"
                  : "font-medium hover:bg-opacity-10 hover:bg-gray-400"
              }
              ${
                isMobile
                  ? "w-full text-left py-4 px-6 flex items-center rounded-lg"
                  : "px-4 py-2 w-32 flex items-center justify-center"
              }
              text-ivoryWhite hover:text-gold transition-all duration-200 ease-in-out
              cursor-pointer min-h-[44px] md:min-h-0
            `}
          >
            <span className={`text-xl ${isMobile ? "mr-4" : "mr-2"} text-gold`}>
              {item.icon}
            </span>
            <span className={isMobile ? "text-base" : "whitespace-nowrap"}>
              {item.label}
            </span>
            {isMobile && currentSection === item.sectionId && (
              <span className="ml-auto">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </span>
            )}
          </a>
        </li>
      ))}
    </>
  );

  const isHomeSection = currentSection === "" || currentSection === "home";
  const showHeaderBackground = !isHomeSection || isMinimallyScrolled;

  return (
    <>
      {/* Main header */}
      <motion.header
        ref={headerRef}
        className={`w-full fixed top-0 left-0 right-0 z-50 ${
          showHeaderBackground ? "bg-darkSlate" : ""
        }`}
        style={{
          background: !showHeaderBackground
            ? "linear-gradient(to bottom, rgba(20, 20, 30, 0.8) 0%, rgba(20, 20, 30, 0.4) 50%, transparent 100%)"
            : "",
          backdropFilter: !showHeaderBackground ? "blur(5px)" : "",
        }}
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
              <nav
                className={`mb-2 w-full opacity-90 transition-all duration-300 z-50 hidden lg:block ${
                  !showHeaderBackground ? "nav-backdrop" : ""
                }`}
              >
                <ul className="flex justify-center space-x-4 py-2 list-none">
                  {renderNavItems()}
                </ul>
              </nav>
              <h1
                className={`font-primary font-extrabold tracking-wide transition-all duration-300 uppercase text-3xl text-ivoryWhite z-20 cursor-pointer lg:text-6xl ${
                  !showHeaderBackground ? "text-shadow-lg" : ""
                }`}
              >
                {name}
              </h1>
            </>
          )}

          {isScrolled && (
            <>
              <div className="flex items-center justify-between w-full">
                <h1
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
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
            </>
          )}
        </div>
      </motion.header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 mobile-menu-container z-50 lg:hidden">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-xl text-ivoryWhite bg-opacity-20 bg-gray-700 p-2 rounded-full"
              aria-label="Close menu"
            >
              <FaXmark />
            </button>
          </div>

          <div className="mobile-menu-header">
            <h1 className="text-2xl font-bold text-ivoryWhite">
              BRIAN GIORDANO
            </h1>
            <p className="text-sm text-silverMist mt-2">Digital Alchemist</p>
          </div>

          <nav className="flex flex-col items-center justify-start w-full px-4 mt-6">
            <ul className="flex flex-col items-stretch w-full max-w-xs list-none p-0 m-0 space-y-2">
              {MenuItems.map((item) => (
                <li
                  key={item.sectionId}
                  className={`mobile-menu-item ${
                    currentSection === item.sectionId ? "active" : ""
                  }`}
                >
                  {currentSection === item.sectionId && (
                    <div className="active-indicator"></div>
                  )}
                  <a
                    href={`#${item.sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.sectionId);
                    }}
                  >
                    <span className="icon">{item.icon}</span>
                    <span className="text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Add padding to the top of the page to account for the fixed header */}
      <div style={{ height: headerHeight }} />
    </>
  );
};

export default Header;
