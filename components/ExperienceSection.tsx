import React, { useEffect, useState } from "react";
import jobData from "../data/jobs.json";
import Card from "./ui/Card";

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
    description?: string | string[];
    stackUsed?: StackUsed[];
  }

  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    setJobs(jobData as Job[]);
  }, []);

  return (
    <div className="experience-section container mx-auto mb-10">
      {jobs.map((job, index) => (
        <Card
          key={index}
          imageUrl={job.logoUrl}
          title={job.title}
          alt={job.alt}
          orgName={job.orgName}
          startMonth={job.startMonth}
          startYear={job.startYear}
          endMonth={job.endMonth}
          endYear={job.endYear}
          cityTown={job.cityTown}
          locationState={job.locationState}
          description={job.description}
          stackUsed={job.stackUsed}
          isAccordion={false} // Set to false for the experience section
        />
      ))}
    </div>
  );
};

export default ExperienceSection;
