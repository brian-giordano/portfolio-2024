"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Header from "@/components/ui/Header";
// import SwipeUpOverlay from "@/components/ui/SwipeUpOverlay";
import ExperienceSection from "@/components/ExperienceSection";
// import { PiCaretDoubleUpBold } from "react-icons/pi";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import PotionSvg from "@/components/PotionSvg";
import FollowMeSection from "@/components/FollowMeSection";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { throttle } from "lodash";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: 0.5,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const svgVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

// const overlayVariants = {
//   hidden: { y: 30, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: 1.5, ease: "easeOut" },
//   },
// };

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("");
  // const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [backgroundGlowColor, setBackgroundGlowColor] = useState("mysticTeal");
  const [isProgrammaticNavigation, setIsProgrammaticNavigation] =
    useState(false);

  const sectionHeaderRefs = useRef<{ [key: string]: HTMLDivElement | null }>(
    {}
  );
  const introSectionRef = useRef<HTMLElement | null>(null);
  // const lastScrollY = useRef(0);
  const stickyHeaderTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced function to update sticky header visibility
  // const updateStickyHeaderVisibility = useCallback((shouldShow: boolean) => {
  //   // Clear any existing timeout
  //   if (stickyHeaderTimeoutRef.current) {
  //     clearTimeout(stickyHeaderTimeoutRef.current);
  //   }

  //   // Set a timeout to update the sticky header visibility
  //   setShowStickyHeader(shouldShow);
  // }, []);

  // Function to handle navigation clicks from the Header component
  const handleNavClick = (sectionId: string) => {
    // Set both navigating flags
    setIsNavigating(true);
    setIsProgrammaticNavigation(true);

    // Immediately update the current section
    setCurrentSection(sectionId);

    // Always show the sticky header during navigation
    setShowStickyHeader(true);

    const section = document.getElementById(sectionId);
    if (section) {
      // Get the main header height
      const header = document.querySelector("header") as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 64;

      // Calculate position - add a small offset to ensure content is visible
      const offsetPosition = section.offsetTop - headerHeight - 10;

      // Scroll immediately
      window.scrollTo({
        top: offsetPosition,
        behavior: "auto",
      });

      // Reset navigation states after scrolling completes
      setTimeout(() => {
        setIsNavigating(false);
        // Keep isProgrammaticNavigation true for a bit longer
        setTimeout(() => {
          setIsProgrammaticNavigation(false);
        }, 300); // Keep it true for 300ms after navigation completes
      }, 50);
    }
  };

  // const handleNavClick = (sectionId: string) => {
  //   // Set navigating state to true to prevent scroll handling during navigation
  //   setIsNavigating(true);

  //   // Immediately update the current section
  //   setCurrentSection(sectionId);

  //   // Show the sticky header immediately
  //   setShowStickyHeader(true);

  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     // Get the main header height
  //     const header = document.querySelector("header") as HTMLElement;
  //     const headerHeight = header ? header.offsetHeight : 64;

  //     // Calculate position to scroll to
  //     // This is the position where the sticky header would be shown
  //     const offsetPosition = section.offsetTop - headerHeight;

  //     // Scroll immediately
  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "auto",
  //     });

  //     // Reset navigating state after scrolling completes
  //     setTimeout(() => {
  //       setIsNavigating(false);
  //     }, 50);
  //   }
  // };

  const handleScroll = useCallback(() => {
    if (isNavigating) return;

    const scrollY = window.scrollY;
    const header = document.querySelector("header") as HTMLElement;
    const headerHeight = header ? header.offsetHeight : 64;

    // Check if we're in the intro section
    if (scrollY < 300) {
      setCurrentSection("");
      setShowStickyHeader(false);
      return;
    }

    // Find which section we're currently viewing
    const sections = document.querySelectorAll("section[id]");

    for (const section of sections) {
      const sectionEl = section as HTMLElement;
      const sectionTop = sectionEl.offsetTop - headerHeight;
      const sectionBottom = sectionTop + sectionEl.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        if (sectionEl.id !== currentSection) {
          setCurrentSection(sectionEl.id);
        }

        // Find the section header
        const sectionHeader = sectionEl.querySelector(
          ".section-header-container"
        ) as HTMLElement;

        if (sectionHeader) {
          // Calculate the position of the section header relative to the viewport
          const sectionHeaderRect = sectionHeader.getBoundingClientRect();

          // Show sticky header when the section header is about to go behind the main header
          // or is already behind it
          setShowStickyHeader(sectionHeaderRect.top <= headerHeight);
        }

        return;
      }
    }

    // If we're not in any section, hide the sticky header
    setShowStickyHeader(false);
  }, [currentSection, isNavigating]);

  useEffect(() => {
    const colors = [
      "mysticTeal",
      "gold",
      "lightCrimson",
      "lavender",
      "lightSkyBlue",
    ];
    let colorIndex = 0;

    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setBackgroundGlowColor(colors[colorIndex]);
    }, 5000); // Change color every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 16); // ~60fps

    // Initial check for the current section
    handleScroll();

    window.addEventListener("scroll", throttledHandleScroll);

    // Store the current ref value in a variable inside the effect
    const currentTimeoutRef = stickyHeaderTimeoutRef;

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);

      // Use the captured variable instead of accessing the ref directly
      if (currentTimeoutRef.current) {
        clearTimeout(currentTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // section header visibility
  useEffect(() => {
    if (isProgrammaticNavigation) {
      // Hide all section headers when in programmatic navigation
      const sectionHeaders = document.querySelectorAll(
        ".section-header-container"
      );
      sectionHeaders.forEach((header) => {
        (header as HTMLElement).style.opacity = "0";
        (header as HTMLElement).style.visibility = "hidden";
      });

      // Clean up function to restore visibility when navigation ends
      return () => {
        if (!isProgrammaticNavigation) {
          setTimeout(() => {
            sectionHeaders.forEach((header) => {
              (header as HTMLElement).style.opacity = "1";
              (header as HTMLElement).style.visibility = "visible";
            });
          }, 50); // Small delay to ensure smooth transition
        }
      };
    }
  }, [isProgrammaticNavigation]);

  // Update handleScroll when currentSection changes to check visibility of the new section's header
  useEffect(() => {
    if (currentSection && !isNavigating) {
      handleScroll();
    }
  }, [currentSection, isNavigating, handleScroll]);

  return (
    <div className="p-0">
      {/* Main Header - Pass the handleNavClick function and showStickyHeader state */}
      <Header
        name="Brian Giordano"
        currentSection={currentSection}
        onNavClick={handleNavClick}
        showStickyHeader={showStickyHeader && !isNavigating}
        isProgrammaticNavigation={isProgrammaticNavigation}
      />

      <main className="container mx-auto lg:pt-2">
        {/* Full-height introductory section */}
        <motion.section
          ref={(el) => {
            introSectionRef.current = el;
          }}
          className="min-h-[85vh] relative grid grid-rows-[auto_1fr_auto]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div
            className="absolute inset-0 opacity-15 transition-all duration-3000 ease-in-out"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--color-${backgroundGlowColor}) 0%, transparent 70%)`,
              filter: "blur(60px)",
            }}
          />

          {/* Top row - minimal height */}
          <div className="pt-1">
            <motion.h2
              className="text-xl font-subheader font-light text-silverMist z-30 text-center"
              variants={itemVariants}
            >
              Digital Alchemist
            </motion.h2>
          </div>

          {/* Middle row - takes all available space */}
          <div className="flex items-center justify-center">
            <motion.div
              className="w-4/5 md:w-4/5 lg:w-2/5"
              variants={svgVariants}
            >
              <PotionSvg />
            </motion.div>
          </div>

          {/* Bottom row - minimal height */}
          <div className="pb-4 flex justify-center">
            <ScrollIndicator
              targetSectionId="experience"
              onNavClick={handleNavClick}
            />
          </div>
        </motion.section>
        {/* <section
          ref={(el) => {
            introSectionRef.current = el;
          }}
          className="flex flex-col items-center justify-center bg-gray-100 p-4 lg:py-20 min-h-[60vh]"
        >
          <h2 className="text-xl font-subheader font-light text-silverMist mt-8 lg:text-2xl">
            Digital Alchemist
          </h2>
          <PotionSvg />
          <div className="w-full flex justify-center">
            <SwipeUpOverlay
              textLeft="Explore"
              textRight="Further"
              icon={PiCaretDoubleUpBold}
            />
          </div>
        </section> */}
        {/* Experience Section */}
        <section
          id="experience"
          className="bg-gray-100 flex flex-col items-start justify-center md:pb-6 pt-16 mt-8"
        >
          <div
            className="container mx-auto section-header-container"
            ref={(el) => {
              sectionHeaderRefs.current["experience"] = el;
            }}
          >
            <SectionHeader name="Experience" bandColor="gold" />
          </div>
          <ExperienceSection />
        </section>
        {/* Education Section */}
        <section
          id="education"
          className="bg-gray-100 flex flex-col items-start justify-center md:pb-6 min-h-[50vh] pt-16 mt-8"
        >
          <div
            className="container mx-auto section-header-container"
            ref={(el) => {
              sectionHeaderRefs.current["education"] = el;
            }}
          >
            <SectionHeader name="Education" bandColor="gold" />
          </div>
          <EducationSection />
        </section>
        {/* Skills Section */}
        <section
          id="skills"
          className="flex flex-col items-start justify-center md:pb-6 min-h-[50vh] pt-16 mt-8"
        >
          <div
            className="container mx-auto section-header-container"
            ref={(el) => {
              sectionHeaderRefs.current["skills"] = el;
            }}
          >
            <SectionHeader name="Skills" bandColor="gold" />
          </div>
          <SkillsSection />
        </section>
        {/* Projects Section */}
        <section
          id="projects"
          className="w-full bg-gray-100 flex flex-col items-start justify-center md:pb-6 min-h-[50vh] pt-16 mt-8"
        >
          <div
            className="container mx-auto section-header-container"
            ref={(el) => {
              sectionHeaderRefs.current["projects"] = el;
            }}
          >
            <SectionHeader name="Projects" bandColor="gold" />
          </div>
          <ProjectSection />
        </section>
        {/* About Section */}
        <section
          id="about"
          className="bg-gray-100 flex flex-col items-start justify-center md:pb-6 pt-16 mt-8"
        >
          <div
            className="container mx-auto section-header-container"
            ref={(el) => {
              sectionHeaderRefs.current["about"] = el;
            }}
          >
            <SectionHeader name="About" bandColor="gold" />
          </div>
          <AboutSection />
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-start justify-center md:pb-6 pt-16 mt-8"
        >
          <div
            className="container mx-auto section-header-container"
            ref={(el) => {
              sectionHeaderRefs.current["contact"] = el;
            }}
          >
            <SectionHeader name="Contact" bandColor="gold" />
          </div>
          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 lg:mb-0">
              <ContactSection />
            </div>
            <div className="w-full lg:w-1/2 mx-auto">
              <FollowMeSection />
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
