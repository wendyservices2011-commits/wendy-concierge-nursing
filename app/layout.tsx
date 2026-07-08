import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wendy Concierge Nursing — Private Duty RN · Palm Beach County",
  description:
    "Private duty registered nurse services for Palm Beach County. Medication management, wound care, post-surgical recovery, and complex care coordination — delivered personally by Wendy Bien-Aime, RN.",
  keywords: [
    "private duty nurse Palm Beach",
    "private duty RN Florida",
    "in-home nursing care Palm Beach County",
    "post surgical nurse at home",
    "private nurse West Palm Beach",
    "Wendy Concierge Nursing",
  ],
  openGraph: {
    title: "Wendy Concierge Nursing",
    description: "Private duty registered nurse · Palm Beach County, FL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Wendy Concierge Nursing LLC",
  description:
    "Private duty registered nurse services for Palm Beach County, Florida.",
  url: "https://wendyconciergenursing.com",
  telephone: "(843) 532-7181",
  email: "info@wendyconciergenursing.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: "Palm Beach County, FL",
  founder: {
    "@type": "Person",
    name: "Wendy Bien-Aime",
    jobTitle: "Registered Nurse",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
