import { ArkansasNewsClient } from "./_components/arkansas-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function ArkansasNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Arkansas'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Arkansas'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ArkansasNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
