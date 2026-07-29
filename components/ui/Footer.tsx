"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0f172a] text-silverMist border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Location */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold font-primary text-gold tracking-wide uppercase">
              Brian Giordano
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              I build outcome-driven websites for local small businesses. I handle the design, the code, and the ongoing support so you can focus on running your business.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <FaMapMarkerAlt className="text-gold" />
              <span>Based in Connecticut. Serving New England.</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-ivoryWhite font-bold uppercase tracking-wider text-sm mb-6">Services</h3>
            <ul className="space-y-4 text-sm list-none pl-0 m-0">
              <li>
                <Link href="/site-health-check" className="hover:text-gold transition-colors">
                  Site Health Check
                </Link>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-gold transition-colors">
                  Website Rescue
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-gold transition-colors">
                  Foundation Site
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-gold transition-colors">
                  Ongoing Care
                </a>
              </li>
            </ul>
          </div>

          {/* Links & Socials */}
          <div>
            <h3 className="text-ivoryWhite font-bold uppercase tracking-wider text-sm mb-6">Connect</h3>
            <ul className="space-y-4 text-sm list-none pl-0 m-0">
              <li>
                <a href="#professional-background" onClick={(e) => scrollToSection(e, "professional-background")} className="hover:text-gold transition-colors">
                  Open to full-time roles
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="hover:text-gold transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
            
            <div className="flex items-center gap-4 mt-8">
              <a href="https://github.com/brian-giordano" target="_blank" rel="noopener noreferrer" className="text-silverMist hover:text-gold transition-colors text-xl">
                <span className="sr-only">GitHub</span>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/briangiordano/" target="_blank" rel="noopener noreferrer" className="text-silverMist hover:text-gold transition-colors text-xl">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin />
              </a>
              <a href="mailto:briangiordano@example.com" className="text-silverMist hover:text-gold transition-colors text-xl">
                <span className="sr-only">Email</span>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p>© {year} Brian Giordano. All rights reserved.</p>
          <p className="text-silverMist/60">Built with Next.js, Tailwind, & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
