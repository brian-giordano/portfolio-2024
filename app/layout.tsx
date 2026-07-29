import { Poppins, Oswald, Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";
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
    default: "Brian Giordano | Web Designer & Developer for Local Businesses",
    template: "%s | Brian Giordano",
  },
  description:
    "I build outcome-driven websites for local small businesses. Get a Free Site Health Check, Website Rescue, or Foundation Site.",
  keywords: [
    "Website Rescue",
    "Small Business Websites",
    "Starter Sites",
    "Website Maintenance",
    "Monthly Web Care",
    "Web Design Massachusetts",
    "Web Design Connecticut",
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
    title: "Brian Giordano | Web Designer & Developer for Local Businesses",
    description:
      "I build outcome-driven websites for local small businesses. Get a Free Site Health Check, Website Rescue, or Foundation Site.",
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
    title: "Brian Giordano | Web Designer & Developer for Local Businesses",
    description:
      "I build outcome-driven websites for local small businesses. Get a Free Site Health Check, Website Rescue, or Foundation Site.",
    creator: "@briangiordano",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Brian Giordano - Web Design & Development",
  url: BASE_URL,
  description:
    "I build outcome-driven websites for local small businesses. Get a Free Site Health Check, Website Rescue, or Foundation Site.",
  sameAs: [
    "https://www.linkedin.com/in/briangiordano/",
    "https://github.com/brian-giordano",
  ],
  areaServed: ["Massachusetts", "Connecticut", "Rhode Island"],
  priceRange: "$$$",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Site Health Check",
        description: "A free audit of your website's performance, design, and SEO."
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Website Rescue",
        description: "Fixing, optimizing, and saving your current website."
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Foundation Site",
        description: "A brand new, custom-built, fast website designed to convert."
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Ongoing Care",
        description: "Maintenance, updates, and priority support to keep your site healthy."
      }
    }
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "New England",
    addressCountry: "US",
  },
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
      </body>
    </html>
  );
}
