import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  "/images/107.jpg",
  "/images/105.jpg",
  "/images/106.jpg",
  "/images/103.jpg",
  "/images/109.jpg",
  "/images/110.jpg",
  "/images/111.jpg",
  "/images/112.jpg",
  "/images/113.jpg",
  "/images/114.jpg",
  "/images/115.jpg",
  "/images/116.jpg",
  "/images/118.jpg",
  "/images/119.jpg",
  "/images/120.jpg",
  "/images/121.jpg",
  "/images/122.jpg" ,
  "/images/123.jpg" ,
  "/images/124.jpg" ,
];


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};






export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
              „Tinte ist ein ganz besonderer Saft...“
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
            src="/images/101.jpg" 
            alt="Dark atmospheric boat scene illustration" 
            className="w-full h-full object-cover border border-white/5"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </motion.div>

      </main>

      

{/* Gallery Section */}
<section className="container mx-auto px-4 py-32 relative z-10">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-3xl md:text-4xl font-serif tracking-widest text-center mb-20"
  >
    Watercolour
  </motion.h2>

 <div className="columns-2 md:columns-3 gap-6 md:gap-10 space-y-6">

   {galleryImages.map((img, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.05 }}
    className="relative group cursor-pointer overflow-hidden break-inside-avoid"
    onClick={() => setActiveImage(img)}
  >
    <motion.img
      src={img}
      alt={`Gallery artwork ${index + 1}`}
      loading="lazy"
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.6 }}
      className="w-full mb-6 object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
))}

  </div>

  {/* Lightbox */}
{activeImage && (
  <div
    className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6 cursor-pointer"
    onClick={() => setActiveImage(null)}
  >
    <motion.img
      src={activeImage}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-h-[90vh] max-w-[90vw] object-contain border border-white/10"
    />
  </div>
)}

</section>
      

      
      
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
