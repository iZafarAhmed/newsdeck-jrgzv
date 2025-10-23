
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WyomingNewsClient } from "./_components/wyoming-news-client";
import { wyomingNewsSources } from "@/data/wyoming-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function WyomingNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <WyomingNewsClient sources={wyomingNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
