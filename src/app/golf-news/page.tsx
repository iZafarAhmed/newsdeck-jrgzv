import { GolfNewsClient } from "./_components/golf-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function GolfNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Golf'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Golf'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <GolfNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
