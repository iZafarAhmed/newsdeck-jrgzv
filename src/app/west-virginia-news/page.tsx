import { WestVirginiaNewsClient } from "./_components/west-virginia-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function WestVirginiaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'West Virginia'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'West Virginia'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <WestVirginiaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
