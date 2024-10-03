import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const FollowMeSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-72">
      {/* Centering the section */}
      <div className="font-primary uppercase font-semibold text-xl text-ivoryWhite lg:text-3xl mb-4">
        <h1>Follow Me</h1>
      </div>
      <div className="w-full inline-flex justify-center text-6xl text-silverMist gap-10 lg:text-8xl">
        {/* Github Link */}
        <a
          href="https://github.com/brian-giordano"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow me on GitHub"
          className="hover:text-lightSkyBlue hover:-rotate-12 hover:scale-110 transform transition duration-300"
        >
          <FaGithub />
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/briangiordano/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with me on LinkedIn"
          className="hover:text-lightSkyBlue hover:rotate-12 hover:scale-110 transform transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default FollowMeSection;
