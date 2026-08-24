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
  title: "Harsh Vardhan Singh — Full-Stack & AI Engineer",
  description: "Full-Stack Engineer and AI Systems Developer building production web apps, AI verification engines, and scalable products. Currently open to roles and collaborations.",
  keywords: ["Harsh Vardhan Singh", "BerrySeriousCoder", "Full-Stack Developer", "AI Engineer", "Next.js Portfolio", "TypeScript", "React", "Node.js", "Ocular AI", "Vitch AI"],
  authors: [{ name: "Harsh Vardhan Singh" }],
  creator: "Harsh Vardhan Singh",
  icons: {
    icon: "/icon-512.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Harsh Vardhan Singh — Full-Stack & AI Engineer",
    description: "I build solid full-stack web apps and AI systems, start to finish. Currently open to roles and collaborations.",
    url: "https://github.com/BerrySeriousCoder",
    siteName: "Harsh Vardhan Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harsh Vardhan Singh — Full-Stack & AI Engineer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Vardhan Singh — Full-Stack & AI Engineer",
    description: "I build solid full-stack web apps and AI systems, start to finish.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://harsh-portfolio.vercel.app"),
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
