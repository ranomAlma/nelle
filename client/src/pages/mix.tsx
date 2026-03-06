import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Maerchen() {

  // توليد الصور من 188 إلى 199
  const images = Array.from({ length: 12 }, (_, i) => 188 + i);

  // تقسيمهم كل 3 صور بسطر
  const rows = [];
  for (let i = 0; i < images.length; i += 3) {
    rows.push(images.slice(i, i + 3));
  }

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
        
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
            Mix
          </h1>

          <div className="w-24 h-px bg-green-400 mx-auto mt-6 opacity-60" />
        </motion.div>

        {/* ===== IMAGE GRID (SCROLL BOOK OPEN) ===== */}
        <div className="space-y-48">

          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-3 gap-20 items-end perspective-[1600px]"
            >
              {row.map((num, i) => {
                const isLeft = i === 0;
                const isCenter = i === 1;
                const isRight = i === 2;

                return (
                  <motion.img
                    key={num}
                    src={`/images/${num}.jpg`}
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
                      ease: [0.22, 1, 0.36, 1],
                      delay: isCenter ? 0.1 : 0,
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                  />
                );
              })}
            </div>
            
          ))}

        </div>
<blockquote className="text-lg md:text-xl font-serif italic leading-relaxed text-white/80">
    “His fears had been ever since<br />
    growing upon him.<br /><br />
    He had been trying to fancy them<br />
    causeless,<br />
    but could not.”
  </blockquote>

  <p className="mt-6 text-xs tracking-widest text-green-400">
    — E. A. Poe, <span className="italic">The Tell-Tale Heart</span>
  </p>
      </main>

      <footer className="py-6 text-center text-xs text-muted-foreground tracking-widest">
        &copy; {new Date().getFullYear()} INK – NELE HEASLIP. ALL RIGHTS RESERVED.
      </footer>

    </div>
  );
}
