import { LouisianaNewsClient } from "./_components/louisiana-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function LouisianaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Louisiana'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Louisiana'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <LouisianaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
