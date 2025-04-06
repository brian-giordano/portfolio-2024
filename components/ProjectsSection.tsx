// components/ProjectsSection.tsx (updated)
import React from "react";
import CardsList from "./ui/CardsList";
import CryptoDashboardImg from "../assets/images/projects-crypto-dashboard.png";
import GaspImg from "../assets/images/projects-gasp.png";
import PortfolioImage from "../assets/images/projects-portfolio.png";
import { StackUsed, CardProps } from "./ui/Card"; // Import both StackUsed and CardProps types

const ProjectsSection: React.FC = () => {
  const PortfolioSkills: StackUsed[] = [
    { name: "React", category: "Frontend" },
    { name: "Typescript", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Adobe CS", category: "Design" },
  ];

  const GaspSkills: StackUsed[] = [
    { name: "Squarespace", category: "Frontend" },
    { name: "Adobe CS", category: "Design" },
  ];

  // Define an array of projects with explicit type annotation
  const projects: CardProps[] = [
    {
      imageUrl: CryptoDashboardImg,
      title: "Crypto AI Dashboard",
      alt: "Crypto AI Dashboard interface screenshot",
      orgName: "Full Stack Development",
      orgLink: "https://crypto-ai-dashboard-lovat.vercel.app/",
      description: (
        <p>
          A comprehensive cryptocurrency dashboard that combines real-time
          market data with AI-powered sentiment analysis. Users can track the
          top 25 cryptocurrencies, visualize market trends, and get AI-generated
          insights through a conversational interface.
        </p>
      ),
      stackUsed: [
        { name: "Next.js", category: "Frontend" },
        { name: "TypeScript", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "Shadcn UI", category: "Frontend" },
        { name: "OpenAI API", category: "Backend" },
        { name: "CoinGecko API", category: "Backend" },
        { name: "Vercel", category: "DevOps" },
      ],
      moreDetails: (
        <div className="space-y-8">
          {/* Description Section */}
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-ivoryWhite">
              Description
            </h3>
            <p className="text-ivoryWhite text-base leading-relaxed">
              The Crypto AI Dashboard is a personal project born from my
              enthusiasm for cryptocurrency and desire to create a unified
              platform for market analysis. It combines{" "}
              <strong>real-time market data</strong> with
              <strong> AI-powered insights</strong> to help users make more
              informed decisions about their crypto investments.
            </p>
          </div>

          {/* Key Features Section */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-ivoryWhite">
              Key Features
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-gold flex-shrink-0 w-5">•</span>
                <div className="flex-1">
                  <strong>Real-time Market Tracking:</strong>
                  <span className="text-ivoryWhite block mt-1">
                    Live price updates, market cap, and volume data for the top
                    25 cryptocurrencies
                  </span>
                </div>
              </li>
              <li className="flex">
                <span className="text-gold flex-shrink-0 w-5">•</span>
                <div className="flex-1">
                  <strong>Interactive Charts:</strong>
                  <span className="text-ivoryWhite block mt-1">
                    Visual representation of price movements and market trends
                    over customizable time periods
                  </span>
                </div>
              </li>
              <li className="flex">
                <span className="text-gold flex-shrink-0 w-5">•</span>
                <div className="flex-1">
                  <strong>AI-Powered Sentiment Analysis:</strong>
                  <span className="text-ivoryWhite block mt-1">
                    Natural language processing to analyze market sentiment from
                    various sources
                  </span>
                </div>
              </li>
              <li className="flex">
                <span className="text-gold flex-shrink-0 w-5">•</span>
                <div className="flex-1">
                  <strong>Conversational Interface:</strong>
                  <span className="text-ivoryWhite block mt-1">
                    Ask questions about specific cryptocurrencies and receive
                    AI-generated insights
                  </span>
                </div>
              </li>
              <li className="flex">
                <span className="text-gold flex-shrink-0 w-5">•</span>
                <div className="flex-1">
                  <strong>Responsive Design:</strong>
                  <span className="text-ivoryWhite block mt-1">
                    Optimized for both desktop and mobile viewing
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Technical Implementation Section */}
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-ivoryWhite">
              Technical Implementation
            </h3>
            <p className="text-ivoryWhite text-base leading-relaxed">
              Built with <strong>Next.js</strong> and{" "}
              <strong>TypeScript</strong> for a robust frontend experience, the
              dashboard leverages
              <strong> Tailwind CSS</strong> and <strong>Shadcn UI</strong>{" "}
              components for a clean, modern interface. The backend integrates
              with <strong>CoinGecko API</strong> for real-time market data and{" "}
              <strong>OpenAI&apos;s API</strong> for sentiment analysis and
              conversational capabilities.
            </p>
          </div>

          {/* Challenges Section */}
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-ivoryWhite">
              Challenges
            </h3>
            <p className="text-ivoryWhite text-base leading-relaxed">
              A significant challenge was optimizing the real-time data fetching
              to maintain performance while providing up-to-date information. I
              implemented <strong>efficient caching strategies</strong> and{" "}
              <strong>selective updates</strong> to minimize API calls while
              keeping the dashboard responsive. Additionally, fine-tuning the AI
              prompts to provide relevant financial insights required careful
              iteration and testing.
            </p>
          </div>
        </div>
      ),
    },
    {
      imageUrl: PortfolioImage,
      title: "Portfolio Redesign (This website!)",
      alt: "Portfolio website screenshot",
      orgName: "Full Stack Development",
      orgLink: "", // Add empty string for orgLink if not provided
      description: (
        <p>
          This portfolio website represents my creative vision brought to life,
          designed and built entirely by myself. It showcases my work through
          custom animations, interactive elements, and thoughtful UI design that
          reflects my personal aesthetic and technical abilities.
        </p>
      ),
      stackUsed: PortfolioSkills,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      moreDetails: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">Description</h3>
            <p className="mt-2">
              After years of building websites to client specifications,
              creating my own portfolio was a refreshing opportunity to build
              something entirely to my own standards. This site serves as both a
              showcase of my work and a testament to my design philosophy and
              technical capabilities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Key Features</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              <li>
                <strong>Custom SVG Animations:</strong> Hand-crafted SVG
                elements with synchronized animations that bring visual interest
                to the site
              </li>
              <li>
                <strong>Responsive Layout:</strong> Thoughtfully designed for
                optimal viewing across all device sizes
              </li>
              <li>
                <strong>Dark Mode Implementation:</strong> Color scheme that
                adapts to user preferences while maintaining visual hierarchy
              </li>
              <li>
                <strong>Interactive Project Cards:</strong> Engaging hover
                states and smooth transitions between project details
              </li>
              <li>
                <strong>Performance Optimization:</strong> Lazy-loading, code
                splitting, and optimized assets for fast load times
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">Technical Implementation</h3>
            <p className="mt-2">
              Built with Next.js and TypeScript for type safety and improved
              developer experience, the site leverages Framer Motion for fluid
              animations and Tailwind CSS for rapid styling. I implemented
              custom hooks for animations and state management, and designed all
              visual elements from scratch to ensure a unique, cohesive
              experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Personal Touches</h3>
            <p className="mt-2">
              The animated potion bottle in the hero section represents my
              approach to development—combining different elements to create
              something greater than the sum of its parts. Each project card
              features custom transitions that reflect the nature of the work,
              and the overall design balances professionalism with personality.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Reflections</h3>
            <p className="mt-2">
              Building my own portfolio allowed me to experiment with techniques
              It&apos;ve wanted to try but rarely had the opportunity to
              implement in client work. It was liberating to make design
              decisions based solely on my preferences while still adhering to
              accessibility and performance best practices. This project
              reinforced my belief that the best work happens when technical
              skill meets creative freedom.
            </p>
          </div>
        </div>
      ),
    },
    {
      imageUrl: GaspImg,
      title: "Grand Anse Surgery Project",
      alt: "Grand Anse Surgery Project website screenshot",
      orgName: "Web Consulting & Management",
      orgLink: "https://www.grandansesurgeryproject.org",
      description: (
        <p>
          I consulted with the Grand Anse Surgery Project to curate a
          Squarespace website that would meet their donation and communication
          needs, while allowing their team flexibility in design updates and
          ease of administration.
        </p>
      ),
      stackUsed: GaspSkills,
      moreDetails: (
        <>
          <h3>Key Responsibilities:</h3>
          <ul>
            <li>
              Curated and customized Squarespace templates for GASP&apos;s
              website
            </li>
            <li>
              Selected compelling photos from GASP footage to enhance donor
              engagement and increase donations
            </li>
            <li>
              Provided ongoing site administration and updates as needed by the
              GASP team
            </li>
            <li>
              Designed a professionally branded donor pamphlet for the
              organization&apos;s holiday fund drive
            </li>
          </ul>

          <h3>Outcome/Impact:</h3>
          <p>
            The final website offered a user-friendly interface for both the
            GASP team and potential donors, significantly improving their online
            presence. The compelling design and user experience facilitated
            their holiday fund drive, which raised awareness and encouraged
            donations for their important cause.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="projects" className="py-16 bg-darkSlate">
      <div className="container mx-auto px-4">
        <CardsList cards={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
