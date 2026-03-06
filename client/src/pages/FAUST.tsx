import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // توليد الصور من 155 إلى 169
  const images = Array.from({ length: 32 }, (_, i) => 155 + i);

  return (
    <div className="min-h-screen flex flex-col bg-black text-foreground overflow-hidden relative">
      
      {/* ===== GRAIN OVERLAY ===== */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.08] mix-blend-overlay">
        <div className="w-full h-full bg-[url('/grain.png')] bg-repeat" />
      </div>

      {/* ===== DECORATIVE FRAME ===== */}
      <div className="fixed inset-4 border border-white/10 pointer-events-none z-50 hidden md:block" />

      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-20 relative z-10">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <p className="text-xs tracking-widest text-green-400 mb-4">
            Auszüge aus Goethes
          </p>

          <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
            FAUST erster Teil
          </h1>

          <div className="w-24 h-px bg-green-400 mx-auto mt-6 opacity-60" />
        </motion.div>

        {/* ===== ALL BOOK PAGES ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {images.map((num, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
            >
              <img
                src={`/images/${num}.jpg`}
                onClick={() => setActiveImage(`/images/${num}.jpg`)}
                className="
                  w-full aspect-[3/4]
                  object-cover
                  border border-white/10
                  contrast-95 brightness-95 sepia-[0.1]
                  hover:scale-[1.02]
                  hover:shadow-[0_0_40px_rgba(0,255,150,0.2)]
                  transition duration-500
                  cursor-pointer
                "
              />
            </motion.div>
          ))}
        </div>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="py-6 text-center text-xs text-muted-foreground tracking-widest">
        &copy; {new Date().getFullYear()} INK – NELE HEASLIP. ALL RIGHTS RESERVED.
      </footer>

      {/* ===== IMAGE MODAL ===== */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center cursor-zoom-out"
        >
          <img
            src={activeImage}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
}
