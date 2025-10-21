
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CanadianNewsClient } from "./_components/canadian-news-client";
import { canadianNewsSources } from "@/data/canadian-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CanadianNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <CanadianNewsClient sources={canadianNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
