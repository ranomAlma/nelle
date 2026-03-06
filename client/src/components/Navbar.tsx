import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "NORDIC MYTHOLOGY", path: "/NORDICMYTHOLOGY" },
  { name: "WalterMoers", path: "/WalterMoers" },
  { name: "MÄRCHEN", path: "/MÄRCHEN" },
  { name: "FAUST", path: "/FAUST" },
  { name: "Mix", path: "/mix" },
  { name: "Impressum", path: "/impressum" },
];

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="w-full py-6 md:py-8 z-50 relative">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8 mb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "nav-link",
                location === item.path && "text-foreground after:w-full"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent mt-4 opacity-30" />
    </nav>
  );
}