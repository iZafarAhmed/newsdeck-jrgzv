import { WisconsinNewsClient } from "./_components/wisconsin-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function WisconsinNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Wisconsin'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Wisconsin'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <WisconsinNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
