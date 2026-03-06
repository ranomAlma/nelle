import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden relative">
      {/* Decorative border frame */}
      <div className="fixed inset-4 border border-white/10 pointer-events-none z-50 hidden md:block" />
      
      <Navbar />

      <main className="flex-grow container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 py-12 relative z-10">
        
        {/* Text Content - Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:space-y-12 max-w-md"
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl tracking-[0.3em] font-sans font-light text-muted-foreground">
              WELCOME TO
            </h2>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-widest text-glow">
            INK
          </h1>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl tracking-[0.2em] font-serif font-bold">
              NELE HEASLIP
            </h2>
          </div>
          
          <div className="pt-12 md:pt-24">
             <p className="font-script text-2xl md:text-3xl text-primary opacity-90 rotate-[-5deg]">
              Auszüge aus NORDIC MYTHOLOGY
            </p>
          </div>
        </motion.div>

        {/* Image Content - Right Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative w-full max-w-md md:max-w-lg aspect-[2/3] shadow-2xl"
        >
          <div className="absolute inset-0 bg-primary/5 transform translate-x-2 translate-y-2 -z-10" />
          <img 
            src="/images/nordic-mythology.jpg" 
            alt="Illustration of Valhalla from Nordic Mythology" 
            className="w-full h-full object-cover border border-white/5"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </motion.div>

      </main>
      
      <footer className="py-6 text-center text-xs text-muted-foreground tracking-widest space-y-2">
        <div className="opacity-50">
          &copy; {new Date().getFullYear()} INK - NELE HEASLIP. ALL RIGHTS RESERVED.
        </div>
        <div className="opacity-70">
          <a href="tel:+491234567890" className="hover:text-primary transition-colors duration-300">
            +49 (0) 123 456789
          </a>
        </div>
      </footer>
    </div>
  );
}
