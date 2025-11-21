
import { UnbiasedNewsClient } from "./_components/unbiased-news-client";
import { unbiasedNewsSources } from "@/data/unbiased-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function UnbiasedNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <UnbiasedNewsClient sources={unbiasedNewsSources} />
      </div>
    </div>
  );
}
