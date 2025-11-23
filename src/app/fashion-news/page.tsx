import { FashionNewsClient } from "./_components/fashion-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function FashionNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Fashion'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Fashion'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <FashionNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
