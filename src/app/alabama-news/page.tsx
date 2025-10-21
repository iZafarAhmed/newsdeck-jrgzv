
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AlabamaNewsClient } from "./_components/alabama-news-client";
import { alabamaNewsSources } from "@/data/alabama-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AlabamaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <AlabamaNewsClient sources={alabamaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
