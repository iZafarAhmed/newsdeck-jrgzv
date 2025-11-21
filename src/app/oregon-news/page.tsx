
import { OregonNewsClient } from "./_components/oregon-news-client";
import { oregonNewsSources } from "@/data/oregon-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function OregonNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <OregonNewsClient sources={oregonNewsSources} />
      </div>
    </div>
  );
}
