// components/AboutSection.tsx
import React from "react";
import Image from "next/image";
import AboutImage from "../assets/images/about-me-illustration-2.png"; // Import your image

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto mb-10 md:p-4">
      <div className="flex flex-col md:flex-row bg-charcoal rounded-lg shadow-md p-4">
        {/* Text container */}
        <div className="flex flex-col justify-between w-full md:w-1/2 p-4">
          <p>
            Hi! I&apos;m Brian, a Frontend Developer and passionate digital
            creator. With 3+ years of experience crafting visually appealing and
            highly functional web components, I&apos;m driven by a love of
            problem solving, with user experience (UX) at the forefront.
          </p>
          <p>
            I specialize in building responsive, high-performing websites and
            web apps using technologies like React, Next.js, Typescript,
            Javascript, Tailwind CSS, HTML5, CSS3, etc. My expertise lies in
            creating visually stunning interfaces that prioritize both
            aesthetics and usability.
          </p>
          <p>
            With a Master&apos;s degree in Computer Science, I&apos;ve gained a
            deep understanding of the principles that underpin software
            development, from algorithms and data structures to modern web
            technologies like robotics and distributed systems.
          </p>
          <p>
            My Bachelor&apos;s of Art undergrad degree allows me to bring a
            unique combination of creative and technical expertise to my work.
            My design background enables me to create intuitive and visually
            compelling interfaces, while my technical training ensures that
            these designs are supported by clean, efficient code - a winning
            combination!
          </p>
          <p>
            In recent roles I have designed and worked on software for remote
            UUV (Unmanned Underwater Vehicles), built full stack websites for
            banks, and visualized battery data for a panic button IoT product.
            My career has led me from web design to project management, all the
            way over to my forever home, frontend engineering, where I&apos;ve
            picked up valuable skills along the way!
          </p>
          <p>
            At this point in my career, I value autonomy and putting my best
            work out there. I&apos;m eager to join a creative team where I can
            leverage my dual expertise in design and development to tackle
            complex challenges. I bring a unique perspective that bridges the
            gap between aesthetics and functionality, ensuring that every
            project is both visually engaging and technically sound.
          </p>
          <p>
            Other hobbies of mine include camping & hiking, craft beer, audio
            production, building personal projects, crypto, fitness, and
            snowboarding. I live in New England with my gorgeous wife and two
            dogs (Daisy, a beautiful mutt, and Drax, a handsome pocket bully.)
          </p>
        </div>

        {/* Image container */}
        <div className="relative w-full h-64 md:h-auto md:w-1/2 mb-4 md:mb-0">
          {/* Set a fixed height for mobile and auto for larger screens */}
          <Image
            src={AboutImage} // Pass the AboutImage directly
            alt="About Me" // Provide a meaningful alt text
            layout="fill" // Use fill to cover the parent div
            className="absolute top-0 left-0 w-full h-full object-cover rounded" // Cover the parent div
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
