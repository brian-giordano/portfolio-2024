import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#F8F8FF",
      secondary: "#B0C4DE",
      slate: {
        800: "#1A1A2E",
      },
    },
    extend: {
      colors: {
        darkSlate: "#1A1A2E",
        gold: "#FFD700",
        ivoryWhite: "#F8F8FF",
        silverMist: "#B0C4DE",
        crimson: "#DC143C",
        lightCrimson: "#E57373",
        darkCrimson: "#A0002D",
        mysticTeal: "#00BFA6",
        lavender: "#D6A4E0",
        lightSkyBlue: "#A0C4FF",
        charcoal: "#29293E",
        mediumCharcoal: "#6c6e80",
        pink: "#ffebeb",
        eggplant: "#110040",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        primary: ["var(--font-poppins)", "sans-serif"],
        accent: ["var(--font-oswald)", "sans-serif"],
        subheader: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        "text-shadow": "0px 0px 2px #FFD700", // Customize for your needs
      },
    },
  },

  plugins: [],
};

export default config;
