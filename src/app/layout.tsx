import type { Metadata } from "next";
import { Poppins, Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialBubbles from "@/components/SocialBubbles";
import Preloader from "@/components/Preloader";
import SchemaOrg from "@/components/SchemaOrg";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Chanakya International School | Best School in Palghar",
    template: "%s | Chanakya International School"
  },
  description: "Chanakya International School is a premier Cambridge International (IGCSE) school in Palghar, dedicated to academic excellence and holistic development.",
  keywords: ["International school in Palghar", "Cambridge school Palghar", "Best school in Palghar", "IGCSE school Palghar", "Cambridge curriculum school", "International education Palghar"],
  openGraph: {
    title: "Chanakya International School | Best School in Palghar",
    description: "Chanakya International School provides a nurturing environment where children discover their true potential through Cambridge International education.",
    url: "https://chanakyatheglobalschool.com",
    siteName: "Chanakya International School",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${poppins.variable} ${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <SchemaOrg />
        <Preloader />
        <Navbar />
        {children}
        <Footer />
        <SocialBubbles />
      </body>
    </html>
  );
}
