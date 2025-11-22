import { MusicNewsClient } from "./_components/music-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function MusicNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Music'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Music'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <MusicNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
