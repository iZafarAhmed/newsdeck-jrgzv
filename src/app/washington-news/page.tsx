import { WashingtonNewsClient } from "./_components/washington-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function WashingtonNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Washington'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Washington'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <WashingtonNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
