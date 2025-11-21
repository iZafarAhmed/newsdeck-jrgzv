
import { NebraskaNewsClient } from "./_components/nebraska-news-client";
import { nebraskaNewsSources } from "@/data/nebraska-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function NebraskaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <NebraskaNewsClient sources={nebraskaNewsSources} />
      </div>
    </div>
  );
}
