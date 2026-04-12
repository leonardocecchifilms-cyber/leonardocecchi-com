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
  title: "Leonardo Cecchi — Actor · Filmmaker · Model",
  description:
    "Italian-American actor working across film, television, and theater. Credits include Warner Bros./HBO Max, Disney+, Ryan Murphy/FX, and Lionsgate.",
  keywords: [
    "Leonardo Cecchi",
    "actor",
    "filmmaker",
    "Italian American",
    "Hollywood",
    "Disney",
    "HBO Max",
  ],
  openGraph: {
    title: "Leonardo Cecchi",
    description: "Actor · Filmmaker · Model",
    url: "https://leonardocecchi.com",
    siteName: "Leonardo Cecchi",
    type: "website",
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
