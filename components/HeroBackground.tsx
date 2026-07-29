"use client";

import React, { useState, useEffect } from "react";

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0" />;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#0f172a]">
      {/* Premium dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#1e293b]" />
    </div>
  );
}
