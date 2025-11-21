
import { ItalianNewsClient } from "./_components/italian-news-client";
import { italianNewsSources } from "@/data/italian-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ItalianNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ItalianNewsClient sources={italianNewsSources} />
      </div>
    </div>
  );
}
