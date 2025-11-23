import { MaineNewsClient } from "./_components/maine-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function MaineNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Maine'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Maine'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <MaineNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
