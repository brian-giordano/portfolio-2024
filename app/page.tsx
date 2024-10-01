"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Header from "@/components/ui/Header";
import SectionHeader from "@/components/ui/SectionHeader";
import CenteredImage from "@/components/ui/CenteredImage";
import mainImage from "../assets/images/potion-bottle-2.svg";
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

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("experience");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const { id, offsetTop, offsetHeight } = section as HTMLElement;
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        setCurrentSection(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-0">
      <Header name="Brian Giordano" />

      <main className="container mx-auto pt-20 lg:pt-24">
        {/* Full-height introductory section */}
        <section className="flex flex-col items-center justify-center bg-gray-100 p-4 lg:py-20 min-h-[60vh]">
          {/* Subheader */}
          <h2 className="text-xl font-subheader font-light text-silverMist mt-8 lg:text-2xl">
            Digital Alchemist
          </h2>

          {/* Main Image or Animated PotionSvg */}

          <PotionSvg />

          {/* Swipe up overlay */}
          <div className="w-full flex justify-center">
            <SwipeUpOverlay
              textLeft="Explore"
              textRight="Further"
              icon={PiCaretDoubleUpBold}
            />
          </div>
        </section>

        {/* Sticky Section Header */}
        <div className="sticky top-16 z-40 bg-background lg:top-[112px]">
          <SectionHeader
            name={
              currentSection.charAt(0).toUpperCase() + currentSection.slice(1)
            }
            bandColor={
              currentSection === "experience"
                ? "mysticTeal"
                : currentSection === "education"
                ? "mysticTeal"
                : currentSection === "skills"
                ? "gold"
                : currentSection === "projects"
                ? "lightCrimson"
                : currentSection === "about"
                ? "mysticTeal"
                : currentSection === "contact"
                ? "lightCrimson"
                : ""
            }
          />
        </div>

        {/* Experience Section */}
        <section
          id="experience"
          className="bg-gray-100 flex flex-col items-start justify-center md:pb-6"
        >
          <SectionHeader name="Experience" bandColor="mysticTeal" />
          <ExperienceSection />
        </section>

        {/* Other Sections */}
        <section
          id="education"
          className="bg-gray-100 flex flex-col items-start justify-center md:pb-6"
        >
          <SectionHeader name="Education" bandColor="mysticTeal" />
          <EducationSection />
        </section>
        <section
          id="skills"
          className="flex flex-col items-start justify-center md:pb-6"
        >
          <SectionHeader name="Skills" bandColor="gold" />
          <SkillsSection />
        </section>
        <section
          id="projects"
          className="w-full bg-gray-100 flex flex-col items-start justify-center md:pb-6"
        >
          <SectionHeader name="Projects" bandColor="lightCrimson" />
          <ProjectSection />
        </section>
        <section
          id="about"
          className="bg-gray-100 flex flex-col items-start justify-center md:pb-6"
        >
          <SectionHeader name="About" bandColor="mysticTeal" />
          <AboutSection />
        </section>
        <section
          id="contact"
          className="min-h-screen flex flex-col items-start justify-center md:pb-6"
        >
          <SectionHeader name="Contact" bandColor="lightCrimson" />
          <div className="w-full flex flex-col lg:flex-row">
            {" "}
            {/* Change to flex-row on lg and above */}
            <div className="w-full lg:w-1/2 lg:mb-0">
              {" "}
              {/* Full width on small screens, half on lg and above */}
              <ContactSection />
            </div>
            <div className="w-full lg:w-1/2 mx-auto">
              {" "}
              {/* Full width on small screens, half on lg and above */}
              <FollowMeSection />
            </div>
          </div>
        </section>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
