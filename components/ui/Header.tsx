"use client";

import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";

interface HeaderProps {
  onNavClick: (id: string) => void;
  currentSection: string;
  name?: string;
}

const Header: React.FC<HeaderProps> = ({
  name = "Brian Giordano",
  onNavClick,
  currentSection,
}) => {
  const { scrollY } = useScroll();
  const [isHero, setIsHero] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsHero(latest < 10);
  });

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--header-height",
          `${height}px`,
        );
      }
    };
    measure();
    window.addEventListener("resize", measure);
    const timeout = setTimeout(measure, 100);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(timeout);
    };
  }, [isHero]);

  const isCompact = !isHero;

  const MenuItems = useMemo(
    () => [
      { label: "Projects", sectionId: "projects" },
      { label: "Experience", sectionId: "experience" },
      { label: "Education", sectionId: "education" },
      { label: "Skills", sectionId: "skills" },
      { label: "About", sectionId: "about" },
      { label: "Contact", sectionId: "contact" },
    ],
    [],
  );

  const scrollToSection = useCallback(
    (sectionId: string) => {
      onNavClick(sectionId);
      setIsMenuOpen(false);
    },
    [onNavClick],
  );

  return (
    <>
      <motion.header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isCompact
            ? "bg-darkSlate/95 backdrop-blur-md border-b border-gold/20 py-4"
            : "bg-transparent py-12"
        }`}
      >
        <div className="container mx-auto px-6">
          <div
            className={`hidden lg:flex items-center transition-all duration-500 ${isCompact ? "justify-between" : "flex-col items-center gap-8"}`}
          >
            {!isCompact && (
              <>
                <motion.h1
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="font-primary font-extrabold tracking-[1px] uppercase text-5xl text-ivoryWhite cursor-pointer select-none"
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                  {name}
                </motion.h1>

                <nav>
                  <ul className="flex items-center gap-8">
                    {MenuItems.map((item) => (
                      <li key={item.sectionId}>
                        <button
                          onClick={() => scrollToSection(item.sectionId)}
                          className={`text-sm tracking-widest transition-all duration-300 ${
                            currentSection === item.sectionId
                              ? "text-yellow-400 border-b-2 border-yellow-400"
                              : "text-ivoryWhite hover:text-white/80"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </>
            )}

            {isCompact && (
              <>
                <motion.h1
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="font-primary font-extrabold tracking-[1px] uppercase text-3xl text-ivoryWhite cursor-pointer select-none"
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  {name}
                </motion.h1>

                <nav>
                  <ul className="flex items-center gap-8">
                    {MenuItems.map((item) => (
                      <li key={item.sectionId}>
                        <button
                          onClick={() => scrollToSection(item.sectionId)}
                          className={`text-sm tracking-widest transition-all duration-300 ${
                            currentSection === item.sectionId
                              ? "text-yellow-400 border-b-2 border-yellow-400"
                              : "text-ivoryWhite hover:text-white/80"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </>
            )}
          </div>

          <div className="flex lg:hidden items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-primary font-extrabold tracking-widest uppercase text-2xl text-ivoryWhite"
            >
              {name}
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-3xl text-ivoryWhite"
            >
              ☰
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-darkSlate/98 backdrop-blur-2xl z-[999] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl text-ivoryWhite"
              >
                ✕
              </button>
            </div>
            <nav className="px-8 flex flex-col gap-6 text-xl">
              {MenuItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`text-left ${currentSection === item.sectionId ? "text-yellow-400 font-semibold" : "text-ivoryWhite"}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
