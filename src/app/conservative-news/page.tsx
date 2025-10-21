
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ConservativeNewsClient } from "./_components/conservative-news-client";
import { conservativeNewsSources } from "@/data/conservative-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ConservativeNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ConservativeNewsClient sources={conservativeNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
