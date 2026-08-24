"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenCommandPalette, onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const getIST = () => {
    if (!currentTime) return "12:00 PM";
    return currentTime.toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "experience", "projects", "writing", "gallery", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 220 && rect.bottom >= 220;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", shortLabel: "Overview", href: "#hero", id: "hero" },
    { label: "Experience", shortLabel: "Work", href: "#experience", id: "experience" },
    { label: "Projects", shortLabel: "Projects", href: "#projects", id: "projects" },
    { label: "AI Article", shortLabel: "Writing", href: "#writing", id: "writing" },
    { label: "Lens", shortLabel: "Lens", href: "#gallery", id: "gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-2 sm:py-2.5 bg-black/90 backdrop-blur-xl shadow-2xl"
          : "py-3 sm:py-4 bg-gradient-to-b from-black/90 via-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-1.5 sm:gap-4">
        
        {/* Brand Logo & IST Status */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none focus:ring-0"
          >
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full overflow-hidden border border-zinc-800 shrink-0">
              <img
                src="/profile.jpeg"
                alt="Harsh Vardhan Singh Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="font-mono text-sm tracking-tight font-bold text-zinc-200 group-hover:text-white transition-colors hidden sm:inline">
              harsh
            </span>
          </a>

          {/* Time Clock */}
          <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span>INDIA • {getIST()}</span>
          </div>
        </div>

        {/* Apple-Style Sliding Pill Nav Dock - Perfect fit on mobile & desktop */}
        <nav className="flex items-center gap-0.5 sm:gap-1 bg-zinc-900/90 p-1 rounded-full border border-zinc-800/80 backdrop-blur-xl shadow-xl relative shrink-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`relative px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono transition-colors duration-200 select-none whitespace-nowrap focus:outline-none focus:ring-0 active:outline-none ${
                  isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-zinc-800/90 rounded-full shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 32,
                      mass: 0.7,
                    }}
                  />
                )}
                <span className="relative z-10 hidden sm:inline">{item.label}</span>
                <span className="relative z-10 sm:hidden">{item.shortLabel}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions - Book Call Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full sm:rounded-lg bg-white hover:bg-zinc-200 text-black font-mono text-[10px] sm:text-xs font-bold transition-all shadow-md focus:outline-none whitespace-nowrap"
            title="Book a Call [Press H]"
          >
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Book Call</span>
            <kbd className="hidden sm:inline px-1.5 py-0.5 text-[9px] bg-zinc-200 border border-zinc-300 rounded text-black font-mono">
              H
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
