
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MarketingNewsClient } from "./_components/marketing-news-client";
import { marketingNewsSources } from "@/data/marketing-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MarketingNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MarketingNewsClient sources={marketingNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
