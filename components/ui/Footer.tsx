import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full mx-auto justify-center text-sm text-silverMist tracking-wide py-6 text-center">
      <span>BrianGiordano.com © {year}</span>
    </div>
  );
};

export default Footer;
