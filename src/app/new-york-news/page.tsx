
import { NewYorkNewsClient } from "./_components/new-york-news-client";
import { newYorkNewsSources } from "@/data/new-york-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function NewYorkNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <NewYorkNewsClient sources={newYorkNewsSources} />
      </div>
    </div>
  );
}
