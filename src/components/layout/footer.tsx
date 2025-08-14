import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} NewsDeck. Your trusted news aggregator.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
