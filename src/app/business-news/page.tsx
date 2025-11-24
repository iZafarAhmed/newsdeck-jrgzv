
import { BusinessNewsClient } from "./_components/business-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function BusinessNewsPage() {
  // Filter sources by category
  const sources = allNewsSites.filter(source => 
    source.category && source.category.toLowerCase() === 'business'
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <BusinessNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
