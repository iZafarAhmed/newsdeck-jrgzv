
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DelawareNewsClient } from "./_components/delaware-news-client";
import { delawareNewsSources } from "@/data/delaware-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function DelawareNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <DelawareNewsClient sources={delawareNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
