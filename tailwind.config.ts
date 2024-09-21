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
        darkCrimson: "#B22222",
        mysticTeal: "#00BFA6",
        lavender: "#D6A4E0",
        lightSkyBlue: "#A0C4FF",
        charcoal: "#29293E",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        accent: ["Oswald", "sans-serif"],
        subheader: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
