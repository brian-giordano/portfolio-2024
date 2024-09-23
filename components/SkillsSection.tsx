import React from "react";
import skillsData from "../data/skills.json"; // Ensure this path is correct
import SkillsCard from "./ui/SkillsCard"; // Ensure this path is correct

// Type assertion for skillsData
const typedSkillsData = skillsData as Array<{
  title: string;
  level: number;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design"; // Ensure these match your categories
  subtitles?: string[];
}>;

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-section container mx-auto rounded p-4 m-4 md:p-8">
      <SkillsCard skills={typedSkillsData} />
    </div>
  );
};

export default SkillsSection;
