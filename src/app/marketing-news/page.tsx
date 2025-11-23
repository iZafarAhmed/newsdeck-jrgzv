import { MarketingNewsClient } from "./_components/marketing-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function MarketingNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Marketing'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Marketing'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <MarketingNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
