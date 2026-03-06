import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Dark Waters",
    category: "Illustration",
    description: "A moody illustration exploring themes of depth and mystery",
    image: "/images/hero-art.png",
  },
  {
    id: 2,
    title: "Midnight Dreams",
    category: "Watercolour",
    description: "Ethereal watercolour piece capturing nocturnal atmosphere",
    image: "/images/hero-art.png",
  },
  {
    id: 3,
    title: "Sacred Geometry",
    category: "Graphic Novel",
    description: "Intricate geometric patterns in a narrative sequence",
    image: "/images/hero-art.png",
  },
  {
    id: 4,
    title: "Ink Whispers",
    category: "Mix",
    description: "Mixed media exploration of ink and light interplay",
    image: "/images/hero-art.png",
  },
  {
    id: 5,
    title: "Reflections",
    category: "Watercolour",
    description: "Delicate watercolour capturing moments of introspection",
    image: "/images/hero-art.png",
  },
  {
    id: 6,
    title: "Narrative Flow",
    category: "Graphic Novel",
    description: "Sequential art telling a compelling visual story",
    image: "/images/hero-art.png",
  },
];

const categories = ["All", "Illustration", "Watercolour", "Graphic Novel", "Mix"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden relative">
      {/* Decorative border frame */}
      <div className="fixed inset-4 border border-white/10 pointer-events-none z-50 hidden md:block" />

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif tracking-widest mb-4 text-glow">
            GALLERY
          </h1>
          <p className="text-muted-foreground tracking-widest text-sm md:text-base">
            EXPLORE THE ARTISTIC WORKS AND CREATIONS
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-3 tracking-widest text-xs md:text-sm transition-all duration-300 border ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-white/10 text-muted-foreground hover:text-foreground hover:border-white/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-2">
                  <p className="text-xs md:text-sm tracking-widest text-primary uppercase">
                    {item.category}
                  </p>
                  <h3 className="text-lg md:text-xl font-serif tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No works found in this category
            </p>
          </motion.div>
        )}
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
