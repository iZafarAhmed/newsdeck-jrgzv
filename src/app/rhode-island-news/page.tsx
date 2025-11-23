import { RhodeIslandNewsClient } from "./_components/rhode-island-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function RhodeIslandNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Rhode Island'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Rhode Island'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <RhodeIslandNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
