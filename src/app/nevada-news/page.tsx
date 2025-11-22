import { NevadaNewsClient } from "./_components/nevada-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function NevadaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Nevada'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Nevada'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <NevadaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
