import { UtahNewsClient } from "./_components/utah-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function UtahNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Utah'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Utah'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <UtahNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
