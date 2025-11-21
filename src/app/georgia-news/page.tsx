
import { GeorgiaNewsClient } from "./_components/georgia-news-client";
import { georgiaNewsSources } from "@/data/georgia-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function GeorgiaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <GeorgiaNewsClient sources={georgiaNewsSources} />
      </div>
    </div>
  );
}
