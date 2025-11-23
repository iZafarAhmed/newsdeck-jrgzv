import { AgricultureNewsClient } from "./_components/agriculture-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function AgricultureNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Agriculture'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Agriculture'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <AgricultureNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
