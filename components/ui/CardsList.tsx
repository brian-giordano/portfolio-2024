import React from "react";
import Card, { CardProps } from "./Card";

const CardsList: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-6">
      {" "}
      {/* Changed to flexbox with gap */}
      {cards.map((card, index) => (
        <div key={index} className="w-full lg:w-[calc(50%-1.5rem)]">
          {" "}
          {/* Each card takes half width on large screens */}
          <Card
            imageUrl={card.imageUrl || card.logoUrl} // Handle both project and job images
            title={card.title}
            alt={card.alt}
            orgName={card.orgName}
            orgLink={card.orgLink}
            startMonth={card.startMonth}
            startYear={card.startYear}
            endMonth={card.endMonth}
            endYear={card.endYear}
            description={card.description}
            stackUsed={card.stackUsed}
            moreDetails={card.moreDetails}
            sizes={card.sizes}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsList;
