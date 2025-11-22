import { SatiricalNewsClient } from "./_components/satirical-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function SatiricalNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Satirical'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Satirical'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <SatiricalNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
