
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NevadaNewsClient } from "./_components/nevada-news-client";
import { nevadaNewsSources } from "@/data/nevada-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function NevadaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <NevadaNewsClient sources={nevadaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
