import { VermontNewsClient } from "./_components/vermont-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function VermontNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Vermont'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Vermont'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <VermontNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
