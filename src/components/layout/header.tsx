
import { Newspaper } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from '../theme-switcher';

export function Header() {
  return (
    <header className="relative text-center overflow-hidden border-b">
       <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, hsl(var(--primary) / 0.05), transparent)',
        }}
      />
      <div className="container mx-auto px-4 relative py-6">
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
          <Link href="/all-sources" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">World News</Link>
          <Link href="/top-100" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">USA News</Link>
          <Link href="/business-news" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Business News</Link>
          <Link href="/tech-news" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Tech News</Link>
          <Link href="/crypto-news" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Crypto News</Link>
        </nav>
      </div>
    </header>
  );
}
