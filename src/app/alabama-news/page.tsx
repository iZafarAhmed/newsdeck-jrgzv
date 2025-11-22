import { AlabamaNewsClient } from "./_components/alabama-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function AlabamaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Alabama'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Alabama'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <AlabamaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
