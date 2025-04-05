// Updated CardsList.tsx with modern grid layout
import React from "react";
import Card, { CardProps } from "./Card";
import { motion } from "framer-motion";

const CardsList: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="h-full"
        >
          <Card {...card} />
        </motion.div>
      ))}
    </div>
  );
};

export default CardsList;
