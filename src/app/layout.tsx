import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navigation from "@/components/layout/Navigation/Navigation";
import styles from "./layout.module.css";
// import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGro = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Mingossi",
  description: "My Developer Portfolio",
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
        {/*<Footer />*/}
      </body>
    </html>
  );
}
