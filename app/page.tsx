"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Header from "@/components/ui/Header";
import ExperienceSection from "@/components/ExperienceSection";
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

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [backgroundGlowColor, setBackgroundGlowColor] = useState("mysticTeal");
  const [isNavigating, setIsNavigating] = useState(false);
  const introSectionRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(64);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle navigation clicks from the Header component
  const handleNavClick = (sectionId: string) => {
    // Set navigating state to true
    setIsNavigating(true);
    setCurrentSection(sectionId);

    // Add navigating class to body
    document.body.classList.add("navigating");

    const section = document.getElementById(sectionId);
    if (section) {
      // Add active-section class to the target section
      document.querySelectorAll("section").forEach((s) => {
        s.classList.remove("active-section");
      });
      section.classList.add("active-section");

      // Get the main header height
      const header = document.querySelector("header") as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 64;

      // Calculate position
      const offsetPosition = section.offsetTop - headerHeight;

      // Scroll immediately
      window.scrollTo({
        top: offsetPosition,
        behavior: "auto",
      });

      // Reset navigation states after scrolling completes
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      navigationTimeoutRef.current = setTimeout(() => {
        setIsNavigating(false);
        document.body.classList.remove("navigating");
      }, 300); // Short timeout since we're using behavior: "auto"
    }
  };

  // Effect to measure header height
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement;
    if (header) {
      setHeaderHeight(header.offsetHeight);
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
      );
    }

    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
        document.documentElement.style.setProperty(
          "--header-height",
          `${header.offsetHeight}px`
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  const handleScroll = throttle(() => {
    if (isNavigating) return; // Skip scroll handling during navigation

    const scrollY = window.scrollY;

    // Check if we're in the intro section
    if (scrollY < 300) {
      setCurrentSection("");
      return;
    }

    // Find which section we're currently viewing
    const sections = document.querySelectorAll("section[id]");

    for (const section of sections) {
      const sectionEl = section as HTMLElement;
      const sectionTop = sectionEl.offsetTop - headerHeight - 10;
      const sectionBottom = sectionTop + sectionEl.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        if (sectionEl.id !== currentSection) {
          setCurrentSection(sectionEl.id);

          // Update active section for styling
          document.querySelectorAll("section").forEach((s) => {
            s.classList.remove("active-section");
          });
          sectionEl.classList.add("active-section");
        }
        return;
      }
    }
  }, 100);

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
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="p-0">
      {/* Main Header */}
      <Header
        name="Brian Giordano"
        currentSection={currentSection}
        onNavClick={handleNavClick}
      />

      <main className="container mx-auto lg:pt-2">
        {/* Full-height introductory section */}
        <motion.section
          ref={introSectionRef}
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
          <div className="pb-4 flex justify-center lg:pb-12">
            <ScrollIndicator
              targetSectionId="experience"
              onNavClick={handleNavClick}
            />
          </div>
        </motion.section>

        {/* Experience Section */}
        <section
          id="experience"
          className="bg-gray-100 flex flex-col items-start justify-center mt-8"
        >
          <div className="container mx-auto section-header-container">
            <SectionHeader name="Experience" bandColor="gold" />
          </div>
          <div className="container mx-auto section-content md:pb-6">
            <ExperienceSection />
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="bg-gray-100 flex flex-col items-start justify-center mt-8"
        >
          <div className="container mx-auto section-header-container">
            <SectionHeader name="Education" bandColor="gold" />
          </div>
          <div className="container mx-auto section-content md:pb-6 min-h-[50vh]">
            <EducationSection />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="flex flex-col items-start justify-center mt-8"
        >
          <div className="container mx-auto section-header-container">
            <SectionHeader name="Skills" bandColor="gold" />
          </div>
          <div className="container mx-auto section-content md:pb-6 min-h-[50vh]">
            <SkillsSection />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full bg-gray-100 flex flex-col items-start justify-center mt-8"
        >
          <div className="container mx-auto section-header-container">
            <SectionHeader name="Projects" bandColor="gold" />
          </div>
          <div className="container mx-auto section-content md:pb-6 min-h-[50vh]">
            <ProjectSection />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-gray-100 flex flex-col items-start justify-center mt-8"
        >
          <div className="container mx-auto section-header-container">
            <SectionHeader name="About" bandColor="gold" />
          </div>
          <div className="container mx-auto section-content md:pb-6">
            <AboutSection />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col items-start justify-center mt-8 min-h-[calc(100vh-var(--header-height))]"
        >
          <div className="container mx-auto section-header-container">
            <SectionHeader name="Contact" bandColor="gold" />
          </div>
          <div className="container mx-auto section-content flex-grow md:pb-6">
            <div className="w-full flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 lg:mb-0">
                <ContactSection />
              </div>
              <div className="w-full lg:w-1/2 mx-auto">
                <FollowMeSection />
              </div>
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
