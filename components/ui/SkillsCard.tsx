import React from "react";

interface Skill {
  title: string;
  level: number;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
  subtitles?: string[];
}

interface SkillsCardProps {
  skills: Skill[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  return (
    <div className="skills-card rounded text-sm grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill-item bg-charcoal rounded-lg p-4 flex flex-col hover:border-solid hover:bg-[#474757] md:p-6"
        >
          <span className="skill-title font-semibold text-ivoryWhite text-sm uppercase">
            {skill.title}
          </span>
          <div className="skill-level-container mt-2 bg-eggplant rounded h-2 relative">
            <div
              className="skill-level bg-gold rounded h-2 absolute top-0 left-0"
              style={{ width: `${skill.level * 10}%` }} // Scale level to width
            />
          </div>
          {/* <span className="skill-level-text text-silverMist">{`Level ${skill.level}`}</span> */}
          {skill.subtitles && (
            <div className="skill-subtitles text-xs text-silverMist mt-2">
              {skill.subtitles.join(", ")}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
