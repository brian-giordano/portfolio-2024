// components/ProjectSection.tsx
import React from "react";
import CardsList from "./ui/CardsList"; // Import CardsList
import GaspImg from "../assets/images/projects-gasp.png";
import PortfolioImage from "../assets/images/projects-portfolio.png";
import { StackUsed } from "./ui/Card"; // Import StackUsed type

const ProjectSection: React.FC = () => {
  const PortfolioSkills: StackUsed[] = [
    { name: "React", category: "Frontend" },
    { name: "Typescript", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Adobe CS", category: "Design" },
  ];

  const GaspSkills: StackUsed[] = [
    { name: "Squarespace", category: "Frontend" },
    { name: "Adobe CS", category: "Design" },
  ];

  // Define an array of projects
  const projects = [
    {
      imageUrl: PortfolioImage,
      title: "Full Stack Development",
      alt: "alt text",
      orgName: "Brian Giordano Portfolio Redesign (This website!)",
      description:
        "After a while of having a dated portfolio website, I decided to apply the best practices that I've come to master and love.",
      stackUsed: PortfolioSkills,
    },
    {
      imageUrl: GaspImg,
      title: "Web Consulting & Management",
      alt: "alt text",
      orgName: "Grand Anse Surgery Project",
      description:
        "The Grand Anse Surgery Project is a group of health professionals who think holistically and passionately about society’s obligation to provide quality surgical care for all.",
      stackUsed: GaspSkills,
    },
  ];

  return (
    <div className="container mx-auto mb-10 p-4">
      <CardsList cards={projects} />{" "}
      {/* Use CardsList to render the projects */}
    </div>
  );
};

export default ProjectSection;
