import { Newspaper } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-10 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center items-center gap-4 mb-2">
          <Newspaper className="size-12 text-accent" />
          <h1 className="text-5xl font-bold tracking-tight">
            NewsDeck
          </h1>
        </div>
        <p className="text-lg text-primary-foreground/80 mb-6">
          Your curated news destination
        </p>
        <nav className="flex justify-center gap-6">
          <Link href="/" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link>
          <Link href="/all-sources" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">All Sources</Link>
        </nav>
      </div>
    </header>
  );
}
