import { CubaNewsClient } from "./_components/cuba-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function CubaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Cuba'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Cuba'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <CubaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
