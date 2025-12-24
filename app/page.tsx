"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "@/components/ui/Header";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
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

// Animated Dashboard Card with live chart
const DashboardCard = () => {
  const [bars, setBars] = useState([40, 65, 45, 80, 55, 90, 70]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map((h) =>
          Math.max(20, Math.min(95, h + (Math.random() - 0.5) * 20))
        )
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-darkSlate/95 backdrop-blur-md border border-gold/30 rounded-xl p-4 w-44 shadow-2xl shadow-gold/10">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-silverMist">Revenue</span>
        <motion.span
          className="text-[10px] text-green-400"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ● Live
        </motion.span>
      </div>
      <div className="text-lg font-bold text-ivoryWhite mb-3">$24,500</div>
      <div className="flex items-end gap-1 h-10">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-gold/50 to-gold rounded-sm"
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  );
};

// Animated Code Snippet with typing effect
const CodeSnippet = () => {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-darkSlate/95 backdrop-blur-md border border-purple-500/30 rounded-xl p-3 w-48 shadow-2xl shadow-purple-500/10 font-mono text-[10px]">
      <div className="flex gap-1.5 mb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <div className="text-purple-400">
        const <span className="text-ivoryWhite">App</span> = () =&gt; {"{"}
      </div>
      <div className="text-silverMist pl-2">
        return &lt;<span className="text-gold">Dashboard</span> /&gt;
        <span
          className={`${cursorVisible ? "opacity-100" : "opacity-0"} text-gold`}
        >
          |
        </span>
      </div>
      <div className="text-purple-400">{"}"}</div>
    </div>
  );
};

// Animated Terminal with typing commands
const TerminalWindow = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setStep((s) => (s + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-darkSlate/95 backdrop-blur-md border border-green-500/30 rounded-xl p-3 w-40 shadow-2xl shadow-green-500/10 font-mono text-[9px]">
      <div className="flex gap-1.5 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
      </div>
      <div className="text-green-400">$ npm run build</div>
      <motion.div
        className="text-silverMist"
        animate={{ opacity: step >= 1 ? 1 : 0.3 }}
      >
        ✓ Compiled
      </motion.div>
      <motion.div
        className="text-silverMist"
        animate={{ opacity: step >= 2 ? 1 : 0.3 }}
      >
        ✓ Optimized
      </motion.div>
      <motion.div
        className="text-gold font-semibold"
        animate={{ opacity: step >= 3 ? 1 : 0.3 }}
      >
        Ready in 2.3s 🚀
      </motion.div>
    </div>
  );
};

