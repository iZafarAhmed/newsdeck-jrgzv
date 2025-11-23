import { FinlandNewsClient } from "./_components/finland-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function FinlandNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Finland'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Finland'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <FinlandNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
