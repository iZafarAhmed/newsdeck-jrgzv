import { ChileNewsClient } from "./_components/chile-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function ChileNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Chile'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Chile'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ChileNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
