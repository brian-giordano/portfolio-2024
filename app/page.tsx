"use client";

import React from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="p-4 px-6">
      <h1 className="font-primary text-3xl text-ivoryWhite uppercase font-extrabold mb-4">
        Brian Giordano
      </h1>
      {/* <Button label="Primary Button" onClick={handleClick} variant="primary" /> */}
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
        isAccordion={true}
      />
    </div>
  );
}
