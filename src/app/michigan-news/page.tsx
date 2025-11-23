import { MichiganNewsClient } from "./_components/michigan-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function MichiganNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Michigan'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Michigan'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <MichiganNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
