
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TexasNewsClient } from "./_components/texas-news-client";
import { texasNewsSources } from "@/data/texas-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function TexasNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <TexasNewsClient sources={texasNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
