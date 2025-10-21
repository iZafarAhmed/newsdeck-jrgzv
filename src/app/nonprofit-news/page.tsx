
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NonprofitNewsClient } from "./_components/nonprofit-news-client";
import { nonprofitNewsSources } from "@/data/nonprofit-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function NonprofitNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <NonprofitNewsClient sources={nonprofitNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
