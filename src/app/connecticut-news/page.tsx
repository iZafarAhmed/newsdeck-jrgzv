import { ConnecticutNewsClient } from "./_components/connecticut-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function ConnecticutNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Connecticut'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Connecticut'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ConnecticutNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
