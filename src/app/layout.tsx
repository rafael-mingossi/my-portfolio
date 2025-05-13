import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navigation from "@/components/layout/Navigation/Navigation";
import styles from "./layout.module.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGro = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

const myUrl = "https://rafaelmingossi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(myUrl),
  title: "Rafael Mingossi - Front-End Developer Portfolio",
  description:
    "JavaScript (React & React Native) specialist with a passion for clean code and pixel-perfect UI. Front-end developer based in Australia.",
  keywords: [
    "Front-end Developer",
    "React",
    "React Native",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Rafael Mingossi" }],
  creator: "Rafael Mingossi",
  //openGraph appears when it is shared in Social Media
  openGraph: {
    type: "website",
    locale: "en_US",
    url: myUrl,
    siteName: "Rafael Mingossi Portfolio",
    title: "Rafael Mingossi - Front-End Developer",
    description:
      "JavaScript specialist turning complex problems into elegant solutions since 2021.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rafael Mingossi - Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Mingossi - Front-End Developer",
    description: "JavaScript specialist with expertise in React & React Native",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    resume: "/Rafael-Mingossi-Resume.pdf",
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
        className={`${spaceGro.variable} ${inter.variable} ${styles.bodyWrapper}`}
      >
        <Navigation />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
