
import { HaitiNewsClient } from "./_components/haiti-news-client";
import { haitiNewsSources } from "@/data/haiti-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function HaitiNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <HaitiNewsClient sources={haitiNewsSources} />
      </div>
    </div>
  );
}
