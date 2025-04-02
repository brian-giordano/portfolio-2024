"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Header from "@/components/ui/Header";
import SwipeUpOverlay from "@/components/ui/SwipeUpOverlay";
import ExperienceSection from "@/components/ExperienceSection";
import { PiCaretDoubleUpBold } from "react-icons/pi";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import PotionSvg from "@/components/PotionSvg";
import FollowMeSection from "@/components/FollowMeSection";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const sectionHeaderRefs = useRef<{ [key: string]: HTMLDivElement | null }>(
    {}
  );
  const introSectionRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);
  const stickyHeaderTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced function to update sticky header visibility
  const updateStickyHeaderVisibility = useCallback((shouldShow: boolean) => {
    // Clear any existing timeout
    if (stickyHeaderTimeoutRef.current) {
      clearTimeout(stickyHeaderTimeoutRef.current);
    }

    // Set a timeout to update the sticky header visibility
    stickyHeaderTimeoutRef.current = setTimeout(() => {
      setShowStickyHeader(shouldShow);
    }, 50); // Small delay to prevent flickering
  }, []);

  // Function to handle navigation clicks from the Header component
  const handleNavClick = (sectionId: string) => {
    // Immediately update the current section when a nav link is clicked
    setCurrentSection(sectionId);

    // Set navigating state to true to hide section headers temporarily
    setIsNavigating(true);

    // Hide the sticky header during navigation
    setShowStickyHeader(false);

    // Reset navigating state immediately after the scroll completes
    // Since we're using behavior: "auto", this should be almost immediate
    setTimeout(() => {
      setIsNavigating(false);
      // Re-evaluate if the sticky header should be shown
      handleScroll();
    }, 50); // Very short timeout since scrolling is now immediate
  };

  const handleScroll = useCallback(() => {
    // Skip scroll handling during navigation to prevent flickering
    if (isNavigating) return;

    // Get the current scroll position
    const currentScrollY = window.scrollY;

    // Determine scroll direction
    const isScrollingDown = currentScrollY > lastScrollY.current;
    lastScrollY.current = currentScrollY;

    // Get the height of the main header
    const header = document.querySelector("header") as HTMLElement;
    const headerHeight = header ? header.offsetHeight : 0;

    // Calculate the position where we want to detect section changes
    const detectionPosition = currentScrollY + headerHeight + 50;

    // Check if we're at the top of the page or in the intro section
    const introSection = introSectionRef.current;
    if (introSection) {
      const introBottom = introSection.offsetTop + introSection.offsetHeight;
      if (currentScrollY < introBottom - headerHeight) {
        setCurrentSection("");
        updateStickyHeaderVisibility(false);
        return;
      }
    }

    const sections = document.querySelectorAll("section[id]");
    let foundCurrentSection = false;

    // Find the section that's currently at or just below the detection position
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      // Use a more precise detection method
      if (
        (detectionPosition >= sectionTop &&
          detectionPosition < sectionBottom) ||
        (i < sections.length - 1 &&
          detectionPosition >= sectionBottom &&
          detectionPosition < (sections[i + 1] as HTMLElement).offsetTop)
      ) {
        if (section.id && currentSection !== section.id) {
          setCurrentSection(section.id);
        }

        foundCurrentSection = true;

        // Check if the section's header is still visible in the viewport
        const sectionHeader = sectionHeaderRefs.current[section.id];
        if (sectionHeader) {
          const sectionHeaderRect = sectionHeader.getBoundingClientRect();

          // Add a buffer zone to prevent flickering
          const bufferZone = 10; // pixels

          // Only show the sticky header if the section's own header is completely out of view
          // with a buffer zone to prevent flickering
          const isHeaderOutOfView =
            sectionHeaderRect.bottom <= headerHeight + bufferZone;

          // Add hysteresis - require more movement to toggle state based on scroll direction
          if (isScrollingDown) {
            // When scrolling down, require header to be fully out of view
            if (isHeaderOutOfView) {
              updateStickyHeaderVisibility(true);
            }
          } else {
            // When scrolling up, require header to be more visible before hiding sticky header
            if (sectionHeaderRect.top > headerHeight - bufferZone) {
              updateStickyHeaderVisibility(false);
            }
          }
        }

        break;
      }
    }

    // If no section was found, hide the sticky header
    if (!foundCurrentSection) {
      updateStickyHeaderVisibility(false);
    }
  }, [currentSection, isNavigating, updateStickyHeaderVisibility]);

  useEffect(() => {
    // Prevent flash of scrolled state by setting the initial state after the page loads
    setIsPageLoaded(true);

    // Initial check for the current section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clear any pending timeouts
      if (stickyHeaderTimeoutRef.current) {
        clearTimeout(stickyHeaderTimeoutRef.current);
      }
    };
  }, [handleScroll]);

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
      />

      <main className="container mx-auto pt-20 lg:pt-24">
        {/* Full-height introductory section */}
        <section
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
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="bg-gray-100 flex flex-col items-start justify-center md:pb-6 pt-16 mt-8"
        >
          <div
            className="container mx-auto"
            ref={(el) => {
              sectionHeaderRefs.current["experience"] = el;
            }}
          >
            <SectionHeader name="Experience" bandColor="mysticTeal" />
          </div>
          <ExperienceSection />
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="bg-gray-100 flex flex-col items-start justify-center md:pb-6 min-h-[50vh] pt-16 mt-8"
        >
          <div
            className="container mx-auto"
            ref={(el) => {
              sectionHeaderRefs.current["education"] = el;
            }}
          >
            <SectionHeader name="Education" bandColor="mysticTeal" />
          </div>
          <EducationSection />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="flex flex-col items-start justify-center md:pb-6 min-h-[50vh] pt-16 mt-8"
        >
          <div
            className="container mx-auto"
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
            className="container mx-auto"
            ref={(el) => {
              sectionHeaderRefs.current["projects"] = el;
            }}
          >
            <SectionHeader name="Projects" bandColor="lightCrimson" />
          </div>
          <ProjectSection />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-gray-100 flex flex-col items-start justify-center md:pb-6 pt-16 mt-8"
        >
          <div
            className="container mx-auto"
            ref={(el) => {
              sectionHeaderRefs.current["about"] = el;
            }}
          >
            <SectionHeader name="About" bandColor="mysticTeal" />
          </div>
          <AboutSection />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-start justify-center md:pb-6 pt-16 mt-8"
        >
          <div
            className="container mx-auto"
            ref={(el) => {
              sectionHeaderRefs.current["contact"] = el;
            }}
          >
            <SectionHeader name="Contact" bandColor="lightCrimson" />
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
