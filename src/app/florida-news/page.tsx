import { FloridaNewsClient } from "./_components/florida-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function FloridaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Florida'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Florida'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <FloridaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
