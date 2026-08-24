"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import ProjectsSection from "@/components/ProjectsSection";
import ArticleSpotlight from "@/components/ArticleSpotlight";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import ContactSection, { ContactModal } from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (e.key.toLowerCase() === "h" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setContactModalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Preserved Hero Section */}
      <Hero onOpenContact={() => setContactModalOpen(true)} />

      {/* Work Experience, Resume & Tech Stack */}
      <ExperienceSection />

      {/* Revamped Projects Section */}
      <ProjectsSection />

      {/* AI Article & Technical Writing Spotlight */}
      <ArticleSpotlight />

      {/* Life Through My Lens Gallery */}
      <GallerySection />

      {/* Contact Section */}
      <ContactSection onOpenContact={() => setContactModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Command Palette Modal (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Contact Modal ([H]) */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </main>
  );
}