// Animated Mobile Frame with activity
const MobileFrame = () => {
  const [balance, setBalance] = useState(12450);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance((b) => b + Math.floor(Math.random() * 100) - 30);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-charcoal to-darkSlate border-4 border-silverMist/30 rounded-[2.5rem] p-2.5 w-44 shadow-2xl shadow-mysticTeal/20">
      <div className="bg-darkSlate rounded-[2rem] p-4 h-80 overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-charcoal rounded-full" />

        {/* Status bar */}
        <div className="flex justify-between items-center mt-4 mb-4 text-[9px] text-silverMist/60">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-4 h-2 border border-silverMist/40 rounded-sm">
              <div className="w-3 h-1.5 bg-green-400 rounded-sm m-[1px]" />
            </div>
          </div>
        </div>

        {/* App content */}
        <div className="text-xs text-ivoryWhite font-semibold mb-4">
          Dashboard
        </div>
        <div className="space-y-3">
          <motion.div
            className="bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 rounded-xl p-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-[9px] text-silverMist mb-1">Balance</div>
            <motion.div
              className="text-lg text-ivoryWhite font-bold"
              key={balance}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
            >
              ${balance.toLocaleString()}
            </motion.div>
          </motion.div>
          <div className="bg-silverMist/10 rounded-xl p-3">
            <div className="text-[9px] text-silverMist mb-1">Today</div>
            <div className="text-sm text-green-400 font-semibold">+$340.00</div>
          </div>
          <div className="flex gap-2 mt-4">
            <motion.div
              className="flex-1 bg-gold rounded-xl py-2.5 text-center text-[10px] text-darkSlate font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.div>
            <motion.div
              className="flex-1 bg-silverMist/20 rounded-xl py-2.5 text-center text-[10px] text-silverMist font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Receive
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [isNavigating, setIsNavigating] = useState(false);
  const introSectionRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(64);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [scrollYState, setScrollYState] = useState(0);

  // Parallax scroll
  const { scrollY } = useScroll();
  const clusterY = useTransform(scrollY, [0, 500], [0, 100]);
  const phoneY = useTransform(scrollY, [0, 500], [0, 150]);
  const clusterRotate = useTransform(scrollY, [0, 500], [0, -5]);
  const phoneRotate = useTransform(scrollY, [0, 500], [3, 10]);

  const handleNavClick = (sectionId: string) => {
    setIsNavigating(true);
    document.body.classList.add("navigating");

    const section = document.getElementById(sectionId);
    if (section) {
      document.querySelectorAll("section").forEach((s) => {
        s.classList.remove("active-section");
      });
      section.classList.add("active-section");

      // Only account for collapsed header
      const collapsedHeaderHeight = 70;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionTop - collapsedHeaderHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      // Set current section AFTER scroll completes
      navigationTimeoutRef.current = setTimeout(() => {
        setCurrentSection(sectionId);
        setIsNavigating(false);
        document.body.classList.remove("navigating");
      }, 500);
    }
  };

  useEffect(() => {
    // Force recalculation after mount
    const forceReflow = () => {
      window.dispatchEvent(new Event("resize"));
    };

    // Run after initial render
    requestAnimationFrame(() => {
      requestAnimationFrame(forceReflow);
    });
  }, []);

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

  useEffect(() => {
    const handleScrollY = () => setScrollYState(window.scrollY);
    window.addEventListener("scroll", handleScrollY, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  const handleScroll = throttle(() => {
    if (isNavigating) return;

    const scrollY = window.scrollY;

    if (scrollY < 300) {
      setCurrentSection("");
      const projectsSection = document.getElementById("projects");
      if (
        projectsSection &&
        !projectsSection.classList.contains("active-section")
      ) {
        document.querySelectorAll("section").forEach((s) => {
          if (s.id !== "projects") s.classList.remove("active-section");
        });
        projectsSection.classList.add("active-section");
      }
      return;
    }

    const sections = document.querySelectorAll("section[id]");

    for (const section of sections) {
      const sectionEl = section as HTMLElement;
      const sectionTop = sectionEl.offsetTop - headerHeight - 10;
      const sectionBottom = sectionTop + sectionEl.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        if (sectionEl.id !== currentSection) {
          setCurrentSection(sectionEl.id);
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
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="p-0">
      <Header
        name="Brian Giordano"
        currentSection={currentSection}
        onNavClick={handleNavClick}
      />

      <main className="container mx-auto lg:pt-2">
        {/* Hero Section */}
        <motion.section
          ref={introSectionRef}
          className="min-h-[70vh] relative flex flex-col items-center justify-center px-4 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                "radial-gradient(ellipse 120% 80% at 50% 40%, rgba(94,186,189,0.2) 0%, transparent 60%)",
                "radial-gradient(ellipse 120% 80% at 50% 40%, rgba(212,175,55,0.2) 0%, transparent 60%)",
                "radial-gradient(ellipse 120% 80% at 50% 40%, rgba(205,92,92,0.2) 0%, transparent 60%)",
                "radial-gradient(ellipse 120% 80% at 50% 40%, rgba(150,123,182,0.2) 0%, transparent 60%)",
                "radial-gradient(ellipse 120% 80% at 50% 40%, rgba(135,206,235,0.2) 0%, transparent 60%)",
                "radial-gradient(ellipse 120% 80% at 50% 40%, rgba(94,186,189,0.2) 0%, transparent 60%)",
              ],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ filter: "blur(100px)" }}
          />

          {/* Floating UI Elements - pushed to edges, smaller, more faded */}
          <div className="hidden 2xl:block pointer-events-none">
            {/* LEFT: Cluster */}
            <motion.div
              className="absolute top-[20%] left-8 z-0 opacity-40 scale-75"
              style={{ y: clusterY, rotate: clusterRotate }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div className="relative z-10">
                  <DashboardCard />
                </motion.div>
                <motion.div
                  className="absolute -top-24 left-32 z-20"
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <CodeSnippet />
                </motion.div>
                <motion.div
                  className="absolute top-28 left-40 z-30"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <TerminalWindow />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT: Phone */}
            <motion.div
              className="absolute top-[30%] right-8 z-0 opacity-40 scale-100"
              style={{ y: phoneY, rotate: phoneRotate }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MobileFrame />
              </motion.div>
            </motion.div>
          </div>

          {/* Hero content - tighter spacing */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-ivoryWhite mb-4 leading-tight"
              variants={itemVariants}
            >
              I build product UIs that ship.
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl font-subheader font-light text-silverMist mb-8"
              variants={itemVariants}
            >
              Frontend engineer with design chops. AI-augmented. Startup-ready.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => handleNavClick("projects")}
                className="w-full sm:w-auto px-10 py-4 bg-gold text-darkSlate font-bold rounded-lg transition-all duration-300 text-lg shadow-lg shadow-gold/30"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(212,175,55,0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                See my work
              </motion.button>
              <motion.a
                href="https://calendly.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 border-2 border-gold text-gold font-semibold rounded-lg transition-all duration-300 text-center text-lg hover:bg-gold/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a call
              </motion.a>
            </motion.div>

            {/* Scroll indicator - more space above */}
            <motion.div className="mt-12" variants={itemVariants}>
              <ScrollIndicator
                targetSectionId="projects"
                onNavClick={handleNavClick}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full flex flex-col items-start justify-center mt-8 bg-darkSlate"
        >
          <div className="w-full bg-darkSlate sticky top-[70px] z-20">
            <div className="container mx-auto section-header-container">
              <SectionHeader name="Projects" bandColor="gold" />
            </div>
          </div>
          <div className="container mx-auto section-content md:pb-6 min-h-[50vh]">
            <ProjectSection />
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="w-full flex flex-col items-start justify-center mt-8 bg-darkSlate"
        >
          <div className="w-full bg-darkSlate sticky top-[70px] z-20">
            <div className="container mx-auto section-header-container">
              <SectionHeader name="Experience" bandColor="gold" />
            </div>
          </div>
          <div className="container mx-auto section-content md:pb-6 min-h-[50vh]">
            <ExperienceSection />
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="w-full flex flex-col items-start justify-center mt-8 bg-darkSlate"
        >
          <div className="w-full bg-darkSlate sticky top-[70px] z-20">
            <div className="container mx-auto section-header-container">
              <SectionHeader name="Education" bandColor="gold" />
            </div>
          </div>
          <div className="container mx-auto section-content md:pb-6 min-h-[50vh]">
            <EducationSection />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="w-full flex flex-col items-start justify-center mt-8 bg-darkSlate"
        >
          <div className="w-full bg-darkSlate sticky top-[70px] z-20">
            <div className="container mx-auto section-header-container">
              <SectionHeader name="Skills" bandColor="gold" />
            </div>
          </div>
          <div className="container mx-auto section-content md:pb-6 min-h-[50vh]">
            <SkillsSection />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full flex flex-col items-start justify-center mt-8 bg-darkSlate"
        >
          <div className="w-full bg-darkSlate sticky top-[70px] z-20">
            <div className="container mx-auto section-header-container">
              <SectionHeader name="About" bandColor="gold" />
            </div>
          </div>
          <div className="container mx-auto section-content md:pb-6 min-h-[50vh]">
            <AboutSection />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full bg-darkSlate flex flex-col items-start justify-center mt-8 relative z-10"
        >
          <div className="w-full bg-darkSlate sticky top-[70px] z-20">
            <div className="container mx-auto section-header-container">
              <SectionHeader name="Contact" bandColor="gold" />
            </div>
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

        <Footer />

        {/* Back to top button */}
        <AnimatePresence>
          {scrollYState > 500 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-6 z-40 p-3 bg-gold text-darkSlate rounded-full shadow-lg shadow-gold/30 hover:scale-110 transition-transform"
              aria-label="Back to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Home;
