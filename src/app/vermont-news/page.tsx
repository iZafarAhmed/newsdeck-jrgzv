
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VermontNewsClient } from "./_components/vermont-news-client";
import { vermontNewsSources } from "@/data/vermont-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function VermontNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <VermontNewsClient sources={vermontNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
