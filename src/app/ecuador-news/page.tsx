
import { EcuadorNewsClient } from "./_components/ecuador-news-client";
import { ecuadorNewsSources } from "@/data/ecuador-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function EcuadorNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <EcuadorNewsClient sources={ecuadorNewsSources} />
      </div>
    </div>
  );
}
