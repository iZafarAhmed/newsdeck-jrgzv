import { ArtNewsClient } from "./_components/art-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function ArtNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Art'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Art'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ArtNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
