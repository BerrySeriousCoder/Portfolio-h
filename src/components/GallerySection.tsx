"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { src: "/imagegallery/image1.jpeg", title: "Frame 01", tag: "01", colSpan: "col-span-1 sm:col-span-2 row-span-2" },
    { src: "/imagegallery/image3.jpeg", title: "Frame 02", tag: "02", colSpan: "col-span-1" },
    { src: "/imagegallery/image4.jpeg", title: "Frame 03", tag: "03", colSpan: "col-span-1" },
    { src: "/imagegallery/image5.jpeg", title: "Frame 04", tag: "04", colSpan: "col-span-1 sm:col-span-2" },
    { src: "/imagegallery/image6.jpeg", title: "Frame 05", tag: "05", colSpan: "col-span-1" },
    { src: "/imagegallery/image7.jpeg", title: "Frame 06", tag: "06", colSpan: "col-span-1" },
    { src: "/imagegallery/image8.jpeg", title: "Frame 07", tag: "07", colSpan: "col-span-1" },
    { src: "/imagegallery/image2.jpeg", title: "Frame 08", tag: "08", colSpan: "col-span-1" },
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <section id="gallery" className="py-16 bg-black text-white relative border-t border-zinc-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Section Title Header */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-[10px] sm:text-[11px] font-mono text-zinc-300 uppercase tracking-wider whitespace-nowrap">
              [ Life Through My Lens ]
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <Camera className="w-3.5 h-3.5 text-zinc-400" />
            <span>Personal moments & perspectives</span>
          </div>
        </div>

        {/* Bento Creative Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 auto-rows-[160px] sm:auto-rows-[180px]">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden cursor-pointer border border-dashed border-zinc-800/90 bg-zinc-950 hover:border-zinc-700 transition-all duration-300 ${img.colSpan}`}
            >
              {/* Corner Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-3.5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-black/80 border border-zinc-800 text-zinc-300">
                    {img.tag}
                  </span>
                </div>
                <div className="font-mono space-y-0.5">
                  <h4 className="text-xs font-bold text-white tracking-tight">{img.title}</h4>
                  <p className="text-[10px] text-zinc-400">Click to expand</p>
                </div>
              </div>

              {/* Top Corner Index Badge */}
              <div className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-mono bg-black/70 border border-zinc-800/80 text-zinc-400 opacity-80 group-hover:opacity-0 transition-opacity">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Controls */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Header Bar */}
          <div className="w-full max-w-4xl flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-zinc-900 pb-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-zinc-300" />
              <span className="text-white font-semibold">{images[selectedIndex].title}</span>
              <span className="text-zinc-500">({images[selectedIndex].tag})</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-zinc-500">{selectedIndex + 1} / {images.length}</span>
              <button
                onClick={() => setSelectedIndex(null)}
                className="p-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Image Container with Prev/Next Navigation */}
          <div 
            className="relative flex-1 flex items-center justify-center w-full max-w-4xl my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={() => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)}
              className="absolute left-2 sm:left-4 z-10 p-2.5 bg-black/80 hover:bg-zinc-900 text-white border border-zinc-800 rounded-full transition-colors shadow-2xl"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Display Image */}
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              className="max-w-full max-h-[75vh] object-contain border border-zinc-900 shadow-2xl select-none"
            />

            {/* Next Button */}
            <button
              onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)}
              className="absolute right-2 sm:right-4 z-10 p-2.5 bg-black/80 hover:bg-zinc-900 text-white border border-zinc-800 rounded-full transition-colors shadow-2xl"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Footer Bar */}
          <div className="w-full max-w-4xl flex items-center justify-between text-[11px] font-mono text-zinc-500 border-t border-zinc-900 pt-3" onClick={(e) => e.stopPropagation()}>
            <span>Use Left/Right arrows or ESC</span>
            <span className="text-zinc-400">[ Photo {selectedIndex + 1} of 8 ]</span>
          </div>

        </div>
      )}
    </section>
  );
}

