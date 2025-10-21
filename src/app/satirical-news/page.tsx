
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SatiricalNewsClient } from "./_components/satirical-news-client";
import { satiricalNewsSources } from "@/data/satirical-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function SatiricalNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <SatiricalNewsClient sources={satiricalNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
