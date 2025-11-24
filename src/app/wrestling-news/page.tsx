import { SportsNewsClient } from "../sports-news/_components/sports-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function WrestlingNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.category && source.category.toLowerCase() === 'wrestling')
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <SportsNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
