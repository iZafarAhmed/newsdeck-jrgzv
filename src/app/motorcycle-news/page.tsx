import { MotorcycleNewsClient } from "./_components/motorcycle-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function MotorcycleNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Motorcycle'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Motorcycle'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <MotorcycleNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
