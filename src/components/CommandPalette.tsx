"use client";

import { useState, useEffect, useRef } from "react";
import { Search, ExternalLink, FileText, Mail, Sparkles, X, Code, Terminal } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: "Projects" | "Writing" | "Socials" | "Actions";
  description: string;
  icon: any;
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenContact }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: CommandItem[] = [
    {
      id: "shrenik",
      title: "Shrenik Escapes",
      category: "Projects",
      description: "Luxury resort & experiential travel booking platform",
      icon: ExternalLink,
      action: () => window.open("https://shrenikescapes.vercel.app/", "_blank"),
    },
    {
      id: "fuji",
      title: "Fuji Yatra",
      category: "Projects",
      description: "Mountain trekking & pilgrimage travel platform",
      icon: ExternalLink,
      action: () => window.open("https://fuji-yatra.vercel.app/", "_blank"),
    },
    {
      id: "ocular",
      title: "Ocular (AI PDF Verification Engine)",
      category: "Projects",
      description: "Extract text from PDFs & highlight AI responses back with 0 2nd LLM calls",
      icon: Code,
      action: () => window.open("https://github.com/BerrySeriousCoder/Ocular", "_blank"),
    },
    {
      id: "medium-article",
      title: "Article: Your AI read the document, can it prove it?",
      category: "Writing",
      description: "Deep dive on AI document verification, ZK-proofs & attribution",
      icon: FileText,
      action: () => window.open("https://medium.com/@harsh100xdev.work/your-ai-read-the-document-can-it-prove-it-b0a8d0c44a23", "_blank"),
    },
    {
      id: "snatchedit",
      title: "Snatchedit (AI Virtual Try-On)",
      category: "Projects",
      description: "Paste fashion link to try on clothing using Gemini & Vertex AI",
      icon: Code,
      action: () => window.open("https://github.com/BerrySeriousCoder/Snatchedit", "_blank"),
    },
    {
      id: "procureai",
      title: "ProcureAI Platform",
      category: "Projects",
      description: "AI procurement platform for request & contract automation",
      icon: Code,
      action: () => window.open("https://github.com/BerrySeriousCoder/ProcureAI", "_blank"),
    },
    {
      id: "cpp-server",
      title: "Multi-threaded C++ HTTP Server",
      category: "Projects",
      description: "Low-level POSIX sockets & C++11 thread pool HTTP engine",
      icon: Terminal,
      action: () => window.open("https://github.com/BerrySeriousCoder/Multi-threaded-C-HTTP-Server", "_blank"),
    },
    {
      id: "github",
      title: "GitHub Profile",
      category: "Socials",
      description: "Explore 36+ repositories (@BerrySeriousCoder)",
      icon: GithubIcon,
      action: () => window.open("https://github.com/BerrySeriousCoder", "_blank"),
    },
    {
      id: "contact-action",
      title: "Book a Call / Get in Touch",
      category: "Actions",
      description: "Open call scheduling and direct message modal",
      icon: Mail,
      action: () => {
        onClose();
        onOpenContact();
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1));
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        filteredItems[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 bg-zinc-950/50">
          <Search className="w-5 h-5 text-zinc-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search projects..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-white font-mono text-sm placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-zinc-500 font-mono text-sm">
              No matching projects or commands found.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left transition-all ${
                    isSelected ? "bg-zinc-800 text-white" : "text-zinc-300 hover:bg-zinc-800/50"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-3">
                    <div className={`p-2 rounded-md ${isSelected ? "bg-zinc-700 text-white" : "bg-zinc-950 text-zinc-400"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-xs font-semibold text-white truncate flex items-center gap-2">
                        {item.title}
                        <span className="text-[10px] font-sans px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800 font-normal">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400 font-sans truncate">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 shrink-0">
                    Jump ↵
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 bg-zinc-900 border border-zinc-800 rounded">↑↓</kbd> navigate</span>
            <span><kbd className="px-1 py-0.5 bg-zinc-900 border border-zinc-800 rounded">↵</kbd> select</span>
            <span><kbd className="px-1 py-0.5 bg-zinc-900 border border-zinc-800 rounded">esc</kbd> close</span>
          </div>
          <div className="hidden sm:block text-zinc-400">
            BerrySeriousCoder
          </div>
        </div>
      </div>
    </div>
  );
}
