import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Pill from "./Pill";
import { FaChevronUp, FaChevronDown, FaExternalLinkAlt } from "react-icons/fa"; // Import external link icon

export interface StackUsed {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
}

export interface CardProps {
  imageUrl?: string | StaticImageData;
  logoUrl?: string; // For job listings
  title: string;
  alt: string;
  orgName: string;
  orgLink?: string; // Optional link for organization
  startMonth?: string;
  startYear?: string;
  endMonth?: string;
  endYear?: string;
  description: JSX.Element; // JSX type instead of string
  stackUsed?: StackUsed[];
  moreDetails?: JSX.Element; // JSX type for details
  sizes?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  logoUrl,
  title,
  alt,
  orgName,
  orgLink, // Optional orgLink for external link
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
  const [isExpanded, setIsExpanded] = useState(false); // State to track expanded view

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded view
  };

  return (
    <div className="flex flex-col bg-charcoal rounded-lg shadow-md p-4 transition-all duration-300">
      {imageSource && (
        <div className="relative w-full aspect-[1.618] mb-4">
          <Image
            src={imageSource}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded"
            sizes={sizes}
          />
        </div>
      )}
      <h2 className="font-primary font-semibold text-ivoryWhite uppercase mb-2">
        {title}
      </h2>
      <h3 className="font-subheader text-sm text-silverMist mb-2 flex items-center">
        {orgLink ? (
          <a
            href={orgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gold transition"
          >
            {orgName}
            <FaExternalLinkAlt className="ml-2" />{" "}
            {/* Show external link icon if orgLink is present */}
          </a>
        ) : (
          orgName // Just display the organization name without a link
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
      <div className="text-ivoryWhite mb-4 flex-grow font-normal text-sm">
        {description} {/* Render JSX directly */}
      </div>

      {stackUsed.length > 0 && (
        <div className="flex flex-wrap mb-4">
          {stackUsed.map((tech, index) => (
            <Pill key={index} text={tech.name} category={tech.category} />
          ))}
        </div>
      )}

      {moreDetails && (
        <div>
          <button
            onClick={toggleExpand}
            className="text-sm text-gold hover:text-ivoryWhite transition duration-200 ease-in-out flex items-center"
          >
            {isExpanded ? "Less Details" : "More Details"}
            {isExpanded ? (
              <FaChevronUp className="ml-2" /> // Chevron up when expanded
            ) : (
              <FaChevronDown className="ml-2" /> // Chevron down when collapsed
            )}
          </button>
          {isExpanded && (
            <div className="mt-4 text-ivoryWhite text-sm transition-all duration-300 ease-in-out">
              {moreDetails} {/* Render JSX directly */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
