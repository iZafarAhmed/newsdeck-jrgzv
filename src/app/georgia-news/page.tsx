import { GeorgiaNewsClient } from "./_components/georgia-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function GeorgiaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Georgia'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Georgia'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <GeorgiaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
