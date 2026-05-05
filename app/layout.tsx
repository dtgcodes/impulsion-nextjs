import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impulsion Technologies | ERP, Software & Digital Marketing Dubai",
  description: "Dubai-based IT company specializing in ERP systems, custom software development, web & app development, digital marketing, SEO, and IT support across UAE.",
  keywords: "ERP system Dubai, software development UAE, web development Dubai, digital marketing UAE, SEO Dubai, IT company UAE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
