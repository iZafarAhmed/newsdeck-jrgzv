import { WrestlingNewsClient } from "./_components/wrestling-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function WrestlingNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Wrestling'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Wrestling'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <WrestlingNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
