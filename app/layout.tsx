import { Poppins, Oswald, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";
import "../components/ui/Button.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

const BASE_URL = "https://briangiordano.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Brian Giordano — AI Product Builder & Creative Technologist",
    template: "%s | Brian Giordano",
  },
  description:
    "AI product builder with an MS in Computer Science and a BA in Graphic Design. Specializing in RAG systems, LLM integrations, and full-stack web applications. Open to remote freelance, contract, and full-time roles in New England and beyond.",
  keywords: [
    "AI Product Engineer",
    "AI Product Builder",
    "Creative Technologist",
    "AI Solutions Architect",
    "Technical Product Manager",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "RAG Systems",
    "LLM Integration",
    "Freelance Developer New England",
    "Remote Developer Massachusetts",
    "Brian Giordano",
    "briangiordano.com",
  ],
  authors: [{ name: "Brian Giordano", url: BASE_URL }],
  creator: "Brian Giordano",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Brian Giordano",
    title: "Brian Giordano — AI Product Builder & Creative Technologist",
    description:
      "AI product builder with an MS in CS and a BA in Graphic Design. Specializing in RAG systems, LLM integrations, and full-stack web apps. Open to remote and New England opportunities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Giordano — AI Product Builder & Creative Technologist",
    description:
      "AI product builder with an MS in CS and a BA in Graphic Design. Specializing in RAG systems, LLM integrations, and full-stack web apps.",
    creator: "@briangiordano",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brian Giordano",
  url: BASE_URL,
  jobTitle: "AI Product Builder & Creative Technologist",
  description:
    "AI-augmented product builder and technical consultant with an MS in Computer Science and a BA in Graphic Design. Specializing in RAG systems, LLM integrations, and full-stack web applications.",
  sameAs: [
    "https://www.linkedin.com/in/briangiordano/",
    "https://github.com/brian-giordano",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "RAG Systems",
    "LLM Integration",
    "Agent Orchestration",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Full-Stack Development",
    "UI/UX Design",
    "Graphic Design",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "New England",
    addressCountry: "US",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Massachusetts Dartmouth",
      sameAs: "https://www.umassd.edu",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Rhode Island College",
      sameAs: "https://www.ric.edu",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${oswald.variable} ${montserrat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Cal.com Global Embed Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) {
                let p = function (a, ar) { a.q.push(ar); };
                let d = C.document;
                C.Cal = C.Cal || function () {
                  let cal = C.Cal;
                  let ar = arguments;
                  if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                  }
                  if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const ns = ar[1];
                    api.q = api.q || [];
                    if(typeof ns === "string"){C.Cal.ns[ns] = api; return api;}
                    p(C.Cal, ar);
                    return;
                  }
                  p(cal, ar);
                };
              })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", {origin:"https://app.cal.com"});
              Cal("ui", {"styles":{"branding":{"brandColor":"#FFD700"}},"hideEventTypeDetails":false,"layout":"month_view"});
            `,
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
