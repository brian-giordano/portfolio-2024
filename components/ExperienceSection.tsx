// components/ExperienceSection.tsx
import React, { useEffect, useState } from "react";
import CardsList from "./ui/CardsList"; // Import CardsList
import jobData from "../data/jobs.json"; // Import job data

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
    description: string | string[]; // Ensure this is defined
    stackUsed?: StackUsed[];
  }

  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    setJobs(jobData as Job[]);
  }, []);

  return (
    <div className="experience-section container mx-auto mb-10 p-4">
      {" "}
      {/* Added padding to the container */}
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
          description: job.description || "", // Ensure description is always defined
          stackUsed: job.stackUsed,
          isAccordion: false, // Set to false for the experience section
        }))}
      />{" "}
      {/* Use CardsList to render the jobs */}
    </div>
  );
};

export default ExperienceSection;
