// components/ui/CardsList.tsx
import React from "react";
import Card, { CardProps } from "./Card";
import { motion } from "framer-motion";

type Props = {
  cards: CardProps[];
  onCardOpen?: (index: number) => void;
};

const CardsList: React.FC<Props> = ({ cards, onCardOpen }) => {
  return (
    <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-8 md:gap-y-12 justify-start">
      {cards.map((card, index) => (
        <motion.div
          key={card.title ?? index}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{
            duration: 0.45,
            delay: index * 0.06,
            type: "spring",
            stiffness: 140,
            damping: 18,
          }}
          viewport={{ once: true, margin: "-80px" }}
          className="w-full lg:w-[calc(50%-20px)] max-w-[650px] flex-none"
        >
          <Card {...card} onOpen={() => onCardOpen?.(index)} />
        </motion.div>
      ))}
    </div>
  );
};

export default CardsList;
