import { EnergyNewsClient } from "./_components/energy-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function EnergyNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Energy'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Energy'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <EnergyNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
