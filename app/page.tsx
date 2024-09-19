"use client";

import React from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Header from "@/components/ui/Header";
import SectionHeader from "@/components/ui/SectionHeader";
import CenteredImage from "@/components/ui/CenteredImage";
import mainImage from "../assets/images/potion-bottle.svg";
import SwipeUpOverlay from "@/components/ui/SwipeUpOverlay";
import { PiCaretDoubleUpBold } from "react-icons/pi";

const Home: React.FC = () => {
  console.log(mainImage);

  return (
    <div className="p-0">
      <Header name="Brian Giordano" />

      <main className="pt-12">
        <div className="flex justify-center">
          <h2 className="text-lg font-subheader text-silverMist mt-8">
            Digital Alchemist
          </h2>
        </div>
        <CenteredImage
          src={mainImage}
          alt="illustrated potion bottle"
          className="pt-12"
        />

        <SwipeUpOverlay
          textLeft="Explore"
          textRight="Further"
          icon={PiCaretDoubleUpBold}
        />

        <section
          id="home"
          className="min-h-screen bg-gray-100 flex items-center justify-center"
        >
          {/* <h2 className="text-4xl font-primary text-ivoryWhite">Home</h2> */}
          <SectionHeader
            name="Home"
            bandColor="lightCrimson"
            subheader="Subheader"
          />
        </section>
        <section
          id="experience"
          className="flex flex-col min-h-screen items-start"
        >
          <SectionHeader
            name="Experience"
            bandColor="mysticTeal"
            subheader="Work Experience"
          />

          <Card
            title="Card Title"
            startDate="5/2021"
            endDate="5/2023"
            orgName="Organization Name"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas hendrerit justo turpis dapibus nam finibus ac. Nisl montes libero at bibendum vulputate magnis. 

• Curabitur condimentum nam sollicitudin fusce tortor bibendum vel ornare. Donec augue donec pharetra morbi risus. 

• Hac conubia nec suspendisse tellus proin tempor. Senectus orci commodo aenean sollicitudin ex, pretium eu cubilia."
            pills={[
              { text: "React", color: "mysticTeal" },
              { text: "Typescript", color: "gold" },
            ]}
            isAccordion={false}
          />
        </section>
        <section
          id="experience"
          className="min-h-screen bg-gray-100 flex items-start justify-center"
        >
          <SectionHeader
            name="Experience"
            bandColor="mysticTeal"
            subheader="Education"
          />
        </section>
        <section
          id="skills"
          className="min-h-screen bg-gray-100 flex items-start justify-center"
        >
          <SectionHeader name="Skills" bandColor="gold" />
        </section>
        <section
          id="my-work"
          className="min-h-screen bg-gray-100 flex items-start justify-center"
        >
          <SectionHeader name="My Work" bandColor="lightCrimson" />
        </section>

        <section
          id="about"
          className="min-h-screen bg-white flex items-start justify-center"
        >
          <SectionHeader name="About" bandColor="mysticTeal" />
        </section>

        <section
          id="contact"
          className="min-h-screen bg-gray-100 flex items-start justify-center"
        >
          <SectionHeader name="Contact" bandColor="gold" />
        </section>
      </main>
    </div>
  );
};

export default Home;
