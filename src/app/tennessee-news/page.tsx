import { TennesseeNewsClient } from "./_components/tennessee-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function TennesseeNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Tennessee'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Tennessee'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <TennesseeNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
