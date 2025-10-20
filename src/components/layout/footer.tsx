
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeSwitcher } from '../theme-switcher';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear ? currentYear : ''} NewsDeck. Your trusted news aggregator.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
