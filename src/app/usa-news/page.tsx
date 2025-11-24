
import { UsaNewsClient } from "./_components/usa-news-client";
import { top100NewsData } from "@/data/top-100-news";

export const revalidate = 3600; // Revalidate every hour

export default function UsaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <UsaNewsClient sources={top100NewsData} />
      </div>
    </div>
  );
}
