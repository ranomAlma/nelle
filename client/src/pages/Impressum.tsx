import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Maerchen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000] text-foreground relative">

    
      {/* Decorative Frame */}
      <div className="fixed inset-4 border border-white/10 pointer-events-none z-50 hidden md:block" />

      <Navbar />
<main className="flex-1 flex justify-center pt-16 px-6">
  <div className="w-full max-w-2xl">
   <div
  className="
    bg-white/3
    backdrop-blur-sm
    border border-white/5
    rounded-none
    px-10 py-8
    text-sm
    text-white/80
    tracking-wide
  "
>

      <h2 className="mb-4 font-serif italic underline">
  Impressum
</h2>

      <p className="mb-2 text-red-700/80">
  Verantwortliche Personen
</p>


    <p className="mb-2 text-red-700/80">
  Text und Bild : <span className="text-white/95 font-medium">Nele Heaslip</span>
</p>



      <p className="mb-2 text-red-700/80">
        Gestaltung und Umsetzung : <span className="text-white/95 font-medium">Ranim Almasri</span>
      </p>

      <p className="mb-4 leading-relaxed">
        Alle Rechte liegen bei Nele Heaslip. Kopieren und Weiterverwendung des
        Text- und Bildmaterials dieser Website ist ohne vorherige Genehmigung
        untersagt.
      </p>

   <p className="mb-2 flex items-center gap-2">
  <span className="text-red-700/80">
    Kontakt:
  </span>

  <a
    href="mailto:nele-heaslip@web.de"
    className="text-white/95 underline hover:text-white"
  >
    nele-heaslip@web.de
  </a>
</p>

    </div>
  </div>
</main>




      

      <footer className="py-6 text-center text-xs text-muted-foreground tracking-widest">
        &copy; {new Date().getFullYear()} INK – NELE HEASLIP. ALL RIGHTS RESERVED.
      </footer>

    </div>
  );
}
