// components/ui/Card.tsx
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Pill from "./Pill";

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
  startMonth?: string;
  startYear?: string;
  endMonth?: string;
  endYear?: string;
  degree?: string;
  discipline?: string;
  description: string | string[];
  stackUsed?: StackUsed[];
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  logoUrl,
  title,
  alt,
  orgName,
  startMonth,
  startYear,
  endMonth,
  endYear,
  description,
  stackUsed = [],
}) => {
  const imageSource = imageUrl || logoUrl;

  return (
    <div className="flex flex-col bg-charcoal rounded-lg shadow-md p-4 h-full">
      {imageSource && (
        <div className="relative w-full aspect-[1.618] mb-4">
          <Image
            src={imageSource}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      )}
      <h2 className="font-primary font-semibold text-ivoryWhite uppercase mb-2">
        {title}
      </h2>
      <h3 className="font-subheader text-sm text-silverMist mb-2">{orgName}</h3>
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
        {Array.isArray(description) ? (
          <ul className="list-disc pl-5 space-y-3">
            {description.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
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
