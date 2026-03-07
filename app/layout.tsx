import type { Metadata } from "next";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import PageMotion from "@/components/PageMotion";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AOSEA Global Resources Limited | Indigenous Oil & Gas Technical Services Nigeria",
  description:
    "Indigenous technical services for Nigeria's oil & gas sector. Technical services, project management, procurement, training, and manpower supply. PIA, NUPRC, NCDMB compliant.",
  keywords: [
    "Nigerian oil and gas services company",
    "Indigenous oilfield services Nigeria",
    "NUPRC compliance consultants",
    "Oilfield manpower supply Nigeria",
    "Oil and gas procurement Nigeria",
    "Commissioning services Nigeria",
    "Marine logistics Niger Delta",
  ],
  openGraph: {
    title: "AOSEA Global Resources Limited",
    description: "Indigenous technical services for Nigeria's oil & gas sector.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${sourceSans.variable} font-body antialiased`}
      >
        <Navbar />
        <main>
          <PageMotion>{children}</PageMotion>
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
