import { PuertoRicoNewsClient } from "./_components/puerto-rico-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function PuertoRicoNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Puerto Rico'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Puerto Rico'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <PuertoRicoNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
