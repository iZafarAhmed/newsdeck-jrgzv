import { AgricultureNewsClient } from "./_components/agriculture-news-client";
import { agricultureNewsSources } from "@/data/agriculture-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AgricultureNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <AgricultureNewsClient sources={agricultureNewsSources} />
      </div>
    </div>
  );
}
