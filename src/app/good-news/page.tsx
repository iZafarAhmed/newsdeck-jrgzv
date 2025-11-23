import { GoodNewsClient } from "./_components/good-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function GoodNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Good'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Good'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <GoodNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
