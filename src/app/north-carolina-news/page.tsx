
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NorthCarolinaNewsClient } from "./_components/north-carolina-news-client";
import { northCarolinaNewsSources } from "@/data/north-carolina-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function NorthCarolinaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <NorthCarolinaNewsClient sources={northCarolinaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
