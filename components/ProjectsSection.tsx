import React, { useState, useEffect } from "react";
import Card from "./ui/Card";
import GaspImg from "../assets/images/projects-gasp.png";
import PortfolioImage from "../assets/images/projects-portfolio.png";

const ProjectSection: React.FC = () => {
  interface StackUsed {
    name: string;
    category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
  }

  interface Project {
    imageUrl?: string;
    title: string;
    orgName: string;
    description: string | string[];
    stackUsed?: StackUsed[];
  }

  const [project, setProjects] = useState<Project[]>([]);

  const PortfolioSkills: { name: string; category: "Frontend" | "Design" }[] = [
    { name: "React", category: "Frontend" },
    { name: "Typescript", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Adobe CS", category: "Design" },
  ];

  const GaspSkills: { name: string; category: "Frontend" | "Design" }[] = [
    { name: "Squarespace", category: "Frontend" },
    { name: "Adobe CS", category: "Design" },
  ];

  return (
    <>
      <Card
        imageUrl={PortfolioImage}
        title="Full Stack Development"
        alt="alt text"
        orgName="Brian Giordano Portfolio Redesign (This website!)"
        description="After a while of having a dated portfolio website, I decided to apply the best-practices that I've come to master and love."
        stackUsed={PortfolioSkills}
        isAccordion={false} // Set to false for the experience section
      />

      <Card
        imageUrl={GaspImg}
        title="Web Consulting & Management"
        alt="alt text"
        orgName="Grand Anse Surgery Project"
        description="The Grand Anse Surgery Project is a group of health professionals who think holistically and passionately about society’s obligation to provide quality surgical care for all. GASP and I worked together on the website, which made use of Squarespace for ease of management and billing. Along with consulting through the web project, I have managed the website and email as well as designed and produced print materials for fund raising."
        stackUsed={GaspSkills}
        isAccordion={false} // Set to false for the experience section
      />
    </>
  );
};

export default ProjectSection;
