import { UkSportsNewsClient } from "./_components/uk-sports-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function UkSportsNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Uk Sports'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Uk Sports'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <UkSportsNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
