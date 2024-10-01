// app/layout.tsx
import { Poppins, Oswald, Montserrat } from "next/font/google"; // Import fonts from next/font
import "./globals.css"; // Import global styles
import "../components/ui/Button.module.css"; // Import specific styles for buttons

// Load fonts with next/font
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Brian Giordano",
  description: "Digital Alchemist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* No need to add font links here */}</head>
      <body
        className={`${poppins.className} ${oswald.className} ${montserrat.className}`}
      >
        {children}
      </body>{" "}
      {/* Apply font classes */}
    </html>
  );
}
