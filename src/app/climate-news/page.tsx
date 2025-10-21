
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ClimateNewsClient } from "./_components/climate-news-client";
import { climateNewsSources } from "@/data/climate-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ClimateNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ClimateNewsClient sources={climateNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
