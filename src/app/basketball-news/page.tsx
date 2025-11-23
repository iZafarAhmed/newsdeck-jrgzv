import { BasketballNewsClient } from "./_components/basketball-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function BasketballNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Basketball'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Basketball'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <BasketballNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
