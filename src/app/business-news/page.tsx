import { BusinessNewsClient } from "./_components/business-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function BusinessNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Business'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Business'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <BusinessNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
