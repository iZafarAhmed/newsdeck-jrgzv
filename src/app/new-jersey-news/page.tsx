import { NewJerseyNewsClient } from "./_components/new-jersey-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function NewJerseyNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'New Jersey'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'New Jersey'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <NewJerseyNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
