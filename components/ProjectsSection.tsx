// components/ProjectsSection.tsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { CardProps } from "./ui/Card";
import CardsList from "./ui/CardsList";

// Import your new thumbnail PNGs
import VisionDashboardThumbnail from "../assets/images/vision-dashboard-thumbnail-v2.png";
import GaspDesktopHero from "../assets/images/gasp-desktop-hero.png";
import GaspMobileJoin from "../assets/images/gasp-mobile-join.png";
import GaspDesktopTakeAction from "../assets/images/gasp-desktop-take-action.png";
import NeatThumbnail from "../assets/images/neat-thumbnail.png";
import InsuranceAIThumbnail from "../assets/images/insurance-ai-thumbnail.png";
import HIISonarThumbnail from "../assets/images/hii-sonar-thumbnail.png";
import OrderUpCard from "./ui/OrderUpCard";

import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const badgeClassMap: Record<string, string> = {
  Frontend: "badge-frontend",
  Backend: "badge-backend",
  Database: "badge-database",
  DevOps: "badge-devops",
  Design: "badge-design",
};

const SPRING = { type: "spring", stiffness: 300, damping: 22, mass: 0.8 };

const ProjectsSection: React.FC = () => {
  const projects: CardProps[] = useMemo(
    () => [
      {
        imageUrl: GaspDesktopHero,
        title: "Grand Anse Surgery Project",
        alt: "GASP Haiti website redesign hero section",
        orgName: "UI/UX & Full Stack Development",
        orgLink: "https://gasp-haiti.vercel.app/",
        actionText: "View Preview",
        actionIconPrefix: "✨",
        preTitleElement: <OrderUpCard />,
        description: (
          <div className="text-gray-200">
            <p>
              Led the complete digital redesign and front-end development for the Grand Anse Surgery Project (GASP), an organization dedicated to providing life-saving surgical care in Jeremie, Haiti. The new platform translates their holistic, passionate mission into a modern, accessible web experience designed to drive volunteer engagement and donor support.
            </p>
          </div>
        ),
        stackUsed: [
          { name: "Next.js", category: "Frontend" },
          { name: "TypeScript", category: "Frontend" },
          { name: "Tailwind CSS", category: "Frontend" },
          { name: "UI/UX Design", category: "Design" },
        ],
        moreDetails: (
          <div className="text-gray-200">
            <p>
              The redesign focused on creating an empathetic, premium aesthetic that honors the organization&apos;s critical work while modernizing their digital presence.
            </p>
            <ul className="list-disc list-inside mt-4 mb-6 space-y-2">
              <li>Designed a vibrant, responsive interface reflecting the spirit of the Caribbean.</li>
              <li>Built with modern Next.js features for optimal performance and SEO.</li>
              <li>Implemented smooth, scroll-driven animations to enhance storytelling.</li>
              <li>Optimized accessibility to ensure the mission reaches a wider audience.</li>
            </ul>
            <div className="relative mt-8 mb-6 w-full group">
              <div className="relative w-[90%] sm:w-[85%] aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden border border-gold/20 shadow-lg bg-black">
                <NextImage src={GaspDesktopTakeAction.src} alt="GASP Take Action Page" fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 640px) 100vw, 85vw" />
              </div>
              <div className="absolute bottom-0 right-0 w-[35%] sm:w-[25%] md:w-[22%] aspect-[9/16] rounded-xl overflow-hidden border-[6px] border-darkSlate shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black z-10">
                <NextImage src={GaspMobileJoin.src} alt="GASP Mobile View" fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 640px) 35vw, 25vw" />
              </div>
            </div>
          </div>
        ),
        sizes: "(max-width: 1024px) 100vw, 1024px",
        objectPosition: "top",
        thumbnailConfig: {
          useStyled: true,
          accentColor: "gold",
          bgGradient: "from-mediumCharcoal to-darkSlate",
          thumbnailType: "portfolioRedesign",
          animationKey: "scanLine",
          projectImageUrl: GaspDesktopHero.src,
        },
      },
      {
        imageUrl: NeatThumbnail,
        videoUrl: "/videos/neat-loop.mp4",
        title: "NEAT Browser Extension",
        alt: "NEAT Browser Extension",
        orgName: "Full-Stack Product Development",
        orgLink: "https://getneat.io",
        description: (
          <div className="text-gray-200 space-y-2">
            <p className="text-gold text-sm font-semibold tracking-wide uppercase">Chrome Extension · Concept to Web Store · 0 → launched</p>
            <p>
              Designed and built the core functionality, UI/UX, and user experience
              for a privacy-focused Chrome extension, guiding it from initial
              concept to approval on the Chrome Web Store.
            </p>
          </div>
        ),
        stackUsed: [
          { name: "Chrome Extension API", category: "Frontend" },
          { name: "UI/UX Design", category: "Design" },
        ],
        moreDetails: (
          <div className="text-gray-200">
            <p>
              Managed the entire product lifecycle including development, beta
              testing, marketing, and the Web Store submission process.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Designed and built the core functionality and user experience for the extension.
              </li>
              <li>
                Set up and managed private beta testing infrastructure, including
                a dedicated Discord server for controlled tester onboarding and feedback.
              </li>
              <li>
                Created all marketing and onboarding materials for the beta program.
              </li>
              <li>
                Prepared, submitted, and successfully received approval on the
                Google Chrome Web Store.
              </li>
              <li>
                Currently managing a private/unlisted beta rollout to maintain
                testing control.
              </li>
            </ul>
          </div>
        ),
        sizes: "(max-width: 1024px) 100vw, 1024px",
        thumbnailConfig: {
          useStyled: true,
          accentColor: "gold",
          bgGradient: "from-mediumCharcoal to-darkSlate",
          thumbnailType: "neatBrowser", // Updated type
          animationKey: "scanLine",
          projectImageUrl: NeatThumbnail.src,
        },
      },
      {
        imageUrl: VisionDashboardThumbnail,
        title: "Crypto AI Dashboard (Beta)",
        alt: "Crypto AI Dashboard interface screenshot",
        orgName: "Full Stack Development",
        orgLink: "https://crypto-ai-dashboard-lovat.vercel.app/",
        description: (
          <p className="text-gray-200">
            An in-development cryptocurrency dashboard combining real-time
            market data with AI-powered analysis. This beta version allows users
            to track cryptocurrencies, view basic market trends, and experiment
            with the AI conversational interface that&apos;s currently being
            refined.
          </p>
        ),
        stackUsed: [
          { name: "Next.js", category: "Frontend" },
          { name: "TypeScript", category: "Frontend" },
          { name: "Tailwind CSS", category: "Frontend" },
          { name: "Shadcn UI", category: "Frontend" },
          { name: "CoinGecko API", category: "Backend" },
          { name: "FastAPI", category: "Backend" },
          { name: "Python", category: "Backend" },
          { name: "Vercel", category: "DevOps" },
        ],
        moreDetails: (
          <div className="text-gray-200">
            <p>
              This beta dashboard provides real-time market data, AI-driven
              insights, and a conversational interface to help users analyze
              cryptocurrency trends.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Real-time price tracking</li>
              <li>AI-powered market predictions</li>
              <li>Interactive chat interface</li>
              <li>Built with Next.js, FastAPI, and Python</li>
              <li>Deployed on Vercel</li>
            </ul>
          </div>
        ),
        sizes: "(max-width: 1024px) 100vw, 1024px",
        thumbnailConfig: {
          useStyled: true,
          accentColor: "gold",
          bgGradient: "from-mediumCharcoal to-darkSlate",
          thumbnailType: "cryptoDashboard",
          animationKey: "scanLine",
          projectImageUrl: VisionDashboardThumbnail.src,
        },
      },
      {
        imageUrl: InsuranceAIThumbnail,
        title: "Insurance Claims AI System",
        alt: "Insurance Claims AI dashboard screenshot",
        orgName: "AI / Full Stack Development",
        orgLink:
          "https://brian-giordano-insurance-claim-ai-srcuiapp-udsijp.streamlit.app/",
        description: (
          <p>
            AI-powered insurance claims processing system featuring document
            analysis, RAG-based knowledge retrieval, and entity relationship
            graph visualization. Built as part of an enterprise technical
            evaluation for a Fortune 500 insurer.
          </p>
        ),
        stackUsed: [
          { name: "Python", category: "Backend" },
          { name: "Streamlit", category: "Frontend" },
          { name: "RAG", category: "Backend" },
          { name: "Hugging Face", category: "Backend" },
          { name: "FastAPI", category: "Backend" },
          { name: "AI/ML", category: "Backend" },
        ],
        moreDetails: (
          <div>
            <p>
              Built a full AI pipeline for processing insurance claims
              end-to-end, including document ingestion, NLP extraction, and a
              RAG-powered knowledge assistant that answers policy questions with
              confidence scores.
            </p>
            <ul>
              <li>Document analysis & metadata extraction</li>
              <li>RAG knowledge base with confidence scoring</li>
              <li>Entity relationship graph visualization</li>
              <li>Streamlit UI with multi-tab interface</li>
              <li>Deployed on Render (may take 30s to wake from sleep)</li>
            </ul>
          </div>
        ),
        sizes: "(max-width: 1024px) 100vw, 1024px",
        thumbnailConfig: {
          useStyled: true,
          accentColor: "gold",
          bgGradient: "from-mediumCharcoal to-darkSlate",
          thumbnailType: "cryptoDashboard",
          animationKey: "scanLine",
          projectImageUrl: InsuranceAIThumbnail.src,
        },
      },
      {
        imageUrl: HIISonarThumbnail,
        title: "HII Unmanned Systems",
        alt: "Sonar data annotation tool screenshot",
        orgName: "Defense Software Development",
        orgLink: "",
        description: (
          <p>
            Developed production software for HII Mission Technologies, a
            defense contractor supporting U.S. Navy unmanned underwater vehicle
            (UUV) programs. Includes a proprietary sonar data annotation tool
            built as a full-stack desktop application.
          </p>
        ),
        stackUsed: [
          { name: "React", category: "Frontend" },
          { name: "TypeScript", category: "Frontend" },
          { name: "Electron", category: "Frontend" },
          { name: "MongoDB", category: "Database" },
          { name: "MapTiler", category: "Frontend" },
        ],
        moreDetails: (
          <div>
            <p>
              Worked as a Software Engineer II at HII Mission Technologies,
              building and maintaining UIs for DOD-adjacent defense web
              applications. Led R&amp;D and development of a proprietary sonar
              data annotation tool used by DOD radar SMEs, and added GIS mapping
              functionality using MapTiler.
            </p>
            <ul>
              <li>React + TypeScript frontend for UUV simulator/controller</li>
              <li>Sonar data annotation desktop app (Electron + React)</li>
              <li>GIS mapping integration with MapTiler</li>
              <li>Real-time data exchange via RTI DDS Connext</li>
              <li>Project details subject to contractor confidentiality</li>
            </ul>
          </div>
        ),
        sizes: "(max-width: 1024px) 100vw, 1024px",
        thumbnailConfig: {
          useStyled: true,
          accentColor: "gold",
          bgGradient: "from-mediumCharcoal to-darkSlate",
          thumbnailType: "portfolioRedesign",
          animationKey: "scanLine",
          projectImageUrl: HIISonarThumbnail.src,
        },
      },
      // {
      //   imageUrl: PortfolioWebsiteThumbnail,
      //   title: "Portfolio Redesign (This website!)",
      //   alt: "Portfolio website screenshot",
      //   orgName: "Full Stack Development",
      //   orgLink: "",
      //   description: (
      //     <p className="text-gray-200">
      //       This portfolio website represents my creative vision brought to
      //       life, designed and built entirely by myself. It showcases my work
      //       through custom animations, interactive elements, and thoughtful UI
      //       design that reflects my personal aesthetic and technical abilities.
      //     </p>
      //   ),
      //   stackUsed: [
      //     { name: "React", category: "Frontend" },
      //     { name: "TypeScript", category: "Frontend" },
      //     { name: "Next.js", category: "Frontend" },
      //     { name: "Tailwind CSS", category: "Frontend" },
      //     { name: "Adobe CS", category: "Design" },
      //   ],
      //   moreDetails: (
      //     <div className="text-gray-200">
      //       <p>
      //         The site features custom animations, interactive UI elements, and
      //         a clean, modern design that highlights my skills and projects.
      //       </p>
      //       <p>
      //         Built with React and Next.js, styled with Tailwind CSS, and
      //         designed with Adobe Creative Suite.
      //       </p>
      //     </div>
      //   ),
      //   sizes: "(max-width: 1024px) 100vw, 1024px",
      //   thumbnailConfig: {
      //     useStyled: true,
      //     accentColor: "gold",
      //     bgGradient: "from-mediumCharcoal to-darkSlate",
      //     thumbnailType: "portfolioRedesign",
      //     animationKey: "scanLine",
      //     projectImageUrl: PortfolioWebsiteThumbnail.src,
      //   },
      // },
    ],
    [],
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const t = setTimeout(() => {
      const el = modalRef.current?.querySelector<HTMLElement>(
        "button, a, [tabindex='0']",
      );
      el?.focus();
    }, 50);
    return () => clearTimeout(t);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onDocClick = (ev: MouseEvent) => {
      const target = ev.target as Node | null;
      if (!modalRef.current) return;
      if (target && !modalRef.current.contains(target)) {
        setSelectedIndex(null);
      }
    };
    document.addEventListener("click", onDocClick, true);
    return () => document.removeEventListener("click", onDocClick, true);
  }, [selectedIndex]);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const selected = selectedIndex !== null ? projects[selectedIndex] : null;
  const stack = selected?.stackUsed ?? [];

  const portalRoot = typeof document !== "undefined" ? document.body : null;

  const clientProjects = projects.slice(0, 2);
  const technicalProjects = projects.slice(2);

  return (
    <section className="py-8 md:py-16 bg-darkSlate">
      <div className="container mx-auto px-4 space-y-20">
        <div>
          <h3 className="text-2xl font-primary font-bold text-ivoryWhite mb-8 border-b border-white/10 pb-4">
            Client & Business Work
          </h3>
          <CardsList cards={clientProjects} onCardOpen={(idx) => openModal(idx)} />
        </div>
        
        <div>
          <h3 className="text-2xl font-primary font-bold text-ivoryWhite mb-8 border-b border-white/10 pb-4">
            Product & Technical Work
          </h3>
          <CardsList cards={technicalProjects} onCardOpen={(idx) => openModal(idx + 2)} />
        </div>
      </div>

      {selected && portalRoot
        ? createPortal(
            <AnimatePresence>
              <motion.div
                key={`project-modal-${selectedIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={SPRING}
                style={{ zIndex: 2147483647 }}
                className="fixed inset-0 flex items-center justify-center bg-darkSlate bg-opacity-95 backdrop-blur-md"
                onClick={closeModal}
                aria-modal="true"
                role="dialog"
              >
                <motion.div
                  ref={modalRef}
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  transition={SPRING}
                  className="bg-charcoal p-6 md:p-8 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="font-primary font-bold text-gold text-2xl uppercase">
                        {selected.title}
                      </h2>

                      <h3 className="font-subheader text-ivoryWhite text-lg mt-1 flex items-center">
                        {selected.orgLink ? (
                          <a
                            href={selected.orgLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-gold transition"
                          >
                            {selected.orgName}
                            <FaExternalLinkAlt className="ml-2 inline-block text-ivoryWhite" />
                          </a>
                        ) : (
                          selected.orgName
                        )}
                      </h3>
                    </div>

                    <button
                      onClick={closeModal}
                      className="text-silverMist hover:text-gold transition-colors p-2"
                      aria-label="Close modal"
                      type="button"
                    >
                      <FaTimes size={20} />
                    </button>
                  </div>

                  <div className="relative w-full aspect-video mb-6 overflow-hidden rounded group bg-black">
                    {selected.videoUrl ? (
                      <video
                        src={selected.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <NextImage
                        src={selected.imageUrl as string}
                        alt={selected.alt}
                        fill
                        style={{ objectFit: "cover", objectPosition: selected.objectPosition || "center" }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>

                  {stack.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-ivoryWhite font-semibold mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stack.map((tech, idxTech) => (
                          <span
                            key={idxTech}
                            className={`inline-block px-3 py-1 font-subheader text-sm font-semibold rounded-full ${
                              badgeClassMap[tech.category] ||
                              "bg-gray-300 text-darkSlate"
                            }`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="text-ivoryWhite">{selected.moreDetails}</div>

                  <div className="mt-8 flex justify-end">
                    {selected.orgLink && (
                      <a
                        href={selected.orgLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold text-darkSlate font-bold py-2 px-6 rounded-md mr-4 flex items-center hover:bg-opacity-90 transition-opacity"
                      >
                        Visit Site <FaExternalLinkAlt className="ml-2" />
                      </a>
                    )}
                    <button
                      onClick={closeModal}
                      type="button"
                      className="bg-mediumCharcoal text-ivoryWhite py-2 px-6 rounded-md hover:bg-opacity-80 transition-opacity"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>,
            portalRoot,
          )
        : null}
    </section>
  );
};

export default ProjectsSection;
