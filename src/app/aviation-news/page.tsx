
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AviationNewsClient } from "./_components/aviation-news-client";
import { aviationNewsSources } from "@/data/aviation-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AviationNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <AviationNewsClient sources={aviationNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
