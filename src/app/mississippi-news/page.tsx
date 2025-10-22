
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MississippiNewsClient } from "./_components/mississippi-news-client";
import { mississippiNewsSources } from "@/data/mississippi-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MississippiNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MississippiNewsClient sources={mississippiNewsSources} />
      </div>
      <Footer />
    </div>
  );
}

    