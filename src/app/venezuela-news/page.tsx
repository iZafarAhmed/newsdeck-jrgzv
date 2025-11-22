import { VenezuelaNewsClient } from "./_components/venezuela-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function VenezuelaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Venezuela'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Venezuela'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <VenezuelaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
