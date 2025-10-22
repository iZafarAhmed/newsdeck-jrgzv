
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MarylandNewsClient } from "./_components/maryland-news-client";
import { marylandNewsSources } from "@/data/maryland-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MarylandNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MarylandNewsClient sources={marylandNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
