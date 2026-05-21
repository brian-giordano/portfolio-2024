"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Header from "@/components/ui/Header";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FollowMeSection from "@/components/FollowMeSection";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import HeroBackground from "@/components/HeroBackground";
import TypewriterText from "@/components/ui/TypewriterText";

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
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// === YOUR ORIGINAL ANIMATED COMPONENTS (100% unchanged) ===
const DashboardCard = () => {
  const [bars, setBars] = useState([40, 65, 45, 80, 55, 90, 70]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map((h) =>
          Math.max(20, Math.min(95, h + (Math.random() - 0.5) * 20)),
        ),
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
          className={`${cursorVisible ? "opacity: 100" : "opacity-0"} text-gold`}
        >
          |
        </span>
      </div>
      <div className="text-purple-400">{"}"}</div>
    </div>
  );
};

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
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-charcoal rounded-full" />
        <div className="flex justify-between items-center mt-4 mb-4 text-[9px] text-silverMist/60">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-4 h-2 border border-silverMist/40 rounded-sm">
              <div className="w-3 h-1.5 bg-green-400 rounded-sm m-[1px]" />
            </div>
          </div>
        </div>
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
  const [currentSection, setCurrentSection] = useState<string>("projects");
  const [contactSubject, setContactSubject] = useState<string>("");
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 500);
  });

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 180;
      setIsAtBottom(isBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const introSectionRef = useRef<HTMLElement | null>(null);

  // Parallax
  const clusterY = useTransform(scrollY, [0, 500], [0, 100]);
  const phoneY = useTransform(scrollY, [0, 500], [0, 150]);
  const clusterRotate = useTransform(scrollY, [0, 500], [0, -5]);
  const phoneRotate = useTransform(scrollY, [0, 500], [3, 10]);

  const isNavigatingRef = useRef(false);

  // === FIXED OBSERVER WITH DELAY + DEFAULT "projects" ===
  useEffect(() => {
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll("section[id]");
      const observer = new IntersectionObserver(
        (entries) => {
          if (isNavigatingRef.current) {
            return;
          }

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: "-40% 0px -55% 0px",
        },
      );
      sections.forEach((s) => observer.observe(s));
      return () => observer.disconnect();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    setCurrentSection(sectionId);

    section.scrollIntoView({ behavior: "auto", block: "start" });

    requestAnimationFrame(() => {
      const headerHeight = 68;
      const sectionRect = section.getBoundingClientRect();
      const currentOffset = sectionRect.top;

      if (currentOffset < headerHeight || currentOffset > headerHeight + 10) {
        const targetY = window.scrollY + currentOffset - headerHeight;
        window.scrollTo(0, targetY);
      }
    });
  };

  const handleServiceClick = (subject: string) => {
    setContactSubject(subject);
    handleNavClick("contact");
  };

  return (
    <div className="p-0">
      <Header
        name="Brian Giordano"
        currentSection={currentSection}
        onNavClick={handleNavClick}
      />

      <main className="w-full lg:pt-2">
        {/* HERO SECTION */}
        <motion.section
          ref={introSectionRef}
          id="hero"
          className="min-h-[95vh] relative flex flex-col items-center justify-center px-4 overflow-hidden pt-[160px] pb-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <HeroBackground />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 100% 70% at 50% 40%, rgba(135,206,235,0.06) 0%, rgba(212,175,55,0.06) 30%, transparent 70%)",
            }}
          />

          <div className="hidden 2xl:block pointer-events-none">
            <motion.div
              className="absolute top-[20%] left-8 z-0 opacity-40 scale-75 optimize-gpu"
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
                <DashboardCard />
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

            <motion.div
              className="absolute top-[30%] right-8 z-0 opacity-40 scale-100 optimize-gpu"
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

          <div className="relative z-10 text-center max-w-3xl mx-auto py-6 px-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-primary font-extrabold tracking-tight text-ivoryWhite leading-none"
              variants={itemVariants}
            >
              High-Converting Websites for Small Businesses.
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-primary font-extrabold bg-gradient-to-tr from-gold to-ivoryWhite bg-clip-text text-transparent mt-3 leading-tight"
              variants={itemVariants}
            >
              Expert Website Rescue, Starter Sites, &amp; Monthly Care.
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-silverMist mt-6 max-w-md mx-auto"
              variants={itemVariants}
            >
              I build and maintain performance-driven websites that help local
              businesses grow and succeed online.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => handleNavClick("projects")}
                className="px-10 py-4 bg-gold text-darkSlate font-semibold rounded-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View my work
              </motion.button>
              <motion.button
                onClick={() => handleNavClick("services")}
                className="px-10 py-4 border-2 border-gold text-gold font-semibold rounded-xl text-lg hover:bg-gold/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Work with me
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <TypewriterText />
            </motion.div>
          </div>
        </motion.section>

        {/* Subtle Bottom Glass Fade — Premium & Contained */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAtBottom ? 0 : 0.85 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 h-16 md:h-20 pointer-events-none z-[45]"
          style={{
            background:
              "linear-gradient(to top, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.12) 55%, transparent 100%)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />

        <section id="projects" className="scroll-mt-[68px] bg-darkSlate pb-32">
          <div className="w-full section-header-container bg-darkSlate sticky top-[68px] z-40 optimize-gpu">
            <div className="w-full h-[5px] bg-gold" />
            <div className="max-w-7xl mx-auto">
              <SectionHeader name="Projects" bandColor="gold" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 section-content md:pb-6 min-h-[50vh]">
            <ProjectSection />
          </div>
        </section>

        <section id="services" className="scroll-mt-[68px] bg-darkSlate pb-32">
          <div className="w-full section-header-container bg-darkSlate sticky top-[68px] z-40 optimize-gpu">
            <div className="w-full h-[5px] bg-gold" />
            <div className="max-w-7xl mx-auto">
              <SectionHeader name="Services" bandColor="gold" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 section-content md:pb-6 min-h-[50vh]">
            <ServicesSection onServiceClick={handleServiceClick} />
          </div>
        </section>

        <section id="process" className="scroll-mt-[68px] bg-darkSlate pb-32">
          <div className="w-full section-header-container bg-darkSlate sticky top-[68px] z-40 optimize-gpu">
            <div className="w-full h-[5px] bg-gold" />
            <div className="max-w-7xl mx-auto">
              <SectionHeader name="Process" bandColor="gold" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 section-content md:pb-6 min-h-[50vh]">
            <ProcessSection onCtaClick={() => handleNavClick("contact")} />
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-[68px] bg-darkSlate pb-32"
        >
          <div className="w-full section-header-container bg-darkSlate sticky top-[68px] z-40 optimize-gpu">
            <div className="w-full h-[5px] bg-gold" />
            <div className="max-w-7xl mx-auto">
              <SectionHeader name="Experience" bandColor="gold" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 section-content md:pb-6 min-h-[50vh]">
            <ExperienceSection />
          </div>
        </section>

        <section id="education" className="scroll-mt-[68px] bg-darkSlate pb-32">
          <div className="w-full section-header-container bg-darkSlate sticky top-[68px] z-40 optimize-gpu">
            <div className="w-full h-[5px] bg-gold" />
            <div className="max-w-7xl mx-auto">
              <SectionHeader name="Education" bandColor="gold" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 section-content md:pb-6 min-h-[50vh]">
            <EducationSection />
          </div>
        </section>

        <section id="skills" className="scroll-mt-[68px] bg-darkSlate pb-32">
          <div className="w-full section-header-container bg-darkSlate sticky top-[68px] z-40 optimize-gpu">
            <div className="w-full h-[5px] bg-gold" />
            <div className="max-w-7xl mx-auto">
              <SectionHeader name="Skills" bandColor="gold" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 section-content md:pb-6 min-h-[50vh]">
            <SkillsSection />
          </div>
        </section>

        <section id="about" className="scroll-mt-[68px] bg-darkSlate pb-32">
          <div className="w-full section-header-container bg-darkSlate sticky top-[68px] z-40 optimize-gpu">
            <div className="w-full h-[5px] bg-gold" />
            <div className="max-w-7xl mx-auto">
              <SectionHeader name="About" bandColor="gold" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 section-content md:pb-6 min-h-[50vh]">
            <AboutSection />
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-[68px] bg-darkSlate pb-32 min-h-screen"
        >
          <div className="w-full section-header-container bg-darkSlate sticky top-[68px] z-40 optimize-gpu">
            <div className="w-full h-[5px] bg-gold" />
            <div className="max-w-7xl mx-auto">
              <SectionHeader name="Contact" bandColor="gold" />
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto px-0 md:px-6 section-content md:pb-6">
            <div className="w-full flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-[62%] lg:mb-0">
                <ContactSection subject={contactSubject} />
              </div>
              <div className="w-full lg:w-[38%] mx-auto">
                <FollowMeSection />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <Footer />
        </div>

        {/* Back-to-Top FAB */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-darkSlate shadow-[0_4px_20px_rgba(255,215,0,0.25)] hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Back to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
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
