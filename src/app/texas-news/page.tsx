
import { TexasNewsClient } from "./_components/texas-news-client";
import { texasNewsSources } from "@/data/texas-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function TexasNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <TexasNewsClient sources={texasNewsSources} />
      </div>
    </div>
  );
}
