
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RhodeIslandNewsClient } from "./_components/rhode-island-news-client";
import { rhodeIslandNewsSources } from "@/data/rhode-island-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function RhodeIslandNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <RhodeIslandNewsClient sources={rhodeIslandNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
