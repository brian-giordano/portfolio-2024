// components/ui/CardsList.tsx
import React from "react";
import Card, { CardProps } from "./Card"; // Import Card and CardProps

const CardsList: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
      {" "}
      {/* Responsive grid layout */}
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsList;
