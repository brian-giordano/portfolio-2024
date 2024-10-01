// components/ui/CardsList.tsx
import React from "react";
import Card, { CardProps } from "./Card";

const CardsList: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl || card.logoUrl} // Handle both project and job images
          title={card.title}
          alt={card.alt}
          orgName={card.orgName}
          startMonth={card.startMonth}
          startYear={card.startYear}
          endMonth={card.endMonth}
          endYear={card.endYear}
          description={card.description}
          stackUsed={card.stackUsed}
        />
      ))}
    </div>
  );
};

export default CardsList;
