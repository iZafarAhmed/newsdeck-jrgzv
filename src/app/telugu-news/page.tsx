
import { TeluguNewsClient } from "./_components/telugu-news-client";
import { teluguNewsSources } from "@/data/telugu-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function TeluguNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <TeluguNewsClient sources={teluguNewsSources} />
      </div>
    </div>
  );
}
