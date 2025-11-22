import { PeruNewsClient } from "./_components/peru-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function PeruNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Peru'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Peru'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <PeruNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
