import { SpanishNewsClient } from "./_components/spanish-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function SpanishNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Spanish'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Spanish'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <SpanishNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
