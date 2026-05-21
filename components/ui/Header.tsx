// components/ui/Header.tsx
"use client";

import React, { useState, useCallback, useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

interface HeaderProps {
  onNavClick: (id: string, instant?: boolean) => void;
  currentSection: string;
  name?: string;
  forceCompact?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  name = "Brian Giordano",
  onNavClick,
  currentSection,
  forceCompact = false,
}) => {
  const { scrollY } = useScroll();
  const [internalIsHero, setInternalIsHero] = useState(true);

  const isHero = forceCompact ? false : internalIsHero;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);

  const headerBackground = useTransform(
    scrollY,
    [0, 80],
    ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 1)"],
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setInternalIsHero(latest < 10);
  });

  const isCompact = !isHero;

  const MenuItems = useMemo(
    () => [
      { label: "Projects", sectionId: "projects" },
      { label: "Services", sectionId: "services" },
      { label: "Process", sectionId: "process" },
      { label: "Experience", sectionId: "experience" },
      { label: "Education", sectionId: "education" },
      { label: "Skills", sectionId: "skills" },
      { label: "About", sectionId: "about" },
      { label: "Contact", sectionId: "contact" },
    ],
    [],
  );

  // === LINKED-AXIS ENGINE ===
  const [navCoords, setNavCoords] = useState<
    { x: number; width: number; id: string }[]
  >([]);
  const [sectionYCoords, setSectionYCoords] = useState<number[]>([]);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const measureCoords = useCallback(() => {
    const coords = MenuItems.map((item) => {
      const btn = buttonRefs.current[item.sectionId];
      if (btn) {
        return {
          x: btn.offsetLeft,
          width: btn.offsetWidth,
          id: item.sectionId,
        };
      }
      return { x: 0, width: 0, id: item.sectionId };
    });
    setNavCoords(coords);

    const yCoords = MenuItems.map((item) => {
      const el = document.getElementById(item.sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY - 68;
      }
      return 0;
    });
    setSectionYCoords(yCoords);
  }, [MenuItems]);

  React.useEffect(() => {
    measureCoords();
    const observer = new ResizeObserver(() => measureCoords());
    const mainContent = document.querySelector("main");
    if (mainContent) observer.observe(mainContent);
    if (headerRef.current) observer.observe(headerRef.current);

    window.addEventListener("resize", measureCoords);
    window.addEventListener("load", measureCoords);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureCoords);
      window.removeEventListener("load", measureCoords);
    };
  }, [measureCoords, isCompact]);

  const transformedPoints = useMemo(() => {
    if (sectionYCoords.length === 0 || navCoords.length === 0) return null;

    const yPoints: number[] = [];
    const xPoints: number[] = [];
    const wPoints: number[] = [];
    const GAP = 250;

    sectionYCoords.forEach((y, i) => {
      const coord = navCoords[i];
      if (i === 0) {
        yPoints.push(y);
        xPoints.push(coord.x);
        wPoints.push(coord.width);
      } else {
        yPoints.push(y - GAP);
        xPoints.push(navCoords[i - 1].x);
        wPoints.push(navCoords[i - 1].width);

        yPoints.push(y);
        xPoints.push(coord.x);
        wPoints.push(coord.width);
      }
    });

    return { yPoints, xPoints, wPoints };
  }, [sectionYCoords, navCoords]);

  const ribbonX = useTransform(
    scrollY,
    transformedPoints?.yPoints || [0, 1000],
    transformedPoints?.xPoints || [0, 0],
  );

  const ribbonWidth = useTransform(
    scrollY,
    transformedPoints?.yPoints || [0, 1000],
    transformedPoints?.wPoints || [100, 100],
  );

  const ribbonOpacity = useTransform(
    scrollY,
    [0, sectionYCoords[0] ? sectionYCoords[0] - 100 : 200],
    [0, 1],
  );

  // Mobile = instant jump, Desktop = smooth scroll
  const scrollToSection = useCallback(
    (sectionId: string, instant = false) => {
      setIsMenuOpen(false);

      setTimeout(() => {
        onNavClick(sectionId, instant);
      }, 80);
    },
    [onNavClick],
  );

  return (
    <>
      <motion.header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 flex items-center ${
          isCompact ? "h-[68px]" : "py-12"
        }`}
        style={{
          backgroundColor: headerBackground,
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex items-center transition-all duration-500 ${
              isCompact ? "justify-between" : "flex-col items-center gap-8"
            }`}
          >
            <motion.h1
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`font-primary font-extrabold tracking-[1px] uppercase text-ivoryWhite cursor-pointer select-none transition-all duration-500 whitespace-nowrap ${
                isCompact ? "text-2xl" : "text-5xl"
              }`}
            >
              {name}
            </motion.h1>

            <nav className="relative">
              <ul
                ref={ulRef}
                className="flex items-center gap-4 xl:gap-6 relative"
              >
                {MenuItems.map((item) => {
                  const isActive = currentSection === item.sectionId;
                  return (
                    <li key={item.sectionId}>
                      <button
                        ref={(el) => {
                          buttonRefs.current[item.sectionId] = el;
                        }}
                        onClick={() => scrollToSection(item.sectionId)} // smooth on desktop
                        className={`relative text-[11px] xl:text-sm tracking-[0.15em] xl:tracking-[0.2em] font-semibold uppercase pl-[0.15em] xl:pl-[0.2em] pr-0 transition-all duration-300 ${
                          isActive
                            ? "text-gold"
                            : "text-ivoryWhite/90 hover:text-gold/80"
                        }`}
                      >
                        <motion.span
                          animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                        >
                          {item.label}
                        </motion.span>
                      </button>
                    </li>
                  );
                })}

                {/* Yellow Ribbon */}
                <motion.div
                  className="absolute left-0 bottom-[-23px] h-[5px] bg-gold z-0 will-change-transform pointer-events-none"
                  style={{
                    x: ribbonX,
                    width: ribbonWidth,
                    opacity: ribbonOpacity,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation */}
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

      {/* Mobile Sidebar Overlay */}
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
                  onClick={() => scrollToSection(item.sectionId, true)} // ← INSTANT on mobile
                  className={`text-left transition-colors ${
                    currentSection === item.sectionId
                      ? "text-gold font-semibold"
                      : "text-ivoryWhite"
                  }`}
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
