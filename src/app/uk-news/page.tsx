
import { UKNewsClient } from "./_components/uk-news-client";
import { ukNewsSources } from "@/data/uk-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function UKNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <UKNewsClient sources={ukNewsSources} />
      </div>
    </div>
  );
}
