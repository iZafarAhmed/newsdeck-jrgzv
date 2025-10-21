
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CaribbeanNewsClient } from "./_components/caribbean-news-client";
import { caribbeanNewsSources } from "@/data/caribbean-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CaribbeanNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <CaribbeanNewsClient sources={caribbeanNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
