import { EcuadorNewsClient } from "./_components/ecuador-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function EcuadorNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Ecuador'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Ecuador'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <EcuadorNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
