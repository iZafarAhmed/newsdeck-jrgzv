
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SpanishNewsClient } from "./_components/spanish-news-client";
import { spanishNewsSources } from "@/data/spanish-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function SpanishNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <SpanishNewsClient sources={spanishNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
