import { ArgentinaNewsClient } from "./_components/argentina-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function ArgentinaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Argentina'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Argentina'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ArgentinaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
