
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EuropeanNewsClient } from "./_components/european-news-client";
import { europeanNewsSources } from "@/data/european-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function EuropeanNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <EuropeanNewsClient sources={europeanNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
