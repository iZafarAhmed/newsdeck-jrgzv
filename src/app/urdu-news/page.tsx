
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UrduNewsClient } from "./_components/urdu-news-client";
import { urduNewsSources } from "@/data/urdu-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function UrduNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <UrduNewsClient sources={urduNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
