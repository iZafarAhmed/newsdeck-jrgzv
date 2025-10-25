
import { spanishNewsSources } from "@/data/spanish-news-sources";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NewsSourceCard } from "@/components/news-source-card";

export default function SpanishNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight">
                Spanish News Websites
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
                A collection of popular news sources from Spain.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {spanishNewsSources.map((source) => (
            <NewsSourceCard key={source.name} source={source} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
