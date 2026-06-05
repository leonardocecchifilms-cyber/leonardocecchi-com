import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Leonardo Cecchi — Actor | Los Angeles",
  description:
    "Leonardo Cecchi is an Italian-American actor based in Los Angeles, known for Disney's Alex & Co., American Horror Stories (FX), Lamborghini: The Man Behind the Legend (Lionsgate), and Prom Dates (Hulu).",
  keywords: [
    "Leonardo Cecchi",
    "actor",
    "filmmaker",
    "Italian American",
    "Los Angeles",
    "Disney",
    "HBO Max",
    "FX",
    "Hulu",
    "Lionsgate",
    "Alex and Co",
    "American Horror Stories",
    "Prom Dates",
  ],
  openGraph: {
    title: "Leonardo Cecchi — Actor | Los Angeles",
    description:
      "Italian-American actor based in Los Angeles. Credits include Disney's Alex & Co., American Horror Stories (FX), Lamborghini: The Man Behind the Legend (Lionsgate), and Prom Dates (Hulu).",
    url: "https://leonardocecchi.com",
    siteName: "Leonardo Cecchi",
    type: "website",
    images: [
      {
        url: "https://leonardocecchi.com/images/og-image.jpg",
        width: 1200,
        height: 1800,
        alt: "Leonardo Cecchi — Actor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Cecchi — Actor | Los Angeles",
    description:
      "Italian-American actor based in Los Angeles. Credits include Disney's Alex & Co., American Horror Stories (FX), and Lamborghini: The Man Behind the Legend.",
    images: ["https://leonardocecchi.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
