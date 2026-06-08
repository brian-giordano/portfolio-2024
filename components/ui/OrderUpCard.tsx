// components/ui/OrderUpCard.tsx
import React from 'react';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel } from 'react-icons/si';

const OrderUpCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-darkSlate border border-white/[0.12] rounded-lg p-3.5 md:p-4 mb-6 shadow-sm w-full">
      {/* Left side: Order Up, Service Name, Cooking With */}
      <div className="flex flex-col space-y-1.5 w-full md:w-[60%] mb-4 md:mb-0">
        <div className="flex items-center space-x-3 mb-0.5">
          <h4 className="text-gold/70 font-medium text-[10px] tracking-[0.15em] uppercase flex items-center">
            <span className="mr-1.5 text-xs opacity-80">🔔</span> ORDER UP
          </h4>
          <div className="flex items-center space-x-1.5 bg-black/40 px-2 py-0.5 rounded-full border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold shadow-[0_0_8px_rgba(255,215,0,0.8)]"></span>
            </span>
            <span className="text-[9px] text-gray-400 tracking-wider uppercase font-semibold">
              IN SERVICE
            </span>
          </div>
        </div>
        
        <p className="text-gray-300 text-xs md:text-[13px] font-medium leading-tight">
          Custom Web Design & Full Stack Development
        </p>
        
        <div className="text-[9.5px] text-gray-500 uppercase tracking-widest mt-1">
          Cooking With: <span className="text-gray-400 font-medium normal-case tracking-normal ml-1">Gas</span>
        </div>
      </div>

      {/* Right side: Ingredients */}
      <div className="flex flex-col md:items-end w-full md:w-[40%]">
        <span className="text-gray-500 text-[9px] uppercase tracking-widest font-semibold mb-2">
          Ingredients
        </span>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:justify-end">
          <div className="flex items-center space-x-1.5 text-gray-400 hover:text-white transition-colors group">
            <SiNextdotjs className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" title="Next.js" />
            <span className="text-[10px] font-medium">Next.js</span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-400 hover:text-[#3178C6] transition-colors group">
            <SiTypescript className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" title="TypeScript" />
            <span className="text-[10px] font-medium">TypeScript</span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-400 hover:text-[#38B2AC] transition-colors group">
            <SiTailwindcss className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" title="Tailwind CSS" />
            <span className="text-[10px] font-medium">Tailwind</span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-400 hover:text-white transition-colors group">
            <SiVercel className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" title="Vercel" />
            <span className="text-[10px] font-medium">Vercel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderUpCard;
