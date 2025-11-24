"use client";

import Link from 'next/link';
import { ThemeSwitcher } from '../theme-switcher';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Newslisted. latest news from around the world. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
