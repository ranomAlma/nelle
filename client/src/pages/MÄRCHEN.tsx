import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Maerchen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000] text-foreground relative">

      {/* Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.08] mix-blend-overlay">
        <div className="w-full h-full bg-[url('/grain.png')] bg-repeat" />
      </div>

      {/* Decorative Frame */}
      <div className="fixed inset-4 border border-white/10 pointer-events-none z-50 hidden md:block" />

      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-20 relative z-10">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-28"
        >
          <p className="text-xs tracking-widest text-green-400 mb-4">
            Auszüge aus
          </p>

          <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
            MÄRCHEN
          </h1>

          <div className="w-24 h-px bg-green-400 mx-auto mt-6 opacity-60" />
        </motion.div>
{/* ===== IMAGE GRID (SCROLL BOOK OPEN) ===== */}
<div className="space-y-48">

  {[
    ["143", "144", "145"],
    ["148", "147", "146"],
    ["149", "150", "151"],
    ["152", "153", "154"],
  ].map((row, rowIndex) => (
    <div
      key={rowIndex}
      className="grid grid-cols-1 md:grid-cols-3 gap-20 items-end perspective-[1600px]"
    >
      {row.map((img, i) => {
        const isLeft = i === 0;
        const isCenter = i === 1;
        const isRight = i === 2;

        return (
          <motion.img
            key={img}
            src={`/images/${img}.jpg`}
            className={`
              w-full mx-auto aspect-[3/4] object-cover
              border border-white/10 bg-white
              transform-gpu
              ${isCenter
                ? "max-w-[340px] shadow-[0_40px_120px_rgba(0,0,0,0.8)] z-10"
                : "max-w-[240px] shadow-2xl"}
            `}
            initial={{
              opacity: 0,
              rotateY: isLeft ? -55 : isRight ? 55 : 0,
              rotate: isLeft ? -8 : isRight ? 8 : 0,
            }}
            whileInView={{
              opacity: 1,
              rotateY: 0,
              rotate: 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1], // cinematic ease
              delay: isCenter ? 0.1 : 0,
            }}
            viewport={{ once: true, margin: "-100px" }}
          />
        );
      })}
    </div>
  ))}

</div>



      </main>

      <footer className="py-6 text-center text-xs text-muted-foreground tracking-widest">
        &copy; {new Date().getFullYear()} INK – NELE HEASLIP. ALL RIGHTS RESERVED.
      </footer>

    </div>
  );
}
