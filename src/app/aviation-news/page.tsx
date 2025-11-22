import { AviationNewsClient } from "./_components/aviation-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function AviationNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Aviation'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Aviation'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <AviationNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
