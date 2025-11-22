import { IdahoNewsClient } from "./_components/idaho-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function IdahoNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Idaho'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Idaho'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <IdahoNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
