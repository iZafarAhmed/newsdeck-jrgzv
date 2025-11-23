import { ParaguayNewsClient } from "./_components/paraguay-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function ParaguayNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Paraguay'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Paraguay'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ParaguayNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
