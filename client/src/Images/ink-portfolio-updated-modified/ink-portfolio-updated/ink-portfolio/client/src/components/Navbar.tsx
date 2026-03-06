import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Index-a", path: "/index-a" },
  { name: "Watercolour", path: "/watercolour" },
  { name: "Illustration", path: "/illustration" },
  { name: "Graphic Novel", path: "/graphic-novel" },
  { name: "The Sacred Clown", path: "/sacred-clown" },
  { name: "Mix", path: "/mix" },
  { name: "Impressum", path: "/impressum" },
];

const contactPhone = "+49 (0) 123 456789";

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="w-full py-6 md:py-8 z-50 relative">
      <div className="container mx-auto">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8 mb-4">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={cn(
                  "nav-link",
                  location === item.path && "text-foreground after:w-full"
                )}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        
        {/* Contact Phone */}
        <div className="flex justify-center mb-4">
          <a
            href={`tel:${contactPhone.replace(/[\s()+-]/g, '')}`}
            className="text-xs md:text-sm tracking-widest text-primary hover:text-primary/80 transition-colors duration-300 font-sans"
          >
            {contactPhone}
          </a>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent mt-4 opacity-30" />
    </nav>
  );
}
