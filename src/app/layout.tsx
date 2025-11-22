import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Newslisted  - Breaking News',
  description: 'Newslisted is your one-stop for the latest news from around the world. We bring you news from a variety of sources, categorized for your convenience. Filter by category, search for your favorite sources, and get smart article suggestions.',
  keywords: ['news', 'world news', 'tech news', 'business news', 'sports news', 'crypto news', 'latest news'],
  openGraph: {
    title: 'Newslisted - Breaking News',
    description: 'Latest news from around the world.',
    url: 'https://newslisted.com',
    siteName: 'Newslisted - Breaking News',
    images: [
      {
        url: 'https://newslisted.com/og-image.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newslisted',
    description: 'Latest news from around the world.',
    creator: '@your_twitter_handle', 
    images: ['https://newslisted.com/og-image.png'],
  },
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-white dark:bg-background">
            <Header />
            <div className="flex-grow">
              <main>{children}</main>
            </div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
