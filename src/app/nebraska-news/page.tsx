import { NebraskaNewsClient } from "./_components/nebraska-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function NebraskaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Nebraska'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Nebraska'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <NebraskaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
