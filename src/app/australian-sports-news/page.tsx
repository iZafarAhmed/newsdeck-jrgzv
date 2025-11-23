import { AustralianSportsNewsClient } from "./_components/australian-sports-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function AustralianSportsNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Australian Sports'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Australian Sports'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <AustralianSportsNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
