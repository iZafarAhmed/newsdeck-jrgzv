import { MontanaNewsClient } from "./_components/montana-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function MontanaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Montana'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Montana'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <MontanaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
