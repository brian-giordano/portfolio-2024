import React, { useEffect, useState } from "react";
import CardsList from "./ui/CardsList";
import jobs from "../data/jobs.json";
import type { PillCategory } from "./ui/Pill";

const ExperienceSection: React.FC = () => {
  interface StackUsed {
    name: string;
    category: PillCategory;
  }

  interface Job {
    logoUrl?: string;
    title: string;
    alt?: string;
    orgName: string;
    startMonth: string;
    startYear: string;
    endMonth?: string;
    endYear?: string;
    cityTown?: string;
    locationState?: string;
    description: string[];
    stackUsed?: StackUsed[];
  }

  const [jobsState, setJobsState] = useState<Job[]>([]);

  useEffect(() => {
    // Safe assertion: JSON categories are strings matching PillCategory union
    setJobsState(jobs as Job[]);
  }, []);

  const renderDescription = (description: string[]): JSX.Element => {
    return (
      <ul className="list-disc pl-5 space-y-3 text-silverMist text-sm leading-relaxed hyphens-auto">
        {description.map((item, index) => (
          <li key={index} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container mx-auto mb-10 p-4">
      <CardsList
        cards={jobsState.map((job) => ({
          title: job.title,
          alt: job.alt || `${job.orgName} - ${job.title}`,
          orgName: job.orgName,
          startMonth: job.startMonth,
          startYear: job.startYear,
          endMonth: job.endMonth,
          endYear: job.endYear,
          description: renderDescription(job.description),
          stackUsed: job.stackUsed,
        }))}
      />
    </div>
  );
};

export default ExperienceSection;
