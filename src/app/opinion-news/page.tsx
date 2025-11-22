import { OpinionNewsClient } from "./_components/opinion-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function OpinionNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Opinion'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Opinion'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <OpinionNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
