import { ConservativeNewsClient } from "./_components/conservative-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function ConservativeNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Conservative'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Conservative'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ConservativeNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
