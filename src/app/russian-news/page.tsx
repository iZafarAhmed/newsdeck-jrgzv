import { RussianNewsClient } from "./_components/russian-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function RussianNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Russian'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Russian'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <RussianNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
