// components/ProjectsSection.tsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { CardProps } from "./ui/Card";
import CardsList from "./ui/CardsList";

// Import your new thumbnail PNGs
import VisionDashboardThumbnail from "../assets/images/vision-dashboard-thumbnail-v2.png";
import PortfolioWebsiteThumbnail from "../assets/images/portfolio-website-thumbnail-v2.png";
import GaspThumbnail from "../assets/images/portfolio-GASP-thumbnail-v2.png";
import ChrisStrattonThumbnail from "../assets/images/portfolio-Chirs-Stratton-thumbnail-v2.png";

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
        imageUrl: PortfolioWebsiteThumbnail,
        title: "Portfolio Redesign (This website!)",
        alt: "Portfolio website screenshot",
        orgName: "Full Stack Development",
        orgLink: "",
        description: (
          <p className="text-gray-200">
            This portfolio website represents my creative vision brought to
            life, designed and built entirely by myself. It showcases my work
            through custom animations, interactive elements, and thoughtful UI
            design that reflects my personal aesthetic and technical abilities.
          </p>
        ),
        stackUsed: [
          { name: "React", category: "Frontend" },
          { name: "TypeScript", category: "Frontend" },
          { name: "Next.js", category: "Frontend" },
          { name: "Tailwind CSS", category: "Frontend" },
          { name: "Adobe CS", category: "Design" },
        ],
        moreDetails: (
          <div className="text-gray-200">
            <p>
              The site features custom animations, interactive UI elements, and
              a clean, modern design that highlights my skills and projects.
            </p>
            <p>
              Built with React and Next.js, styled with Tailwind CSS, and
              designed with Adobe Creative Suite.
            </p>
          </div>
        ),
        sizes: "(max-width: 1024px) 100vw, 1024px",
        thumbnailConfig: {
          useStyled: true,
          accentColor: "gold",
          bgGradient: "from-mediumCharcoal to-darkSlate",
          thumbnailType: "portfolioRedesign",
          animationKey: "scanLine",
          projectImageUrl: PortfolioWebsiteThumbnail.src,
        },
      },
      {
        imageUrl: ChrisStrattonThumbnail,
        title: "Chris Stratton for City Council (In Production)",
        alt: "Christ Stratton for Ward 6 City Council screenshot",
        orgName: "Full Stack Development",
        orgLink: "https://chris-stratton-campaign.vercel.app/",
        description: (
          <p className="text-gray-200">
            An in-progress website designed and developed with React, Tailwind
            and typescript for a candidtate running for Ward 6 City Council in
            Northampton, MA. Chris wanted a grass-roots feel that displayed the
            unique Northampton cultural fabric with it&apos;s impressive natural
            features and &quot;bike-ability.&quot; that&apos;s currently being
            refined.
          </p>
        ),
        stackUsed: [
          { name: "Next.js", category: "Frontend" },
          { name: "TypeScript", category: "Frontend" },
          { name: "Tailwind CSS", category: "Frontend" },
          { name: "Shadcn UI", category: "Frontend" },
          { name: "Vercel", category: "DevOps" },
          { name: "Adobe CS", category: "Design" },
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
          thumbnailType: "chrisStratton",
          animationKey: "scanLine",
          projectImageUrl: ChrisStrattonThumbnail.src,
        },
      },
      {
        imageUrl: GaspThumbnail,
        title: "Grand Anse Surgery Project",
        alt: "Grand Anse Surgery Project website screenshot",
        orgName: "Web Consulting & Management",
        orgLink: "https://www.grandansesurgeryproject.org",
        description: (
          <p className="text-gray-200">
            I consulted with the Grand Anse Surgery Project to curate a
            Squarespace website that would meet their donation and communication
            needs, while allowing their team flexibility in design updates and
            ease of administration.
          </p>
        ),
        stackUsed: [
          { name: "Squarespace", category: "Frontend" },
          { name: "Adobe CS", category: "Design" },
        ],
        moreDetails: (
          <div className="text-gray-200">
            <p>
              Provided web consulting and management services to help the
              nonprofit effectively communicate their mission and accept
              donations online.
            </p>
            <p>
              The site is designed for ease of use and flexibility for the
              client&apos;s team.
            </p>
          </div>
        ),
        sizes: "(max-width: 1024px) 100vw, 1024px",
        thumbnailConfig: {
          useStyled: true,
          accentColor: "gold",
          bgGradient: "from-mediumCharcoal to-darkSlate",
          thumbnailType: "grandAnse",
          animationKey: "scanLine",
          projectImageUrl: GaspThumbnail.src,
        },
      },
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

  return (
    <section className="py-8 md:py-16 bg-darkSlate">
      <div className="container mx-auto px-4">
        <CardsList cards={projects} onCardOpen={openModal} />
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

                  <div className="relative w-full aspect-video mb-6 overflow-hidden rounded group">
                    <NextImage
                      src={selected.imageUrl as string}
                      alt={selected.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
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
