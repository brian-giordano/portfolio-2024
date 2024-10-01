import type { Metadata } from "next";
import "./globals.css";
import "../components/ui/Button.module.css";

export const metadata: Metadata = {
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Oswald:wght@400;700&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
