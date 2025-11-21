
import { KansasNewsClient } from "./_components/kansas-news-client";
import { kansasNewsSources } from "@/data/kansas-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function KansasNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <KansasNewsClient sources={kansasNewsSources} />
      </div>
    </div>
  );
}
