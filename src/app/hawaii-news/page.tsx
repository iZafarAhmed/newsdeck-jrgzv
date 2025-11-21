
import { HawaiiNewsClient } from "./_components/hawaii-news-client";
import { hawaiiNewsSources } from "@/data/hawaii-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function HawaiiNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <HawaiiNewsClient sources={hawaiiNewsSources} />
      </div>
    </div>
  );
}
