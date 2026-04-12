import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full mx-auto justify-center text-xl text-silverMist tracking-widest py-10 text-center font-medium">
      <span>BRIANGIORDANO.COM © {year}</span>
    </div>
  );
};

export default Footer;
