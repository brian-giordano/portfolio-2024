import React from "react";

export type PillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps"
  | "Design";

interface PillProps {
  text: string;
  category?: PillCategory;
  className?: string;
  title?: string;
}

const badgeClassMap: Record<PillCategory, string> = {
  Frontend: "badge-frontend",
  Backend: "badge-backend",
  Database: "badge-database",
  DevOps: "badge-devops",
  Design: "badge-design",
};

// fallback class for unknown categories
const FALLBACK_CLASS = "bg-mediumCharcoal text-ivoryWhite";

const Pill: React.FC<PillProps> = React.memo(
  ({ text, category = "Frontend", className = "", title }) => {
    const badgeClass = badgeClassMap[category] ?? FALLBACK_CLASS;

    return (
      <span
        role="status"
        aria-label={title ?? `${text} (${category})`}
        title={title ?? `${text} — ${category}`}
        className={`inline-flex items-center justify-center px-2.5 py-1 text-xs font-semibold rounded-md shadow-sm md:text-sm md:px-4 md:py-1.5 md:rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-gold/30 ${badgeClass} ${className}`}
      >
        {text}
      </span>
    );
  }
);

Pill.displayName = "Pill";

export default Pill;
