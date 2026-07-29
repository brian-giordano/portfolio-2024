"use client";

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
import jobsData from "@/data/jobs.json";
import educationData from "@/data/education.json";

interface AboutSectionProps {
  onJobClick?: () => void;
  onHealthCheckClick?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onJobClick, onHealthCheckClick }) => {
  const stats = [
    { value: "MS", label: "Computer Science" },
    { value: "BA", label: "Graphic Design" },
    { value: "CT", label: "Based in New England" },
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

  const highlights = [
    {
      title: "Design + code in one person",
      desc: "No game of telephone between a designer who doesn't code and a developer who doesn't design."
    },
    {
      title: "AI-augmented workflow",
      desc: "I use modern tools to move faster, which means your project ships in weeks instead of months."
    },
    {
      title: "Fixed prices, clear scope",
      desc: "You know exactly what you're paying and what you'll receive before we start."
    },
    {
      title: "Local and available",
      desc: "I'm based in Connecticut and work primarily with businesses in New England."
    },
    {
      title: "You own everything",
      desc: "Your site, your domain, your content. No lock-in."
    }
  ];

  const keySkills = [
    "React", "TypeScript", "Next.js", "Tailwind", "Python", 
    "Node.js", "Webflow", "UI/UX Design", "Figma", "AI/ML"
  ];

  const scrollToProfessional = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("professional-background");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto mb-10 md:p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Content */}
        <div className="w-full lg:w-3/5 space-y-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-primary font-bold text-ivoryWhite mb-2 leading-tight">
              One person who designs and ships. <br className="hidden md:block" />
              <span className="text-gold">No handoffs. No agency layers.</span>
            </h3>
            <a 
              href="#professional-background" 
              onClick={scrollToProfessional}
              className="text-silverMist text-sm hover:text-gold transition-colors inline-flex items-center gap-1 mb-6"
            >
              Also open to full-time opportunities <span aria-hidden="true">&rarr;</span>
            </a>
            <p className="text-lg text-silverMist leading-relaxed">
              I'm Brian — a web designer and developer based in New England with both a Master's in Computer Science and a BA in Graphic Design. That unusual combination means I can handle the visual design AND the technical build, without the overhead of an agency team or the delays of passing work between designers and developers.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-charcoal border border-gold/20 rounded-xl px-6 py-4 text-center flex-1 min-w-[120px]"
                whileHover={{ scale: 1.05, borderColor: "rgba(212,175,55,0.5)" }}
              >
                <div className="text-2xl md:text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-xs text-silverMist mt-1 font-mono uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div>
            <h4 className="text-lg font-bold text-ivoryWhite mb-4">Why local businesses work with me:</h4>
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="global-bullet text-silverMist">
                  <span><strong className="text-ivoryWhite">{item.title}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-silverMist mb-3 font-mono">
              When I'm not coding
            </h4>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 bg-charcoal border border-silverMist/20 rounded-full px-4 py-2 text-sm text-ivoryWhite"
                  whileHover={{ scale: 1.05, borderColor: "rgba(212,175,55,0.5)" }}
                >
                  <span className="text-gold">{hobby.icon}</span>
                  {hobby.label}
                </motion.div>
              ))}
            </div>
          </div>

          {/* <div className="bg-gradient-to-r from-gold/10 to-transparent border-l-4 border-gold rounded-r-lg p-4">
            <p className="text-silverMist italic">
              "I live in New England with my wife and two dogs — Daisy (a beautiful mutt) and Drax (a handsome pocket bully)."
            </p>
          </div> */}
          
          <div>
            <button
              onClick={onHealthCheckClick}
              className="px-6 py-3 bg-gold text-darkSlate font-bold rounded-xl text-sm sm:text-base shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:bg-gold/90 transition-colors"
            >
              Book a Free Site Health Check
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-2/5">
          <motion.div
            className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={AboutImage}
              alt="Brian Giordano - Web Designer and Developer"
              layout="fill"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkSlate/80 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Professional Background Subsection */}
      <div id="professional-background" className="border-t border-white/10 pt-12 mt-16 scroll-mt-24">
        <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-mono mb-8 text-center md:text-left">
          Professional Background
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience & Education */}
          <div className="space-y-10">
            <div>
              <h5 className="text-xl font-bold text-ivoryWhite mb-6 border-b border-white/5 pb-2">Experience Highlights</h5>
              <div className="space-y-6">
                <div className="bg-charcoal border border-white/5 p-5 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h6 className="text-gold font-bold">{jobsData[3].title}</h6>
                      <p className="text-silverMist text-sm">{jobsData[3].orgName}</p>
                    </div>
                    <span className="text-silverMist/60 text-xs font-mono">2021 - 2023</span>
                  </div>
                  <p className="text-silverMist text-sm mt-3 line-clamp-3">
                    Built production UIs for U.S. Navy unmanned underwater vehicle programs. Led R&D on a proprietary sonar data annotation tool.
                  </p>
                </div>
                
                <div className="bg-charcoal border border-white/5 p-5 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h6 className="text-gold font-bold">{jobsData[1].title}</h6>
                      <p className="text-silverMist text-sm">{jobsData[1].orgName}</p>
                    </div>
                    <span className="text-silverMist/60 text-xs font-mono">2024 - Present</span>
                  </div>
                  <p className="text-silverMist text-sm mt-3 line-clamp-3">
                    Built full-stack AI dashboards, deployed insurance claims AI systems with RAG, and provided technical strategy consulting.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-xl font-bold text-ivoryWhite mb-6 border-b border-white/5 pb-2">Education</h5>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h6 className="text-ivoryWhite font-bold">{educationData[0].degree}</h6>
                    <p className="text-silverMist text-sm">{educationData[0].orgName}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h6 className="text-ivoryWhite font-bold">{educationData[2].degree}</h6>
                    <p className="text-silverMist text-sm">{educationData[2].orgName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills & CTA */}
          <div className="space-y-10">
            <div>
              <h5 className="text-xl font-bold text-ivoryWhite mb-6 border-b border-white/5 pb-2">Key Skills</h5>
              <div className="flex flex-wrap gap-2">
                {keySkills.map((skill, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/10 text-ivoryWhite px-4 py-2 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-charcoal border border-gold/20 p-8 rounded-2xl shadow-xl mt-8">
              <h5 className="text-xl font-bold text-ivoryWhite mb-3">Interested in working together full-time?</h5>
              <p className="text-silverMist text-sm mb-6">I am currently open to full-time engineering and design opportunities.</p>
              <button 
                onClick={onJobClick}
                className="w-full text-center px-6 py-3 border-2 border-gold text-gold font-bold rounded-xl text-sm hover:bg-gold/10 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
