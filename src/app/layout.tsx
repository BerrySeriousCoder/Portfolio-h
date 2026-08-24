import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Vardhan Singh — Full-Stack & AI Engineer Portfolio",
  description: "Portfolio of Harsh Vardhan Singh (BerrySeriousCoder). Full-Stack Engineer and AI Systems developer with 11+ months fulltime experience building production web apps, PDF AI verification engines, and scalable products.",
  keywords: ["Harsh Vardhan Singh", "BerrySeriousCoder", "Full-Stack Developer", "AI Engineer", "Next.js Portfolio", "TypeScript", "React", "Node.js", "Ocular AI"],
  authors: [{ name: "Harsh Vardhan Singh" }],
  openGraph: {
    title: "Harsh Vardhan Singh — Full-Stack & AI Engineer",
    description: "I build solid full-stack web apps and AI systems, start to finish.",
    url: "https://github.com/BerrySeriousCoder",
    siteName: "Harsh Vardhan Singh Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans">{children}</body>
    </html>
  );
}
