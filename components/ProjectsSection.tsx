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
      description: (
        <p>
          This portfolio website showcases my creative process with bold design
          elements and modern development practices. It’s a user-centric
          experience built to leave a lasting impression with responsive layouts
          and fluid animations.
        </p>
      ),
      stackUsed: PortfolioSkills,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      moreDetails: (
        <>
          <h3>Description:</h3>
          <p>
            This portfolio website is a true reflection of my creative process,
            blending <strong>bold design elements</strong> with
            <strong> modern development practices</strong> to create an
            experience that is both visually striking and highly functional. I
            wanted this site to showcase not only my technical expertise but
            also my ability to craft an engaging, user-centric interface that
            leaves a lasting impression.
          </p>

          <h3>Key Responsibilities:</h3>
          <p>
            I handled every aspect of the project, from the initial concept to
            deployment. This included <strong>full stack development</strong>,
            <strong>UI/UX design</strong>, performance optimization, and
            ensuring the site was responsive across all devices. Additionally, I
            focused on
            <strong>motion design</strong> to create a fluid user experience.
          </p>

          <h3>Challenges:</h3>
          <p>
            One challenge was balancing visual impact with performance. I used
            Next.js’s optimization features to maintain fast load times. I also
            ensured consistency across devices, spending extra time on the
            site’s responsiveness.
          </p>

          <h3>Outcome/Impact:</h3>
          <p>
            The portfolio now presents a
            <strong> clean, modern, and intuitive interface</strong>,
            emphasizing my development and design skills. It leaves a lasting
            impression with bold colors and motion design, while being
            <strong> optimized for performance and user engagement</strong>.
          </p>
        </>
      ),
    },
    {
      imageUrl: GaspImg,
      title: "Web Consulting & Management",
      alt: "alt text",
      orgName: "Grand Anse Surgery Project",
      orgLink: "https://www.grandansesurgeryproject.org",
      description: (
        <p>
          I consulted with the Grand Anse Surgery Project to curate a
          Squarespace website that would meet their donation and communication
          needs, while allowing their team flexibility in design updates and
          ease of administration.
        </p>
      ),
      stackUsed: GaspSkills,
      moreDetails: (
        <>
          <h3>Key Responsibilities:</h3>
          <ul>
            <li>
              Curated and customized Squarespace templates for GASP&apos;s
              website
            </li>
            <li>
              Selected compelling photos from GASP footage to enhance donor
              engagement and increase donations
            </li>
            <li>
              Provided ongoing site administration and updates as needed by the
              GASP team
            </li>
            <li>
              Designed a professionally branded donor pamphlet for the
              organization&apos;s holiday fund drive
            </li>
          </ul>

          <h3>Outcome/Impact:</h3>
          <p>
            The final website offered a user-friendly interface for both the
            GASP team and potential donors, significantly improving their online
            presence. The compelling design and user experience facilitated
            their holiday fund drive, which raised awareness and encouraged
            donations for their important cause.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto mb-10 p-4">
      <CardsList cards={projects} />
      {/* Use CardsList to render the projects */}
    </div>
  );
};

export default ProjectSection;
