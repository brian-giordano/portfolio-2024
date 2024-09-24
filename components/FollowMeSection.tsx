import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const FollowMeSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-52">
      {" "}
      {/* Centering the section */}
      <div className="font-primary uppercase font-semibold text-lg text-ivoryWhite lg:text-3xl mb-4">
        {" "}
        {/* Added margin-bottom for spacing */}
        <h2>Follow Me</h2>
      </div>
      <div className="w-full inline-flex justify-center text-6xl text-silverMist gap-8 lg:text-8xl">
        {" "}
        {/* Centering icons */}
        <FaGithub />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default FollowMeSection;
