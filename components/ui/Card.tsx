import React, { useState } from "react";
import Pill from "./Pill";
import Accordion from "./Accordion";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface StackUsed {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
}

interface CardProps {
  imageUrl?: string | StaticImageData; // Optional
  title?: string; // Optional
  alt: string;
  orgName: string;
  startMonth?: string; // Optional
  startYear?: string; // Optional
  endMonth?: string; // Optional
  endYear?: string; // Optional
  cityTown?: string; // Optional
  locationState?: string; // Optional
  description?: string | string[]; // Optional
  stackUsed?: StackUsed[]; // Optional for experience section
  degree?: string; // Optional for education section
  discipline?: string; // Optional for education section
  isAccordion: boolean;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  alt,
  orgName,
  startMonth,
  startYear,
  endMonth,
  endYear,
  cityTown,
  locationState,
  description,
  stackUsed = [],
  degree,
  discipline,
  isAccordion = false,
}) => {
  const [isOpen, setIsOpen] = useState(!isAccordion);

  const toggleAccordion = () => {
    if (isAccordion) {
      setIsOpen(!isOpen);
    }
  };

  const cardContent = (
    <div className="m-4 p-4 bg-charcoal rounded text-sm">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={alt}
          className="w-full h-48 object-cover mb-4 rounded"
          layout="responsive"
        />
      )}
      {!isAccordion && (
        <>
          {degree && discipline ? (
            <h2 className="font-primary font-semibold uppercase text-ivoryWhite tracking-wide mb-2">
              {degree} in {discipline}
            </h2>
          ) : (
            <h2 className="font-primary font-semibold uppercase text-ivoryWhite tracking-wide mb-2">
              {title}
            </h2>
          )}
        </>
      )}

      {(startMonth || startYear || endMonth || endYear) && (
        <h3 className="font-subheader text-silverMist tracking-wide">
          {startMonth && startYear ? `${startMonth}/${startYear}` : ""}
          {endMonth && endYear ? ` - ${endMonth}/${endYear}` : ""}
        </h3>
      )}

      {orgName && (
        <h3 className="font-subheader text-silverMist mb-3 tracking-wide">
          {orgName}
        </h3>
      )}

      {description && (
        <div className="text-ivoryWhite font-primary font-light leading-relaxed mb-4">
          {Array.isArray(description) ? (
            <ul className="list-disc pl-5">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
      )}

      {stackUsed.length > 0 && (
        <div className="mt-2">
          <div className="flex flex-wrap">
            {stackUsed.map((tech, index) => (
              <Pill key={index} text={tech.name} category={tech.category} />
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return isAccordion ? (
    <Accordion title={title}>{cardContent}</Accordion>
  ) : (
    <div className="rounded-lg shadow-md mx-4 mb-6">{cardContent}</div>
  );
};

export default Card;
