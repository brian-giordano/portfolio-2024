import React, { useState } from "react";
import Pill from "./Pill";
import Accordion from "./Accordion";

interface PillProps {
  text: string;
  color: "gold" | "lightCrimson" | "mysticTeal" | "silverMist";
}

interface CardProps {
  title: string;
  startDate?: string;
  endDate?: string;
  orgName?: string;
  description: string;
  imageUrl?: string;
  pills?: PillProps[];
  feature?: boolean;
  isAccordion?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  startDate,
  endDate,
  orgName,
  description,
  imageUrl,
  pills,
  feature,
  isAccordion = false,
}) => {
  const [isOpen, setIsOpen] = useState(!isAccordion);

  const toggleAccordion = () => {
    if (isAccordion) {
      setIsOpen(!isOpen);
    }
  };

  const cardContent = (
    <div className="m-4 p-4 py-2 bg-charcoal rounded text-sm">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover mb-4 rounded"
        />
      )}
      {!isAccordion && (
        <h2 className="font-primary font-semibold uppercase text-ivoryWhite tracking-wide mb-2">
          {title}
        </h2>
      )}

      {startDate && endDate && (
        <h3 className="font-subheader text-silverMist tracking-wide">
          {startDate} - {endDate}
        </h3>
      )}

      {orgName && (
        <h3 className="font-subheader text-silverMist mb-3 tracking-wide">
          {orgName}
        </h3>
      )}

      <p className="text-ivoryWhite font-primary font-light leading-relaxed mb-4">
        {description}
      </p>

      {pills && (
        <div className="flex space-x-4 mb-2">
          {pills.map((pill, index) => (
            <Pill key={index} text={pill.text} color={pill.color} />
          ))}
        </div>
      )}
    </div>
  );

  return isAccordion ? (
    <Accordion title={title}>{cardContent}</Accordion>
  ) : (
    <div className="border rounded-lg shadow-md mb-4">
      {/* <h2 className="text-xl font-primary px-4 py-2">{title}</h2> */}
      {cardContent}
    </div>
  );
};

export default Card;
