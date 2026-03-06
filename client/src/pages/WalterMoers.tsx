import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-black text-foreground overflow-hidden relative">
 {/* Grain Overlay */}
    <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.08] mix-blend-overlay">
      <div className="w-full h-full bg-[url('/grain.png')] bg-repeat" />
    </div>
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
            Walter Moers

          </h1>

          <div className="w-24 h-px bg-green-400 mx-auto mt-6 opacity-60" />
        </motion.div>
        
{/* ===== BOOK LAYOUT ===== */}
<div className="space-y-40">

  {/* ===== PAGE 1 ===== */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="md:col-span-3"
    >
      <img
        src="/images/132.jpg"
         onClick={() => setActiveImage("/images/132.jpg")}
        className="w-full object-cover border border-white/10
  contrast-95
  saturate-90
  brightness-95"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="md:col-span-6"
    >
      <img
        src="/images/133.jpg"
        className="w-full aspect-[2/3] object-cover border border-white/10 shadow-2xl"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="md:col-span-3"
    >
      <img
        src="/images/136.jpg"
        className="w-full aspect-[3/4] object-cover border border-white/10"
      />
    </motion.div>

  </div>

  {/* ===== PAGE 2 ===== */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="flex justify-center"
  >
    <img
      src="/images/137.jpg"
      className="w-full max-w-4xl aspect-[3/2] object-cover border border-white/10 shadow-2xl"
    />
  </motion.div>

  {/* ===== PAGE 3 ===== */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

    {["134", "135", "139"].map((img, i) => (
      <motion.div
        key={img}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: i * 0.2 }}
      >
        <img
          src={`/images/${img}.jpg`}
          className="w-full aspect-[3/4] object-cover border border-white/10"
        />
      </motion.div>
    ))}

  </div>

  {/* ===== PAGE 4 ===== */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

    {["140", "141", "142"].map((img, i) => (
      <motion.div
        key={img}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: i * 0.2 }}
      >
        <img
          src={`/images/${img}.jpg`}
          className="w-full aspect-[3/4] object-cover border border-white/10"
        />
      </motion.div>
    ))}

  </div>

</div>

      </main>

      <footer className="py-6 text-center text-xs text-muted-foreground tracking-widest">
        &copy; {new Date().getFullYear()} INK – NELE HEASLIP. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
