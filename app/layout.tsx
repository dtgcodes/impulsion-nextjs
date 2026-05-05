import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Impulsion Technologies | #1 IT Company in Dubai, UAE",
    template: "%s | Impulsion Technologies Dubai",
  },
  description:
    "Impulsion Technologies is a leading IT company in Dubai, UAE offering ERP systems, custom software development, web & app development, digital marketing, SEO services, and IT support. Serving 200+ businesses across the UAE.",
  keywords: [
    "IT company Dubai",
    "ERP system Dubai",
    "software development Dubai",
    "software development UAE",
    "web development Dubai",
    "app development Dubai",
    "digital marketing Dubai",
    "SEO services Dubai",
    "SEO company UAE",
    "IT support Dubai",
    "custom ERP UAE",
    "web design Dubai",
    "mobile app development UAE",
    "Google Ads Dubai",
    "social media marketing Dubai",
    "graphic design Dubai",
    "IT AMC Dubai",
    "CCTV installation Dubai",
    "IT networking Dubai",
    "Impulsion Technologies",
    "impulsionuae",
  ],
  authors: [{ name: "Impulsion Technologies", url: "https://impulsionuae.com" }],
  creator: "Impulsion Technologies",
  publisher: "Impulsion Technologies",
  metadataBase: new URL("https://impulsionuae.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://impulsionuae.com",
    siteName: "Impulsion Technologies",
    title: "Impulsion Technologies | #1 IT Company in Dubai, UAE",
    description:
      "Dubai's trusted IT partner for ERP systems, software development, web & app development, digital marketing, and SEO. 200+ happy clients across UAE.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Impulsion Technologies — IT Company Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulsion Technologies | #1 IT Company in Dubai, UAE",
    description:
      "ERP systems, software development, digital marketing & IT support in Dubai. Trusted by 200+ UAE businesses.",
    images: ["/logo.png"],
    creator: "@impulsionuae",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ITService",
    name: "Impulsion Technologies",
    url: "https://impulsionuae.com",
    logo: "https://impulsionuae.com/logo.png",
    description:
      "Leading IT company in Dubai providing ERP systems, custom software development, web & app development, digital marketing, SEO, and IT support across UAE.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 511, Clover Bay Tower, Business Bay",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    telephone: "+971585855890",
    email: "info@impulsionuae.com",
    foundingDate: "2018",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 15 },
    areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "UAE"],
    sameAs: [
      "https://www.facebook.com/impulsionuae",
      "https://www.instagram.com/impulsionuae",
      "https://www.linkedin.com/company/impulsion-technologies",
      "https://twitter.com/impulsionuae",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP System Dubai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development Dubai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development Dubai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development Dubai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing Dubai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services Dubai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Support Dubai" } },
      ],
    },
  };

  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics />
        <PageLoader />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
