import React, { useEffect, useState } from "react";
import educationData from "../data/education.json";
import CardsList from "./ui/CardsList";

const EducationSection: React.FC = () => {
  interface StackUsed {
    name: string;
    category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
  }

  interface Program {
    key?: number;
    logoUrl?: string;
    title: string;
    alt: string;
    orgName: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    degree: string;
    cityTown?: string;
    locationState?: string;
    description: string | string[];
    stackUsed?: StackUsed[];
  }

  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    setPrograms(educationData as Program[]);
  }, []);

  const renderDescription = (description: string | string[]): JSX.Element => {
    if (Array.isArray(description)) {
      return (
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{description}</p>;
  };

  const cardsData = programs.map((program, index) => ({
    key: index,
    imageUrl: program.logoUrl,
    alt: program.alt,
    title: program.degree,
    orgName: program.orgName,
    startMonth: program.startMonth,
    startYear: program.startYear,
    endMonth: program.endMonth,
    endYear: program.endYear,
    description: renderDescription(program.description),
    stackUsed: program.stackUsed,
    isAccordion: false,
  }));

  return (
    <div className="education-section container mx-auto mb-10 p-4">
      <CardsList cards={cardsData} />
    </div>
  );
};

export default EducationSection;
