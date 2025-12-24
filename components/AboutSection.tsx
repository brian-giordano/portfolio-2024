import React from "react";
import Image from "next/legacy/image";
import AboutImage from "@/assets/images/about-me-illustration-2.png";
import {
  FaHiking,
  FaBeer,
  FaMusic,
  FaDumbbell,
  FaSnowboarding,
  FaBitcoin,
  FaCode,
  FaDog,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "MS", label: "Computer Science" },
    { value: "BA", label: "Art & Design" },
  ];

  const hobbies = [
    { icon: <FaHiking />, label: "Hiking" },
    { icon: <FaBeer />, label: "Craft Beer" },
    { icon: <FaMusic />, label: "Audio Production" },
    { icon: <FaCode />, label: "Side Projects" },
    { icon: <FaBitcoin />, label: "Crypto" },
    { icon: <FaDumbbell />, label: "Fitness" },
    { icon: <FaSnowboarding />, label: "Snowboarding" },
    { icon: <FaDog />, label: "Dog Dad x2" },
  ];

  return (
    <div className="container mx-auto mb-10 md:p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-3/5 space-y-8">
          {/* Punchy intro */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-ivoryWhite mb-3">
              I bridge the gap between <span className="text-gold">design</span>{" "}
              and <span className="text-gold">code</span>.
            </h3>
            <p className="text-lg text-silverMist">
              Frontend developer with an art degree and a Master&apos;s in CS. I
              bring a rare combo of creative vision and technical depth to every
              project.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-charcoal border border-gold/20 rounded-xl px-6 py-4 text-center flex-1 min-w-[120px]"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(212,175,55,0.5)",
                }}
              >
                <div className="text-2xl md:text-3xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-xs text-silverMist mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Core paragraphs - condensed */}
          <div className="space-y-4 text-silverMist">
            <p>
              I specialize in building responsive, high-performing web apps with
              React, Next.js, TypeScript, and Tailwind. My design background
              means I don&apos;t just build to spec — I push for interfaces that
              are intuitive, polished, and delightful to use.
            </p>
            <p>
              From remote UUV control software to full-stack banking platforms
              to IoT dashboards, I&apos;ve shipped production code across
              industries. I thrive in fast-moving teams where I can own the
              frontend and collaborate closely with designers and backend
              engineers.
            </p>
            <p>
              I&apos;m looking for a team that values autonomy, craft, and
              shipping great work. If that sounds like you, let&apos;s talk.
            </p>
          </div>

          {/* Hobbies */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-silverMist mb-3">
              When I&apos;m not coding
            </h4>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 bg-charcoal border border-silverMist/20 rounded-full px-4 py-2 text-sm text-ivoryWhite"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(212,175,55,0.5)",
                  }}
                >
                  <span className="text-gold">{hobby.icon}</span>
                  {hobby.label}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personal touch */}
          <div className="bg-gradient-to-r from-gold/10 to-transparent border-l-4 border-gold rounded-r-lg p-4">
            <p className="text-silverMist italic">
              &ldquo;I live in New England with my wife and two dogs — Daisy (a
              beautiful mutt) and Drax (a handsome pocket bully).&rdquo;
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-2/5">
          <motion.div
            className="relative aspect-[3/4] rounded-xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={AboutImage}
              alt="About Me"
              layout="fill"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkSlate/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
