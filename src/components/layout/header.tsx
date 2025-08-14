import { Newspaper } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative bg-primary/5 py-10 text-center overflow-hidden">
       <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, hsl(var(--primary) / 0.05), transparent)',
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center items-center gap-4 mb-2 text-primary">
          <Newspaper className="size-12 text-accent" />
          <h1 className="text-5xl font-bold tracking-tight">
            NewsDeck
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mb-6">
          Your curated news destination
        </p>
        <nav className="flex justify-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link href="/all-sources" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">All Sources</Link>
          <Link href="/summarizer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Summarizer</Link>
        </nav>
      </div>
    </header>
  );
}
