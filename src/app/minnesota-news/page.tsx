
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MinnesotaNewsClient } from "./_components/minnesota-news-client";
import { minnesotaNewsSources } from "@/data/minnesota-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MinnesotaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MinnesotaNewsClient sources={minnesotaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
