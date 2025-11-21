
import { VirginiaNewsClient } from "./_components/virginia-news-client";
import { virginiaNewsSources } from "@/data/virginia-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function VirginiaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <VirginiaNewsClient sources={virginiaNewsSources} />
      </div>
    </div>
  );
}
