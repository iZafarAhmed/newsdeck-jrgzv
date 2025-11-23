import { UkNewsClient } from "./_components/uk-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function UkNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'UK'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'UK'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <UkNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
