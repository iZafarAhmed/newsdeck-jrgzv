
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChileNewsClient } from "./_components/chile-news-client";
import { chileNewsSources } from "@/data/chile-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ChileNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ChileNewsClient sources={chileNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
