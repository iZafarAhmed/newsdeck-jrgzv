import { Newspaper } from "lucide-react";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-16 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center items-center gap-4 mb-2">
          <Newspaper className="size-12 text-accent" />
          <h1 className="text-5xl font-bold tracking-tight">
            NewsDeck
          </h1>
        </div>
        <p className="text-lg text-primary-foreground/80">
          Your curated news destination
        </p>
      </div>
    </header>
  );
}
