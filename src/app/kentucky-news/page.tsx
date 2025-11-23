import { KentuckyNewsClient } from "./_components/kentucky-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function KentuckyNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Kentucky'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Kentucky'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <KentuckyNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
