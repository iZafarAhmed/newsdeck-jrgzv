import { EuropeanNewsClient } from "./_components/european-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function EuropeanNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'European'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'European'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <EuropeanNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
