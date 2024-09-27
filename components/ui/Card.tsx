// components/ui/Card.tsx
import React from "react";
import Pill from "./Pill";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface StackUsed {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
}

export interface CardProps {
  imageUrl?: string | StaticImageData; // Optional
  title: string; // Required
  alt: string; // Required
  orgName: string; // Required
  description: string | string[]; // Required
  stackUsed?: StackUsed[]; // Optional
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  alt,
  orgName,
  description,
  stackUsed = [],
}) => {
  return (
    <div className="flex flex-col bg-charcoal rounded-lg shadow-md p-4 h-full lg:p-6">
      {" "}
      {/* Consistent padding */}
      {imageUrl && (
        <div className="relative w-full aspect-[1.618] mb-4">
          {" "}
          {/* Maintain golden ratio */}
          <Image
            src={imageUrl}
            alt={alt}
            layout="fill" // Use fill to cover the parent div
            className="absolute top-0 left-0 w-full h-full object-cover rounded" // Cover the parent div
          />
        </div>
      )}
      <h2 className="font-primary font-semibold text-ivoryWhite uppercase mb-2">
        {title}
      </h2>
      <h3 className="font-subheader text-silverMist mb-2">{orgName}</h3>
      <div className="text-ivoryWhite mb-4 flex-grow">
        {" "}
        {/* Allow description to grow */}
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
      {stackUsed.length > 0 && (
        <div className="flex flex-wrap">
          {stackUsed.map((tech, index) => (
            <Pill key={index} text={tech.name} category={tech.category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
