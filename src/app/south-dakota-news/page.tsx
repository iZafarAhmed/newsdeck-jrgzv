import { SouthDakotaNewsClient } from "./_components/south-dakota-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function SouthDakotaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'South Dakota'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'South Dakota'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <SouthDakotaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
