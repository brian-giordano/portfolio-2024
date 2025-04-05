// components/ui/Card.tsx
import React, { useState } from "react";
import Image from "next/legacy/image";
import { StaticImageData } from "next/legacy/image";
import { FaChevronRight, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Pill from "./Pill";

export interface StackUsed {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
}

export interface CardProps {
  imageUrl?: string | StaticImageData;
  logoUrl?: string;
  title: string;
  alt: string;
  orgName: string;
  orgLink?: string;
  startMonth?: string;
  startYear?: string;
  endMonth?: string;
  endYear?: string;
  description: JSX.Element;
  stackUsed?: StackUsed[];
  moreDetails?: JSX.Element;
  sizes?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  logoUrl,
  title,
  alt,
  orgName,
  orgLink,
  startMonth,
  startYear,
  endMonth,
  endYear,
  description,
  stackUsed = [],
  moreDetails,
  sizes = "100vw",
}) => {
  const imageSource = imageUrl || logoUrl;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isProjectCard = !startMonth && !startYear && !endMonth && !endYear;

  // Get color classes based on your project's color palette
  const getPillColorClass = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-mysticTeal text-darkSlate";
      case "Backend":
        return "bg-lightCrimson text-darkSlate";
      case "Database":
        return "bg-gold text-darkSlate";
      case "DevOps":
        return "bg-silverMist text-darkSlate";
      case "Design":
        return "bg-lavender text-darkSlate";
      default:
        return "bg-mediumCharcoal text-ivoryWhite";
    }
  };

  return (
    <>
      <motion.div
        className="flex flex-col bg-charcoal rounded-lg shadow-md p-4 transition-all duration-300 h-full"
        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
      >
        {imageSource && (
          <div className="relative w-full aspect-[1.618] mb-4 overflow-hidden rounded group">
            <Image
              src={imageSource}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
              sizes={sizes}
            />
            {orgLink && (
              <div className="absolute inset-0 bg-darkSlate bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <a
                  href={orgLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold text-darkSlate font-bold py-2 px-4 rounded-full flex items-center"
                >
                  Visit Site <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            )}
          </div>
        )}
        <h2 className="font-primary font-semibold text-gold uppercase mb-2">
          {title}
        </h2>
        <h3 className="font-subheader text-sm text-ivoryWhite mb-2 flex items-center">
          {orgLink && isProjectCard ? (
            <div className="flex flex-col">
              <span className="mb-1">{orgName}</span>
              <a
                href={orgLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-xs flex items-center hover:underline"
              >
                Visit Project <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>
          ) : orgLink ? (
            <a
              href={orgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-gold transition"
            >
              {orgName}
              <FaExternalLinkAlt className="ml-2" />
            </a>
          ) : (
            orgName
          )}
        </h3>
        {(startMonth || startYear) && (
          <p className="font-subheader text-sm text-silverMist mb-2">
            {`${startMonth || ""}${startMonth && startYear ? "/" : ""}${
              startYear || ""
            }`}
            {(endMonth || endYear) &&
              ` - ${endMonth || ""}${endMonth && endYear ? "/" : ""}${
                endYear || ""
              }`}
          </p>
        )}
        <div className="text-silverMist mb-4 flex-grow font-normal text-sm">
          {description}
        </div>
        {stackUsed.length > 0 && (
          <div className="flex flex-wrap gap-2.5 mb-4">
            {stackUsed.map((tech, index) => (
              <Pill key={index} text={tech.name} category={tech.category} />
            ))}
          </div>
        )}
        {moreDetails && (
          <div className="mt-auto pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-gold hover:text-ivoryWhite transition duration-200 ease-in-out flex items-center justify-center w-full py-2 rounded-md hover:bg-mediumCharcoal"
            >
              More Details <FaChevronRight className="ml-2" />
            </button>
          </div>
        )}
      </motion.div>

      {/* Modal for detailed content */}
      <AnimatePresence>
        {isModalOpen && moreDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-darkSlate bg-opacity-90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="bg-charcoal p-6 md:p-8 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-primary font-bold text-gold text-2xl uppercase">
                    {title}
                  </h2>
                  <h3 className="font-subheader text-ivoryWhite text-lg mt-1 flex items-center">
                    {orgLink ? (
                      <a
                        href={orgLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-gold transition"
                      >
                        {orgName}
                        <FaExternalLinkAlt className="ml-2" />
                      </a>
                    ) : (
                      orgName
                    )}
                  </h3>
                  {(startMonth || startYear) && (
                    <p className="font-subheader text-sm text-silverMist mt-1">
                      {`${startMonth || ""}${
                        startMonth && startYear ? "/" : ""
                      }${startYear || ""}`}
                      {(endMonth || endYear) &&
                        ` - ${endMonth || ""}${endMonth && endYear ? "/" : ""}${
                          endYear || ""
                        }`}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-silverMist hover:text-gold transition-colors p-2"
                  aria-label="Close modal"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {imageSource && (
                <div className="relative w-full aspect-video mb-6 overflow-hidden rounded">
                  <Image
                    src={imageSource}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              )}

              {stackUsed.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-ivoryWhite font-semibold mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stackUsed.map((tech, index) => (
                      <span
                        key={index}
                        className={`inline-block px-3 py-1 font-subheader text-sm font-semibold rounded-full ${getPillColorClass(
                          tech.category
                        )}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-ivoryWhite">{moreDetails}</div>

              <div className="mt-8 flex justify-end">
                {orgLink && (
                  <a
                    href={orgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-darkSlate font-bold py-2 px-6 rounded-md mr-4 flex items-center hover:bg-opacity-90 transition-opacity"
                  >
                    Visit Site <FaExternalLinkAlt className="ml-2" />
                  </a>
                )}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-mediumCharcoal text-ivoryWhite py-2 px-6 rounded-md hover:bg-opacity-80 transition-opacity"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
