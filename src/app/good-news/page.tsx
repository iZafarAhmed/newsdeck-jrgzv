
import { GoodNewsClient } from "./_components/good-news-client";
import { goodNewsSources } from "@/data/good-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function GoodNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <GoodNewsClient sources={goodNewsSources} />
      </div>
    </div>
  );
}
