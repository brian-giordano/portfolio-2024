import React from "react";
import skillsData from "../data/skills.json";
import CardsList from "./ui/CardsList";
import type { CardProps } from "./ui/Card";
import type { PillCategory } from "./ui/Pill";

type Skill = {
  title: string;
  level: number;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
  subtitles?: string[];
};

const typedSkillsData = skillsData as Skill[];

const categoryOrder: Skill["category"][] = [
  "Frontend",
  "Backend",
  "Design",
  "Database",
  "DevOps",
];

const categoryLabels: Record<Skill["category"], string> = {
  Frontend: "Frontend & UI",
  Backend: "Backend & AI",
  Design: "Design & Creative",
  Database: "Databases",
  DevOps: "DevOps & Tooling",
};

const categoryDescriptions: Record<Skill["category"], string> = {
  Frontend: "Building fast, responsive, and polished user interfaces.",
  Backend: "AI pipelines, APIs, automation, and server-side logic.",
  Design: "Visual design, generative AI, and creative tooling.",
  Database: "Data modeling and storage solutions.",
  DevOps: "Version control, deployment, and developer tooling.",
};

const SkillsSection: React.FC = () => {
  const cards: CardProps[] = categoryOrder.map((cat) => {
    const skills = typedSkillsData.filter((s) => s.category === cat);
    return {
      title: categoryLabels[cat],
      alt: categoryLabels[cat],
      orgName: "",
      description: <p>{categoryDescriptions[cat]}</p>,
      stackUsed: skills.map((s) => ({
        name: s.title,
        category: s.category as PillCategory,
      })),
    };
  });

  return (
    <section id="skills" className="section-content">
      <CardsList cards={cards} />
    </section>
  );
};

export default SkillsSection;
