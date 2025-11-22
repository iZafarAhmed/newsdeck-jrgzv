import { MexicanNewsClient } from "./_components/mexican-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function MexicanNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Mexican'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Mexican'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <MexicanNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
