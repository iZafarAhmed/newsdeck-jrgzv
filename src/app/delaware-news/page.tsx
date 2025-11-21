
import { DelawareNewsClient } from "./_components/delaware-news-client";
import { delawareNewsSources } from "@/data/delaware-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function DelawareNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <DelawareNewsClient sources={delawareNewsSources} />
      </div>
    </div>
  );
}
