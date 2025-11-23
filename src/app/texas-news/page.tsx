import { TexasNewsClient } from "./_components/texas-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function TexasNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Texas'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Texas'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <TexasNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
