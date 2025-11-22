import { IrishNewsClient } from "./_components/irish-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function IrishNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Irish'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Irish'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <IrishNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
