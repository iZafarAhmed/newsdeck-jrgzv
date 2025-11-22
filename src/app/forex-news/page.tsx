import { ForexNewsClient } from "./_components/forex-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function ForexNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Forex'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Forex'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ForexNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
