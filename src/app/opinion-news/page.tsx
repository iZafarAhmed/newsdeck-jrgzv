
import { OpinionNewsClient } from "./_components/opinion-news-client";
import { opinionNewsSources } from "@/data/opinion-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function OpinionNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <OpinionNewsClient sources={opinionNewsSources} />
      </div>
    </div>
  );
}
