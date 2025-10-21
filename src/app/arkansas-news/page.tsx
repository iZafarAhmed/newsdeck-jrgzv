
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArkansasNewsClient } from "./_components/arkansas-news-client";
import { arkansasNewsSources } from "@/data/arkansas-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ArkansasNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ArkansasNewsClient sources={arkansasNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
