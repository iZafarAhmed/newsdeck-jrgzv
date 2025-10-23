
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SouthCarolinaNewsClient } from "./_components/south-carolina-news-client";
import { southCarolinaNewsSources } from "@/data/south-carolina-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function SouthCarolinaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <SouthCarolinaNewsClient sources={southCarolinaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
