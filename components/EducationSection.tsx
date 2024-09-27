import React, { useEffect, useState } from "react";
import educationData from "../data/education.json";
import Card from "./ui/Card";

const EducationSection: React.FC = () => {
  interface StackUsed {
    name: string;
    category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
  }

  interface Program {
    imageUrl?: string; // Optional
    alt: string;
    orgName: string;
    startMonth?: string; // Optional
    startYear?: string; // Optional
    endMonth?: string; // Optional
    endYear?: string; // Optional
    cityTown?: string; // Optional
    locationState?: string; // Optional
    description?: string | string[]; // Optional
    stackUsed?: StackUsed[]; // Optional for experience section
    degree?: string; // Optional for education section
    discipline?: string; // Optional for education section
    isAccordion: boolean;
  }

  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    setPrograms(educationData as Program[]);
  }, []);

  return (
    <div className="education-section container mx-auto mb-10">
      {programs.map((program, index) => (
        <Card
          key={index}
          orgName={program.orgName}
          alt={program.alt}
          startMonth={program.startMonth}
          startYear={program.startYear}
          endMonth={program.endMonth}
          endYear={program.endYear}
          cityTown={program.cityTown}
          locationState={program.locationState}
          description={program.description}
          degree={program.degree}
          discipline={program.discipline}
          isAccordion={false} // Set to false for the experience section
        />
      ))}
    </div>
  );
};

export default EducationSection;
