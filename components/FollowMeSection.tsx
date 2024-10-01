import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const FollowMeSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-72">
      {" "}
      {/* Centering the section */}
      <div className="font-primary uppercase font-semibold text-xl text-ivoryWhite lg:text-3xl mb-4">
        {" "}
        {/* Added margin-bottom for spacing */}
        <h1>Follow Me</h1>
      </div>
      <div className="w-full inline-flex justify-center text-6xl text-silverMist gap-10 lg:text-8xl">
        {" "}
        {/* Centering icons */}
        <FaGithub className="hover:text-lightSkyBlue hover:-rotate-12 hover:scale-110 transform transition duration-300" />
        <FaLinkedin className="hover:text-lightSkyBlue hover:rotate-12 hover:scale-110 transform transition duration-300" />
      </div>
    </div>
  );
};

export default FollowMeSection;
