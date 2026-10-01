import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/* Figtree stands in for the shot's geometric display face (Gilroy-like). */
const displayFont = Figtree({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wollo — Maximize Your Social Media Presence",
  description:
    "Plan, publish, analyze and grow every social post from one centralized platform. Streamline your SMM efforts and maximize ROI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
