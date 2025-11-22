import { HindiNewsClient } from "./_components/hindi-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function HindiNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Hindi'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Hindi'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <HindiNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
