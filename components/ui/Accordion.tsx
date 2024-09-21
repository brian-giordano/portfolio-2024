import React, { useState } from "react";

interface AccordionProps {
  title?: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg bg-charcoal">
      <button
        onClick={toggleAccordion}
        className="w-full px-4 py-2 bg-black hover:bg-charcoal focus:outline-none text-lg text-left font-primary font-semibold uppercase text-ivoryWhite tracking-wide"
      >
        {title}
      </button>
      {isOpen && <div className="px-4 py-0 bg-charcoal">{children}</div>}
    </div>
  );
};

export default Accordion;
