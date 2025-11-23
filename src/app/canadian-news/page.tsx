import { CanadianNewsClient } from "./_components/canadian-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function CanadianNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Canadian'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Canadian'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <CanadianNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
