
import { BusinessNewsClient } from "./_components/business-news-client";
import { businessNewsSources } from "@/data/business-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function BusinessNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <BusinessNewsClient sources={businessNewsSources} />
      </div>
    </div>
  );
}
