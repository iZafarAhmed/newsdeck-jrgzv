import { ArizonaNewsClient } from "./_components/arizona-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function ArizonaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Arizona'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Arizona'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ArizonaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
