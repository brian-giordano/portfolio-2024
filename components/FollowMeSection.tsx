// components/FollowMeSection.tsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const FollowMeSection: React.FC = () => {
  return (
    <div className="w-full mt-12 lg:mt-0">
      {/* Optional subtle top separator */}
      <div className="hidden lg:block h-px w-full bg-white/10 mb-8" />

      <div className="font-primary tracking-widest uppercase font-semibold text-lg text-silverMist mb-6 text-center lg:text-left">
        Follow Me
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start gap-5 md:gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/brian-giordano"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow me on GitHub"
          className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-4xl md:text-5xl text-ivoryWhite hover:text-darkSlate hover:bg-gold hover:border-gold hover:scale-110 hover:-translate-y-1 transition-all duration-300"
        >
          <FaGithub />
        </a>

        {/* Book a Call (Yellow) */}
        <button
          data-cal-link="briangiordano"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
          aria-label="Book a session with me"
          className="group flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gold border border-gold rounded-2xl text-darkSlate hover:bg-ivoryWhite hover:border-ivoryWhite hover:scale-110 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="text-3xl md:text-4xl mb-1 leading-none">
            <span className="block group-hover:hidden">✦</span>
            <span className="hidden group-hover:block font-bold text-xl md:text-2xl">
              CAL
            </span>
          </div>
          <span className="text-[10px] md:text-xs font-bold tracking-[1.5px] uppercase opacity-80 group-hover:opacity-100">
            Book
          </span>
        </button>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/briangiordano/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with me on LinkedIn"
          className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-4xl md:text-5xl text-ivoryWhite hover:text-darkSlate hover:bg-gold hover:border-gold hover:scale-110 hover:-translate-y-1 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default FollowMeSection;
