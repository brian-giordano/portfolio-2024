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
  showStickyHeader?: boolean;
  isProgrammaticNavigation?: boolean;
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
  showStickyHeader = false, // Provide default value here
  isProgrammaticNavigation = false,
}) => {
  // Use the hook for general scroll state
  const isScrolled = useScrollPosition();
  const [isMinimallyScrolled, setIsMinimallyScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(64);

  // this effect handles the section header visibility during programmatic navigation
  useEffect(() => {
    if (isProgrammaticNavigation) {
      // Hide all section headers when in programmatic navigation
      const sectionHeaders = document.querySelectorAll(
        ".section-header-container"
      );
      sectionHeaders.forEach((header) => {
        (header as HTMLElement).style.display = "none";
      });

      // Clean up function to restore visibility when navigation ends
      return () => {
        if (!isProgrammaticNavigation) {
          sectionHeaders.forEach((header) => {
            (header as HTMLElement).style.display = "";
          });
        }
      };
    }
  }, [isProgrammaticNavigation]);

  // Effect to measure header height
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
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

      const section = document.getElementById(sectionId);
      if (section) {
        // Get the main header height
        const header = document.querySelector("header") as HTMLElement;
        const headerHeight = header ? header.offsetHeight : 64;

        // Calculate position - this is critical to get right
        // We want to position the section content exactly where it should be
        // with the sticky header already visible
        const offsetPosition = section.offsetTop - headerHeight;

        // Scroll immediately
        window.scrollTo({
          top: offsetPosition,
          behavior: "auto",
        });

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
              {item.icon}
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

  const isHomeSection = currentSection === "" || currentSection === "home";
  const showHeaderBackground = !isHomeSection || isMinimallyScrolled;

  // Use the prop instead of calculating it internally
  const showSectionHeader =
    showStickyHeader && currentSectionData && !isHomeSection;

  return (
    <>
      {/* Main header */}
      <motion.header
        ref={headerRef}
        className={`w-full fixed top-0 left-0 right-0 z-40 ${
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

        {/* Section header - directly in the main header */}
        {showSectionHeader && currentSectionData && (
          <div className="w-full bg-darkSlate border-t-4 border-gold">
            <div className="container mx-auto">
              <div className="flex items-center px-4 py-2">
                <span className="text-3xl text-gold mr-3">
                  {currentSectionData.icon}
                </span>
                <h2 className="text-lg font-primary text-ivoryWhite uppercase font-semibold">
                  {currentSectionData.label}
                </h2>
              </div>
            </div>
          </div>
        )}
      </motion.header>

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

      {/* Add padding to the top of the page to account for the fixed header */}
      <div style={{ height: headerHeight + (showSectionHeader ? 48 : 0) }} />
    </>
  );
};

export default Header;
