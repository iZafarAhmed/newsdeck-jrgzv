
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FinlandNewsClient } from "./_components/finland-news-client";
import { finlandNewsSources } from "@/data/finland-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function FinlandNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <FinlandNewsClient sources={finlandNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
