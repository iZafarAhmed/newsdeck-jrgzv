
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EuropeanNewsClient } from "../european-news/_components/european-news-client";
import { germanNewsSources } from "@/data/german-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function GermanNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <EuropeanNewsClient sources={germanNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
