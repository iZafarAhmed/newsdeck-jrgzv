import { CaliforniaNewsClient } from "./_components/california-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function CaliforniaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'California'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'California'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <CaliforniaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
