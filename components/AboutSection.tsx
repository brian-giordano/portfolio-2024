import React from "react";
import Image from "next/image";
import AboutImage from "../assets/images/headshot-drax.png";
import Card from "./ui/Card";

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto mb-10 md:p-4">
      <div className="flex flex-col m-4 p-4 bg-charcoal rounded-lg text-sm">
        <div className="flex justify-center h-1/2">
          <Image
            src={AboutImage} // Pass the AboutImage directly
            alt="About Me" // Provide a meaningful alt text
            // objectFit="cover"
            className="w-full h-full overflow-hidden rounded p-4"
          />
        </div>
        <div className="w-full p-4">
          <h2 className="font-primary text-ivoryWhite font-semibold uppercase mb-2">
            How I Got Here
          </h2>
          <p className="font-primary text-ivoryWhite font-light leading-relaxed mb-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas
            hendrerit justo turpis dapibus nam finibus ac. Nisl montes libero at
            bibendum vulputate magnis.
          </p>
          <p className="font-primary text-ivoryWhite font-light leading-relaxed mb-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas
            hendrerit justo turpis dapibus nam finibus ac. Nisl montes libero at
            bibendum vulputate magnis.
          </p>

          <h2 className="font-primary text-ivoryWhite font-semibold uppercase mt-4 mb-2">
            Where I'm going...
          </h2>
          <p className="font-primary text-ivoryWhite font-light leading-relaxed mb-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas
            hendrerit justo turpis dapibus nam finibus ac. Nisl montes libero at
            bibendum vulputate magnis.
          </p>
          <p className="ffont-primary text-ivoryWhite font-light leading-relaxed mb-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas
            hendrerit justo turpis dapibus nam finibus ac. Nisl montes libero at
            bibendum vulputate magnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
