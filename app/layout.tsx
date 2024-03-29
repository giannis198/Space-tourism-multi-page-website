import type { Metadata } from "next";
import { Bellefair } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import { Barlow } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-condensed",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Space tourism multi-page website",
  description: "Space tourism multi page website from Front-End Mentor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} ${bellefair.variable} ${condensed.variable}`}
      >
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
