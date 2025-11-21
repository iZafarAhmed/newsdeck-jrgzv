
import { SpaceNewsClient } from "./_components/space-news-client";
import { spaceNewsSources } from "@/data/space-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function SpaceNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <SpaceNewsClient sources={spaceNewsSources} />
      </div>
    </div>
  );
}
