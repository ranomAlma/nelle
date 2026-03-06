import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-black text-foreground overflow-hidden relative">

      {/* Decorative Frame */}
      <div className="fixed inset-4 border border-white/10 pointer-events-none z-50 hidden md:block" />

      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-16 relative z-10">

        {/* ===== HEADER TEXT ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <p className="text-xs tracking-widest text-green-400 mb-4">
            Auszüge aus
          </p>

          <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
            NORDIC MYTHOLOGY
          </h1>

          <div className="w-24 h-px bg-green-400 mx-auto mt-6 opacity-60" />
        </motion.div>

        {/* ===== GALLERY GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:col-span-3 space-y-3"
          >
            <img
              src="/images/128.jpg"
              className="w-full aspect-[3/4] object-cover border border-white/10"
            />
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="md:col-span-6 flex flex-col items-center"
          >
            <div className="relative aspect-[2/3] w-full max-w-lg shadow-2xl">
              <img
                src="/images/125.jpg"
                alt="Allvater"
                className="w-full h-full object-cover border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <p className="mt-4 text-sm tracking-widest opacity-70">
              Allvater
            </p>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-3 space-y-12"
          >
            <div>
              <img
                src="/images/126.jpg"
                className="w-full aspect-[3/4] object-cover border border-white/10"
              />
              <p className="text-xs tracking-widest text-center opacity-70 mt-2">
                Die Befreiung von Idun
              </p>
            </div>

            <div>
              <img
                src="/images/127.jpg"
                className="w-full aspect-[3/4] object-cover border border-white/10"
              />
              <p className="text-xs tracking-widest text-center opacity-70 mt-2">
                Junger Thor und die Blitzgeister
              </p>
            </div>
          </motion.div>

          {/* ===== SECOND ROW ===== */}

          {/* BOTTOM LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:col-span-3 space-y-3"
          >
            <img
              src="/images/129.jpg"
              className="w-full aspect-[3/4] object-cover border border-white/10"
            />
          </motion.div>

          {/* BOTTOM CENTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-6 flex flex-col items-center space-y-4"
          >
            <div className="relative aspect-[3/2] w-full max-w-3xl shadow-2xl">
              <img
                src="/images/130.jpg"
                className="w-full h-full object-cover border border-white/10"
              />
            </div>

            <p className="text-sm tracking-widest opacity-70">
              Der Herr der Zwerge
            </p>
          </motion.div>

          {/* BOTTOM RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-3 space-y-3"
          >
            <img
              src="/images/131.jpg"
              className="w-full aspect-[3/4] object-cover border border-white/10"
            />
            <p className="text-xs tracking-widest text-center opacity-70">
              Loki betrunken
            </p>
          </motion.div>

        </div>
      </main>

      <footer className="py-6 text-center text-xs text-muted-foreground tracking-widest">
        &copy; {new Date().getFullYear()} INK – NELE HEASLIP. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
