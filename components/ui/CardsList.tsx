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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 justify-items-center">
      {cards.map((card, index) => (
        <motion.div
          key={card.title ?? index}
          initial={{ y: 20 }} // removed opacity: 0
          whileInView={{ y: 0 }} // removed opacity: 1
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{
            duration: 0.45,
            delay: index * 0.06,
            type: "spring",
            stiffness: 140,
            damping: 18,
          }}
          viewport={{ once: true, margin: "-80px" }}
          className="w-full max-w-[540px]"
        >
          <Card {...card} onOpen={() => onCardOpen?.(index)} />
        </motion.div>
      ))}
    </div>
  );
};

export default CardsList;
