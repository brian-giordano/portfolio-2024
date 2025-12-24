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
  FaRocket,
} from "react-icons/fa6";
import { PiLightningFill, PiGraduationCapFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

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

const Header: React.FC<HeaderProps> = ({
  name,
  currentSection,
  onNavClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [initialHeaderHeight, setInitialHeaderHeight] = useState(200);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Measure header height ONCE on mount (expanded state only)
  useEffect(() => {
    const measureInitialHeight = () => {
      if (headerRef.current && window.scrollY < 10) {
        const height = headerRef.current.offsetHeight;
        setInitialHeaderHeight(height);
        document.documentElement.style.setProperty("--header-height", "70px");
      }
    };

    measureInitialHeight();
    document.fonts?.ready?.then(measureInitialHeight);

    const timeout = setTimeout(measureInitialHeight, 100);

    window.addEventListener("resize", measureInitialHeight);
    return () => {
      window.removeEventListener("resize", measureInitialHeight);
      clearTimeout(timeout);
    };
  }, []);

  // Smooth scroll progress (0 to 1)
  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 150, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MenuItems: MenuItem[] = useMemo(
    () => [
      {
        label: "Projects",
        sectionId: "projects",
        bandColor: "gold",
        icon: <FaRocket className="text-gold" />,
      },
      {
        label: "Experience",
        sectionId: "experience",
        bandColor: "gold",
        icon: <FaBriefcase className="text-gold" />,
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

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Interpolated values based on scroll
  const nameSize = `${Math.max(1.75, 3.75 - scrollProgress * 2)}rem`;
  const topPadding = `${Math.max(1, 2.5 - scrollProgress * 1.5)}rem`;
  const bottomPadding = `${Math.max(0.75, 1.5 - scrollProgress * 0.75)}rem`;
  const nameMarginTop = `${Math.max(0, 0.5 - scrollProgress * 0.5)}rem`;
  const nameMarginBottom = `${Math.max(0, 1.5 - scrollProgress * 1.5)}rem`;
  const navOpacity = scrollProgress < 0.5 ? 1 - scrollProgress * 2 : 0;
  const scrolledNavOpacity =
    scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 : 0;

  // Subtle, tight dark shadow used for all nav links (keeps edges crisp)
  const navTextShadow = "0 1px 0 rgba(0,0,0,0.7)";

  return (
    <>
      {/* Main header - ALWAYS solid background */}
      <motion.header
        ref={headerRef}
        className="w-full fixed top-0 left-0 right-0 z-50 bg-darkSlate"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
      >
        <div
          className="container mx-auto px-4 transition-all duration-150 ease-out"
          style={{ paddingTop: topPadding, paddingBottom: bottomPadding }}
        >
          {/* Top nav - fades out on scroll */}
          <motion.nav
            className="w-full z-50 hidden lg:block transition-all duration-150"
            style={{
              opacity: navOpacity,
              pointerEvents: navOpacity > 0.3 ? "auto" : "none",
              height: navOpacity > 0 ? "auto" : 0,
              marginBottom: navOpacity > 0 ? "0.5rem" : 0,
              overflow: "hidden",
            }}
          >
            <ul className="flex justify-center space-x-2 py-2 list-none">
              {MenuItems.map((item) => (
                <li key={item.sectionId} className="group list-none">
                  <a
                    href={`#${item.sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.sectionId);
                    }}
                    className={`
  ${
    currentSection === item.sectionId
      ? "bg-gold/15 text-gold"
      : "font-medium hover:bg-white/10"
  }
  px-4 py-2 flex items-center justify-center
  text-ivoryWhite hover:text-gold transition-all duration-200 ease-in-out
  cursor-pointer rounded-lg
`}
                    style={{ textShadow: navTextShadow }}
                  >
                    <span className="text-xl mr-2 text-gold">{item.icon}</span>
                    <span className="whitespace-nowrap">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Name + scrolled nav row */}
          <div className="flex items-center justify-center relative">
            {/* Name - centered when not scrolled, left when scrolled */}
            <motion.h1
              onClick={scrollToTop}
              className={`font-primary font-extrabold tracking-wide uppercase text-ivoryWhite cursor-pointer transition-all duration-150 ease-out ${
                scrollProgress > 0.5 ? "mr-auto" : ""
              }`}
              style={{
                fontSize: nameSize,
                marginTop: nameMarginTop,
                marginBottom: nameMarginBottom,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {name}
            </motion.h1>

            {/* Scrolled nav - fades in, positioned absolute so it doesn't affect centering */}
            <motion.nav
              className="hidden lg:flex items-center absolute right-0"
              style={{
                opacity: scrolledNavOpacity,
                pointerEvents: scrolledNavOpacity > 0.3 ? "auto" : "none",
              }}
            >
              <ul className="flex space-x-1 py-2 list-none">
                {MenuItems.map((item) => (
                  <li key={item.sectionId} className="list-none">
                    <a
                      href={`#${item.sectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.sectionId);
                      }}
                      className={`
  ${
    currentSection === item.sectionId
      ? "bg-gold/20 text-gold"
      : "font-medium hover:bg-white/10"
  }
  px-3 py-2 flex items-center
  text-ivoryWhite hover:text-gold transition-all duration-200 ease-in-out
  cursor-pointer rounded-lg text-sm
`}
                      style={{ textShadow: navTextShadow }}
                    >
                      <span className="text-lg mr-1.5 text-gold">
                        {item.icon}
                      </span>
                      <span className="whitespace-nowrap">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-xl px-4 focus:outline-none flex items-center justify-center lg:hidden absolute right-0"
              style={{
                opacity: scrolledNavOpacity > 0.5 ? 1 : 0,
                pointerEvents: scrolledNavOpacity > 0.5 ? "auto" : "none",
              }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-ivoryWhite">
                {isMenuOpen ? <FaXmark /> : <FaBars />}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Bottom border that fades in on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          style={{ opacity: scrollProgress }}
        />
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-darkSlate/98 backdrop-blur-lg z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-end p-4">
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="text-xl text-ivoryWhite bg-white/10 p-3 rounded-full"
                aria-label="Close menu"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaXmark />
              </motion.button>
            </div>

            <motion.div
              className="text-center mb-8 cursor-pointer"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 15px rgba(255, 202, 40, 0.3)",
                rotateX: 2,
              }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
            >
              <h1 className="text-2xl font-bold text-ivoryWhite font-primary tracking-wide select-none">
                BRIAN GIORDANO
              </h1>
            </motion.div>

            <nav className="flex flex-col items-center justify-start w-full px-4">
              <ul className="flex flex-col items-stretch w-full max-w-xs list-none p-0 m-0 space-y-2">
                {MenuItems.map((item, index) => (
                  <motion.li
                    key={item.sectionId}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
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
                            ? "bg-gold/20 text-gold"
                            : "text-ivoryWhite hover:bg-white/10"
                        }
                        w-full py-4 px-6 flex items-center rounded-xl transition-all duration-200
                      `}
                      style={{ textShadow: navTextShadow }}
                    >
                      <span className="text-xl mr-4 text-gold">
                        {item.icon}
                      </span>
                      <span className="text-base">{item.label}</span>
                      {currentSection === item.sectionId && (
                        <span className="ml-auto">
                          <div className="h-2 w-2 rounded-full bg-gold" />
                        </span>
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer - always uses expanded height */}
      <div style={{ height: initialHeaderHeight }} />
    </>
  );
};

export default Header;
