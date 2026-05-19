import { Poppins, Oswald, Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
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

export const viewport: Viewport = {
  themeColor: "#1A1A2E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Brian Giordano — AI Product Builder & Creative Technologist",
    template: "%s | Brian Giordano",
  },
  description:
    "AI product builder specializing in RAG systems, LLM integrations, and architectural full-stack applications. MS in Computer Science, BA in Graphic Design.",
  keywords: [
    "AI Product Engineer",
    "Creative Technologist",
    "AI Solutions Architect",
    "Technical Product Manager",
    "RAG Systems",
    "LLM Integration",
    "Brian Giordano",
  ],
  authors: [{ name: "Brian Giordano", url: BASE_URL }],
  creator: "Brian Giordano",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Brian Giordano",
    title: "Brian Giordano — AI Product Builder & Creative Technologist",
    description:
      "Expert AI solutions and creative technology. Bridging the gap between high-end design and rigorous engineering logic.",
    images: [
      {
        url: "/og-image.png", // Assuming you'll add one, or use existing
        width: 1200,
        height: 630,
        alt: "Brian Giordano Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Giordano — AI Product Builder & Creative Technologist",
    description:
      "AI-augmented product builder and technical consultant. Specializing in RAG systems and high-stakes full-stack apps.",
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGBP82DW"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TGBP82DW');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
