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
    <div className="flex flex-wrap gap-x-12 gap-y-10 justify-center">
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
          className="w-full lg:w-[calc(50%-24px)] max-w-[540px] flex-none"
        >
          <Card {...card} onOpen={() => onCardOpen?.(index)} />
        </motion.div>
      ))}
    </div>
  );
};

export default CardsList;
