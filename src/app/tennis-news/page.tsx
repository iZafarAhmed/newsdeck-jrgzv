import { TennisNewsClient } from "./_components/tennis-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function TennisNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Tennis'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Tennis'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <TennisNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
