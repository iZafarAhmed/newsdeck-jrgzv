import { WyomingNewsClient } from "./_components/wyoming-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function WyomingNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Wyoming'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Wyoming'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <WyomingNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
