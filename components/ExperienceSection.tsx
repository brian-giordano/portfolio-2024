// components/ExperienceSection.tsx
import React, { useEffect, useState } from "react";
import CardsList from "./ui/CardsList";
import jobData from "../data/jobs.json";

const ExperienceSection: React.FC = () => {
  interface StackUsed {
    name: string;
    category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
  }

  interface Job {
    logoUrl: string;
    title: string;
    alt: string;
    orgName: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    cityTown?: string;
    locationState?: string;
    description: string | string[];
    stackUsed?: StackUsed[];
  }

  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    setJobs(jobData as Job[]);
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

  return (
    <div className="experience-section container mx-auto mb-10 p-4">
      <CardsList
        cards={jobs.map((job) => ({
          imageUrl: job.logoUrl,
          title: job.title,
          alt: job.alt,
          orgName: job.orgName,
          startMonth: job.startMonth,
          startYear: job.startYear,
          endMonth: job.endMonth,
          endYear: job.endYear,
          description: renderDescription(job.description),
          stackUsed: job.stackUsed,
          isAccordion: false,
        }))}
      />
    </div>
  );
};

export default ExperienceSection;
