
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScottishNewsClient } from "./_components/scottish-news-client";
import { scottishNewsSources } from "@/data/scottish-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ScottishNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ScottishNewsClient sources={scottishNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
