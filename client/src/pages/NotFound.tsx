import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="max-w-md w-full text-center space-y-6 border border-white/10 p-12 bg-black/50 backdrop-blur-sm">
        <div className="flex justify-center">
          <AlertCircle className="h-16 w-16 text-primary opacity-80" />
        </div>

        <h1 className="text-6xl font-serif tracking-widest text-glow">404</h1>

        <h2 className="text-xl font-sans tracking-widest uppercase text-muted-foreground">
          Page Not Found
        </h2>

        <p className="font-serif text-lg opacity-70 italic">
          "Lost in the ink..."
        </p>

        <div className="pt-8">
          <Link href="/">
            <a className="inline-block px-8 py-3 border border-white/20 hover:border-primary hover:text-primary transition-all duration-300 tracking-widest text-sm uppercase">
              Return Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
