import { IllinoisNewsClient } from "./_components/illinois-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function IllinoisNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Illinois'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Illinois'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <IllinoisNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
